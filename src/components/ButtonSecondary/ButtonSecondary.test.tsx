import { render } from "@testing-library/react";
import ButtonSecondary from "./ButtonSecondary";

describe("Primary Button", () => {
  it("should render primary button", () => {
    render(<ButtonSecondary label="click it" />);
  });
});
