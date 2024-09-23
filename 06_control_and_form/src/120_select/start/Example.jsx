import { useState } from "react";

const Example = () => {
  const [selected, setSelected] = useState("");
  const OPTIONS = ["Apple", "Cherry", "Banana"]
  return (
    <>
      <form action="">
        <select
          value={ selected }
          onChange={(e) => setSelected(e.target.value)}
        >
          {
            OPTIONS.map((opt) => (
              <option key={ opt } value={ opt }>{ opt }</option>
            ))
          }
        </select>
      </form>
      <p>選択された果物: { selected }</p>
    </>
  );
};

export default Example;
