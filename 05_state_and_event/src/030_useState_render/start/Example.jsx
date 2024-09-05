import { useState } from "react";

// コンポーネントの再実行 => 『再レンダリング』
// 変更した値を保存しておく => 『stateに保存』

const Example = () => {
  // 再度実行されると個々の初期化が行われて『空』が入ってしまう。
  let displayVal;
  let [ val, setVal ] = useState();
  console.log('再レンダリングされました');
  return (
    <>
      <input
        type="text"
        // onChangeイベントはJSX内で処理は完結する。
        onChange={(e) => {
          console.log(e.target.value);
          setVal(e.target.value);
          // displayVal = e.target.value;
        }}
      />
      {/* なので、別のJSX内の変数の値に影響することはない。
          この変数を変更するにはコンポーネントが再度実行される必要がある。 */}
      = {val}
    </>
  );
};

export default Example;
