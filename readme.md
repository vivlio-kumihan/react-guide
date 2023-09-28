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
# ここを見る
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
このコードでは、setTimeout()関数を使っている箇所を非同期処理と呼ぶ。

__非同期処理の最初の形__

```js
const Example = () => {
  let num = 0
  console.log(num) // 1番目に呼ばれる。
  new Promise((resolve) => {
    setTimeout(() => {
      num = 1
      console.log(num) // 3番目に呼ばれる。
    }, 2000)
  })
  console.log(num) // 2番目に呼ばれる。
  return <></> 
}
export default Example;
```

### 2. Promise, resolve, then 非同期処理の中で出力を書けない場合の処理

- Promiseのインスタンスを生成。
- 引数にはコールバック関数。引数は`resolve（解決）`。
- 非同期処理をコールバック関数の中に仕込んで、最終行で設定した変数を引数として`resolve()関数`を実行する。
- 外に出したい出力の処理をコールバック関数として、`then()`関数の引数に入れる。
- この時、仮引数には非同期処理で設定した変数が渡ってくる。
- 出力の処理はメソッド・チェーンできる。

```js
const Example = () => {
  let num = 0
  console.log(num)
  new Promise((resolve) => {
    setTimeout(() => {
      num = 1
      resolve(num)
    }, 2000)
  }).then((arg) => {
    console.log(arg)
  })
  console.log(num)
  return <></>  
}
export default Example;
```

### 3. Promise, reject, catch 非同期処理の中でエラー処理

中の動きの理屈は同じ。
実践的なことは後で。とりあえずエラー処理がかけることを覚えておく。

```js
const Example = () => {
  let num = 0
  console.log(num)
  new Promise((resolve, reject) => {
    setTimeout(() => {
      num = 1
      // resolve(num)
      reject(num)
    }, 2000)
  }).then((arg) => {
    console.log(arg)
  }).catch((err) => {
    console.log('catchが実行された。')
    console.log(err)
  })
  console.log(num)
  return <></>  
}
export default Example;
```


## 非同期処理（await, async）

awaitキーワード then()関数の数珠繋ぎを簡略化する書き方

- then()関数部を削除。
- 非同期処理があるPromiseのインスタンスを関数で囲まないといけな。
- その関数の先頭に`async`キーワードを付与しておく。約束事。
- Promiseを生成する箇所の前に`await`キーワードを付与しておく。約束事。

```js
const Example = () => {
  let num = 0
  // console.log(num)
  init()
  async function init() {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        num = 1
        resolve(num)
      }, 2000)
    })
    console.log(num)
  }
  return <></>  
}
export default Example;
```

エラー処理を書く。

- 生成した`Promise`インスタンスは変数に格納して、出力はその変数名で書くことができる。
- その出力部を`try { 出力部 } catch(e) { エラーだった時の処理 }`の形に入れ込む。
- 普通はいきなりこの書き方から始まるので頭を整理しておくこと。

```js
const Example = () => {
  let num = 0
  console.log(num)
  init()
  async function init() {
    try {
      const result  = await new Promise((resolve, reject) => {
        setTimeout(() => {
          num = 1
          resolve(num)
        }, 2000)
      })
      console.log(result)
    } catch(e) {
      console.log('errorが発生', e)
    }
  }
  console.log(num)
  return <></>  
}
export default Example;
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

## コンポーネントを分割する方法

### その1

親を`Example.js`として、
`./components/List.js`をコンポーネントとして引き込む。

__Example.js__

```js
// 任意のコンポーネントを引き込む。
import { List } from "./components/List";
// CSSを引き込む。
import "./components/List.css"

// 関数定義
const Example = () => {
  return (
    // スタイリングに必須なクラス属性を付与する。
    <div className="component">
      <h1>lang list</h1>
      // コンポーネントをはる。
      <List />
    </div>
  )
}
// 必須　default exportと宣言する。
export default Example;
```

```js
// コンポーネントのネタとなる関数を定義する。
const List = () => {
  return (
    <ul>
      <li>item-1</li> 
      <li>item-2</li>
      <li>item-3</li>
      <li>item-4</li>
      <li>item-5</li>
    </ul>
  )
}
// 名前付きexport。
// 貼り付ける相手側では`import`の際、`{}`で囲む必要あり。
export { List }
```

### その2

Listコンポーネントを含む、Example親コンポーネントの本文部分をChildコンポーネントとして引き込む。

- componentsディレクトリにChild.jsを作成
  - Listコンポーネントを引き込む。
  - HTML表現するためのCSSをChild.cssとして作成し必要なスタイルを移行する。CSSを引き込む。
  - Exampleコンポーネントの関数をListコンポーネント全て移行する。
  - Example -> Child 該当部を変更する。
  - `default export`で出力する鍵を作成する。
- Example.js
  - 不要になった要素を削除する。
  - 引き込み要素を貼り付ける。

__Child.js__

```js
// CSSの引き込み
import "./Child.css"
// Listコンポーネントの引き込み
import { List } from "./List";
// 関数定義
const Child = () => {
  return (
    Exampleコンポーネントの関数で定義した中身を丸ごと持ってくる。
    <div className="component">
      <h1>lang list</h1>
      <List />
    </div>
  )
}
// defalut exportで出力する。
export default Child
```

__Example.js__

```js
// Childコンポーネントを引きこむ。
import Child from "./components/Child"
// Childを貼る。
const Example = () => {
  return (
    <Child />
  )
}
// 省略形でかく。
//     ↓
const Example = () => <Child />

export default Example;
```

### default export
一つのファイルに一つのコンポーネントという考え方なので、基本的には`default export`で良い。
一つのファイルに複数のコンポーネントを出力したい場合に`名前付export`となる。


## 不要なタグを出力しないFragmentの使い方

一つのルート要素で束ねられている必要がある。

文章構造を構成するには不都合。いちいちルート要素を作成する必要があるから。

`import React from "react"`で`React`を引き込み、`React.Fragment`要素で囲い込むことで解決できる。

`React`に組み込まれている関数やコンポーネントを確認するには

```
console.log(React)
```

## 書き方

### org

```js
import "./Child.css"
import React from "react"

const Child = () => {
  return (
    <React.Fragment>
      <div className="component">
        <h3>Hello Component</h3>
      </div>
      <h3>Hello Fragment</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, beatae cupiditate molestias illum quaerat aut numquam tempora. Facere eaque dolor harum labore? Amet, ipsa inventore. Culpa sequi quod repudiandae nulla.</p>
    </React.Fragment>
  );
};

export default Child;
```

### その　1　Fragmentだけ読み込むことができる。

```js
import "./Child.css"
import { Fragment } from "react"

const Child = () => {
  return (
    <Fragment>
      <div className="component">
        <h3>Hello Component</h3>
      </div>
      <h3>Hello Fragment</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, beatae cupiditate molestias illum quaerat aut numquam tempora. Facere eaque dolor harum labore? Amet, ipsa inventore. Culpa sequi quod repudiandae nulla.</p>
    </Fragment>
  );
};

export default Child;
```

###　その　2　Fragmentを省略できる。

```js
import "./Child.css"

const Child = () => {
  return (
    <>
      <div className="component">
        <h3>Hello Component</h3>
      </div>
      <h3>Hello Fragment</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, beatae cupiditate molestias illum quaerat aut numquam tempora. Facere eaque dolor harum labore? Amet, ipsa inventore. Culpa sequi quod repudiandae nulla.</p>
    </>
  );
};

export default Child;
```

### Fragmentにはkey属性をつけることができる。

説明は後で。

## JSX内でJSコードを実行する。

- JSを書くコンポーネント`Expression`を引きこむ。
- 関数の中身を複数行に対応する書式に変更する。

```js
import Child from "./components/Child";
import Expression from "./components/Expression";

// 関数ではなく、コードのまとまりなので`()`で括るよ。
const Example = () => (
  // 1行形式なのでこれを複数行で処理できるよう`Fragment`を使う。
  <>
    <Child />
    <Expression />
  </>
)
export default Example;
```

普通のJS。
まずは、変数を初期化して、JSXの中で変数展開する。
超絶スッキリして気持ちいい。

```js
const Expression = () => {
  const title = "Expression"
  return <h3>Hello { title }</h3>
}

export default Expression
```

## JSX内でJSコードを実行する　{ 変数展開 }

Reactは`{}`でJSコードを括弧って式として評価する。

### 変数展開

```js
import './Expression.css'

const Expression = () => {
  const title = "Expression"
  // コードのまとまりを`return`するから`()`必須だね。
  return (
    // 属性値に対しても変数展開ができる。
    // しかも`""`で囲む必要ない。素晴らしい！
    <div className={ title.toLowerCase() }>
      <h3>Hello { title }</h3>
    </div>
  )
}
export default Expression
```

### 配列を出力する。

```js
import './Expression.css'

const Expression = () => {
  const title = "Expression"

  // 配列を定義すると、
  const lang = ['Ruby', 'Perl', 'JavaScript']

  // コードのまとまりを`return`するから`()`必須だね。
  return (
    // 属性値に対しても変数展開ができる。
    // しかも`""`で囲む必要ない。素晴らしい！
    <div className={ title.toLowerCase() }>
      <h3>Hello { title }</h3>
      <h3>{ lang  }</h3>
      // 文字列で出てくる。
      //         ↓
      // <h3>RubyPerlJavaScript</h3>
    </div>
  )
}
export default Expression
```

### 関数を埋め込んでみる

```js
import './Expression.css'

const Expression = () => {
  const title = "Expression"
  // const greeting = (arg) => {
  //   return `${ arg } Function`
  // }
  const greeting = (arg) => `${ arg } Function`
  return (
    <div className={ title.toLowerCase() }>
      <h3>{ greeting("こんにちは") }</h3>
    </div>
  )
}
export default Expression
```

### コメント、JSX

```js
import './Expression.css'

const Expression = () => {
  const title = "Expression"
  const jsx = <h3>JSX heading</h3>
  return (
    <div className={ title.toLowerCase() }>
      <h3>{ /* コメントアウト */ }</h3>
      {/* HTMLに見えるけどこれらは、JSX。
          Reactは、JSのプログラミングコードとして認識。 */}
      {/* JSを変数展開するコードで囲って出力されるのがその証拠。 */}
      { <h3>JSX heading</h3> }
      {/* 変数に裸のまま入れて、変数展開して出せてる。 */}
      { jsx }
    </div>
  )
}
export default Expression
```

## 式と文の違い

```js
/* POINT 式と文
式：何らかの値を返すもの（変数に代入できるもの）
文：変数宣言、for文、if文、switch文やセミコロンで区切るもの。
JSX内で使用できるのは`式`。
*/

import "./Child.css";

const Child = () => {
  // 1という式を変数に代入できる。
  // `const num = 1`自体を変数に代入できないのでこれは文となる。
  const num = 1
  // 関数を実行できる。つまり式。
  // const fn = () => {
  //   return 'hello'
  // }
  const fn = () => 'hello'
  // 等しいという状態を変数に代入できし、変数展開もできるので式。
  // だが、warningが出るのでコメントアウトする。
  // const flag = 1 === 1;
  // ifは、変数に代入できないのでこれは文。
  // const greet = if (true) { "hello"}
  // 三項演算子はできるので式
  const greet = false ? 'hello' : 'goodbye'
  // 文は`return`の中で書かなければ問題はない。
  // if, for, forEach...
  // 関数
  // whatName関数を定義するのは文。
  const whatName = () => 'John'
  // whatName()は式。なので変数に代入できる。
  const name = whatName()
  return (
    <div className="component">
      <h3>式と文</h3>
      {/* なのでJSX内で変数展開できる。 */}
      <h3>{ num }</h3>
      <h3>{ fn() }</h3>
      {/* だが、warningが出るのでコメントアウトする。 */}
      {/* <h3>{ flag }</h3> */}
      {/* <h3>{ 1 === 1 }</h3> */}
      <h3>{ greet }</h3>
      <h3>{ true ? 'hello' : 'goodbye' }</h3>
      <h3>{ name }</h3>
    </div>
  );
};
export default Child;
```

## propsでコンポーネントに値を渡してみよう

### おさらい

__Contact.js__

```js
import Form from "./Form.js"

