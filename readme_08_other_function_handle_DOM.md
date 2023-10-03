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
        {/* クリックのイベントハンドラにpropsで渡ってきた無名関数を私実行。 */}
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
        // ModalPotalには反応しない。
        <ModalPotal onClick={() => console.log("ModalPotalには反応しない。")}>
          // ModalPotalの子要素にも反応しない。
          <Modal handleCloseClick={() => setModalOpen(false)} onClick={() => console.log("ModalPotalの子要素にも反応しない。")}/>
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

HTMLでは出来るが、Reactでは出来ないこと。
button要素をクリックするとinput要素がアクティブになる。

### DOMを捕まえるまで

```jsx
import { useState, useRef } from "react";


const Case1 = () => {
  const [value, setValue] = useState("");
  const inputRef =useRef();
  
  return (
    <div>
      <h3>ユースケース1</h3>
      {/* `input要素`の`ref属性`に`inputRef`を設定することで、 */}
      {/* このDOM要素の参照を`inputRef`が保持する。 */}
      <input type="text" value={value} ref={inputRef} onChange={(e) => setValue(e.target.value)} />
      {/* 全く関係のない要素にクリックイベントで何が発火されるかやってみると、 */}
      {/* `{current: input}`となりしっかりと捕まえよる。 */}
      <button onClick={() => console.log(inputRef)}>
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

### やってみる

