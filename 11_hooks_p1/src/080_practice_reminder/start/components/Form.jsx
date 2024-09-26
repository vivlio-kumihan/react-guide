// // org_state
// // ////////////
// // フォームでやるべきこと
// // => input要素に入力。
// // => 入力した値を新規追加のオブジェクトとして生成する。
// //    親で生成したcreateTodo関数の引数に渡してtodosに追加する。

// // つまり、このコンポーネントで必要なのは、
// // 『入力値を状態管理』し新規追加の『オブジェクトに生成』。
// // createTodo関数の『引数に渡す』ことである。
// // ////////////

// import { useState } from "react";

// const Form = ({ createTodo }) => {
//   // 入力する値のデフォルトは空文字で状態を生成する。
//   const [enteredTodo, setEnteredTodo] = useState("")
//   // 関数の設定
//   // 1. 入力のstateを使って新規で
//   //    todoListオブジェクトに挿入するオブジェクトを生成する。
//   // 2. createTodo関数にそのオブジェクトを渡す。
//   // 3. 入力値のstateを空に更新する。
//   const addTodo = (e) => {
//     e.preventDefault();
    
//     // 1.
//     const newTodo = {
//       id: Math.floor(Math.random() * 1e5),
//       content: enteredTodo,
//     };
//     // 2.
//     createTodo(newTodo);
//     // 3.
//     setEnteredTodo("");
//   };
//   // JSX内でinput要素に入力された値を『enter』ボタンを押すイベントを
//   // 通じて値を渡していきたいときの考え方。
//   // formは送信を発火されると任意のページに飛ぶ（ページをリロードする）
//   // 動作をデフォルトで持っている。
//   // これを阻止したいので『e.preventDefault();』を命令する。
//   return (
//     <>
//       <form onSubmit={addTodo} action="">
//         <input 
//           type="text" 
//           value={enteredTodo}
//           onChange={(e) => {
//             setEnteredTodo(e.target.value)
//           }}
//         />
//         <button>追加</button>
//       </form>
//     </>
//   );
// };

// export default Form;


// org_state2
// ////////////
// フォームでやるべきこと
// => input要素に入力。
// => 入力した値を新規追加のオブジェクトとして生成する。
//    親で生成したcreateTodo関数の引数に渡してtodosに追加する。

// つまり、このコンポーネントで必要なのは、
// 『入力値を状態管理』し新規追加の『オブジェクトに生成』。
// createTodo関数の『引数に渡す』ことである。
// ////////////

import { useState } from "react";

const Form = ({ createTodo }) => {
  // 入力する値のデフォルトは空文字で状態を生成する。
  const [enteredTodo, setEnteredTodo] = useState("")
  // 関数の設定
  // 1. 入力のstateを使って新規で
  //    todoListオブジェクトに挿入するオブジェクトを生成する。
  // 2. createTodo関数にそのオブジェクトを渡す。
  // 3. 入力値のstateを空に更新する。
  const addTodo = (e) => {
    e.preventDefault();
    
    // 1.
    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: enteredTodo,
      editing: false
    };
    // 2.
    createTodo(newTodo);
    // 3.
    setEnteredTodo("");
  };
  // JSX内でinput要素に入力された値を『enter』ボタンを押すイベントを
  // 通じて値を渡していきたいときの考え方。
  // formは送信を発火されると任意のページに飛ぶ（ページをリロードする）
  // 動作をデフォルトで持っている。
  // これを阻止したいので『e.preventDefault();』を命令する。
  return (
    <>
      <form onSubmit={addTodo} action="">
        <input 
          type="text" 
          value={enteredTodo}
          onChange={(e) => {
            setEnteredTodo(e.target.value)
          }}
        />
        <button>追加</button>
      </form>
    </>
  );
};

export default Form;