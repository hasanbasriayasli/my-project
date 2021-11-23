import { useContext, useState, useEffect } from "react";
import { Context } from "../../App";
import { Product as ProductType } from "../../modals/Product";
import Pagination from "../pagination/pagination";
import Product from "../product/product";
import "./main.scss";

const Main = () => {
  const { products } = useContext<any>(Context);
  const [currentPage, setCurrentPage] = useState(1);
  const pageRange = currentPage === 1 ? 0 : (currentPage - 1 ) * 12;
  useEffect(() => {
    setCurrentPage(1);
  }, [products])
  return (
    <main className="page">
      <div className="page_content">
        {products?.length > 0
          ? products
              ?.slice(pageRange, pageRange + 12)
              ?.map((item: ProductType) => {
                return <Product key={item?.productId} item={item} />;
              })
          : null}
      </div>
      <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} totalPage={products?.length}/>
    </main>
  );
};

export default Main;
