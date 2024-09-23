// // useContext関数を読み込み、
// import { useContext } from "react";
// // 該当のファイルから変数をimportする。
// import { MyContext } from "../Example";

// const GrandChild = () => {
//   // 変数を引数として関数を発火させて値を取り、
//   const value = useContext(MyContext);
//   return (
//       <div style={{ border: "1px solid black" }}>
//         <h3>孫コンポーネント</h3>
//         {/* 任意の場所で変数展開する。 */}
//         { value }
//       </div>
//   );
// };
// export default GrandChild;

// // 1. useState
// const GrandChild = ({ word }) => {
// // const GrandChild = ({ word, inputWord }) => {
//   return (
//     <>
//       <div className="wrapper">
//       <h3>GrandChild Comp</h3>
//         <p>{ word }</p>
//         {/* <input type="text" /> */}
//         {/* <input type="text" onChange={ inputWord } placeholder="input word here..." /> */}

//       </div>
//     </>
//   );
// };

// export default GrandChild;


// // 2. useContext
// import { useContext } from "react";
// import { WordContext } from "../Example";

// const GrandChild = () => {
//   const word = useContext(WordContext);
//   return (
//     <>
//       <div className="wrapper">
//         <h3>GrandChildComp</h3>
//         <h3>{ word }</h3>
//       </div>
//     </>
//   );
// };

// export default GrandChild;


// 【発展】複数のstateを含んだ場合
import { useContext } from "react";
import { StatesContext } from "../Example";

const GrandChild = () => {
  const { word, count } = useContext(StatesContext);

  return (
    <>
      <div className="wrapper">
        <h3>GrandChildComp</h3>
        <p>{word}</p>
        <p>{count}</p>
      </div>
    </>
  );
};

export default GrandChild;

