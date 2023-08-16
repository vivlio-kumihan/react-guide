// 非同期処理（await, async）

// awaitキーワード then()関数の数珠繋ぎを簡略化する書き方

// 1. 変数aを0で初期化。`init()`関数で、非同期処理をするための`Primise`は使われているが、`then()`関数がないので素通りして`consolo.log()`が出力される。
// ```js
// let a = 0;

// init() // => 0
// function init() {
//   new Promise((resolve) => {
//     setTimeout(() => {
//         a = 1;
//         resolve(a)
//     }, 2000);
//   })
//   console.log(a);
// }
// ```

// 2. 非同期処理の定義の前に`await`、それを定義する関数の前に`async`とそれぞれキーワードを付与する。

// その1
// 非同期処理で`resolve(a)`と引数を設定、出力`console.log(a)`で同じ引数を使う。
// ```js
// let a = 0;

// init() // => 0
// async function init() {
//   await new Promise((resolve) => {
//     setTimeout(() => {
//         a = 1;
//         resolve(a)
//     }, 2000);
//   })
//   console.log(a);
// }
// ```

// その2
// 非同期処理でPromiseを変数に代入。その変数名を出力。本番はこちらのよう。
// ```js
// let a = 0;

// init()
// async function init() {
//   const result = await new Promise((resolve) => {
//     setTimeout(() => {
//         a = 1;
//         resolve(a)
//     }, 2000);
//   })
//   console.log(result);
// }
// ```

// 3. 例外処理

// ```js
let a = 0;

init()
async function init() {
  // 例外処理を書く
  // tryに正常に働かせたい処理を書く。
  // そこでエラーがあったらcatchへ飛ぶような流れが例外処理だと思ってたが違うのか？
  // エラーが起こっていない処理をrejectでcatchへ飛ばしているだけに見えてしまう。
  try {
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => {
          a = 1;
          // resolve(a)
          reject(a)
      }, 2000);
    })
    console.log(result);
  } catch(e) {
    console.log('catchが実行', e)
  }
}
// ```