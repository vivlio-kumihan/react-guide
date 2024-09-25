// // origin
// const CounterReslut = ({ countAtCounterComp }) => {

//   return (
//     <h3>{countAtCounterComp}</h3>
//   );
// };

// export default CounterReslut;


// // 1.
// import { useCount } from "../context/CounterContext";

// const CounterReslut = () => {
//   const count = useCount();

//   return (
//     <h3>{count}</h3>
//   );
// };

// export default CounterReslut;


import { useCount } from '../context/CounterContext';

const CounterReslut = () => {
  const count = useCount();
  return (
    <h3>{count}</h3>
  );
};

export default CounterReslut;