
// import { useContext } from "react";
// import { WordContext} from '../Example';

// const OtherBranchChild = () => {
//   const [, setInputWord] = useContext(WordContext);
//   const inputFn = (e) => {
//     setInputWord(() => {
//       return e.target.value;
//     });
//   };
//   return (
//     <>
//       <div className="wrapper">
//         <h3>OtherBranchChildComp</h3>
//         <input type="text" onChange={ inputFn } />
//       </div>
//     </>
//   );
// };

// export default OtherBranchChild;

// 【発展】複数のstateを含んだ場合
import { useContext } from "react";
import { StatesContext } from "../Example";

const OtherBranchChild = () => {
  const { setWord, setCount } = useContext(StatesContext);  
  const inputWord = (e) => {
    setWord(() => e.target.value);
  };
  const countUp = () => {
    setCount(prev => ++prev);
  };

  return (
    <>
      <div className="wrapper">
        <h3>OtherBranchChild</h3>
        <input type="text" onChange={inputWord} />
        <button onClick={countUp}>Count Up</button>
      </div>
    </>
  );
};

export default OtherBranchChild;


