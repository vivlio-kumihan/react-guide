// クリックイベントの考え方　その2
import { useState } from "react";

const Counter = ({ title }) => {
  const [count, setCount] = useState(0);

  const plusHandler = () => {
    setCount(() => count + 1);
  }
  const minusHandler = () => {
    setCount(() => count - 1);
  }

  return (
    <>
      <h3>カウント{title}: {count}</h3>
      <button onClick={plusHandler}>+</button>
      <button onClick={minusHandler}>-</button>
    </>
  );
};

export default Counter;

// import { useState } from 'react';

// const Counter = ({ title }) => {
//   const [count, setCount] = useState(0);
  
//   const pulusCountHandler = () => { setCount(() => count + 1) };
//   const minusCountHandler = () => { setCount(() => count - 1) };

//   return (
//     <>
//       <h3>カウント{title}: {count}</h3>
//       <button onClick={pulusCountHandler}>+</button>
//       <button onClick={minusCountHandler}>-</button>      
//     </>
//   );
// };

// export default Counter;

// import { useState } from "react";

// const Count = ({ title }) => {
//   const [count, setCount] = useState(0);
//   const countUp = () => { setCount((prevState) => prevState + 1) };
//   const countDown = () => { setCount((prevState) => prevState - 1) };

//   return (
//     <>
//       <h3>{ title }: { count }</h3>
//       <button onClick={countUp}>+</button>
//       <button onClick={countDown}>-</button>
//     </>
//   );
// };

// export default Count;

// const Counter = ({ whichCounter, count, setCount}) => {
//   const plus = () => {
//     setCount((prevState) => prevState + 1);
//   };
//   const minus = () => {
//     setCount((prevState) => prevState - 1);
//   };

//   return (
//     <>
//       <h3>count{whichCounter}: {count}</h3>
//       <button onClick={plus}>+</button>
//       <button onClick={minus}>-</button>      
//     </>
//   );
// };

// export default Counter;

// const Counter = ({ title, counter, setCounter }) => {
//   const plusBtn = () => {
//     setCounter((prevState) => prevState + 1);
//   };
//   const minusBtn = () => {
//     setCounter((prevState) => prevState - 1);
//   };  

//   return (
//     <>
//       <h3>カウンタ{title}：{counter}</h3>
//       <div>
//         <button onClick={plusBtn}>+</button>
//         <button onClick={minusBtn}>-</button>
//       </div>
//     </>
//   );
// };

// export default Counter;