// ////////
// //  2. コンポーネント化する。
// //     * オブジェクトはpropsで渡す。

// const CounterButton = ({ countUp, countDown }) => {
//   return (
//     <>
//       <button onClick={countUp}>+2</button>
//       <button onClick={countDown}>-2</button>
//     </>
//   );
// };

// export default CounterButton;

////////////////////////////

import { useContext } from "react";
import { CountContext } from "../Example";

const CounterButton = () => {
  const [, setCount] = useContext(CountContext);
  const countUp = () => {
    setCount(prev => ++prev);
  };
  const countDown = () => {
    setCount(prev => --prev);
  };

  return (
    <>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default CounterButton;














// origin 
// //   * 状態はuseReducerで管理。
// //   * オブジェクトはpropsで渡す。
// //   * Contextを使わないバージョン。

// const CounterButton = ({calcType, step, onClick}) => {
    
//     return <button onClick={onClick}>{calcType}{step}</button>
// }

// export default CounterButton;




// import { useCounterDispatch } from "../context/CounterContext";

// // const CounterButton = ({ calcType, step, onClick }) => {
// const CounterButton = ({ calcType, step }) => {
//   // Exampleコンポーネントでstateや更新関数が及ぶ範囲に入っている。
//   // importで呼び込んで命令する。
//   {/* <CounterContext.Provider value={ state }> */}
//     {/* <CounterDispatchContext value={ dispatch }> */}
//       {/* { children } */}
//     {/* </CounterDispatchContext> */}
//   {/* </CounterContext.Provider> */}
//   const dispatch = useCounterDispatch()

//   // onClickをpropsで受け取っているのを変更する。
//   // onClick関数も...
//   // return <button onClick={ onClick }>{ calcType }{ step }</button>
//   const clickHandler = () => {
//     // step: stepは省略可能
//     // dispatch({ type: calcType, step: step });
//     dispatch({ type: calcType, step });
//   };
//   return <button onClick={ clickHandler }>{ calcType }{ step }</button>
// }

// export default CounterButton;