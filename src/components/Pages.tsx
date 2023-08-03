import { createPages } from "../units/pagesCreator";
import React from "react";
interface PagesProps {
  pages: Array<number>;
  pagesCount: number;
  currentPage: number;
  togglePage: (pages:number) => void;
}
const Pages: React.FunctionComponent<PagesProps> = ({
  pages,
  pagesCount,
  currentPage,
  togglePage,
}) => {
  createPages(pages, pagesCount, currentPage);
  return (
    <div className="pages">
      {pages.map((page, index) => (
        <button onClick={() => togglePage(page)} key={index}>
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pages;
