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
import List from "./component/List";
import "./Example.css";

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

JSX内での`{}`は、JSの『`式`』を埋め込むことができる。
`文`は埋め込めない。

```jsx
import "./Expression.css"
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

JSX内での`{}`は、要素の値として変数展開ができるよ。

```jsx
import "./Expression.css"
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

## 04_react_basic / 090_props

### 1

親は、子コンポーネントを読み込むときに属性と値を設定して、子コンポーネントに渡すことができる。

__parent__

```jsx
import Child from "./components/Child";
const Example = () => (
  <Child 
    changeColor = "red"
  />
);
export default Example;
```

__child__

```jsx
import "./Child.css";
// 1
const Child = (props) => {
  return (
    <>
      {/* 文字列は『式文』なのでJSXに埋め込める。 */}
      <div className={ `component` }>
        <h3>Hello Component</h3>
      </div>
      {/* JSXの中で文字列を埋め込んでいる。
      プラスJSのテンプレートリテラルを使って変数展開＋文字列の結合をしている。 */}
      <div className={ `component ${ props.changeColor }` }>
        <h3>Hello Component</h3>
      </div>
    </>
  );
};
export default Child;
```

### 2

極端だが、親が渡している属性`<Child changeColor = "red" />`
これは、`{ changeColor: "red" }`というイメージで捉え、
子コンポーネントは`引数`を`オブジェクトを分割代入`で引き受けるとするとスルッと理解できる。
オブジェクトなので、分割代入でキーを受け取って使えばコード量が減るし見通し良くなる。

__parent__

```jsx
import Child from "./components/Child";
const Example = () => (
  <>
    <Child changeColor = "" />
    <Child changeColor = "red" />
  </>
);
export default Example;
```

__child__

```jsx
const Child = ({ changeColor }) => {
  return (
    <>
      <div className={ `component ${ changeColor }` }>
        <h3>Hello Component</h3>
      </div>
    </>
  );
};
export default Child;
```

### 3, 4

__parent__
```jsx
import Child from "./components/Child";
const Example = () => (
  <>
    {/* この1行目がスッキリ普通に表現できてるね。 */}
    <Child />
    <Child changeColor = "red" />
  </>
);
export default Example;
```

__child__

### 3 引数の初期設定

```jsx
// 親で『<Child changeColor = "" />』こんな記述も気持ち悪いので、
// 引数にデフォルト値を設定する。
const Child = ({ changeColor = "green" }) => {
  return (
    <>
      <div className={ `component ${ changeColor }` }>
        <h3>Hello Component</h3>
      </div>

    </>
  );
};
export default Child;
```

### 4 引数にこのコンポーネントで使える別名を設定する

```jsx
const Child = ({ changeColor: color = "green" }) => {
  return (
    <>
      <div className={ `component ${ color }` }>
        <h3>Hello Component</h3>
      </div>

    </>
  );
};
export default Child;
```

## 04_react_basic / 110_props_children

親で埋め込まれた別の子コンポーネントを『children』として受ける。

__parent__

