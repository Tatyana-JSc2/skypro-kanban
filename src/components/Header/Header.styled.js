import styled from "styled-components";
import { Hover01 } from "../../styles/shared";

export const Header = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: #FFFFFF;

`;
export const HeaderBtn = styled.button`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: #565EEF;
  color: #FFFFFF;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;

  & a {
  color: #FFFFFF;
}
${Hover01}

`;