import { useState } from "react";

const Example = () => {
  const [toggle, stateToggle] = useState(true);
  const [countA, stateCountA] = useState(0);
  const [countB, stateCountB] = useState(0);
  const toggleComponent = () => {
    stateToggle(prev => !prev);
  }
  return (
    <>
    <button onClick={ toggleComponent }>toggle</button>
    { toggle
      ? <Count title="A" key="A" count={ countA } setCount={ stateCountA } />
      : <Count title="B" key="B" count={ countB } setCount={ stateCountB } />
    }
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