// // 1
// // 必須のライブラリー
// // styled-components

// // VSCodeでも必須の機能拡張
// // styled-components.vscode-styled-components

// import { useState } from "react";
// import styled from "styled-components";

// // まずは、全体に適用させるボタン要素のスタイルは、App.cssに書くこと。
// // コンポーネントで個別に設定したいところを書くようなローカル・ルールを作る。
// // 『styled.button``』これは関数
// // 関数を使ってスタイルが適用されたコンポーネントが返ってくる。
// // テンプレートリテラル『``』の中にCSSを記述する。
// const OrgButton = styled.button`
//   /* propsを読み込んで動的にスタイルを変更する。 */
//   /* background-color: ${ (props) => props.isSelected ? "orange" : "" }; */
//   /* 分割代入で受け取ることもできる。簡素になるよ。 */
//   background-color: ${ ({ isSelected }) => isSelected ? "orange" : "" };
// `;

// const Example = () => {
//   const [isSelected, setIsSelected] = useState(false);
//   const clickHandler = () => setIsSelected((prev) => !prev);

//   return (
//     <>
//       {/* propsを渡すこともできる。 */}
//       <OrgButton isSelected={ isSelected } onClick={ clickHandler }>
//         ボタン
//       </OrgButton>
//       <div style={{ textAlign: "center" }}>
//         {isSelected && "クリックされました。"}
//       </div>
//     </>
//   );
// };

// export default Example;



// 2
import { useState } from "react";
import styled from "styled-components";

const OrgButton = styled.button`
  background-color: ${ ({ isSelectedOrg }) => isSelectedOrg ? "pink" : "" };
  `;

const OrangeButton = styled(OrgButton)`
  background-color: ${ ({ isSelectedOrange }) => isSelectedOrange ? "orange" : "" };
  &:hover {
    color: red;
    opacity: .7;
  }
  @media (max-width: 600px) {
    border-radius: unset;
  }
  & span {
    font-size: 2em;
  }
`;

const Example = () => {
  // Org button:
  const [isSelectedOrg, setIsSelectedOrg] = useState(false);
  const clickHandlerOrg = () => setIsSelectedOrg((prev) => !prev);
  // Orange button:
  const [isSelectedOrange, setIsSelectedOrange] = useState(false);
  const clickHandlerOrange = () => setIsSelectedOrange((prev) => !prev);

  return (
    <>
      <OrgButton isSelectedOrg={ isSelectedOrg } onClick={ clickHandlerOrg }>
        ボタン
      </OrgButton>
      <div style={{ textAlign: "center" }}>
        {isSelectedOrg && "クリックされました。"}
      </div>
      <OrangeButton isSelectedOrange={ isSelectedOrange } onClick={ clickHandlerOrange }>
        <span>ボタン</span> 
      </OrangeButton>
      <div style={{ textAlign: "center" }}>
        {isSelectedOrange && "クリックされました。"}
      </div>
    </>
  );
};

export default Example;
