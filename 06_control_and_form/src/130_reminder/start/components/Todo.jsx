import { useState } from "react";
import List from "./List";
import Form from "./Form";

const Todo = () => {
  const todosList = [
    {
      id: 1,
      content: "店予約する",
    },
    {
      id: 2,
      content: "卵買う",
    },
    {
      id: 3,
      content: "郵便出す",
    },
  ];

  const [todos, setTodos] = useState(todosList);
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  };
  const createTodo = (todo) => {
    return setTodos([...todos, todo]);
  };

  return (
    <>
      <h3>List.js</h3>
      <List todos={ todos } deleteTodo={ deleteTodo }/>
      <Form createTodo={ createTodo } />
    </>
  );
};

export default Todo;