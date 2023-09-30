import { useState } from "react";
import List from "./List";
import Form from "./Form";

const Todo = () => {
  const todosList = [
    { id: 1, content: "店予約する" },
    { id: 2, content: "卵買う" },
    { id: 3, content: "郵便出す" },
  ];
  const [todos, setTodos] = useState(todosList)

  const deleteTodo = (id) => {
    const selectTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(selectTodos);
  };  

  // 親に状態があるので、関数を定義して子に渡す。
  // 渡したコンポーネントでその関数に値を入れて返信してもらう段取り。
  // createTodo関数定義
  // 新たにTodoを追加する。
  // 状態のセッター。現状のTodoリストに新しいTodoを追加。
  const createTodo = (todo) => {
    setTodos([...todos, todo])
  }

  return (
    <>
      <List todos={todos} deleteTodo={deleteTodo} />
      {/* 新規でTodoを追加する関数をPropsで子コンポーネントに渡す。 */}
      <Form createTodo={createTodo} />
    </>
  );
};

export default Todo;