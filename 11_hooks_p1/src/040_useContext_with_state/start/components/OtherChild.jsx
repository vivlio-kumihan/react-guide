// // 1. stateを親に移設する。
// // import { useState } from "react";

// // 4. このコンポーネントでstateを引き取りたいので、useContext関数とMyContext変数をimportする。
// import { useContext } from "react";
// import { MyContext } from "../Example";

// const OtherChild = () => {
//   // 1. stateを親に移設する。
//   // const [ value, setValue ] = useState(0);

//   // 3. 親のstateから更新関数だけを分割代入で取得。
//   const [, setState] = useContext(MyContext);

//   const clickHandler = () => {
//     setState((prev) => prev + 1);
//   };

//   return (
//     <div>
//       <h3>他の子コンポーネント</h3>
//       <button onClick={clickHandler}>+</button>
//     </div>
//   );
// };

import { useContext } from "react";
import { CountContext } from "../Example";

const OtherChild = () => {
  const [, setCount] = useContext(CountContext);
  const countUp = () => {
    return setCount(prev => ++prev);
  };
  return (
      <div className="wrapper">
        <h3>OtherChildComp</h3>
        <button onClick={ countUp }>+</button>
      </div>
  );
};

export default OtherChild;