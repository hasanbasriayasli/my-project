import React, { useState, useContext, useRef } from "react";
import "./header.scss";
import { Context, Product } from "../../App";

interface Props {
  seacrhRef: any;
}
const Header = ({ seacrhRef }: Props) => {
  const { dispatch, basket } = useContext<any>(Context);
  const [isBasket, setisBasket] = useState(false);
  const handleSearch = (searchedWord: string) => {
    seacrhRef.current = searchedWord;
    if (searchedWord.length > 1) {
      dispatch({
        type: "seacrh",
        searchedWord,
      });
    } else if (searchedWord.length == 0) {
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
          onChange={(e) => handleSearch(e?.target?.value)}
        />
      </div>
      <div
        className={`header_basket ${basket?.length === 0 ? '' : 'header_basket_hover'}`}
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
                        <button onClick={() => handleRemove(item?.productId)}>
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
    </header>
  );
};
export default Header;
