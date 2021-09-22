import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Projects from "./Projects";
import "../../__mocks__/ntersectionObserverMock";
import { BrowserRouter } from "react-router-dom";

let component;
beforeEach(() => {
  component = render(
    <BrowserRouter>
      <Projects />
    </BrowserRouter>
  );
});

test("Must display a title", () => {
  // eslint-disable-next-line no-restricted-globals
  expect(component.queryByText(/Esta página/i)).toBeInTheDocument();
});
test("Must be in spanish", () => {
  // eslint-disable-next-line no-restricted-globals
  expect(
    component.queryByText(
      /This project is a small translation app using some basic exercises from Duolingo to practice Next.js. I hope you enjoy it./i
    )
  ).not.toBeInTheDocument();
});
