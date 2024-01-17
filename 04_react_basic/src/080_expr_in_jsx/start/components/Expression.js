import "./Expression.css";

const Expression = () => {
  // 変数を埋め込む
  const title = "Expression";
  // オブジェクトを埋め込む
  const listItem = ["item01", "item02", "item03"];
  // 関数を埋め込む
  const message = (arg) => `Hello ${ arg }!`;

  return (
    <div className={title.toLowerCase()}>
      <h3>Hello {title}</h3>
      <ul>
        {
          listItem.map((item, idx) => <li key={idx}>{item}</li>)
        }
      </ul>
      <h3>{message("takahiro")}</h3>
    </div>
  );
};

export default Expression;
// // JSXは、JavaScriptの式を評価して画面に表示させるもの。
// // 変数・オブジェクト・関数に対して、{}を使いJSXに埋め込むことができる。
// // 埋め込めるのは『式』
// // JSXの属性の値に対して変数を埋め込むこともできる。

// import "./Expression.css";

// const Expression = () => {
//   // 変数を埋め込む
//   const title = "Expression";
//   // オブジェクトを埋め込む
//   const listItem = ["item01", "item02", "item03"];
//   // 関数を埋め込む
//   const message = (arg) => `Hello ${ arg }!`;

//   return (
//     <div className={title.toLowerCase()}>
//       <h3>Hello {title}</h3>
//       <ul>
//         {
//           listItem.map((item, idx) => <li key={idx}>{item}</li>)
//         }
//       </ul>
//       <h3>{message("takahiro")}</h3>
//     </div>
//   );
// };

// export default Expression;