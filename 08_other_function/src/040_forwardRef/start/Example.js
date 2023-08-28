// // その1
// import { useRef } from "react";

// const Example = () => {
//   const ref = useRef();
//   return (
//     <>
//       {/* input要素に対してref属性がついている。 */}
//       {/* 別のコンポーネントに切り出した（?）時にどのようにrefを受渡するのか？ */}
//       <input type="text" ref={ref} />
//       <button onClick={() => ref.current.focus()}>
//         インプット要素をフォーカスする
//       </button>
//     </>
//   );
// };
// export default Example;

// // その2
// import { useRef } from "react";

// // 1. コンポーネントを生成する。
// // refが定義されていないと怒られるので、
// const Input = () => {
//   return <input type="text" ref={ref} />
// }

// const Example = () => {
//   // 2. そもそもrefはbutton要素のクリック・イベントで使用する際に
//   //   Exampleコンポーネントで定義しているの、それをInputコンポーネントへ渡す。
//   //   そうすると先ほどの警告が解消される。
//   const ref = useRef();
//   return (
//     <>
//       <Input />
//       <button onClick={() => ref.current.focus()}>
//         インプット要素をフォーカスする
//       </button>
//     </>
//   );
// };
// export default Example;


// // その3
// import { useRef } from "react";
// // 2. こちらでpropsを受信する。
// // だが、上手くいかない。
// // refをpropsで受渡するのは推奨していない。
// const Input = ({ ref }) => {
//   return <input type="text" ref={ref} />
// };

// const Example = () => {
//   // 1. button要素でも使っているので、refの定義はこちらに据え置き
//   //    Inputコンポーネントへpropsとして渡す。
//   const ref = useRef();
//   return (
//     <>
//       <Input ref={ref} />
//       <button onClick={() => ref.current.focus()}>
//         インプット要素をフォーカスする
//       </button>
//     </>
//   );
// };
// export default Example;


// // その4-1
// import { useRef } from "react";
// // 2. 改名したpropsを受信する。
// const Input = ({ customRef }) => {
//   // 3. こちらも張り替え。
//   return <input type="text" ref={customRef} />
// };

// const Example = () => {
//   const ref = useRef();
//   return (
//     <>
//       {/* 1. 違う名称にしてやりとりする */}
//       <Input customRef={ref} />
//       <button onClick={() => ref.current.focus()}>
//         インプット要素をフォーカスする
//       </button>
//     </>
//   );
// };
// export default Example;


// その4-2
// 1. forwardRef関数を使う。forwardRef関数をimportする。
import { useRef, forwardRef } from "react";
// Inputコンポーネントで受信するrefをforwardRef関数の引数にする。
// 渡ってきているのはInputコンポーネントのprops。
// 関数コンポーネントの引数はprops、forwardRefの場合だけ第二引数でrefを取れる。
// 引数に入れるのは、{props, ref}。
// 渡ってきたrefは、特別なやりとりをしていることを明示的にしておく。
const Input = forwardRef((props, ref) => {
    return <input type="text" ref={ref} />
});

const Example = () => {
  const ref = useRef();
  return (
    <>
      <Input ref={ref} />
      <button onClick={() => ref.current.focus()}>
        インプット要素をフォーカスする
      </button>
    </>
  );
};
export default Example;