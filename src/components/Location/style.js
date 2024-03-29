import styled from "styled-components";
import { rem } from "../../utils/remConverter";

export const Container = styled.div`
  width: 100vw;
  height: 70vh;
  position: relative;
  background-color: #0d0a1b;
  padding: 0 ${rem(150)};

  @media (max-width: 1024px) and (min-width: 768px) {
    padding: 0;
  }
  @media (min-width: 360px) and (max-width: 767px) {
    height: 100vh;
    padding: 0;

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
  width: 100vw;
  height: 70vh;
  left: 0;
  margin: 0;
  @media (min-width: 360px) and (max-width: 767px) {
    height: 100vh;
  }
  img {
    object-fit: cover;
    margin: 0;

    @media (min-width: 360px) and (max-width: 767px) {
      object-fit: contain;
      height: 100vh;
    }
    @media (min-width: 767px) and (max-width: 1024px) {
      object-fit: contain;
    }
  }
  @media (max-width: 767px) {
  }
  &.background {
    margin: 0;
    @media (min-width: 1080px) {
      display: block;
    }
    @media (min-width: 360px) and (max-width: 767px) {
      width: 100%;
      height: auto;
    }
  }
  &.backgroundMobile {
    margin: 0;

    @media (max-width: 767px) {
      display: block;
    }
  }
`;