const numArr = [1, 2, 3, 4, 5]
const Contact = () => {
  const member = {name: "takahiro", age: 58, address: "大阪"};
  const thisFunc = () => {
    return numArr
      .map(i => i * 10)
      .reduce((acc, val) => acc + val, 0);
  }
  const myFunc = (arg) => {
    return `hello ${arg}`
  };

  return(
    <Form 
      color={"green"}     // 文字列を渡す
      num={65031}         // 数値を渡す
      member={member}     // オブジェクトを渡す
      myFunc={myFunc}     // 関数を渡す　引数あり
      thisFunc={thisFunc} // 関数を渡す
      bool             // 真偽値を渡す　true => defaultで渡るから記述の必要はない。
    />
  )
}
export default Contact
```

__Form.js__

```js
// オブジェクトだから当たり前、キーの名称で管理している。順番じゃない。
const Form = ({color, num, member, myFunc, thisFunc, bool) => {
  return(
    <>
      {/* propsで文字列を受信する。JSX内で変数を文字列展開する。 */}
      <h1 lang="en" className={`form-style ${color}`}>props &gt; string</h1>
      <h2 lang="en">props &gt; {num}</h2>
      <h3 lang="en">props &gt; {member.name}</h3>
      {/* 関数を持ち運んで最後は実行 => ()が必要 */}
      <h4 lang="en">props &gt; total amount: {thisFunc()}</h4>
      <h5 lang="en">props &gt; {myFunc("Paul")}</h5>
      <p lang="en">props &gt; {`${bool === 0}`}</p>
    </>
  )
};
export default Form;
```


親から子へ値を渡すには`props`。
propsで属性を渡してみる。

__Child.js__

```js
import "./Child.css";

// 1. `Child`コンポーネントの引数に`props`を設定する。
const Child = (props) => {
  // 3. 付与された属性が`props`経由で渡ってくる。
  // console.log(props)
  return (
    <div className="component">
      <h3>Hello　Component</h3>
    </div>
  );
};
export default Child;
```

__Example.js__

```js
import Child from "./components/Child";

// 2. 差し込んだコンポーネントに属性を付与する。
const Example = () => <Child color="red" />;

export default Example;
```

クラスにクラスを追加する。

```css
.App-start .component {
  padding: 1rem;
  color: blue;
  border: 5px solid blue;
}

/* 1. クラスを追加する。 */
.App-start .component.red {
  padding: 1rem;
  color: red;
  border: 5px solid red;
}
```

__Child.js__

```js
const Child = (props) => {
  return (
    // 2. クラスの呼び出し部を式にする。
    // 3. JSの文字列中の変数展開『``』で囲んで`${}`で開く。
    // やってることは、HTML的に書くと`class="component red"`。
    <div className={`component ${ props.color }`}>
      <h3>Hello Component</h3>
    </div>
  );
};
```

非常に素晴らしい書式でできる。

Example.jsを変更して箱を増やしてみる。

```js
import Child from "./components/Child";

const Example = () => {
  return ( 
    <>
      <Child color="" />
      <Child color="red" />
    </>
  )
}
export default Example;
```

### 分割代入でもっと短く

 ```js
 // propsはオブジェクト
// こんな風に書いているが`<Child color="red" /> => { color: "red" }`という解釈なのだろう。
// オブジェクトリテラルで分割代入してやる。
const Child = ({ color }) => {
  return (

    <div className={`component ${ color }`}>
      <h3>Hello Component</h3>
    </div>
  );
};
 ```

 propsの初期値

 ```js
 import "./Child.css";

// 初期値を設定してやると、
const Child = ({ color = 'green' }) => {
  return (

    <div className={`component ${ color }`}>
      <h3>Hello Component</h3>
    </div>
  );
};
export default Child;
 ```

 ```js
 const Example = () => {
  return (
    <>
      // 属性を設定しなければ
      // propsの初期値が入る。
      <Child />
      <Child color="red" />
    </>
  )
}
 ```

 ```css
 .App-start .component {
  padding: 1rem;
  color: blue;
  border: 5px solid blue;
}

.App-start .component.red {
  padding: 1rem;
  color: red;
  border: 5px solid red;
}

/* クラスを追加する。 */
.App-start .component.green {
  padding: 1rem;
  color: green;
  border: 5px solid green;
}
```

### propsの別名

`color => col`として、関数内で別名として使える。

```js
const Child = ({ color: col = 'green' }) => {
  return (

    <div className={`component ${ col }`}>
      <h3>Hello Component</h3>
    </div>
  );
};
```

### 色々な値をやり取りする

#### 数値

__親コンポーネント Example.js__

```js
import Child from "./components/Child";

const Example = () => {
  return (
    <>
      {/* 1. 数値を渡す。 */}
      <Child num = { 123 }/>
      {/* <Child color="red" /> */}
    </>
  )
}
export default Example;
```

__受ける子コンポーネント Child.js__

```js
import "./Child.css";

// 2.『分割代入』で数値を受け取る。
const Child = ({ color: col = 'green', num }) => {
  return (
    <div className={`component 　${ col }`}>
      <h3>Hello Component</h3>
      // 変数を貼り付ける。
      <h3>{ num }</h3>
    </div>
  );
};
export default Child; 
```

#### 関数

__Example.js__

```js
import Child from "./components/Child";

const Example = () => {
  // 文はreturnの前だったね。
  // 1. 関数を定義して、
  const hello = (arg) => `Hello ${ arg }`
  return (
    // 2. 複数値を渡す場合のやり方。
    // helloという名前で関数を定義し、式を任意の名称の変数に代入する。
    <>
      <Child
        num = { 123 }
        fn = { hello }
      />
      {/* <Child color="red" /> */}
    </>
  )
}
export default Example;
```

__Child.js__

```js
import "./Child.css";

// 3. 任意の名称をつけた変数を分割代入で受け取る。
const Child = ({ color: col = 'green', num, fn }) => {
  return (
    <div className={`component ${ col }`}>
      <h3>Hello Component</h3>
      <h3>{ num }</h3>
      {/* 4. JSXで展開する。 */}
      <h3>{ fn("Paul") }</h3>
    </div>
  );
};
export default Child; 
```

#### 真偽値

__Example.js__

```js
import Child from "./components/Child";

const Example = () => {
  const hello = (arg) => `Hello ${ arg }`
  // 真偽値で`真`を送る場合は`bool`。
  // `偽`を送る場合は`何も書かない`。
  return (
    <>
      <Child
        num = { 123 }
        fn = { hello }
        // bool
      />
      {/* <Child color="red" /> */}
    </>
  )
}
export default Example;
```

__Child.js__

```js
import "./Child.css";

// 3. `bool`は、`true`。falseを送るには別名を作って対応する。
//    `bool`を別名`bl`として`false`を格納しておき、boolを受信しなければ初期値の`false`を貼ることになり、
//    `bool`を受信したら値を`true`に置き換えて貼り付ける。
const Child = ({ color: col = 'green', num, fn, bool: bl = false }) => {
  return (
    <div className={`component ${ col }`}>
      <h3>Hello Component</h3>
      <h3>{ num }</h3>
      <h3>{ fn("Paul") }</h3>
      {/* 4. JSXで展開する。 */}
      <h3>{ console.log(bl) }</h3>
      {/* コンソールでの結果 => false */}
      <h3>{ bl ? "true" : "false"}</h3>
    </div>
  );
};
export default Child; 
```

#### オブジェクト

__Example.js__

```js
import Child from "./components/Child";

const Example = () => {
  const hello = (arg) => `Hello ${ arg }`
  // オブジェクトを送信する。
  return (
    <>
      <Child
        num = { 123 }
        fn = { hello }
        obj = {{ name: 'takahiro', age: '58'}}
      />
      {/* <Child color="red" /> */}
    </>
  )
}
export default Example;
```

__Child.js__

```js
import "./Child.css";

// オブジェクトを受信する。
const Child = ({ color: col = 'green', num, fn, bool: bl = false, obj }) => {
  return (
    // オブジェクトを貼り付ける。
    <div className={`component ${ col }`}>
      <h3>Hello Component</h3>
      <h3>{ num }</h3>
      <h3>{ fn("Paul") }</h3>
      <h3>{ console.log(bl) }</h3>
      <h3>{ bl ? "true" : "false"}</h3>
      {/* 4. JSXで展開する。 */}
      <h3>{ obj.name + "は、今年で" + obj.age + "才"}</h3>
      <h3>{ obj.name }は、今年で{ obj.age }才</h3>
    </div>
  );
};
export default Child; 
```

#### スプレッド演算子で展開して送信

```js
import Child from "./components/Child";

const Example = () => {
  const hello = (arg) => `Hello ${ arg }`
  // オブジェクトを定義して、スプレッド演算子で展開し送信する。
  const elem = { color: "red", num: 123}
  return (
    <>
      <Child
        { ...elem }
        // color = { "red" }
        // num = { 123 }
        fn = { hello }
        obj = {{ name: 'takahiro', age: '58'}}
      />
      {/* <Child color="red" /> */}
    </>
  )
}
export default Example;
```

#### ちょっと捻ったらボロボロ

配列を送受信してみる。

__Example.js__

```js
import Profile from "./components/Profile";

// インスタンスの定義は外側でも構わない。
// 値が２つしかないことに注意する。なんで設定されていない値が表現されているのか？
// それって初期値だとすぐピンとこないといけない。
const profile = [
  { name: "Takashi", age: 19, country: "Japan" },
  { name: "Jane", age: 28, country: "UK" },
]
// 最初はオブジェクトのキーを充てている。
// 次はスプレッド構文で開いいている。
// 初期設定値を促している。
const Example = () => {
  return (
    <>
      <Profile
        name={profile[0].name}
        age={profile[0].age}
        country={profile[0].country}
      />
      <Profile {...profile[1]} />
      <Profile />
    </>
  )
}
export default Example
```

__Profile.js__

```js
import "./Profile.css";

// 分割代入で受信しないといけない。
// それと、なんで受信側で雛形が用意されていないか、
// それは、初期値で設定されていて、用意がなければ初期値が出力される段取りになっているから。
// const Profile = (profile) => {
const Profile = ({ name = "John Doe", age = "??", country = "Japan" }) => {
  return (
    <div className="profile">
      <h3>name: { name }</h3>
      <h3>age: { age }</h3>
      <h3>country: { country }</h3>
    </div>
  );
};
export default Profile;
```

### 特別なプロパティ ~ props.children

コンポーネントを親を介して他のコンポーネントに渡す方法。

__Example.js__

```js
import Profile from "./components/Profile";
import Container from "./components/Container";

const profile = [
  { name: "Takashi", age: 19, country: "Japan", color: "green" },
  { name: "Jane", age: 28, country: "UK", color: "blue" },
];

// 通常は`<Container />`と書いてコンポーネントを読み込んできたが、
// 終了タグを書いた場合、中身がchildrenとして渡る。
// 1. `<Container></Container>`の間に`{ 1 }`を挿入して、
const Example = () => {
  return (
    <div>
      <Container title="Childrenとは？">
        { 1 }
      </Container>
      {/* <Container title="Childrenとは？" /> */}
    </div>
  );
};
export default Example;
```

__Container.js__

```js
import "./Container.css";

const Container = ({ title, children }) => {
  // 2. コンソールで確認すると値が出力される。
  console.log(children)
  return (
    <div className="container">
      <h3>{title}</h3>
    </div>
  );
};
export default Container;
```

Profileを2つでも3つでも渡したければ、`Container`の中に渡すだけ。

__Example.js__

```js
import Profile from "./components/Profile";
import Container from "./components/Container";
const profile = [
  { name: "Takashi", age: 19, country: "Japan", color: "green" },
  { name: "Jane", age: 28, country: "UK", color: "blue" },
];

const Example = () => {
  return (
    <div>
      <Container title="Childrenとは？">
        <Profile />
        <Profile />
      </Container>
    </div>
  );
};
export default Example;
```

__Container.js__

```js
import "./Container.css";

const Container = ({ title, children }) => {
  console.log(children)
  return (
    <div className="container">
      <h3>{title}</h3>
      { children }
    </div>
  );
};
export default Container;
```

profileで設定されたオブジェクトの中身を渡す。

__Example.js__

```js
import Profile from "./components/Profile";
import Container from "./components/Container";
const profile = [
  { name: "Takashi", age: 19, country: "Japan"},
  { name: "Jane", age: 28, country: "UK", color: "red" },
];

// profileの中身を渡したければ、スプレッド構文で解決する。
const Example = () => {
  return (
    <div>
      <Container title="Childrenとは？">
        <Profile { ...profile[0] } />
        <Profile { ...profile[1] } />
        <Profile />
      </Container>
    </div>
  );
};
export default Example;
```

Childrenを属性として渡す。

__Example.js__

```js
import Profile from "./components/Profile";
import Container from "./components/Container";
const profile = [
  { name: "Takashi", age: 19, country: "Japan"},
  { name: "Jane", age: 28, country: "UK", color: "red" },
];

// childrenは、属性としても渡せる。
// コンポーネントもJSのオブジェクトなので属性の値として解決できる。
// ただし、オブジェクトの中身を配列で渡す場合にキーを与えないといけない。
// 渡すときは式として渡す？？？　多分、オブジェクトではないと思う。
const Example = () => {
  return (
    <div>
      {/* <Container title="Childrenとは？">
        <Profile { ...profile[0] } />
        <Profile { ...profile[1] } />
        <Profile />
      </Container> */}
      <Container title="Childrenとは？" children={[
        <Profile key={ profile[0].name } { ...profile[0] } />,
        <Profile key={ profile[1].name } { ...profile[1] } />,
      ]} />
    </div>
  );
};
export default Example;
```

別名でもできる。
何が嬉しいのかというと、コンポーネントだけではなく、中の部品も任意の位置に自由にレイアウトできるということ。これはすごい！
ちゃんとJSを理解してコードの流れや動きを追えるようになる必要はあるが、
限りなく大きくなるレイアウトの自由度を獲得できる！

__Example.js__

```js
import Profile from "./components/Profile";
import Container from "./components/Container";
const profile = [
  { name: "Takashi", age: 19, country: "Japan"},
  { name: "Jane", age: 28, country: "UK", color: "red" },
];

// 別名で渡すこともできる。
// 1. `children`属性の次に`first`属性と任意の名称をつけて送信し、
const Example = () => {
  return (
    <div>
      <Container title="Childrenとは？" children={[
        <Profile key={ profile[0].name } { ...profile[0] } />,
        <Profile key={ profile[1].name } { ...profile[1] } />,
      ]}
      first={ <Profile key={ profile[0].name } { ...profile[0] } />}
      second={ <Profile key={ profile[1].name } { ...profile[1] } />}
      />
    </div>
  );
};
export default Example;
```

__Container.js__

```js
import "./Container.css";

// 2. propsに先ほどの`first`を追加して、JSX内で貼り付けて解決。
// 何が嬉しいのかというと、コンポーネントだけではなく、中の部品も
// 任意の位置に自由にレイアウトできるということ。これはすごい！
const Container = ({ title, children, first, second }) => {
  console.log(children)
  return (
    <div className="container">
      <h3>{title}</h3>
      { children }
      { second }
      { first }
    </div>
  );
};
export default Container;
```

## propsの重要なルール

### POINT propsの流れは一方通行

繰り返しになるが、子コンポーネントに値を渡すには親コンポーネントから渡す。`Hello`と`Bye`両方の`name`に同じ値を送信するというのがReact。

```js
import Bye from "./components/Bye"
import Hello from "./components/Hello"

const Example = () => {
  // 1. 変数を初期化して、
  const name = 'John'
  return (
    <>
      // 2. props経由で子コンポーネントへ渡す。
      <Hello name={ name } />
      <Bye name={ name } />
    </>
  );
};
export default Example;
```

__Hello.js, Bye.js__

```js
// Hello
const Hello = (props) => {
  return (
    <div>
      <h3>Hello { props.name }</h3>
    </div>
  );
};
export default Hello;

// Bye
const Bye = (props) => {
  return (
    <div>
      <h3>Bye { props.name }</h3>
    </div>
  );
};
export default Bye;
```

### POINT propsは読み取り専用

コンソールで警告される。
読み取り専用だからプロパティーに値を与えることができないと。

```js
const Hello = (props) => {
  // Cannot assign to read only property
  // 'name' of object '#<Object>'
  props.name = "takahiro"
  return (
    <div>
      <h3>Hello { props.name }</h3>
    </div>
  );
};
export default Hello;
```

## JSXの正体

JSXはJSのオブジェクトとして扱われる。

- 変数に代入できる。
- 他のコンポーネントのpropsとして渡すことができる。

# イベントリスナーとState（状態管理）

## イベントに合わせて関数を実行する

```js
const Example = () => {
  // イベントは色々ある。
  // onMouseEnter
  // onMouseLeave
  // onChange
  // onBlur

  // `onClick`に対してコールバック関数`=()`を定義する。
  // イベントの発火装置を設置する。
  // これの関数をイベントハンドラーという。
  // `onClick`というイベントのリスナーを
  // `clickHandler`という名称で作成し登録する（引数にとる）。

  // コールバック関数でやりがちなこと。
  // - クリックのイベントを起こしたら、`clickHandler`というイベントハンドラーを発火させる。

// JSXに埋め込む際に意味が違う。
// onClickイベントに、
  // `clickHandler` => `clickHandler`という名前の関数を渡す。
  // `clickHandler()` => `clickHandler`関数を実行する
  // 意味が全く違う。
  const clickHandler = () => {
    alert("on click button")
  }
  
  return (
    <>
    <button onClick={clickHandler}>Click</button>
    </>
  );
};
export default Example;
```

## よく利用するイベント

input要素でよく使われるイベント
入力欄に値を入力する度にコールバック関数が実行される。
`onChange={() => console.log("onChange検知")}`

マウスが入力欄から離なし、他の部分をクリックしたら（フォーカスが離れたら）コールバック関数が実行される。
`onBlur={() => console.log("onBlur検知")}`

最初に入力欄をクリックしたら（フォーカスを得たら）コールバック関数が実行される。
`onFocus={() => console.log("onFocus検知")}`

`onChange`というイベントハンドラーに`e`というイベントを引数にとる。
コールバック関数で`e.target.value`として入力値を獲得する。

要素へマウスが入った時離れた時にイベントが実行される。

```js
const Example = () => {

  return (
    <div>
      <label>
        入力値のイベント：
        <input
          type="text"
          onChange={() => console.log("onChange検知")}
          onBlur={() => console.log("onBlur検知")}
          onFocus={() => console.log("onFocus検知")} />
      </label>
      <div>
        <label>
          入力値を取得：
          <input type="text" 
            onChange={(e) => console.log(e.target.value)} />
        </label>
      </div>
      <div
        className="hover-event"
        onMouseEnter={() => console.log("カーソルが入ってきました。")}
        onMouseLeave={() => console.log("カーソルが出ていきました。")}
      >
        ホバーしてね！
      </div>
    </div>
  )
}
export default Example
```

## State（状態管理）

### その　1
こんな風に考えるがこれではダメ。

```js
let tmpVal
return (
  <>
    <input type="text"
      onChange={(e) => {
        tmpVal = e.target.value
      }}
    /> = { tmpVal }
  </>
)
```

### その　2
`useState`を呼び込む。
`useState`で値を初期化すると、読み込み用の値と関数がセットになった配列が返される。
関数には今注目しているインスタンスに適用できるものが設定されている。
その関数をコールバック関数として、引数に`e.target.value`を渡すと欲しい値が取れる寸法。
`[value, function]`
クラスの初期化でやるゲッターとセッターみたいな感じ。

```js
import { useState } from "react"
import "./Example.css"

const Example = () => {
  let tmpVal = useState(0)
  return (
    <>
      <input type="text"
        onChange={(e) => {
          const setFunc = tmpVal[1]
          setFunc(e.target.value)
        }}
      /> = { tmpVal[0] }
    </>
  )
}
export default Example
```

### その　3
__覚えるべきコードはこちら__
分割代入で効率と判読性の向上
`let [val, setFunc] = useState(0)`
このように変更し、該当する箇所へ変数を入れ替え、不要なコードを取り去る。
非常に読みやすくなる。素晴らしい！

```js
import { useState } from "react"
import "./Example.css"

const Example = () => {
  let [val, setFunc] = useState(0)
  return (
    <>
      <input type="text"
        onChange={(e) => {
          setFunc(e.target.value)
        }}
      /> = { val }
    </>
  )
}
export default Example
```

### その　4

再レンダリングについて
ダメ・コードで何が起こってたか？

```js
const Example = () => {
  // 1. 初期値を設定しない変数を設定
  let tmpVal
  return (
    <>
      <input type="text"
        // 2. イベントにイベントリスナー設定
        onChange={(e) => {
          // 3. 入力というイベントが起こったらその入力値を変数に代入させる。
          tmpVal = e.target.value
        }}
      // 4. input要素に値を入力する度に再レンダリングが実行されるので、下にあるJSXの中の変数へ値は渡らない。
      //    イベントを駆動させると`Example`コンポーネントを再度実行する仕様だから。
      //    再度実行ということは、`let tmpVal`の処理で変数の中身は空になり、
      //    `{ tmpVal }`は、空の状態を出力する、つまり、反応していないように見えるというわけ。
      /> = { tmpVal }
    </>
  )
}
```

解決している様子を見る。

```js
// 1. 状態を保持してくれるものを引っ張ってくる。
import { useState } from "react"
const Example = () => {
  // 2. インプットされる値を格納する変数（オブジェクト）を初期化する。
  let [val, setFunc] = useState(0)
  return (
    <>
      <input type="text"
        onChange={(e) => {
          // 3. セッターである`setFunc`に入力された値を引数にとり評価、値を設定と保持をする。
          setFunc(e.target.value)
        }}
        // 4. 再度レンダリングされてから、保持している値をここに貼り付けという寸法。
      /> = { val }
    </>
  )
}
export default Example
```

## 複数のStateに対応・Stateは最上位

複数の状態をセッターゲッターできる。
注意点は、コンポーネントの最上位の位置でしか呼ぶことができない。

```js
import { useState } from "react"
import "./Example.css"

const Example = () => {
  let [countA, setCountA] = useState(0)
  let [countB, setCountB] = useState(0)
  let [countC, setCountC] = useState(0)
  return (
    <>
      <label htmlFor="">clicked Button A, { countA } times </label>
      <button type="button" 
              onClick={() => {
                setCountA(countA + 1)
              }}
      >
        Button A
      </button>

      <label htmlFor="">clicked Button B, { countB } times </label>
      <button type="button" 
              onClick={() => {
                setCountB(countB + 1)
              }}
      >
        Button B
      </button>

      <label htmlFor="">clicked Button C, { countC } times </label>
      <button type="button" 
              onClick={() => {
                setCountC(countC + 1)
              }}
      >
        Button C
      </button>
    </>
  )  
};
export default Example;
```

# 暗記　お題：　カウントのイベントを状態管理する
## 配列のState

表示する部分を作成すると言われたらすぐに思い浮かべよう。
変数をJSXで展開する記号にピンとくること。

```js
return (
  <>
    <p>現在のカウント数: {}</p>
  </>
)
```

Stateの変数を作成すると言われたらすぐに思い浮かべよう。
importを連動して出てくるように。

`const [count, setCount] = useStete(0)`

イベントハンドラ`onClick`に任意の関数（名）`countUp`を仕込む。

```js
    <>
      <p>現在のカウント数: { count }</p>
      <button onClick={ countUp }"></button>
    </>
```

関数を定義する

```js
const countUp = () => {
  setCount(count + 1)
}
```

完成コード

```js
import { useState } from "react";

const Example = () => {
  // Stateの変数を作成すると言われたらすぐに思い浮かべよう。
  const [count, setCount] = useState(0)
  const countUp = () => {
    setCount(count + 1)
  }
  const countDown = () => {
    setCount(count - 1)
  }
  return (
    <>
      <p>現在のカウント数: {count}</p>
      <button onClick={countUp}>Button Up</button>
      <button onClick={countDown}>Button Down</button>
    </>
  )
};

export default Example;
```

## 詳細説明

prevState関数の話もある。

```js
const Example = () => {
  // Stateの変数を作成すると言われたらすぐに思い浮かべよう。
  const [count, setCount] = useState(0)
  const countUp = () => {
    // 変数`count`に値を保持しましたと言ってるだけ。
    // `useState`を初期化して生成されたオブジェクトの関数部分の役目は、
    // 1. 変数の状態を保持する。
    // 2. Reactに対して現在の関数コンポーネント（この場合は`Example`）を再実行を依頼する。
    // 3. その依頼は、将来に亘って予約（State）される。これを非同期で処理されるという。
    // 4. 予約期限は、この関数コンポーネントが再レンダリングされる時に変数はセットされる。
    setCount(count + 1)
    // 敢えて変数の値を変更していく方法 任意の名称で`prevState`関数を定義する。
    setCount(prevState => prevState + 100)
    console.log(count)
  }
}
```

## オブジェクト型のStateを扱う際の注意

JSには型がある。

- プリミティブ型
  - 数列
  - 文字列
  - 真偽値
  - BigInt => 10nなど大きい数値を扱う型
  - Symbol()
  - null
  - undefined
- オブジェクト型
  - プリミティブ型以外のもの、オブジェクト、配列など。

### その　1

#### オブジェクト（DBなんかを扱うことを想定して）をソースとして、input要素に値を入力する『イベント』をきっかけに『状態』を管理するコードを書く。
- 現在の関数コンポーネント`Example`は、オブジェクトを持っている。
- そのオブジェクトを変更可能にするために状態を保持する。
- オブジェクトの値をJSXで表現する。

```js
import { useState } from "react";

const Example = () => {
  // DBをオブジェクトに設定して、
  const personObj = { name: "Tom", age: 18 };
  // オブジェクトを状態管理にセットする。ゲッターセッターの設定。
  const [person, sttPerson] = useState(personObj)
  return (
    <>
      // 結果を表示させるゲッター部分。
      <h3>Name: { person.name }</h3>
      <h3>Age: { person.age }</h3>
    </>
  )
};
export default Example;
```

### その　2

- JSXへinput要素を追加して入力したら表示も変更に追従できるようにする。
- sttPersonで更新する内容の記述は、設定しているオブジェクトの構造と形を合わせることが肝要。
- HTMLの話になるが、インプットの初期値設定は`value`属性。値は`useState`した変数から取れる。
```js
const Example = () => {
  const personObj = { name: "Tom", age: 18 }
  const [person, setPerson] = useState(personObj)
  const changeName = (e) => {
    setPerson({ name: e.target.value, age: person.age })
  }
  const changeAge = (e) => {
    setPerson({ name: person.name, age: e.target.value })
  }
  return (
    <>
      <h3>Name: {person.name}</h3>
      <h3>Age: {person.age}</h3>
      <input type="text" value={person.name} onChange={changeName} />
      <input type="number" value={person.age} onChange={changeAge} />
    </>
  )
}
```

## その 3

- 値をリセットするボタンを追加する。

```js
const Example = () => {
  const personObj = { name: "Tom", age: 18 }
  const [person, sttPerson] = useState(personObj)
  const changeName = (e) => {
    // オブジェクトで状態を持ったら、セッターの設定時もオブジェクトの形にして変更する。
    sttPerson({ name: e.target.value, age: person.age })
  }
  const changeAge = (e) => {
    sttPerson({ name: person.name, age: e.target.value })
  }
  const reset = () => {
    sttPerson({ name: "", age: "" })
  }
  return (
    <>
      <h3>Name: { person.name }</h3>
      <h3>Age: { person.age }</h3>
      <input type="text" value={ person.name } onChange={ changeName } />
      <input type="number" value={ person.age } onChange={ changeAge } />
      <div>
        <button onClick={ reset }>reset</button>
      </div>
    </>
  )
}
```

## その 4 `sttPerson`をリファクタリングする

```js
const personObj = { name: "Tom", age: 18 }
const [person, sttPerson] = useState(personObj)
const changeName = (e) => {
  // `useState`で得た変数をスプレッド演算子にかけて
  // オブジェクトで初期化すると別名でオブジェクトが生成される。
  // console.log({ ...person }) => {name: 'Tom', age: 18}

  // 比較演算子にかけて状態を確認する。
  // console.log({ ...person } === person) => false

  // その性質を使って、input要素へ送る値を生成するコードを整理してみる。
  // sttPerson({ name: e.target.value, age: person.age })

  // `sttPerson`の引数に、元の`person`の別名を`{ ...person }`を持ってきて、
  // `name`は入力値に置き換えるために第二引数へ充てる。
  // 何をやっているか一目瞭然だし、シンプル！ すごいRect。
  sttPerson({ ...person, name: e.target.value })
}
const changeAge = (e) => {
  sttPerson({ ...person, age: e.target.value })
}
```

## その 5 ちょっとだけ捻った練習問題

__問題__

### 練習問題

記述を変更し、完成コードのように「+と-ボタンをクリックするとCountの表示が1ずつ増減する機能」と「input要素に連動してItemの表示が変更される機能」を実装してください。コンポーネントの外側（上部）に変数や関数を準備しているためうまく使ってください。

```js
import { useState } from 'react';

const Example = () => {
  const orderObj = { item: 'apple', count: 10 };
  const [order, setOrder] = useState(orderObj);
  const changeItem = (e) => {};
  const countUp = () => {};
  const countDown = () => {};
  return (
    <div>
      <h3>Item:{/* ここにorder.itemを表示してください。*/}</h3>
      <h3>Count:{/* ここにorder.countを表示してください。*/}</h3>
      <input type="text" value={order.item} onChange={changeItem} />
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </div>
  );
};

export default Example;

```

__答え__

```js
import { useState } from 'react';
const Example = () => {
  const orderObj = { item: 'apple', count: 10 };
  const [order, setOrder] = useState(orderObj);
  const changeItem = (e) => {
    setOrder(order => ({ ...order, item: e.target.value }))
  };
  const countUp = () => {
    setOrder(order => ({ ...order, count: order.count + 1 }))
  };
  const countDown = () => {
    setOrder(order => ({ ...order, count: order.count - 1 }))
  };
  return (
    <div>
      <h3>Item:{ order.item }</h3>
      <h3>Count:{ order.count }</h3>
      <input type="text" value={order.item} onChange={changeItem} />
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </div>
  );
};
export default Example;
```

## 配列のStateを使う際の注意点

配列の要素を書き換える場合は、別名で生成させて操作する。

配列をStateする。

```js
import { useState } from "react"
const Example = () => {
  const numArray = [1, 2, 3, 4, 5];
  const [asSaveArr, sttAsSaveArr] = useState(numArray)

  return (
    <>
      <h3>{ asSaveArr }</h3>
    </>
  );
};
export default Example;
```

shuffleボタンをJSXに配置する。

```js
return (
  <>
    <h3>{ asSaveArr }</h3>
    <button onClick={ clickBtn }>Shuffle</button>
  </>
);
```

shuffleボタンを実装する。

```js
import { useState } from "react"
const Example = () => {
  const numArray = [1, 2, 3, 4, 5];
  const [asSaveArr, sttAsSaveArr] = useState(numArray)
  // ボタンをクリックして渡ってきた`clickBtn`関数に動きをつける。
  const clickBtn = () => {
    // Stateした配列を別名保存する。
    const newAsSaveArr = [...asSaveArr]
    // 配列の最後の値を変数に格納。
    const popedValue = newAsSaveArr.pop()
    // 値を配列の前に差し込む。
    newAsSaveArr.unshift(popedValue)
    // Stateに返す、または引数にして代入する。これだけです。
    sttAsSaveArr(newAsSaveArr)
  }
  return (
    <>
      <h3>{ asSaveArr }</h3>
      <button onClick={ clickBtn }>Shuffle</button>
    </>
  );
};
export default Example;
```

## StateとComponentの関係

StateはComponentと1：1で結びついている。

### 練習問題

- Exampleコンポーネントの中身をCountコンポーネントとして自身の中に複数レイアウトする。
- 作成したコンポーネントはそれぞれに独立したStateを保持していることを確認する。

__問題__

```js
import { useState } from "react"
const Example = () => {
  const [count, setCount] = useState(0)
  const countUp = () => {
    setCount(count + 1)
    // setCount((prevstate) => prevstate + 1)
  }
  const countDown = () => {
    setCount(count - 1)
  }
  return (
    <>
      <h3>カウント: {count}</h3>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  )
}
export default Example
```

__回答__

```js
import { useState } from "react"

const Example = () => {
  return (
    <>
      <Count />
      <Count />
    </>
  )
}

const Count = () => {
  const [count, setCount] = useState(0)
  const countUp = () => {
    setCount(count + 1)
    // setCount((prevstate) => prevstate + 1)
  }
  const countDown = () => {
    setCount(count - 1)
  }
  return (
    <>
      <h3>カウント: {count}</h3>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  )
}
export default Example
```

## 練習問題

- タイトルのprops（ReactのJSX属性）を付与して冗長的にしてみる。
- propsは親コンポーネントで定義して、子コンポーネントへ渡す。
- 最終は子コンポーネントのJSX内要素への属性として適用させることが目的。子コンポーネントのJSX内要素をコントロールするためのもの。

```js
const Example = () => {
  return (
    <>
      {/* JSX内、つまり文章構造の中で、props（属性）を付与する。 */}
      <Count title="A"/>
      <Count title="B"/>
    </>
  )
}

// 親から渡ってきたものを受け取る。props（属性）名を引数に入れる。
const Count = ({ title }) => {
  const [count, setCount] = useState(0)
  const countUp = () => {
    setCount(count + 1)
    // setCount((prevstate) => prevstate + 1)
  }
  const countDown = () => {
    setCount(count - 1)
  }
  return (
    <>
      {/* 親から渡ってきたpropsを子コンポーネントのJSXの要素へ引き渡す。 */}
      <h3>{ title }カウント: {count}</h3>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  )
}
```

- component A, Bを同じ場所で切り替えて出力してみる。
- toggleボタンを追加してやる。

```js
import { useState } from "react"

const Example = () => {
  // A, Bどちらを表示するのかを示すflagを初期値`true`で作成する。
  const [toggle, stateToggle] = useState(false)
  const toggleComponent = () => {
    // この仮引数に入っているのは`toggle`、つまり`true`か`false`
    // 真だったら偽　偽だったら真　を返す無名関数。心臓部。
    // つまり、stateToggleの状態をここで切替えることができる。
    stateToggle(present => !present)
  }
  return (
    <>
      {/* `toggle`が`true`か`false`でCompoentを切替えるきっかけを与えるボタンを作成する。
      ここのロジック大切。 */}
      <button onClick={ toggleComponent }>切り替え</button>
      {/* `toggle`が`true`か`false`で切り替える。 */}
      { toggle ? <Count title="A"/> : <Count title="B"/>}
    </>
  )
}
...
...
export default Example
```

- ただし、この状態では、Aの状態で値を変更した場合値を保持してBに引き継がれてしまう。
- 同じ階層のコンポーネントは状態を保持するのがReactの仕様。
- 解決法はコンポーネントに`key`をつけて、切替えるたびにStateを初期化する。
- ただし、値を保持できないのよね。。。

```js
<>
  <button onClick={ toggleComponent }>切り替え</button>
  { toggle ? <Count title="A" key="A" /> : <Count title="B" key="B" />}
</>
```

__一旦完成__

```js
import { useState } from "react";

// POINT stateとコンポーネントの関係
const Example = () => {
  const [toggle, setToggle] = useState(true);
  const toggleComponent = () => {
    setToggle(prev => !prev);
  }
  return (
    <>
    {/* POINT コンポーネントの位置によってstateが識別される */}
    <button onClick={toggleComponent}>toggle</button>
    {toggle ? <Count key="A" title="A"/> : <Count key="B" title="B"/>}
    {/* <Count title="A"/>
    {toggle && <Count title="B"/>} */}
    </>
  )
}



const Count = ({ title }) => {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount((prevstate) => prevstate + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h3>{ title }: { count }</h3>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
```

## 値を保持できない問題を解決する

コンポーネントが消滅した後も値を保持する方法

- Stateの値、つまりカウントした数はCountコンポーネントで作成している。これを親コンポーネントへ移動する。
Stateの値を差し込んでいるCountコンポーネントへporpsとして追記する。
- 移動したStateをCountコンポーネントでpropsとして受信する。
- 動作確認のためtoggleを削除する。
- Count A, Bともクリックすると値が同時に同じ値で変わることを確認。参照しているStateが同じだから。

```js
import { useState } from "react";

// POINT stateとコンポーネントの関係
const Example = () => {
  const [toggle, stateToggle] = useState(true);
  const [count, stateCount] = useState(0);
  const toggleComponent = () => {
    stateToggle(prev => !prev);
  }
  return (
    <>
    {/* POINT コンポーネントの位置によってstateが識別される */}
    <button onClick={ toggleComponent }>toggle</button>
    <Count title="A" key="A" count={ count } setCount={ stateCount } />
    <Count title="B" key="B" count={ count } setCount={ stateCount } />
    </>
  )
  // return (
  //   <>
  //   {/* POINT コンポーネントの位置によってstateが識別される */}
  //   <button onClick={ toggleComponent }>toggle</button>
  //   { toggle 
  //     ? <Count title="A" key="A" count={ count } setCount={ stateCount } /> 
  //     : <Count title="B" key="B" count={ count } setCount={ stateCount } /> }
  //   </>
  // )
}
const Count = ({ title, count, setCount }) => {
  const countUp = () => {
    setCount((prevstate) => prevstate + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h3>{title}: { count }</h3>
      <button onClick={ countUp }>+</button>
      <button onClick={ countDown }>-</button>
    </>
  );
};
export default Example;
```

- StateをA, Bで作成する。

```js
const [countA, stateCountA] = useState(0);
const [countB, stateCountB] = useState(0);
```

- あとはtoggleで条件分岐させればいい。

```js
    { toggle
      ? <Count title="A" key="A" count={ countA } setCount={ stateCountA } />
      : <Count title="B" key="B" count={ countB } setCount={ stateCountB } />
    }
    </>
```

__完成コード__

```js
import { useState } from "react";

const Example = () => {
  const [toggle, stateToggle] = useState(true);
  const [countA, stateCountA] = useState(0);
  const [countB, stateCountB] = useState(0);
  const toggleComponent = () => {
    stateToggle(prev => !prev);
  }
  return (
    <>
    <button onClick={ toggleComponent }>toggle</button>
    { toggle
      ? <Count title="A" key="A" count={ countA } setCount={ stateCountA } />
      : <Count title="B" key="B" count={ countB } setCount={ stateCountB } />
    }
    </>
  )
}
const Count = ({ title, count, setCount }) => {
  const countUp = () => {
    setCount((prevstate) => prevstate + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h3>{title}: { count }</h3>
      <button onClick={ countUp }>+</button>
      <button onClick={ countDown }>-</button>
    </>
  );
};
export default Example;
```

### 捻った練習問題

- カウント結果とカウント実装部を分けてみる。
- 親コンポーネントに子コンポーネントを継ぎ足ししてページを構成する。
- 子コンポーネントに実現したい動きを想定した関数名を`props`として設定する。`属性={ 関数名 }`の形
- 子コンポーネントで`props`を受信する。
- 子コンポーネントのJSX内で開く。
- 必要であれば動作を作る。

```js
import { useState } from "react"

const Example = () => {
  const [count, stateCount] = useState(0)
  return (
    <>
    <CountResult title="カウント" counted={ count }/>
    <CountUpdate  setCount={ stateCount }/> 
    </>
  );
};

const CountResult = ({ title, counted }) => {
  return (
    <>
    <h3>{ title }: { counted }</h3>
    </>
  )
}

const CountUpdate = ({ setCount }) => {
  const countUp = () => {
    setCount(pervState => pervState + 1)
  };
  const countDown = () => {
    setCount(pervState => pervState - 1)
  };
  return (
    <>
      <button onClick={ countUp }>+</button>
      <button onClick={ countDown }>-</button>
    </>
  );
};
export default Example;
```

## 制御構文とフォームの制御

### 配列をリスト表示する

3つのやり方、ただし、使うのは`JSX内`で式として展開できる`map`だけ覚えればいいです。

#### 配列の値をJSXで出力してみる

```js
const animals = ["Dog", "Cat", "Rat"]
const Example = () => {
  return (
    <>
      <h3>配列の操作</h3>
      <ul>
        <li>{ animals[0] }</li>
        <li>{ animals[1] }</li>
        <li>{ animals[2] }</li>
      </ul>
    </>
  )
}
export default Example
```

#### 一般的なやり方にしてみる その1 for(ins of array)

```js
const animals = ["Dog", "Cat", "Rat"]
const Example = () => {
  let animalList = []
  for(const animal of animals) {
    animalList.push(<li>{ animal }</li>)
  }
  return (
    <>
      <h3>配列の操作</h3>
      <ul>
        { animalList }
      </ul>
    </>
  )
}
export default Example
```

#### 一般的なやり方にしてみる その2 map

```js
const animals = ["Dog", "Cat", "Rat"]
const Example = () => {
  const animalList = animals.map(animal => <li>Hello, { animal }!</li>)
  return (
    <>
      <h3>配列の操作</h3>
      <ul>
        { animalList }
      </ul>
    </>
  )
}
export default Example
```

#### mapは式なのでJSX内に記述することができるのでコードを修正する。

```js
const animals = ["Dog", "Cat", "Rat"]
const Example = () => {
  return (
    <>
      <h3>配列の操作</h3>
      <ul>
        { animals.map(animal => <li>Hello, { animal }!</li>) }
      </ul>
    </>
  )
}
export default Example
```

## リストには必ずkeyをつける

配列のような繰り返し処理を行う子要素に対してはkey属性を付与する。
key属性をつけないと要素を加減によって洗い替えが起きてシステムに負担が多くかかるから。

- keyには必ず一意の値を設定する。ただし、子要素の中でキーは重複しなければ良い。他のコンポーネントとは監視範囲が違うから。
- keyに設定した値は変更しない。
　配列のインデックスはなるべくkeyに使用しない。

## 配列のフィルターメソッドの使い方

入力したらリストから値を取ってきて当てはまる文字列を表示する。どうすんねん！

インプットされた値をStateするためにやることをやる。

```js
import { useState } from "react"

const animals = ["Dog", "Cat", "Rat"]
const Example = () => {
  // Stateを初期化する。
  const [filterVal, stateFilterVal] = useState("")
  return (
    <>
      <h3>配列のフィルター</h3>
      {/* input要素を作成しpropsを設定する。 */}
      <input type="text" value={ filterVal }
        onChange={ (e) => {
            stateFilterVal(e.target.value)
          }
        }
      />
      <ul>
        { animals.map(animal => <li>{animal}</li>) }
      </ul>
    </>
  )
}
export default Example
```

- リストに検索装置を設置する。
- filterの引数にコールバック関数を設定する。
- 内容は、コールバック関数の戻り値が`true`の場合は新しい配列に含める。
- `indexOf()`関数は、一致する文字が見つからなかった場合には`-1`を返す。
- 否定の否定で`true`を返す。

```js
import { useState } from "react"

const animals = ["Dog", "Cat", "Rat"]
const Example = () => {
  const [filterVal, stateFilterVal] = useState("")
  return (
    <>
      <h3>配列のフィルター</h3>
      <input type="text" value={ filterVal }
        onChange={ (e) => {
            stateFilterVal(e.target.value)
          }
        }
      />
      <ul>
        { animals
          .filter(animal => animal.indexOf(filterVal) !== -1)
          .map(animal => <li key={ animal }>{ animal }</li>) 
        }
      </ul>
    </>
  )
}
export default Example
```

## 難しすぎる練習問題

捻られると途端にわからなくなる。

__Example.js__

```js
import Profile from "./components/Profile";

const Example = () => {
  const persons = [
    {
      name: "Geo",
      age: 18,
      hobbies: ["sports", "music"],
    },
    {
      name: "Tom",
      age: 25,
      hobbies: ["movie", "music"],
    },
    {
      name: "takahiro",
      age: 21,
      hobbies: ["sports", "travel", "game"],
    },
  ];
  return (
    <>
      <ul>
      { persons.map((person) => (
        <li key={ person.name }>
          <Profile { ...person } />
        </li>
      )) }
      </ul>
    </>
  );
};
export default Example;
```

__Profile.js__

```js
const Profile = ({ name, age, hobbies }) => {
  return (
    <>
      <hr />
      <div>Name: { name }</div>
      <div>Age: { age }</div>
      <div>
        <div>Hobby:</div>
        <ul>
          { hobbies.map((hobby) => (
            <li key={ hobby }>{ hobby }</li>
          )) }
        </ul>
      </div>
    </>
  );
};
export default Profile;
```

## 練習問題

検索の仕組みをパターンを変えて考える。
配列、オブジェクトを表示する仕組みを暗記。

```js
import Profile from "./components/Profile";
import { useState } from "react"

const persons = [
  {
    name: "Geo",
    age: 18,
    hobbies: ["sports", "music"],
  },
  {
    name: "Tom",
    age: 25,
    hobbies: ["movie", "music"],
  },
  {
    name: "Lisa",
    age: 21,
    hobbies: ["sports", "travel", "game"],
  },
];

const Example = () => {
  const [filterVal, stateFilterVal] = useState("")
  return (
    <>
      <input type="text" value={ filterVal }
        onChange={(e) => {
          stateFilterVal(e.target.value)
        }
      } />
      <ul>
        { persons
          .filter(person => {
            return person.name.indexOf(filterVal) !== -1
            {/* const isMatch = person.name.indexOf(filterVal) !== -1 */}
            {/* return isMatch */}
          })
          .map(person => (
            <li key={ person.name }>
              <Profile { ...person } />
            </li>
          )) 
        }
      </ul>
    </>
  );
};
export default Example;
```

## if

リスト項目の特定のアイテムに星印をつける。
配列から渡ってくる項目に対して条件があったものに特定の処理をする寸法。

丸括弧で囲んでいる意味
戻り値はオブジェクト。
オブジェクトを戻り値にする場合は、丸括弧で囲むことで意図を明示している。

```js
.map((animal) => (<li key={ animal }>{ animal }</li>))
```

ただし、今回は、if文を書くので普通に`{}`で囲む。

```js
import { useState } from "react";

const Example = () => {
  const animals = ["Dog", "Cat", "Rat"];
  const [filterVal, setFilterVal] = useState("");

  return (
    <>
      <input
        type="text"
        value={ filterVal }
        onChange={ (e) => setFilterVal(e.target.value) }
      />
      <ul>
        {animals
          .filter((animal) => {
            const isMatch = animal.indexOf(filterVal) !== -1;
            return isMatch;
          })
          .map((animal) => {
            if (animal === "Dog") {
              return <li key={ animal }>{ animal }★</li>
            } else {
              return <li key={ animal }>{ animal }</li>
            }
          })
        }
      </ul>
    </>
  );
};
export default Example;
```

三項演算子にする。

その1

```js
return (
  <li key={ animal }>
    { animal === "Dog" ? animal + "★" : animal }
  </li>
)
```

その2

```js
return (
  <li key={ animal }>
    { animal + (animal === "Dog" ? "★" : "") }
  </li>
)
```

`??`で書き換える。
`A ?? B`
`A`の値が、『`null`』『`undifine`』の場合に`B`を取る演算子

よくあるやつ、データに`null`が入っている場合の対処法になる。
`indexOf`は文字列型、配列型のメソッド。nullを扱えない。

__まとめ__

```js
import { useState } from "react";

const Example = () => {
  const petArray = ["Dog", "Cat", null ,"Rat"];
  const [filterVal, stateFilterVal] = useState("");

  return (
    <>
      // input要素の慣用句だと思って覚える。
      // valueにStateの変数。
      // onChangeイベントにStateの関数。
      <input
        type="text"
        value={ filterVal }
        onChange={ (e) => stateFilterVal(e.target.value) }
      />
      <ul>
        { petArray
          .filter((pet) => {
            const petStr = pet ?? ""
            const isMatch = petStr.indexOf(filterVal) !== -1;
            return isMatch;
          })
          .map((pet) => {
            return (
              <li key={ pet }>
                { pet ?? "nullがあります。データをpwd修正してください。" }
                { pet === "Dog" && "★" }
              </li>
            )
          })
        }
      </ul>
    </>
  );
};
export default Example;
```

## コンポーネントのリファクタリング

### 1-7までの手順

__Example.js__

```js
import { useState } from "react";
import AnimalList from "./components/AnimalList"

const Example = () => {
  const petArray = ["Dog", "Cat", null ,"Rat"]
  const [filterVal, stateFilterVal] = useState("")
  // 7. AnimalListコンポーネントから移築したフィルターを配置。
  const FliteredAnimal = petArray.filter((pet) => {
          const petStr = pet ?? ""
          {/* 6. filterValが見つからないと言われる。 */}
          const isMatch = petStr.indexOf(filterVal) !== -1;
          return isMatch;
        })
  return (
    <>
      <input
        type="text"
        value={ filterVal }
        onChange={ (e) => stateFilterVal(e.target.value) }
      />
      {/* 4. petArrayをpropsとして送信する。 */}
      {/* <AnimalList animals={ petArray } /> */}
      
      <AnimalList petArray={ FliteredAnimal } />
    </>
  );
};

export default Example;
```

__AnimalList.js__

```js
// 2. AnimalListコンポーネントを作成する。
// 5. propsのpetArrayを受信する。
const AnimalList = ({ petArray }) => {
  return (
    // 1. Example親コンポーネントから持ってきたJSXを貼り付ける
    <ul>
      {/* 4. petArrayがないと言われるので、 */}
      { petArray
        // 7. AnimalListは単純に渡ってきた値をリストとして表示するだけの機能に限定するべき、
        // フィルターを使って値を変更する機能は親コンポーネントに持たせる。
        // なのでpetArrayにフィルターをかけている箇所をExpamleへ渡す。
        // .filter((pet) => {
        //   const petStr = pet ?? ""
        //   // 6. filterValが見つからないと言われる。
        //   const isMatch = petStr.indexOf(filterVal) !== -1;
        //   return isMatch;
        // })
        .map((pet) => {
          return (
            <li key={ pet }>
              { pet ?? "nullがあります。データをpwd修正してください。" }
              { pet === "Dog" && "★" }
            </li>
          )
        })
      }
    </ul>
  )
}
// 3. 自身をexportする。
export default AnimalList
```

### 8からの手順

__Example.js__

```js
import { useState } from "react";
import AnimalList from "./components/AnimalList"

const Example = () => {
  const petArray = ["Dog", "Cat", null ,"Rat"]
  const [filterVal, stateFilterVal] = useState("")
  const FliteredAnimal = petArray.filter((pet) => {
          const petStr = pet ?? ""
          const isMatch = petStr.indexOf(filterVal) !== -1;
          return isMatch;
        })
  return (
    <>
      <input
        type="text"
        value={ filterVal }
        onChange={ (e) => stateFilterVal(e.target.value) }
      />
      <AnimalList petArray={ FliteredAnimal } />
    </>
  );
};
export default Example;
```

__AnimalList.js__

```js
import ListItem from "./ListItem";

const AnimalList = ({ petArray }) => {
  // 10. エラー処理をしておく
  // petArrayに値がない場合の処理を書く
  if (petArray.length === 0) {
    return <p>入力されたペットが見つかりません。</p>
  }
  return (
    <ul>
      { petArray
        .map((pet) => {
          return (
            // 8. リストのliをListItem.jsとしてコンポーネント化する。
            // <li key={ pet }>
            //   { pet ?? "nullがあります。データをpwd修正してください。" }
            //   { pet === "Dog" && "★" }
            // </li>
            // 9. map関数の引数となっている`pet`を`propsl`として
            // ListItemコンポーネントへ送信する。
            <ListItem pet={ pet }/>
          )
        })
      }
    </ul>
  )
}
export default AnimalList
```

__ListItem.js__

```js
// 8. ListItemとしてコンポーネントを作成する。
const ListItem = ({ pet }) => {
  return (
    <li key={ pet }>
      { pet ?? "nullがあります。データをpwd修正してください。" }
      { pet === "Dog" && "★" }
    </li>
  )
}
export default ListItem
```

### 10からの手順

__Example.js__

```js
import { useState } from "react";
import AnimalList from "./components/AnimalList"
import InputFilterVal from "./components/InputFilterVal"

const Example = () => {
  const petArray = ["Dog", "Cat", null ,"Rat"]
  const [filterVal, stateFilterVal] = useState("")
  const FliteredAnimal = petArray.filter((pet) => {
          const petStr = pet ?? ""
          const isMatch = petStr.indexOf(filterVal) !== -1;
          return isMatch;
        })
  return (
    <>
      {/* 11. input要素もコンポーネント化する。 */}
      {/* InputFilterValコンポーネントを作成してコードを移動する。 */}
      {/* <input
            type="text"
            value={ filterVal }
            onChange={ (e) => stateFilterVal(e.target.value) }
          /> */}
      <InputFilterVal filterState={ [filterVal, stateFilterVal] }/>
      <AnimalList petArray={ FliteredAnimal } />
    </>
  );
};
export default Example;
```

__AnimalList.js__

```js
import ListItem from "./ListItem";

const AnimalList = ({ petArray }) => {
  // 10. エラー処理をしておく
  // petArrayに値がない場合の処理を書く
  if (petArray.length === 0) {
    return <p>入力されたペットが見つかりません。</p>
  }
  return (
    <ul>
      { petArray
        .map((pet) => {
          return (
            // 15. ListItemからkeyを移動する。
            // <ListItem pet={ pet }/>
            <ListItem pet={ pet } key={ pet }/>
          )
        })
      }
    </ul>
  )
}
export default AnimalList
```

__ListItem.js__

```js
const ListItem = ({ pet }) => {
  return (
    // 15. 現状だとkeyがないと警告される。ここにあるのに。。。
    // 親コンポーネントにつけないといけないルールだそう。
    // 削除してAnimalListの該当部分へ配置する。
    // <li key={ pet }>
    <li>
      { pet ?? "nullがあります。データをpwd修正してください。" }
      { pet === "Dog" && "★" }
    </li>
  )
}
export default ListItem
```

__InputFilterVal.js__

```js
// 12. InputFilterValコンポーネントの作成。
// 13. ExampleコンポーネントからStateをprops経由で受け取る。
const InputFilterVal = ({ filterState }) => {
  // 14. 受け取ったState（状態）が格納されているpropsを分割代入して展開する。
  const [filterVal, stateFilterVal] = filterState
  return (
    <input
      type="text"
      value={ filterVal }
      onChange={ (e) => stateFilterVal(e.target.value) }
    />
  )
}
export default InputFilterVal
```

## input

input要素にはStateを連携させる

Stateを宣言して、

```js
[val, setVal] = useState("");
```

入力のイベントを抽出し、

```js
onChange => setVal  => {(e) => setVal(e.target.value)}
```

変数に紐づける。

```js
value    => val     => {val}
```

```js
const Example = () => {
  const [val, setVal] = useState("");
  const clearVal = () => setVal("");
  return (
    <div>
      <label htmlFor="456">ラベル</label>
      <div>
        <input
          id="123"
          placeholder="こんにちは"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        ...
  )
}
```

## textarea

設定は、`input`と同じ。

HTML => `<textarea>`内容はここに入力される。`</textarea>`
Reactでは、`value={val}`にあたる。
React => `<textarea value={val} />`

## クリア・ボタンの実装

setVal関数に空文字を与えて関数にしておく。

```js
const [val, setVal] = useState("");
const clearVal = () => setVal("");
```

それをボタンをクリックした時をきっかけに関数を実行させてクリアを行うという寸法。

```js
<button onClick={clearVal}>クリア</button>
```

```js
const Example = () => {
  const [val, setVal] = useState("");
  const clearVal = () => setVal("");
  return (
    <div>
      <label htmlFor="456">ラベル</label>
      <div>
        <input
          id="123"
          placeholder="こんにちは"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <textarea　
          id="456"
          placeholder="こんにちは"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
      </div>
      <h3>{val}</h3>
      <button onClick={clearVal}>クリア</button>
    </div>
  );
};
export default Example;
```

## raido botton

- radioボタンが選択された時に取得したい値を設定する。
- onChangeイベントハンドラが呼び出された時にあらかじめ設定しておいた関数を作動させる。
- radioボタンのAppleをクリックする。
- onChange関数が発動
- setFruite関数にイベントの値が渡され、変数`fruite`に`Apple`が代入される。
- checked属性で代入された`Apple`とStateが発動してから渡ってきたvalueを比較し、`true`だったらボタンにチェックが入るという寸法。
周り回ってるわ！

```js
import { useState } from "react";
// POINT ラジオボタンの実装
const Example = () => {
  const [fruit, setFruit] = useState("Apple");
  const onChange = (e) => setFruit(e.target.value);

  const RADIO_COLLECTION = ["Apple", "Banana", "Cherry"];

  return (
    <>
      {RADIO_COLLECTION.map((value) => {
        return (
          <label key={value}>
            <input
              type="radio"
              value={value}
              checked={fruit === value}
              onChange={onChange}
            />
            {value}
          </label>
        );
      })}
      {/* <label>
        <input
          type="radio"
          value="Banana"
          checked={fruit === "Banana"}
          onChange={onChange}
        />
        Banana
      </label>
      <label>
        <input
          type="radio"
          value="Cherry"
          checked={fruit === "Cherry"}
          onChange={onChange}
        />
        Cherry
      </label> */}
      <h3>私は{fruit}がたべたい</h3>
    </>
  );
};
export default Example;
```

## checkbox

```js
import { useState } from "react";
// POINT チェックボックスの実装
const Example = () => {
  const [isChecked, setIsChecked] = useState(true);

  // const toggleChecked = (e) => {
  //   setIsChecked(prevState => !prevState);
  // };

  return (
    <div>
      <label htmlFor="my-check">
        チェック：
      </label>
      <input
        type="checkbox"
        id="my-check"
        checked={isChecked}
        onChange={() => setIsChecked(prevState => !prevState)}
      />
      <div>{isChecked ? "ON!" : "OFF!"}</div>
    </div>
  );
};
export default Example;
```


`setFruit(e.target.value)`で渡ってきた値を`fruit`に代入し、
valueが
checked={fruit === value}

## Styling

### inline style

```js
import { useState } from "react"

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);
  const clickHandler = () => setIsSelected(prev => !prev);
  // インライン・スタイルはオブジェクトを変数に代入して指定する。
  // JS内の記述なので扱いがCSSと違う。
  // 値を文字列で区切ったり、数字だけ書いてpx省略、属性はキャメルケースとか。
  // JSが書けるのがメリット。
  // 疑似セレクタやメディアクエリにも対応していない。これは絶望的。常用で使うことはない。
  const style = {
    display: "block",
    width: 200,
    height: 50,
    margin: "0 auto 20px",
    fontWeight: "bold",
    cursor: "pointer",
    border: "none",
    borderRadius: 9999,
    backgroundColor: isSelected ? "pink" : ""
  }
  return (
    <>
      {/* toggle */}
      <button onClick={ clickHandler } style={ style }>ボタン</button>
      {/* 論理積: 真 && 真 => 右側の真 */}
      {/* 上は変数で、こちらは直にインラインする。 */}
      {/* JSX => style={} */} {/* その中の{}はオブジェクト */}
      <div style={{ textAlign: "center" }}>{ isSelected && "クリックされました。" }</div>
    </>
  )
};
export default Example;
```

## 外部CSSのimportを使ったスタイリング

サイト全体に関わるスタイリングに使う。
コンポーネントのスタイリングには向いていない。

```js
import { useState } from "react";
import "./Example.css"

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);
  // トグルスイッチの仕込み
  const clickHandler = () => setIsSelected((prev) => !prev);

  // クラスを追加したい。
  return (
    <>
                                {/* クラスの切り替え部 */}             {/* トグルスイッチ発火部 */}
      <button className={ `btn ${ isSelected ? "selected" : "" }` } onClick={  clickHandler }>
        ボタン
      </button>
      <div style={{ textAlign: "center" }}>
        { isSelected && "クリックされました。" }
      </div>
    </>
  );
};
export default Example;
```

### CSS-in-JS

CSS-in-JSをするためにはVSCodeの拡張機能必要。
VSCodeの`styled-components.vscode-styled-components`で検索してインストール。

```js
console.dir(styled)
```

styledの内容を確認すると属性はCSSと同じだけ揃えてある。styledに設定したい属性名を充ててインスタンスを生成。
そこへテンプレート・リテラルで囲んだCSSを記述していく。
なお、React要素扱いなので変数名は大文字で記述する。

```js
import styled from "styled-components"

const StyledButton = styled.button`
  margin: auto;
  border-radius: 9999px;
  border: none;
  display: block;
  width: 120px;
  height: 60px;
  font-weight: bold;
  cursor: pointer; 
  background-color: ${ ({ isSelected }) => isSelected ? "pink" : "" };
`
```

#### CSS-in-JSで書いた場合の利点満載コード

```js
import { useState } from "react";
import styled from "styled-components"

// styledの内容を確認すると属性はCSSと同じだけ揃えてある。
// styledに設定したい属性名を充ててインスタンスを生成。
// そこへテンプレート・リテラルで囲んだCSSを記述していく。
// console.dir(styled)

const StyledButton = styled.button`
  margin: auto;
  border-radius: 9999px;
  border: none;
  display: block;
  width: 120px;
  height: 60px;
  font-weight: bold;
  cursor: pointer; 
  background-color: ${ ({ isSelected }) => isSelected ? "pink" : "" };
`
// クラスの継承
// 上書きしたクラスを持ったコンポーネントを作成する。
// styled()関数の引数には、オリジナルのコンポーネントを代入してインスタンスを作る。
// 利点は、擬似要素、スタイルのインデントが使えること。

const OrangeBgColorButton = styled(StyledButton)`
  position: relative;
  background-color: orange;
  :hover {
    color: red;
    opacity: .7;
  }
  ::before {
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translateX(-50%);
    content: "hello";
    font-size: 1em;
    color: #fff;
  }
  span {
    font-size: 1.5em;
  }
`

const SecondButton = styled(StyledButton)`
  color: #fff;
  background-color: ${ ({ dark }) => dark ? "black" : ""};
`

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);
  const clickHandler = () => setIsSelected((prev) => !prev);

  return (
    <>
      {/* `isSelected`を`props`にする。デフォルトで入っているのは`false`。 */}
      <StyledButton isSelected={ isSelected } onClick={ clickHandler }>Button</StyledButton>
      <SecondButton dark="dark" isSelected={ isSelected } onClick={ clickHandler }>Button</SecondButton>
      <OrangeBgColorButton isSelected={ isSelected } onClick={ clickHandler }><span>Button</span></OrangeBgColorButton>
      <div style={{ textAlign: "center" }}>
        {isSelected && "クリックされました。"}
      </div>
    </>
  );
};
export default Example;
```

## DOM操作

### createPortal モーダルを作ってみる

__Example.js__

```js
import { useState } from "react";
// createPortalを使うと違う親へ要素を移動できる。
import { createPortal } from "react-dom";
import Modal from "./components/Modal";

