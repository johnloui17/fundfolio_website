import styled from "styled-components";
import { rem } from "../../utils/remConverter";
export const Container = styled.div`
  width: 100vw;
  background: #0d0a1b;
  padding: ${rem(150)};
  @media (max-width: 1024px) and (min-width: 768px) {
    padding: ${rem(100)};
  }
  @media (max-width: 767px) {
    padding-left: 30px;
    padding-right: 30px;
    padding-top:160px;
    padding-bottom:0px;
  }
  // @media (min-width: 1920px) {
  //   padding: ${rem(150,"large")};
  // }
`;
export const HoverNav = styled.div`
  min-width: ${rem(350)};
  display: flex;
  flex-direction: column;
  @media (max-width: 1024px) and (min-width: 768px) {
    flex-direction: column;
  }
  @media (max-width: 767px) {
    min-width: 100%;
    flex-direction: column;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    @media (max-width: 1024px) and (min-width: 768px) {
      flex-direction: row;
    }
    @media (max-width: 767px) {
      flex-direction: row;
    }
  }
  li {
    color: #fff;
    font-size: ${rem(60)};
    letter-spacing: 0.2px;
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: ${rem(20)};
    transition: all 0.3s ease;
    font-family: "gilroybold";
    span {
      font-size: ${rem(20)};
      font-weight: 300;
      margin-right: ${rem(26)};
      @media (max-width: 1024px) and (min-width: 768px) {
        display: none;
      }
      @media (max-width: 767px) {
        display: none;
      }
    }
    @media (max-width: 1024px) and (min-width: 768px) {
      font-size: ${rem(60, "tablet")};
      margin: 0;
      margin-right: ${rem(20, "tablet")};
      padding-right: ${rem(60, "tablet")};
    }
    @media (max-width: 767px) {
      font-size: ${rem(50, "mobile")};
      margin: ${rem(20, "tablet")};
    }
  }
  li.active {
    background: -webkit-linear-gradient(left, #40eaf5, #504dff);
    background: -o-linear-gradient(right, #40eaf5, #504dff);
    background: -moz-linear-gradient(right, #40eaf5, #504dff);
    background: linear-gradient(to right, #40eaf5, #504dff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: ${rem(60)};
    font-family: "gilroybold";
    @media (max-width: 1024px) and (min-width: 768px) {
      font-size: ${rem(60, "tablet")};
      padding-right: ${rem(60, "tablet")};
    }
    @media (max-width: 767px) {
      font-size: ${rem(50, "mobile")};
      margin: ${rem(20, "mobile")};
    }
  }
`;
export const Row = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  @media (max-width: 1024px) and (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
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
  @media (max-width: 1024px) and (min-width: 768px) {
    font-size: ${rem(50, "tablet")};
    font-family: "gilroybold";
  }
  @media (max-width: 767px) {
    font-family: "gilroybold";
    margin-bottom: ${rem(20)};
    font-size: ${rem(50, "mobile")};
    padding-left: 50px;
    padding-right: 50px;
  }
`;
export const DisplayCard = styled.div`
  width: ${rem(754)};
  height: ${rem(600)};
  @media (max-width: 1024px) and (min-width: 768px) {
    width: ${rem(700, "tablet")};
    height: ${rem(500, "tablet")};
  }
  @media (max-width: 767px) {
    width: ${rem(615, "mobile")};
    height: ${rem(650, "mobile")};
  }
  border-radius: ${rem(16)};
  background-image: linear-gradient(to top, #201e2d, #120f20);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: ${rem(30)};
  p {
    transition: all 0.5s ease-in;
    opacity: 0;
    color: #fff;
    width: ${rem(436)};
    position: absolute;
    top: ${rem(190)};
    left: ${rem(196)};
    font-size: ${rem(30)};
    line-height: 1.2;
    font-weight: 500;
    font-family: "gilroyregular";
    @media (max-width: 1024px) and (min-width: 768px) {
      width: ${rem(460, "tablet")};
      top: ${rem(150, "tablet")};
      left: ${rem(200, "tablet")};
      font-size: ${rem(30, "tablet")};
      color: #86868c;
      font-weight: 500;
    }
    @media (max-width: 767px) {
      width: ${rem(500, "mobile")};
      top: ${rem(110, "mobile")};
      left: ${rem(50, "mobile")};
      font-size: ${rem(45, "mobile")};
      color: #86868c;
      font-weight: 500;
    }
  }
  p.active {
    animation-delay: 0.5s;
    opacity: 1;
  }
`;
export const BackgroundIcon = styled.div`
  position: absolute;
  z-index: 0;
  top: ${rem(60)};
  left: ${rem(100)};
  @media (max-width: 1024px) and (min-width: 768px) {
    width: ${rem(180, "tablet")};
    top: ${rem(130, "tablet")};
    left: ${rem(20, "tablet")};
  }
  @media (max-width: 767px) {
    width: ${rem(120, "mobile")};
    top: ${rem(10, "mobile")};
    left: ${rem(20, "mobile")};
  }
`;
