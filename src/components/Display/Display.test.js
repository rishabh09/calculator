import React from "react";
import { render } from "@testing-library/react";

import Display from "./index";

it("should display 0 by default", () => {
  const { getByText } = render(<Display />);
  expect(getByText(/0/i).textContent).toBe("0");
});
