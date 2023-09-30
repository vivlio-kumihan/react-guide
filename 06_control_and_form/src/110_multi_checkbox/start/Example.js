import { useState } from "react";

const Example = () => {

  // checkboxとラベル部
  const [fruits, setFruits] = useState([
    { name: "Apple", value: 100, checked: false },
    { name: "Banana", value: 200, checked: false },
    { name: "Cherry", value: 300, checked: false },
  ]);

  // 合計値表示部
  const [sum, setSum] = useState(0);

  // `checkbox`をクリックしたら発生する`e`（イベント）は、
  // `jsx`の`value={fruit.name}`を参照している。
  // なので、`e.target.value`は選択した果物の名前が返ってくるわけ。
  const handleChange = (e) => {
    // `React.js`は元のオブジェクトを使う際は、コピーしてから使う原則がある。
    const newFruits = fruits.map((fruit) => {
      // ...fruitでfruitの中身（ハッシュ）を持ってきて、
      // 改めて{}リテラルで囲んで変数に代入して複製という手順がReact.js流。
      const newFruit = { ...fruit };
      if (newFruit.name === e.target.value) {
        newFruit.checked = !fruit.checked;
      }
      return newFruit;
    });
    // `return`されたnewFruitsを状態のセッターに引数で入れてやる。
    // 新たな状態を生成する。
    setFruits(newFruits);

    // 合計表示
    let sumVal = newFruits
      .filter((fruit) => fruit.checked)
      .reduce((sumVal, fruit) => sumVal + fruit.value, 0);
    // 状態へ渡してやる。
    setSum(sumVal);
  };
  
  return (
    <>
      {
        fruits.map((fruit) => {
          return (
            <div key={fruit.name}>
              <input 
                id={fruit.name}
                value={fruit.name}
                type="checkbox"
                onChange={handleChange}
                checked={fruit.checked}
              />
              <label htmlFor={fruit.name}>{fruit.name}: {fruit.value}</label>
            </div>
          )
        })
      }
      <div>合計：{sum}</div>
    </>
  );
};

export default Example;