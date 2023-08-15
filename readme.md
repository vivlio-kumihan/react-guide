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
