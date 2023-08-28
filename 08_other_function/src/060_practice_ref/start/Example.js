import { useState, useRef, forwardRef, useImperativeHandle } from "react";
// 1. 親コンポーネントから渡ってくるのはplay, stopメソッド。
const Video = forwardRef(({ path }, ref) => {
  // 2. Videoコンポーネントがわで別名にする。
  const videoRef = useRef();
  // 1. play, stopメソッドを別名で動かせるようにする。
  useImperativeHandle(ref, () => ({
    // 5. 別名にしてメソッドを定義（動きを定義）
    myPlay(){
      videoRef.current.play()
    },
    myStop(){
      videoRef.current.pause()
    }
  }));

  return (
    // 3. 返す要素へvideoRefを設定する。
    <video style={{ maxWidth: "100%" }} ref={videoRef}>
      <source src={path}></source>
    </video>
  );
});

const Example = () => {
  const [playing, setPlaying] = useState(false);
  // 2. ここで定義されるrefを
  const ref = useRef();

  return (
    <div>
      <h3>練習問題</h3>
      <p>useRef、useImperativeHandle、forwardRefを使って完成系の動画再生機能を作成してください。※useImperativeHandleでplay(再生)、stop(停止)メソッドを定義すること。</p>
      <Video ref={ref} path="./sample.mp4" />
      <button
        // 6. ボタンがクリックされた時の状態は、
        onClick={() => {
          if(playing) {
            ref.current.myStop();
          } else {
            ref.current.myPlay();
          }
          setPlaying((prev) => !prev);
        }}
      >
        {playing ? "Stop" : "Play"}
      </button>
    </div>
  );
};
export default Example;