// POINT createPortalの使い方
// createPortalで作成するのは、子要素を受け入れる容器であるインスタンスと移動先
// 引数にchildrenを持つ無名関数を定義する。
// 以上で、ModalPortalをコンポーネントのように使用できる。
const ModalPortal = ({ children }) => {
  const target = document.querySelector('.container.start');
  // 第一引数: React の子要素としてレンダー可能なもの （要素、文字列、フラグメント、コンポーネントなど）
  // 第一引数にレンダリングしたい子要素を引数にする。
  // 第二引数にレンダー先のDOM要素
  return createPortal(children, target)
};
/* POINT createPortalはどんなときに使うか？
子要素は親要素のスタイルによって表示に制限を受ける場合があります。
（overflow: hidden 、 z-index 、 width　など・・・ ）
それらの制限なく、子要素が親要素を「飛び出して」表示する必要があるときにcreatePortalを使うのが有効です。
モーダル、ポップアップ、トーストは使用の代表例です。
*/
const Example = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <div className="container start"></div>
      <button
        type="button"
        onClick={ () => setModalOpen(true) }
        disabled={ modalOpen }
      >
        モーダルを表示する
      </button>
      {/* modalOpen => defaultでfalse */}
      {/* 容器にModalを包む。 */}
      { modalOpen && (
        <ModalPortal>
          <Modal handleCloseClick={ () => setModalOpen(false) } /> 
        </ModalPortal>
      )}
    </div>
  );
};
export default Example;
```

__modal.js__

```js
import "./Modal.css";

