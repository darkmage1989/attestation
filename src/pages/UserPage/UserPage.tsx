import { useParams } from "react-router-dom";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";

interface UserPageProps {}

const UserPage: React.FunctionComponent<UserPageProps> = () => {
  const gitData: any = useSelector(
    (state: RootState) => state.addGitData.gitData
  );
  
  const params = useParams();
  const userPage = gitData.find((id:any) => id === Number(params.id));
  return (
    <main>
      <div>
        <span>{userPage.login}</span>
        <img src={userPage.avatar_url} alt={gitData.avatar_url} />
        <span>{userPage.html_url}</span>
        <span>{userPage.score}</span>
      </div>
    </main>
  );
};

export default UserPage;
