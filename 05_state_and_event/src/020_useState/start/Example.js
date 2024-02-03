import { useState } from "react";

const Example = () => {
  // Reactでは、useStateを分割代入にするのが流儀。
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <input  
        type="text"
        onChange={handleChange}
      />
      <span> = {value}</span>
    </>
  );
};

export default Example;
