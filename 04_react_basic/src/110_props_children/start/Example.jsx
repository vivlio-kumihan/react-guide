import Profile from "./components/Profile";
import Container from "./components/Container";

// 1. childrenを使う
// const profile = [
//   { name: "Takashi", age: 19, country: "Japan", color: "green" },
//   { name: "Jane", age: 28, country: "UK", color: "blue" },
// ];
// const Example = () => {
//   return (
//     <div>
//       {/* これは今までやってきたコンポーネントを埋め込む記述法 */}
//       {/* <Container title="Childrenとは？" /> */}

//       {/* 終了タグのある要素のように囲む */}
//       {/* <Container>...</Container>として囲む。 */}
//       {/* その中に親の別の子コンポーネントを埋め込む。 */}
//       <Container title="Childrenとは？">
//         <Profile { ...profile[0] } />
//         <Profile { ...profile[1] } />
//         <Profile />
//       </Container>
//     </div>
//   );
// };
// export default Example;

// // 2. childrenをchildren属性として配列にして使ってみる。
// const profile = [
//   { name: "Takashi", age: 19, country: "Japan", color: "green" },
//   { name: "Jane", age: 28, country: "UK", color: "blue" },
// ];
// // childrenを使う
// const Example = () => {
//   return (
//     <div>
//       <Container 
//         title="Childrenを配列で展開して使う"
//         // まずは、属性の引数は『JSX』だということに留意。
//         // その中で配列にコンポーネントを格納する。
//         children={
//           [
//             // 配列で展開する場合は一意のキーの情報を付与する
//             <Profile key={ profile[0].name} { ...profile[0] } />,
//             <Profile key={ profile[1].name} { ...profile[1] } />
//           ]
//         }
//       />
//     </div>
//   );
// };
// export default Example;


// 3. 個別に渡す
const profile = [
  { name: "Takashi", age: 19, country: "Japan", color: "green" },
  { name: "Jane", age: 28, country: "UK", color: "blue" },
];
// propsを個別に渡す
const Example = () => {
  return (
    <div>
      <Container 
        title="propsを個別に渡す"
        // まずは、属性の引数は『JSX』だということに留意。
        // その中で配列にコンポーネントを格納する。
        children={
          [
            // 配列で展開する場合は一意のキーの情報を付与する
            <Profile key={ profile[0].name} { ...profile[0] } />,
            <Profile key={ profile[1].name} { ...profile[1] } />
          ]
        }
        first={ <Profile key={ profile[0].name} { ...profile[0] } /> }
        second={ <Profile key={ profile[1].name} { ...profile[1] } /> }
      />
    </div>
  );
};
export default Example;
