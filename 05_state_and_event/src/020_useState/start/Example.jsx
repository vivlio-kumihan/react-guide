// フォームに入力した値を管理して、別の要素へ値として設定する。

// useStateをインポートする。
import { useState } from "react";
const Example = () => {
  // useStateは、[読み込み用の値]と[変更用の関数]からなる配列 => [[値], [関数]]
  // なのでコード内で展開する場合には、下準備として分割代入で配列にしておく。
  let [val, setVal] = useState("");
  return (
    <>
      <form action="">
        {/* input要素へ入力される値をe（イベント）が起こるごとに、
        その値をsetVal関数の引数として実行する。 */}
        <input 
          type="text" 
          onChange = { (e) => { setVal(e.target.value) } }
        />
      </form>
      {/* そうすると、適宜値はval変数へ代入されJSX要素内で表現される。 */}
      <h3>{ val }</h3>
    </>
  );
};
export default Example;
