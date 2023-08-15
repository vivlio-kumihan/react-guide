// falsy → 真偽値に変換した際に"偽(false)"とみなされる値のこと。
// truthy → それ以外

/* falsyな値の一覧
false
0 (数字)
0n (big int)
"" (空文字)
null
undefined
NaN (Not a Number)
*/

// const a = 0;
// let result = a ? 10 : -10;
// console.log(result);

// // `Boolean()`関数で真偽値（`true, false`）が取れる。
// const falsy = 0;
// const truthy = 1;
// console.log(Boolean(truthy));
// console.log(Boolean(falsy));

// 論理積 (&&) について
// falsyな値を返す。
// 真 && 偽 => 偽
// 偽 && 真 => 偽
// 真 && 真 => 右側の真
const resultA1 = "foo" && ""; // => ""
const resultA2 = "" && "foo"; // => ""
const resultB = 2 && 1 && 0 && 3; // => 0
const resultC = "foo" && 4; // => 4

console.log(resultA1);
console.log(resultA2);
console.log(resultB);
console.log(resultC);

// // 理論和 (||) について
// truthyな値を返す。
// 真 && 偽 => 真
// 偽 && 真 => 真
// 真 && 真 => 左側の真
const resultD = "" || "foo";
const resultE = 0 || 2 || 0;
const resultF = "foo" || 4;

console.log(resultD);
console.log(resultE);
console.log(resultF);
