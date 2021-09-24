import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import ProjectsE from "./ProjectsE";
// eslint-disable-next-line jest/no-mocks-import
import "../../__mocks__/ntersectionObserverMock";
import { BrowserRouter } from "react-router-dom";

let component;
beforeEach(() => {
  component = render(
    <BrowserRouter>
      <ProjectsE />
    </BrowserRouter>
  );
});

test("Must display a title", () => {
  // eslint-disable-next-line no-restricted-globals
  expect(component.queryByText(/This page was created/i)).toBeInTheDocument();
});
test("Must be in english", () => {
  // eslint-disable-next-line no-restricted-globals
  expect(
    component.queryByText(
      /Este proyecto es una pequeña app de traducción usando algunos ejercicios básicos de Duolingo para practicar Next.js. Espero que la disfruten./i
    )
  ).not.toBeInTheDocument();
});

