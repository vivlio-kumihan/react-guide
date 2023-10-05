// refの問題点
// `ref.current`にはそのインスタンスごとに多くのメソッドがある。
// 開発メンバーが複数になり、このコードを書いた本人の意図しない
// 使われ方をしてバグを発生させる危険性がある。
// それを回避するのがuseImperativeHandle()関数。
// refを使う操作を限定するための関数。
// このコードで意図しない使われ方があるのは、ref.current.focus()

// useImperativeHandle()関数は子コンポーネントで使う

import { useRef, forwardRef, useImperativeHandle } from "react";

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
// 渡ってきたrefに対してuseImperativeHandle()関数を設定する。
const Input = forwardRef((props, ref) => {
  // refはそのまま使わない。新たに用意する。
  const inputRef = useRef();
  // 第一引数には、渡ってきたref
  // 第二引数には、使用したいメソッドを含むオブジェクトを返す関数を敷設する。
  // // 短縮せずに書くと
  // useImperativeHandle(ref, () => {
  //   return {
  //     // ここで`focus()`メソッドを定義する
  //     focus: function() {
  //       inputRef.current.focus();
  //     }
  //   };
  // });
  // 短縮して書くと『オブジェクトを返す関数』を『{}』で囲み
  // それを『()』で囲む
  useImperativeHandle(ref, () => (
    {
      myFocus() {
        inputRef.current.focus();
      }
    }
  ));
  return <input type="text" ref={inputRef} />;
});

export default Example;