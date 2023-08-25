import { useState } from "react";
import styled from "styled-components"

// styledの内容を確認すると属性はCSSと同じだけ揃えてある。
// styledに設定したい属性名を充ててインスタンスを生成。
// そこへテンプレート・リテラルで囲んだCSSを記述していく。
// console.dir(styled)

const StyledButton = styled.button`
  margin: auto;
  border-radius: 9999px;
  border: none;
  display: block;
  width: 120px;
  height: 60px;
  font-weight: bold;
  cursor: pointer; 
  background-color: ${ ({ isSelected }) => isSelected ? "pink" : "" };
`
// クラスの継承
// 上書きしたクラスを持ったコンポーネントを作成する。
// styled()関数の引数には、オリジナルのコンポーネントを代入してインスタンスを作る。
// 利点は、擬似要素、スタイルのインデントが使えること。

const OrangeBgColorButton = styled(StyledButton)`
  position: relative;
  background-color: orange;
  :hover {
    color: red;
    opacity: .7;
  }
  ::before {
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translateX(-50%);
    content: "hello";
    font-size: 1em;
    color: #fff;
  }
  span {
    font-size: 1.5em;
  }
`

const SecondButton = styled(StyledButton)`
  color: #fff;
  background-color: ${ ({ dark }) => dark ? "black" : ""};
`

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);
  const clickHandler = () => setIsSelected((prev) => !prev);

  return (
    <>
      {/* `isSelected`を`props`にする。デフォルトで入っているのは`false`。 */}
      <StyledButton isSelected={ isSelected } onClick={ clickHandler }>Button</StyledButton>
      <SecondButton dark="dark" isSelected={ isSelected } onClick={ clickHandler }>Button</SecondButton>
      <OrangeBgColorButton isSelected={ isSelected } onClick={ clickHandler }><span>Button</span></OrangeBgColorButton>
      <div style={{ textAlign: "center" }}>
        {isSelected && "クリックされました。"}
      </div>
    </>
  );
};
export default Example;