const Modal = ({ handleCloseClick }) => {
  return (
    <div className="modal">
      <div className="modal__content">
        <p>モーダル</p>
        <button type="button" onClick={ handleCloseClick }>
          閉じる
        </button>
      </div>
    </div>
  );
};
export default Modal;
```

### Bubbling portalを使う際の注意点

> Bubbling
  イベントが子要素から親要素へ伝播していく仕組み。
  例
  子要素にクリック・イベントが発生 => 親要素へ伝播　親要素にイベント・ハンドラーがあればイベントが実行される。

ボタンをクリックすると、親のクリックイベントも反応する。伝播した証拠。

```js
const Example = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div onClick={() => console.log("親のdiv要素へ伝播した証拠")}>
      <div onClick={() => console.log("新しい親のdiv要素へ伝播した証拠")}
          className="container start"></div>
      <button
        type="button"
        onClick={ () => setModalOpen(true) }
        disabled={ modalOpen }
      >
        モーダルを表示する
      </button>
        { modalOpen && (
          <ModalPortal>
            <Modal handleCloseClick={ () => setModalOpen(false) } /> 
          </ModalPortal>
        )}
    </div>
  );
};
```

React要素の構成に従ってBubblingする。
JSによって構成要素を変更してもその新しい構成に準じてBubblingすることはしない。

```js
const Example = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div onClick={() => console.log("親のdiv要素へ伝播した証拠")}>
      <div onClick={() => console.log("新しい親のdiv要素へ伝播した証拠")}
        className="container start">
          // ここへbutton要素が入ってくるので、モーダル画面でのボタンを押したら反応すると想像しがちだがダメです。
        </div>
      <button
        type="button"
        onClick={ () => setModalOpen(true) }
        disabled={ modalOpen }
      >
        モーダルを表示する
      </button>
        { modalOpen && (
          <ModalPortal>
            <Modal handleCloseClick={ () => setModalOpen(false) } /> 
          </ModalPortal>
        )}
    </div>
  );
};
```

## useRef refでDOMを操作する

基本的にはDOMは直接操作しない。　
Reactで実装できない時にDOM操作でかわす感じか。
ボタンをクリックすると関連する入力欄がfocusされる場合をやってみる。

```js
import { useState, useRef } from "react";

