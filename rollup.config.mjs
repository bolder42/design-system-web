import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";

const external = ["react", "react-dom", "react/jsx-runtime"];

const sharedPlugins = (outDir) => [
    resolve({ extensions: [".js", ".jsx", ".ts", ".tsx"], skip: ["react", "react-dom"] }),
    commonjs(),
    typescript({
        tsconfig: "./tsconfig.json",
        exclude: ["**/*.test.tsx", "**/*.test.ts", "**/*.stories.ts", "**/*.stories.tsx"],
        compilerOptions: {
            outDir,
            declarationDir: `${outDir}/types`,
        },
    }),
    postcss({ extensions: [".css"], inject: true, extract: false }),
];

export default [
    {
        input: "src/index.ts",
        output: { dir: "dist/cjs", format: "cjs", sourcemap: true },
        plugins: sharedPlugins("dist/cjs"),
        external,
    },
    {
        input: "src/index.ts",
        output: { dir: "dist/esm", format: "esm", sourcemap: true },
        plugins: sharedPlugins("dist/esm"),
        external,
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
        external: [/\.css$/],
    },
];