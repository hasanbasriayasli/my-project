import { useReducer, createContext, useEffect, useState } from "react";
import useLocalStorage from "./components/customHook/useLocalStorage";
import reducer from "./components/utilits/reducer";
import { warehouse } from "./components/utilits/warehouse";
import { items } from "./data/productItems";
import Home from "./page/home";
export const Context = createContext({});

function App() {
  const [{ _colors, _brands }] = useState(() => warehouse(items));
  const { handAddItem, handGetItems } = useLocalStorage();
  const [{ products, colors, brands, basket }, dispatch] = useReducer(reducer, {
    products: items,
    colors: _colors,
    brands: _brands,
    basket: handGetItems(),
  });

  useEffect(() => {
    handAddItem(basket);
  }, [basket, handAddItem]);
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
