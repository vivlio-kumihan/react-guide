# 環境設定
## 使用するソフトウェア
- Chrome - ブラウザ
https://www.google.com/intl/ja/chrome/

- Node.js - JavaScriptの実行環境
https://nodejs.org/ja/

- VSCode - コードエディタ
https://code.visualstudio.com/


## おすすめの拡張機能
- Prettier - Code formatter ★  
  `esbenp.prettier-vscode`

  様々な言語の整形を行ってくれる  

- Live Server ★  
  `ritwickdey.LiveServer`  

  簡易的なサーバーを簡単に起動することができる

- Auto Rename Tag  
  `formulahendry.auto-rename-tag`  

  開始タグを編集すると、閉じタグを自動的に変更してくれる

- ES7+ React/Redux/React-Native    
  `dsznajder.es7-react-js-snippets`  

  Reactのスニペット(ショートカット)を使えるようにする

## npm install

fileName.jsonがある階層で、
`npm install`
`node_modules`が生成されてアプリケーションの元となる。

例、`jquery`をインストールしたければ、
その階層で、
`npm install jquery`

アンインストールしたければ、
`npm rm jquery`

---

# JS文法

## arrow関数

関数を定義してみる。

```js
function fn(number) {
  return number * 2;
}
console.log(fn(2))
```

アロー関数でやってみる。

```js
const fnArrow = (number) => {
  return number * 2;
}
```

1行なら省略する。

```js
const fnArrow = number => number * 2
console.log(fnArrow(2))
```

returnいるのか問題。
どちらを返していいかわからないので絶対必要。

```js
const fnArrow = (number) => {
  console.log(number)
  return number * 2;
}
console.log(fnArrow(2))
```

object問題
式の`{}`かobjectの`{}`か判断がつかない。
`()`で囲みオブジェクトだと教える。

```js
const fnArrowObj = number => ({ result: number * 2})
console.log(fnArrowObj(2))
```

## 外部から関数やクラスを参照する　export

__index.html__

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>開始時点コード</title>
    <!-- raw-htmlでjsのESモジュールを使いたい時にはtype属性必須 -->
    <script type="module" src="main.js" defer></script>
  </head>
  <body>
    <h1>開始時点コード</h1>
  </body>
</html>

```

__main.js__

```js
// React使うのであれば拡張子は不要。
// 今回はHTMLで使っているので拡張子をつけている。
// デフォルト・エクスポートはオブジェクト・リテラルで囲まないこと。

// なお、外部からアクセス出来るようするということは、
// 外部からアクセスされたくなれけば、`export`をつけない。
import  whatName, { hello, User } from "./module.js"

// デフォルト・エクスポートの場合はオブジェクト・リテラルは不要。
whatName()

// `hello()`関数を`import`してみる。
hello()

// Userクラスをimportし、クラスで定義した関数を呼び出す。
const user = new User('John')
user.yourName()
```

__module.js__

```js
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

```

## Call Back関数

```js
// コール・バック関数は引数`callback`に他の関数が渡ってくる。
// callbackの引数で渡ってきたインスタンスが、callback()関数として実行される。
// 3 => `callback`引数に`fn()`関数が設定され、
function print(callback) {
  // console.log(callback)
  // 4 => 実行結果をresult変数に代入する。という流れ。
  const result = callback(5)
  console.log(result)
}

// 1 => `fn()`関数を定義する。初期値は`3`。引数を2で掛け算した結果を返す。
function fn(number = 3) {
  return number * 2;
}

// デバッガーを使える。
// `debugger`を置いたところで処理は止まる。
// `step over`を押して次の処理へ移り、
// print()関数を実行する行で`step into`すると、処理内容の行へ移行する。
// さらに`step into`するとその処理をコールバックしている関数の内容へ移行。
// 処理の内容と流れを確認するために必須のツール
debugger
// 2 => `print()`関数に引数として`fn()`関数を渡す。
print(fn)
```

## クリック・イベント

```html
<h1>開始時点コード</h1>
<button>クリック</button>
<button class="another">クリック</button>
<script src="main.js"></script>
```

```js
// `HTML`要素を`DOM`にする。
const h1Element = document.querySelector('h1')

