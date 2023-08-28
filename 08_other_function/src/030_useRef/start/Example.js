import { useState, useRef } from "react";

const Case1 = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef();
  return (
    <div>
      <h3>ケース1</h3>
      <input type="text" value={value} ref={inputRef} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => inputRef.current.focus( )}>
        インプット要素をフォーカスする
      </button>
    </div>     
  );
};

const Case2 = () => {
  const [playing, statePlay] = useState(false);
  const videoRef = useRef();
  return (
    <div>
      <h3>ケース2</h3>
      <video ref={videoRef} style={{ maxWidth: "100%" }}>
        <source src="./sample.mp4" />
      </video>
      <button onClick={() => {
        if(playing) {
          videoRef.current.pause();
        } else {
          videoRef.current.play();
        }
        statePlay(flag => !flag); 
        }
      }>
        { playing ? 'Stop' : 'Play' }
      </button>
    </div>
  )
}

const createTimeStamp = () => new Date().toLocaleString();
const Case3 = () => {
  const [timeStamp, stateTimeStamp] = useState(createTimeStamp());
  const ref = useRef(createTimeStamp());

  const updateState = () => {
    stateTimeStamp(createTimeStamp());
  };

  const updateRef = () => {
    ref.current = createTimeStamp();
    console.log('ref.current -> ', ref.current);
  };

  return (
    <div>
      <h3>ケース3</h3>
      <p>
        state: { timeStamp }
        <button onClick={ updateState }>更新</button>
      </p>
      <p>
        ref: { ref.current }
        <button onClick={ updateRef }>更新</button>
      </p>
    </div>
  )
}

const Example = () => {
  return (
    <>
      <Case1 />
      {/* コンポーネントとして読み込む */}
      <Case2 />
      <Case3 />
    </>
  );
};
export default Example;
