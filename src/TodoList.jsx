function TodoList({ todos, deleteTodo }) {
  if (todos.length === 0) return <p>No todos yet!</p>;

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className="flex justify-between border-b p-2">
          <span>{todo.text}</span>
          <button
            onClick={() => deleteTodo(todo.id)}
            className="text-red-500"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
