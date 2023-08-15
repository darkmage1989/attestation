import { render, screen } from "@testing-library/react";
import { InputBox, InputSearch } from "./styles";
describe("InputSearch test", () => {
  it("InputSearch toBeInTheDocument", () => {
    render(<InputSearch data-testid="6" type="text" />);
    expect(screen.getByTestId("6")).toHaveAttribute("type");
  });
});
it("InputBox toBeVisible", () => {
  render(<InputBox data-testid="3" />);
  expect(screen.getByTestId("3")).toBeVisible();
});
