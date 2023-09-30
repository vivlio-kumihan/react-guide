import { useState } from "react";

const Example = () => {
  const [selected, setSelected] = useState("Apple");
  const OPTIONS = ["Apple", "Banana", "Cherry"];

  return (
    <>
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        {
          // {}だとダメなやつ。
          OPTIONS.map(item => (
            <option key={item} value={item}>{item}</option>
          ))
        }
      </select>
      <div>選択された果物: {selected}</div>
    </>
  );
};

export default Example;
