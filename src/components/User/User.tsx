import { Link } from "react-router-dom";
import { Idata } from "../../constans/requestData";
import { UserBox, UsersContainer, Avatar, UserName } from "./styles";
interface UserProps {
  data: Array<Idata>;
}

const User: React.FunctionComponent<UserProps> = ({ data }) => {
  return (
    <UsersContainer>
      {data.map((userData) => (
        <UserBox key={userData.id}>
          <UserName>{userData.login}</UserName>
          <Link to={`userpage/${userData.id}`}>
            <Avatar src={userData.avatar_url} alt={userData.avatar_url} />
          </Link>
        </UserBox>
      ))}
    </UsersContainer>
  );
};

export default User;