// `console.log()`を使うと何が取れたかがわかる。
console.log(h1Element)
// `console.dir()`を使うとDOMの内容がわかる。
console.dir(h1Element)
// DOMにアクセスして内容を変更してみる。
h1Element.textContent = '変更後のタイトル'

// クリック・イベントを使ってみる。
const btn = document.querySelector('button')

btn.addEventListener('click', (e) => {
  // 他のDOMの内容を変えてみる。
  h1Element.textContent = 'click'
  console.dir(e.target)
  // 自身のスタイルや内容を変更してみる。
  e.target.style.color = '#fff'
  e.target.style.backgroundColor = 'red'
  e.target.textContent = 'Color is Red'
})

// callback関数として実行することもできる。
const another = document.querySelector('.another')
const defMethod = (e) => {
  console.dir(e.target)
  e.target.style.color = '#fff'
  e.target.style.backgroundColor = 'red'
  e.target.textContent = 'Color is Red'
}
another.addEventListener('click', defMethod)
```

## map, filter

__for版　配列の値に2を掛けて空の配列に格納する。__

```js
const arr = [10, 20, 30, 40];
const newArr = [];
for(let i = 0; i < arr.length; i++) {
  newArr.push(arr[i] * 2)
}
console.log(newArr)
```

__map版__

```js
const arr = [10, 20, 30, 40];
let newArr = [];
newArr = arr.map(n => n * 2)
console.log(newArr)

mapの引数は、`値、インデックス、配列`
const arr = [10, 20, 30, 40];
let newArr = [];
newArr = arr.map((num, idx, arr) => {
  console.log(num, idx, arr)
  return num * 2;
})
console.log(newArr)
```

__forEach版　配列の値に2を掛けて、50以上の値だけ新しい配列に格納する。__

```js
const arr = [10, 20, 30, 40];
const newArr = [];
arr.forEach(num => {
  const val = num * 2
  if (val > 50) newArr.push(val)
})
console.log(newArr)
```

__map, filterを使えば、短くかく分かりやすく書ける。__

```js
const arr = [10, 20, 30, 40];
let newArr = [];
newArr = arr.map(num => num * 2).filter(val => val > 50)
console.log(newArr)
```

## 分割代入

__配列にインデックスを指定して値を呼び出す。__

```js
const arry = ["配列1", "配列2", "配列3"];
console.log(arry[0]);
console.log(arry[2]);
```

__同じことを分割代入してやってみる。配列では順番が大事。__

```js
const [a, b, c] = ["配列1", "配列2", "配列3"];
console.log(a);
console.log(c);
```

__オブジェクトで値を呼び出す。__

```js
const obj = { x: "オブジェクト1", y: "オブジェクト2", z: "オブジェクト3" };
console.log(obj.x);
console.log(obj.y);
```

__オブジェクトで分割代入する。順番は関係ないので注意。オブジェクトのキーを書かないといけない。__

```js
const {x, y, z} = { x: "オブジェクト1", y: "オブジェクト2", z: "オブジェクト3" };
console.log(x)
console.log(z)
```

__関数に対して分割代入__

```js
const arr = ["Japan", "Tokyo", "Shinjuku"];
const fnArr = (arry) => {
  console.log("---配列---");
  console.log(`country: ${arry[0]}`);
  console.log(`state: ${arry[1]}`);
  console.log(`city: ${arry[2]}`);
};
```

__関数の引数を分割代入でやってみる。__

```js
const arr = ["Japan", "Tokyo", "Shinjuku"];
const fnArr = ([country, state, city]) => {
  console.log("---配列---");
  console.log(`country: ${ country }`);
  console.log(`state: ${ state }`);
  console.log(`city: ${ city }`);
}
fnArr(arr);
```

__オブジェクト版__

```js
const objAddress = { country: "Japan", state: "Tokyo", city: "Shinjuku" };
const fnObj = (objAddr) => {
  console.log("---オブジェクト---");
  console.log(`country: ${objAddr.country}`);
  console.log(`state: ${objAddr.state}`);
  console.log(`city: ${objAddr.city}`);
};
fnObj(objAddress);
```

__分割代入でやる。配列と同じ。__

```js
const objAddress = { country: "Japan", state: "Tokyo", city: "Shinjuku" };
const fnObj = ({ country, state, city}) => {
  console.log("---オブジェクト---");
  console.log(`country: ${ country }`);
  console.log(`state: ${ state }`);
  console.log(`city: ${ city }`);
};
fnObj(objAddress);
```

## スプレッド演算子

```js
// 関数の引数に配列を渡すときのやり方。
const nums = [3, 1, 4, 1, 5, 10, 2, 6];
// max()関数　数値の中で一番大きいものを抽出する関数。
const result = Math.max(3, 1, 4, 1, 5, 10, 2, 6);
console.log(result);

