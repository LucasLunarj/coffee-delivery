import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1080px;
  margin: 32px auto 32px auto;
`;

export const CartMenuContainer = styled.div`
display: flex;
gap: 12px;
`


export const LocationSelect = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 8px;
  border-radius: 6px;

  background-color: ${(props) => props.theme["purple-light"]};

  & svg {
    color: ${(props) => props.theme.purple};
  }
  & p {
    font: ${(props) => props.theme.fontRoboto["text-s"]};
    color: ${(props) => props.theme["purple-dark"]};
  }
`;


export const CartButton = styled.div`
width: 38px;
height: 38px;
position: relative;
background-color: ${prosps => prosps.theme["yellow-light"]};
padding: 8px;
border-radius: 6px;

display: flex;
justify-content: center;
align-items: center;
& svg{
    color: ${props => props.theme["yellow-dark"]};
}
`

export const ItensInTheCartAmount = styled.div`
width: 20px;
height: 20px;

background-color: ${prosps => prosps.theme["yellow-dark"]};
font: ${props => props.theme.fontRoboto["text-s"]};
color: ${props => props.theme.white};

position: absolute;
left: 26.35px;
bottom: 26.35px;

border-radius: 1000px;

display: flex;
justify-content: center;
align-items: center;
`