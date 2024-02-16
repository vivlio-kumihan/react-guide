# プロジェクトの作成方法
npx create-react-app {プロジェクト名}

# create-react-appドキュメント
npm docs create-react-app

# その他
[Vite](https://ja.vitejs.dev/) というモジュールバンドラーを使ったプロジェクトの作成

```bash
npm create vite@latest
```

選択肢として

### ESmoduleの名前付きエクスポート

複数の関数や変数を格納して親コンポーネントに渡したい場合に使える。

親コンポーネント
```js
import { ListOne, ListTwo, str } from "./List";from "./List";

const Parent = () => {
  <ListOne />
  <ListTwo />
  <h3>{str}</h3>
  ...
};

export default Parent;
```

ESmodule
```js
const ListOne = () => {
  return (
    <ul>
      <li>item-1</li>
      ...
    </ul>
  );
};

const ListTwo = () => {
  return (
    <ul>
      <li>item-1</li>
      ...
    </ul>
  );
};

const str = "hello, react";

export { ListOne, ListTwo, str };
```

# JSX

JSXは、JavaScriptの式を評価して画面に表示させるもの。
変数・オブジェクト・関数に対して、{}を使いJSXに埋め込むことができる。
埋め込めるのは『式』
JSXの属性の値に対して変数を埋め込むこともできる。

```js
import "./Expression.css";

const Expression = () => {
  // 変数を埋め込む
  const title = "Expression";
  // オブジェクトを埋め込む
  const listItem = ["item01", "item02", "item03"];
  // 関数を埋め込む
  const message = (arg) => `Hello ${ arg }!`;

  return (
    <div className={title.toLowerCase()}>
      <h3>Hello {title}</h3>
      <ul>
        {
          listItem.map((item, idx) => <li key={idx}>{item}</li>)
        }
      </ul>
      <h3>{message("takahiro")}</h3>
    </div>
  );
};

export default Expression;
```

# 式と文
* 式 => 何らかの値を返すもの === 変数に代入できるものが『式』
* 文 => 変数宣言・for文・if文・switch文