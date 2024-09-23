import { useEffect, useState } from "react";

// 前回、
// `useEffect`関数は、第二引数に『空の配列』を設定してした場合、
// コンポーネントが最初に初期化された時だけ、引数のコールバック関数を実行することを習った。

// 今度は、依存配列に`state`を設置すると、`state`が`更新`される度に`コールバック関数が実行`されることを確認する。

// 『useEffectは、
// stateの更新に伴って何らかの処理を行いたい場合に使う』ここ大事！


const Example = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    console.log('useEffect is called');
    window.setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);
    // 依存配列
    // この配列にstateを含めると、その`state`が`更新`される度に`コールバック関数が実行`される。
  }, []);

  // // 1. こちらで試す。
  // useEffect(() => {
  //   console.log('更新したので実行されました。');
  // }, [time]);

  // 2. こちらで試す。
  useEffect(() => {
    // そもそもこれらは純粋関数の観点から関数コンポーネントに直に入れてはいけない。
    // titleのテキストを動的に変えてみたり、
    document.title = "counter:" + time;
    // ローカルストレージの値にアクセスしたりできる。
    window.localStorage.setItem("time-key", time);
  }, [time]);

  // // 3. 無限ループに陥る注意点
  //        useEffect関数内で更新関数を発火させるな！！
  // useEffect(() => {
  //   console.log('useEffect is called');
  //   // useEffect関数内で更新関数を発火させると無限ループになる。
  //   setTime(prev => prev + 1);
  // }, []);
  
  return (
    <h3>
      <time>{time}</time>
      <span>秒経過</span>
    </h3>
    );
};

export default Example;
