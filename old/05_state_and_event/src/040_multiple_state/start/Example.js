import { useState } from "react";

const Example = () => {
  const [valueA, setValueA] = useState(0);
  const [valueB, setValueB] = useState(10);
  const [valueC, setValueC] = useState(100);

  const clickHanderA = () => {
    // stateの動き　その1
    // stateは、setValue関数で得たvalueA + 1の値を予約する。
    // setValueA(valueA + 1);
    // Examplコンポーネントが再レンダリングされるタイミングで状態が発動する。
    
    // stateの動き　その2
    // 変数prevStateを持つ無名関数を引数とする。
    // setValueA関数が呼ばれる。
    // ↓
    // 無名関数が発火する。
    // ↓
    // 予約していた状態が発動する。
    setValueA((prevState) => prevState + 1);
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
