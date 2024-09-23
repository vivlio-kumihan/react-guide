// useEffectは、前のレクチャーでもわかったが、処理は上から順番に行われる。
// つまり、条件によっては意図しない値の上書きがあるということ。
// useLayoutEffectは、useEffectより先に実行される関数。

import { useEffect, useLayoutEffect, useState } from "react";

import Random from "./Random";

const Example = () => {
  const [isDisp, setIsDisp] = useState(true);

  return (
    <>
      {isDisp && <Timer/>}
      <button onClick={() => setIsDisp(prev => !prev)}>トグル</button>
    </>
  )
}

const Timer = () => {
  const [time, setTime] = useState(0);
  console.log('1 => state update');

  useEffect(() => {
    console.log('2 => init');
    let intervalId = null;
    intervalId = window.setInterval(() => {
      setTime(prev => prev + 1);
      console.log('3 => interval called');
    }, 1000);
    // クリーンアップの使い方もuseEffect, useLayoutEffectは同じ
    return () => {
      window.clearInterval(intervalId)
      console.log('4 => end, run init');
    }
  }, [])
  
  useEffect(() => {
    console.log('5 => updated, title and localstrage');
    document.title = 'counter:' + time;
    // 今回は、ここで設定している
    // ローカルストレージに逐次保存される経過時間の情報を...
    window.localStorage.setItem('time-key', time);

    return () => {
      console.log('6 => end, run updated, title and localstrage');
    }
  }, [time]);

  // useEffectは、前のレクチャーでもわかったが、処理は上から順番に行われる。
  // つまり、条件によっては意図しない値の上書きがあるということ。
  // useLayoutEffectは、useEffectより先に実行される関数。
  // これがuseEffectだったら、上から順番に処理されるから、
  // この、『...}, [time]);』で、stateを『0』更新する...
  // 　　　　useEffect(() => {
  // 　　　　  document.title = 'counter:' + time;
  // 　　　　  window.localStorage.setItem('time-key', time);
  // 　　　　  return () => {
  // 　　　　  }
  // 　　　　}, [time]);

  // ↓ ...そして、その『0』がこちらで更新関数に入るから
  // 　　　思ったような動きにならない。
  // useEffect(() => {
    //   const _time = parseInt(window.localStorage.getItem("time-key"));
    //   if (!isNaN(_time)) {
      //     setTime(_time);
      //   }
      // }, []);
      
  // ↓ この処理が先に走る。
  // カウントされる経過秒数は処理を中断してもそのまま続けて表示され続ける。
  useLayoutEffect(() => {
    // ...useLayoutEffectを使って捕まえてみる。
    const _time = parseInt(window.localStorage.getItem("time-key"));
    // 数字でなければtrueを返す。今回は数字が返ってきて欲しいから反転させるよ。
    if (!isNaN(_time)) {
      setTime(_time);
    }
    return () => {
      console.log("7 => run useLayoutEffect")
    };
  }, []);

  return (
    <h3>
      <time>{time}</time>
      <span>秒経過</span>
      <Random />
    </h3>
    );
};

export default Example;
