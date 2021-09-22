import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Home from "./Home";
import "../../__mocks__/ntersectionObserverMock";
import { BrowserRouter } from "react-router-dom";

let component;
beforeEach(() => {
  component = render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
});

test("Must display a title", () => {
  // eslint-disable-next-line no-restricted-globals
  expect(component.queryByText(/Andrés Luis Logares/i)).toBeInTheDocument();
});
test("Must be in spanish", () => {
  // eslint-disable-next-line no-restricted-globals
  expect(
    component.queryByText(/Hi, i am Andrés Luis Logares/i)
  ).not.toBeInTheDocument();
});
