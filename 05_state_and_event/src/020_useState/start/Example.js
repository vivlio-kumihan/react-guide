import { useState } from 'react';

const Example = () => {
  let [getVal, setVal] = useState();

  return (
    <>
      <p>ゲッター → {getVal}</p>
      <label htmlFor=""> セッター → 
        <input 
          type="text"
          onChange={(e) => {
            const setFnc = setVal;
            setFnc(e.target.value)
          }}
        />
      </label>
    </>
  );
};

export default Example;
