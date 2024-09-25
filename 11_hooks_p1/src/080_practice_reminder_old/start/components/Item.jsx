import { useState } from "react";

const Item = ({ todo, complete }) => {
  const [editingContent, setEditingContent] = useState(todo.content)
  return (
    <div key={todo.id}>
      <button onClick={() => complete(todo.id)}>完了</button>
      {
        todo.editing 
          ? <span>{todo.content}</span>
          : <div></div>
      }
      
    </div>
  );
};
export default Item;