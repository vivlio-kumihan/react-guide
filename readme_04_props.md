# 240116

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

# Props

## 例　その1
親コンポーネント
```js
import Child from "./components/Child";

const Example = () => {
  return (
    <>
      <Child color="red" second="最初" third="中盤" lastName="髙廣" firstName="信之"  />
      <Child />
    </>
  );
};

export default Example;
```

子コンポーネント
```js
import "./Child.css";

const Child = ({ color: df = "green", second, third, ...rest }) => {
  console.log(second);
  console.log(third);
  console.log(rest);
  return (
    <div className={`component ${df}`}>
      <h3>Hello Component</h3>
    </div>
  );
};

export default Child;
```

### この例からpropsで出来ることを理解する

* `const Child = (props) => {...};`として親コンポーネントで設定した`属性とその値`を`スプレッド演算子`を使ってまとめて`引き取る`ことができる。
* propsを前提として、これを`分割代入`することで、`属性名をキー`として`値`を受け取ることができる。
* 属性の`初期値`を設定することができる。
* 属性は`別名`を作ることができる。
* 分割代入 その1　残りを全部`{...propsName}`

## 例　その2

色々なデータをpropsに渡して送る・受け取る。
`スプレッド演算子`を使って`属性をまとめて`送っている。

``` js
import Child from "./components/Child";

const Example = () => {
  // 数値
  const num = 123;
  // 関数
  const greet = (name) => `hello ${name}!`;
  // オブジェクト　その1
  const obj = {
    name: "takahiro",
    age: 58
  };
  // オブジェクト　その1
  const otherObj = {
    pid: 12345,
    price: 5000
  };

  return (
    <>
      <Child 
        {/* 数値 */}
        num={num}

        {/* 関数 */}
        greet={greet}

        {/* 真偽値 */}
        bool

        {/* オブジェクト その1 */}
        {/* obj={{myName: "takahiro", age: 58}} */}
        obj={obj}

        {/* オブジェクト その2 */} 
        {/* pid={otherObj.pid} */}
        {/* price={otherObj.price} */}

        {/* スプレッド演算子でオブジェクトの属性をまとめて渡している。 */}
        {...otherObj}
      />
    </>
  );
};

export default Example;
```

```js
import "./Child.css";

const Child = ({
    color: df = "green",
    num,   //=> 数値
    greet, //=> 関数
    bool,  //=> 真偽値
    obj,   //=> 数値
    pid,   //=> 数値
    price  //=> 数値
  }) => {
  return (
    <div className={`component ${df}`}>
      <h3>Hello Component</h3>
      {/* 数値 */}
      <h3>{num}</h3>

      {/* 関数 */}
      <h3>{greet("Takahiro")}</h3>

      {/* 真偽値 */}
      <h3>{bool ? "True" : "False"}</h3>

      {/* オブジェクト その1 */}
      <h3>{obj.myName}</h3>
      <h3>{obj.age}</h3>

      {/* オブジェクト その2 */} 
      <h3>{pid}</h3>
      <h3>{price}</h3>
    </div>
  );
};

export default Child;
```

### この例からpropsで出来ることを理解する

* 分割代入 その2　オブジェクトの受け渡し
* 真偽値の受け渡しの本番はStateまで待つ

## 例　その3

『props』を渡す
* `props`は`オブジェクト`を渡す。
* 子コンポーネントの引数に`オブジェクト`を渡す。
  * `const ChildComp = (props) => {...};`
* オブジェクトを属性名で渡すこともできる。その際、受け取り側で`{ }`で囲み属性名を列記する。
* オブジェクトを`分割代入`して`渡す`こともできる。その際、受け取り側で`{ }`で囲み属性名を列記する。
  * `const ChildComp = ({ propertyName, propertyName, ... }) => {...};`

親コンポーネント

```js
import Child from "./components/Child";

const Example = () => {
  const num = 123;
  const greet = (name) => `hello ${name}!`;
  const obj = {
    name: "takahiro",
    age: 58
  };
  const otherObj = {
    pid: 12345,
    price: 5000
  };

  return (
    <>
      <Child 
        num={num}
        greet={greet}
        bool
        obj={obj}
        {...otherObj}
      />
    </>
  );
};

export default Example;
```

