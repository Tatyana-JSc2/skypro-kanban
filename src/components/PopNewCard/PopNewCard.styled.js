import styled from "styled-components";
import * as SH from "../../styles/shared";


export const PopNewCard = styled.div`
  display: block;
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;
`

export const PopNewCardContainer = styled.div`
 width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`

export const PopNewCardBlock = styled.div`
 display: block;
  margin: 0 auto;
  background-color: #FFFFFF;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: 0.7px solid #D4DBE5;
  position: relative;
`

export const PopNewCardContent = styled.div`
    display: block;
    text-align: left;
`
export const PopNewCardTtl = styled.div`
    color: #000;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    margin-bottom: 20px;
  `
export const PopNewCardClose = styled.p`
    position: absolute;
    top: 20px;
    right: 30px;
    color: #94A6BE;
    cursor: pointer;
  
  &:hover {
    color: #000000;
  }
  `
export const PopNewCardWrap = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  `
export const PopNewCardFormFormNew = styled.form`
    max-width: 370px;
    width: 100%;
    display: block;
    margin-bottom: 20px;
  `
export const FormNewBlock = styled.div`
    display: flex;
    flex-direction: column;
  `

export const Subttl = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`
export const FormNewInput = styled.input`
    width: 100%;
    outline: none;
    padding: 14px;
    background: transparent;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    border-radius: 8px;
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
    margin: 20px 0;

  & ::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94A6BE;
    letter-spacing: -0.14px;
  }
  &::placeholder{
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94A6BE;
    letter-spacing: -0.14px;
  }
  `
export const FormNewArea = styled.textarea`
      width: 100%;
      outline: none;
      padding: 14px;
      background: transparent;
      border: 0.7px solid rgba(148, 166, 190, 0.4);
      border-radius: 8px;
      font-size: 14px;
      line-height: 1;
      letter-spacing: -0.14px;
      max-width: 370px;
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

export const PopNewCardCategoriesCategories = styled.div`
  margin-bottom: 20px;
`

export const CategoriesPSubttl = styled.p`
  margin-bottom: 14px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`
export const CategoriesThemes = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
`
export const CategoriesTheme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: ${props => props.$isActiv ? '1 !important' : ' 0.4'};
 // opacity:0.4 1 !important;

  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;

`
export const CategoriesThemeOrange = styled(CategoriesTheme)`
background-color: #FFE4C2;
  color: #FF6D00;
`
export const CategoriesThemeGreen = styled(CategoriesTheme)`
background-color: #B4FDD1;
  color: #06B16E;
`
export const CategoriesThemePurple = styled(CategoriesTheme)`
background-color: #E9D4FF;
  color: #9A48F1;
`

export const FormNewCreate = styled.button`
  width: 132px;
  height: 30px;
  background-color: #565EEF;
  border-radius: 4px;
  border: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #FFFFFF;
  float: right;
  ${SH.Hover01}
`
