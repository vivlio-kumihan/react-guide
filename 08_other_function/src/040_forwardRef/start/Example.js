import { useRef, forwardRef } from "react";

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

const Input = ({ref}) => {
  return (
    <>
      <input type="text" ref={ref} />
    </>
  );
};

export default Example;