```jsx
import Profile from "./components/Profile";
import Container from "./components/Container";

// 1. childrenを使う
const profile = [
  { name: "Takashi", age: 19, country: "Japan", color: "green" },
  { name: "Jane", age: 28, country: "UK", color: "blue" },
];
const Example = () => {
  return (
    <div>
      {/* これは今までやってきたコンポーネントを埋め込む記述法 */}
      {/* <Container title="Childrenとは？" /> */}

      {/* 終了タグのある要素のように囲む */}
      {/* <Container>...</Container>として囲む。 */}
      {/* その中に親の別の子コンポーネントを埋め込む。 */}
      <Container title="Childrenとは？">
        <Profile { ...profile[0] } />
        <Profile { ...profile[1] } />
        <Profile />
      </Container>
    </div>
  );
};
export default Example;

// 2. childrenをchildren属性として配列にして使ってみる。
const profile = [
  { name: "Takashi", age: 19, country: "Japan", color: "green" },
  { name: "Jane", age: 28, country: "UK", color: "blue" },
];
// childrenを使う
const Example = () => {
  return (
    <div>
      <Container 
        title="Childrenを配列で展開して使う"
        // まずは、属性の引数は『JSX』だということに留意。
        // その中で配列にコンポーネントを格納する。
        children={
          [
            // 配列で展開する場合は一意のキーの情報を付与する
            <Profile key={ profile[0].name} { ...profile[0] } />,
            <Profile key={ profile[1].name} { ...profile[1] } />
          ]
        }
      />
    </div>
  );
};
export default Example;


// 3. 個別に渡す
const profile = [
  { name: "Takashi", age: 19, country: "Japan", color: "green" },
  { name: "Jane", age: 28, country: "UK", color: "blue" },
];
// propsを個別に渡す
const Example = () => {
  return (
    <div>
      <Container 
        title="propsを個別に渡す"
        {/* まずは、属性の引数は『JSX』だということに留意。 */}
        {/* その中で配列にコンポーネントを格納する。 */}
        children={
          [
            {/* 配列で展開する場合は一意のキーの情報を付与する */}
            <Profile key={ profile[0].name} { ...profile[0] } />,
            <Profile key={ profile[1].name} { ...profile[1] } />
          ]
        }
        first={ <Profile key={ profile[0].name} { ...profile[0] } /> }
        second={ <Profile key={ profile[1].name} { ...profile[1] } /> }
      />
    </div>
  );
};
export default Example;

```

__children__

#### Container

```jsx
import "./Container.css";

// 親で埋め込まれた別の子コンポーネントを『children』として受ける。
const Container = ({ title, children, first, second }) => {
  return (
    <div className="container">
      <h3>{title}</h3>
      {/* ここで分割代入された引数を受け取り展開という流れ。 */}
      {/* コンポーネントごとに色々ネタを仕込んで展開していける。便利さがやっとわかった。 */}
      <div>{ children }</div>
      <div>{ first }</div>
      <div>{ second }</div>
    </div>
  );
};

export default Container;
```

#### Profile.jsx

```jsx
import "./Profile.css";

const Profile = ({ name, age, country, color }) => {
  return (
    <div className={`profile ${color}`}>
      <h3>Name: {name}</h3>
      <p>Age: {age} </p>
      <p>From: {country}</p>
    </div>
  );
};

export default Profile;
```

## 04_react_basic / 120_props_rules

### 1. propsの流れは一方通行

#### 親
```jsx
import Bye from "./components/Bye"
import Hello from "./components/Hello"

const Example = () => {
  const name = "nobuyuki";
  return (
    <>
      <Hello name={ name } />
      <Bye name={ name } />
    </>
  );
};
export default Example;
```

#### Hello comp
```jsx
const Hello = (props) => {
  return (
    <div>
      <h3>Hello { props.name }</h3>
    </div>
  );
};
export default Hello;
```

#### Bye comp
```jsx
const Bye = (props) => {
  return (
    <div>
      <h3>Bye {props.name}</h3>
    </div>
  );
};
export default Bye;
```

### 2. propsは読み取り専用

#### 親

```jsx
const Example = () => {
  const name = "nobuyuki";
  return (
    <>
      <Hello name={ name } />
      <Bye name={ name } />
    </>
  );
};
export default Example;
```

#### Hello comp

```jsx
const Hello = (props) => {
  // // 親から継承したpropsは書き換えられない。
  // props.name = "hello";
  return (
    <div>
      <h3>Hello { props.name }</h3>
    </div>
  );
};
export default Hello;
```

### 3. propsの設定を確認する

#### 親　comp
```jsx
const Example = () => {
  const name = "nobuyuki";
  return (
    <>
      <Hello name={ name } />
      <Bye name={ name } />
    </>
  );
};
export default Example;
```

#### Hello comp

> 属性（隠し設定）を出力させるための命令

* Reflect.getOwnPropertyDescriptor([受け取った属性], "[キー]");

> コンソールに出力された値

* {value: 'nobuyuki', writable: false, enumerable: true, configurable: false}

> 設定可能かどうか、この場合はfalseということで不許可。

* configurable: false

> オブジェクトを展開できる、『for~in』のループで列挙対象になるかどうかについては可能。

