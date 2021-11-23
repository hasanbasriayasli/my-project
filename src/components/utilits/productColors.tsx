import { Brand } from "../../modals/Brand";
import { Color } from "../../modals/Color";
import { Product } from "../../modals/Product";

const productColors = (
  products: Product[],
  brands: Brand[],
  colors: Color[],
  index: number
) => {
  let isExistActive = false;
  let brandActive = false;
  let colorActive = false;

  const _colors = colors?.map((item, idx) => {
    if (idx === index) {
      if (!item?.active) colorActive = !item?.active;
      return {
        ...item,
        active: !item?.active,
      };
    } else {
      if (item?.active) colorActive = item?.active;
      return item;
    }
  });

  brands?.forEach((item) => {
    if (item?.active) brandActive = item?.active;
  });

  if (colorActive || brandActive) isExistActive = true;
  const _products = isExistActive
    ? products?.filter(
        (itemm) =>
          (brandActive
            ? brands.find((item) => item?.name === itemm?.brand)?.active
            : true) &&
          (colorActive
            ? _colors.find((item) => item?.name === itemm?.color)?.active
            : true)
      )
    : products;

  return {
    _products,
    _colors
  };
};

export default productColors;
