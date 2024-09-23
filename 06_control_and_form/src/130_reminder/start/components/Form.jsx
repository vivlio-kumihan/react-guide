import { useState } from "react";

const Form = ({ createTodo }) => {
  const [enteredTodo, setEnteredTodo] = useState("");
  const onChange = (e) => {
    return setEnteredTodo(e.target.value);
  };
  const addTodo = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: enteredTodo
    };
    createTodo(newTodo);
    setEnteredTodo("");
  };
  return (
    // // 1.
    // // input要素に値を入力し追加ボタンを押す。
    // // Todoが追加されるが、入力欄には入れた値が残ったまま。
    // // これを解消するにはform要素で囲みonSubmit属性で追加した値を送る必要がある。
    // <div>
    //   <input type="text" value={ enteredTodo } onChange={ onChange } />
    //   <button onClick={ addTodo }>追加</button>
    // </div>

    // 2.
    // form要素では、submitが送られるとaction属性で指定したパスへリクエストを送って遷移する機能がある。
    // この場合は、現在のページへリクエストを送りリロードをする。
    // ボタンを押す => アイテムが追加される => リロードしてアイテムが消えるので、
    // このブラウザのデフォルトの動作を止める必要がある。
    // e.preventDefault();を関数の先頭に設置する。
    // 入力に相変わらず入力値が残ってしまうので、setEnteredTodo("")として空文字列を与える。
    // だったら、1でこの1行だけ追加したらよかったやんと考えるのは早計だよ。
    // form要素で使う機会の方が多いからね。その時の作法を知っている必要があるのだよ。
    <form action="" onSubmit={ addTodo }>
      <input type="text" value={ enteredTodo } onChange={ onChange } />
      <button>追加</button>
    </form>
  );
};

export default Form;