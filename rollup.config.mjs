import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import alias from "@rollup/plugin-alias";
import path from "path";
import { fileURLToPath } from "url";
import packageJson from "./package.json" with { type: "json" };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            alias({
                entries: [
                    { find: '@', replacement: path.resolve(__dirname, 'src') }
                ]
            }),
            resolve({
                extensions: [".js", ".jsx", ".ts", ".tsx"],
                skip: ["react", "react-dom"],
            }),
            commonjs(),
            typescript({
                tsconfig: "./tsconfig.json",
                exclude: ["**/*.test.tsx", "**/*.test.ts", "**/*.stories.ts", "**/*.stories.tsx"],
                compilerOptions: {
                    outDir: "dist/cjs",
                    declarationDir: "dist/cjs",
                }
            }),
            postcss({ extensions: [".css"], inject: true, extract: false }),
        ],
        external: ["react", "react-dom", "react/jsx-runtime"],
    },
    {
        input: "dist/cjs/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
        external: [/\.css$/, "class-variance-authority", "class-variance-authority/types"],
    },
];