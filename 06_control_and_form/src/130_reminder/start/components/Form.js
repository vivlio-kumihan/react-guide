import { useState } from "react";

// 親コンポーネントから新規でTodoを追加する関数を受け取る。
const Form = ({ createTodo }) => {
  const [enteredTodo, setEnteredTodo] = useState("");
  const addTodo = (e) => {
    // <form onSubmit={addTodo}></form>の動作、
    // フォームに色々と入力し、送信をした時点でページをリロードする。
    // という動作を止める。
    e.preventDefault();
    const newTodo = {
      // 10の5乗した値をidに放り込んでおく。
      id: Math.floor(Math.random() * 1e5), 
      // 瞬く間にリストに項目が追加される。
      content: enteredTodo
    };
    createTodo(newTodo);
    setEnteredTodo("")
  };

  return (
    <form onSubmit={addTodo}>
      <input
        type="text"
        value={enteredTodo}
        // 入力している時点で状態に値が入っていく。
        // フォームにサブミットが押され、リロードしたタイミングで
        // enteredTodoが確定、そしてリストされる。
        // 瞬く間にやっているから人間の目には
        // エンターを押した時点でリストされるように見えているだけ。
        onChange={(e) => setEnteredTodo(e.target.value)} 
      />  
      <button>追加</button>
    </form>
  );
};

export default Form;