* enumerable: true

> 値を上書きできるかどうか、この場合はfalseということで不許可。

* writable: false

```jsx
const Hello = (props) => {
  // props.name = "hello";
  const desc = Reflect.getOwnPropertyDescriptor(props, "name");
  console.log(desc);
  return (
    <div>
      <h3>Hello { props.name }</h3>
    </div>
  );
};
export default Hello;
```


## 04_react_basic / 130_whats_jsx

### 1. JSX => JSの関数として展開される仕組み

```jsx
import React from "react";
const Example = () => {
  const sample1 = <h1 className="greeting">Hello World</h1>;

  // JSXの参照を格納した変数を出力して中身を見る。
  console.log(sample1);

  // Babelから帰ってきた関数
  console.log(
    React.createElement("h1", { className: "greeting" }, "Hello World"));
};
export default Example;
```

* `Babel`ページの`Try it out`」で、上と同じ`JSX`を投げるとBabelがReactに渡す`関数`が見える。
* それをママ、`React`のコードからその関数を実行すると当たり前だが同じ値が返ってくる。
* `JSX` => `Babelで関数に変換` => `React`で関数が実行され`仮想DOM`が展開されるという仕組み。
* [Babelへのリンク]
  * https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=Q&debug=false&forceAllTransforms=false&modules=false&shippedProposals=false&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact&prettier=false&targets=&version=7.18.3&externalPlugins=&assumptions=%7B%7D


### 2. React要素はツリー形状でWEBページを表現する

```jsx
import React from "react";

const Example = () => {
  const sample2 = (
    <div>
      <h1>Hello!</h1>
      <h2>Good to see you.</h2>
    </div>
  );
  console.log(
    (
      <div>
        <h1>Hello!</h1>
        <h2>Good to see you.</h2>
      </div>
    )
    // ).props
  );
  // React要素はツリー形状でWEBページを表現する。
  return React.createElement(
          "div",
          null,
          React.createElement("h1", null, "Hello!"),
          React.createElement("h2", null, "Good to see you.")
  );
};
export default Example;
```

# 05_state_and_event

## 05_state_and_event / 010_eventlistener

### イベントリスナーの登録と実行

```jsx
const Example = () => {
  // 『イベント・ハンドラー』になるコールバック関数を定義する。
  const clickHanlder = () => {
    alert("ボタンがクリックされました。");
  };
  
  return (
    <>
      {/* イベント・リスナーに関数を仕込む。 */}
      {/* イベント・リスナーに関数を『渡して』、クリック・イベントを『合図に関数を実行』させる。 */}
      <button onClick={ clickHanlder }>クリックしてください</button>
      {/* 無名関数で関数を実行させる方法もある */}
      <button onClick={ () => {
        clickHanlder();
      } }>クリックしてください</button>
    </>
  );
};
export default Example;
```

### イベントリスナーで関数を実行すると何が起こるか

『イベント・ハンドラー』になるコールバック関数を定義する。

留意点は、__関数内でメソッドは順に実行されるのだが、『return』がないので戻り値はundefinedになるということ。__

これがミソで、__イベント・リスナーへ関数の実行を渡すと__、そこには __undefined__ を返ってくる。

onClickでイベントを呼び出しても返ったきた値はundefinedだから何も起こらない、という仕組みなわけだ。

```jsx
const Example = () => {
  const clickHanlder = () => {
    alert("ボタンがクリックされました。");
  };
  console.log(clickHanlder());
  
  return (
    <>
      {/* イベント・リスナーに関数を仕込む。 */}
      {/* イベント・リスナーに関数を『渡して』、クリック・イベントを『合図に関数を実行』させる。 */}
      <button onClick={ clickHanlder() }>クリックしてください</button>
      <button onClick={ () => {
        clickHanlder();
      } }>クリックしてください</button>
    </>
  );
};
export default Example;
```

## 11_hooks_p1 / 010_useState_to_useReducer

### useReducer:状態の更新の仕方も状態側で担当する

* 状態と処理の分離
  * useState: コンポーネントで更新用の処理を保持
  * useReducer: stateと一緒に更新用の処理を保持

