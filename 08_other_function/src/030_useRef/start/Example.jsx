// useRefとは、
// 再レンダリングを発生させずに値を保持する方法

// * 再レンダリングされても情報が保存される。
//   * 通常の変数はレンダリングの度に初期化される。
// * refの値を変更しても再レンダリングがトリガーされない。
//   * 同じく値を保持できるstateは更新関数にてサイレンダリングされると値は変更される。
// * これが一般的な使用方法
//   * refオブジェクトをJSXのref属性に渡すとそのDOMにアクセスできるようになる。

// // 1. useRef

// import { useState, useRef } from "react";

// // DOMに直接命令する。
// const Case1 = () => {
//   const [value, setValue] = useState("");
//   const inputRef = useRef();
//   // つまり、inputRef変数へcurrentメソッドを充ててやれば色々とできるということ。
//   console.log(inputRef); // => current: undefinedになっている。

//   return (
//     <div>
//       <h3>ユースケース1</h3>
//       {/* 今回やりたいことは、ボタン要素をクリックすると、インプット要素をアクティブにしたい。 */}
//       {/* まずは、インプット要素にref属性を与える。値は先ほどuseRef()で生成させたインスタンス。 */}
//       {/* これによってインプット要素の参照が全て明らかになる。 */}
//       <input type="text" ref={ inputRef } value={ value } onChange={(e) => setValue(e.target.value)} />
//       {/* では、ボタン要素をクリックすることでインプット要素の参照情報をコンソールに出力させてみよう。 */}
//       {/* onClick属性にコールバック関数を渡す。 */}
//       {/* <button onClick={ () => console.log(inputRef) }> */}
//       {/* 取得したインスタンスに対して、この場合は、input要素（DOM）が持っている属性のメソッドを使って操作できる。 */}
//       <button onClick={ () => inputRef.current.focus() }>
//         インプット要素をフォーカスする
//       </button>
//     </div>
//   );
// };

// const Example = () => {
//   return (
//     <>
//       <Case1 />
//     </>
//   );
// };

// export default Example;


// // 2. 動画を再生する

// import { useState, useRef } from "react";
// import "./Example.css";

// const Case2 = () => {
//   const [playing, setPlaying] = useState(false);
//   const videoRef = useRef();
//   // const inputRef = useRef();

//   return (
//     <div>
//       <h3>ユースケース2</h3>
//       <video ref={ videoRef }>
//         <source src="./sample.mp4" />
//       </video>
//       {/* <input type="text" ref={ inputRef } value={ value } onChange={(e) => setValue(e.target.value)} /> */}
//       <button onClick={ () => {
//           // if (playing) {
//           //   videoRef.current.pause();
//           // } else {
//           //   videoRef.current.play();
//           // }
//           // if () {
//           playing ? videoRef.current.pause() : videoRef.current.play();
//           setPlaying(prev => !prev);
//         } 
//       }>
//         { playing ? "動画を停止する" : "動画を再生する" }
//       </button>
//     </div>
//   );
// };

// const Example = () => {
//   return (
//     <>
//       <Case2 />
//     </>
//   );
// };

// export default Example;


// 3.
import { useState, useRef } from "react";
import "./Example.css";
const createTimeStamp = () => new Date().getTime();

/* POINT useRefは再レンダリングされません。
書き換え可能な情報としてコンポーネントに保持させておくことができます。
state は更新されるごとに再レンダーされますが、refオブジェクトの中身が変わっても再レンダーが走ることはありません。
*/
const Case3 = () => {
  const [timeStamp, setValue] = useState(createTimeStamp());
  const ref = useRef(createTimeStamp());

  const updateState = () => {
    setValue(createTimeStamp());
  };

  const updateRef = () => {
    /* コンソールを見るとブラウザの表示と、ref.currentの中身が異なることを確認できます */
    ref.current = createTimeStamp();
    console.log("ref.current -> ", ref.current);
  };
  return (
    <div>
      <h3>ユースケース3</h3>
      <p>
        state: {timeStamp}
        <button onClick={updateState}>更新</button>
      </p>
      <p>
        ref: {ref.current}
        <button onClick={updateRef}>更新</button>
      </p>
    </div>
  );
};

/* POINT refを使うべきタイミング
Reactは一般的に、propsを通して親から子へ作用させる、というデータフローが原則です。
refを使ってコンポーネントに作用を起こすことは、その原則を崩す行為なので多用は避けましょう。

refに適した使用例は以下の場合とされています。
- フォームへのフォーカス、テキストの選択、メディア（動画・音声）の再生の管理
- アニメーションの発火
- サードパーティの DOM や、React管理外のDOMの埋め込み
*/
const Example = () => {
  return (
    <>
      <Case3 />
    </>
  );
};

export default Example;