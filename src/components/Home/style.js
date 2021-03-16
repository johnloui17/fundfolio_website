import styled from "styled-components";
import { rem } from "../../utils/remConverter";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;
export const ImageBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #261966;
  img {
    height: 100%;
    object-fit: cover;
  }
`;
export const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: ${rem(150)};
  @media (max-width: 1024px) and (min-width: 768px) {
    padding-left: ${rem(100, "tablet")};
    padding-right: ${rem(100, "tablet")};
  }
  @media (max-width: 767px) {
    padding-left: ${rem(100, "mobile")};
    padding-right: ${rem(100, "mobile")};
    padding-top: ${rem(300, "mobile")};
  }
  @media (min-width: 1920px) {
    padding: ${rem(150, "large")};
  }
  svg {
    fill: #fff;
  }
`;
export const Content = styled.div`
  max-width: ${rem(725)};
  @media (max-width: 1024px) and (min-width: 768px) {
    max-width: ${rem(500, "tablet")};
  }
  @media (max-width: 767px) {
    max-width: 100%;
  }
  h1 {
    font-size: ${rem(80)};
    font-weight: 900;
    line-height: ${rem(90)};
    font-family: "gilroyheavy";
    color: #fff;
    @media (max-width: 1024px) and (min-width: 768px) {
      font-size: ${rem(80, "tablet")};
      line-height: ${rem(90, "tablet")};
    }
    @media (max-width: 767px) {
      font-size: ${rem(80, "mobile")};
      line-height: ${rem(90, "mobile")};
    }
    @media (min-width: 1920px) {
      font-size: ${rem(80, "large")};
    }
  }
  p {
    color: #fff;
    font-size: ${rem(24)};
    font-weight: 500;
    margin: ${rem(20)} 0 ${rem(40)};
    font-family: "gilroymedium";
    @media (max-width: 1024px) and (min-width: 768px) {
      font-size: ${rem(20)};
    }
    @media (max-width: 767px) {
      font-size: ${rem(16)};
      padding-right: ${rem(200, "mobile")};
    }
  }
`;
