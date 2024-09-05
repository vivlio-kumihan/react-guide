// 1
// import Child from "./components/Child";

// // 親は、子コンポーネントを読み込むときに属性と値を設定して、子コンポーネントに渡すことができる。
// const Example = () => (
//   <Child 
//     changeColor = "red"
//   />
// );
// export default Example;

// // 2
// import Child from "./components/Child";

// // 親は、子コンポーネントを読み込むときに属性と値を設定して、子コンポーネントに渡すことができる。
// const Example = () => (
//   <>
//     <Child changeColor = "" />
//     <Child changeColor = "red" />
//   </>
// );
// export default Example;

// 3, 4
import Child from "./components/Child";

// 親は、子コンポーネントを読み込むときに属性と値を設定して、子コンポーネントに渡すことができる。
const Example = () => (
  <>
    {/* この1行目がスッキリ普通に表現できてるね。 */}
    <Child />
    <Child changeColor = "red" />
  </>
);
export default Example;
