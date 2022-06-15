import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("should render Fig info", () => {
    render(<App />);
    const linkElement = screen.getByText(/Fig/i);
    expect(linkElement).toBeInTheDocument();
  });
});
