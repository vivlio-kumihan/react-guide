# イベントリスナーとState（状態管理）

## イベントに合わせて関数を実行する

イベントは色々ある。

* onMouseEnter
* onMouseLeave
* onChange
* onBlur

`onClick`に対してコールバック関数`const funcName = () => {}`を定義する。
イベントの発火装置を設置する。
これの関数をイベントハンドラーという。
`onClick`というイベントのリスナーを
`clickHandler`という名称で作成し登録する（引数にとる）。

コールバック関数でやっていることは、
- クリックのイベントを起こしたら、`clickHandler`というイベントハンドラーを発火させる。

JSXに埋め込む際には要注意。onClickイベントに、

* `clickHandler` => `clickHandler`という名前の関数を渡す。
* `clickHandler()` => `clickHandler`関数を実行する

意味が全く違う。

```js
const Example = () => {
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

* input要素でよく使われるイベント
  入力欄に値を入力する度にコールバック関数が実行される。
  * `onChange={() => console.log("onChange検知")}`

* マウスが入力欄から離なし、他の部分をクリックしたら（フォーカスが離れたら）コールバック関数が実行される。
  * `onBlur={() => console.log("onBlur検知")}`

* 最初に入力欄をクリックしたら（フォーカスを得たら）コールバック関数が実行される。
  * `onFocus={() => console.log("onFocus検知")}`

* `onChange`というイベントハンドラーに`e`というイベントを引数にとる。
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