import React, { useState } from "react";
import { Audio } from "react-loader-spinner";
import { useGetUsersApiQuery } from "../../services/apis/apis";
import FilterData from "../../components/FilterData/FilterData";
import User from "../../components/User/User";
import Search from "../../components/Search/Search";
import Pages from "../../components/Pages/Pages";
import { ErrorBox, SearchBox } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { LoaderBox } from "./styles"
import { addGitData } from "../../services/slices/gitDataSlice";
interface MainProps {}
const Main: React.FunctionComponent<MainProps> = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const order = useSelector((state: RootState) => state.addGitData.order);
  const userName = useSelector((state: RootState) => state.addGitData.userName);
  const { data, error, isLoading } = useGetUsersApiQuery({
    currentPage,
    order,
    userName,
  });
  const dispatch = useDispatch()
  const isEmptyList = !isLoading && !data;
  if (isLoading) {
    return (
      <LoaderBox>
        <Audio
          height="380"
          width="380"
          color="OrangeRed"
          ariaLabel="three-dots-loading"
        />
      </LoaderBox>
    );
  }

  if (error) {
    if ("status" in error) {
      const message =
        "error" in error ? error.error : JSON.stringify(error.data);
      return (
        <ErrorBox>
          <div>An error has occurred:</div>
          <div>{message}</div>
        </ErrorBox>
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
  dispatch(addGitData({ gitData: gitData }));
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
