import styled from "styled-components";
import { topicStyles } from "../../lib/topic";
import * as SH from "../../styles/shared";


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


export const CategoriesThemeAnd = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
  opacity: 1 !important;
  background-color: ${({ $topicColor }) => topicStyles[$topicColor]?.backgroundColor };
  color: ${({ $topicColor }) => topicStyles[$topicColor]?.color };

& p {
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
}
`

export const PopBrowseStatusStatus = styled.div`
 margin-bottom: 11px;
`
export const StatusPSubttl = styled.p`
  margin-bottom: 14px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;

`
export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`

export const StatusTheme = styled.button`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background: ${props => props.$highlighted || props.$isChecked ? '#94a6be': ' #FFFFFF'};
  color: ${props => props.$highlighted || props.$isChecked ? '#FFFFFF': '#94a6be'};
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
 
 & p {
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
 }
`
export const PopBrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`
export const PopBrowseFormFormBrowse = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`
export const FormBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`
export const FormBrowseArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #EAEEF6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;

&::-moz-placeholder {
  font-weight: 400;
  font-size: 14px;
  line-height: 1px;
  color: #94A6BE;
  letter-spacing: -0.14px;
}
&::placeholder {
  font-weight: 400;
  font-size: 14px;
  line-height: 1px;
  color: #94A6BE;
  letter-spacing: -0.14px;
}
`
export const Subttl = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`

export const DivCalendar = styled.div`
  pointer-events: ${props => props.$divv ?'none': 'auto'};
`
export const PopBrowseBtnBrowse = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
`

export const BtnGroup = styled.div`
margin-right: 8px;
`
export const BtnBrowseButton = styled.button`
  height: 30px;
  margin-right: 7px;
  margin-bottom: 10px;
  padding: 0 14px;
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565EEF);
  outline: none;
  background: transparent;
  color: #565EEF;
  ${SH.Hover03}
`
export const BtnBrowseButtonclose = styled.button`
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
  border-radius: 4px;
  background: #565EEF;
  border: none;
  outline: none;
  color: #FFFFFF;
  ${SH.Hover01}
  & p {
    color: #FFFFFF;
  }
`