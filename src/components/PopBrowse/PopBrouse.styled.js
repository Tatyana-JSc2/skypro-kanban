import styled from "styled-components";


export const PopBrowse = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
  `;

export const PopBrowseContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  `;
export const PopBrowseBblock = styled.div`
    display: block;
    margin: 0 auto;
    background-color: #FFFFFF;
    max-width: 630px;
    width: 100%;
    padding: 40px 30px 38px;
    border-radius: 10px;
    border: 0.7px solid #D4DBE5;
    position: relative;
  `;

export const PopBrowseContent = styled.div`
    display: block;
    text-align: left;
  `;


export const PopBrowseTopBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 18px;
  `;

export const PopBrowseTtl = styled.h3`
    color: #000;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
  `;

  
export const PopBrowseContentAnd = styled.div`
display: block;
text-align: left;

& .categories__theme {
opacity: 1;
}

& .theme-top {
display: block;
}

& ._orange {
background-color: "#ffe4c2";
color: "#ff6d00";
}

& ._active-category {
opacity: 1 !important;
}
`;


export const Orange = styled.p`
background-color: "#ffe4c2";
color: "#ff6d00";
`;

export const PopBrowseStatusStatus = styled.div`
& .status {
  margin-bottom: 11px;
}
`
export const StatusPSubttl = styled.p`
  margin-bottom: 14px;

&.subttl {
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
}
`
export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;

`