import styled from "styled-components";
export const AppBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
export const SearchBox = styled.div`
  margin-top: 150px;
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const UsersContainer = styled.div`
  max-width: 50%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  justify-content:center;
  align-items: flex-end;
`;
export const InputBox = styled.div`
  display: flex;
  gap: 10px;
`;
export const Avatar = styled.img`
  height: 120px;
  width: 120px;
  border-radius: 100%;
`;
export const UserName = styled.span`
text-align:center;
  word-wrap: break-word;
  max-width: 120px;
`;
export const UserBox = styled.div`
  display: flex;
  flex-direction: column;
`;
