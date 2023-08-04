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
import Logo from "../../components/Logo/Logo";
interface MainProps {}
const Main: React.FunctionComponent<MainProps> = () => { // главная странциа
  const [currentPage, setCurrentPage] = useState(1); //Состояние для определения текущей страницы
  const order = useSelector((state: RootState) => state.addGitData.order); // получаю из стейта данные для запроса 
  const userName = useSelector((state: RootState) => state.addGitData.userName); // получаю из стейта данные для запроса 
  const { data, error, isLoading } = useGetUsersApiQuery({ // получаю данные из запроса 
    currentPage, // передаю параметры в запрос
    order,
    userName,
  });
  const dispatch = useDispatch()
  const isEmptyList = !isLoading && !data; // обработка загрузки
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

  if (error) { // обработка ошибки
    if ("status" in error) {
      const message =
        "error" in error ? error.error : JSON.stringify(error.data);
      return (
        <ErrorBox>
          <Logo/>
          <div>An error has occurred:</div>
          <div>{message}</div>
        </ErrorBox>
      );
    } else {
      return <div>{error.message}</div>;
    }
  }
  if (isEmptyList) { //обработка пустого списка 
    return <p>No users</p>;
  }
  const gitData = data.items; // массив юзеров
  const pagesCount: number = Math.ceil( // количество страниц
    ((data.total_count as number) / data.items.length) as number
  );
  const pages: Array<number> = []; // массив для отработки функции по созданию кнопок
  const togglePage = (currentPage: number): void => setCurrentPage(currentPage);
  dispatch(addGitData({ gitData: gitData })); //отправляю данные в слайс
  return (
    <><Logo/>
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