#### キー・ワード
* 純粋性（純粋関数）
* 特定の引数に特定の戻り値
  
#### 1. クリックイベントをstateで書く

```jsx
import { useState } from "react";
const Example = () => {
  const [state, setState] = useState(0);
  const countUp = () => {
    return setState(prev => ++prev);
  };
  return (
    <>
      <h3>{ state }</h3>
      <button onClick={ countUp }>クリック</button>
    </>
  );
};
export default Example;
```

#### 2. useReducerで書き換える

* `useReducer`関数を使うと、配列の1番目に`state`が渡ってくる。
* 配列の2番目には`dispatch関数`を配置する。
* JSX内で`dispatch関数`を発火させると、『`prev => ++prev, 0`』が発動する。
* `useState`は、発火する属性にきっかけを与える関数内に処理を書くんだけれど、`useReducer`は、関数にコールバック関数で処理を書く。
```jsx
import { useReducer, useState } from "react";
const Example = () => {
  const [state, setState] = useState(0);
  const [rstate, dispatch] = useReducer(prev => ++prev, 0);
  const countUp = () => {
    return setState(prev => ++prev);
  };
  const rcountUp = () => {
    dispatch();
  };

  return (
    <>
      <div>
        <h3>{ state }</h3>
        <button onClick={ countUp }>クリック</button>
      </div>
      
      <div>
        <h3>{ rstate }</h3>
        <button onClick={ rcountUp }>クリック</button>
      </div>
    </>
  );
};
export default Example;
```

#### 3. バリエーションを作れる

```jsx
import { useReducer, useState } from "react";
const Example = () => {
  const [state, setState] = useState(0);
  // 引数のprevは、state。actionは、dispatch関数の引数が入っている。
  const [rstate, dispatch] = useReducer((prev, action) => {
    // 通常は、switch文を使う。
    switch (action) {
      case "+": return ++prev;
      case "-": return --prev;
      default: throw new Error("不明なアクションです")
    }
    // if (action === "+") {
    //   return ++prev;
    // } else if (action === "-") {
    //   return --prev;
    // }
  }, 0);
  const countUp = () => {
    return setState(prev => ++prev);
  };
  const rcountUp = () => {
    // 関数に区別がつくように引数を与えておく
    dispatch("+");
  };
  const rcountDown = () => {
    dispatch("-");
  };

  return (
    <>
      <div>
        <h3>{ state }</h3>
        <button onClick={ countUp }>クリック</button>
      </div>
      
      <div>
        <h3>{ rstate }</h3>
        <button onClick={ rcountUp }>+</button>
        <button onClick={ rcountDown }>-</button>
      </div>
    </>
  );
};
export default Example;
```

#### 4. 通常、actionはオブジェクトで定義する

```jsx
import { useReducer, useState } from "react";
const Example = () => {
  const [state, setState] = useState(0);
  const [rstate, dispatch] = useReducer((prev, { type }) => {
    switch (type) {
      case "+": return ++prev;
      case "-": return --prev;
      default: throw new Error("不明なアクションです")
    }
  }, 0);
  const countUp = () => {
    return setState(prev => ++prev);
  };
  const rcountUp = () => {
    // 関数に区別がつくように引数を与えておく
    dispatch({ type: "+"});
  };
  const rcountDown = () => {
    dispatch({ type: "-"});
  };

  return (
    <>
      <div>
        <h3>{ state }</h3>
        <button onClick={ countUp }>クリック</button>
      </div>
      
      <div>
        <h3>{ rstate }</h3>
        <button onClick={ rcountUp }>+</button>
        <button onClick={ rcountDown }>-</button>
      </div>
    </>
  );
};
export default Example;
```

#### 5. actionはオブジェクトなので複数送ることができる

