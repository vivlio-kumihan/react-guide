import { useState } from "react"

const Example = () => {
  const [count, stateCount] = useState(0)
  return (
    <>
    <CountResult title="カウント" counted={ count }/>
    <CountUpdate  setCount={ stateCount }/> 
    </>
  );
};

const CountResult = ({ title, counted }) => {
  return (
    <>
    <h3>{ title }: { counted }</h3>
    </>
  )

}

const CountUpdate = ({ setCount }) => {
  const countUp = () => {
    setCount(pervState => pervState + 1)
  };
  const countDown = () => {
    setCount(pervState => pervState - 1)
  };
  return (
    <>
      <button onClick={ countUp }>+</button>
      <button onClick={ countDown }>-</button>
    </>
  );
};

export default Example;
