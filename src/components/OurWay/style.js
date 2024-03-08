import styled from "styled-components";
import { rem } from "../../utils/remConverter";
export const Container = styled.div`
  width: 100vw;
  background: #0d0a1b;
  padding: ${rem(150)};
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
  @media (min-width: 1280px) {
    padding: ${rem(150, "medium")};
  }
  @media (min-width: 1920px) {
    padding: ${rem(150, "large")};
  }
  @media (min-width: 2560px) {
    padding: ${rem(150, "extraLarge")};
  }
  @media (min-width: 3840px) {
    padding: ${rem(150, "xxl")};
  }
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
  @media (min-width: 1280px) {
    min-width: ${rem(350, "medium")};
  }
  @media (min-width: 1920px) {
    min-width: ${rem(350, "large")};
  }
  @media (min-width: 2560px) {
    min-width: ${rem(350, "extraLarge")};
  }
  @media (min-width: 3840px) {
    min-width: ${rem(350, "xxl")};
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
    b {
      font-family: "Satoshi-Variable";
    }
    @media (min-width: 1280px) {
      font-size: ${rem(60, "medium")};
      margin-bottom: ${rem(20, "medium")};
    }

    @media (min-width: 1920px) {
      font-size: ${rem(60, "large")};
      margin-bottom: ${rem(20, "large")};
    }
    @media (min-width: 2560px) {
      font-size: ${rem(60, "extraLarge")};
      margin-bottom: ${rem(20, "extraLarge")};
    }
    @media (min-width: 3840px) {
      font-size: ${rem(60, "xxl")};
      margin-bottom: ${rem(20, "xxl")};
    }
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
      @media (min-width: 1280px) {
        font-size: ${rem(20, "medium")};
        margin-right: ${rem(26, "medium")};
      }
      @media (min-width: 1920px) {
        font-size: ${rem(20, "large")};
        margin-right: ${rem(26, "large")};
      }
      @media (min-width: 2560px) {
        font-size: ${rem(20, "extraLarge")};
        margin-right: ${rem(26, "extraLarge")};
      }
      @media (min-width: 3840px) {
        font-size: ${rem(20, "xxl")};
        margin-right: ${rem(26, "xxl")};
      }
    }
    @media (max-width: 1024px) and (min-width: 768px) {
      font-size: ${rem(60, "tablet")};
      margin: 0;
      margin-right: ${rem(20, "tablet")};
      padding-right: ${rem(60, "tablet")};
    }
    @media (max-width: 767px) {
      font-size: ${rem(40, "mobile")};
      margin-right: ${rem(20, "mobile")};
    }
    @media (min-width: 1280px) {
      font-size: ${rem(60, "medium")};
      margin-bottom: ${rem(20, "medium")};
    }
    @media (min-width: 1920px) {
      font-size: ${rem(60, "large")};
      margin-bottom: ${rem(20, "large")};
    }
    @media (min-width: 2560px) {
      font-size: ${rem(60, "extraLarge")};
      margin-bottom: ${rem(20, "extraLarge")};
    }
    @media (min-width: 3840px) {
      font-size: ${rem(60, "xxl")};
      margin-bottom: ${rem(20, "xxl")};
    }
  }
  li.active {
    font-size: ${rem(60)};
    font-family: "Satoshi-Variable";
    b {
      background: -webkit-linear-gradient(left, #40eaf5, #504dff);
      background: -o-linear-gradient(right, #40eaf5, #504dff);
      background: -moz-linear-gradient(right, #40eaf5, #504dff);
      background: linear-gradient(to right, #40eaf5, #504dff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    @media (max-width: 1024px) and (min-width: 768px) {
      font-size: ${rem(60, "tablet")};
      padding-right: ${rem(60, "tablet")};
    }
    @media (max-width: 767px) {
      font-size: ${rem(40, "mobile")};
      margin-right: ${rem(20, "mobile")};
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
  font-weight:900;
  letter-spacing: 0.2px;
  margin-bottom: ${rem(40)};
  font-family: "Satoshi-Variable";
  @media (max-width: 1024px) and (min-width: 768px) {
    font-size: ${rem(52, "tablet")};
  }
  @media (max-width: 767px) {
    font-size: ${rem(52, "mobile")};
  }

  @media (min-width: 1280px) {
    font-size: ${rem(28, "medium")};
    margin-bottom: ${rem(40, "medium")};
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
export const DisplayCard = styled.div`
  width: ${rem(754)};
  height: ${rem(600)};
  border-radius: ${rem(16)};
  margin: ${rem(30)};
  background-image: linear-gradient(to top, #201e2d, #120f20);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media (max-width: 1024px) and (min-width: 768px) {
    width: ${rem(700, "tablet")};
    height: ${rem(500, "tablet")};
  }
  @media (max-width: 767px) {
    display: block;
    width: 100%;
    padding: 20px;
    height: 300px;
    flex: none;
    margin: 0;
  }
  @media (min-width: 1280px) {
    width: ${rem(754, "medium")};
    height: ${rem(500, "medium")};
    border-radius: ${rem(16, "medium")};
    margin: ${rem(30, "medium")};
  }
  @media (min-width: 1920px) {
    width: ${rem(754, "large")};
    height: ${rem(600, "large")};
    border-radius: ${rem(16, "large")};
    margin: ${rem(30, "large")};
  }
  @media (min-width: 2560px) {
    width: ${rem(754, "extraLarge")};
    height: ${rem(600, "extraLarge")};
    border-radius: ${rem(16, "extraLarge")};
    margin: ${rem(30, "extraLarge")};
  }
  @media (min-width: 3840px) {
    width: ${rem(754, "xxl")};
    height: ${rem(600, "xxl")};
    border-radius: ${rem(16, "xxl")};
    margin: ${rem(30, "xxl")};
  }
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
    font-family: "Satoshi-Variable";
    @media (max-width: 1024px) and (min-width: 768px) {
      width: ${rem(460, "tablet")};
      top: ${rem(150, "tablet")};
      left: ${rem(200, "tablet")};
      font-size: ${rem(30, "tablet")};
      color: #86868c;
      font-weight: 500;
    }
    @media (max-width: 767px) {
      width: 80%;
      top: ${rem(110, "mobile")};
      left: ${rem(50, "mobile")};
      font-size: ${rem(40, "mobile")};
      color: #86868c;
      font-weight: 500;
    }
    @media (min-width: 1280px) {
      width: ${rem(436, "medium")};
      top: ${rem(190, "medium")};
      left: ${rem(196, "medium")};
      font-size: ${rem(30, "medium")};
    }
    @media (min-width: 1920px) {
      width: ${rem(436, "large")};
      top: ${rem(190, "large")};
      left: ${rem(196, "large")};
      font-size: ${rem(30, "large")};
    }
    @media (min-width: 2560px) {
      width: ${rem(436, "extraLarge")};
      top: ${rem(190, "extraLarge")};
      left: ${rem(196, "extraLarge")};
      font-size: ${rem(30, "extraLarge")};
    }
    @media (min-width: 3840px) {
      width: ${rem(436, "xxl")};
      top: ${rem(190, "xxl")};
      left: ${rem(196, "xxl")};
      font-size: ${rem(30, "xxl")};
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

  @media (min-width: 1280px) {
    top: ${rem(60, "medium")};
    left: ${rem(100, "medium")};
  }
  @media (min-width: 1920px) {
    top: ${rem(60, "large")};
    left: ${rem(100, "large")};
  }
  @media (min-width: 2560px) {
    top: ${rem(60, "extraLarge")};
    left: ${rem(100, "extraLarge")};
  }
  @media (min-width: 3840px) {
    top: ${rem(60, "xxl")};
    left: ${rem(100, "xxl")};
  }
`;
