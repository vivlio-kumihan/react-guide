import { useState } from "react"

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);
  const clickHandler = () => setIsSelected(prev => !prev);
  // インライン・スタイルはオブジェクトを変数に代入して指定する。
  // JS内の記述なので扱いがCSSと違う。
  // 値を文字列で区切ったり、数字だけ書いてpx省略、属性はキャメルケースとか。
  // JSが書けるのがメリット。
  // 疑似セレクタやメディアクエリにも対応していない。これは絶望的。常用で使うことはない。
  const style = {
    display: "block",
    width: 200,
    height: 50,
    margin: "0 auto 20px",
    fontWeight: "bold",
    cursor: "pointer",
    border: "none",
    borderRadius: 9999,
    backgroundColor: isSelected ? "pink" : ""
  }

  return (
    <>
      {/* toggle */}
      <button onClick={ clickHandler } style={ style }>ボタン</button>
      {/* 論理積: 真 && 真 => 右側の真 */}
      {/* 上は変数で、こちらは直にインラインする。 */}
      {/* JSX => style={} */} {/* その中の{}はオブジェクト */}
      <div style={{ textAlign: "center" }}>{ isSelected && "クリックされました。" }</div>
    </>
  )
};
export default Example;
