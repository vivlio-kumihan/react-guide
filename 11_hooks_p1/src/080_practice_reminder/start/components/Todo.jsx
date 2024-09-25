////////////
// memo, remainerを作るコツ
// 状態管理の親を決めること
// 何を状態管理『したい』かに注目すること
// 状態管理
//   * 入力して更新する
//   * 任意の状態を消す
//        * filterを使う
//        * 状態の配列から同じIDを持つアイテム『以外』のアイテムを収集する。
////////////

import { useState } from "react"
import List from "./List"
import Form from "./Form"

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

  const [ todos, setTodos ] = useState(todosList);

// 新規追加、考え方のパターン
// 引数todoにはオブジェクトが送られてくることを期待している。
  const createTodo = (todo) => {
    setTodos([...todos, todo]);
  }

// deleteする際、考え方のパターン
// 削除したいアイテムのIDと同じでは『ない』ものを収集する。
// 状態を新しいオブジェクトで『入れ替える』。
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  }

// 適宜、状態と更新関数をpropsで送信する。
  return (
    <>
      <List todos={todos} deleteTodo={deleteTodo}/>
      <Form createTodo={createTodo}/>
    </>
  )
};
export default Todo;