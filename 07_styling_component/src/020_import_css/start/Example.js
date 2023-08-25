import { useState } from "react";
import "./Example.css"

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);
  // トグルスイッチの仕込み
  const clickHandler = () => setIsSelected((prev) => !prev);

  // クラスを追加したい。
  return (
    <>
                                {/* クラスの切り替え部 */}             {/* トグルスイッチ発火部 */}
      <button className={ `btn ${ isSelected ? "selected" : "" }` } onClick={  clickHandler }>
        ボタン
      </button>
      <div style={{ textAlign: "center" }}>
        { isSelected && "クリックされました。" }
      </div>
    </>
  );
};
export default Example;
