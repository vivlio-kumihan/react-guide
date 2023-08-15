// // 関数の引数に配列を渡すときのやり方。

// const nums = [3, 1, 4, 1, 5, 10, 2, 6];
// // // max()関数　数値の中で一番大きいものを抽出する関数。
// // const result = Math.max(3, 1, 4, 1, 5, 10, 2, 6);
// // console.log(result);

// // スプレッド演算子 `...Array`を使う。
// // 配列の要素が一つずつ展開されて渡される。
// const result = Math.max(...nums)
// console.log(result);

// スプレッド演算子を使って、元にある配列から新しい配列を作る。
// 配列`arr1`にスプレッド演算子を使って、配列`[]`の中で値が展開される。それを新しい配列に代入する。
let arr1 = [1, 2, 3];
let newArr1 = [...arr1];
console.log(newArr1)       // => (3) [1, 2, 3]
// 元の配列には影響を及ぼさない。
newArr1.push(4)
console.log(arr1, newArr1) // => (3) [1, 2, 3] (4) [1, 2, 3, 4]

// スプレッド演算子を使って配列の結合をする。変数、数値、文字列を結合することも可能。
let arr2 = [1, 2, 3];
let arr3 = [4, 5, 6];
const num = 10
const newArr2 = [...arr2, num, ...arr3]
console.log(newArr2)      // => (7) [1, 2, 3, 10, 4, 5, 6]

// スプレッド演算子をオブジェクトで使ってみる。
// 配列と同じ挙動。
const obj = {
  name: "John",
  instrument: "guitar",
};
const newObj = { ...obj };
newObj.name = "Paul"
newObj.instrument = "bass"
console.log(obj, newObj);
// => {name: 'John', instrument: 'guitar'} {name: 'Paul', instrument: 'bass'}

// スプレッド演算子を関数でも使う。レスト・パラメーターというそうです。
// restA()関数に引数`1と3と4`を与える。スプレッド演算子によりこれは`[1, 3, 4]`と配列として渡される。
const restA = (...argA) => console.log(argA); // => (3) [1, 3, 4]
restA(1, 3, 4)

// 例えば、一番目と二番目をそれ以外をと分ける場合。

const restB = (a, b, ...argB) => {
  console.log(`others: ${ argB }, a: ${ a }, b: ${ b }`);  // => others: 4,5,6, a: 1, b: 3
}
restB(1, 3, 4, 5, 6)
