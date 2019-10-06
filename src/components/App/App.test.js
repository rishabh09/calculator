import React from "react";
import { render, fireEvent } from "@testing-library/react";

import App from "./index";
import expectExport from "expect";

it("should pass", () => {
  render(<App />);
  expectExport(true).toBe(true);
});
