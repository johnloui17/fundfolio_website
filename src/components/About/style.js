import styled from "styled-components";
import { rem } from "../../utils/remConverter";

export const Container = styled.div`
  width: 100vw;
  background: #0d0a1b;
  padding: ${rem(137)} ${rem(150)};
  @media (max-width: 1024px) and (min-width: 768px) {
    padding-left: ${rem(200, "tablet")};
    padding-right: ${rem(200, "tablet")};
    padding-top: ${rem(150, "mobile")};
  }
  @media (max-width: 767px) {
    padding-bottom: 0;
    padding-left: ${rem(100, "mobile")};
    padding-right: ${rem(100, "mobile")};
    padding-top: ${rem(150, "mobile")};
  }
  @media (min-width: 1920px) {
    padding: ${rem(137, "large")} ${rem(150, "large")};
  }
  @media (min-width: 2560px) {
    padding: ${rem(137, "extraLarge")} ${rem(150, "extraLarge")};
  }
  @media (min-width: 3840px) {
    padding: ${rem(137, "xxl")} ${rem(150, "xxl")};
  }
`;
export const Row = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 1024px) and (min-width: 768px) {
    flex-direction: column;
  }
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Heading = styled.div`
  color: rgba(256, 256, 256, 0.2);
  font-size: ${rem(38)};
  font-weight: bold;
  letter-spacing: 0.2px;
  margin-bottom: ${rem(40)};
  font-family: "gilroybold";
  @media (max-width: 767px) {
    margin-bottom: ${rem(40, "mobile")};
    font-size: ${rem(50, "mobile")};
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

export const LeftSection = styled.div`
  max-width: ${rem(615)};
  @media (min-width: 1920px) {
    max-width: ${rem(615, "large")};
  }
  @media (min-width: 2560px) {
    max-width: ${rem(615, "extraLarge")};
  }
  @media (min-width: 3840px) {
    max-width: ${rem(615, "xxl")};
  }
  h1 {
    color: #fff;
    font-size: ${rem(60)};
    font-weight: bold;
    line-height: 1.17;
    font-family: "gilroybold";

    @media (max-width: 1024px) and (min-width: 768px) {
      font-size: ${rem(60, "tablet")};
    }
    @media (max-width: 767px) {
      font-size: ${rem(65, "mobile")};
    }
    @media (min-width: 1920px) {
      font-size: ${rem(60, "large")};
    }
    @media (min-width: 2560px) {
      font-size: ${rem(60, "extraLarge")};
    }
    @media (min-width: 3840px) {
      font-size: ${rem(60, "xxl")};
    }
  }
  p {
    color: #70707c;
    line-height: 1.25;
    font-size: ${rem(24)};
    font-weight: 500;
    margin-top: 20px;
    font-family: "gilroymedium";
    @media (max-width: 767px) {
      font-size: ${rem(40, "mobile")};
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

export const RightSection = styled.div`
  margin-left: ${rem(150)};
  @media (min-width: 1920px) {
    margin-left: ${rem(150, "large")};
  }
  @media (min-width: 2560px) {
    margin-left: ${rem(150, "extraLarge")};
  }
  @media (min-width: 3840px) {
    margin-left: ${rem(150, "xxl")};
  }
  position: relative;
  .pattern {
    position: absolute;
  }
  h2 {
    position: relative;
    font-size: ${rem(100)};
    background: -webkit-linear-gradient(left, #40eaf5, #504dff);
    background: -o-linear-gradient(right, #40eaf5, #504dff);
    background: -moz-linear-gradient(right, #40eaf5, #504dff);
    background: linear-gradient(to right, #40eaf5, #504dff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-top: ${rem(40)};
    margin-left: ${rem(30)};
    font-family: "gilroybold";
    @media (max-width: 767px) {
      font-size: ${rem(150, "mobile")};
      margin-top: ${rem(60)};
    }
    @media (min-width: 1920px) {
      font-size: ${rem(100, "large")};
      margin-top: ${rem(40, "large")};
      margin-left: ${rem(30, "large")};
    }
    @media (min-width: 2560px) {
      font-size: ${rem(24, "extraLarge")};
      margin-top: ${rem(40, "extraLarge")};
      margin-left: ${rem(30, "extraLarge")};
    }
    @media (min-width: 3840px) {
      font-size: ${rem(100, "xxl")};
      margin-top: ${rem(40, "xxl")};
      margin-left: ${rem(30, "xxl")};
    }
  }
  p {
    color: #fff;
    font-size: ${rem(24)};
    font-weight: 500;
    margin-left: ${rem(30)};
    font-family: "gilroybold";
    opacity: 0.6;
    @media (min-width: 1920px) {
      font-size: ${rem(24, "large")};
      margin-left: ${rem(30, "large")};
    }
    @media (min-width: 2560px) {
      font-size: ${rem(24, "extraLarge")};
      margin-left: ${rem(30, "extraLarge")};
    }
    @media (min-width: 3840px) {
      font-size: ${rem(24, "xxl")};
      margin-left: ${rem(30, "xxl")};
    }
  }

  @media (max-width: 1024px) and (min-width: 768px) {
    margin-left: ${rem(0, "tablet")};
    margin-top: ${rem(80, "tablet")};
  }
  @media (max-width: 767px) {
    margin-left: ${rem(0, "mobile")};
    margin-top: ${rem(80, "mobile")};
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  @media (max-width: 767px) {
    width: ${rem(200, "mobile")};
  }
`;