// スプレッド演算子 `...Array`を使う。
// 配列の要素が一つずつ展開されて渡される。
const nums = [3, 1, 4, 1, 5, 10, 2, 6];
const result = Math.max(...nums)
console.log(result);

// スプレッド演算子で元にある配列から`新しい配列`を作る。
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
```

### 三項演算子

```js
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
```

## falsyとtruthy

__falsy → 真偽値に変換した際に"偽(false)"とみなされる値のこと。__
__truthy → それ以外__

* falsyな値の一覧
  * false
  * 0 (数字)
  * 0n (big int)
  * "" (空文字)
  * null
  * undefined
  * NaN (Not a Number)

```js
const a = 0;
let result = a ? 10 : -10;
console.log(result);

// `Boolean()`関数で真偽値（`true, false`）が取れる。
const falsy = 0;
const truthy = 1;
console.log(Boolean(truthy));
console.log(Boolean(falsy));
```

__論理積 (&&) について__

* falsyな値を返す。
  * 真 && 偽 => 偽
  * 偽 && 真 => 偽
  * 真 && 真 => 右側の真

```js
const resultA1 = "foo" && ""; // => ""
const resultA2 = "" && "foo"; // => ""
const resultB = 2 && 1 && 0 && 3; // => 0
const resultC = "foo" && 4; // => 4

console.log(resultA1);
console.log(resultA2);
console.log(resultB);
console.log(resultC);
```

__理論和 (||) について__

* truthyな値を返す。
  * 真 && 偽 => 真
  * 偽 && 真 => 真
  * 真 && 真 => 左側の真

```js
const resultD = "" || "foo";
const resultE = 0 || 2 || 0;
const resultF = "foo" || 4;

console.log(resultD);
console.log(resultE);
console.log(resultF);
```

## 非同期処理
### 1. 非同期処理とは何か？

__2秒待った後にコールバック関数を実行する基本形__

`setTimeout(() => {}, 2000)`

処理を上から下へ書いても順番通りに実行されない。
このコードでは、setTimeout()関数を使っている箇所が非同期処理と呼ばれる。

```js
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
```

### 2. 非同期処理の中でコンソールログを書けないことがある。

つまり非同期処理の中で出力するコードを書けないことがあるという意味。

```js
let num = 0
console.log(`first time: ${ num }`)

setTimeout(() => {
  num = 1
  console.log(num) // <= ここの非同期処理のこと
}, 2000)

console.log(`second time: ${ num } <- what num`)
```

### 3-1. 非同期処理が終わった後に処理をつなげるのが`promise`

先ほども書いたが、非同期処理の中で出力するコードを書けない時に使う方法。
だから出力順番として結果は`2`と同じ。

```js
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
```

### 3-2. 解説がよくわからんが引数を明示することもできる。

多分変数が複数になった場合を想定しているのだと思う。
`resolve関数`の引数は`then関数`の引数と1:1で対応している。
だから、引数名が違っても値を追跡できてる。
これはどうだかわからないが、
`then関数`の引数を一定のものにしておいて、
`resolve関数側で振り返ることができる。

```js
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
```

