// import { useContext } from "react";
// import { MyContext } from "../Example";

// const GrandChild = () => {
//   // 分割代入でstateだけを受ける。
//   const [value] = useContext(MyContext);
//   return (
//     <div style={{ border: "1px solid black" }}>
//       <h3>孫コンポーネント</h3>
//       {value}
//     </div>
//   );
// };
// export default GrandChild;

import { useContext } from "react";
import { CountContext } from "../Example";

const GrandChild = () => {
  const [count] = useContext(CountContext);
  return (
    <div className="wrapper">
      <h3>GrandChild</h3>
      <p>{ count }</p>
    </div>
  );
};

export default GrandChild;