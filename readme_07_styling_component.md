# styling

CSS-in-JS

ライブラリーが必要。
`npm i styled-components`

## ボタンをクリックする動作

```jsx
import { useState } from "react";
import styled from "styled-components";

// CSSの属性を確認することができる。
console.dir(styled);

// テンプレート文字列を引数にするstyled関数
// テンプレート文字列『``』の中は文字列です。
// なのでJavaScriptを展開するときは`${}`が必要というわけ。
const StyledButton = styled.button`
  display: block;
  width: 120px;
  height: 60px;
  margin: auto;
  font-weight: bold;
  /* CSSで状態を扱うことができる。 */
  /* isSelected={isSelected}のStateをonClickイベントハンドラーで発火させて使う。 */
  background-color: ${(props) => props.isSelected ? "pink" : ""};
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  transition: .3s;
`;

const Example = () => {
  // `onClick`Propsで発火する。toggleスイッチのイデオム。
  const [isSelected, setIsSelected] = useState(false);
  const clickHandler = () => setIsSelected((prev) => !prev);

  return (
    <>
      <StyledButton isSelected={isSelected} onClick={clickHandler}>button</StyledButton>
    </>
  );
};

export default Example;
```

### 分割代入で書ける

```jsx
background-color: ${(props) => props.isSelected ? "pink" : ""};
                        ⇩
background-color: ${({isSelected}) => isSelected ? "pink" : ""};
```

## スタイルの継承、擬似要素、入れ子

```jsx
import { useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: block;
  width: 120px;
  height: 60px;
  margin: auto;
  font-weight: bold;
  background-color: ${({isSelected}) => isSelected ? "pink" : ""};
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  transition: .3s;
`;

// StyledButtonを継承する書式
const OrangeButton = styled(StyledButton)`
  background-color: orange;
  /* 擬似要素を書く。 */
  :hover {
    opacity: .5;
  }
  /* 入れ子で書く。 */
  span {
    font-size: 2em;
  }
`;

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);
  const clickHandler = () => setIsSelected((prev) => !prev);

  return (
    <>
      <StyledButton isSelected={isSelected} onClick={clickHandler}>button</StyledButton>
      {/* 継承したボタン */}
      <OrangeButton isSelected={isSelected} onClick={clickHandler}><span>button</span></OrangeButton>
    </>
  );
};

export default Example;
```

## 上記を踏まえて練習する。

* Q1. FirstButtonのbackgroudをpinkにしてください。
* Q2. FirstButtonを継承したSecondButtonを作成し、backgroudをredに、colorをwhiteにしてください。
* Q3. SecondButtonを継承したThirdButtonを作成し、props.darkがある場合のみbackgroudがblackに、ない場合はgreenになるようにしてください。

```jsx

import styled from "styled-components";
import { useState } from "react";

const FirstButton = styled.button`
  display: inline-block;
  width: 11rem;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  font-weight: bold;
  background-color: pink;
  border-radius: 3px;
  border: none;
`;

const SecondButton = styled(FirstButton)`
  color: #fff;
  background-color: red;
`;

const ThirdButton = styled(SecondButton)`
  background-color: ${({dark}) => dark ? "black" : "green"};
`;

const Example = () => {
  const [dark, setDark] = useState(true);

  return (
    <>
      <FirstButton>ボタン1</FirstButton>
      <SecondButton>ボタン2</SecondButton>
      <ThirdButton dark={dark}>ボタン3</ThirdButton>
      <ThirdButton>ボタン4</ThirdButton>
    </>
  );
};

export default Example;
```