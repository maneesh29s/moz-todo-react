import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";

describe("Rendering of the app", () => {
  it("should have title todomatic", () => {
    const DATA = [];
    const app = render(<App tasks={DATA} />);
    expect(app.getByTestId("title")).toHaveTextContent("TodoMatic");
  });

  it("should have heading 3 tasks remaining", () => {
    const DATA = [
      { id: "todo-0", name: "Eat", completed: true },
      { id: "todo-1", name: "Sleep", completed: false },
      { id: "todo-2", name: "Repeat", completed: false },
    ];
    const { getByTestId } = render(<App tasks={DATA} />);
    expect(getByTestId("heading")).toHaveTextContent("3 tasks remaining");
  });

  it("should decrease the number of tasks", () => {
    const DATA = [
      { id: "todo-0", name: "Eat", completed: true },
      { id: "todo-1", name: "Sleep", completed: false },
      { id: "todo-2", name: "Repeat", completed: false },
    ];
    const { getByTestId } = render(<App tasks={DATA} />);
    fireEvent.click(getByTestId("todo-1"));
    expect(getByTestId("heading")).toHaveTextContent("2 tasks remaining");
  });
});