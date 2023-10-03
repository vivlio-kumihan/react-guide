import { useState, useRef } from "react";

// HTMLでは出来るが、Reactでは出来ないこと。
// button要素をクリックするとinput要素がアクティブになる。

const Case1 = () => {
  const [value, setValue] = useState("");
  const inputRef =useRef();
  
  return (
    <div>
      <h3>ユースケース1</h3>
      {/* `input要素`の`ref属性`に`inputRef`を設定することで、 */}
      {/* このDOM要素の参照を`inputRef`が保持する。 */}
      <input type="text" value={value} ref={inputRef} onChange={(e) => setValue(e.target.value)} />
      {/* 全く関係のない要素にクリックイベントで何が発火されるかやってみると、 */}
      {/* `{current: input}`となりしっかりと捕まえよる。 */}
      <button onClick={() => console.log(inputRef)}>
        インプット要素をフォーカスする
      </button>
    </div>
  );
};

const Example = () => {
  return (
    <>
      <Case1 />
    </>
  );
};

export default Example;
