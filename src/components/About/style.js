import styled from "styled-components";
import { rem } from "../../utils/remConverter";

export const Container = styled.div`
  font-family: inherit;
  width: 100vw;
  background: #0d0a1b;
  padding: ${rem(90)} ${rem(150)};
  @media (max-width: 1024px) and (min-width: 768px) {
    padding-left: ${rem(40, "tablet")};
    padding-right: ${rem(40, "tablet")};
    padding-top: ${rem(60, "mobile")};
  }

  @media (max-width: 767px) {
    padding-bottom: 0;
    padding-left: ${rem(45, "mobile")};
    padding-right: ${rem(45, "mobile")};
    padding-top: ${rem(0, "mobile")};
  }
  @media (min-width: 1280px) and (max-width: 1439px) {
    padding: ${rem(100, "medium")} ${rem(150, "medium")};
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
  justify-content: space-between;
  margin-top: 51px;
  @media (max-width: 1024px) and (min-width: 768px) {
    flex-direction: row;
  }
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Heading = styled.div`
  color: rgba(256, 256, 256, 0.2);
  font-size: ${rem(38)};
  font-weight: 900;
  letter-spacing: 0.2px;
  font-family: inherit;

  @media (max-width: 767px) {
    /* margin-bottom: ${rem(40, "mobile")}; */
    text-align: center;
    font-size: ${rem(50, "mobile")};
  }
  @media (max-width: 1024px) {
    font-size: 21px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    letter-spacing: 0.2px;
  }
  @media (min-width: 1280px) {
    font-size: ${rem(38, "medium")};
    /* margin-bottom: ${rem(40, "medium")}; */
  }
  @media (min-width: 1920px) {
    font-size: ${rem(38, "large")};
    /* margin-bottom: ${rem(40, "large")}; */
  }
  @media (min-width: 2560px) {
    font-size: ${rem(38, "extraLarge")};
    /* margin-bottom: ${rem(40, "extraLarge")}; */
  }
  @media (min-width: 3840px) {
    font-size: ${rem(38, "xxl")};
    /* margin-bottom: ${rem(40, "xxl")}; */
  }
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 30px;
  max-width: ${rem(615)};
  @media (min-width: 1280px) {
    max-width: ${rem(615, "medium")};
  }
  @media (min-width: 1920px) {
    max-width: ${rem(615, "large")};
  }
  @media (min-width: 2560px) {
    max-width: ${rem(615, "extraLarge")};
  }
  @media (min-width: 3840px) {
    max-width: ${rem(615, "xxl")};
  }
`;
export const LeftSideHeader = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 40px;

  h1 {
    color: #fff;
    font-family: "Satoshi Variable";
    font-size: 60px;
    font-style: normal;
    font-weight: 900;
    line-height: 60px; /* 116.667% */
    letter-spacing: -2px;

    font-family: inherit;

    @media (max-width: 1024px) and (min-width: 768px) {
      font-size: 40px;
    }
    @media (max-width: 767px) {
      line-height: 40px; /* 116.667% */

      text-align: center;
      font-size: ${rem(65, "mobile")};
    }

    @media (min-width: 1920px) {
      font-size: ${rem(60, "large")};
    }
    @media (min-width: 2560px) {
      font-size: ${rem(60, "extraLarge")};
      line-height: 110px; /* 116.667% */
    }
    @media (min-width: 3840px) {
      font-size: ${rem(60, "xxl")};
    }
  }
`;
export const LeftSideContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  p {
    color: #70707c;
    line-height: 1.25;
    font-size: ${rem(24)};
    font-weight: 500;

    .highlight {
      color: #bbb;
    }
    @media (min-width: 360px) {
      text-align: center;
      justify-content: center;
      align-items: center;
      font-size: 16px;
    }
    @media (min-width: 767px) {
      text-align: start;

      font-size: ${rem(40, "mobile")};
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
  @media (min-width: 360px) {
    text-align: center;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 767px) {
    text-align: center;
    justify-content: start;
    align-items: start;
  }
`;

export const RightSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: ${rem(150)};

  @media (min-width: 1280px) {
    margin-left: ${rem(150, "medium")};
  }
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

export const Btn = styled.div`
  width: 200px;
  height: 53px;
  display: flex;
  flex-direction: row;

  @media (min-width: 767px) and (max-width: 1024px) {
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 360px) and (max-width: 767px) {
    width: 150px;
  height: 58px;
    justify-content: center;
    align-items: center;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }
  .btn {
    width: 100%;
    height: 100%;

    border-radius: 36px;
    box-shadow: 0 1em 1em rgba(0, 0, 0, 0.5);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.3s ease;

    @media (min-width: 360px) and (max-width: 767px) {
      width: 150px;
      /* padding: 16px 24px; */

      /* align-items: center; */
    }

    @media (min-width: 767px) and (max-width: 1024px) {
      width: 150px;
      /* padding: 16px 32px; */
      justify-content: start;
      align-items: start;
    }
  }

  .btn::before {
    content: "";
    position: absolute;

    width: 100%;
    height: 376%;
    background: linear-gradient(
      150deg,
      #061ccc 5.75%,
      #5351bd 26.28%,
      #f9c85f 80.39%
    );
    transition: all 0.5s ease-in-out;
  }

  .btn::after {
    position: absolute;
    transform: translate(0%, 1%);
    background: #1e1b2b;
    left: 1px;
    top: 1px;
    width: 98%;
    height: 95%;
    border-radius: 35px;

    white-space: nowrap;
    color: #fff;
    font-family: "Satoshi-Variable";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.1px;

    content: "learn more";
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 360px) and (max-width: 767px) {
      top: 1px;
      left: 3px;
      width: 97%;
      height: 94%;
      font-weight: 700;

    }
  }

  .btn:hover::before {
    transform: rotate(180deg);
    transition: all 0.5s ease-in-out;
  }
  .btn:active::after {
    background: linear-gradient(
      255deg,
      #061ccc 5.75%,
      #5351bd 26.28%,
      #f9c85f 80.39%
    );
  }
  .btn:active::before {
    transform: rotate(180deg);
    transition: all 0.5s ease-in-out;
  }
  @keyframes spin {
    to {
      transform: rotate(180deg);
    }
  }
`;
