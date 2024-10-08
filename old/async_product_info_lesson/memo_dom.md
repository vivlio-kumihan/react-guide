# 14.1.1 DOMツリー

オブジェクト形式でコンソールにDOMオブジェクト（Element, Node）の中身を表示できる。

`DOM API`を使う時には、`HTMLタグごと`の値の取得・変更を行うため、`HTMLタグ（Elememt）`以外の`Node`を操作することは稀。基本的には、`children`を使う。

__ドキュメントを探ってみる。__
```js
// const html = document.querySelector("html");
console.dir(document.children);
// HTMLCollection(1)
//   0: html
//   length: 1
console.dir(document.children[0].children);
// HTMLCollection(2)
//   0: head
//   1: body
//   length: 2

console.dir(document.childNodes);
// NodeList(2)
//   0: <!DOCTYPE html>
//   1: html
//   length: 2
```

__エレメントを探ってみる。__

```js
const target = document.querySelectorAll("h1");
console.dir(target);
// NodeList(1)
//  0: h1
//  length: 1
console.dir(target[0]); //=> h1
console.dir(target[0].textContent); //=> heading1　 
```

# 14.1.2 親子関係を表すインターフェイス

| プロパティ             | 戻り値のタイプ | 説明                                                               |
| ---------------------- | -------------- | ------------------------------------------------------------------ |
| parentElement          | Element        | 親のElementを返す。                                                |
| children               | HTML<br />Collection | 子Elementを含む配列風のオブジェクトを返す。                        |
| firstElementChild      | Element        | childrenによって取得される配列風のオブジェクトの最初の要素を返す。 |
| lastElementChild       | Element        | childrenによって取得される配列風のオブジェクトの最後の要素を返す。 |
| previousElementSibling | Element        | 自要素の兄弟関係にある一つ前の要素を返す。                         |
| nextElementSibling     | Element        | 自要素の兄弟関係にある一つ後ろの要素を返す。                       |



```html
  <div class="container">
    <!-- コメント -->
    <h1>before heading</h1>
    <p class="point">this is point pragraph</p>
    <p>this is after pragraph</p>
  </div>
```

```js
const target = document.querySelector(".container");
console.dir(target.children);
//=> HTMLCollection(3)
console.dir(target.firstElementChild);
//=> h1
console.dir(target.lastElementChild);
//=> p

const point = document.querySelector(".point");
console.dir(point.previousElementSibling.textContent);
//=> before heading
console.dir(point.nextElementSibling.textContent);
//=> this is after pragraph
```


# 14.1.4 セレクタAPIによるElementの取得

|セレクタ文字列|記述例|説明|
|---|---|---|
|[attr]|`[disavled]`<br />`<input disabled>`|属性名に一致|
|[attr="value"]|`[type="name"]`<br />`<input type="name">`|属性名の属性値に一致|
|[attr^="value"]|`[href^="https"]`<br />`<a href="https://hoge.com">`|属性名の属性値に部分一致|
|[attr$="value"]|`[href$="pdf"]`<br />`<a href="./hoge.pdf">`|属性名の属性値に部分一致|
|[attr*="value"]|`[name*="text"]`<br />`<input name="text-1">`<br />`<input name="text-2">`|属性名の属性値に部分一致|
|S1 > S2||属性名の属性値に部分一致|セレクター1に含まれる全てのセレクター2に一致
|S1 + S2||セレクター1の直後のセレクター2に一致|
|S1 ~ S2||セレクター1の兄弟要素でセレクター1よりも後方にあるセレクター2に一致|

# 14.1.5 先祖要素に遡って検索する

## closetメソッド

親とその先祖を遡って最初に一致する要素を取得する。

```html
  <dl class="this_closet">
    <div class="one">
      この前に挿入されるはず。
      <dt class="this">hello</dt>
      <dd>bye</dd>
    </div>
    <div class="two">
      <dt class="that">nob</dt>
      <dd>kaz</dd>
    </div>
  </dl>
```
```js
const ti = document.querySelector(".this");
const div = ti.closest("div");
div.prepend("発見 =>");
```

## 練習）

```html
  <div class="container">
    <h1>見出し</h1>
    <P id="idAttr" class="classAttr">
      これは段落です。<span>スパンに囲まれています。</span>
    </P>
    <p class="classAttr">これは段落です。</p>
    <input type="text" name="nameAttr" />
    <input type="password" name="pwdAttr" />
  </div>
```

### 解答 6 h1タグの兄弟要素でtype属性がpasswordの要素 

`兄弟要素`の中から`どれか`の時は、`~`をイメージできないとね。

```js
// 周りくどい回答
// const headOne = document.querySelector("h1");
// const pwd = headOne.parentElement.querySelector('[type="password"]');
// console.log(pwd);
document.querySelector("h1 ~ input[type='password']");
```