```jsx
import { useReducer, useState } from "react";
const Example = () => {
  const [state, setState] = useState(0);
  const [rstate, dispatch] = useReducer((prev, { type, step }) => {
    // 忘れてはいけないこと。引数がオブジェクトだったら。。。
    // const newPrev = { ...prev }すること。
    switch (type) {
      // 挙動を変えることに成功。シンプル。すごい。
      case "+": return prev + step;
      case "-": return prev - step;
      default: throw new Error("不明なアクションです")
    }
  }, 0);
  const countUp = () => {
    return setState(prev => ++prev);
  };
  const rcountUp = () => {
    // 関数に区別がつくように引数を与えておく
    dispatch({ type: "+", step: 2});
  };
  const rcountDown = () => {
    dispatch({ type: "-", step: 10});
  };

  return (
    <>
      <div>
        <h3>{ state }</h3>
        <button onClick={ countUp }>クリック</button>
      </div>
      
      <div>
        <h3>{ rstate }</h3>
        <button onClick={ rcountUp }>+</button>
        <button onClick={ rcountDown }>-</button>
      </div>
    </>
  );
};
export default Example;
```

## 11_hooks_p1 / 025_practice_useReducer

```jsx
import { useReducer } from "react";

const CALC_OPTIONS = ["add", "minus", "divide", "multiply"];

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return { ...state, result: state.a + state.b };
    case "minus":
      return { ...state, result: state.a - state.b };
    case "divide":
      return { ...state, result: state.a / state.b };
    case "multiply":
      return { ...state, result: state.a * state.b };
    default: 
      throw new Error("不明なアクションです");
  }
};

const Example = () => {
  const initState = {
    a: 1,
    b: 2,
    result: 3,
  };

  const [state, dispatch] = useReducer(reducer, initState);

  const calculate = (e) => {
    
  };

  const numChangeHandler = (e) => {
    
  }

  return (
    <>
    <h3>練習問題</h3>
    <p>useReducerを使って完成コードと同じ機能を作成してください。</p>
      <div>
        a:
        <input
          type="number"
          name="a"
          value={state.a}
          onChange={numChangeHandler}
        />
      </div>
      <div>
        b:
        <input
          type="number"
          name="b"
          value={state.b}
          onChange={numChangeHandler}
        />
      </div>
      <select value={state.type} onChange={calculate}>
        {
          CALC_OPTIONS.map(type => {
            return (
              <option key={ type } value={ type }>{ type }</option>
            )
          })
        }
      </select>
      <h1>結果：{state.result}</h1>
    </>
  );
};

export default Example;
```

## 11_hooks_p1 / 030_useContext

```jsx
// propsのバケツリレーを解消する方法

import Child from "./components/Child";
// createContext関数を読み込み、
import { createContext } from "react";
// 渡したい値を関数に引数にして変数に紐づける。そして、exportする。
export const MyContext = createContext("hello world");

const Example = () => {
  return <Child />;
};

export default Example;
```

```jsx
import GrandChild from "./GrandChild";

const Child = () => (
  <div style={{ border: "1px solid black", padding: 10 }}>
    <h3>子コンポーネント</h3>
    <GrandChild />
  </div>
);

export default Child;
```

```jsx
// useContext関数を読み込み、
import { useContext } from "react";
// 該当のファイルから変数をimportする。
import { MyContext } from "../Example";

const GrandChild = () => {
  // 変数を引数として関数を発火させて値を取り、
  const value = useContext(MyContext);
  return (
      <div style={{ border: "1px solid black" }}>
        <h3>孫コンポーネント</h3>
        {/* 任意の場所で変数展開する。 */}
        { value }
      </div>
  );
};
export default GrandChild;
```

## 11_hooks_p1 / 040_useContext_with_state

