import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("To-Do App", () => {
  test("renders heading", () => {
    render(<App />);
    expect(screen.getByText(/To-Do App/i)).toBeInTheDocument();
  });

  test("can add a todo", async () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/Add a todo/i);
    const addButton = screen.getByRole("button", { name: /Add/i });

    await userEvent.type(input, "Learn CI/CD");
    await userEvent.click(addButton);

    expect(screen.getByText("Learn CI/CD")).toBeInTheDocument();
  });

  test("can delete a todo", async () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/Add a todo/i);
    const addButton = screen.getByRole("button", { name: /Add/i });

    // Add a todo first
    await userEvent.type(input, "Test Delete");
    await userEvent.click(addButton);

    const deleteButton = screen.getByText("Delete");
    await userEvent.click(deleteButton);

    expect(screen.queryByText("Test Delete")).not.toBeInTheDocument();
  });
});
