import { useState, useRef } from "react";
// 現在時刻を文字列で取得する。
const createTimeStamp = () => new Date().toLocaleString();
// const createTimeStamp = () => new Date().getTime();
// Case3コンポーネントの設定
const Case3 = () => {
  // 最初にリロードされた時の時間とその状態を設定する。
  const [timeState, setTimeState] = useState(createTimeStamp());
  // onClickプロップス・イベントリスナーに敷設した関数。こちらで定義。
  // クリックするたびに再レンダリングされて値が変わっていく。
  const updateState = () => {
    setTimeState(createTimeStamp());
  };
  
  // 今回のrefは、最初にリロードされた時の時間の文字列を設定する。
  const timeRef = useRef(createTimeStamp());
  const updateTimeRef = () => {
    // onClickプロップス・イベントリスナーに敷設した関数。こちらで定義。
    // クリックイベントが次々に発生して`timeRef.current`には新しい値が入ってくるが、
    // スクリーン上の表示には反映されない。
    timeRef.current = createTimeStamp();
    console.log("timeRef.current => ", timeRef.current);
  };

  return (
    <>
      <h3>ユースケース3</h3>
      <p>
        state: {timeState}
        <button onClick={updateState}>更新</button>
      </p>
      <p>
        ref: {timeRef.current}
        <button onClick={updateTimeRef}>更新</button>
      </p>
    </>
  );
};

const Example = () => {
  return (
    <>
      <Case3 />
    </>
  );
};

export default Example;