```jsx
// 枝分かれしたコンポーネントからの状態の変更を伝搬させる方法
  // <Child />と<OtherChild />の2系統に分かれている。
  // <OtherChild />での変更発火を<Child />系統のコンポーネントで更新する方法。

  import { useState, createContext } from "react";
  import Child from "./components/Child";
  import OtherChild from "./components/OtherChild";
  // 2. createContextは、"hello"をGrandChildコンポーネントへ持っていくために使ったもの、
  //    これをstateにも紐づけて使うことになる。
  //    用途は違うが、ここでMyContextを宣言したことによって、、、
  // export const MyContext = createContext("hello");

  // 3. 今回の場合、"hello"の値まで遡ってはこないが、ややこしのと使わないので引数は取っておく。
  export const MyContext = createContext();
  
  const Example = () => {
  // 1. まずは、<OtherChild />のstateを親に持ってくる。
  const [state, setValue] = useState(0);

  return (
    <>
    {/* 2. 、、、MyContextコンポーネントを生成できる。 */}
    {/*    MyContextコンポーネントにProvaider（メソッド？ クラス？）を当ててメッセージを送信する */}
    {/*    これに属性に紐づいた値（state）を与えて枝分かれしたGrandChildとOtherChildに送る寸法 */}
    {/*    配列のまま。。。ということはこの時点で別名で送っているの？ */}
    {/*    ここのvalueで設定した値（状態）が、useContextを通して取得できることになる。 */}
    <MyContext.Provider value={[state, setValue]}>
      {/* 3. 子・孫側では、useContextを通して値を見ていくときに、枝を遡っていく、 */}
      {/*    MyContextコンポーネントに辿り着き、設定した値を参照する。 */}
      {/*    そこでも値が無ければ『export const MyContext = createContext("hello");』で設定した値をとる。 */}
      <Child />
      <OtherChild />
    </MyContext.Provider>
    </>
  );
};

export default Example;
```

```jsx
import GrandChild from "./GrandChild";
const Child = () => (
  <div style={{ border: "1px solid black", padding: 10 }}>
    <h3>子コンポーネント</h3>
    <GrandChild />
  </div>
);
export default Child;
```

```jsx
import { useContext } from "react";
import { MyContext } from "../Example";

const GrandChild = () => {
  // 分割代入でstateだけを受ける。
  const [value] = useContext(MyContext);
  return (
    <div style={{ border: "1px solid black" }}>
      <h3>孫コンポーネント</h3>
      {value}
    </div>
  );
};
export default GrandChild;
```

## 11_hooks_p1 / 050_context_file

```jsx
// // 1. ラジオ・ボタンでテーマを切り替える。
// // * 配列THEMESの内容をmapを使ってlistとして出力する。
// // * ラジオ・ボタンの『checked属性』を『真偽値』で切り替えるには『state』を使う。
// // * 切り替えは『onChange属性』を使う。
// import { useState } from "react";
// import "./Example.css";

// const Example = () => {
//   const [theme, setTheme] = useState('light')
//   const changeTheme = (e) => setTheme(e.target.value)
//   const THEMES = ['light', 'dark', 'red'];

//   return (
//     <>
//       <header className={`content-${theme}`}>
//         {
//           THEMES.map(_theme => {
//             return (
//               <label htmlFor="">
//                 <input type="radio" 
//                         key={ _theme } 
//                         value={ _theme } 
//                         checked={ theme === _theme } 
//                         onChange={ changeTheme }
//                 />  
//                 { _theme }
//               </label>
//             )
//           })
//         }
//       </header>
//       <main className={`content-${theme}`}>
//         <h1>テーマの切り替え</h1>
//       </main>
//     </>
//   );
// };

// export default Example;


// // 2. コンポーネントに切り分けていく。
// // Header, Mainコンポーネントへ切り分け。

// // stateを持ち運びさせる準備。
// // * 『<header></header>』,『<main></main>』のJSXをそれぞれのコンポーネントに移設。
// // * createContext関数を呼び出してインスタンス化する。
// // * <ThemeContext.Provider>コンポーネントを設置しvalue属性にstateを設置する。
// // * Header, MainコンポーネントをimportしてJSXへ設置する。

// import { createContext, useState } from "react";
// import Header from "./components/Header";
// import Main from "./components/Main";
// import "./Example.css";

// export const ThemeContext = createContext();

// const Example = () => {
//   const [theme, setTheme] = useState('light')

//   return (
//     <>
//       <ThemeContext.Provider value={ [theme, setTheme] }>
//         <Header />
//         <Main />
//       </ThemeContext.Provider>
//     </>
//   );
// };

// export default Example;

// 3. 
import { createContext, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { ThemeProvider } from "./context/ThemeContext";
import "./Example.css";


const Example = () => {

  return (
    <>
      {/* <ThemeContext.Provider value={ [theme, setTheme] }>
        <Header />
        <Main />
      </ThemeContext.Provider> */}
      <ThemeProvider>
        <Header />
        <Main />
      </ThemeProvider>
    </>
  );
};

export default Example;
```

