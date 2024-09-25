// // origin
// // 末端はフォーマットを一つにして、表現は親で済ませておくやつ。
// const CounterButton = ({ opeAtCounterComp, stepAtCounterComp, countFunc }) => {
//   return (
//     <>
//       <button onClick={countFunc}>{opeAtCounterComp}{stepAtCounterComp}</button>
//     </>
//   );
// };

// export default CounterButton;


// // 1.
// import { useCountDispatch } from "../context/CounterContext";

// const CounterButton = ({ opeAtCounterComp, stepAtCounterComp }) => {
//   const dispatch = useCountDispatch();
//   const clickHandler = () => {
//     dispatch({ operator: opeAtCounterComp, step: stepAtCounterComp });
//   };

//   return (
//     <>
//       <button onClick={clickHandler}>{opeAtCounterComp}{stepAtCounterComp}</button>
//     </>
//   );
// };

// export default CounterButton;



// 末端はフォーマットを一つにして、表現は親で済ませておくやつ。
import { useDispatchCount } from "../context/CounterContext";

const CounterButton = ({ opeAtCounterComp, stepAtCounterComp }) => {
  const dispatch = useDispatchCount();
  const clickHandler = () => {
    dispatch({ operator: opeAtCounterComp, step: stepAtCounterComp });
  };
  return (
    <>
      <button onClick={clickHandler}>{opeAtCounterComp}{stepAtCounterComp}</button>
    </>
  );
};

export default CounterButton;