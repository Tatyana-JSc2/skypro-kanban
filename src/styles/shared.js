import { css } from "styled-components";
import styled from "styled-components";

export const Hover01 = css`
&:hover {
  background-color: #33399b;
}
`
export const Hover02 = css`
&:hover {
  color: #33399b;
}
&:hover::after {
  border-left-color: #33399b;
  border-bottom-color: #33399b;
}
`
export const Hover03 = css`
&:hover {
  background-color: #33399b;
  color: #FFFFFF;
}
&:hover a {
  color: #FFFFFF;
}
`
export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`
export const Wrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #F1F1F1;
`