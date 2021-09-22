import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import LandPage from "./LandPage";
// eslint-disable-next-line jest/no-mocks-import
import "../../__mocks__/ntersectionObserverMock";
import { BrowserRouter } from "react-router-dom";

let component;
beforeEach(() => {
  component = render(
    <BrowserRouter>
      <LandPage />
    </BrowserRouter>
  );
});

test("Must display a title", () => {
  // eslint-disable-next-line no-restricted-globals
  expect(component.queryByText(/Andrés Luis Logares/i)).toBeInTheDocument();
});
test("Must display the buttons spanish", () => {
  // eslint-disable-next-line no-restricted-globals
  expect(component.queryByText(/español/i)).toBeInTheDocument();
});
test("Must display the buttons english", () => {
  // eslint-disable-next-line no-restricted-globals
  expect(component.queryByText(/english/i)).toBeInTheDocument();
});

