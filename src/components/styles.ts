import styled from "styled-components";
export const UsersContainer = styled.div`
  margin-top: 50px;
  max-width: 50%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: flex-end;
`;
export const Avatar = styled.img`
  height: 120px;
  width: 120px;
  border-radius: 100%;
`;
export const UserName = styled.span`
  text-align: center;
  word-wrap: break-word;
  max-width: 120px;
`;
export const UserBox = styled.div`
  display: flex;
  flex-direction: column;
`;

