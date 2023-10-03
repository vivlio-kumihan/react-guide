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
    <div onClick={() => console.log("最上位のdiv要素が反応している。")}>
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
        <ModalPotal onClick={() => console.log("ModalPotalには反応しない。")}>
          <Modal handleCloseClick={() => setModalOpen(false)} onClick={() => console.log("ModalPotalの子要素にも反応しない。")}/>
        </ModalPotal>
      )}
    </div>
  );
};

export default Example;