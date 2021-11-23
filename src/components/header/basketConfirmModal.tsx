import { Dispatch, SetStateAction } from "react";
import Modal from "../modal/modal";

interface Props {
  handleRemove: (value: number) => void;
  show: number;
  setShow: Dispatch<SetStateAction<number>>
}
const BasketConfirmModal = ({ handleRemove, setShow, show }: Props) => {
  
  return (
    <Modal show={!!show}>
      <div className="modal_header">
        Ürünü silmek istediğinize emin misiniz?
      </div>
      <div className="modal_body">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentiall....
      </div>
      <div className="modal_footer">
        <button
          className="modal_footer_confirm"
          onClick={() => handleRemove(show)}
        >
          Evet
        </button>
        <button className="modal_footer_cancel" onClick={() => setShow(0)}>
          Hayır
        </button>
      </div>
    </Modal>
  );
};
export default BasketConfirmModal;