### 4. reject

`reject()`関数を発火させると`catch()関数`が実行される。
なんらかのエラーが発生した時に使うもの。`resolve()`関数と同時では使えない。

```js
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
```

### 5. then()関数の数珠繋ぎ

then()関数は処理を処理を繋げることが出来る。その際には変数を返すことを忘れずに。

```js
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
```

## 非同期処理（await, async）

awaitキーワード then()関数の数珠繋ぎを簡略化する書き方

1. __変数aを0で初期化。`init()`関数で、非同期処理をするための`Primise`は使われているが、`then()`関数がないので素通りして`consolo.log()`が出力される。__

```js
let a = 0;

init() // => 0
function init() {
  new Promise((resolve) => {
    setTimeout(() => {
        a = 1;
        resolve(a)
    }, 2000);
  })
  console.log(a);
}
```

2. __非同期処理の定義の前に`await`、それを定義する関数の前に`async`とそれぞれキーワードを付与する。__

その1
非同期処理で`resolve(a)`と引数を設定、出力`console.log(a)`で同じ引数を使う。
```js
let a = 0;

init() // => 0
async function init() {
  await new Promise((resolve) => {
    setTimeout(() => {
        a = 1;
        resolve(a)
    }, 2000);
  })
  console.log(a);
}
```

その2
非同期処理でPromiseを変数に代入。その変数名を出力。本番はこちらのよう。
```js
let a = 0;

init()
async function init() {
  const result = await new Promise((resolve) => {
    setTimeout(() => {
        a = 1;
        resolve(a)
    }, 2000);
  })
  console.log(result);
}
```

3. __例外処理__

意味が不明。これでは意味がない。

```js
let a = 0;

init()
async function init() {
  // 例外処理を書く
  // tryにエラーが発生するとした処理を書く。
  // 意味がわからん。
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
```

 # run React

## 1. Reactを起動させる

```html
<!DOCTYPE html>
<html>
<head>
  <!-- とりあえずReactを使うためのもの -->
  <script src="/libs/react.development.js"></script>
  <script src="/libs/react-dom.development.js"></script>
  <!-- JSXを使えるようにするためのもの -->
  <script src="/libs/babel-standalone.js"></script>
</head>
<body>
  <div id="app"></div>
  <!-- JSの中でHTMLに似たものを使うためのものを指定する -->
  <script type="text/babel">
    // idが`app`の要素をインスタンス化。
    const appEl = document.querySelector('#app')
    // アプリケーションのルートとして
    const root = ReactDOM.createRoot(appEl)
    // 表現する。
    root.render(
      <h1>hello</h1>
      )
  </script>
</body>
</html>
```

## 2. 

### コンポーネントを差し込む

```html
<div id="app"></div>
<script type="text/babel">
  const appEl = document.querySelector('#app')
  const root = ReactDOM.createRoot(appEl)
  // 関数コンポーネントの定義
  function Example() {
    return <h1>Hello React Components</h1>
  }
  // コンポーネントを差し込む
  root.render(<Example />)
</script>
```
### アロー関数でやってみる。

変数に代入してみる。

```html
const Example = () => {
  return <h1>Hello React Components</h1>
}
```

複数行のJSXを書きたい場合は`()`で囲む。
`()`は何かを一つにグループ化する`演算子`。
JSXを包含する場合は、ラッパーで括って1行に見せないといけない。

```js
const Example = () => {
  return (
    <div>
      <h1>Hello React</h1>
      <p>first lesson</p>
    </div>
  )
}
```

returnを無くしても構わないというルールがある。
`{ return }`を省略可能。
`{}`囲み => この場合は、アロー関数の中身のコードが入っていると定義してる。
`()`囲み => 何かを一つにグループ化してるよと定義している。

```js
  const Example = () => (
    <div>
      <h1>Hello React</h1>
      <p>first lesson</p>
    </div>
  )
```

## プロジェクトの作成方法

### プロジェクトを新規作成

```
$ npx create-react-app {プロジェクト名}
↓
$ cd {プロジェクト名}
↓
$ npm start
```

