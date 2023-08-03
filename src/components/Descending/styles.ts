import styled from "styled-components";
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
