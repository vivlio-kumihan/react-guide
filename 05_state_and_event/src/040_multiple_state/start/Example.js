import { useState } from "react";

const Example = () => {
  const [valueA, setValueA] = useState(0);
  const [valueB, setValueB] = useState(10);
  const [valueC, setValueC] = useState(100);

  const clickHanderA = () => {
    setValueA(valueA + 1);
  };
  const clickHanderB = () => {
    setValueB(valueB + 1);
  };
  const clickHanderC = () => {
    setValueC(valueC + 1);
  };

  return (
    <>
      <div>
        <p>ボタンAを{valueA}回押しました！</p>
        <button onClick={clickHanderA}>ボタンA</button>
      </div>
      <div>
        <p>ボタンBを{valueB}回押しました！</p>
        <button onClick={clickHanderB}>ボタンB</button>
      </div>
      <div>
        <p>ボタンCを{valueC}回押しました！</p>
        <button onClick={clickHanderC}>ボタンC</button>
      </div>
    </>
  );
  
};

export default Example;
