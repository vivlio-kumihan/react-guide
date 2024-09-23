import { useEffect, useState } from "react";

const Example = () => {
  const [time, setTime] = useState(0);
  // // 1.
  // // 非同期のsetInterval関数でsetTime更新関数を使うと
  // // 1秒ごとに再レンダリングされて非同期のsetInterval関数を無限に発火させることになり、
  // // 意図した結果を得ることができない。
  // window.setInterval(() => {
  //   setTime(prev => prev + 1);
  // }, 1000);

  // 2. この場合に`useEffect`関数を使う
  // `useEffect`関数は、コンポーネントが最初に初期化される時だけ、引数のコールバック関数を実行する。
  // なお、空の配列を第二引数に設定しておく必要がある。
  useEffect(() => {
    console.log("useEffect is called!");
    window.setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);
  }, []);
  return <>
    <h3>
      <time>{ time }</time>
      <span>秒経過</span>
    </h3>
  </>;
};

export default Example;
