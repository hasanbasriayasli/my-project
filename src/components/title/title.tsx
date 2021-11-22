import React, { useContext } from "react";
import "./title.scss";
import { Context } from "../../App";

interface Props {
  seacrhRef: string;
  sorting: any[];
  setSorting: Function
}
const Title = ({ seacrhRef, sorting, setSorting }: Props) => {
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
    <div className="page-title">
      <div className="page-title-text">
        <h1>iPhone iOS cep telefonu</h1>
        <p>
          Aranan Kelime: <span>{seacrhRef}</span>
        </p>
      </div>
      <div className="page-title-sorting">
        <select name="sorting" onChange={(e)=>handleChose(+e?.target?.value)}>
          {sorting.map((item, index) => (
            <option value={index} selected={item?.active}>
              {item?.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Title;
