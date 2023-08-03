import styled from "styled-components";
export const AppBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
export const PagesButtonBox = styled.div`
  margin-top: 50px;
  display: flex;
  gap: 10px;
`;
export const ButtonsPages = styled.button`
  border-radius: 100%;
  border: none;
  height: 40px;
  width: 40px;
  color: gray;
  cursor: pointer;
`;

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
  text-align: center;
  word-wrap: break-word;
  max-width: 120px;
`;
export const UserBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FilterButton = styled.button`
  text-decoration: none;
  color: #6b5770;
  background-image: linear-gradient(90deg, #fd7f34, #bd155b);
  display: inline-block;
  padding: 8px 20px;
  border: 1px solid;
  position: relative;
  z-index: 0;
  border-radius: 5px;
  box-sizing: border-box;
  margin: 0 15px 15px 0;
  outline: none;
  cursor: pointer;
  user-select: none;
  appearance: none;
  touch-action: manipulation;
  &:hover {
    color: #fff;
    transition: 0.3s;
  }
  &:before {
    content: "";
    position: absolute;
    left: -2px;
    top: -2px;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    background: linear-gradient(90deg, #fd7f34, #bd155b);
    z-index: -2;
    transition: 0.4s;
    border-radius: 5px;
  }
  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #fff, #fff);
    z-index: -1;
    transition: 0.4s;
    border-radius: 4px;
  }
  &:hover:after {
	background: linear-gradient(90deg, #fd7f34, #bd155b);
}
&:active:after {
	background: linear-gradient(90deg, #d96d2d, #760f3a);
}
&:focus-visible {
	box-shadow: 0 0 0 3px #fd7f34;
}
`;
