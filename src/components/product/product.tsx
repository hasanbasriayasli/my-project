import { useContext } from "react";
import { Context } from "../../App";
import { Product as ProductType } from "../../modals/Product";
import "./product.scss";

interface Props {
  item: ProductType;
}
const Product = ({ item }: Props) => {
  const { dispatch, basket } = useContext<any>(Context);

  const handleAdd = (productId: number) => {
    dispatch({
      type: "add",
      productId,
    });
  };

  const added = basket?.find(
    (i: ProductType) => i?.productId === item?.productId
  );

  return (
    <div
      key={item?.productId}
      className="product"
    >
      <div className="product_img">
        <img src={item?.image} alt="Product Image"/>
        <div className="product_img_basket_add">
          <button
            className={`btn ${added ? "" : "btn-active"}`}
            onClick={() => handleAdd(item?.productId)}
            disabled={added}
            data-testid="addButton"
          >
            {added ? "Bu Ürün sepete eklenmiştir" : "Sepete Ekle"}
          </button>
        </div>
      </div>

      <div className="product_content">
        <p>{item?.name}</p>
        <div className="product_content_property">
          <span className="product_content_property_title">Marka : </span>
          <span data-testid="brand"  className="product_content_property_text">{item?.brand}</span>
        </div>
        <div className="product_content_property">
          <span className="product_content_property_title">Renk : </span>
          <span data-testid="color" className="product_content_property_text">{item?.color}</span>
        </div>
        <div className="product_content_price">
          <span data-testid="fullPrice" className="product_content_price_discount">
            {item?.fullPrice}
          </span>
          <span data-testid="discountPrice" className="product_content_price_current">
            {item?.discountPrice}
          </span>
          <span data-testid="discountPercentage" className="product_content_price_discount_percentage">12%</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
