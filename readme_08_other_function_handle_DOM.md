#  createPortal

## createPortalを使ってDOMの接木

* POINT `createPortal`で何ができる。
  本来の親要素と違う親要素へ接木ができる。
* POINT `createPortal`の使い方
  第一引数: `React`の子要素としてレンダー可能なもの （要素、文字列、フラグメント、コンポーネントなど）
  第二引数: レンダー先のDOM要素
* POINT `createPortal`はどんなときに使うか？
  子要素は親要素のスタイルによって表示に制限を受ける場合があります。
  （overflow: hidden 、 z-index 、 width　など・・・ ）
  それらの制限なく、子要素が親要素を「飛び出して」表示する必要があるときにcreatePortalを使うのが有効です。
  モーダル、ポップアップ、トーストは使用の代表例です。

## modalを作る

注意点は、子コンポーネントを使ってmodalのオンオフをしていること。

```jsx
親コンポーネント: Example.js

import { useState } from "react";
// 本来の親要素と違う親要素へ接木を行うためのもの
import { createPortal } from "react-dom";
import Modal from "./components/Modal";

// 引数にpropsでchildrenを持つコンポーネントを作成
const ModalPotal = ({ children }) => {
  // 接木をしたい親要素を読み込む
  const target = document.querySelector(".container.start");
  // createPortal()関数に、接木は`children`で、その親要素は`target`
  return createPortal(children, target);
};

const Example = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      {/* このdivを親要素にしてモーダルをぶら下げたい。 */}
      <div className="container start"></div>

      <button
        type="button"
        onClick={() => setModalOpen(true)}
        // ボタンの無効化は、defaultでfaluse。
        // つまり初期状態ではボタンを無効化しない。
        // クリックされたら無効化するという意味。
        disabled={modalOpen}
      >
        モーダルを表示する
      </button>

      {/* 状態がtrueの場合は、`ModalPotal`要素を実行する。 */}
      {/* つまり、接木をすると言う意味。 */}
      {/* 表示される内容は`Modal`コンポーネント */}
      {modalOpen && (
        <>
          <ModalPotal>
            <Modal handleCloseClick={() => setModalOpen(false)} />
          </ModalPotal>

        </>
      )}
    </div>
  );
};

export default Example;
```

```jsx
子コンポーネント: Modal.js

import "./Modal.css";

// 無名関数`() => setModalOpen(false)}`を渡して、
const Modal = ({ handleCloseClick }) => {
  console.log(handleCloseClick);
  return (
    <div className="modal">
      <div className="modal__content">
        <p>モーダル</p>
        {/* クリックのイベントハンドラにpropsで渡ってきた無名関数を実行。 */}
        {/* 状態をfalseに変更すると言うこと。 */}
        {/* `{modalOpen && (...)}`が`false`になって`ModalPotal`コンポーネントは表示されなくなる。 */}
        <button type="button" onClick={handleCloseClick}>
          閉じる
        </button>
      </div>
    </div>
  );
};

export default Modal;
```

## Bubling

子要素から親要素へのイベントの伝播について面白い結果。
子から親へ伝播というルールをReactは守っている。

```jsx
親コンポーネント: Example.js

import { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "./components/Modal";

const ModalPotal = ({ children }) => {
  const target = document.querySelector(".container.start");
  return createPortal(children, target);
};

const Example = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    // 親子関係の確認重要
    // div > button要素のクリックイベントがバグリングして親要素のdivも反応する例
    // 最上位のdiv要素が反応している。
    <div onClick={() => console.log("最上位のdiv要素が反応している。")}>
      // ModalPotalの依頼先も反応はし。
      <div className="container start" onClick={() => console.log("ModalPotalの依頼先も反応はし。")}></div>
      {/* button要素のクリックイベントを発火させたら、上の親要素も反応する。 */}
      <button
        type="button"
        onClick={() => setModalOpen(true)}
        disabled={modalOpen}
      >
        モーダルを表示する
      </button>
      {modalOpen && (
        // 親子関係の確認重要
        // ModalPotalには反応しない。
        <ModalPotal onClick={() => console.log("ModalPotalには反応しない。")}>
          // ModalPotalの子要素にも反応しない。
          <Modal  handleCloseClick={() => setModalOpen(false)} 
                  // 親子関係の確認重要
                  onClick={() => console.log("ModalPotalの子要素にも反応しない。")}/>
        </ModalPotal>
      )}
    </div>
  );
};

export default Example;
```

