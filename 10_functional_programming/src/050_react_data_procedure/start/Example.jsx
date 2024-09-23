/* 
POINT Reactでの状態管理(state)と処理(関数コンポーネント)の分離

関数型（純粋関数）
・fn(決まった引数) : propsとstateに依存
  -> 決まった戻り値 : JSX
*/

/*
* コンポーネントはJSXを使う場所。
* Stateで状態を管理して、関数コンポーネントはJSXを返す。
* 引数で渡された値は変更しない原則に則れば、
  コンポーネントの引数で渡ってきたporpsに対して、
  変更を加える必要があるときは、更新用関数も一緒に持ってきて
  更新用関数で変更する。
*/

/*
関数のレンダリングを跨いで値を保持したい場合は、stateで値を保持する。
stateに対して状態を保持する。
関数コンポーネントはJSXを返す機能を実装する。
useStateでReact内部に保持されたstateの状態を取ってきて、更新用関数でReact内部に保持されている値を更新する。
関数コンポーネント内に状態を保持せずに、複雑なstateを管理できるようになっている。
*/
import { useState } from "react";

const Example = () => {
  const [state, setState] = useState(0);
  const increment = () => {
    setState(state + 1);
  };
  return (
    <>
      <button onClick={ increment }>+</button>
      <h3>{ state }</h3>
    </>
  );
};

export default Example;

// // ・関数外の状態（データ）は参照・変更しない。
// let value = 0;
// const Example = () => {
//   // 関数コンポーネントはJSXを作成する場所なので、それ以外の処理は書かない。

//   // 状態はstateに分離する
//   const [ state, setState ] = useState(0);
  
//   // 関数外に影響を及ぼさない。
//   // window.alert('hello')

//   const increment = () => {
//     setState(state + 1);
//   }
//   return (
//     <>
//       <button onClick={increment}>+</button>
//       <h3>{state}</h3>
//     </>
//   );
// };

// export default Example;
