// // propsのバケツリレーを解消する方法

// import Child from "./components/Child";
// // createContext関数を読み込み、
// import { createContext } from "react";
// // 渡したい値を関数に引数にして変数に紐づける。そして、exportする。
// export const MyContext = createContext("hello world");

// const Example = () => {
//   return <Child />;
// };

// export default Example;


// // 1. useStete
// import { useState } from 'react';
// import Child from './components/Child';
// import "./Example.css"

// const Example = () => {
//   const [word, setWord] = useState("hello");
//   // const inputWord = (e) => {
//   //   setWord(() => e.target.value);
//   // };
//   return (
//     <Child word={ word } />
//     // <Child word={ word } inputWord={ inputWord } />
//   );
// };

// export default Example;


// // 2. useContext
// import { createContext } from "react";
// export const WordContext = createContext("Hello createContext, useContext!");

// import Child from "./components/Child";

// import "./Example.css"

// const Example = () => {
//   return (
//     <>
//       <div className="wrapper">
//         <h3>ParentComp</h3>
//         <Child />
//       </div>
//     </>
//   );
// };

// export default Example;


// // 【発展】stateを含んだ場合
// import { useState, createContext } from "react";
// export const WordContext = createContext();

// import Child from "./components/Child";
// import OtherBranchChild from "./components/OtherBranchChild";

// import "./Example.css";

// const Example = () => {
//   const [inputWord, setInputWord] = useState("")
//   return (
//     <>
//       <div className="wrapper">
//         <h3>ParentComp</h3>
//         <WordContext.Provider value={ [inputWord, setInputWord] }>
//           <Child />
//           <OtherBranchChild />
//         </WordContext.Provider>
//       </div>
//     </>
//   );
// };

// export default Example;

// 【発展】複数のstateを保持する場合
import { useState, createContext } from "react";
export const StatesContext = createContext();

import Child from "./components/Child";
import OtherBranchChild from "./components/OtherBranchChild";

import "./Example.css";

const Example = () => {
  const [word, setWord] = useState("hello");
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="wrapper">
        {/* ここがミソ。value属性に分割代入で送信する。 */}
        <StatesContext.Provider value={{ word, setWord, count, setCount }}>
          <Child />
          <OtherBranchChild />
        </StatesContext.Provider>
      </div>
    </>
  );
};

export default Example;


// import { useState, createContext } from "react";
// import GrandChild from "./components/GrandChild";
// import OtherBranchChild from "./components/OtherBranchChild";

// export const StatesContext = createContext();

// const Example = () => {
//   const [word, setWord] = useState("hello");
//   const [count, setCount] = useState(0);

//   return (
//     <StatesContext.Provider value={{ word, setWord, count, setCount }}>
//       <div className="wrapper">
//         <h3>Parent Component</h3>
//         <GrandChild />
//         <OtherBranchChild />
//       </div>
//     </StatesContext.Provider>
//   );
// };

// export default Example;
