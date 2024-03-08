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
  @media (max-width: 767px) {
    background: #140f2a;
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

    padding-left: ${rem(60, "tablet")};
    padding-top: ${rem(200, "tablet")};
    padding-right: ${rem(40, "tablet")};
    display: flex;
    justify-content: start;
    align-items: start;
  }
  @media (min-width: 360px) and (max-width:767px) {
    padding-left: ${rem(80, "mobile")};
    padding-right: ${rem(80, "mobile")};
    padding-top: ${rem(150, "mobile")};
  }
  @media (min-width: 321px) and (max-width: 767px) {
    padding-left: ${rem(45, "mobile")};
    padding-right: ${rem(45, "mobile")};
    padding-top: ${rem(250, "mobile")};
  }
  @media (min-width: 1280px) {
    padding: ${rem(150, "medium")};
    padding-top: ${rem(0)};
  }
  @media (min-width: 1920px) {
    padding: ${rem(150, "large")};
  }
  @media (min-width: 2560px) {
    padding: ${rem(150, "extraLarge")};
    padding-top: ${rem(0)};
  }
  @media (min-width: 3840px) {
    padding: ${rem(150, "xxl")};
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
  @media (min-width: 1280px) {
    max-width: ${rem(725, "medium")};
  }
  @media (min-width: 1920px) {
    max-width: ${rem(725, "large")};
  }
  @media (min-width: 2560px) {
    max-width: ${rem(725, "extraLarge")};
  }
  @media (min-width: 3840px) {
    max-width: ${rem(725, "xxl")};
  }
  h1 {
    white-space: nowrap;
    font-size: ${rem(80)};
    font-weight: 900;
    line-height: ${rem(90)};
    font-family: "Satoshi-Variable";
    color: #fff;
    .noBold {
      font-weight: 500;
    }
    @media (max-width: 1024px) and (min-width: 768px) {
      font-size: ${rem(80, "tablet")};
      line-height: ${rem(90, "tablet")};
    }
    @media (max-width: 320px) {
      font-size: ${rem(65, "mobile")};
      line-height: 1.15;
    }
    @media (min-width: 321px) and (max-width: 767px) {
      font-size: ${rem(75, "mobile")};
      line-height: 1.15;
    }
    @media (min-width: 1280px) {
      font-size: ${rem(80, "medium")};
      line-height: ${rem(90, "medium")};
    }
    @media (min-width: 1920px) {
      font-size: ${rem(80, "large")};
      line-height: ${rem(90, "large")};
    }
    @media (min-width: 2560px) {
      font-size: ${rem(80, "extraLarge")};
      line-height: ${rem(90, "extraLarge")};
    }
    @media (min-width: 3840px) {
      font-size: ${rem(80, "xxl")};
      line-height: ${rem(90, "xxl")};
    }
  }
  p {
    color: #fff;
    font-size: ${rem(24)};
    font-weight: 500;
    margin: ${rem(20)} 0 ${rem(40)};
    font-family: "Satoshi-Variable";
    @media (max-width: 1024px) and (min-width: 768px) {
      font-size: ${rem(20)};
    }
    @media (max-width: 320px) {
      font-size: ${rem(14)};
      margin: ${rem(12)} 0 ${rem(24)};
      padding-right: ${rem(200, "mobile")};
    }
    @media (min-width: 321px) and (max-width: 767px) {
      font-size: ${rem(16)};
      margin: ${rem(12)} 0 ${rem(24)};
      padding-right: ${rem(200, "mobile")};
    }
    @media (min-width: 1280px) {
      font-size: ${rem(24, "medium")};
    }
    @media (min-width: 1920px) {
      font-size: ${rem(24, "large")};
    }
    @media (min-width: 2560px) {
      font-size: ${rem(24, "extraLarge")};
    }
    @media (min-width: 3840px) {
      font-size: ${rem(24, "xxl")};
    }
  }
`;
export const BottomLogoContainer = styled.div`
  position: absolute;
  bottom: 0;
  padding: ${rem(80)} ${rem(150)};
  @media (max-width: 1024px) and (min-width: 768px) {
    padding: ${rem(40, "tablet")} ${rem(90, "tablet")};
  }
  @media (max-width: 767px) {
    padding: ${rem(40, "mobile")} ${rem(45, "mobile")};
  }
  @media (min-width: 1280px) {
    padding: ${rem(80, "medium")} ${rem(150, "medium")};
  }
  @media (min-width: 1920px) {
    padding: ${rem(80, "large")} ${rem(150, "large")};
  }
  @media (min-width: 2560px) {
    padding: ${rem(80, "extraLarge")} ${rem(150, "extraLarge")};
  }
  @media (min-width: 3840px) {
    padding: ${rem(80, "xxl")} ${rem(150, "xxl")};
  }
  p {
    font-style: normal;
    font-weight: 100;
    line-height: normal;
    color: #fff;
    font-size: ${rem(16)};
    padding-top: 10px;
    opacity: 60%;
    font-family: "Satoshi-Variable";
    @media (max-width: 767px) {
      font-size: ${rem(12)};
      padding-bottom: 6px;
    }
    @media (min-width: 1280px) {
      font-size: ${rem(16, "medium")};
      padding-bottom: ${rem(10, "medium")};
    }
    @media (min-width: 1920px) {
      font-size: ${rem(16, "large")};
      padding-bottom: ${rem(10, "large")};
    }
    @media (min-width: 2560px) {
      font-size: ${rem(16, "extraLarge")};
      padding-bottom: ${rem(10, "extraLarge")};
    }
    @media (min-width: 3840px) {
      font-size: ${rem(16, "xxl")};
      padding-bottom: ${rem(10, "xxl")};
    }
  }
`;
