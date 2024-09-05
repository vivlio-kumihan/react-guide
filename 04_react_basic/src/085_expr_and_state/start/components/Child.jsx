/* POINT 式と文
式：何らかの値を返すもの（変数に代入できるもの）
文：変数宣言、for文、if文、switch文やセミコロンで区切るもの。
*/

import "./Child.css";

// // 1.
// const Child = () => {
//   // 変数numに代入できる数値『1』は『式』
//   // 『1』は、『1』という値を返す『式』と言える。
//   const num = 1;
//   return (
//     <div className="component">
//       <h3>式と文</h3>
//       <p>{ 1 }</p>
//     </div>
//   );
// };
// export default Child;

// // 2.
// const Child = () => {
//   // 『hello』という文字列を返す関数を考える。
//   // 関数の『定義』は『文』なので『定義は埋め込めない』。
//   // 関数の『実行』は実行結果『hello』という値を返すので『式』。
//   const fn = () => "hello";
//   const num = 1;
//   return (
//     <div className="component">
//       <h3>式と文</h3>
//       <p>{ fn() }</p>
//       <p>{ 1 }</p>
//     </div>
//   );
// };
// export default Child;

// // 3.
// const Child = () => {
//   // 『1 === 1』は、
//   // 『1』は『1』に等しいので『true』の実行結果をもつ式。
//   // ただし、ブラウザには表示されない。
//   const toggle = 1 === 1;
//   const fn = () => "hello";
//   const num = 1;
//   return (
//     <div className="component">
//       <h3>式と文</h3>
//       <p>{ 1 === 1 }</p>
//       <p>{ fn() }</p>
//       <p>{ 1 }</p>
//     </div>
//   );
// };
// export default Child;

// 4.
const Child = () => {
  // 以下は、文だからJSXに埋め込めない。
  //   変数宣言を変数宣言には代入できない。
  // const v = const variable = "変数";
  //   if文は変数に格納できない。
  // const result = if (true) {
  //   return "hello";
  // }
  // なので、Reactでは、JSXに埋め込み可能な三項演算子を使う場面が多い。
  const result = true ? "yes, true." : "no, false.";
  const toggle = 1 === 1;
  const fn = () => "hello";
  const num = 1;
  return (
    <div className="component">
      <h3>式と文</h3>
      <p>{ result }</p>
      <p>{ true ? "yes, true." : "no, false." }</p>
      <p>{ 1 === 1 }</p>
      <p>{ fn() }</p>
      <p>{ 1 }</p>
    </div>
  );
};
export default Child;
