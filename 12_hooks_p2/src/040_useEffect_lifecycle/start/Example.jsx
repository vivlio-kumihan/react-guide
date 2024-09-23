// useEffectの実行タイミング
//   どんなタイミングでuseEffect関数と仕込まれているreturnが実行されるかを
//   抑える必要がある。

import { useState, useEffect } from "react";

const Example = () => {
  const [state, setState] = useState(0);

  useEffect(
    function update() {
      // 1-2. 単純に上に書かれているから2番目にはこれが呼ばれる。
      // 2-3. useEffectに仕込んだcleanUp関数が呼ばれてから、
      //      こちらが呼ばれる。
      console.log("update");

      return function cleanUp() {
        // 2-2. 更新ボタンを押してstateが更新された時に最初に呼ばれる。
        // 3-1. 他のレクチャーと選択すると、上から順にuseEffectが呼ばれる。
        console.log("update cleanup");
      };
    },
    // 依存配列にstateを指定しているからね。
    [state]
  );

  useEffect(() => {
    // 1-3. 3番目はこれが呼ばれる。
    console.log("mount");

    return () => {
      // 3-2. 他のレクチャーと選択すると、上から順にuseEffectが呼ばれる。
      console.log("mount cleanup");
    };
  }, []);

  // 1-1. 最初にコンポーネントが呼ばれたタイミングで出力される部分
  // 2-1. 更新ボタンを押してらコンポーネントが最初に再レンダリングされる。
  console.log("render");
  
  return (
    <>
      <button onClick={() => setState((prev) => prev + 1)}>更新</button>
      <h3>他のレクチャーを選ぶとunmountが呼ばれます。</h3>
    </>
  );
};

export default Example;
