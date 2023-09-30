import { useState } from "react";

const Example = () => {
  const [fruit, setFruit] = useState(true);
  const onChange = (e) => setFruit(e.target.value);
  const RADIO_COLLECTION = ["Apple", "Banana", "Cherry"];

  return (
    <>
      {
        RADIO_COLLECTION.map(item => {
          return (
            <div key={item}>
              <input id={item} type="radio" onChange={onChange} checked={fruit === item} value={item} />
              <label htmlFor={item}>{item}</label>
            </div>
          );
        })
      }
    </>
  );
};

export default Example;
