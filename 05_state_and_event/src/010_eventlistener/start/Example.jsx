// // イベントリスナーの登録と実行
// const Example = () => {
//   // 『イベント・ハンドラー』になるコールバック関数を定義する。
//   const clickHanlder = () => {
//     alert("ボタンがクリックされました。");
//   };
  
//   return (
//     <>
//       {/* イベント・リスナーに関数を仕込む。 */}
//       {/* イベント・リスナーに関数を『渡して』、クリック・イベントを『合図に関数を実行』させる。 */}
//       <button onClick={ clickHanlder }>クリックしてください</button>
//       <button onClick={ () => {
//         clickHanlder();
//       } }>クリックしてください</button>
//     </>
//   );
// };
// export default Example;

// イベントリスナーで関数を実行すると何が起こるか
const Example = () => {
  // 『イベント・ハンドラー』になるコールバック関数を定義する。
  // なお、関数内でメソッドは順に実行されるのだが、
  // 『return』がないので戻り値はundefinedになる。
  // これがミソで、
  // イベント・リスナーへ関数の実行を渡スト、そこにはundefinedを返ってくる。
  // onClickでイベントを呼び出しても返ったきた値はundefinedだから何も起こらない、
  // という仕組みなわけだ。
  const clickHanlder = () => {
    alert("ボタンがクリックされました。");
  };
  console.log(clickHanlder());
  
  return (
    <>
      {/* イベント・リスナーに関数を仕込む。 */}
      {/* イベント・リスナーに関数を『渡して』、クリック・イベントを『合図に関数を実行』させる。 */}
      <button onClick={ clickHanlder() }>クリックしてください</button>
      <button onClick={ () => {
        clickHanlder();
      } }>クリックしてください</button>
    </>
  );
};
export default Example;