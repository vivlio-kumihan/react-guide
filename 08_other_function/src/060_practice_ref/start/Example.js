import { useState, useRef, forwardRef, useImperativeHandle } from "react";

const Example = () => {
  const [playing, setPlaying] = useState(false);
  const ref = useRef();

  return (
    <div>
      <Video ref={ref} path="./sample.mp4" />
      <button
        onClick={() => {
          if (playing) {
            ref.current.myPause();
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

const Video = forwardRef(({ path }, ref) => {
  const videoRef = useRef();
  useImperativeHandle(ref, () => (
    {
      myPlay() {
        videoRef.current.play();
      },
      myPause() {
        videoRef.current.pause();
      }
    }
  ));

  return (
    <video style={{ maxWidth: "100%" }} ref={videoRef}>
      <source src={path}></source>
    </video>
  );
});

export default Example;
