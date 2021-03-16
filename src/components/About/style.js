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
`;

export const LeftSection = styled.div`
  max-width: ${rem(615)};
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
  }
`;

export const RightSection = styled.div`
  margin-left: ${rem(150)};
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
  }
  p {
    color: #fff;
    font-size: ${rem(24)};
    font-weight: 500;
    margin-left: ${rem(30)};
    font-family: "gilroybold";
    opacity: 0.6;
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
