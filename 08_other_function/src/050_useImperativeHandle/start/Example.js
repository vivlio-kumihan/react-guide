// // その1
// import { useRef, forwardRef, useImperativeHandle } from "react";

// /* POINT forwardRef
// 子コンポーネント内の DOM に直接アクセスしたいときに使います。
// refは、親から子コンポーネントへprops形式で渡して参照するということができないため、
// 参照したい場合は子コンポーネント内でfowardRefを使用する必要があります。

// useImperativeHandle
// refで使えるメソッドを制限する目的で使う。
// 必要不可欠なハンドラー（メソッド）を使う宣言をする。
// */
// const Input = forwardRef((props, ref) => {
//   // 使用したいメソッドを含むオブジェクトを含む関数を定義する。
//   // 書式はこう書くか、
//   // useImperativeHandle(ref, () => {
//   //   return {}
//   // })
//   useImperativeHandle(ref, () => ({
//     // 2. focusメソッドを使いたいのでここへ引っ張ってくる。
//     focus() {
//     }
//   }))
//   return <input type="text" ref={ref} />;
// });

// const Example = () => {
//   const ref = useRef();
//   return (
//     <>
//       <Input ref={ref} />
//       {/* 1. 必要不可欠なのでここのfocusメソッドを明示的に取り扱う。 */}
//       <button onClick={() => ref.current.focus()}>
//         インプット要素をフォーカスする
//       </button>
//     </>
//   );
// };
// export default Example;


// // その2
// import { useRef, forwardRef, useImperativeHandle } from "react";

// // 2. 親コンポーネントから渡ってきたrefと、
// const Input = forwardRef((props, ref) => {

//   // 3. コンポーネント内で別名でrefを初期化しておく。
//   const inputRef = useRef(); 

//   // 1. useImperativeHandle関数の第一引数のrefに対して、
//   //    第二引数のオブジェクトに含まれる『メソッドのみ』実行できることになる。
//   useImperativeHandle(ref, () => ({
//     focus() {
//     }
//   }))
//   // 2. 子コンポーネントから出力するrefを別のものにしておく。
//   // return <input type="text" ref={ref} />;

//   // 4. 子コンポーネントから出力するrefを別名にしておく。
//   return <input type="text" ref={inputRef} />;
// });

// const Example = () => {
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


// その3
import { useRef, forwardRef, useImperativeHandle } from "react";

const Input = forwardRef((props, ref) => {
  const inputRef = useRef(); 
  // 1. 親から渡ってきたrefを第一引数に渡し、　
  useImperativeHandle(ref, () => ({
    // 2. メソッドを定義する。呼び出すメソッドの名称も独自のものに変更しておく。
    myFocus() {
      inputRef.current.focus();
      // ちゃんと別名でインスタンスを取れているか確認する。
      console.log(inputRef, '取得できているようです。')
    }
  }))
  return <input type="text" ref={inputRef} />;
});

const Example = () => {
  const ref = useRef();
  return (
    <>
      <Input ref={ref} />
      {/* 3. 独自の名称になったメソッドをここで呼ぶ。 */}
      <button onClick={() => ref.current.myFocus()}>
        インプット要素をフォーカスする
      </button>
    </>
  );
};
export default Example;
