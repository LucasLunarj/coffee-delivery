import styled from "styled-components";

export const SelectedCoffeeBoxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 8px 4px 24px 4px;
  width: 100%;
 

  border-bottom: 1px solid ${props => props.theme["base-button"]};

  img {
    width: 64px;
    height: 64px;
  }
`;

export const AmountSelectionArea = styled.div`
  margin-right: 8px;
  background: ${(props) => props.theme["base-button"]};

  width: 72px;
  height: 32px;

  border-radius: 6px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  gap: 4px;

  & svg {
    color: ${(props) => props.theme.purple};
    cursor: pointer;
    & :hover {
      color: ${(props) => props.theme["purple-dark"]};
    }
  }

  & span {
    background: none;
    color: ${(props) => props.theme["base-title"]};
    font: ${(props) => props.theme.fontRoboto.textM.regular};
    color: ${(props) => props.theme["base-title"]};
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 8px;
  user-select: none;
`;

export const RemoveButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  width: 91px;
  height: 32px;
  border-radius: 6px;

  background-color: ${(props) => props.theme["base-button"]};
  font: ${(props) => props.theme.fontRoboto["text-s"]};
  color: ${(props) => props.theme["base-text"]};
  cursor: pointer;
  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background-color: ${(props) => props.theme["base-hover"]};
  }
`;

export const Title = styled.div`
  width: 279px;
  display: flex;

  justify-content: space-between;

  h4 {
    color: ${(props) => props.theme["base-subtitle"]};
    font: ${(props) => props.theme.fontRoboto.textM.regular};
  }

  strong {
    font: ${(props) => props.theme.fontRoboto.textM.bold};
    color: ${(props) => props.theme["base-text"]};
  }
`;