#### Header.jsx

```jsx
// // 2.
// import { useContext } from "react";
// import { ThemeContext } from "../Example";

// // 1. useContext関数にExampleコンポーネントからexportされたThemeContext変数を分割代入で展開する。
// // 2. ExampleコンポーネントのonChange関数は、こちらのコンポーネントへ移設。

// const Header = () => {
//   const [theme, setTheme] = useContext(ThemeContext);
//   const changeTheme = (e) => setTheme(e.target.value)
//   const THEMES = ['light', 'dark', 'red'];

//   return (
//     <>
//       <header className={`content-${theme}`}>
//         {
//           THEMES.map(_theme => {
//             return (
//               <label htmlFor="">
//                 <input type="radio" 
//                         key={ _theme } 
//                         value={ _theme } 
//                         checked={ theme === _theme } 
//                         onChange={ changeTheme }
//                 />  
//                 { _theme }
//               </label>
//             )
//           })
//         }
//       </header>
//     </>
//   );
// };
// export default Header;

// 3.
import { useContext } from "react";
import { ThemeContext } from "../Example";

const Header = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const changeTheme = (e) => setTheme(e.target.value)
  const THEMES = ['light', 'dark', 'red'];

  return (
    <>
      <header className={`content-${theme}`}>
        {
          THEMES.map(_theme => {
            return (
              <label htmlFor="">
                <input type="radio" 
                        key={ _theme } 
                        value={ _theme } 
                        checked={ theme === _theme } 
                        onChange={ changeTheme }
                />  
                { _theme }
              </label>
            )
          })
        }
      </header>
    </>
  );
};
export default Header;
```

#### Main.jsx

```jsx
// 2.
// import { useContext } from "react";
// import { ThemeContext } from "../Example";

// // Headerコンポーネントと同じ要領で設定。

// const Main = () => {
//   const [theme] = useContext(ThemeContext);

//   return (
//       <main className={`content-${theme}`}>
//         <h1>テーマの切り替え</h1>
//       </main>
//   );
// };

// export default Main;

3.
import { useContext } from "react";
import { ThemeContext } from "../Example";

const Main = () => {
  const [theme] = useContext(ThemeContext);

  return (
      <main className={`content-${theme}`}>
        <h1>テーマの切り替え</h1>
      </main>
  );
};

export default Main;
```

#### ThemeContext.jsx

```jsx
// 3.
import { createContext, useState } from "react";

// import { useState } from 'react'
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={ [theme, setTheme] }>
      { children }
    </ThemeContext.Provider>
  );
};
```

## 11_hooks_p1 / 050_context_file

```jsx
import "./Example.css";
import Main from "./components/Main";
import Header from "./components/Header";
import { ThemeProvider } from "./context/ThemeContext";

const Example = () => {
  return (
    <ThemeProvider>
      <Header />
      <Main />
    </ThemeProvider>
  );
};

export default Example;
```

#### header

```jsx
import { useTheme } from "../context/ThemeContext"


const Header = () => {
  const [theme, setTheme] = useTheme();

  const THEMES = ["light", "dark", "red"];

  const changeTheme = (e) => setTheme(e.target.value);

  return (
    <header className={`content-${theme}`}>
      {THEMES.map((_theme) => {
        return (
          <label key={_theme}>
            <input
              type="radio"
              value={_theme}
              checked={theme === _theme}
              onChange={changeTheme}
            />
            {_theme}
          </label>
        );
      })}
    </header>
  );
};

export default Header;
```

#### main

```jsx
import { useTheme } from "../context/ThemeContext"

const Main = () => {
  const [theme] = useTheme();

  return (
    <main className={`content-${theme}`}>
      <h1>テーマの切り替え</h1>
    </main>
  );
};

export default Main;
```

#### ThemeContext.jsx

```jsx
import { useState, useContext, createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

  const [theme, setTheme] = useState("light");
  
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
```