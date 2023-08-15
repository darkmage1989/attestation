import { createPages } from "../../units/pagesCreator";
import React from "react";
import { PagesButtonBox, ButtonsPages } from "./styles";
interface PagesProps {
  pages: Array<number>;
  pagesCount: number;
  currentPage: number;
  togglePage: (pages: number) => void;
}
const Pages = ({ pages, pagesCount, currentPage, togglePage }: PagesProps) => {
  createPages(pages, pagesCount, currentPage); // функция получает параметры
  return (
    // рисуем кнопки
    <PagesButtonBox>
      {pages.map((page, index) => (
        <ButtonsPages
          $isActive={page === currentPage ? true : false}
          onClick={() => togglePage(page)}
          key={index}
        >
          {page}
        </ButtonsPages>
      ))}
    </PagesButtonBox>
  );
};

export default Pages