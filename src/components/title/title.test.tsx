import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { sorting } from "../../data/sidebarData";
import Title from "./title";

test("renders Title", async () => {
  const { getByTestId } = render(
    <Title search={"App"} sorting={sorting} setSorting={() => {}} />
  );
  expect(getByTestId('search')).toHaveTextContent('App');
});
