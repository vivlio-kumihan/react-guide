import { useState } from "react";

// コンポーネントごとに値を維持させる方法
const Example = () => {
  // 2. AとB　2種類のstateを生成させる。
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const [toggle, setToggle] = useState(true);
  const switchToggle = () => {
    setToggle(prev => !prev);
  };
  return (
    <>
      {/* propsで子コンポーネントに渡す。 */}
      <button onClick={ switchToggle }>スイッチ</button>
      { 
        toggle
          ? <Count key="A" title="A" count={ countA } setCount={ setCountA }/> 
          : <Count key="B" title="B" count={ countB } setCount={ setCountB }/> 
      }
    </>
  );
};

const Count = ({ title, count, setCount }) => {
  // 1. 子コンポーネントで定義しているstateを親に移動させる。
  // const [count, setCount] = useState(0);
  const countUp = () => {
    setCount((prevstate) => prevstate + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h3>カウント{ title }: {count}</h3>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;