import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NotFound from "../pages/NotFound/NotFound";

test("renders not found page", () => {
  render(
    <MemoryRouter>
      <NotFound />
    </MemoryRouter>
  );

  expect(
    screen.getByText("NotFound Page")
  ).toBeInTheDocument();

  expect(
    screen.getByText("Go Back Home")
  ).toBeInTheDocument();
});