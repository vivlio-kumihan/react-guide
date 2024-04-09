# 商品情報を表示させる

> テーマ：商品情報をリスト形式で表現する。

* テンプレート要素を使う。
* 商品情報とテンプレートを別ファイルにして管理する。

## 初期状態編

### index.html

```html
<ul id="product"></ul>

<template id="product-template">
  <li class="product__list">
    <h2 class="product__name"></h2>
    <p class="product__description"></p>
    <span class="product__price"></span>
  </li>
</template>
```

### main.js

```js
const products = [
  { "name": "Product 1", "description": "Description 1", "price": "$10" },
  { "name": "Product 2", "description": "Description 2", "price": "$20" },
  { "name": "Product 3", "description": "Description 3", "price": "$30" },
  { "name": "Product 4", "description": "Description 4", "price": "$40" },
  { "name": "Product 5", "description": "Description 5", "price": "$50" },
  { "name": "Product 6", "description": "Description 6", "price": "$60" },
  { "name": "Product 7", "description": "Description 7", "price": "$70" }
];

// `インスタンス.content`でtemplate要素の中で定義した構造をインスタンス化する。
const template = document.getElementById("product-template").content;
const productList = document.getElementById("product");

products.forEach(product => {
  // テンプレートの内容を別のドキュメントにインポートするためのメソッド
  // const clone = document.importNode(template, true);
  const clone = template.cloneNode(true);
  clone.querySelector(".product__name").textContent = product.name;
  clone.querySelector(".product__description").textContent = product.description;
  clone.querySelector(".product__price").textContent = product.price;
  productList.appendChild(clone);
})
```

## 非同期関数を使う　Promise編

### index.html

```html
<body>
  <ul id="product"></ul>
</body>
```

### template.html

```html
<body>
  <template id="product-template">
    <li class="product__list">
      <h2 class="product__name"></h2>
      <p class="product__description"></p>
      <span class="product__price"></span>
    </li>
  </template>
</body>
```

### products.json

```json
[
  { "name": "Product 1", "description": "Description 1", "price": "$10" },
  { "name": "Product 2", "description": "Description 2", "price": "$20" },
  { "name": "Product 3", "description": "Description 3", "price": "$30" },
  { "name": "Product 4", "description": "Description 4", "price": "$40" },
  { "name": "Product 5", "description": "Description 5", "price": "$50" },
  { "name": "Product 6", "description": "Description 6", "price": "$60" },
  { "name": "Product 7", "description": "Description 7", "price": "$70" }
]
```

### main.js

```js
// テンプレート（template.html）をロードする
fetch('template.html')
  .then(response => response.text())
  .then(text => {
    // この2行は外部ファイルをDOMとして扱えるようにインスタンス化する構文。
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');

    // 『インスタンス.content』で『template要素』の中で定義した構造を『インスタンス化』する。
    const template = doc.getElementById('product-template').content;

    // 商品データ（products.json）をロードする
    fetch('products.json')
      // このthenメソッドを経ることで、
      .then(response => response.json())
      // productsへ、products.jsonの中で定義している配列が格納されるんだね。
      .then(products => {
        // 結果を収めるべき要素を抽出して、
        // このthen()関数の最終行にて、appendChild()関数でコンテンツをDOMに追加する仕組み。
        const productList = document.getElementById('product-list');
        // 商品データを使ってコンテンツを生成
        products.forEach(product => {
          // テンプレートの内容をクローン
          // テンプレートを外部ファイルにしているから使えるimportNode()関数。
          const clone = document.importNode(template, true);
            
          // クローンにデータを埋め込む
          clone.querySelector('.product__name').textContent = product.name;
          clone.querySelector('.product__description').textContent = product.description;
          clone.querySelector('.product__price').textContent = product.price;
            
          // コンテンツをDOMに追加
          productList.appendChild(clone);
        });
      })
      .catch(error => console.error('Error loading products:', error));
  })
  .catch(error => console.error('Error loading template:', error));
```

## 非同期関数を使う　async, await編

```js
async function loadTemplate() {
  // これがHTMLファイルの取り方
  // （目的はtemplate要素の一群を取り込むため）
  const response = await fetch('template.html');
  const text = await response.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(text, 'text/html');
  // docには、template.htmlのheader,bodyまで全部入りのHTMLが入る。
  // このDOMの統括する要素をとり、それに対してcontentメソッドを送ると
  // #document fragmentという目印が付いて『文書の断片』が取れる。
  return doc.getElementById('product-template').content;
}

async function loadProducts() {
  // これがJSONの取り方
  const response = await fetch('products.json');
  // ステータスがfulfilledでファイルに設定している値を格納している
  // Promiseインスタンスを返す。
  return response.json();
}

async function main() {
  try {
    const template = await loadTemplate();
    const products = await loadProducts();
    const productList = document.getElementById('product');

    products.forEach(product => {
      const clone = document.importNode(template, true);
      clone.querySelector('.product__name').textContent = product.name;
      clone.querySelector('.product__description').textContent = product.description;
      clone.querySelector('.product__price').textContent = product.price;
      productList.appendChild(clone);
    });
  } catch (error) {
    console.error('Error:', error);
  } finally {
    console.log("処理は終了しました。");
  }
}
// main関数を発火
main();
```