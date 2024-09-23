import { useState } from "react";

const Example = () => {
  const [isChecked, setIsChecked] = useState(true);
  // // 元の形はこれ。
  // const toggleChecked = (e) => {
  //   setIsChecked((prevState) => {
  //     let state = !prevState;
  //     return state;
  //   });
  // };
  // // 関数に定義するのもなんだから、
  // const toggleChecked = () => {
  //   setIsChecked(prevState => !prevState);
  // }
  return (
    <div>
      <label htmlFor="123">
        Check: 
      </label>
      <input 
        type="checkbox" 
        id="123"
        checked={ isChecked }
        // onChange={toggleChecked}
        // 無名関数で書ける。
        onChange={() => setIsChecked(prevState => !prevState)}
      />
      <div>{ isChecked ? "ON!" : "OFF!"}</div>
    </div>
  );
};

export default Example;