```jsx
子コンポーネント: Modal.js

import "./Modal.css";

const Modal = ({ handleCloseClick }) => {
  return (
    // 親子関係の確認重要
    // 真上のもう一つ上のdiv要素が反応している。
    <div className="modal" onClick={() => console.log("真上のもう一つ上のdiv要素が反応している。")}>
      // 真上のdiv要素が反応している。
      <div className="modal__content" onClick={() => console.log("真上のdiv要素が反応している。")}>
        <p>モーダル</p>
        <button type="button" onClick={handleCloseClick}>
          閉じる
        </button>
      </div>
    </div>
  );
};

export default Modal;
```

## 練習問題

やっていることはmodalと同じ。
違うのはクラスの付け替えを状態を使ってやっている。
この技は多用するので重要。

```jsx
import { useState } from "react";
import { createPortal } from "react-dom";
import Toast from "./components/Toast";

const TostPortal = ({ children }) => {
  const target = document.querySelector(".container.start");
  return createPortal(children, target);
}

const Example = () => {
  const [toastOpen, setToastOpen] = useState(false);

  return (
    <div>
      <div className="container start"></div>
      <button
        type="button"
        onClick={() => setToastOpen(true)}
        disabled={toastOpen}
      >
        トーストを表示する
      </button>
      {toastOpen && (
        <TostPortal>
          <Toast
            // クラスの付け替え部分頻度多くなるはず。工程を暗記。
            // クラスの付け替えをする部分。状態でやるんだね。
            visible={toastOpen}
            handleCloseClick={() => setToastOpen(false)}
          />
        </TostPortal>
      )}
    </div>
  );
};

export default Example;
```

```jsx
import "./Toast.css";

const Toast = ({ visible, handleCloseClick }) => {
  // クラスの付け替え部分頻度多くなるはず。工程を暗記。
  // クラスの付け替えをする部分。こうやるんだ。
  const toastClassName = visible ? "toast is-visible" : "toast";
  return (
    <div className={toastClassName}>
      <div className="toast__content">
        <p>トースト</p>
        <button
          type="button"
          className="toast__button"
          onClick={handleCloseClick}
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Toast;
```

## useRef

useRefとは、再レンダリングを発生させずに値を保持する方法である。

useStateでは、stateの値を更新する際に更新関数を実行すると再レンダリングが発生する。
useRefでは発生しない。

HTMLでは出来るが、Reactでは出来ないこと。
button要素をクリックするとinput要素がアクティブになる。

### DOMを捕まえるまで

```jsx
import { useState, useRef } from "react";

// Case1コンポーネントの定義
const Case1 = () => {
  // 状態の初期化
  const [value, setValue] = useState("");
  // DOM参照の初期化
  const inputRef =useRef();
  
  return (
    <>
      <h3>ユースケース1</h3>
      {/* `input要素`の`ref属性`に`inputRef`を設定することで、 */}
      {/* 『この`input要素`』のDOM要素の参照を`inputRef`が保持する。 */}
      {/* なお、`useRefVar.current`プロパティにアクセスすると */}
      {/* そこで使えるメソッドがわかる。 */}
      <input  ref={inputRef}
              onChange={(e) => setValue(e.target.value)} />
              type="text" 
              value={value} 
      {/* 全く関係のない要素にクリックイベントで何が発火されるかやってみると、 */}
      {/* `{current: input}`となり`button要素`が`input要素`のDOM要素の参照をしっかりと捕まえる。 */}
      <button onClick={() => console.log(inputRef)}>
        インプット要素をフォーカスする
      </button>
    </>
  );
};

const Example = () => {
  return (
    <>
      <Case1 />
    </>
  );
};

export default Example;
```

###　対象の要素の値を取り出してみる

