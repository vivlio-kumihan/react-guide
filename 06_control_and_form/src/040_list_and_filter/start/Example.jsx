// 1. 
// import { useState } from "react";

// const animals = ["私は髙廣です。", "僕は髙廣です。", "うちの苗字は髙廣どすえ。"];

// const Example = () => {
//   const [filterVal, setFilterVal] = useState("");
//   const searchWord = (e) => {
//     setFilterVal(e.target.value);
//   };
//   return (
//     <>
//       <h3>配列のフィルター</h3>
//       <input type="text" onChange={searchWord} />
//       <ul>
//         {animals
//           .filter(animal => {
//             return animal.indexOf(filterVal) !== -1;
//           })
//           .map((animal) => (
//           <li key={animal}>{animal}</li>
//           ))
//         }
//       </ul>
//     </>
//   );
// };

// export default Example;

// // 2.
// import { useState } from "react";

// const animals = ["私は髙廣です。", "僕は髙廣です。", "うちの苗字は髙廣どすえ。"];

// const Example = () => {
//   const [filterVal, setFilterVal] = useState("");

//   const searchWord = (e) => {
//     setFilterVal(e.target.value);
//   };

//   // 半角スペースまたは全角スペースを正規表現で半角スペース1つに統一し、その後に分割
//   const filterWords = filterVal.trim().replace(/[\s　]+/g, " ").split(" ");

//   return (
//     <>
//       <h3>配列のフィルター</h3>
//       <input type="text" onChange={searchWord} placeholder="例: 髙廣 僕" />
//       <ul>
//         {animals
//           .filter((animal) =>
//             filterWords.every((word) => word === "" || animal.indexOf(word) !== -1)
//           )
//           .map((animal) => (
//             <li key={animal}>{animal}</li>
//           ))}
//       </ul>
//     </>
//   );
// };

// export default Example;

// 3.
import React, { useState } from "react";

const personData = [
  {
    name: "村上 春樹",
    ruby: "むらかみ はるき",
    work: [
      { title: "羊をめぐる冒険", year: "1982年" },
      { title: "ノルウェイの森", year: "1987年" },
      { title: "女のいない男たち", year: "2014年" }
    ]
  },
  {
    name: "三島 由紀夫",
    ruby: "みしま ゆきお",
    work: [
      { title: "仮面の告白", year: "1949年" },
      { title: "金閣寺", year: "1956年" },
      { title: "憂国", year: "1961年" }
    ]
  },
  {
    name: "夏目 漱石",
    ruby: "なつめ そうせき",
    work: [
      { title: "三四郎", year: "1908年" },
      { title: "門", year: "1910年" },
      { title: "こころ", year: "1914年" }
    ]
  },
  {
    name: "夏目 雅子",
    ruby: "なつめ まさこ",
    work: [
      { title: "鬼龍院花子の生涯", year: "1982年" },
      { title: "時代屋の女房", year: "1983年" },
      { title: "瀬戸内少年野球団", year: "1984年" }
    ]
  },
  {
    name: "村上 龍",
    ruby: "むらかみ りゅう",
    work: [
      { title: "限りなく透明に近いブルー", year: "1976年" },
      { title: "コインロッカー・ベイビーズ", year: "1980年" },
      { title: "69 sixty nine", year: "1987年" }
    ]
  }
];

const Example = () => {
  const [filterVal, setFilterVal] = useState("");

  const searchWord = (e) => {
    setFilterVal(e.target.value);
  };

  // 半角スペースまたは全角スペースを正規表現で半角スペース1つに統一し、その後に分割
  const filterWords = filterVal.trim().replace(/[\s　]+/g, " ").split(" ");

  return (
    <>
      <h3>全文検索</h3>
      <input type="text" onChange={searchWord} placeholder="例: 村上 1982" />
      <ul>
        {personData
          .filter((data) =>
            filterWords.every((word) =>
              word === "" ||
              // オブジェクトのすべての値を文字列に変換してチェック
              Object.values(data)
                .flatMap((value) => {
                  // 配列（work）の中身も検索対象に含める
                  return Array.isArray(value)
                    ? value.map((workItem) => Object.values(workItem).join(" "))
                    : value;
                })
                .some((value) =>
                  value.toString().toLowerCase().includes(word.toLowerCase())
                )
            )
          )
          .map((data) => (
            <li key={data.name}>
              {data.name} ({data.ruby})
              <ul>
                {data.work.map((workItem, index) => (
                  <li key={index}>
                    {workItem.title} - {workItem.year}
                  </li>
                ))}
              </ul>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Example;