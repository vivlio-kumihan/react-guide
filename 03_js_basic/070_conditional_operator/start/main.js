// 三項演算子（ ? : ）

// 変数`flag`に真が格納されている。
const flag = true;
// 三項演算子で、変数`flag`に真であれば、`10`が帰る。
let resultA = flag ? 10: 20;

// 関数の`返り値`で使うことが多いらしい。
const judge = false
const getResult = () => {
  return judge ? "it's true." : "it's false."
}
console.log(getResult());
