// POINT ReactでのImmutability
// 関数型（純粋関数）
// ・fn(決まった引数) -> 決まった戻り値
// ・関数外の状態（データ）は参照・変更しない。
// ・関数外に影響を及ぼさない。
// ・引数で渡された値を変更しない。（★Immutability）


import { useState } from "react";

// // 1.
// const Child = (props) => {
//   // 引数で渡された値を変更しない原則を破る行為
//   // porpsの属性の値は変更できないということ。
//   // props.state = { value: 100 }; //=> エラーになる。
//   return (
//     <>
//       <span>{props.state.value}</span>
//     </>
//   );
// };

// const Example = () => {
//   const [ state, setState ] = useState({ value: 0 });
//   return (
//     <>
//       <div>
//         <Child state={ state } />
//       </div>
//     </>
//   );
// };

// // 2. 無限ループ
// const Child = ({ state, setState }) => {
//   // 4 再レンダリングでやってきて、またまた、setState({ value: 100});で再レンダリングを。。。
//   // 。。。無限ループする。
//   // 1 再レンダリングを要求すると。。。
//   setState({ value: 100});
//   return (
//     <>
//       <span>{state.value}</span>
//     </>
//   );
// };

// // 2 Exampleコンポーネントを再レンダリングする。
// const Example = () => {
//   const [ state, setState ] = useState({ value: 0 });
//   return (
//     <>
//       <div>
//         {/* 3 Childコンポーネントを再レンダリング */}
//         <Child state={ state } setState={ setState } />
//       </div>
//     </>
//   );
// };


// 3. setStateはイベントに紐づけて呼ぶのが常道
const Child = ({ state, setState }) => {
  // // 1
  // const increment = () => {
  //   // 引数で渡された値を変更しない原則に違反パターン
  //   setState(prev => {
  //     return prev.value += 1;
  //   });

  // 2
  const increment = () => {
    // 別名でね。
    setState(prev => {
      // 別名で保存して返しているのだよ。↓
      const newPrev = { value: prev.value + 1 }
      return newPrev;
    });
  };

  return (
    <>
      <span>{state.value}</span>
      <button onClick={ increment }>クリック</button>
    </>
  );
};

const Example = () => {
  const [ state, setState ] = useState({ value: 0 });
  return (
    <>
      <div>
        <Child state={ state } setState={ setState } />
      </div>
    </>
  );
};

// {/* <Child state={ state } setState={ setState } /> */}
// const Child = ({ state, setState }) => {
//   // setState({ value: 1 })
//   // props.state = { value: 1 }
//   // const increment = () => {
//   //   setState(prev => {
//   //     const newState = { value: prev.value + 1 }
//   //     return newState;
//   //   })
//   // }
//   return (
//     <>
//       <span>{state.value}</span>
//       {/* <button onClick={increment}>+</button> */}
//     </>
//   );
// };

// const Example = () => {
//   const [ state, setState ] = useState({ value: 0 });
//   return (
//     <>
//       <div>
//         <Child state={state} setState={setState} />
//       </div>
//     </>
//   );
// };

export default Example;