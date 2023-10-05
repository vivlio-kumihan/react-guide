// 基本的には、refの子コンポーネントへの持ち出しはやらない前提。
// どうしても必要であれば

import { useRef, forwardRef } from "react";

const Example = () => {
  const ref = useRef();
  return (
    <>
      {/* 接木の子コンポーネントのプロップスに`ref`を設定 */}
      <Input ref={ref} />
      <button onClick={() => ref.current.focus()}>
        インプット要素をフォーカスする
      </button>
    </>
  );
};
// 子コンポーネントを生成する際のコールバック関数を
// forwardRef()の引数にして解決する。
// `(props, ref) => {return(...)}`
const Input = forwardRef((props, ref) => {
  return (<input type="text" ref={ref} />);
});

export default Example;
