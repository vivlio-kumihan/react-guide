// exportをつけると外部から参照可能な関数となる。
export const hello = () => {
  console.log("hello!")
}

const funcB = () => {
  console.log("funcB output")
}

// 一つのファイルに一つだけ関数を定義できる。
// この場合は、`funcB`を外部のファイルがimportできるようにした。
export default funcB

class User {
  constructor(name) {
    this.name = name
  }
  // `const`つけなくてもいいようだ。
  yourName() {
    console.log(this.name)
  }
}

// exportリテラルにオブジェクト・リテラル`{}`で括る。
// 定義した`User`クラスが外部から利用可能になる。
export { User }
