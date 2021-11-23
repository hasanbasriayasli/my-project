import { Dispatch, SetStateAction } from "react";
import "./pagination.scss";

interface Props {
  setCurrentPage: Dispatch<SetStateAction<number>>;
  currentPage: number;
  totalPage: number;
}
const Pagination = ({ totalPage, setCurrentPage, currentPage }: Props) => {
  const _totalPage = Math.ceil(totalPage / 12);
  const next = () => {
    if (_totalPage > currentPage) {
      setCurrentPage((prev: number) => (prev === 3 ? 3 : prev + 1));
    }
  };
  const previous = () => {
    setCurrentPage((prev: number) => (prev === 1 ? 1 : prev - 1));
  };

  return (
    <div className="pagination">
      <ul>
        <li onClick={previous}>
          <img src="./assets/arrowLeft.svg" />
        </li>
        <li
          className={` ${_totalPage >= 1 ? (currentPage === 1 ? "active" : "") : "disabled"}`}
          onClick={() => _totalPage >= 1 && setCurrentPage(1)}
        >
          <a data-testid="currentPage1">{1}</a>
        </li>
        <li
          className={`${_totalPage >= 2 ? (currentPage === 2 ? "active" : "") : "disabled"}`}
          onClick={() => _totalPage >= 2 && setCurrentPage(2)}
        >
          <a data-testid="currentPage2">{2}</a>
        </li>
        <li
          className={` ${
            _totalPage >= 3 ? (currentPage === 3 ? "active" : "") : "disabled"
          }`}
          onClick={() => _totalPage >= 3 && setCurrentPage(3)}
        >
          <a data-testid="currentPage3">{3}</a>
        </li>
        <li onClick={next}>
          <img src="./assets/arrowRight.svg" />
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
