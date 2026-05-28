import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Footer", () => {
  test("renders custom links when provided", () => {
    const links = [
      { label: "Link A", href: "/a" },
      { label: "Link B" },
    ];

    render(<Footer links={links} />);

    expect(screen.getByText("Link A")).toHaveAttribute("href", "/a");
    expect(screen.getByText("Link B")).toHaveAttribute("href", "#");
    expect(screen.queryByText("// HUB")).toBeNull();
  });

  test("renders custom brandText", () => {
    render(<Footer brandText="MyBrand" />);
    expect(screen.getByText("MyBrand")).toBeInTheDocument();
  });
});
