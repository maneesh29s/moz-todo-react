import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Form from "../components/Form";

describe("Rendering of Form component", () => {
  it("should have input space", () => {
    const { getByTestId } = render(<Form />);
    expect(getByTestId("test-input")).not.toHaveAttribute("disabled");
  });

  it("should have a working add button", () => {
    const { getByTestId } = render(<Form />);
    expect(getByTestId("test-button")).not.toHaveAttribute("disabled");
  });
});