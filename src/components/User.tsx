import { Idata } from "../constans/requestData";
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
          <Avatar src={userData.avatar_url} alt={userData.avatar_url} />
        </UserBox>
      ))}
    </UsersContainer>
  );
};

export default User;
