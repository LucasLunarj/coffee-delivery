import styled from "styled-components";

export const CartContainer = styled.div`
max-width: 1080px;
margin: 72px auto;

display: flex;
gap: 32px;

& h2{
    font: ${props => props.theme.fontBaloo["title-xs"]};
}
`