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