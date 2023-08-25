import { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "./components/Modal";

// createPortalを使うと違う親へ要素を移動できる。
/* POINT createPortalの使い方
*/
// createPortalで作成するのは、子要素を受け入れる容器であるインスタンスと移動先
// 引数にchildrenを持つ無名関数を定義する。
// 以上で、ModalPortalをコンポーネントのように使用できる。
const ModalPortal = ({ children }) => {
  const target = document.querySelector('.container.start');
  // 第一引数: React の子要素としてレンダー可能なもの （要素、文字列、フラグメント、コンポーネントなど）
  // 第一引数にレンダリングしたい子要素を引数にする。
  // 第二引数にレンダー先のDOM要素
  return createPortal(children, target)
};
/* POINT createPortalはどんなときに使うか？
子要素は親要素のスタイルによって表示に制限を受ける場合があります。
（overflow: hidden 、 z-index 、 width　など・・・ ）
それらの制限なく、子要素が親要素を「飛び出して」表示する必要があるときにcreatePortalを使うのが有効です。
モーダル、ポップアップ、トーストは使用の代表例です。
*/

const Example = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <div className="container start"></div>
      <button
        type="button"
        onClick={ () => setModalOpen(true) }
        disabled={ modalOpen }
      >
        モーダルを表示する
      </button>
      {/* modalOpen => defaultでfalse */}
      {/* 容器にModalを包む。 */}
      { modalOpen && (
        <ModalPortal>
          <Modal handleCloseClick={ () => setModalOpen(false) } /> 
        </ModalPortal>
      )}
    </div>
  );
};
export default Example;