```jsx
return (
  <div>
    <h3>ユースケース1</h3>
    <input  type="text" 
            value={value} 
            ref={inputRef} 
            onChange={(e) => setValue(e.target.value)}
    />
    {/* 例1. input要素のDOMを捕まえていることがわかる。 */}
    <button onClick={() => console.log(inputRef)}> 
    {/* 例2. この`inputRef`に対して`current`メソッドを充てることで、*/}
    {/* 属性を参照できる。*/}
    {/* 対象の要素のスクリーン上で表示されている高さの参照は以下のようにする。 */}
    {/* これで蛇腹のリストがややこしい手続きなしに作れる。素晴らしい。 */}
    <button onClick={() => console.log(inputRef.current.offsetHeight) }>
      インプット要素をフォーカスする
    </button>
  </div>
);
```

### クリックしたらインプットが入力待ち状態になるをやる

```jsx
import { useState, useRef } from "react";

const Case1 = () => {
  const [value, setValue] = useState("");
  const inputRef =useRef();
  
  return (
    <div>
      <h3>ユースケース1</h3>
      <input  type="text" 
              value={value} 
              ref={inputRef} 
              onChange={(e) => setValue(e.target.value)}
      />
      {/* 普通に`input`要素が持っているメソッドが使える。 */}
      {/* ここでは、`input`要素が持っている`focus()`メソッドを使って、*/}
      {/* button要素とは何の関係もないinput要素を`focus`させる。*/}
      <button onClick={() => inputRef.current.focus()}>
        インプット要素をフォーカスする
      </button>
    </div>
  );
};

const Example = () => {
  return (
    <>
      <Case1 />
    </>
  );
};

export default Example;
```

### 動画を再生してみる

```jsx
import { useState, useRef } from "react";

const Case2 = () => {
  // 動画再生の状態管理を生成する。
  const [playing, setPlaying] = useState(false);
  // 参照を生成する。
  const videoRef = useRef();
  const style = { width: "100%" };

  return (
    <>
      {/* イベントの受信 `ref`プロップスに`videoRef`を設定 */}
      {/* `videoRef`に紐づいたイベントが入ってくる。 */}
      {/* この場合は、ボタンを押したら動画の再生か停止のイベント */}
      <video style={style} ref={videoRef}>
            {/* buildされる実際のサイトはpublicディレクトリで運用されている。 */}
            {/* だからpathは以下のようになる。 */}
        <source src="./sample.mp4"></source>
      </video>
      {/* -----宿題-----　トグルのやり方を調べる。パターンを抽出して暗記してしまう。 */}
      <button onClick={() => {
        if (playing) {
          videoRef.current.pause();
        } else {
          videoRef.current.play();
        }
        // トグル部
        setPlaying(prevState => !prevState)
      }}>
        {/* トグル部 */}
        {playing ? "Stop" : "Play"}
      </button>
    </>
  );
};

const Example = () => {
  return (
    <>
      <Case2 />
    </>
  );
};

export default Example;
```

### 再レンダリングするかしないか　時間を調べてみて確かめる

```jsx
import { useState, useRef } from "react";
// 現在時刻を文字列で取得する。
const createTimeStamp = () => new Date().toLocaleString();
// const createTimeStamp = () => new Date().getTime();
// Case3コンポーネントの設定
const Case3 = () => {
  // 最初にリロードされた時の時間とその状態を設定する。
  const [timeState, setTimeState] = useState(createTimeStamp());
  // onClickプロップス・イベントリスナーに敷設した関数。こちらで定義。
  // クリックするたびに再レンダリングされて値が変わっていく。
  const updateState = () => {
    setTimeState(createTimeStamp());
  };
  
  // 今回のrefは、最初にリロードされた時の時間の文字列を設定する。
  const timeRef = useRef(createTimeStamp());
  const updateTimeRef = () => {
    // onClickプロップス・イベントリスナーに敷設した関数。こちらで定義。
    // クリックイベントが次々に発生して`timeRef.current`には新しい値が入ってくるが、
    // スクリーン上の表示には反映されない。
    timeRef.current = createTimeStamp();
    console.log("timeRef.current => ", timeRef.current);
  };

  return (
    <>
      <h3>ユースケース3</h3>
      <p>
        state: {timeState}
        <button onClick={updateState}>更新</button>
      </p>
      <p>
        ref: {timeRef.current}
        <button onClick={updateTimeRef}>更新</button>
      </p>
    </>
  );
};

const Example = () => {
  return (
    <>
      <Case3 />
    </>
  );
};

export default Example;
```

