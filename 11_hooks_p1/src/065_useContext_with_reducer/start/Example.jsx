// ////////
// //  0. カウンターアプリを作る。
// //     2つずつカウント・アップとダウンする。
// //     まずは、useState版

// import { useState } from "react";

// const Example = () => {
//   const [count, setCount] = useState(0);
//   const countUp = () => {
//     setCount(prev => prev + 2);
//   };
//   const countDown = () => {
//     setCount(prev => prev - 2);
//   };

//   return (
//     <>
//       <h3>{count}</h3>
//       <button onClick={countUp}>+2</button>
//       <button onClick={countDown}>-2</button>
//     </>
//   );
// };

// export default Example;


// ////////
// //  1. useReducerで書き換える。
// //     * 状態はuseReducerで管理。

// import { useReducer } from "react";

// const Example = () => {
//   const [count, dispatch] = useReducer((prev, { operator, step }) => {
//     switch (operator) {
//       case "+": return prev + step;
//       case "-": return prev - step;
//       default: throw new Error("error... unkown oparator...")
//     }
//   }, 0);
//   const countUp = () => {
//     dispatch({ operator: "+", step: 2 });
//   };
//   const countDown = () => {
//     dispatch({ operator: "-", step: 2 });
//   };

//   return (
//     <>
//       <h3>{count}</h3>
//       <button onClick={countUp}>+2</button>
//       <button onClick={countDown}>-2</button>
//     </>
//   );
// };

// export default Example;


// ////////
// //  2. コンポーネント化する。
// //     * オブジェクトはpropsで渡す。

// import { useReducer } from "react";

// import Counter from "./components/Counter";

// const Example = () => {
//   const [count, dispatch] = useReducer((prev, { operator, step }) => {
//     switch (operator) {
//       case "+": return prev + step;
//       case "-": return prev - step;
//       default: throw new Error("error... unkown oparator...")
//     }
//   }, 0);
//   const countUp = () => {
//     dispatch({ operator: "+", step: 2 });
//   };
//   const countDown = () => {
//     dispatch({ operator: "-", step: 2 });
//   };

//   return (
//     <Counter count={count} countUp={countUp} countDown={countDown} />
//   );
// };

// export default Example;

//////////////////////////////////////////////

import { useState, createContext } from "react";
export const CountContext = createContext();

import Counter from "./components/Counter";

const Example = () => {
  const [count, setCount] = useState(0);

  return (
    <>
    <CountContext.Provider value={[count, setCount]}>
      <Counter />
    </CountContext.Provider>
    </>
  );
};

export default Example;