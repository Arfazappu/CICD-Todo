import { useState } from "react";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a todo"
        className="flex-1 border p-2 mr-2"
      />
      <button type="submit" className="bg-blue-500 text-white px-4">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
