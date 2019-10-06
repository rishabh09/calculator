import React from "react";
import { render } from "@testing-library/react";

import App from "./index";

it("should render display", () => {
  const { debug } = render(<App />);
  debug();
});
