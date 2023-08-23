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

  // `onClick`に対してコールバック関数`=()`を定義
  // これをイベントハンドラーという。
  // `onClick`というイベントのリスナーを
  // `clickHandler`という名称で作成し登録する（引数にとる）。

  // コールバック関数でやりがちなこと。
  // - クリックしたら`clickHandler`というイベントハンドラーを呼ぶという意味。
  // - クリックイベントの中に`clickHandler`関数が入っているので、クリックするしないに関わらずとりあえず関数実行するわという意味。
  // `clickHandler` => `clickHandler`という名前の関数
  // `clickHandler()` => `clickHandler`関数を実行する
  // この違いを理解する。

  // `<button onClick={ clickHandler() }>Click</button>`
  // `JSX`が書かれた地点で関数を実行するという意味。
  // イベントハンドラーには、関数の戻り値が設定される。
  // 何が返されるか？
  // ```js
  //   const clickHandler = () => {
  //      alert("on click button")
  //   }
  // ```
  //  この関数には`return`が書かれていないから、
  // `console.log(clickHandler())` => `undefined`

  const clickHandler = () => {
    alert("on click button")
  }
  
  return (
    <>
    <button onClick={ clickHandler }>Click</button>
    <button onClick={ clickHandler }>Click</button>
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
  // 1. 初期化していない変数を設定
  let tmpVal
  return (
    <>
      <input type="text"
        // 2. イベントにイベントリスナー設定
        onChange={(e) => {
          // 3. 入力というイベントが起こったらその入力値を変数に代入させる。
          tmpVal = e.target.value
        }}
      // 4. ここで値を貼り付けられたらいいのだができない。
      //    それは、イベントを駆動させると`Example`propsを再度実行する仕様だから。
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

```js
import { useState } from "react"
import "./Example.css"

// イベントごとに関数の引数に何が必要かが異なる。
// それはそうだ、イベントごとに何を引数にとり、どのように動作させるかを定義しているのだから。
// - onChangeは、e.target.valueをとる。
// - onClickは、クリックした回数（数値）をどうするのか（式）をとる。
// - 複数の作成に対応。変数・関数とも変更すれば解決。

const Example = () => {
  // コンポーネントの最上位の位置でしか呼ぶことができない。
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
      <p>現在のカウント数: { count }</p>
      <button onClick={ countUp }>Button Up</button>
      <button onClick={ countDown }>Button Down</button>
    </>
  )
};

export default Example;
```

詳細説明

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

- 現在の関数コンポーネント`Example`は、オブジェクトを持っている。
- そのオブジェクトを変更可能にするために状態を保持する。
- オブジェクトの値をJSXで表現する。

```js
import { useState } from "react";

const Example = () => {
  const personObj = { name: "Tom", age: 18 };
  const [person, sttPerson] = useState(personObj)
  return (
    <>
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
  const [person, sttPerson] = useState(personObj)
  const changeName = (e) => {
    sttPerson({ name: e.target.value, age: person.age })
  }
  const changeAge = (e) => {
    sttPerson({ name: person.name, age: e.target.value })
  }
  return (
    <>
      <h3>Name: { person.name }</h3>
      <h3>Age: { person.age }</h3>
      <input type="text" value={ person.name } onChange={ changeName } />
      <input type="number" value={ person.age } onChange={ changeAge } />
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