### 解答 7 id属性がidAttrの要素の子要素 

hogehoge要素の子要素 => 最初の子要素の時は、`> *`をイメージできないとね。

```js
// 惜しいけど。。。
// const idAttr = document.getElementById("idAttr");
// console.log(idAttr.firstElementChild);
document.querySelector("#idAttr > *");
// または 
document.querySelector("#idAttr").firstElementChild;
```

### 解答 8 inputタグのtype属性がtextの直後の要素

hogehoge要素の直後の時は、`+ *`をイメージできないとね。

```js
// const text = document.querySelector('[type="text"]');
// console.log(text.nextElementSibling);
document.querySelector("input[type='text'] + *");
// または 
document.querySelector("input[type='text']").nextElementSibling;
```

## 練習）

ブラウザにどのように出力されるかイメージできるようにね。

```html
    <p id="textContent"></p>
    <p id="innerHTML"></p>
```

```js
const tc = document.querySelector("#textContent");
const ih = document.querySelector("#innerHTML");

tc.textContent = "<strong>textContentとinnerHTML</strong>";
ih.innerHTML = "<strong>textContentとinnerHTML</strong>";
```

## 練習）

2秒毎に以下のように要素を移動する。

1. h1タグ内のspanタグの前に移動
1. h1タグの直後に移動
1. wrapタグの子要素の末尾に移動
1. liタグの2番目の文字の前に移動

```html
  <div class="container">
    <div id="source">Source</div>
    <section id="section">
      <div class="wrap">
        <h1 class="title">
          <span>タイトル</span>
        </h1>
        <ul class="list">
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
    </section>
  </div>
```

__間違っている考え方。__
__非同期関数の実行中に関数を作動させようとしていたこと。__

```js
const source = document.querySelector("#source");
const headOne = document.querySelector("h1");
const wrap = document.querySelector(".wrap");
const list = document.querySelector("li:nth-of-type(2)")

const execute = (source) => {
  return new Promise((resolve) => {
    console.log("hello");
    resolve(source);
  }, 2000);
};

execute(source)
  .then(elem => {
    console.log(headOne);
    headOne.prepend(elem);
  })
  .then(elem => {
    console.log(headOne);
    headOne.after(elem);
  })
  .then(elem => {
    console.log(wrap);
    wrap.append(elem);
  })
  .then(elem => {
    console.log(list);
    list.insertAdjacentElement("afterbegin", elem);
  });
```

__方針は、__
__大元でコールバック関数を実行させて引数無しでresolve()関数を呼ぶ。__

```js
const moveElem = (callback) => {
  return () => new Promise((resolve) => {
      setTimeout(() => {
        callback();
        resolve();
      }, 2000);
    });
}

const source = document.querySelector("#source");

const ans1 = moveElem(() => {
  const headOne = document.querySelector("h1");
  headOne.prepend(source);
});

const ans2 = moveElem(() => {
  const headOne = document.querySelector("h1");
  headOne.after(source);
});

const ans3 = moveElem(() => {
  const wrap = document.querySelector(".wrap");
  wrap.append(source);
});

const ans4 = moveElem(() => {
  const list = document.querySelector("li:nth-of-type(2)")
  list.insertAdjacentElement("afterbegin", source);
});

ans1()
  .then(ans2)
  .then(ans3)
  .then(ans4)
```

# 画面の取得・更新

## 14.2.1 要素内のコンテンツの取得・更新

### innerHTMlとtextContent

こういうHTMLがあり、

```html
<p id="text-content"></p>
<p id="inner-html"></p>
<p id="get-inline">
  hello, textContent and <strong>innerHTML</strong>
</p>
```

以下のようなJSの時に、結果を想像できるようにしておいて。

```js
const tc = document.getElementById("text-content");
const ih = document.getElementById("inner-html");

const str = "<strong>textContentとinnerHTML</strong>";
tc.textContent = str;
ih.innerHTML = str;
```

```js
const ws = document.getElementById("get-inline");

console.log(ws.textContent);
//=> hello, textContent and innerHTML 
console.log(ws.innerHTML);
//=> main.js:11 hello, textContent and <strong>innerHTML</strong> 
```

## 14.2.2 要素の作成

### document.createElement

```html
<p class="insert-contents">Hi, JavaScript!</p>
```

```js
// ターゲットになる要素のDOM取得
const insertContents = document.querySelector(".insert-contents");
// 新規で作成するDOM
const span = document.createElement("span");
span.textContent = "Hello, PHP!";
// ターゲットのDOMに差し込む
insertContents.append(span);
```
### innerHTML版

