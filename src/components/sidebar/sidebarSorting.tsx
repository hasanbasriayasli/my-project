import { useContext, useState } from "react";
import "./sidebar.scss";
import { Context } from "../../App";

interface Props{
  sorting: any[],
  setSorting: Function
}
const SidebarSorting = ({sorting , setSorting}: Props) => {
  const { dispatch } = useContext<any>(Context);

  const handleChose = (index: number) => {
    setSorting((prev: any) =>
      prev.map((item: any, idx: number) => {
        if (idx == index) {
          return {
            ...item,
            active: !item?.active,
          };
        } else {
          return {
            ...item,
            active: false,
          };
        }
      })
    );
    dispatch({
      type: "sorting",
      index,
    });
  };
  return (
    <nav className="nav">
      <ul className="nav-items">
        {sorting.map((item: any, index: number) => (
          <li
            key={index}
            className={`nav_items_item ${
              item?.active ? "nav_items_item__active" : ""
            }`}
          >
            <a onClick={() => handleChose(index)}>{item?.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarSorting;
