import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { sorting } from "../../data/sidebarData";
import Pagination from "./pagination";

test("renders Pagination", async () => {
  const { getByTestId } = render(
    <Pagination currentPage={1} setCurrentPage={()=>{}}/>
  );
  expect(getByTestId('currentPage1')).toHaveTextContent('1');
  expect(getByTestId('currentPage2')).toHaveTextContent('2');
  expect(getByTestId('currentPage3')).toHaveTextContent('3');
});
