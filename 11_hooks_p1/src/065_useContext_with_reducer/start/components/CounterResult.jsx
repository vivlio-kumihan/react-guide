// ////////
// //  2. コンポーネント化する。
// //     * オブジェクトはpropsで渡す。

// const CounterReslut = ({ count }) => {
//   return (
//     <h3>{count}</h3>
//   );
// };

// export default CounterReslut;

////////////////////////////////

import { useContext } from "react";
import { CountContext } from "../Example";

const CounterReslut = () => {
  const [count] = useContext(CountContext);

  return (
    <h3>{count}</h3>
  );
};

export default CounterReslut;









// // origin
// //   * 状態はuseReducerで管理。
// //   * オブジェクトはpropsで渡す。
// //   * Contextを使わないバージョン。

// const CounterResult = ({ state }) => {

//   return <h3>{state}</h3>;
// };

// export default CounterResult;





// import { useCounter } from "../context/CounterContext";

// const CounterResult = () => {
//   const state = useCounter();
//   return <h3>{ state }</h3>;
// };

// export default CounterResult;