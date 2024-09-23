// // useReducer:状態の更新の仕方も状態側で担当する。

// // 状態と処理の分離
// // useState: コンポーネントで更新用の処理を保持
// // useReducer: stateと一緒に更新用の処理を保持

// // 純粋性（純粋関数）
// // 特定の引数に特定の戻り値

// // useStateの書き換えです。
// // 1. origin
// import { useState } from "react";
// const Example = () => {
//   const [state, setState] = useState(0);
//   const countUp = () => {
//     return setState(prev => ++prev);
//   };
//   return (
//     <>
//       <h3>{ state }</h3>
//       <button onClick={ countUp }>クリック</button>
//     </>
//   );
// };
// export default Example;

// // 2. useReducerで書き換える
// import { useReducer, useState } from "react";
// const Example = () => {
//   const [state, setState] = useState(0);
//   // useReducer関数を使うと、配列の1番目にstateが渡ってくる。
//   // 配列の2番目にはdispatch関数を配置する。
//   // JSX内でdispatch関数を発火させると、『prev => ++prev, 0』が発動する。
//   // useStateは、発火する属性にきっかけを与える関数内に処理を書くんだけれど、
//   // useReducerは、関数にコールバック関数で処理を書く。
//   const [rstate, dispatch] = useReducer(prev => ++prev, 0);
//   const countUp = () => {
//     return setState(prev => ++prev);
//   };
//   const rcountUp = () => {
//     dispatch();
//   };

//   return (
//     <>
//       <div>
//         <h3>{ state }</h3>
//         <button onClick={ countUp }>クリック</button>
//       </div>
      
//       <div>
//         <h3>{ rstate }</h3>
//         <button onClick={ rcountUp }>クリック</button>
//       </div>
//     </>
//   );
// };
// export default Example;

// // 3. バリエーションを作れる
// import { useReducer, useState } from "react";
// const Example = () => {
//   const [state, setState] = useState(0);
//   // 引数のprevは、state。actionは、dispatch関数の引数が入っている。
//   const [rstate, dispatch] = useReducer((prev, action) => {
//     // 通常は、switch文を使う。
//     switch (action) {
//       case "+": return ++prev;
//       case "-": return --prev;
//       default: throw new Error("不明なアクションです")
//     }
//     // if (action === "+") {
//     //   return ++prev;
//     // } else if (action === "-") {
//     //   return --prev;
//     // }
//   }, 0);
//   const countUp = () => {
//     return setState(prev => ++prev);
//   };
//   const rcountUp = () => {
//     // 関数に区別がつくように引数を与えておく
//     dispatch("+");
//   };
//   const rcountDown = () => {
//     dispatch("-");
//   };

//   return (
//     <>
//       <div>
//         <h3>{ state }</h3>
//         <button onClick={ countUp }>クリック</button>
//       </div>
      
//       <div>
//         <h3>{ rstate }</h3>
//         <button onClick={ rcountUp }>+</button>
//         <button onClick={ rcountDown }>-</button>
//       </div>
//     </>
//   );
// };
// export default Example;

// // 4. 通常、actionはオブジェクトで定義する
// import { useReducer, useState } from "react";
// const Example = () => {
//   const [state, setState] = useState(0);
//   // 引数のprevは、state。actionは、dispatch関数の引数が入っている。
//   const [rstate, dispatch] = useReducer((prev, { type }) => {
//     // 通常は、switch文を使う。
//     switch (type) {
//       case "+": return ++prev;
//       case "-": return --prev;
//       default: throw new Error("不明なアクションです")
//     }
//   }, 0);
//   const countUp = () => {
//     return setState(prev => ++prev);
//   };
//   const rcountUp = () => {
//     // 関数に区別がつくように引数を与えておく
//     dispatch({ type: "+"});
//   };
//   const rcountDown = () => {
//     dispatch({ type: "-"});
//   };

//   return (
//     <>
//       <div>
//         <h3>{ state }</h3>
//         <button onClick={ countUp }>クリック</button>
//       </div>
      
//       <div>
//         <h3>{ rstate }</h3>
//         <button onClick={ rcountUp }>+</button>
//         <button onClick={ rcountDown }>-</button>
//       </div>
//     </>
//   );
// };
// export default Example;

// 5. actionはオブジェクトなので複数送ることができる
import { useReducer, useState } from "react";
const Example = () => {
  const [state, setState] = useState(0);
  // 引数のprevは、state。actionは、dispatch関数の引数が入っている。
  const [rstate, dispatch] = useReducer((prev, { type, step }) => {
    // 忘れてはいけないこと。引数がオブジェクトだったら。。。
    // const newPrev = { ...prev }してね。
    // 通常は、switch文を使う。
    switch (type) {
      // 挙動を変えることに成功。シンプル。すごい。
      case "+": return prev + step;
      case "-": return prev - step;
      default: throw new Error("不明なアクションです")
    }
  }, 0);
  const countUp = () => {
    return setState(prev => ++prev);
  };
  const rcountUp = () => {
    // 関数に区別がつくように引数を与えておく
    dispatch({ type: "+", step: 2});
  };
  const rcountDown = () => {
    dispatch({ type: "-", step: 10});
  };

  return (
    <>
      <div>
        <h3>{ state }</h3>
        <button onClick={ countUp }>クリック</button>
      </div>
      
      <div>
        <h3>{ rstate }</h3>
        <button onClick={ rcountUp }>+</button>
        <button onClick={ rcountDown }>-</button>
      </div>
    </>
  );
};
export default Example;