const Case1 = () => {
  // 1. 状態を生成させる。
  const [value, setValue] = useState("");
  const inputRef = useRef();
  // => 戻り値はこれ、{current: undefined}
  // つまり、値の更新を行うときは、current属性にDOMのメソッドを直接当てることになる。
  console.log(inputRef) 
  return (
    <div>
      <h3>ユースケース1</h3>
      {/* 2. input要素にfocusを当てたいのでuseRef()関数から生成したインスタンスをここに属性として設定する。 */}
      {/* イベントで発火させたインスタンスをrefで受信するイメージ。 */}
      {/* JSXのinput要素の参照をinputRefが保持することになる。 */}
      <input type="text" value={value} ref={inputRef} onChange={(e) => setValue(e.target.value)} />
      {/* 3. 確認のため、onClickイベントで発火させてみる。 */}
      {/* <button onClick={() => console.log(inputRef)}> */}
      {/* 4. current属性でDOMのメソッドが直接使えることになる。 */}
      <button onClick={() => inputRef.current.focus( )}>
        インプット要素をフォーカスする
      </button>
    </div>
  );
};
const Example = () => {
  return (
    <>
      <Case1 />
    </>
  );
};
export default Example;
```

### 動画の再生をrefで扱ってみる。

```js
import { useState, useRef } from "react";

