// クリックイベントの考え方　その4
// 子コンポーネントで生成していたstateを親コンポーネントへ移動させる。
// stateの個別の維持はできないのでkeyは捨てる。
// 結論としてはstateを仕分ける。

// 新しい視点を得ること。
// 入力は別々だけど、フォーマットである子コンポーネントへ送る属性名は同じ。
// countA、countBと値は別々だけど、属性名はcountとして同名で送っている。
// 子コンポーネントへの『送信は別々』、フォーマット『『一つ』という視点で
// コードを見る、考えること。

import { useState } from "react";
import Counter from "./components/Counter";
import "./sass/Example.sass";

const Example = () => {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  
  const [toggle, setToggle] = useState(true);
  const toggleHandler = () => {
    setToggle(((prevState) => !prevState));
  };

  return (
    <>
      <button onClick={toggleHandler}>Switch Button</button>
      {
        toggle
          ? <Counter title="A" count={countA} setCount={setCountA} />
          : <Counter title="B" count={countB} setCount={setCountB} />
      }
    </>
  );
};

export default Example;







// import { useState } from "react";
// import Counter from "./components/Counter";

// const Example = () => {
//   const [toggle, setToggle] = useState(true);
//   const toggleHandler = () => {
//     setToggle((prevState) => !prevState);
//   };

//   return (
//     <>
//       <button onClick={toggleHandler}>Button Switch</button>
//       {console.log(toggle)}
//       {
//         toggle 
//           ? <Counter title="A" key="A" />
//           : <Counter title="B" key="B" />
//       }
//     </>
//   );
// };

// export default Example;


// import { useState } from "react";
// import Counter from "./components/Counter";

// const Example = () => {
//   const [toggle, setToggle] = useState(true);
//   const toggleHandler = () => {
//     setToggle((prevState) => !prevState);
//   };

//   return (
//     <>
//       <button onClick={toggleHandler}>Switch</button>
//       {
//         toggle
//           ? <Counter title="A" key="A" />
//           : <Counter title="B" key="B" />
//       }
//     </>
//   );
// };

// export default Example;

// import { useState } from "react";
// import Counter from "./components/Counter"

// // POINT stateとコンポーネントの関係
// const Example = () => {
//   const [toggle, setToggle] = useState(true);
//   const toggleHandler = () => {
//     setToggle(prev => !prev);
//   }

//   return (
//     <>
//       <button onClick={toggleHandler}>Switch Button</button>
//       {toggle 
//         ? <Counter key="A" title="A" /> 
//         : <Counter key="B" title="B" />
//       }
//     </>
//   )
// }

// export default Example;

// import { useState } from "react";
// import Counter from "./components/Counter";

// const Example = () => {
//   const [countA, setCountA] = useState(0);
//   const [countB, setCountB] = useState(0);

//   const [toggle, setToggle] = useState(true);
//   const toggleHander = () => {
//     setToggle((prevState) => !prevState);
//   };


//   return (
//     <>
//     <button onClick={toggleHander}>SWICH</button>
//     {toggle 
//       ? <Counter whichCounter="A" count={countA} setCount={setCountA} />
//       : <Counter whichCounter="B" count={countB} setCount={setCountB} />
//     }
//     </>
//   );
// };

// export default Example;


// key="A" 
// key="B" 



// import { useState } from "react";
// import Counter from "./components/Counter";

// const Example = () => {
//   const [counterA, setCounterA] = useState(0);
//   const [counterB, setCounterB] = useState(0);
  
//   const [toggle, setToggle] = useState(true);
//   const toggleHander = () => {
//     setToggle((prevState) => !prevState);
//   };

//   return (
//     <>
//       <button onClick={toggleHander}>切り替え</button>
//       {
//         toggle 
//           ? <Counter key="A" title="A" counter={counterA} setCounter={setCounterA} /> 
//           : <Counter key="B" title="B" counter={counterB} setCounter={setCounterB} />
//       }
//     </>
//   );
// };

// export default Example;


// const Example = () => {
//   return (
//     <>
//       <h3>練習問題</h3>
//       <p>カウントの更新（CountUpdate）と表示（CountResult）を別のコンポーネントに分離してください。Exampleコンポーネント内で現在のカウントの値を管理するstateを一つ定義してこれまでのレクチャーで実装したようなカウンターを作成してください。</p>
//       {/* このコメントアウトを外して利用！
//         <CountResult title="カウント" />
//         <CountUpdate /> 
//       */}
//     </>
//   );
// };
// const CountResult = (/* propsを定義 */) => <h3>{/* propsのtitleとcountの値を表示 */}</h3>

// const CountUpdate = (/* propsを定義 */) => {
//   const countUp = () => {
//     /* countに1追加 */
//   };
//   const countDown = () => {
//     /* countから1マイナス */ 
//   };
//   return (
//     <>
//       <button onClick={countUp}>+</button>
//       <button onClick={countDown}>-</button>
//     </>
//   );
// };

// export default Example;
