// // 1. コンポーネントを跨いで値を受け渡しする方法について
// //    HTMLのref属性は特別
// //    ref属性をコンポーネント間で受け渡しできるが、
// //    コンポーネント間での依存関係が強くなってしまうので出来るだけ実装は避ける。

// import { useRef, forwardRef } from "react";

// // HTMLのref属性は特別。Reactで取り扱う際に注意が必要。
// // ref属性の名前を変えてしまってやり過ごす方法がまず一つ。
// const Input = ({ costomRef }) => {
//   return <input type="text" ref={ costomRef } />
// };
// const Example = () => {
//   const ref = useRef();
//   return (
//     <>
//       <Input costomRef={ ref }/>
//       <button onClick={() => ref.current.focus()}>
//         インプット要素をフォーカスする
//       </button>
//     </>
//   );
// };

// export default Example;


// 2. その他の方法　forwardRef関数を使う
import { useRef, forwardRef } from "react";

// forwardRef関数も引数として
/*
子コンポーネント内の DOM に直接アクセスしたいときに使います。
refは、親から子コンポーネントへprops形式で渡して参照するということができないため、
参照したい場合は子コンポーネント内でfowardRefを使用する必要があります。
*/
const Input = forwardRef((props, ref) => {
  return <input type="text" ref={ ref } />
});
const Example = () => {
  const ref = useRef();
  return (
    <>
      <Input ref={ ref }/>
      <button onClick={() => ref.current.focus()}>
        インプット要素をフォーカスする
      </button>
    </>
  );
};

export default Example;