子コンポーネント

```js
import "./Child.css";

const Child = (props) => {
  console.log(props);
  return (
    <div className="component">
      <h3>Hello Component</h3>
      <h3>{props.num}</h3>
      <h3>{props.greet("Takahiro")}</h3>
      <h3>{props.bool ? "True" : "False"}</h3>
      <h3>{props.obj.myName}</h3>
      <h3>{props.obj.age}</h3>
      <h3>{props.pid}</h3>
      <h3>{props.price}</h3>
    </div>
  );
};

export default Child;
```

# 考え方

コードを見るときの意識づけを意図した問題。

* オブジェクトの属性を渡す。
* 分割代入でまとめて渡す。
* まずは、デフォルト変数があるかを意識してみる。
  
```js
import Profile from "./components/Profile";

// データを渡すときの形。
// 配列にオブジェクトを入れるやり方。
const profile = [
  { name: "Takashi", age: 19, country: "Japan" },
  { name: "Jane", age: 28, country: "UK" },
];

const Example = () => {
  return (
    <div>
      {/* 通常のpropsの渡し方 */}
      <Profile
        name={profile[0].name}
        age={profile[0].age}
        country={profile[0].country}
      />
      {/* 分割代入する渡し方 */}
      <Profile {...profile[1]} />
      {/* デフォルト変数で表示させるやり方 */}
      <Profile />
    </div>
  );
};

export default Example;
```

```js
import "./Profile.css";

const Profile = ({ name = "John Doe", age = "??", country = "Japan" }) => {
  return (
    <div className="profile">
      <h3>Name: {name}</h3>
      <h3>Age: {age}</h3>
      <h3>From: {country}</h3>
    </div>
  );
};

export default Profile;
```

## propsのchildren

親コンポーネントから子コンポーネントへ`値`を渡す方法の一つ。

### その1

* JSXの中に`閉じタグ`を付けて子コンポーネントを記述する。
* その中へ値を`{}`で囲んで`props`として渡す。
* 子コンポーネントではそれを`chirdren`として受け取り、JSX内で展開する。

子コンポーネント`Continer`に閉じタグを付ける。『hello』という文字列を`{}`で囲みpropsで渡す。

```js
import Container from "./components/Container";

const Example = () => {
  return (
    <div>
      <Container title="Childrenを使ってみる">
        {"hello"}
      </Container>
    </div>
  );
};
export default Example;
```

子コンポーネント

* 引数に変数を`childre`として入れる
* 展開できる！

```js
const Container = ({ title, children }) => {
  return (
    <div className="container">
      <h3>{title}</h3>
      <h2>say {children}</h2>
    </div>
  );
};
export default Container;
```

### その2

#### 親コンポーネント

* __親コンポーネントで子孫の継承関係を一括で設定することができる。__
* 子コンポーネントの`Container`へ孫コンポーネントとして`Profile`を渡す。
* 親コンポーネントで設定した『`値`（例えば商品リストなど）』===『`配列`の値』を渡したい場合には`変数展開`を利用する。
* これ重要。商品リストなどの情報はできるだけ上流で格納しないといけない。
* 親コンポーネントから孫コンポーネントへprops経由で情報を渡せている。`商品リストなどの情報`をプログラムで`やりとりする際のヒント`がここにある。
  
```js
import Profile from "./components/Profile";
import Container from "./components/Container";

const profile = [
  { name: "Takashi", age: 19, country: "Japan", color: "green" },
  { name: "Jane", age: 28, country: "UK", color: "red" },
];

const Example = () => {
  return (
    <div>
      <Container title="Childrenを使ってみる">
        {/* 設定した属性を渡したい場合には『変数展開』を利用して渡す */}
        <Profile {...profile[0]} />
        <Profile {...profile[1]} />
      </Container>
    </div>
  );
};

export default Example;
```

#### 子コンポーネント Container

ここでは`レイアウト`をしているだけと言いつつ細かい指定はできない。
親コンポーネントで仕込んだ孫コンポーネントがまとめてやってくるのを`children`で一括して受け取る。

このコードを見るだけでは何が渡ってきているのかはわからない。
このコンポーネントはレイアウト専従として親コンポーネントで設計されている。

```js
import "./Container.css";

const Container = ({ title, children }) => {
  return (
    <div className="container">
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default Container;
```

