import { useEffect, useState, useLayoutEffect } from "react";

const Example = () => {
  const [isDisp, setIsDisp] = useState(true);

  return (
    <>
      {isDisp && <Timer/>}
      <button onClick={() => setIsDisp(prev => !prev)}>{isDisp ? "非表示" : "表示"}</button>
    </>
  )
}

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const toggle = () => {
    setIsRunning(prev => !prev);
  };
  const reset = () => {
    // 何の状態をリセットさせたいのか考える。
    //   時間をリセットさせたい。
    //   ボタンを初期状態に戻したい。つまり『false』にしたい。
    setTime(0);
    setIsRunning(false);
  };  

  // isRunningのstateに依存させて状態を管理したい。
  useEffect(() => {
    // 1. コンポーネントが呼ばれた初期状態。
    //    まず、コンポーネントが読み込まれる。
    // 2-2. コンポーネントが再度呼ばれて、上から順にuseEffectの処理に入る。
    // 4-2. 次のコールバックが呼ばれる。
    console.log('init');
    let intervalId = null;
    // isRunningがtrueの時にsetInterval関数を作動させたい。
    // falseの時は何もしない。
    if (isRunning) {
      // 2-3. 中を読む。isRunningの状態は、trueなのでコンソールに出力。
      console.log("timer start");
      intervalId = window.setInterval(() => {
        // 2-4. その中を読み込む。
        console.log('interval running');
        setTime(prev => prev + 1);
      }, 1000);
    }
    return () => {
      // 2-1. スタートボタンを押す。
      //    前回の状態をクリーンアップするこちらが呼ばれる。
      // 4-1. 一時停止ボタンを押したので、isRunningの状態が変わる。
      //      でクリーンアップされる。
      window.clearInterval(intervalId)
      console.log('end');
    }
  }, [isRunning])
  
  useEffect(() => {
    document.title = 'counter:' + time;
    window.localStorage.setItem('time-key', time);

    return () => {
    }
  }, [time]);

  useLayoutEffect(() => {
    const _time = parseInt(window.localStorage.getItem('time-key'));
    if(!isNaN(_time)) {
      setTime(_time);
    }
  }, [])

  return (
    <>
      <h3>
        <time>{time}</time>
        <span>秒経過</span>
      </h3>
      <div>
        <button onClick={toggle}>{isRunning ? "一時停止" : "スタート"}</button>
        <button onClick={reset}>リセット</button>
      </div>

    </>
    );
};

export default Example;
