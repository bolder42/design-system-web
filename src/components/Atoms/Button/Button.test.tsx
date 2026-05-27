import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Button } from "./index";

describe("Button", () => {
    test("renders children", () => {
        render(<Button>Click me</Button>);
        expect(screen.getByRole("button")).toHaveTextContent("Click me");
    });
});