const Case1 = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef();
  return (
    <div>
      <h3>ケース1</h3>
      <input type="text" value={value} ref={inputRef} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => inputRef.current.focus( )}>
        インプット要素をフォーカスする
      </button>
    </div>     
  );
};

const Case2 = () => {
  // 2. video要素の状態を設置する。
  // 最初の状態ではvideoは動いて『ない』のでfalseを設定する。
  const [playing, statePlay] = useState(false);
  // 5. video要素に状態を与える。
  const videoRef = useRef();
  return (
    <div>
      <h3>ケース2</h3>
      {/* 1. video要素を設置し、 */}
      {/* 5. イベントで発火された時に飛んでくるインスタンスの受信機を設置する。 */}
      <video ref={videoRef} style={{ maxWidth: "100%" }}>
        <source src="./sample.mp4" />
      </video>
      <button onClick={() => {
        {/* 6. イベントで発火。状態を見て振り分け、インスタンスを送信する。 */}
        if(playing) {
          videoRef.current.pause();
        } else {
          videoRef.current.play();
        }
        {/* 3. toggleスイッチを設置する。いつものやつ。暗記する。 */}
        statePlay(flag => !flag); 
      }}>
        {/* 4. ボタンの表記を変える。 */}
        { playing ? 'Stop' : 'Play' }
      </button>
    </div>
  )
}

