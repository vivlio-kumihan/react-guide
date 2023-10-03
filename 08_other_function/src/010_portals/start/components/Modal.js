import "./Modal.css";

const Modal = ({ handleCloseClick }) => {
  return (
    <div className="modal" onClick={() => console.log("真上のもう一つ上のdiv要素が反応している。")}>
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
