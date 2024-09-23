import { Children, useState } from "react";
import { createPortal } from "react-dom";
import Toast from "./components/Toast";

const TostPortal = ({ children }) => {
  const target = document.querySelector(".container.start");
  return createPortal(children, target);
};

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
      {
        toastOpen && (
          <TostPortal>
            <Toast
              visible={toastOpen}
              handleCloseClick={() => setToastOpen(false)}
            />
          </TostPortal>
        )
      }
    </div>
  );
};

export default Example;
