import styled from "styled-components";

export const PaymentMethodContainer = styled.div`
max-width: 640px;
height: 207px;
padding: 40px;

display: flex;
flex-direction: column;
gap: 32px;

background-color: ${props => props.theme["base-card"]};
margin-top: 12px;

border-radius: 6px;


`

export const PaymentTitle = styled.div`
display: flex;
gap: 8px;

svg{
    color: ${props => props.theme.purple};
}

h3{
    font: ${props => props.theme.fontRoboto.textM.regular};
    color: ${props => props.theme["base-subtitle"]};
}

p{
    font: ${props => props.theme.fontRoboto["text-s"]};
    color: ${props => props.theme["base-text"]};
}
`

export const PaymentMethod = styled.div`
display: flex;
gap: 12px;
align-items: center;
width: 100%;
div.active{
        background-color: ${props => props.theme["purple-light"]};
        border: 1px solid ${props => props.theme.purple};
    }


& div{
    display: flex;
    gap: 12px;

    width: 178px;
    padding: 16px;
    border-radius: 6px;
    border: 1px solid transparent;
    font: ${props => props.theme.fontRoboto["button-m"]};
    color: ${props => props.theme["base-text"]};

    background: ${props => props.theme["base-button"]};
    text-transform: uppercase;
    user-select: none;
     &:hover{
        background: ${props => props.theme["base-hover"]};
    }
    svg{
        color: ${props => props.theme.purple};
    }
   
}
`