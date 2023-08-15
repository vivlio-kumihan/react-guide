// // for版　配列の値に2を掛けて空の配列に格納する。
// const arr = [10, 20, 30, 40];
// const newArr = [];
// for(let i = 0; i < arr.length; i++) {
//   newArr.push(arr[i] * 2)
// }
// console.log(newArr)

// // map版
// const arr = [10, 20, 30, 40];
// let newArr = [];
// newArr = arr.map(n => n * 2)
// console.log(newArr)

// mapの引数は、`値、インデックス、配列`
// const arr = [10, 20, 30, 40];
// let newArr = [];
// newArr = arr.map((num, idx, arr) => {
//   console.log(num, idx, arr)
//   return num * 2;
// })
// console.log(newArr)

// // forEach版　配列の値に2を掛けて、50以上の値だけ新しい配列に格納する。
// const arr = [10, 20, 30, 40];
// const newArr = [];
// arr.forEach(num => {
//   const val = num * 2
//   if (val > 50) newArr.push(val)
// })
// console.log(newArr)

// map, filterを使えば、短くかく分かりやすく書ける。
const arr = [10, 20, 30, 40];
let newArr = [];
newArr = arr.map(num => num * 2).filter(val => val > 50)
console.log(newArr)