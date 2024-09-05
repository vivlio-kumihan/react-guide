import { useState } from "react";

const Example = () => {
  const numArray = [1, 2, 3, 4, 5];
  const [val, setVal] = useState(numArray);
  const shuffle = () => {
    const renewVal = [...val];
    const toTop = renewVal.pop();
    renewVal.unshift(toTop);
    // それはオブジェクトの時だけだ。
    // setVal(val => ([...val, renewVal]));
    // 単純に値を渡す。
    setVal(renewVal);
  };
  return (
    <>
      <h3>{ val }</h3>
      <button onClick={ shuffle }>Shuffle</button>
    </>
  );
};

export default Example;
