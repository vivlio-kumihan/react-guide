// Reactにおけるイベントの登録と実行

const Example = () => {
  const clickHander = () => {
    alert('ボタンがクリックされました。')
    return 'hello'
  };
  console.log(clickHander())

  return (
    <>
      <button onClick={clickHander}>クリックしてね！</button>
    </>
  );
};

export default Example;

// 1
// const Example = () => {
  //   // 2. イベントハンドラーで実行される関数をここで定義する。
  //   const clickHander = () => {
    //     alert('ボタンがクリックされました。')
    //   };
    //   return (
      //     <>
      //       {/* 1. イベントの発火装置を設置する。イベントハンドラー */}
      //       {/*    button要素のonClick属性に関数をJSX内で展開できる形で渡す。 */}
      //       <button onClick={clickHander}>クリックしてね！</button>
      //     </>
      //   );
      // };

// 2
// const Example = () => {
//   const clickHander = () => {
//     alert('ボタンがクリックされました。')
//   };
//   // 3. JSXから呼ばれているだけの状態。
//   const hello = ()=> 'hello';
//   // 4. コンソールに出したら`()=> 'hello'`
//   //    定義している内容を表示する。
//   console.log(hello)
//   // 5. 『関数を実行する』を渡すと`return`が返る。
//   console.log(hello())
//   return (
//     <>
//       {/* 『関数を渡す』と『関数を実行する』では意味が違う。 */}
//       <button onClick={clickHander()}>クリックしてね！</button>
//       {/* 1. これは、hello関数を実行する命令をJSXに仕込んでいるのでママ実行されている。 */}
//       <p>{hello()}</p>
//       {/* 2. JSXに関数を渡すと、何もしない。 */}
//       <p>{hello}</p>
//     </>
//   );
// };