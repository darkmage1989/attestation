import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { DynamicPageBox, DynamicPageButton, DynamicPageLink, DynamicPageSpan } from "./styles";

interface UserPageProps {}

const UserPage: React.FunctionComponent<UserPageProps> = () => {
  const gitData: any = useSelector(
    (state: RootState) => state.addGitData.gitData
  );
const navigate=useNavigate()
  const params = useParams();
  const userPage = gitData.find((user: any) => user.id === Number(params.id));
  if (!gitData) {
    navigate('/')
  }

  return (
    <DynamicPageBox>
      <DynamicPageSpan>Пользователь: {userPage.login}</DynamicPageSpan>
      <img src={userPage.avatar_url} alt={gitData.avatar_url} />
      <DynamicPageSpan>
        Страничка пользователя: <DynamicPageLink to={userPage.html_url}>{userPage.html_url}</DynamicPageLink> 
      </DynamicPageSpan>
      <DynamicPageSpan>Scrore: {userPage.score}</DynamicPageSpan>
      <DynamicPageButton onClick={()=> navigate('/')}>Вернуться</DynamicPageButton>
    </DynamicPageBox>

  );
};

export default UserPage;
