import styled from "styled-components";
import { rem } from "../../utils/remConverter";

export const Container = styled.div`
  width: 100vw;
  position: relative;
  background-color: #0d0a1b;
  padding: ${rem(90)} ${rem(150)};
  @media (max-width: 1024px) and (min-width: 768px) {
    padding: ${rem(20)} ${rem(100)};
  }
  @media (max-width: 767px) {
    padding: ${rem(180)} ${rem(50)};
    margin-bottom: 100px;
  }
  @media (min-width: 1920px) {
    padding: ${rem(90, "large")} ${rem(150, "large")};
  }
  @media (min-width: 2560px) {
    padding: ${rem(90, "extraLarge")} ${rem(150, "extraLarge")};
  }
  @media (min-width: 3840px) {
    padding: ${rem(90, "xxl")} ${rem(150, "xxl")};
  }
`;
export const ImageBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 100;
  left: 0;
  img {
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 767px) {
    padding-top: 100px;
  }
  &.background {
    display: none;
    @media (min-width: 1080px) {
      display: block;
    }
  }
  &.backgroundMobile {
    display: none;
    @media (max-width: 767px) {
      display: block;
    }
  }
`;

export const Heading = styled.div`
  color: rgba(256, 256, 256, 0.2);
  font-size: ${rem(38)};
  font-weight:900;
  letter-spacing: 0.2px;
  margin-bottom: ${rem(40)};
  position: relative;
  font-family: "Satoshi-Variable";
  @media (max-width: 767px) {
    font-size: ${rem(50, "mobile")};
  }
  @media (min-width: 1920px) {
    font-size: ${rem(50, "large")};
    margin-bottom: ${rem(40, "large")};
  }
  @media (min-width: 2560px) {
    font-size: ${rem(50, "extraLarge")};
    margin-bottom: ${rem(40, "extraLarge")};
  }
  @media (min-width: 3840px) {
    font-size: ${rem(50, "xxl")};
    margin-bottom: ${rem(40, "xxl")};
  }
`;
export const FormContainer = styled.div`
  position: relative;
  margin-right: 50px;
  svg {
    fill: #fff;
  }
`;

export const BtnTextContainer = styled.span`
  color: #fff;
`;

export const Spin = styled.div`
  display: inline-block;
  width: ${rem(19)};
  height: ${rem(19)};
  
  margin-right: 10px;
  margin-top: 5px;
  border: 3px solid rgba(255,255,255,.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  

  @keyframes spin {
  to { -webkit-transform: rotate(360deg); }
  }
  @-webkit-keyframes spin {
  to { -webkit-transform: rotate(360deg); }
  }
`;