### 親コンポーネントから子コンポーネントへDOMを操作する

__POINT forwardRef__

子コンポーネント内の DOM に直接アクセスしたいときに使います。
refは、親から子コンポーネントへprops形式で渡して参照するということができないため、参照したい場合は子コンポーネント内でfowardRefを使用する必要があります。

```jsx
// 基本的には、refの子コンポーネントへの持ち出しはやらない前提。
// どうしても必要であれば`forwardRef()`関数を使う

import { useRef, forwardRef } from "react";

const Example = () => {
  const ref = useRef();
  return (
    <>
      {/* 接木の子コンポーネントのプロップスに`ref`を設定 */}
      <Input ref={ref} />
      <button onClick={() => ref.current.focus()}>
        インプット要素をフォーカスする
      </button>
    </>
  );
};
// 子コンポーネントを生成する際のコールバック関数を
// forwardRef()の引数にして解決する。
// `(props, ref) => {return(...)}`
const Input = forwardRef((props, ref) => {
  return (<input type="text" ref={ref} />);
});

export default Example;
```

__useImperativeHandle__

```jsx
// refの問題点
// `ref.current`にはそのインスタンスごとに多くのメソッドがある。
// 開発メンバーが複数になり、このコードを書いた本人の意図しない
// 使われ方をしてバグを発生させる危険性がある。
// それを回避するのがuseImperativeHandle()関数。
// refを使う操作を限定するための関数。
// このコードで意図しない使われ方があるのは、ref.current.focus()

// useImperativeHandle()関数は子コンポーネントで使う

import { useRef, forwardRef, useImperativeHandle } from "react";

const Example = () => {
  const ref = useRef();
  return (
    <>
      <Input ref={ref} />
      <button onClick={() => ref.current.focus()}>
        インプット要素をフォーカスする
      </button>
    </>
  );
};
// 渡ってきたrefに対してuseImperativeHandle()関数を設定する。
const Input = forwardRef((props, ref) => {
  // refはそのまま使わない。新たに用意する。
  const inputRef = useRef();
  // 第一引数には、渡ってきたref
  // 第二引数には、使用したいメソッドを含むオブジェクトを返す関数を敷設する。
  // // 短縮せずに書くと
  // useImperativeHandle(ref, () => {
  //   return {
  //     // ここで`focus()`メソッドを定義する
  //     focus: function() {
  //       inputRef.current.focus();
  //     }
  //   };
  // });
  // 短縮して書くと『オブジェクトを返す関数』を『{}』で囲み
  // それを『()』で囲む
  useImperativeHandle(ref, () => (
    {
      myFocus() {
        inputRef.current.focus();
      }
    }
  ));
  return <input type="text" ref={inputRef} />;
});

export default Example;
```

## videoのコードをuseImperativeHandle()関数使ってやってみる

```jsx
import { useState, useRef, forwardRef, useImperativeHandle } from "react";

const Example = () => {
  const [playing, setPlaying] = useState(false);
  const ref = useRef();

  return (
    <div>
      <Video ref={ref} path="./sample.mp4" />
      <button
        onClick={() => {
          if (playing) {
            ref.current.myPause();
          } else {
            ref.current.myPlay();
          }
          setPlaying((prev) => !prev);
        }}
      >
        {playing ? "Stop" : "Play"}
      </button>
    </div>
  );
};

const Video = forwardRef(({ path }, ref) => {
  const videoRef = useRef();
  useImperativeHandle(ref, () => (
    {
      myPlay() {
        videoRef.current.play();
      },
      myPause() {
        videoRef.current.pause();
      }
    }
  ));

  return (
    <video style={{ maxWidth: "100%" }} ref={videoRef}>
      <source src={path}></source>
    </video>
  );
});

export default Example;
```