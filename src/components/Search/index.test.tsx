import { render, screen } from "@testing-library/react";
import { InputBox, InputSearch } from "./styles";
describe("InputSearch test", () => {
  it("InputSearch toBeInTheDocument", () => {
    render(<InputSearch data-testid="3" />);
    expect(screen.getByTestId("3")).toBeVisible();
  });
});
it("InputBox toBeVisible", () => {
  render(<InputBox data-testid="6" />);
  expect(screen.getByTestId("6")).toBeVisible()
});
