import styled from "styled-components";

export const AddressFormContainer = styled.div`
  max-width: 640px;
  height: 372px;
  padding: 40px;
  border-radius: 6px;
  background-color: ${(props) => props.theme["base-card"]};
  margin-top: 15px;
`;

export const FormTitle = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 2rem;
  svg {
    color: ${(props) => props.theme["yellow-dark"]};
  }

  h3 {
    font: ${(props) => props.theme.fontRoboto.textM.regular};
    color: ${(props) => props.theme["base-subtitle"]};
  }

  p {
    font: ${(props) => props.theme.fontRoboto["text-s"]};
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

  div:nth-child(3) {
    display: flex;
    gap: 12px;

    & input:nth-child(1) {
      width: 200px;
    }
    & input:nth-child(2) {
        flex: 1;
    }
  }

  div:nth-child(4) {
    display: flex;
    gap: 12px;
    & input:nth-child(2) {
        flex: 1;
    }
    & input:nth-child(1) {
      width: 200px;
    }
    & input:nth-child(3) {
      width: 60px;
    }
  }

  input {
    background: ${(props) => props.theme["base-input"]};
    border: 1px solid ${(props) => props.theme["base-button"]};
    padding: 12px;
    font: ${(props) => props.theme.fontRoboto["text-s"]};
    color: ${(props) => props.theme["base-text"]};
    outline: none;
    border-radius: 4px;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &:focus {
      border: 1px solid ${(props) => props.theme["yellow-dark"]};
    }
  }
`;