const Example = () => {
  return (
    <>
      <Case1 />
      {/* コンポーネントとして読み込む */}
      <Case2 />
    </>
  );
};
export default Example;
```

### useRef　refとは？　refとstateの違い

- 再レンダリングが発生しても値が保持される。
- refの値を更新しても再レンダリングがトリガーされない。　
- refオブジェクトをJSXのref属性に渡すとそのDOMにアクセスできるようになる。

```js
const inputRef = useRef(null or undefinedの時は空で良い)
```

#### refの値を更新しても再レンダリングがトリガーされないを確認する。

> POINT refを使うべきタイミング
  Reactは一般的に、propsを通して親から子へ作用させる、というデータフローが原則です。
  refを使ってコンポーネントに作用を起こすことは、その原則を崩す行為なので多用は避けましょう。

refに適した使用例は以下の場合とされています。
- フォームへのフォーカス、テキストの選択、メディア（動画・音声）の再生の管理
- アニメーションの発火
- サードパーティの DOM や、React管理外のDOMの埋め込み

```js
import { useState, useRef } from "react";

const Case1 = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef();
  return (
    <div>
      <h3>ケース1</h3>
      <input type="text" value={value} ref={inputRef} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => inputRef.current.focus( )}>
        インプット要素をフォーカスする
      </button>
    </div>     
  );
};
// POINT 動画の再生・停止を制御

const Case2 = () => {
  const [playing, statePlay] = useState(false);
  const videoRef = useRef();
  return (
    <div>
      <h3>ケース2</h3>
      <video ref={videoRef} style={{ maxWidth: "100%" }}>
        <source src="./sample.mp4" />
      </video>
      <button onClick={() => {
        if(playing) {
          videoRef.current.pause();
        } else {
          videoRef.current.play();
        }
        statePlay(flag => !flag); 
        }
      }>
        { playing ? 'Stop' : 'Play' }
      </button>
    </div>
  )
}
/* POINT useRefは再レンダリングされません。
書き換え可能な情報としてコンポーネントに保持させておくことができます。
state は更新されるごとに再レンダーされますが、refオブジェクトの中身が変わっても再レンダーが走ることはありません。
*/

const createTimeStamp = () => new Date().toLocaleString();
const Case3 = () => {
  const [timeStamp, stateTimeStamp] = useState(createTimeStamp());
  const ref = useRef(createTimeStamp());

  const updateState = () => {
    stateTimeStamp(createTimeStamp());
  };

  const updateRef = () => {
    /* コンソールを見るとブラウザの表示と、ref.currentの中身が異なることを確認できます */

    ref.current = createTimeStamp();
    console.log('ref.current -> ', ref.current);
  };

  return (
    <div>
      <h3>ケース3</h3>
      <p>
        state: { timeStamp }
        <button onClick={ updateState }>更新</button>
      </p>
      <p>
        ref: { ref.current }
        <button onClick={ updateRef }>更新</button>
      </p>
    </div>
  )
}

/* POINT refを使うべきタイミング
Reactは一般的に、propsを通して親から子へ作用させる、というデータフローが原則です。
refを使ってコンポーネントに作用を起こすことは、その原則を崩す行為なので多用は避けましょう。

refに適した使用例は以下の場合とされています。
- フォームへのフォーカス、テキストの選択、メディア（動画・音声）の再生の管理
- アニメーションの発火
- サードパーティの DOM や、React管理外のDOMの埋め込み
*/
const Example = () => {
  return (
    <>
      <Case1 />
      {/* コンポーネントとして読み込む */}
      <Case2 />
      <Case3 />
    </>
  );
};
export default Example; 
```

## foward Ref
　
コンポーネントを跨いでrefをやりとりする方法について

```js
// その1
import { useRef } from "react";

const Example = () => {
  const ref = useRef();
  return (
    <>
      {/* input要素に対してref属性がついている。 */}
      {/* 別のコンポーネントに切り出した（?）時にどのようにrefを受渡するのか？ */}
      <input type="text" ref={ref} />
      <button onClick={() => ref.current.focus()}>
        インプット要素をフォーカスする
      </button>
    </>
  );
};
export default Example;

// その2
import { useRef } from "react";

// 1. コンポーネントを生成する。
// refが定義されていないと怒られるので、
const Input = () => {
  return <input type="text" ref={ref} />
}

const Example = () => {
  // 2. そもそもrefはbutton要素のクリック・イベントで使用する際に
  //   Exampleコンポーネントで定義しているの、それをInputコンポーネントへ渡す。
  //   そうすると先ほどの警告が解消される。
  const ref = useRef();
  return (
    <>
      <Input />
      <button onClick={() => ref.current.focus()}>
        インプット要素をフォーカスする
      </button>
    </>
  );
};
export default Example;


// その3
import { useRef } from "react";
// 2. こちらでpropsを受信する。
// だが、上手くいかない。
// refをpropsで受渡するのは推奨していない。
const Input = ({ ref }) => {
  return <input type="text" ref={ref} />
};

const Example = () => {
  // 1. button要素でも使っているので、refの定義はこちらに据え置き
  //    Inputコンポーネントへpropsとして渡す。
  const ref = useRef();
  return (
    <>
      <Input ref={ref} />
      <button onClick={() => ref.current.focus()}>
        インプット要素をフォーカスする
      </button>
    </>
  );
};
export default Example;


// その4-1
import { useRef } from "react";
// 2. 改名したpropsを受信する。
const Input = ({ customRef }) => {
  // 3. こちらも張り替え。
  return <input type="text" ref={customRef} />
};

const Example = () => {
  const ref = useRef();
  return (
    <>
      {/* 1. 違う名称にしてやりとりする */}
      <Input customRef={ref} />
      <button onClick={() => ref.current.focus()}>
        インプット要素をフォーカスする
      </button>
    </>
  );
};
export default Example;


