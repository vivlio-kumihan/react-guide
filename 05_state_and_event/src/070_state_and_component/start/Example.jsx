// 1. ルートから見て2股に分かれているので『位置』が違う。
//    なのでそれぞれ別個のstateを持っている状態な訳。

// import { useState } from "react";

// const Example = () => {
//   return (
//     <>
//       <Count title="A" />
//       <Count title="B" />
//     </>
//   );
// };

// const Count = ({ title }) => {
//   const [count, setCount] = useState(0);
//   const countUp = () => {
//     // setCount(count + 1);
//     // 同じ意味。
//     setCount((prevstate) => prevstate + 1);
//   };
//   const countDown = () => {
//     setCount(count - 1);
//   };
//   return (
//     <>
//       <h3>カウント{ title }: {count}</h3>
//       <button onClick={countUp}>+</button>
//       <button onClick={countDown}>-</button>
//     </>
//   );
// };

// export default Example;

// // 2. 『同じ位置』で切り替えた場合のstateの挙動を見てみる。
// //     留意：toggleで操作する場合の基本が書いてある。
// import { useState } from "react";

// const Example = () => {
//   const [toggle, setToggle] = useState(true);
//   const switchToggle = () => {
//     // state変数toggleのtrueが引数で入ってきたら、!true（= false）を返す。
//     setToggle(prev => !prev);
//   };
//   return (
//     <>
//       <button onClick={ switchToggle }>スイッチ</button>
//       {/* JSXの中でJSを実行するので『{}』で囲む */}
//       {/* 同じ位置で切り替えられえる。
//           この場合、state変数の値は引き継がれてしまう。 */}
//       { toggle ? <Count title="A" /> : <Count title="B" /> }
//     </>
//   );
// };

// const Count = ({ title }) => {
//   const [count, setCount] = useState(0);
//   const countUp = () => {
//     // setCount(count + 1);
//     // 同じ意味。
//     setCount((prevstate) => prevstate + 1);
//   };
//   const countDown = () => {
//     setCount(count - 1);
//   };
//   return (
//     <>
//       <h3>カウント{ title }: {count}</h3>
//       <button onClick={countUp}>+</button>
//       <button onClick={countDown}>-</button>
//     </>
//   );
// };

// export default Example;


// 3. 『同じ位置』で切り替えた場合でもstateの値を引き継がせない方法
//     要素の属性にkeyを割り振る。
import { useState } from "react";

const Example = () => {
  const [toggle, setToggle] = useState(true);
  const switchToggle = () => {
    setToggle(prev => !prev);
  };
  return (
    <>
      <button onClick={ switchToggle }>スイッチ</button>
      {/* 要素の属性にkeyを割り振る。 */}
      { toggle ? <Count key="A" title="A" /> : <Count key="B" title="B" /> }
    </>
  );
};

const Count = ({ title }) => {
  const [count, setCount] = useState(0);
  const countUp = () => {
    // setCount(count + 1);
    // 同じ意味。
    setCount((prevstate) => prevstate + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h3>カウント{ title }: {count}</h3>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;