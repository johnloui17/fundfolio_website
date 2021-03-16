import styled from "styled-components";
import { rem } from "../../utils/remConverter";
export const Container = styled.div`
  width: ${rem(360)};
  height: ${rem(384)};
  position: relative;
  padding: ${rem(50)};
  margin-bottom: 20px;
  @media (max-width: 1024px) and (min-width: 768px) {
    width: ${rem(360)};
    height: ${rem(384)};
  }
  @media (max-width: 767px) {
    width: 100%;
    height: auto;
    padding-bottom: 50px;
  }
  .icon-wrapper {
    position: relative;
    transition: all 0.5s ease;
    z-index: 5;
    &:before {
      content: "";
      width: ${rem(20)};
      height: ${rem(2)};
      background: ${(props) =>
        props.type === "marketfeed"
          ? "#ffc400"
          : props.type === "breakout"
          ? "#14cc60"
          : "#6d5ec8"};
      transition: width 1s ease;
      position: absolute;
    }
    & > svg {
      transition: all 0.5s ease;
      top: 10px;
    }
  }
  svg {
    transition: all 0.5s ease;
    transform: translate(${rem(0)}, ${rem(0)});
    position: relative;
    z-index: 2;
  }
  .heading {
    font-size: 60px;
    font-weight: bold;
    color: #fff;
    letter-spacing: 0.2px;
    margin-top: ${rem(37)};
    transition: opacity 0.2s ease;
    transition-delay: 0.5s;
    font-family: "gilroybold";
    position: relative;
    @media (max-width: 1024px) and (min-width: 768px) {
      font-size: 40px;
    }
    @media (max-width: 767px) {
      font-size: 40px;
    }
  }

  .desc {
    position: relative;
    color: #fff;
    opacity: 0.3;
    font-weight: 500;
    width: ${rem(196)};
    font-size: ${rem(18)};
    margin-top: ${rem(7)};
    transition: opacity 0.2s ease;
    transition-delay: 0.5s;
    font-family: "gilroymedium";
    @media (max-width: 1024px) and (min-width: 768px) {
      font-size: 20px;
    }
    @media (max-width: 767px) {
      font-size: 20px;
    }
  }
  .link {
    color: #131319;
    opacity: 0;
    font-size: 24px;
    font-weight: bold;
    visibility: hidden;
    transition: opacity 0.5s ease;
    position: absolute;
    top: 170px;
    text-decoration: none;
    transition-delay: 0.3s;
    margin-top: ${rem(32)};
    z-index: 1;
    svg {
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.5s ease;
      fill: #131319;
      @media (max-width: 1024px) and (min-width: 768px) {
        opacity: 1;
        visibility: visible;
        fill: #f55240;
      }
      @media (max-width: 767px) {
        opacity: 1;
        visibility: visible;
        fill: #f55240;
      }
    }
    span {
      opacity: 0;
      margin-left: ${rem(12)};
      transition: opacity 0.5s ease;
      @media (max-width: 1024px) and (min-width: 768px) {
        opacity: 1;
        visibility: visible;
        color: #f55240;
      }
      @media (max-width: 767px) {
        opacity: 1;
        visibility: visible;
        color: #f55240;
      }
    }
    @media (max-width: 1024px) and (min-width: 768px) {
      opacity: 1;
      visibility: visible;
      position: relative;
      top: 20px;
    }
    @media (max-width: 767px) {
      opacity: 1;
      visibility: visible;
      position: relative;
      top: 20px;
      font-size: 20px;
    }
  }

  &:hover {
    margin-right: 20px;
  }

  &:after {
    content: "";
    position: absolute;
    width: calc(100% - 24px);
    height: calc(100% - 24px);
    background: transparent;
    background-image: linear-gradient(75deg, transparent, transparent);
    transition: all 0.5s ease;
    top: 0px;
    left: 12px;
    bottom: 0;
    margin: auto;
    border-radius: 16px;
    @media (max-width: 1024px) and (min-width: 768px) {
      width: ${rem(360)};
      height: ${rem(384)};
    }
    @media (max-width: 767px) {
      width: 100%;
      height: auto;
    }
  }

  &:before {
    content: "";
    position: absolute;
    border-radius: 26px;
    width: calc(100%);
    height: calc(100%);
    background-image: linear-gradient(-210deg, #201e2d, #120f20);
    top: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    width: ${rem(360)};
    height: ${rem(384)};
    transition: all 0.5s ease;
    @media (max-width: 1024px) and (min-width: 768px) {
      width: ${rem(360)};
      height: ${rem(384)};
    }
    @media (max-width: 767px) {
      width: 100%;
      height: auto;
    }
  }

  &:hover:before {
    width: ${rem(384)};
    height: ${rem(324)};
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.03);
    border: solid 1px #424247;
    background: transparent;

    @media (max-width: 1024px) and (min-width: 768px) {
      background-image: linear-gradient(-210deg, #201e2d, #120f20);
      width: ${rem(360)};
      height: ${rem(384)};
    }
    @media (max-width: 767px) {
      width: 100%;
      height: auto;
      background-image: linear-gradient(-210deg, #201e2d, #120f20);
    }
  }

  &:hover:after {
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.03);
    background-image: linear-gradient(
      75deg,
      ${({ type }) =>
        type === "marketfeed"
          ? "#dd7c53"
          : type === "breakout"
          ? "#0aa79d"
          : "#b386fc"},
      ${({ type }) =>
        type === "marketfeed"
          ? "#ffb800"
          : type === "breakout"
          ? "#14cc74"
          : "#7a67f3"}
    );
    width: ${rem(360)};
    height: ${rem(300)};
    @media (max-width: 1024px) and (min-width: 768px) {
      background-image: linear-gradient(75deg, transparent, transparent);
      border: none;
      width: ${rem(360)};
      height: ${rem(384)};
    }
    @media (max-width: 767px) {
      background-image: linear-gradient(75deg, transparent, transparent);
      border: none;
      width: 100%;
      height: auto;
    }
  }
  &:hover > .icon-wrapper {
    transform: translate(${rem(0)}, ${rem(94)});
    @media (max-width: 1024px) and (min-width: 768px) {
      transform: translate(0);
    }
    @media (max-width: 767px) {
      transform: translate(0);
    }
  }
  &:hover > .icon-wrapper:before {
    width: 0;
  }
  &:hover > .desc {
    opacity: 0;
    visibility: hidden;
    @media (max-width: 1024px) and (min-width: 768px) {
      opacity: 0.3;
      visibility: visible;
    }
    @media (max-width: 767px) {
      opacity: 0.3;
      visibility: visible;
    }
  }
  &:hover > .heading {
    opacity: 0;
    visibility: hidden;
    @media (max-width: 1024px) and (min-width: 768px) {
      opacity: 1;
      visibility: visible;
    }
    @media (max-width: 767px) {
      opacity: 1;
      visibility: visible;
    }
  }
  &:hover > .link {
    opacity: 1;
    visibility: visible;
    svg {
      opacity: 1;
      visibility: visible;
    }
    span {
      opacity: 1;
      visibility: visible;
    }
  }
`;

