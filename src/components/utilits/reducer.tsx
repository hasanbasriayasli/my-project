import { items } from "../../data/productItems";
import { Brand } from "../../modals/Brand";
import { Color } from "../../modals/Color";
import { Product } from "../../modals/Product";
import productAdd from "./productAdd";
import productBrands from "./productBrands";
import productColors from "./productColors";
import productRemove from "./productRemove";
import productSearch from "./productSearch";
import productSorting from "./productSorting";

interface State {
  products: Product[];
  colors: Color[];
  brands: Brand[];
  basket: Product[];
}
const reducer = (state: State, action: any): State => {
  const { products, basket, brands, colors } = state;

  switch (action.type) {
    case "add":
      return {
        ...state,
        basket: productAdd(products, basket, action?.productId),
      };
    case "remove":
      return {
        ...state,
        basket: productRemove(basket, action?.productId),
      };
    case "search": {
        const { _products, _colors, _brands } = productSearch(
        items,
        colors,
        brands,
        action?.searchedWord
      );
      return {
        products: _products,
        colors: _colors,
        brands: _brands,
        basket,
      }
    } 
    case "sorting":
        return{
            ...state,
            products: productSorting(products, action?.index)
        }
    case "brands":{
        const {_products, _brands} = productBrands(items, brands, colors, action?.index);
        return{
            ...state,
            products: _products,
            brands: _brands
        }
    }
    case "colors": {
        const {_products, _colors} = productColors(items, brands, colors, action?.index);
        return{
            ...state,
            products: _products,
            colors: _colors
        }
    }
    case "default":
      return {
      ...state,
      products: items,
    };
    default:
      return state;
  }
};

export default reducer
