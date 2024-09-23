import { useEffect, useState } from "react";

// useEffect関数の戻り値について

const Example = () => {
  // 表示するかしないかのフラグのstate
  const [isDisp, setIsDisp] = useState(true);
  return (
    <>
      {/* stateがtrueならコンポーネントを表示させて、
      falseなら『コンポーネントを消滅させる』条件分岐 */}
      { isDisp && <Timer />}
      {/* クリックでフラグを反転させるスイッチの実装 */}
      <button onClick={() => setIsDisp(prev => !prev)}>Toggle</button>
    </>
  );
};

const Timer = () => {
  const [time, setTime] = useState(0);

  // // 1.
  // //   useEffectは、retrun（戻り値）に関数を設定することができる。
  // //   依存配列を渡さなかった場合、
  // //   コンポーネントが削除された際に実行される関数を書くことができる。
  // useEffect(() => {
  //   console.log('init is called');
  //   window.setInterval(() => {
  //     setTime(prev => prev + 1);
  //   }, 1000);
  //   // ↓ ここです。
  //   return () => {
  //     console.log("end");
  //   }
  // }, []);
  
  useEffect(() => {
    console.log('updated');
    document.title = "counter:" + time;
    window.localStorage.setItem("time-key", time);
    return () => {
      // debuggerを使ってコンソールの出力を確認することで動きがわかる。
      // debugger
      console.log("updated end")
    };
  }, [time]);

  // 1秒ごとに動作する仕組みを作る。
  // ただし、stateを消滅させても『動き続ける』
  // これを回避する方法は、
  // 『動き続ける』動作を変数に格納して、
  // returnで無名関数を設定する。
  // 関数内の定義は、windowオブジェクトにclearIntervalメソッドで、
  // 引数には先ほどの変数でメッセージを送る。

  // これによりstateに依存しているuseEffect関数に仕込まれた動きは一斉に止まる。
  // documentのtitleもローカルストレージも動きを止めるよ。
  // 絶対に覚えておくべき処理
  useEffect(() => {
    console.log('useEffect is called');
    let intervalID = null;
    intervalID = window.setInterval(() => {
      console.log("続いているか？");
      setTime(prev => prev + 1);
    }, 1000);
    return () => {
      console.log("end");
      window.clearInterval(intervalID);
    }
  }, [time])

  return (
    <h3>
      <time>{time}</time>
      <span>秒経過</span>
    </h3>
  );
};

export default Example;
