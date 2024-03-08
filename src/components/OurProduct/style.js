import styled from "styled-components";
import { rem } from "../../utils/remConverter";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  background: #0d0a1b;
  padding: ${rem(120)} ${rem(150)};
  @media (max-width: 1024px) and (min-width: 768px) {
    padding: ${rem(20)} ${rem(150)};
  }
  @media (max-width: 767px) {
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 160px;
    padding-bottom: 0px;
  }
  @media (min-width: 1280px) {
    padding: ${(props) =>
      props.isTablet ? `${rem(20)} ${rem(150)}` : `${rem(150, "medium")}`};
  }
  @media (min-width: 1920px) {
    padding: ${rem(120, "large")} ${rem(150, "large")};
  }
  @media (min-width: 2560px) {
    padding: ${rem(120, "extraLarge")} ${rem(150, "extraLarge")};
  }
  @media (min-width: 3840px) {
    padding: ${rem(120, "xxl")} ${rem(150, "xxl")};
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  flex-direction: ${(props) => (props.isTablet ? "column" : "row")};
  @media (max-width: 1024px) and (min-width: 768px) {
    justify-content: center;
    flex-direction: column;
  }
  @media (max-width: 767px) {
    justify-content: center;
  }
`;
export const Heading = styled.div`
  color: rgba(256, 256, 256, 0.2);
  font-size: ${rem(38)};
  font-weight:900;
  letter-spacing: 0.2px;
  margin-bottom: ${rem(40)};
  font-family: "Satoshi-Variable";
  @media (max-width: 767px) {
    font-size: ${rem(50, "mobile")};
  }
  @media (min-width: 1280px) {
    font-size: ${rem(38, "medium")};
    margin-bottom: ${rem(40, "medium")};
  }
  @media (min-width: 1920px) {
    font-size: ${rem(38, "large")};
    margin-bottom: ${rem(40, "large")};
  }
  @media (min-width: 2560px) {
    font-size: ${rem(38, "extraLarge")};
    margin-bottom: ${rem(40, "extraLarge")};
  }
  @media (min-width: 3840px) {
    font-size: ${rem(38, "xxl")};
    margin-bottom: ${rem(40, "xxl")};
  }
`;
