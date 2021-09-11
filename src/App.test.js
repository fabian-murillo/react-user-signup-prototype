import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders signup form", () => {
  render(<App />);
  const formElement = screen.getByText(/Sign up!/i);
  expect(formElement).toBeInTheDocument();
});
