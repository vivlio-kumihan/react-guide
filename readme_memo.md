# 04_react_basic

## 04_react_basic / 01_run_react

### ブラウザでReactを表現する方法

```jsx
<!DOCTYPE html>
<html>
<head>
  <script src="../../../../libs/react.development.js"></script>
  <script src="../../../../libs/react-dom.development.js"></script>
  <script src="../../../../libs/babel-standalone.js"></script>
</head>
<body>
  <!-- マウント先 -->
  <div id="app"></div>
  <!-- ブラウザでReactを表現する方法 -->
  <script type="text/babel">
    const appEl = document.querySelector("#app");
    const root = ReactDOM.createRoot(appEl);
    root.render(<h1>hello</h1>);
  </script>
</body>
</html>
```

## 04_react_basic / 02_component

```jsx
<body>
  <div id="app"></div>
  <script type="text/babel">
    const appEl = document.querySelector("#app");
    const root = ReactDOM.createRoot(appEl);

    // POINT コンポーネントの先頭は大文字とする
    // POINT {} アロー関数の波括弧は、関数の本文を入れるところです。
    // POINT return の1行だけなので{}を取り去ることができる。
    // POINT JSXが複数行の時は()で括る。何かのまとまりを括るところです。
    const Example = () => (
      <div>
        <h1>Hello Components</h1>
      </div>
    );

    // returnで改行するとそこで命令は終わったことになる。
    // `return undefined;`と同じ。
    const a = () => {
      return
      ("戻り値");
    };

    console.log(a());

    root.render(<Example />);
  </script>
</body>
```

## 04_react_basic / 03_vite_react_template

### プロジェクトの作成方法

