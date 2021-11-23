import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { sorting } from "../../data/sidebarData";
import SidebarSorting from "./sidebarSorting";

test("renders SidebarSorting", async () => {
  render(<SidebarSorting sorting={sorting} setSorting={() => {}} />);
});
