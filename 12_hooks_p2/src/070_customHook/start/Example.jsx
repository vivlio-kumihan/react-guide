// カスタム・フック

// * useStateなどReact Hookを内部で使用した関数（フック）のこと。
// * 関数名はuse〓〓〓〓とする。

// * useStateはコンポーネントのトップ・レベルで使うものなのだが、
//   下位のコンポーネントにおいて、関数名はuse〓〓〓〓のカスタム・フック（関数）の中で使うことができる。

// * useStateで定義した状態の操作を複数のコンポーネントで使うことができる。

import { useState } from "react";
import useTimer from "./useTimer";

const Example = () => {
  const [isDisp, setIsDisp] = useState(true);

  return (
    <>
      {isDisp && <Timer/>}
      <button onClick={() => setIsDisp(prev => !prev)}>{isDisp ? '非表示' : '表示'}</button>
    </>
  )
}

const Timer = () => {
  const { time, isRunning, toggle, reset } = useTimer();

  return (
    <>
    <h3>
      <time>{time}</time>
      <span>秒経過</span>
    </h3>
    <div>
      <button onClick={toggle}>{isRunning ? '一時停止' : 'スタート'}</button>
      <button onClick={reset}>リセット</button>
    </div>
    </>
  );
};

export default Example;
