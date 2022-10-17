import { render, screen } from "@testing-library/react";
import ButtonPrimary from "./ButtonPrimary";

describe("Primary Button", () => {
  it("should render primary button", () => {
    render(<ButtonPrimary label="click it" />);
    expect(screen.getByText("click it")).not.toBeNull();
  });
});
