import "./Child.css";

// // 1
// const Child = (props) => {
//   console.log(props);
//   return (
//     <>
//       {/* 文字列は『式文』なのでJSXに埋め込める。 */}
//       <div className={ `component` }>
//         <h3>Hello Component</h3>
//       </div>
//       {/* JSXの中で文字列を埋め込んでいる。
//       プラスJSのテンプレートリテラルを使って変数展開＋文字列の結合をしている。 */}
//       <div className={ `component ${ props.changeColor }` }>
//         <h3>Hello Component</h3>
//       </div>

//     </>
//   );
// };
// export default Child;

// // 2 コンポーネントの引数をオブジェクトを分割代入で
// // 親が渡しているのオブジェクトなので、分割代入でキーを受け取って使えばコード量が減るし見通し良くなる。
// const Child = ({ changeColor }) => {
//   return (
//     <>
//       {/* 考え方として、 */}
//       {/* 文字列は『式文』なのでJSXに埋め込める。 */}
//       {/* <div className={ `component` }>
//         <h3>Hello Component</h3>
//       </div> */}

//       {/* その上で、以下のコードを見てみると、 */}
//       {/* JSXの中で文字列を埋め込んでいる。
//       プラスJSのテンプレートリテラルを使って変数展開＋文字列の結合をしている。 */}
//       <div className={ `component ${ changeColor }` }>
//         <h3>Hello Component</h3>
//       </div>
//     </>
//   );
// };
// export default Child;

// // 3 引数の初期設定
// // 親で『<Child changeColor = "" />』こんな記述も気持ち悪いので、
// // 引数にデフォルト値を設定する。
// const Child = ({ changeColor = "green" }) => {
//   return (
//     <>
//       <div className={ `component ${ changeColor }` }>
//         <h3>Hello Component</h3>
//       </div>

//     </>
//   );
// };
// export default Child;

// 3 引数にこのコンポーネントないで使える別名を設定する
const Child = ({ changeColor: color = "green" }) => {
  return (
    <>
      <div className={ `component ${ color }` }>
        <h3>Hello Component</h3>
      </div>

    </>
  );
};
export default Child;