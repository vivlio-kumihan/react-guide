// 問1. mapで回すdiv要素を別のコンポーネントに分割する。

          // <div key={todo.id}>
          //   <button onClick={() => complete(todo.id)}>完了</button>
          //   <span>{todo.content}</span>
          // </div>

import Item from "./Item";

const List = ({todos, deleteTodo, updateTodo}) => {
  const complete = (id) => {
    deleteTodo(id)
  }
  return (
    <div>
      {todos.map(todo => {
        return (
          <Item key={todo.id} todo={todo} complete={complete} updateTodo={updateTodo} />
        ) 
      })}
    </div>
  );
}

export default List;