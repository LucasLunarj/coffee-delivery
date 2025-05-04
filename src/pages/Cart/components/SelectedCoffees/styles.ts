
import styled from "styled-components";

export const SelectedCoffesContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 448px;
  height: 498px;

  padding: 40px;
  border-radius: 6px 44px;
  margin-top: 15px;
  background: ${(props) => props.theme["base-card"]};
`;

export const SelectedCoffeBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 24px;
  height: 100vh;
`;

export const ValueContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;

`;

export const Value = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font: ${(props) => props.theme.fontRoboto["text-s"]};
    color: ${(props) => props.theme["base-text"]};
  }
  span {
    font: ${(props) => props.theme.fontRoboto.textM.regular};
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const TotalValue = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font: ${(props) => props.theme.fontRoboto.textL.bold};
    color: ${(props) => props.theme["base-subtitle"]};
  }
  span {
    font: ${(props) => props.theme.fontRoboto.textL.bold};
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const StyledLink = styled.div`
  text-decoration: none;
  color: inherit;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;

  margin-top: 24px;

  padding: 12px 8px;

  text-transform: uppercase;
  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  font: ${(props) => props.theme.fontRoboto["button-g"]};
  outline: none;
  border: none;
  &:hover {
    background-color: ${(props) => props.theme["yellow-dark"]};
  }
`;
