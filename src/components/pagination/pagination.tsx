import './pagination.scss';
interface Props {
  totalPage: number;
  setCurrentPage: Function;
  currentPage: number;
}
const Pagination = ({ totalPage, setCurrentPage, currentPage }: Props) => {
  const next = () => {
    setCurrentPage((prev: number) => prev + 1);
  };
  const previous = () => {
    setCurrentPage((prev: number) => prev - 1);
  };
  return (
    <div className="pagination">
      <ul>
        <li onClick={previous}>0</li>
        {currentPage > 1 && (
          <li onClick={() => setCurrentPage(currentPage - 1)}>
            <a>{currentPage - 1}</a>
          </li>
        )}
        <li className={`active`} onClick={() => setCurrentPage(currentPage)}>
          <a>{currentPage}</a>
        </li>
        {currentPage < totalPage - 1 && (
          <li onClick={() => setCurrentPage(currentPage + 1)}>
            <a>{currentPage + 1}</a>
          </li>
        )}
        <li onClick={next}>0</li>
      </ul>
    </div>
  );
};

export default Pagination;
