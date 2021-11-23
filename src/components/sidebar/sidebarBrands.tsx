import { useContext } from "react";
import "./sidebar.scss";
import { Context } from "../../App";
import { Brand } from "../../modals/Brand";

const SidebarBrands = () => {
  const { brands, dispatch } = useContext<any>(Context);

  const handleChose = (index: number) => {
    dispatch({
      type: "brands",
      index,
    });
  };
  return (
    <nav className="nav">
      <ul className="nav-items">
        {brands?.map((item: Brand, index: number) => (
          <li
            key={index}
            className={`nav_items_item ${
              item?.active ? "nav_items_item__active" : ""
            }`}
          >
            <a onClick={() => handleChose(index)} data-testid="brandName">
              {item?.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarBrands;
