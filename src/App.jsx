import { useState } from "react";
import TodoForm from "./components/Todoform/TodoForm";
import Todo from "./components/Todo/Todo";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Apprendre le CI/CD", isCompleted: false },
    { id: 2, text: "Faire des projets en TS", isCompleted: false },
    { id: 3, text: "Tester react-query", isCompleted: false },
    { id: 4, text: "Zustand c'est cool", isCompleted: false },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { id: todos.length + 1, text }];
    setTodos(newTodos);
  };

  const completeTodo = ({ id }) => {
    const newTodos = [...todos];
    const findId = newTodos.find((todo) => todo.id === id);
    findId.isCompleted = !findId.isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = ({ id }) => {
    const newTodos = [...todos];
    const removeTodo = newTodos.filter((todo) => todo.id !== id);
    setTodos(removeTodo);
  };

  // test commentaire

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map(({ id, text, isCompleted }) => (
          <Todo key={id} id={id} text={text} isCompleted={isCompleted} completeTodo={completeTodo} removeTodo={removeTodo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