// その4-2
// 1. forwardRef関数を使う。forwardRef関数をimportする。
import { useRef, forwardRef } from "react";
// Inputコンポーネントで受信するrefをforwardRef関数の引数にする。
// 渡ってきているのはInputコンポーネントのprops。
// 関数コンポーネントの引数はprops、forwardRefの場合だけ第二引数でrefを取れる。
// 引数に入れるのは、{props, ref}。
// 渡ってきたrefは、特別なやりとりをしていることを明示的にしておく。
const Input = forwardRef((props, ref) => {
    return <input type="text" ref={ref} />
});

const Example = () => {
  const ref = useRef();
  return (
    <>
      <Input ref={ref} />
      <button onClick={() => ref.current.focus()}>
        インプット要素をフォーカスする
      </button>
    </>
  );
};
export default Example;
```

## useInperativeHandle refへのアクセスを限定する方法

```js
// その1
import { useRef, forwardRef, useImperativeHandle } from "react";

/* POINT forwardRef
子コンポーネント内の DOM に直接アクセスしたいときに使います。
refは、親から子コンポーネントへprops形式で渡して参照するということができないため、
参照したい場合は子コンポーネント内でfowardRefを使用する必要があります。

useImperativeHandle
refで使えるメソッドを制限する目的で使う。
必要不可欠なハンドラー（メソッド）を使う宣言をする。
*/
const Input = forwardRef((props, ref) => {
  // 使用したいメソッドを含むオブジェクトを含む関数を定義する。
  // 書式はこう書くか、
  // useImperativeHandle(ref, () => {
  //   return {}
  // })
  useImperativeHandle(ref, () => ({
    // 2. focusメソッドを使いたいのでここへ引っ張ってくる。
    focus() {
    }
  }))
  return <input type="text" ref={ref} />;
});

const Example = () => {
  const ref = useRef();
  return (
    <>
      <Input ref={ref} />
      {/* 1. 必要不可欠なのでここのfocusメソッドを明示的に取り扱う。 */}
      <button onClick={() => ref.current.focus()}>
        インプット要素をフォーカスする
      </button>
    </>
  );
};
export default Example;


// その2
import { useRef, forwardRef, useImperativeHandle } from "react";

// 2. 親コンポーネントから渡ってきたrefと、
const Input = forwardRef((props, ref) => {

  // 3. コンポーネント内で別名でrefを初期化しておく。
  const inputRef = useRef(); 

  // 1. useImperativeHandle関数の第一引数のrefに対して、
  //    第二引数のオブジェクトに含まれる『メソッドのみ』実行できることになる。
  useImperativeHandle(ref, () => ({
    focus() {
    }
  }))
  // 2. 子コンポーネントから出力するrefを別のものにしておく。
  // return <input type="text" ref={ref} />;

  // 4. 子コンポーネントから出力するrefを別名にしておく。
  return <input type="text" ref={inputRef} />;
});

const Example = () => {
  const ref = useRef();
  return (
    <>
      <Input ref={ref} />
      <button onClick={() => ref.current.focus()}>
        インプット要素をフォーカスする
      </button>
    </>
  );
};
export default Example;


// その3
import { useRef, forwardRef, useImperativeHandle } from "react";

const Input = forwardRef((props, ref) => {
  const inputRef = useRef(); 
  // 1. 親から渡ってきたrefを第一引数に渡し、　
  useImperativeHandle(ref, () => ({
    // 2. メソッドを定義する。呼び出すメソッドの名称も独自のものに変更しておく。
    myFocus() {
      inputRef.current.focus();
      // ちゃんと別名でインスタンスを取れているか確認する。
      console.log(inputRef, '取得できているようです。')
    }
  }))
  return <input type="text" ref={inputRef} />;
});

const Example = () => {
  const ref = useRef();
  return (
    <>
      <Input ref={ref} />
      {/* 3. 独自の名称になったメソッドをここで呼ぶ。 */}
      <button onClick={() => ref.current.myFocus()}>
        インプット要素をフォーカスする
      </button>
    </>
  );
};
export default Example;
```

## 動画再生をもう一度やってみる

```js
import { useState, useRef, forwardRef, useImperativeHandle } from "react";
// 1. 親コンポーネントから渡ってくるのはplay, stopメソッド。
const Video = forwardRef(({ path }, ref) => {
  // 2. Videoコンポーネントがわで別名にする。
  const videoRef = useRef();
  // 1. play, stopメソッドを別名で動かせるようにする。
  useImperativeHandle(ref, () => ({
    // 5. 別名にしてメソッドを定義（動きを定義）
    myPlay(){
      videoRef.current.play()
    },
    myStop(){
      videoRef.current.pause()
    }
  }));

  return (
    // 3. 返す要素へvideoRefを設定する。
    <video style={{ maxWidth: "100%" }} ref={videoRef}>
      <source src={path}></source>
    </video>
  );
});

const Example = () => {
  const [playing, setPlaying] = useState(false);
  // 2. ここで定義されるrefを
  const ref = useRef();

  return (
    <div>
      <h3>練習問題</h3>
      <p>useRef、useImperativeHandle、forwardRefを使って完成系の動画再生機能を作成してください。※useImperativeHandleでplay(再生)、stop(停止)メソッドを定義すること。</p>
      <Video ref={ref} path="./sample.mp4" />
      <button
        // 6. ボタンがクリックされた時の状態は、
        onClick={() => {
          if(playing) {
            ref.current.myStop();
          } else {
            ref.current.myPlay();
          }
          setPlaying((prev) => !prev);
        }}
      >
        {playing ? "Stop" : "Play"}
      </button>
    </div>
  );
};
export default Example;
```


## 関数型プログラミング

### 関数型プログラミングとは

宣言型プログラミング　>　関数型プログラミング

上から下への制御（手続型の制御）をなるべく関数に分離（隠蔽）し、やりたいことに集中できるようにするプログラミング手法

```js
let nums = [1,2,3];
let doubleNums = nums.map(num => num * 2);
```

ループ制御: mapメソッドが担当
やりたいこと: 関数で定義（開発者が担当）

### 関数型プログラミングのキーワード

- 値の状態管理と処理を分離
  - 状態と処理は切り離す。
- 純粋関数
  - 特定の入力には特定の処理を返す。
- 普遍性
  - 一度設定した値は書換えない。

### 値の状態管理と処理を分離

関数　それぞれに定義
状態　それぞれに定義

その状態を関数に渡し渡し、数珠繋ぎに処理して結果を導く。

```
funcA(data) => funcB(data) => funcC(data) => 結果
```

### 同じことをコードで比較

```js
const Example = () => {
  // const nums = [1, 2, 3];
  // const sum = () => nums.reduce((accu, curr) => accu + curr);

  // 関数型プログラミング
  // Accumilation（蓄積）=> accu
  // current => curr
  // 状態を生成させておき、
  const nums = [1, 2, 3, 4];
  // やりたいカタチにするための関数を作る。
  const sum = (arr) => { 
    return arr.reduce((accu, curr) => accu + curr)
  };
  // 用語：accumulation 累積
  // オブジェクト指向プログラミング
  const numObj = {
    nums: [1, 2, 3, 4],
    sum() {
      const nums = this.nums;
      let sumVal = 0;
      nums.forEach(n => { sumVal += n })
      return sumVal;
    }
  };
  return (
    <>
      <h3>状態管理と処理を分離</h3>
      <p>状態（データ）と処理（やりたいこと）は切り離す</p>
      <p>{`result: ${numObj.sum()}`}</p>
      <p>{`result: ${sum(nums)}`}</p>

    </>
  );
};
export default Example;
```

##  関数型（純粋関数）

- fn(決まった引数) -> 決まった戻り値
- 関数外の状態（データ）は参照・変更しない。
- 関数外に影響を及ぼさない。
- 引数で渡された値を変更しない。
- 上記の要件を満たさない操作は「副作用」と呼ぶ。

### fn(決まった引数) -> 決まった戻り値原則

与えた引数に対して決まった戻り値が戻っており純粋関数と言える。

```js
const Example = () => {
  const val1 = 2, val2 = 10;
  const add = (val1, val2) => {
    return val1 + val2; 
  };
  return (
    <>
      <h3>関数定義からひもとく</h3>
      <h4>引数を足し算する関数を作る</h4>
      <p>純粋関数: {add(val1, val2)}</p>
    </>
  );
};
export default Example;
```

### 関数外の状態（データ）は参照・変更しないしない原則

```js
// 関数に変数を定義していないが、
// 外部の変数の値を変えると結果が変更されてしまう。
// これを純粋関数ではないという考え方をする。
// 確かにこれでは不測の事態が起きるわな。

const Example = () => {
  // val2が初期化されており、
  const val1 = 2, val2 = 10;
  // 引数にval2を取ってもないけど、値はどんどん変わってしまう。
  // 処理が引数に依存していない悪い例
  const add = (val1) => {
    return val1 + val2; 
  };
  return (
    <>
      {/* 変数val2は呼んでないし、 */}
      <p>純粋関数: {add(val1)}</p>
    </>
  );
};
export default Example;
```

### 関数外に影響を及ぼさない原則

```js
const Example = () => {
  const val1 = 2, val2 = 3;
  // 関数の外で変数を定義し、結果が関数外へ飛び出てしまったり、
  let result;
  const add = (val1) => {
    result = val1 + val2; 
    // コンソール・ログを関数外のコンソールへ送信した入りすることが、
    // 副作用と呼ばれる操作になる。
    console.log(result)
    return val1 + val2; 
  };
  return (
    <>
      <p>純粋関数: {add(val1, val2)}</p>
    </>
  );
};
export default Example;
```

### 引数で渡された値を変更しない原則

```js
const Example = () => {
  // 関数型（純粋関数）は、
  // 引数で渡された値を変更しない。
  // Immutabilityの保持という。
  const num = { val: 2 }
  const double = (num) => {
    num.val = num.val * 2;
    return num;
  }
  const newNum = double(num);
  console.log('newNum', newNum, 'num', num)
  // => newNum {val: 4} num {val: 4}
  return (
    <>
      <h3>Immutability(不変性)</h3>
      <p>引数で渡ってきたオブジェクトを変更しない！</p>
    </>
  );
};
export default Example;
```

Immutabilityを保持するためのコードだった。

```js
const double = (num) => {
  num = { ...num }
  num.val = num.val * 2;
  return num;
}
```

## Immutability

Immutableな値
- 元の値は変わらないもの。
  - 文字列、数値、BigInt、真偽値、undefined、シンボル

変数に値を代入すると値は変わる。これは、値が変わっているわけではない。変数の参照先が変わっただけのこと。値が変わったわけではない。

Mutableな値
- 元の値が変わるもの。
  - Object、Array

言葉のあややなこれは。

```js
let val = [1, 2, 3];
val.push(4)
// => [1, 2, 3, 4]
```

変数が『参照』する先は『変わらない』が、
配列の『中身』が『変わって』いる。

結局、Mutableな値をImmutableにするとは？

変数が値への参照を変更し、元の値に影響を与えないようにすることをいう。
人生で初めてめちゃわかった。


### 純粋ではない場合

```js
// 1. グローバルな範囲で変数を定義して、
let value = 0;

// 2. 子コンポーネントに変数の値に1を足す仕掛けを作り、
const Child = () => {
  value++;
  return (
    <div>{value}</div>
  )
}

// コンポーネントは純関数で定義しないといけない原則
// コンポーネントは、propsを受け取ってJSXで返す。
// だから、コンポーネント外で初期化した変数を使ってはいけない。
// 実証してみる。
const Example = () => {
  return (
    <>
    <div>{value}</div>
    {/* 子コンポーネントを刺すと意図しない挙動をする。
        1を足した値、つまり1が三つを期待しているのに。。。1 2 3 と出力してしまう。 */}
    <Child /> 
    <Child /> 
    <Child /> 
    </>
  );
};
export default Example;
```

### 純粋！
```js
let value = 0;

const Child = () => {
  value++;
  return (
    <div>{value}</div>
  )
}
// 2. 親から送信されたpropsを受診して、
const ChildPure = ({ value }) => {
  return (
    // 3. JSXで出力準備。
    <div>{value}</div>
  )
}
const Example = () => {
  // 4. 親コンポーネントのスコープの範囲内で変数を定義し直して、
  let value = 0
  return (
    <>
    <div>{value}</div>
    <Child /> 
    <Child /> 
    <Child /> 
    {/* 1. propsを設定して、 */}
    {/* 6. あとは、出力する。 */}
    <ChildPure value={++value} /> 
    <ChildPure value={++value} /> 
    <ChildPure value={++value} /> 
    </>
  );
};
export default Example;

// jsの知識
// ++value 1から始める
// value++ 0から始める
```