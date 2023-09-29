import { useState } from "react";

const Example = () => {
  const [inputVal, setInputVal] = useState("");
  const [textAreaVal, setTextAreaVal] = useState("");
  const clearVal = () => {
    setInputVal("");
    setTextAreaVal("");
  }

  return (
    <>
      <label htmlFor="inputBox">ラベル</label>
      <input 
        id="inputBox"
        type="text"
        onChange={(e) => setInputVal(e.target.value)}
        value={inputVal}
        placeholder="こんにちは"
      />
      <textarea 
        id="inputTextArea"
        type="text"
        onChange={(e) => setTextAreaVal(e.target.value)}
        value={textAreaVal}
        placeholder="こんにちは"
      />
      <button onClick={clearVal}>クリアする</button>
    </>
  );
};

export default Example;