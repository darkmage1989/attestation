export function createPages(
  pages: Array<number>,
  pagesCount: number,
  currentPage: number
) {
  if (pagesCount > 10) {
    if (currentPage > 5) {
      for (let i = currentPage - 4; i <= currentPage + 5; i++) {
        if (pages.length < 10) {
          pages.push(i);
        }
        console.log(pages);
        if (i === pagesCount) break;
      }
    } else {
      for (let i = 1; i <= 10; i++) {
        if (pages.length < 10) {
          pages.push(i);
        }
        if (i === pagesCount) break;
      }
    }
  } else {
    for (let i = 1; i <= pagesCount; i++) {
      if (pages.length < 10) {
        pages.push(i);
      }
    }
  }
}