import { useReducer, createContext } from "react";
import { items } from "./modals/mockData";
import { brandsData, colorsData } from "./modals/sidebarData";
import Home from "./page/home";
export const Context = createContext({});
export interface Product {
  productId: number;
  color: string;
  brand: string;
  image: string;
  name: string;
  fullPrice: number;
  discountPrice: number;
  createdDate: string;
  active: boolean;
}
const reducer = (
  state: {
    products: Product[];
    colors: any[];
    brands: any[];
    basket: Product[];
  },
  action: any
): { products: Product[]; colors: any[]; brands: any[]; basket: Product[] } => {
  const { products, colors, brands, basket } = state;
  switch (action.type) {
    case "colors":
      let active = false;
      let activeColor = false;
      let colorsTemp = colors?.map((item, index) => {
        if (index === action?.index) {
          active = !item?.active ? true : active;
          activeColor = active;
          return {
            ...item,
            active: !item?.active,
          };
        } else {
          active = item?.active ? true : active;
          activeColor = active;
          return item;
        }
      });
      let activeBrand = false;
      brands?.forEach((item) => {
        active = item?.active ? true : active;
        activeBrand = item?.active ? true : activeBrand;
      });
      let productsTemp = active
        ? items?.filter(
            (itemm) =>
              (activeColor
                ? colorsTemp.find((item) => item?.name === itemm?.color)?.active
                : true) &&
              (activeBrand
                ? brands.find((item) => item?.name === itemm?.brand)?.active
                : true)
          )
        : items;
      return {
        ...state,
        products: productsTemp,
        colors: colorsTemp,
      };
    case "brands":
      let active1 = false;
      let activeBrands1 = false;
      let brandsTemp1 = brands?.map((item, index) => {
        if (index === action?.index) {
          active1 = !item?.active ? true : active1;
          activeBrands1 = active1;
          return {
            ...item,
            active: !item?.active,
          };
        } else {
          active1 = item?.active ? true : active1;
          activeBrands1 = active1;
          return item;
        }
      });
      let activeColor1 = false;
      colors?.forEach((item) => {
        active1 = item?.active ? true : active1;
        activeColor1 = item?.active ? true : activeColor1;
      });
      let productsTemp1 = active1
        ? items?.filter(
            (itemm) =>
              (activeBrands1
                ? brandsTemp1.find((item) => item?.name === itemm?.brand)
                    ?.active
                : true) &&
              (activeColor1
                ? colors.find((item) => item?.name === itemm?.color)?.active
                : true)
          )
        : items;
      return {
        ...state,
        products: productsTemp1,
        brands: brandsTemp1,
      };
    case "sorting":
      let productsss: any[] = [];
      switch (action.index) {
        case 0:
          productsss = products.sort((a, b) => a?.fullPrice - b?.fullPrice);
          break;
        case 1:
          productsss = products.sort((a, b) => b?.fullPrice - a?.fullPrice);
          break;
        case 2:
          productsss = products.sort((a, b) =>
            a?.name.toLowerCase().localeCompare(b?.name?.toLowerCase())
          );
          break;
        case 3:
          productsss = products.sort((a, b) =>
            b?.name.toLowerCase().localeCompare(a?.name?.toLowerCase())
          );
          break;
        default:
          break;
      }
      return {
        ...state,
        products: productsss,
      };
    case "seacrh":
      const colorss = colors?.map((item) => {
        return {
          ...item,
          active: false,
        };
      });
      const brandss = brands?.map((item) => {
        return {
          ...item,
          active: false,
        };
      });
      console.log(action.searchedWord);
      const productss = items.filter((item) =>
        item?.name?.toUpperCase().includes(action.searchedWord.toUpperCase())
      );
      return {
        ...state,
        products: productss,
        colors: colorss,
        brands: brandss,
      };
    case "add":
      const item =
        products?.find((item) => item?.productId === action?.productId) ||
        undefined;
      const baskett: Product[] = item ? [...basket, item] : basket;
      return {
        ...state,
        basket: baskett,
      };
    case "remove":
      const baskettt: Product[] = basket?.filter(
        (item) => item?.productId !== action?.productId
      );
      return {
        ...state,
        basket: baskettt,
      };
    default:
      return {
        ...state,
        products: items,
      };
  }
};
function App() {
  const { colorsTemp, brandsTemp }: any = deneme(items);
  const [{ products, colors, brands, basket }, dispatch] = useReducer(reducer, {
    products: items,
    colors: colorsTemp,
    brands: brandsTemp,
    basket: [],
  });
  return (
    <div className="container">
      <Context.Provider
        value={{
          colors,
          brands,
          products,
          basket,
          dispatch,
        }}
      >
        <Home />
        
      </Context.Provider>
    </div>
  );
}

export default App;

const deneme = (items: any) => {
  if (items) {
    let colorsTemp: any[] = colorsData;
    let brandsTemp: any[] = brandsData;
    items?.forEach((product: any) => {
      colorsTemp = colorsTemp?.map((item) => {
        if (item?.name?.toUpperCase() === product?.color?.toUpperCase()) {
          return {
            ...item,
            count: (item?.count || 0) + 1,
          };
        } else {
          return item;
        }
      });
      brandsTemp = brandsTemp?.map((item) => {
        if (item?.name?.toUpperCase() === product?.brand?.toUpperCase()) {
          return {
            ...item,
            count: (item?.count || 0) + 1,
          };
        } else {
          return item;
        }
      });
    });
    return {
      colorsTemp,
      brandsTemp,
    };
  }
};
