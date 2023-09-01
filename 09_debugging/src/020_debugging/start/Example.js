// import { useState } from "react"
// const Child = (countNum) => {
//   // 1. 問題が発生している箇所でdebuggerを置く
//   debugger
//   // 2. countNum.valのvalにカーソルを持っていくとundefinedになる。
//   // コンソールに投げるとundefinedが返る。
//   // countNumにカーソルを充てるとobjectで変数countにval: 0が設定されている。
//   // しかし、変数名はcountNumになっている。
//   // 尚且つ、Childコンポーネントに渡すのはpropsを分割代入して渡すはずが変数を渡している。
//   return <p>現在のカウント数: {countNum.val}</p>
// }
// const Example = () => {
//   const [count, setCount] = useState({ val: 0 });

//   const countUp = () => {
//     setCount((prevstate) => {
//       const newState = { val: prevstate.val + 1 }
//       return newState;
//     });
//   };
//   return (
//     <>
//       <Child count={count} />
//       <button onClick={countUp}>+</button>
//     </>
//   );
// };
// export default Example;




import { useState } from "react"
const Child = ({ count }) => {
  // 削除
  // debugger
  return <p>現在のカウント数: {count.val}</p>
}
const Example = () => {
  const [count, setCount] = useState({ val: 0 });

  const countUp = () => {
    // debugger
    setCount((prevstate) => {
      const newState = { val: prevstate.val + 1 }
      return newState;
    });
  };
  return (
    <>
      <Child count={count} />
      {/* countUpの挙動を止めたい => 関数定義にdebuggerを置く。 */}
      <button onClick={countUp}>+</button>
    </>
  );
};
export default Example;
