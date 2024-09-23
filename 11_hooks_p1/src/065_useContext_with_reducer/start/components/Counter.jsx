// ////////
// //  2. コンポーネント化する。
// //     * オブジェクトはpropsで渡す。

// import CounterReslut from "./CounterResult";
// import CounterButton from "./CounterButton";

// const Counter = ({ count, countUp, countDown }) => {
//   return (
//     <>
//       <CounterReslut count={count} />
//       {/* コツです。 */}
//       {/* 何も考えずにやるとこうなるが、 */}
//       {/* 末端のコンポーネントになればなるほど、フォーマット化する必要がある。 */}
//       {/* 今だったら、子コンポーネントにプラスとマイナスの『2つ』の要素を書かないといけない。 */}
//       {/* 『1つ』の要素で書けるように親で工夫をする。 */}
//       {/* <CounterButton count={count} countUp={countUp} countDown={countDown} /> */}

//       {/* propsで係数を渡す。 */}
//       {/* 必要な数だけ要素を作る。li要素ならforで回すことを考えたらならなおさらの処理。 */}
//       <CounterButton count={count} countUp={countUp} countDown={countDown} />
//       <CounterButton count={count} countUp={countUp} countDown={countDown} />
//     </>
//   );
// };

// export default Counter;

////////////////////////////////////////////////

import CounterResult from './CounterResult'
import CounterButton from './CounterButton'

const Counter = () => {
  return (
    <>
      <CounterResult/>
      <CounterButton/>
    </>
  );
};

export default Counter;











// // origin
// //   * 状態はuseReducerで管理。
// //   * オブジェクトはpropsで渡す。
// //   * Contextを使わないバージョン。

// import CounterResult from "./CounterResult"
// import CounterButton from "./CounterButton"

// const Counter = ({ state, countUp, countDown }) => {

//   return (
//     <>
//       <CounterResult state={state} />
//       <CounterButton step={2} calcType="+" onClick={countUp}/>
//       <CounterButton step={2} calcType="-" onClick={countDown}/>
//     </>
//   )
// }

// export default Counter;




// import CounterResult from "./CounterResult";
// import CounterButton from "./CounterButton";

// // useContextで設定したstate、更新用関数が使えるので、
// // 元のstateと更新用関数は不要。
// // const Counter = ({ state, countUp, countDown }) => {
// const Counter = () => {

//   return (
//     <>
//       {/* ここもそう、元のstateは不要。 */}
//       {/* <CounterResult state={ state } /> */}
//       <CounterResult />
//       {/* <CounterButton step={ 2 } calcType="+" onClick={ countUp }/> */}
//       {/* <CounterButton step={ 2 } calcType="-" onClick={ countDown }/> */}
//       <CounterButton step={ 2 } calcType="+" />
//       <CounterButton step={ 2 } calcType="-" />
//       <CounterButton step={ 100 } calcType="+" />
//       <CounterButton step={ 100 } calcType="-" />
//     </>
//   )
// }

// export default Counter;