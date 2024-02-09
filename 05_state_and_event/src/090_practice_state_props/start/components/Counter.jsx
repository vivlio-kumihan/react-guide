const Counter = ({ whichCounter, count, setCount}) => {
  const plus = () => {
    setCount((prevState) => prevState + 1);
  };
  const minus = () => {
    setCount((prevState) => prevState - 1);
  };

  return (
    <>
      <h3>count{whichCounter}: {count}</h3>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>      
    </>
  );
};

export default Counter;

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