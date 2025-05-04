import styled from "styled-components";

export const OrderFinishedContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 1080px;
  margin: 80px auto 0 auto;
`;

export const ContentContainer = styled.div`
  display: flex;
  gap: 102px;
`;

export const Title = styled.div`
  margin-bottom: 40px;
  & h2 {
    font: ${(props) => props.theme.fontBaloo["title-l"]};
    color: ${(props) => props.theme["yellow-dark"]};
  }

  p {
    font: ${(props) => props.theme.fontRoboto.textL.regular};
    color: ${(props) => props.theme["base-title"]};
  }
`;

export const DeliveryInfo = styled.div`
  width: 526px;
  height: 270px;

  border: 1px solid ${(props) => props.theme.yellow};
  border-radius: 6px 36px;

  padding: 40px;

  font: ${(props) => props.theme.fontRoboto.textM.regular};

  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const DeliveryInfoContent = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
  align-items: center;

  strong{
    color: ${props => props.theme["base-text"]};
  }
`;

export type IconVariant = "purple" | "orange" | "yellow";

interface IconBoxVariants {
  variant: IconVariant;
}

const IconVariants = {
  purple: "purple",
  orange: "yellow-dark",
  yellow: "yellow",
 
} as const;

export const Icon = styled.div <IconBoxVariants>`
  width: 32px;
  height: 32px;

  border-radius: 1000px;

  background-color: ${ (props) =>props.theme[IconVariants[props.variant]] };

  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    color: ${(props) => props.theme.white};
  }
`;
