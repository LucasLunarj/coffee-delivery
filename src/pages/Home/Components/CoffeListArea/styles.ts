import styled from "styled-components";

export const CoffeeListContainer = styled.div`
align-self: flex-start;
margin-top: 90px;
width: 1080px;
& h2{
    font: ${props => props.theme.fontBaloo["title-l"]};
    color: ${props => props.theme["base-subtitle"]};
    margin-left: 10px;
    margin-bottom: 54px;
}
`

export const CoffeList = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-column-gap: 32px;
grid-row-gap:40px ;
@media (max-width: 642px) {
    grid-template-columns: 1fr;
    grid-row-gap:20px ;
}
`