`/package.json`の中つ使える命令が書かれている。

```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
},
```

`eject`はプロジェクトのあるディレクトにある隠しファイルを見えるようにする。

```
$ num run eject
```

scriptというディレクトリが増えたり、package.jsonの中身が変わったりする。

本体を編集するには、`/src/App.js`。

### jsonがあるディレクトリ

```zsh
$ npm install
$ npm start
```

option + clickでブラウザが開く。

```zsh
Compiled successfully!

You can now view my-test-app in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.0.7:3000
```

### create-react-appドキュメント
npm docs create-react-app

Windowsの方でエラーが発生する方は以下のコマンドを実行してみてください。

```powershell
Set-ExecutionPolicy RemoteSigned
```

### その他
開発は、フレーム・ワークの`Vite`か`Next.js`を使うのが一般的。

[Vite](https://ja.vitejs.dev/) というモジュールバンドラーを使ったプロジェクトの作成

プロジェクトを作成

```bash
npm create vite@latest
```

プロジェクトのディレクトリからアプリを立ち上げる

```bash
npm run dev
```
Compiled with warnings.

[eslint] 
src/030_useState_render/end/Example.js
  Line 5:7:   'displayVal' is defined but never used       no-unused-vars
  Line 6:14:  'setVal' is assigned a value but never used  no-unused-vars

src/030_useState_render/start/Example.js
  Line 4:7:  'displayVal' is defined but never used  no-unused-vars

src/050_prev_state/start/Example.js
  Line 1:10:  'useState' is defined but never used  no-unused-vars

src/060_state_object/start/Example.js
  Line 1:10:  'useState' is defined but never used            no-unused-vars
  Line 4:9:   'personObj' is assigned a value but never used  no-unused-vars

src/064_state_array/start/Example.js
  Line 2:9:  'numArray' is assigned a value but never used  no-unused-vars

src/068_practice_obj_state/start/Example.js
  Line 5:17:  'setOrder' is assigned a value but never used  no-unused-vars

src/090_practice_state_props/start/Example.js
  Line 14:7:  'CountResult' is assigned a value but never used  no-unused-vars
  Line 16:7:  'CountUpdate' is assigned a value but never used  no-unused-vars

src/App.js
  Line 2:47:  'StrictMode' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

WARNING in [eslint] 
src/030_useState_render/end/Example.js
  Line 5:7:   'displayVal' is defined but never used       no-unused-vars
  Line 6:14:  'setVal' is assigned a value but never used  no-unused-vars

src/030_useState_render/start/Example.js
  Line 4:7:  'displayVal' is defined but never used  no-unused-vars

src/050_prev_state/start/Example.js
  Line 1:10:  'useState' is defined but never used  no-unused-vars

src/060_state_object/start/Example.js
  Line 1:10:  'useState' is defined but never used            no-unused-vars
  Line 4:9:   'personObj' is assigned a value but never used  no-unused-vars

src/064_state_array/start/Example.js
  Line 2:9:  'numArray' is assigned a value but never used  no-unused-vars

src/068_practice_obj_state/start/Example.js
  Line 5:17:  'setOrder' is assigned a value but never used  no-unused-vars

src/090_practice_state_props/start/Example.js
  Line 14:7:  'CountResult' is assigned a value but never used  no-unused-vars
  Line 16:7:  'CountUpdate' is assigned a value but never used  no-unused-vars

src/App.js
  Line 2:47:  'StrictMode' is defined but never used  no-unused-vars

webpack compiled with 1 warning



## スタイルを付ける

__Example.js__

```jsx
// 2. CSSを定義する
// 相対的な位置の情報が必要
// この指定は、グローバル（= 一番弱い）であることに留意しておく。

import "./Example.css"

const Example = () => {
  return (
    // 1. クラスを充てる
    <div className="component">
      <h3>スタイル変更　内容も変えた</h3>
    </div>
  );
};

export default Example;
```

__Example.css__

```css
.component {
  padding: 1rem;
  color: blue;
  border: 5px solid red;
}
```

