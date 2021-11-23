import React, { Dispatch, SetStateAction, useContext } from "react";
import "./title.scss";
import { Context } from "../../App";
import { Sorting } from "../../modals/Sorting";

interface Props {
  search: string;
  sorting: Sorting[];
  setSorting: Dispatch<SetStateAction<Sorting[]>>;
}
const Title = ({ search, sorting, setSorting }: Props) => {
  const { dispatch } = useContext<any>(Context);

  const handleChose = (index: number) => {
    setSorting((prev: Sorting[]) =>
      prev.map((item: Sorting, idx: number) => {
        if (idx === index) {
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
    <div className="page-title">
      <div className="page-title-text">
        <h1>iPhone iOS cep telefonu</h1>
        <p>
          Aranan Kelime: <span  data-testid="search">{search}</span>
        </p>
      </div>
      <div className="page-title-sorting">
        <select
          name="sorting"
          onChange={(e) => handleChose(+e?.target?.value)}
          value={sorting.findIndex(i=>i.active)}
        >
          {sorting.map((item, index) => (
            <option key={index} value={index}>
              {item?.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Title;
