import { render, screen } from "@testing-library/react";
import { PagesButtonBox } from "./styles";
describe("PagesButtonBox test", () => {
  it("PagesButtonBox toBeEnabled", () => {
    render(<PagesButtonBox data-testid="1" />);
    expect(screen.getByTestId("1")).toBeEnabled()
  });
});