```html
<div class="inner-html"></div>
```
```js
// 埋め込むテンプレートリテラルを作成する。
const contents = `
  <article id="article">
    <h1 id="article__title">記事のタイトル</h1>
    <div class="article__tag-erea">
      <span>タグ：</span>
      <span>スポーツ</span>
      <span>野球</span>
      <span>阪神</span>
    </div>
    <div class="article__body">記事の本文</div>
    <div id="recommend" class="article__recommend">
      <h2>おすすめの記事</h2>
      <a href="#">他の記事</a>
    </div>
  </article>
`;

// 入れ替え容器になるDOMを生成。
// DOMに中身を入れて、側を外して中身だけ返す関数を定義する。
function htmlStrToElement(htmlStr) {
  const div = document.createElement("div");
  div.innerHTML = htmlStr;
  return div.firstElementChild;
}

// htmlStrToElement()関数の引数にテンプレートリテラルを送り
// ターゲットになる要素へ注ぐ。
const targetNewElement = htmlStrToElement(contents);
document.querySelector(".inner-html").prepend(targetNewElement);
```
### template版

__async_product_info_templateディレクトリのコードを参照__

template要素、clone関数を使って配列をリストに展開する雛形を作ってみる。

```html
<body>
  <div class="container">
    <ul id="product" class="product"></ul>
  </div>
  
  <template id="product-template">
    <li class="product__list">
      <h2 class="product__name"></h2>
      <p class="product__description"></p>
      <span class="product__price"></span>
    </li>
  </template> 
</body>
```

```js
// 商品データを配列で初期化
const products = [
  { "name": "Product 1", "description": "Description 1", "price": "$10" },
  { "name": "Product 2", "description": "Description 2", "price": "$20" },
  { "name": "Product 3", "description": "Description 3", "price": "$30" },
  { "name": "Product 4", "description": "Description 4", "price": "$40" },
  { "name": "Product 5", "description": "Description 5", "price": "$50" },
  { "name": "Product 6", "description": "Description 6", "price": "$60" },
  { "name": "Product 7", "description": "Description 7", "price": "$70" }
];

// `DOM.content`として、contentメソッドでtemplate要素の中で定義した構造をインスタンス化する。
const template = document.getElementById("product-template").content;
// ターゲットになる要素を収集
const productList = document.getElementById("product");

for (const product of products) {
  // ここでは使わないが、重要なきっかけを作ってくれた関数『importNode』
  // テンプレートの内容を別のドキュメントにインポートするためのメソッド
  // const clone = document.importNode(template, true);
  // template要素を複製したインスタンスを生成する。
  const clone = template.cloneNode(true);
  // インスタンスに対して構造の上から順に要素に対して値を設定していく。
  clone.querySelector(".product__name").textContent = product.name;
  clone.querySelector(".product__description").textContent = product.description;
  clone.querySelector(".product__price").textContent = product.price;
  // 設定し終わったらtemplate要素は必要ないので中身だ毛を本文の該当箇所へ配置する。
  productList.appendChild(clone);
}
```

## 14.2.3 要素の追加・削除

### タスク・キューにタスクが登録される
![要素を追加するメソッド](./assets/img/methods_to_add_elements.jpg" 要素を追加するメソッド")
getAttribute関連まとめる
add, remove, toggle, containsをまとめる

# 練習問題

```js
const me = document.querySelector("#me");
console.log(me.children);
console.log(me.firstElementChild);
console.log(me.lastElementChild);
console.log(me.nextElementSibling);
console.log(me.previousElementSibling);
console.log(me.previousElementSibling);
console.log(me.parentElement);
console.log(me.nextElementSibling.firstElementChild);
console.log(me.previousElementSibling.lastElementChild);

const mainTitle = document.querySelector("#main-title");
mainTitle.textContent = "タイトル";

const subTitle = document.querySelector(".sub-title");
subTitle.innerHTML = "<strong>サブタイトル</strong>"

const childrenElems = document.querySelectorAll(".child");
const orderThree = document.querySelector(".order-3");

for(const child of childrenElems) {
  if (child.classList.contains("order-1")) {
    orderThree.after(child);
  } else if (child.classList.contains("order-2")) {
    const clone = child.cloneNode(true);
    me.prepend(clone);
  }
  child.style.color = child.dataset.color;
}

const meRect = me.getBoundingClientRect();
const commentBody = document.querySelector("#comment-body");
commentBody.prepend(`
  #meのborderの上端とHTMLの上端の間隔は、${ me.offsetTop }pxです。
  #meのborderの左端とHTMLの左端の間隔は、${ me.offsetLeft }pxです。
  ビュー・ポートの上端から#meの枠線の上端までの間隔は、${ meRect.y }pxです。
  ビュー・ポートの左端から#meの枠線の左端までの間隔は、${ meRect.x }pxです。
  #meのborderを含めた横幅は、${ me.offsetWidth }pxです。
  #meのborderを含めた高さは、${ me.offsetHeight }pxです。
`)
```


