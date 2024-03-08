import styled from "styled-components";
import { rem } from "../../utils/remConverter";

export const Container = styled.div`
  font-family: inherit;
  width: 100vw;
  background: #0d0a1b;
  padding: ${rem(137)} ${rem(150)};
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
  @media (min-width: 1280px) {
    padding: ${rem(137, "medium")} ${rem(150, "medium")};
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

    font-size: ${rem(60)};
    font-style: normal;
    font-weight: 900;
    letter-spacing: 0.2px;
    color: #fff;
    line-height: 1.17;
    font-family: inherit;

    @media (max-width: 1024px) and (min-width: 768px) {
      font-size: 40px;
    }
    @media (max-width: 767px) {
      text-align: center;
      font-size: ${rem(65, "mobile")};
    }
    @media (min-width: 1280px) {
      font-size: ${rem(60, "medium")};
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

export const ButtonCTA = styled.div`
  width: 200px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 767px) {
    justify-content: start;
    align-items: start;
  }
  @media (min-width: 360px) and (max-width: 767px) {
    justify-content: center;
    align-items: center;
  }

  .button {
    display: flex;
    flex-direction: row;
    gap: 6px;
    justify-content: center;
    align-items: center;
    border-radius: 36px;
    padding: 15px 36px 17px 36px;
    border: none;
    outline: none;
    cursor: pointer;
    position: relative;
    background: linear-gradient(102deg, #061ccc, #5351bd, #f9c85f);
    background-size: 5% ;

    animation: gradient 10s ease-in-out infinite;
    z-index: 1;

    @media (min-width: 360px) and (max-width: 767px) {
      width: 150px;
      padding: 16px 32px;
      justify-content: center;
      align-items: center;
    }

    @media (min-width: 767px) and (max-width: 1024px) {
      width: 150px;
      padding: 16px 32px;
      justify-content: start;
      align-items: start;
    }
    @media (max-width: 1024px) {
      width: 150px;
      padding: 16px 32px;
      justify-content: start;
      align-items: start;
    }
  }

  @keyframes gradient {
    0%{background-position:0% 57%}
    50%{background-position:100% 44%}
    100%{background-position:0% 57%}
  }

  /* .button:hover {
    background: linear-gradient(240deg, #061ccc, #5351bd, #f9c85f);
  } */

  .button::before {
    content: "";
    position: absolute;
    top: 4px;
    right: 4px;
    bottom: 4px;
    left: 4px;
    background-color: #1e1b2b;
    border-radius: 34px;
    z-index: -1;
  }

  .button::after {
    /* content: attr(data); */
  }
  .iconsPlacer {
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1 {
    white-space: nowrap;

    color: #fff;
    font-family: "Satoshi-Variable";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.1px;
    @media (min-width: 360px) {
      font-size: 16px;
      letter-spacing: 0.1px;
    }
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
