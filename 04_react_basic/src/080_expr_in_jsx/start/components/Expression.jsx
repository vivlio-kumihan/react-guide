// const Expression = () => {
//   return (
//     <>
//       <h3>このH3要素に見えるものは、JSXです。</h3>
//       <p>最初は馴染みにくい書き方だけど便利は便利だ。</p>
//     </>
//   );
// };

// export default Expression;

// // # 1
// import "./Expression.css"
// // JSX内での`{}`は、JSの『`式`』を埋め込むことができる。
// // `文`は埋め込めない。
// const Expression = () => {
//   // 変数をJSX内で展開する。${ var } じゃないよ！
//   const title = "このH3要素に見えるものは、JSXです。";
//   return (
//     <>
//     <div className="expression">
//       <h3>{ title }</h3>
//       <p>最初は馴染みにくい書き方だけど便利は便利だ。</p>
//     </div>
//     </>
//   );
// };

// // # 2
// import "./Expression.css"
// // JSX内での`{}`は、要素の値として変数展開ができるよ。
// const Expression = () => {
//   // 先頭大文字で値を仕込んでおいて。。。
//   const titleClass = "Expression";
//   const title = "このH3要素に見えるものは、JSXです。";
//   return (
//     <>
//       {/* 変数にメソッドを当てることができる。 */}
//       <div className={ titleClass.toLowerCase() }>
//         <h3>{ title }</h3>
//         <p>最初は馴染みにくい書き方だけど便利は便利だ。</p>
//       </div>
//     </>
//   );
// };

// export default Expression;

// // # 3
// import "./Expression.css"
// // JSX内で『文』であるforなどは使えないので、外で変数に格納してから持っていく。
// // 配列やオブジェクトを展開させるやり方はmustで覚えないとダメだよ。
// const Expression = () => {
//   const array = ["item1", "item2", "item3", "item4", "item5"]
//   const listItem = array.reduce((acc, item) => {
//     return acc.concat(<li key={item}>{item}</li>);
//   }, []);
//   const titleClass = "Expression";
//   const title = "このH3要素に見えるものは、JSXです。";
//   return (
//     <>
//       <div className={ titleClass.toLowerCase() }>
//         <h3>{ title }</h3>
//         <p>最初は馴染みにくい書き方だけど便利は便利だ。</p>
//         <ul>
//           <li>{ listItem }</li>
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Expression;


// // # 4
// import "./Expression.css"
// const Expression = () => {
//   // JSX内での`{}`は、『関数』埋め込める。
//   const greet = (name) => {
//     return `Hello, Hello ${ name }!`;
//   };
//   const array = ["item1", "item2", "item3", "item4", "item5"]
//   const listItem = array.reduce((acc, item) => {
//     return acc.concat(<li key={item}>{item}</li>);
//   }, []);
//   const titleClass = "Expression";
//   const title = "このH3要素に見えるものは、JSXです。";
//   return (
//     <>
//       <div className={ titleClass.toLowerCase() }>
//         <h3>{ title }</h3>
//         <p>最初は馴染みにくい書き方だけど便利は便利だ。</p>
//         <ul>
//           <li>{ listItem }</li>
//         </ul>
//         <h3>{ greet("Takahiro") }</h3>
//       </div>
//     </>
//   );
// };

// export default Expression;

// # 5
import "./Expression.css"
const Expression = () => {
  // JSX自身も式なんだ。これが不思議。
  // コンポーネント定義の中では、`<h3>JSX自身も式</h3>`これもJSX 。
  const jsx = <h3>JSX自身も式</h3>;
  const greet = (name) => {
    return `Hello, Hello ${ name }!`;
  };
  const array = ["item1", "item2", "item3", "item4", "item5"]
  const listItem = array.reduce((acc, item) => {
    return acc.concat(<li key={item}>{item}</li>);
  }, []);
  const titleClass = "Expression";
  const title = "このH3要素に見えるものは、JSXです。";
  return (
    <>
      <div className={ titleClass.toLowerCase() }>
        <h3>{ title }</h3>
        <p>最初は馴染みにくい書き方だけど便利は便利だ。</p>
        <ul>
          <li>{ listItem }</li>
        </ul>
        <h3>{ greet("Takahiro") }</h3>
        {/* こんなこともできるし、、、 */}
        { <h3>JSX自身も式</h3> }
        {/* 当たり前に変数展開するわけ */}
        { jsx }
      </div>
    </>
  );
};

export default Expression;
