import { useState } from "react";
import "./Example.css"

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);
  const clickHandler = () => setIsSelected((prev) => !prev);

  // クラスを追加したい。
  return (
    <>
      <button className={ `btn ${ isSelected ? "selected" : "" }` } onClick={clickHandler}>
        ボタン
      </button>
      <div style={{ textAlign: "center" }}>
        { isSelected && "クリックされました。" }
      </div>
    </>
  );
};
export default Example;