#### 孫コンポーネント

渡ってきた`propsを展開`させるための`型`または`部品`
propsで渡ってきた値は、このフォーマットに従ってが展開される。
```js
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

### その3　childrenからの発展

#### コンポーネントを配列で渡す

コンポーネントも`オブジェクト`なので、孫コンポーネントをpropsの配列として渡すことができることを確認する。

`children属性（props）`にコンポーネントを配列に格納して渡す。
なお、配列で渡す場合は、それぞれの値に対して`key`が必要。

```jsx
import Profile from "./components/Profile";
import Container from "./components/Container";

const profile = [
  { name: "Takashi", age: 19, country: "Japan" },
  { name: "Jane", age: 28, country: "UK", color: "red" },
];

const Example = () => {
  return (
    <div>
      <Container title="属性の値（配列）として渡す"
        children={
          [
            <Profile key={profile[0].name} {...profile[0]} />,
            <Profile key={profile[1].name} {...profile[1]} />
          ]
        }
      />
    </div>
  );
};

export default Example;
```

#### コンポーネントを個別に渡す

任意の属性を作って個別に渡すことができる。

```jsx
import Profile from "./components/Profile";
import Container from "./components/Container";

const profile = [
  { name: "Takashi", age: 19, country: "Japan" },
  { name: "Jane", age: 28, country: "UK", color: "red" },
];

const Example = () => {
  return (
    <div>
      <Container title="個別に渡せる"
        first={<Profile {...profile[0]} />}
        second={<Profile {...profile[1]} />}
      />
    </div>
  );
};

export default Example;
```

親コンポーネントで設計図書いて、子コンポーネントでレイアウトする。

```jsx
import "./Container.css";

const Container = ({ title, first, second }) => {
  return (
    <div className="container">
      <h3>{title}</h3>
      <div>{second}</div>
      <div>{first}</div>
    </div>
  );
};

export default Container;
```

## stateについて

### まずはイベントつ作ってみる

ボタン属性にクリック・イベントを作って出力するコードを書く。
アラートとコンソールで出力してみる。

```js
const Example = () => {
  const clickHander1 = () => {
    alert("クリックされました。");
  };
  const clickHander2 = () => {
    console.log("クリックされました。");
  };


  return (
    <>
      <button onClick={clickHander1}>click</button>
      <button onClick={clickHander2}>click</button>
    </>
  );
};

export default Example;
```

#### input要素と共によく使われるイベント
* onChange
  * 入力欄に値が入力される、または変更される毎に発火するイベント。
* onBlur
  * 入力欄からフォーカスが外れると発火するイベント。入力状態のinput要素からカーソルを外し外側でクリックしてフォーカスを外した瞬間に検知される。
* onFocus
  * 入力欄がフォーカスを得た時に発火するイベント。
  
```jsx
<input
  type="text"
  onChange={() => console.log("onChange検知")}
  onBlur={() => console.log("onBlur検知")}
  onFocus={() => console.log("onFocus検知")}
/>
```

#### 入力された値を取得する

```jsx
<label>
  入力値を取得：
  <input type="text" onChange={(e) => console.log(e.target.value)} />
</label>
```

#### ホバー

```jsx
<div
  onMouseEnter={() => console.log("カーソルが入ってきました。")}
  onMouseLeave={() => console.log("カーソルが出ていきました。")}
>
  ホバーしてね！
</div>
```

### 入力された値を別の要素に表示してみる

* `input要素`に入力した値を別の要素で逐次表してみる。
* `React`では、`useState`を分割代入にするのが流儀。
* イベントによって発生した`e`は、`{}`の中だけに有効なローカル変数みたいなもの。だからイベントによって発生した状態を管理・運用するためには`State`が必要になる。
* `input要素`の値を変更する毎に`onChange`の`handleChange関数`が実行される。
* `handleChange関数`の中身は、`setValue関数`を呼ぶこと。つまりその度にExampleコンポーネントは`再レンダリング`される === 表示される値が`更新されていく`という寸法。
```jsx
import { useState } from "react";

const Example = () => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <input  
        type="text"
        onChange={handleChange}
      />
      <span> = {value}</span>
    </>
  );
};
export default Example;
```