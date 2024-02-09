// const Example = () => {
//   const clickHander1 = () => {
//     alert("クリックされました。");
//   };
//   const clickHander2 = () => {
//     console.log("クリックされました。");
//   };


//   return (
//     <>
//       <button onClick={clickHander1}>click</button>
//       <button onClick={clickHander2}>click</button>
//     </>
//   );
// };

// export default Example;
import { useState } from "react";

const Example = () => {
  const [inputVar, setInputVar] = useState("");
  const inputFunc = (e) => {
    setInputVar(e.target.value);
  };
  return (
    <>
      <input type="text" onChange={inputFunc} />
      <p>{inputVar}</p>
      <h1>hello</h1>
    </>
  );
};

export default Example;