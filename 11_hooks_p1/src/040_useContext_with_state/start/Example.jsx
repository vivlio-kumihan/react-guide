// // 枝分かれしたコンポーネントからの状態の変更を伝搬させる方法
//   // <Child />と<OtherChild />の2系統に分かれている。
//   // <OtherChild />での変更発火を<Child />系統のコンポーネントで更新する方法。

//   import { useState, createContext } from "react";
//   import Child from "./components/Child";
//   import OtherChild from "./components/OtherChild";
//   // 2. createContextは、"hello"をGrandChildコンポーネントへ持っていくために使ったもの、
//   //    これをstateにも紐づけて使うことになる。
//   //    用途は違うが、ここでMyContextを宣言したことによって、、、
//   // export const MyContext = createContext("hello");

//   // 3. 今回の場合、"hello"の値まで遡ってはこないが、ややこしのと使わないので引数は取っておく。
//   export const MyContext = createContext();
  
//   const Example = () => {
//   // 1. まずは、<OtherChild />のstateを親に持ってくる。
//   const [state, setValue] = useState(0);

//   return (
//     <>
//     {/* 2. 、、、MyContextコンポーネントを生成できる。 */}
//     {/*    MyContextコンポーネントにProvaider（メソッド？ クラス？）を当ててメッセージを送信する */}
//     {/*    これに属性に紐づいた値（state）を与えて枝分かれしたGrandChildとOtherChildに送る寸法 */}
//     {/*    配列のまま。。。ということはこの時点で別名で送っているの？ */}
//     {/*    ここのvalueで設定した値（状態）が、useContextを通して取得できることになる。 */}
//     <MyContext.Provider value={[state, setValue]}>
//       {/* 3. 子・孫側では、useContextを通して値を見ていくときに、枝を遡っていく、 */}
//       {/*    MyContextコンポーネントに辿り着き、設定した値を参照する。 */}
//       {/*    そこでも値が無ければ『export const MyContext = createContext("hello");』で設定した値をとる。 */}
//       <Child />
//       <OtherChild />
//     </MyContext.Provider>
//     </>
//   );
// };

// export default Example;

// import { useState, createContext } from "react";
// export const MyContext = createContext();

// import Child from "./components/Child";
// import OtherChild from "./components/OtherChild";
// import './Example.css';

// const Example = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <MyContext.Provider value={[count, setCount]}>
//       <div className="wrapper">
//         <Child />
//         <OtherChild />
//       </div>
//     </MyContext.Provider>
//   );
// };

// export default Example;

import { useState, createContext } from "react";
export const CountContext = createContext();

import Child from "./components/Child";
import OtherChild from "./components/OtherChild";

import "./Example.css";

const Example = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <CountContext.Provider value={[count, setCount]}>
        <Child />
        <OtherChild />
      </CountContext.Provider>
    </>
  );
};

export default Example;