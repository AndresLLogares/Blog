import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import HomeEnglish from "./HomeEnglish";
import "../../__mocks__/ntersectionObserverMock";
import { BrowserRouter } from "react-router-dom";

let component;
beforeEach(() => {
  component = render(
    <BrowserRouter>
      <HomeEnglish />
    </BrowserRouter>
  );
});

test("Must display a title", () => {
  // eslint-disable-next-line no-restricted-globals
  expect(component.queryByText(/Andrés Luis Logares/i)).toBeInTheDocument();
});
test("Must be in english", () => {
  // eslint-disable-next-line no-restricted-globals
  expect(
    component.queryByText(/Hola, soy Andrés Luis Logares/i)
  ).not.toBeInTheDocument();
});
