import styled from "styled-components";
import { rem } from "../../utils/remConverter";

export const Container = styled.div`
  width: 100vw;
  position: relative;
  padding: ${rem(125)} ${rem(155)};
  background: #0d0a1b;
  @media (max-width: 767px) {
    padding: ${rem(20)} ${rem(50)};
    padding-top: 160px;
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
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
export const SocialRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Column = styled.div`
  display: ${(props)=>props.iFrame ? "none" :"flex"};
  margin-right: 130px;
  flex-direction: column;
  align-items: flex-start;
  .desc {
    max-width: ${rem(270)};
    color: #fff;
    font-size: ${rem(20)};
    font-weight: 500;
    margin: ${rem(24)} 0;
    opacity: 0.6;
    @media (min-width: 1920px) {
      max-width: ${rem(264, "large")};
      font-size: ${rem(20, "large")};
      margin: ${rem(24, "large")} 0 ;
    }
    @media (min-width: 2560px) {
      max-width: ${rem(264, "extraLarge")};
      font-size: ${rem(20, "extraLarge")};
      margin: ${rem(24, "extraLarge")} 0 ;
    }
    @media (min-width: 3840px) {
      max-width: ${rem(264, "xxl")};
      font-size: ${rem(20, "xxl")};
      margin: ${rem(24, "xxl")} 0 ;
    }
  }
  a {
    text-decoration: none;
  }
  @media (max-width: 767px) {
    padding-bottom: 60px;
  }
  @media (min-width: 1920px) {
    margin-right: ${rem(130, "large")};
  }
  @media (min-width: 2560px) {
    margin-right: ${rem(130, "extraLarge")};
  }
  @media (min-width: 3840px) {
    margin-right: ${rem(130, "xxl")};
  }
`;

export const SocialMediaIcons = styled.div``;

export const SocialIcon = styled.a`
  cursor: pointer;
  margin-right: 16px;

  @media (min-width: 1920px) {
    margin-right: ${rem(16, "large")};
  }
  @media (min-width: 2560px) {
    margin-right: ${rem(16, "extraLarge")};
  }
  @media (min-width: 3840px) {
    margin-right: ${rem(16, "xxl")};
  }
`;
export const SubHeading = styled.div`
  color: #56535f;
  opacity: 0.6;
  font-size: ${rem(24)};
  font-weight: bold;
  margin-bottom: ${rem(16)};

  @media (min-width: 1920px) {
    font-size: ${rem(24, "large")};
    margin-bottom: ${rem(16, "large")};
  }
  @media (min-width: 2560px) {
    font-size: ${rem(24, "extraLarge")};
    margin-bottom: ${rem(16, "extraLarge")};
  }
  @media (min-width: 3840px) {
    font-size: ${rem(24, "xxl")};
    margin-bottom: ${rem(16, "xxl")};
  }
`;
export const FooterLink = styled.a`
  text-decorations: none;
  color: #fff;
  opacity: 0.8;
  font-size: ${rem(20)};
  font-weight: 500;
  line-height: 1.3;
  cursor: pointer;
  margin-bottom: ${rem(12)};
  @media (min-width: 1920px) {
    font-size: ${rem(20, "large")};
    margin-bottom: ${rem(12, "large")};
  }
  @media (min-width: 2560px) {
    font-size: ${rem(20, "extraLarge")};
    margin-bottom: ${rem(12, "extraLarge")};
  }
  @media (min-width: 3840px) {
    font-size: ${rem(20, "xxl")};
    margin-bottom: ${rem(12, "xxl")};
  }
`;
export const Copyright = styled.div`
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: ${rem(18)};
  margin-top: ${rem(120)};
  align-items: center;
  display: flex;
  justify-content: center;
  svg {
    margin: 0 5px;

  @media (min-width: 1920px) {
    margin: 0 ${rem(5, "large")};
  }
  @media (min-width: 2560px) {
    margin: 0 ${rem(5, "extraLarge")};
  }
  @media (min-width: 3840px) {
    margin: 0 ${rem(5, "xxl")};
  }
  }
  @media (max-width: 767px) {
    margin-top: ${rem(30)};
  }
  @media (min-width: 1920px) {
    font-size: ${rem(18, "large")};
    margin-top: ${rem(120, "large")};
  }
  @media (min-width: 2560px) {
    font-size: ${rem(18, "extraLarge")};
    margin-top: ${rem(120, "extraLarge")};
  }
  @media (min-width: 3840px) {
    font-size: ${rem(18, "xxl")};
    margin-top: ${rem(120, "xxl")};
  }
`;
