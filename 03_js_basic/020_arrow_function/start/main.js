function fn(number) {
  return number * 2;
}
console.log(fn(2))

// // org
// const fnArrow = (number) => {
//   return number * 2;
// }

// // 1行なら省略する。
// const fnArrow = number => number * 2
// console.log(fnArrow(2))

// returnいるの？
// どちらを返していいかわからないので必要。
const fnArrow = (number) => {
  console.log(number)
  return number * 2;
}
console.log(fnArrow(2))

// object問題
// 式の`{}`かobjectの`{}`か判断がつかない。
// `()`で囲みオブジェクトだと教える。
const fnArrowObj = number => ({ result: number * 2})
console.log(fnArrowObj(2))
