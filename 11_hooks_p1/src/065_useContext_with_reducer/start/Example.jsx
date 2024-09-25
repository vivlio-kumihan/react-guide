// // origin
// import { useReducer } from "react";

// import Counter from "./components/Counter";

// const Example = () => {
//   const [count, dispatch] = useReducer((prev, { operator, step }) => {
//     switch(operator) {
//       case "+": return prev + step;
//       case "-": return prev - step;
//       default: throw new Error("error...");
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
//       <Counter count={count} countUp={countUp} countDown={countDown} />
//     </>
//   );
// };

// export default Example;


// // 1.
// import Counter from "./components/Counter";
// import { CounterProvider } from "./context/CounterContext";

// const Example = () => {

//   return (
//     <>
//       <CounterProvider>
//         <Counter />
//       </CounterProvider>
//     </>
//   );
// };

// export default Example;


////////////////////////////////////////////

import { CounterProvider } from "./context/CounterContext";
import Counter from "./components/Counter";

const Example = () => {


  const countUp = () => {
    dispatch({ operator: "+", step: 2 });
  };
  const countDown = () => {
    dispatch({ operator: "-", step: 2 });
  };  

  return (
    <>
      <CounterProvider>
        <Counter />
      </CounterProvider>
    </>
  );
};

export default Example;