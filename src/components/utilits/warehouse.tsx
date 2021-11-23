import { Product } from "../../modals/Product";
import { Brand } from "../../modals/Brand";
import { Color } from "../../modals/Color";
import { brandsData, colorsData } from "../../data/sidebarData";

export const warehouse = (items: Product[]) => {
    if (items) {
      let _colors: Color[] = colorsData;
      let _brands: Brand[] = brandsData;
      items?.forEach((product: any) => {
        _colors = _colors?.map((item) => {
          if (item?.name?.toUpperCase() === product?.color?.toUpperCase()) {
            return {
              ...item,
              count: (item?.count || 0) + 1,
            };
          } else {
            return item;
          }
        });
        _brands = _brands?.map((item) => {
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
        _colors,
        _brands,
      };
    } else{
      return{
        _colors: [],
        _brands: []
      }
    }
  };
  