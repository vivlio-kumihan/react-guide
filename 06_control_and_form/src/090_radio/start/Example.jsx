import { useState } from "react";

const Example = () => {
  const [fruit, setFruit] = useState("Apple");
  const onChange = (e) => setFruit(e.target.value);
  const RADIO_COLLECTION = ["Apple", "Banana", "Cherry"];

  return (
    <>
    {/* label要素にinput要素を囲むパターンもあり */}
    {/* JSXで表現できるものは『式』。mapの返り値は変数に格納できるから『式』 */}
    {
      RADIO_COLLECTION.map((value) => {
        return (
          <label htmlFor="123" key={ value }>
            <input 
              id="123"
              type="radio" 
              value={ value }
              checked={ fruit === value }
              onChange={ onChange }
            />
            { value }
          </label>
        );
      })
    }
    <h3>僕は{ fruit }が食べたい。</h3>
    </>
  );
};

export default Example;