[Vite](https://ja.vitejs.dev/) というモジュールバンドラーを使ったプロジェクトの作成

[vitejs-plugin-react](https://ja.vitejs.dev/plugins/#vitejs-plugin-react):esbuild と Babel を使用した従来の Vite + React の組み合わせ
[vitejs-plugin-react-swc](https://ja.vitejs.dev/plugins/#vitejs-plugin-react-swc)Babel の代わりに Verce 社が開発した swc を使用した次世代の Vite + React の組み合わせ

```bash
npm create vite@latest my-react-app -- --template react
npm create vite@latest my-react-app -- --template react-swc
```

### ディレクトリを増やす（アプリのサンプルを新たに作成する）

App.jsxの`lecId={lecId}`に紐づいている。

```jsx
<div className="App-start">
  <h2>練習コード（start）</h2>
  // このlecId={lecId}に紐づいている。
  <DynamicLoader lecId={lecId} folder={"start"} />
</div>
<div className="App-end">
  <h2>完成コード（end）</h2>
  // このlecId={lecId}に紐づいている。
  <DynamicLoader lecId={lecId} folder={"end"} />
</div>
```

増やしたいディレクトリ（アプリ）を他のディレクトリと同じフォルダ・ファイル構成にしてリネーム。

`lectures.js`ファイルの`lectures`配列に作成したディレクトリ名を追加する。

```jsx
/**
 * レクチャーID（フォルダ名）を追加
 */
const lectures = [
  "050_project_sample",
  "060_styling",
  "070_component_nest",
  "073_practice_component",
  "075_fragment",
  "080_expr_in_jsx",
  "085_expr_and_state",
  "087_practice_expr",
  "090_props",
  "100_practice_props",
  "110_props_children",
  "120_props_rules",
  "130_whats_jsx",
  "140_react_element_component",
  "150_memo",
];
```

## 04_react_basic / 060_styling

`import` でスタイルを取り込む。

```jsx
import "./Example.css";

const Example = () => {
  return (
    <div>
      <div className="component">
        <h3>Hello Component</h3>
      </div>
    </div>
  );
};

export default Example;
```

スタイリングは、何もしないとグローバル。（当たり前）
App.jsxのコードにあるように、CSSが適用される範囲を限定する。

```html
<div className="App-start">
  <h2>練習コード（start）</h2>
  <DynamicLoader lecId={lecId} folder={"start"} />
</div>
```

```css
.App-start .component {
  padding: 1rem;
  color: blue;
  border: 5px solid blue;
}
```

## 04_react_basic / 070_component_nest

### リスト要素をコンポーネントで管理する

リストをコンポーネントで管理する。
`component`ディレクトリを作成しその中へ`List`コンポーネントを配置する。
親からは`import`で呼び出し。

__Example.jsx__

```jsx
import "./Example.css";
import "./component/List";
import List from "./component/List";

const Example = () => {
  return (
    <div className="component">
      <h3>Hello Component</h3>
      <List />
    </div>
  );
};

export default Example;
```

__List.jsx__

```jsx
const List = () => {
  return (
    <ul>
      <li>imte-1</li>
      <li>imte-2</li>
      <li>imte-3</li>
      <li>imte-4</li>
      <li>imte-5</li>
    </ul>
  );
};

export default List;
```

## 04_react_basic / 075_fragment

__親コンポーネント__

```jsx
import Child from "./components/Child";

const Example = () => <Child />;

export default Example;
```

__子コンポーネント ケース1__

```jsx
// case1:　
// <React.Fragment</React.Fragment>
import React from "react";

const Child = () => {
  return (
    <React.Fragment>
      <div className="component">
        <h3>Hello Component</h3>
      </div>
      <h3>Hello Fragment</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur...
      </p>
    </React.Fragment>
  );
};

export default Child;
```

__子コンポーネント ケース2__

__冒頭、`import { Fragment } from "react";`の`{ Fragment }`について__

オブジェクトの __分割代入__ の原理です。
reactオブジェクトの`キー`で`Fragment`を呼び出している。

```jsx
// case2: <Fragment></Fragment>
import { Fragment } from "react";

const Child = () => {
  return (
    <Fragment>
      <div className="component">
        <h3>Hello Component</h3>
      </div>
      <h3>Hello Fragment</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur...
      </p>
    </Fragment>
  );
};

export default Child;
```
__子コンポーネント ケース3__

```jsx
// case3: <></>
// nothing

const Child = () => {
  return (
    <>
      <div className="component">
        <h3>Hello Component</h3>
      </div>
      <h3>Hello Fragment</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur...
      </p>
    </>
  );
};

export default Child;
```

## 04_react_basic / 080_expr_in_jsx

```jsx
const Expression = () => {
  return (
    <>
      <h3>このH3要素に見えるものは、JSXです。</h3>
      <p>最初は馴染みにくい書き方だけど便利は便利だ。</p>
    </>
  );
};

export default Expression;
```

### 1. 文字列を変数にしてJSX内で表す

```jsx
import "./Expression.css"
// JSX内での`{}`は、JSの『`式`』を埋め込むことができる。
// `文`は埋め込めない。
const Expression = () => {
  // 変数をJSX内で展開する。${ var } じゃないよ！
  const title = "このH3要素に見えるものは、JSXです。";
  return (
    <>
    <div className="expression">
      <h3>{ title }</h3>
      <p>最初は馴染みにくい書き方だけど便利は便利だ。</p>
    </div>
    </>
  );
};
```

### 2. 変数にメソッドを当てることもできる

```jsx
import "./Expression.css"
// JSX内での`{}`は、要素の値として変数展開ができるよ。
const Expression = () => {
  // 先頭大文字で値を仕込んでおいて。。。
  const titleClass = "Expression";
  const title = "このH3要素に見えるものは、JSXです。";
  return (
    <>
      {/* 変数にメソッドを当てることができる。 */}
      <div className={ titleClass.toLowerCase() }>
        <h3>{ title }</h3>
        <p>最初は馴染みにくい書き方だけど便利は便利だ。</p>
      </div>
    </>
  );
};

export default Expression;
```

### 3. 配列を表現するには工夫が必要

```jsx
import "./Expression.css"
// JSX内で『文』であるforなどは使えないので、外で変数に格納してから持っていく。
// 配列やオブジェクトを展開させるやり方はmustで覚えないとダメだよ。
const Expression = () => {
  const array = ["item1", "item2", "item3", "item4", "item5"]
  const listItem = array.reduce((acc, item) => {
    return acc.concat(<li key={item}>{item}</li>);
  }, []);
  const titleClass = "Expression";
  const title = "このH3要素に見えるものは、JSXです。";
  return (
    <>
      <div className={ titleClass.toLowerCase() }>
        <h3>{ title }</h3>
        <p>最初は馴染みにくい書き方だけど便利は便利だ。</p>
        <ul>
          <li>{ listItem }</li>
        </ul>
      </div>
    </>
  );
};

export default Expression;
```

### 4. JSX内で関数も表現できる

```jsx
import "./Expression.css"
const Expression = () => {
  // JSX内での`{}`は、『関数』埋め込める。
  const greet = (name) => {
    return `Hello, Hello ${ name }!`;
  };
  const array = ["item1", "item2", "item3", "item4", "item5"]
  const listItem = array.reduce((acc, item) => {
    return acc.concat(<li key={item}>{item}</li>);
  }, []);
  const titleClass = "Expression";
  const title = "このH3要素に見えるものは、JSXです。";
  return (
    <>
      <div className={ titleClass.toLowerCase() }>
        <h3>{ title }</h3>
        <p>最初は馴染みにくい書き方だけど便利は便利だ。</p>
        <ul>
          <li>{ listItem }</li>
        </ul>
        <h3>{ greet("Takahiro") }</h3>
      </div>
    </>
  );
};

export default Expression;
```

### 5. JSX自体が式

```jsx
import "./Expression.css"
const Expression = () => {
  // JSX自身も式なんだ。これが不思議。
  // コンポーネント定義の中では、`<h3>JSX自身も式</h3>`これもJSX 。
  const jsx = <h3>JSX自身も式</h3>;
  const greet = (name) => {
    return `Hello, Hello ${ name }!`;
  };
  const array = ["item1", "item2", "item3", "item4", "item5"]
  const listItem = array.reduce((acc, item) => {
    return acc.concat(<li key={item}>{item}</li>);
  }, []);
  const titleClass = "Expression";
  const title = "このH3要素に見えるものは、JSXです。";
  return (
    <>
      <div className={ titleClass.toLowerCase() }>
        <h3>{ title }</h3>
        <p>最初は馴染みにくい書き方だけど便利は便利だ。</p>
        <ul>
          <li>{ listItem }</li>
        </ul>
        <h3>{ greet("Takahiro") }</h3>
        {/* こんなこともできるし、、、 */}
        { <h3>JSX自身も式</h3> }
        {/* 当たり前に変数展開するわけ */}
        { jsx }
      </div>
    </>
  );
};

export default Expression;
```

## 04_react_basic / 080_expr_in_jsx

