import { useContext } from "react";
import "./sidebar.scss";
import { Context } from "../../App";

const SidebarColors = () => {
  const { colors, dispatch } = useContext<any>(Context);

  const handleChose = (index: number) => {
    dispatch({
      type: "colors",
      index,
    });
  };
  return (
    <nav className="nav">
      <ul className="nav-items">
        {colors?.map((item: any, index: any) => (
          <li
            key={index}
            className={`nav_items_item ${
              item?.active ? "nav_items_item__active" : ""
            }`}
          >
            <a onClick={() => handleChose(index)}>
              {item?.name + " (" + item?.count + ")"}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarColors;
