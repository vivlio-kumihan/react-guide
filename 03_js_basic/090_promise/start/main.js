// 2秒待った後にコールバック関数を実行する基本形
setTimeout(() => {}, 2000)

// 1. 非同期処理とは何か？
// 処理を上から下へ書いても順番通りに実行されない。
// このコードでは、setTimeout()関数を使っている箇所が非同期処理と呼ばれる。

// 変数に0を代入。
let num = 0
// コンソールに出力
console.log(`first time: ${ num }`)

// 2秒後に実行する。
setTimeout(() => {
  num = 1
}, 2000)

// コンソールに出力
console.log(`second time: ${ num } <- what num`)

// result
// first time: 0
// main.js:16 second time: 0 <- what num


// 2. 非同期処理の中でコンソールログを書けないことがある。
// つまり非同期処理の中で出力するコードを書けないことがあるという意味だろう。
let num = 0
console.log(`first time: ${ num }`)

setTimeout(() => {
  num = 1
  console.log(num) // <= ここの非同期処理のこと
}, 2000)

console.log(`second time: ${ num } <- what num`)

// 3-1. 非同期処理が終わった後に処理をつなげるのが`promise`
// 先ほども書いたが、非同期処理の中で出力するコードを書けない時に使う方法。
// だから出力順番として結果は`2`と同じ。

let num = 0
console.log(`first time: ${ num }`)

// Promiseのインスタンス化を行う。引数には、コール・バック関数をとる。
// コール・バック関数には、`resolve, reject`という2つの関数が引数として渡ってくる。
// このインスタンスの中へ非同期処理を埋め込む。
new Promise((resolve, reject) => {
  setTimeout(() => {
    num = 1
    // 非同期処理が終わったタイミングでresolve()関数が呼ばれ、
    resolve()
  }, 2000)
  // まさに『その時』この箇所に書いたコールバック関数が実行される。
}).then(() => {
  console.log(`second time: ${ num } <- 非同期のnum`)
})

console.log(`third time: ${ num } <- 最初のnum`)

// 3-2. 解説がよくわからんが引数を明示することもできる。
// 多分変数が複数になった場合を想定しているのだと思う。
// `resolve関数`の引数は`then関数`の引数と1:1で対応している。
// だから、引数名が違っても値を追跡できてる。
// これはどうだかわからないが、
// `then関数`の引数を一定のものにしておいて、
// `resolve関数側で振り返ることができる。

let num = 0
let str = "hello"
console.log(`first time: ${ num }`)

new Promise((resolve, reject) => {
  setTimeout(() => {
    num = 1
    str = "good-bye"
    resolve(str)
  }, 2000)
}).then((result) => {
  console.log(`second time: ${ result } <- 非同期のnum`)
})

console.log(`third time: ${ num } <- 最初のnum`)

// 4. reject
// `reject()`関数を発火させると`catch()関数`が実行される。
// なんらかのエラーが発生した時に使うもの。`resolve()`関数と同時では使えない。
let num = 0
let str = "hello"
console.log(`first time: ${ num }`)

new Promise((resolve, reject) => {
  setTimeout(() => {
    num = 1
    reject()
    // resolve()
  }, 2000)
}).then(() => {
  console.log(`second time: ${ num } <- 非同期のnum`)
}).catch(() => {
  console.log(`reject: ${ num }`)
})

console.log(`third time: ${ num } <- 最初のnum`)

// 5. then()関数の数珠繋ぎ
// then()関数は処理を処理を繋げることが出来る。その際には変数を返すことを忘れずに。
let num = 0
let str = "hello"
console.log(`first time: ${ num }`)

new Promise((resolve, reject) => {
  setTimeout(() => {
    num = 1
    resolve(num)
    // reject()
  }, 2000)

}).then((num) => {
  console.log(`second time: ${ num } <- 非同期のnum`)
  return num;
}).then((num) => {
  console.log(`second time: ${ num } <- 非同期のnum`)
  return num;
}).then((num) => {
  console.log(`second time: ${ num } <- 非同期のnum`)
}).catch(() => {
  console.log(`reject: ${ num }`)
})

console.log(`third time: ${ num } <- 最初のnum`)
