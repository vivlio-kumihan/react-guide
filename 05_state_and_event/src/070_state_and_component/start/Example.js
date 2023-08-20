import { useState } from "react";

// POINT stateとコンポーネントの関係
const Example = () => {
  const [toggle, stateToggle] = useState(true);
  const [count, stateCount] = useState(0);
  const toggleComponent = () => {
    stateToggle(prev => !prev);
  }
  return (
    <>
    {/* POINT コンポーネントの位置によってstateが識別される */}
    <button onClick={ toggleComponent }>toggle</button>
    { toggle 
      ? <Count title="A" key="A" count={ count } setCount={ stateCount } /> 
      : <Count title="B" key="B" count={ count } setCount={ stateCount } /> }
    { /* <Count title="A"/ >
    { toggle && <Count title="B"/>} */ }
    </>
  )
}
const Count = ({ title, count, setCount }) => {
  const countUp = () => {
    setCount((prevstate) => prevstate + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h3>{title}: { count }</h3>
      <button onClick={ countUp }>+</button>
      <button onClick={ countDown }>-</button>
    </>
  );
};

export default Example;
