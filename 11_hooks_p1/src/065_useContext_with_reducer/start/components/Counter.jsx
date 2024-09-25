// // origin
// import CounterResult from './CounterResult'
// import CounterButton from './CounterButton'

// const Counter = ({ count, countUp, countDown }) => {
//   return (
//     <>
//       <CounterResult countAtCounterComp={count} />

//       {/* 要注意 */}
//       {/* 発想の切り替え必要。 */}
//       {/* この書き方だとコンポーネントは雛形という意識が希薄。 */}
//       {/* <CounterButton countUp={countUp} countDown={countDown} /> */}

//       {/* 末端はフォーマットを一つにして、表現は親で済ませておくやつ。 */}
//       {/* 要注意 */}
//       {/* なお、ここの属性は親またはContextで設定している変数と何の関わり合いもない。 */}
//       <CounterButton opeAtCounterComp="+" stepAtCounterComp={2} countFunc={countUp} />
//       <CounterButton opeAtCounterComp="-" stepAtCounterComp={2} countFunc={countDown} />
//     </>
//   );
// };

// export default Counter;


// // 1.
// import CounterResult from './CounterResult'
// import CounterButton from './CounterButton'

// const Counter = () => {
//   return (
//     <>
//       <CounterResult />
//       <CounterButton opeAtCounterComp="+" stepAtCounterComp={2} />
//       <CounterButton opeAtCounterComp="-" stepAtCounterComp={2} />
//     </>
//   );
// };

// export default Counter;



import CounterResult from './CounterResult'
import CounterButton from './CounterButton'

const Counter = ({ count, countUp, countDown }) => {
  return (
    <>
      <CounterResult countAtCounterComp={count} />
      <CounterButton opeAtCounterComp="+" stepAtCounterComp={2} countFunc={countUp} />
      <CounterButton opeAtCounterComp="-" stepAtCounterComp={2} countFunc={countDown} />
      <CounterButton opeAtCounterComp="+" stepAtCounterComp={10} countFunc={countUp} />
      <CounterButton opeAtCounterComp="-" stepAtCounterComp={10} countFunc={countDown} />
    </>
  );
};

export default Counter;