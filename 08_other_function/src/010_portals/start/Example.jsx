// // 1. createPortal

// import { useState } from "react";
// import { createPortal } from "react-dom";
// import Modal from "./components/Modal";

// // ポータル・サイトとよくいうが、
// // これは、インターネットを使ってホームページを見るとき、最初に表示されるWebサイトのことを指す。

// // で、ここの場合は、どういう意味で言っているかまだわかってない。。。
// // ポータルの子要素を直接の親要素ではなく別のDOM要素にマウントすることができる。

// /* POINT createPortalの使い方
// 第一引数: React の子要素としてレンダー可能なもの （要素、文字列、フラグメント、コンポーネントなど）
// 第二引数: レンダー先のDOM要素
// */

// /* POINT createPortalはどんなときに使うか？
// 子要素は親要素のスタイルによって表示に制限を受ける場合があります。
// （overflow: hidden 、 z-index 、 width　など・・・ ）
// それらの制限なく、子要素が親要素を「飛び出して」表示する必要があるときにcreatePortalを使うのが有効です。
// モーダル、ポップアップ、トーストは使用の代表例です。
// */

// // モーダルの入り口となる関数を設定する。
// // 引数は『コンポーネント』。
// const ModalPortal = ({ children }) => {
//   const target = document.querySelector(".container.start");
//   // createPortalメソッドに、移行させる子要素と移行先を引数で渡す。
//   // これでDOM上を思い通りに動かせる子要素を生成できるわけ。すごい。
//   return createPortal(children, target);
// };

// const Example = () => {
//   const [modalOpen, setModalOpen] = useState(false);
//   return (
//     <div>
//       <div className="container start"></div>

//       <button
//         type="button"
//         onClick={() => {
//           setModalOpen(true)
//           // クリックした時点では、再レンダリングされていないので、値はfalse
//           // trueを予約している状態
//           // console.log(modalOpen) //=> false
//         }}
//         // クリックすると上にモーダルの幕がかかるので、ボタンを押しても反応しないように
//         // しないといけない。つまり、disabled属性にはfalseを渡さないといけないのよ。
//         disabled={modalOpen}
//       >
//         モーダルを表示する
//       </button>
//       {/* {modalOpen && <Modal handleCloseClick={() => setModalOpen(false)} />} */}
//       {
//         modalOpen && (
//           <ModalPortal>
//             {/* 定義で使っている引数childrenはこれのこと。 */}
//             {/* handleCloseClick属性に『コールバック関数』を渡す。
//             内容は、『更新関数』に『false』を渡せというもの。 */}
//             <Modal handleCloseClick={() => setModalOpen(false)} />
//           </ModalPortal>
//         )
//       }
//     </div>
//   );
// };

// export default Example;


// // 2. バブリング

// import { useState } from "react";
// import { createPortal } from "react-dom";
// import Modal from "./components/Modal";

// const ModalPortal = ({ children }) => {
//   const target = document.querySelector(".container.start");
//   return createPortal(children, target);
// };

// const Example = () => {
//   const [modalOpen, setModalOpen] = useState(false);
//   return (
//     <div onClick={() => { console.log("空のdiv") }}>
//       <div className="container start" onClick={() => { console.log("container") }}></div>
//       {/* ボタンをクリックすることでバブリングが発生し、
//       親要素である空のdivが持っているイベント・リスナーが反応する。 */}
//       <button
//         type="button"
//         onClick={() => {
//           setModalOpen(true)
//         }}
//         // 初期状態では、無効化する（disabled）ことをしない（false）に設定している。
//         disabled={modalOpen}
//       >
//         モーダルを表示する
//       </button>
//       {
//         modalOpen && (
//           <ModalPortal>
//             {/* 同じく、空のdiv要素の子要素（子コンポーネント）であるModalPortalコンポーネント、
//             そして、その子要素であるModalコンポーネントに仕込まれているボタンをクリックしても
//             やはりバブリングは発生して、空のdiv要素のイベント・リスナーは反応する。 */}
//             <Modal handleCloseClick={() => setModalOpen(false)} />
//           </ModalPortal>
//         )
//       }
//     </div>
//   );
// };

// export default Example;



import { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "./components/Modal";

const ModalPortal = ({ children }) => {
  const target = document.querySelector(".container.start");
  return createPortal(children, target);
};

const Example = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <div className="container start"></div>

      <button
        type="button"
        onClick={() => {
          setModalOpen(true)
          console.log("one",modalOpen);
        }}
        disabled={modalOpen}
      >
        モーダルを表示する
      </button>
      { console.log(modalOpen) }
      {
        modalOpen && (
          <ModalPortal>
            <Modal handleCloseClick={() => setModalOpen(false)} />
          </ModalPortal>
        )
      }
    </div>
  );
};

export default Example;


// import "./Modal.css";

// const Modal = ({ handleCloseClick }) => {
//   return (
//     <div className="modal">
//       <div className="modal__content">
//         <p>モーダル</p>
//         <button type="button" onClick={ handleCloseClick }>
//           閉じる
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Modal;
