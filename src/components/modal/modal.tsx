import { ReactNode, useEffect, useRef } from "react";
import './modal.scss'

interface Props {
  children: ReactNode;
  show: boolean;
}
const Modal = ({ children, show }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (modalRef?.current) {
      if (show) {
        modalRef.current.classList.add("visible");
      } else {
        modalRef.current.classList.remove("visible");
      }
    }
  }, [show]);

  return (
      <div ref={modalRef} className="modal_wrap">
        <div className="modal_wrap_modal visible">{children}</div>
      </div>
  );
};

export default Modal;
