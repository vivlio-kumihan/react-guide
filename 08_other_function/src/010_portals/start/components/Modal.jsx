import "./Modal.css";

// propsで、更新関数を実行するためのコールバック関数が渡ってくる。
const Modal = ({ handleCloseClick }) => {
  return (
    <div className="modal">
      <div className="modal__content">
        <p>モーダル</p>
        {/* クリックしたタイミングで、コールバック関数を発火させるという寸法 */}
        <button type="button" onClick={ handleCloseClick }>
          閉じる
        </button>
      </div>
    </div>
  );
};

export default Modal;
