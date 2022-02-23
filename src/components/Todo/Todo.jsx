function Todo({ text, id, completeTodo, isCompleted, removeTodo }) {
  return (
    <div data-testid="Todo" className="todo" style={{ textDecoration: isCompleted ? "line-through" : "" }}>
      <h3>{text}</h3>
      <div>
        <button data-testid="deleteButton" onClick={() => completeTodo({ id })}>
          Complete
        </button>
        <button data-testid="createButton" onClick={() => removeTodo({ id })}>
          x
        </button>
      </div>
    </div>
  );
}

export default Todo;
