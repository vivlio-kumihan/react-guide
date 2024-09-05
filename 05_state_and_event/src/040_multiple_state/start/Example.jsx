// 複数のステートを管理してみる。
import { useState } from "react";

const Example = () => {
  let [countA, setCountA] = useState(0);
  let [countB, setCountB] = useState(0);
  let [countC, setCountC] = useState(0);
  const countAFunc = () => setCountA(countA + 1);
  const countBFunc = () => setCountB(countB + 1);
  const countCFunc = () => setCountC(countC + 1);

  return (
    <>
      <p>ボタンAを{ countA }回押しました。</p>
      <button onClick={ countAFunc }>ボタンA</button>
      <p>ボタンBを{ countB }回押しました。</p>
      <button onClick={ countBFunc }>ボタンB</button>
      <p>ボタンCを{ countC }回押しました。</p>
      <button onClick={ countCFunc }>ボタンC</button>
    </>
  );
};

export default Example;
