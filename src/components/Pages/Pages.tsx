import { createPages } from "../../units/pagesCreator";
import React from "react";
import { PagesButtonBox, ButtonsPages } from "./styles";
interface PagesProps {
  pages: Array<number>;
  pagesCount: number;
  currentPage: number;
  togglePage: (pages: number) => void;
}
const Pages: React.FunctionComponent<PagesProps> = ({
  pages,
  pagesCount,
  currentPage,
  togglePage,
}) => {
  createPages(pages, pagesCount, currentPage);
  return (
    <PagesButtonBox>
      {pages.map((page, index) => (
        <ButtonsPages  onClick={() => togglePage(page)} key={index}>
          {page}
        </ButtonsPages>
      ))}
    </PagesButtonBox>
  );
};

export default Pages;
