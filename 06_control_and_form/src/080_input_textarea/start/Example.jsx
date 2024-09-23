import { useState } from "react";

const Example = () => {
  const [val, setVal] = useState("");
  const clearVal = () => setVal("");

  return (
    <div>
      {/* フォーカスするとinput要素が入力状態になる。（HTMLの機能） */}
      <label htmlFor="456">ラベル</label>
      <div>
        <input 
          type="text"
          id="123"
          placeholder="Hello"
          // 実用的なコードではない。
          // 入力するとinput・textarea要素両方で値が変化する、
          // value={ val }を両方で設置してあるから。
          value={ val }
          onChange={(e) => setVal(e.target.value)}
        />
        {/* JSXではtextarea要素は閉じタグにして、値はvalue属性で設定する。 */}
        <textarea 
          id="456"
          placeholder="Hello"
          value={ val }
          onChange={(e) => setVal(e.target.value)}
        />
      </div>
      <h3>{ val }</h3>
      <button onClick={ clearVal}>クリア</button>
    </div>
  );
};

export default Example;
