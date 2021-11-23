import { useState, useContext, Dispatch, SetStateAction } from "react";
import "./header.scss";
import { Context } from "../../App";
import { Product } from "../../modals/Product";
import BasketConfirmModal from "./basketConfirmModal";

interface Props {
  setSearch: Dispatch<SetStateAction<string>>;
  search: string
}
const Header = ({ setSearch, search }: Props) => {
  const { dispatch, basket } = useContext<any>(Context);
  const [isBasket, setisBasket] = useState(false);
  const [show, setShow] = useState(0);

  const handleSearch = (searchedWord: string) => {
    setSearch(searchedWord);
    if (searchedWord.length > 1) {
      dispatch({ 
        type: "search",
        searchedWord,
      });
    } else if (searchedWord.length === 0) {
      dispatch({
        type: "default",
      });
    }
  };

  const handleRemove = (productId: number) => {
    dispatch({
      type: "remove",
      productId,
    });
    setShow(0);
  };

  return (
    <header className="header">
      <div className="header_logo">
        <img src="/assets/logo.svg" />
      </div>
      <div className="header_search_wrapper">
        <div className="header_search_wrapper_icon">
          <img src="/assets/search.svg" />
        </div>
        <input
          type="text"
          className="header_search_wrapper_input"
          placeholder="25 milyon’dan fazla ürün içerisinde ara"
          value={search}
          onChange={(e) => handleSearch(e?.target?.value)}
        />
      </div>
      <div
        className={`header_basket ${
          basket?.length === 0 ? "" : "header_basket_hover"
        }`}
        onMouseOver={() => setisBasket(true)}
        onMouseLeave={() => setisBasket(false)}
      >
        <button className="header_basket_button">
          Sepetim{" "}
          <span className="header_basket_button_icon">{basket?.length}</span>
        </button>
        {isBasket && basket?.length > 0 && (
          <div className="header_basket_content">
            <ul className="header_basket_content_items">
              {basket?.map((item: Product) => {
                return (
                  <li className="header_basket_content_items_item">
                    <div className="header_basket_content_items_item_img">
                      <img src={item?.image} />
                    </div>
                    <div className="header_basket_content_items_item_description">
                      <p>{item?.name}</p>
                      <button onClick={() => setShow(item?.productId)}>
                        Kaldır
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      <BasketConfirmModal show={show} setShow={setShow} handleRemove={handleRemove} />
    </header>
  );
};
export default Header;
