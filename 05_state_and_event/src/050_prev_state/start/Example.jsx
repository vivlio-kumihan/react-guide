// // 1. ボタンのイベントをやる。
// import { useState } from "react";

// const Example = () => {
//   const [count, setCount] = useState(0);
//   const countUp = () => { setCount(count + 1)};
//   const countDown = () => { setCount(count - 1)};
//   return (
//     <>
//       <p>現在のカウント数：{ count }回</p>
//       <button onClick={ countUp }>＋ボタン</button>
//       <button onClick={ countDown }>ーボタン</button>
//     </>
//   );
// };
// export default Example;

// // 2. prevstateを試す
// // 2-1 関数内でset関数がどのように挙動するかを理解する
// import { useState } from "react";

// const Example = () => {
//   const [count, setCount] = useState(0);
//   // countUp関数が呼び出されているときにはリロードしていないので
//   // 状態を上書きしても変わらない。
//   const countUp = () => { 
//     // カウントの値を1つ増やして予約する。
//     // リロードされた時点で変数に新たな値を入れる。
//     // countは『0』。
//     setCount(count + 1); // => setCount(1)
//     // リロードされる前だから、countは『0』。
//     setCount(count + 1); // => setCount(1)を繰り返しているだけ。
//   };
//   const countDown = () => { setCount(count - 1)};
//   return (
//     <>
//       <p>現在のカウント数：{ count }回</p>
//       <button onClick={ countUp }>＋ボタン</button>
//       <button onClick={ countDown }>ーボタン</button>
//     </>
//   );
// };
// export default Example;

// 2-2 reactの挙動　prevstate
// 頻出するので覚えるべき挙動。

import { useState } from "react";

const Example = () => {
  const [count, setCount] = useState(0);
  const countUp = () => { 
    // イベント・ハンドラーによるstateの処理
    //    1 => onClick『イベント』を発火される。
    //    2 => setCount(count + 1);『更新関数』で
    //         『stateの変数』の値はカウントアップする。
    //    3 => その値を予約する。
    //    4 => コンポーネントを『再レンダリング』する。
    //    5 => 予約しておいた値を『stateの変数』の値に格納する。
    setCount(count + 1);
    
    // ではこの『更新関数』の後に
    //    setCount(count + 1);
    // とやっても『stateの変数』が『2』にならないのは、
    // 最初の命令で、0が格納されている『stateの変数』に1を格納すると予約する。
    //    setCount(count + 1); => setCount(0 + 1); => setCount(1);
    // 同じ命令を続けてしてみても、
    // 『再レンダリングされる前』なので、『stateの変数』はの値は依然として0のまま。
    //    setCount(count + 1); => setCount(0 + 1); => setCount(1);
    // だから値が変わっていないように人間には見えるわけ。

    // あえて、『stateの変数』の値を再レンダリングする前に変更する場合は、
    // 『prevstate』でも『prev』でも『p』なんでもいいので、
    // 更新関数の引数として渡す。この中身は『stateの変数』の値。
    // 任意の操作をして『変更した値』を返す関数を定義する。
    //    setCount((p) => {
    //      return p + 1;
    //    });
    // つまり、これと同義。
    //    const fn = (p) => p + 1;
    //    setCount(fn)

    // コンポーネントを再レンダリングする前の動作として『stateの変数』へ、
    //    count = 1;
    //    count = fn(state);
    // 以上を行う。これで想定した値を設定するstateを作ることができるわけ。

    setCount((p) => {
      return p + 1;
    });    
  };
  const countDown = () => { setCount(count - 1)};
  return (
    <>
      <p>現在のカウント数：{ count }回</p>
      <button onClick={ countUp }>＋ボタン</button>
      <button onClick={ countDown }>ーボタン</button>
    </>
  );
};

export default Example;
