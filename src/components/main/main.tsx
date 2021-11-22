import React, { useContext, useState } from "react";
import { Context } from "../../App";
import Pagination from "../pagination/pagination";
import Product from "../product/product";
import "./main.scss";

const Main = () => {
  const { products } = useContext<any>(Context);
  const [currentPage, setCurrentPage] = useState(1);
  const pageRange = currentPage === 1 ? 0 : currentPage * 12;

  return (
    <main className="page">
      <div className="page_content">
        {products.slice(pageRange, pageRange + 12)?.map((item: any) => {
          return item?.active ? <Product item={item} /> : null;
        })}
      </div>
      <Pagination
        setCurrentPage={setCurrentPage}
        totalPage={products?.length}
        currentPage={currentPage}
      />
    </main>
  );
};

export default Main;
