import React, { useState } from "react";
import { useGetUsersApiQuery } from "../../services/apis/apis";
import FilterData from "../../components/FilterData";
import User from "../../components/User";
import Search from "../../components/Search";
import Pages from "../../components/Pages";
import { SearchBox } from "../../components/styles";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
interface MainProps {}
const Main: React.FunctionComponent<MainProps> = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const order = useSelector((state: RootState ) => state.addGitData.order);
  const userName = useSelector((state: RootState ) => state.addGitData.userName);
  const { data, error, isLoading } = useGetUsersApiQuery({currentPage, order, userName});
  const isEmptyList = !isLoading && !data;
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    if ("status" in error) {
      const message =
        "error" in error ? error.error : JSON.stringify(error.data);
      return (
        <div>
          <div>An error has occurred:</div>
          <div>{message}</div>
        </div>
      );
    } else {
      return <div>{error.message}</div>;
    }
  }
  if (isEmptyList) {
    return <p>No users</p>;
  }
  const gitData = data.items;
  const pagesCount: number = Math.ceil(
    ((data.total_count as number) / data.items.length) as number
  );
  const pages: Array<number> = [];
  const togglePage = (currentPage: number): void => setCurrentPage(currentPage);
  return (
    <>
      <SearchBox>
        <FilterData />
        <Search />
      </SearchBox>
      <User data={gitData} />
      <Pages
        pages={pages}
        pagesCount={pagesCount}
        currentPage={currentPage}
        togglePage={togglePage}
      />
    </>
  );
};

export default Main;
