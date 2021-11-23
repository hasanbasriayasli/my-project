import { Brand } from "../../modals/Brand";
import { Color } from "../../modals/Color";
import { Product } from "../../modals/Product";

const productBrands = (
  products: Product[],
  brands: Brand[],
  colors: Color[],
  index: number
) => {
  let isExistActive = false;
  let brandActive = false;
  let colorActive = false;

  const _brands = brands?.map((item, idx) => {
    if (idx === index) {
      if (!item?.active) brandActive = !item?.active;
      return {
        ...item,
        active: !item?.active,
      };
    } else {
      if (item?.active) brandActive = item?.active;
      return item;
    }
  });

  colors?.forEach((item) => {
    if (item?.active) colorActive = item?.active;
  });

  if (colorActive || brandActive) isExistActive = true;
  const _products = isExistActive
    ? products?.filter(
        (itemm) =>
          (brandActive
            ? _brands.find((item) => item?.name === itemm?.brand)?.active
            : true) &&
          (colorActive
            ? colors.find((item) => item?.name === itemm?.color)?.active
            : true)
      )
    : products;

  return {
    _products,
    _brands
  };
};

export default productBrands;
