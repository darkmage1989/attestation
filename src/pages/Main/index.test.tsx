import { render, screen } from "@testing-library/react";
import { ErrorBox } from "./styles";
describe("InputSearch test", () => {
  it("InputSearch toBeInTheDocument", () => {
    render(<ErrorBox data-testid="4" />);
    expect(screen.getByTestId("4")).toBeDefined()
  });
});
