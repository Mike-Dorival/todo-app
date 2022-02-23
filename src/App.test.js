import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Render todo by default", () => {
  it("show by default text Apprendre le CI/CD", () => {
    render(<App />);
    const linkElement = screen.getByText("Apprendre le CI/CD");
    expect(linkElement).toBeInTheDocument();
  });

  it("show by default text Faire des projets en TS", () => {
    render(<App />);
    const linkElement = screen.getByText("Faire des projets en TS");
    expect(linkElement).toBeInTheDocument();
  });

  it("show by default text Tester react-query", () => {
    render(<App />);
    const linkElement = screen.getByText("Tester react-query");
    expect(linkElement).toBeInTheDocument();
  });

  it("show by default text Zustand c'est cool", () => {
    render(<App />);
    const linkElement = screen.getByText("Zustand c'est cool");
    expect(linkElement).toBeInTheDocument();
  });
});
