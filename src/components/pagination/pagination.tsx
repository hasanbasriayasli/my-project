import { Dispatch, SetStateAction } from "react";
import "./pagination.scss";

interface Props {
  setCurrentPage: Dispatch<SetStateAction<number>>;
  currentPage: number;
}
const Pagination = ({ setCurrentPage, currentPage }: Props) => {
  
  const next = () => {
    setCurrentPage((prev: number) => prev + 1);
  };
  const previous = () => {
    setCurrentPage((prev: number) => prev - 1);
  };

  return (
    <div className="pagination">
      <ul>
        <li onClick={previous}><img src="./assets/arrowLeft.svg"/></li>
        <li
          className={`${currentPage === 1 ? "active" : ""}`}
          onClick={() => setCurrentPage(1)}
        >
          <a data-testid="currentPage1">{1}</a>
        </li>
        <li
          className={`${currentPage === 2 ? "active" : ""}`}
          onClick={() => setCurrentPage(2)}
        >
          <a data-testid="currentPage2">{2}</a>
        </li>
        <li
          className={`${currentPage === 3 ? "active" : ""}`}
          onClick={() => setCurrentPage(3)}
        >
          <a data-testid="currentPage3">{3}</a>
        </li>
        <li onClick={next}><img src="./assets/arrowRight.svg"/></li>
      </ul>
    </div>
  );
};

export default Pagination;
