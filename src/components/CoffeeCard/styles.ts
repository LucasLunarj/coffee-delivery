import styled from "styled-components";

export const CardContainer = styled.div`
  width: 256px;
  height: 300px;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px 36px;
  position: relative;

  display: flex;
  flex-direction: column;

  padding: 0 20px;

  & img {
    width: 120px;
    height: 120px;
    position: absolute;
    align-self: center;
    top: -20px;
    user-select: none;
  }
`;
export const ContentContainer = styled.div`
  margin-top: 108px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & span {
    text-transform: uppercase;
    background-color: ${(props) => props.theme["yellow-light"]};
    color: ${(props) => props.theme["yellow-dark"]};
    font: ${(props) => props.theme.fontRoboto["tag-components"]};

    border-radius: 100px;
    padding: 4px 8px;
    margin-bottom: 20px;
    user-select: none;
  }

  & h4 {
    font: ${(props) => props.theme.fontBaloo["title-s"]};
    color: ${(props) => props.theme["base-subtitle"]};
    margin: 20px 0 6px 0;
  }

  & p {
    font: ${(props) => props.theme.fontRoboto["text-s"]};
    color: ${(props) => props.theme["base-label"]};
    text-align: center;
    margin-bottom: 33px;
  }
`;

export const PriceAndSelectAmountArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Price = styled.div`
color: ${(props) => props.theme["base-text"]};
font: ${(props) => props.theme.fontRoboto["text-s"]};

& strong{
    font: ${(props) => props.theme.fontBaloo["title-m"]};
    margin-right: 23px;
}
`

export const AmountSelectionArea = styled.div`

margin-right: 8px;
background: ${props => props.theme["base-button"]};

width: 72px;
height: 38px;

border-radius: 6px;

display: flex;
justify-content: center;
align-items: center;

& svg{
    color: ${props => props.theme.purple};
    cursor: pointer;
   & :hover{
    color: ${props => props.theme["purple-dark"]};
   }
}

& span:nth-child(2){
    background: none;
    color: ${props => props.theme["base-title"]};
    padding: none;
    font: ${props => props.theme.fontRoboto.textM.regular};
    color: ${props => props.theme["base-title"]};
    margin: auto;
}
`
export const ShoppingCartIcon = styled.div`
width:38px;
height: 38px;

background-color: ${props => props.theme["purple-dark"]};
border-radius: 6px;

display: flex;
justify-content: center;
align-items: center;

cursor: pointer;

&:hover{
  background-color: ${props => props.theme.purple};
}

& svg{
  color: ${props => props.theme.white};
}
`
