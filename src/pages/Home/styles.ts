import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 94px auto 92px  auto ;
  max-width: 1080px;
`;

export const CoffeeInfoContainer = styled.div`
  display: flex;

  & img {
    width: 476px;
    height: 360px;

    @media (max-width: 720px) {
      display: none;
    }
  }
`;
export const CoffeeInfo = styled.div`
  max-width: 36.75rem;
  & h1 {
    font: ${(props) => props.theme.fontBaloo["title-xl"]};
    color: ${(props) => props.theme["base-title"]};
  }

  & p {
    font: ${(props) => props.theme.fontRoboto.textL.regular};
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 31px;
  grid-column-gap: 30px;
  margin-top: 68px;

  & div {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  & p {
    font: ${(props) => props.theme.fontRoboto.textM.regular};
    color: ${(props) => props.theme["base-text"]};
  }
`;

export type IconVariant = "orange" | "yellow" | "black" | "purple";

interface IconBoxVariants {
  variant: IconVariant;
}

const IconVariants = {
  orange: "yellow-dark",
  yellow: "yellow",
  black: "base-text",
  purple: "purple",
} as const;

export const IconBoxInfo = styled.div<IconBoxVariants>`
  background-color: ${ (props) =>props.theme[IconVariants[props.variant]] };

  width: 32px;
  height: 32px;

  border-radius: 999px;

  display: flex;
  justify-content: center;
  align-items: center;
  & svg {
    color: ${(props) => props.theme.white};
  }
`;
