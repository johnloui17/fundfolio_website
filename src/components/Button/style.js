import styled from "styled-components";
import { rem } from "../../utils/remConverter";
export const Container = styled.button`
  width: ${rem(204)};
  height: ${rem(56)};
  border-radius: 35px;
  border: solid 1px
    ${(props) => (props.type == "ghost" ? "#f55240" : "transparent")};
  background: ${(props) =>
    props.type == "ghost"
      ? "transparent"
      : props.type === "submitting"
      ? "rgb(245,82,64,0.1)"
      : props.type === "submitted"
      ? "#44b9a4"
      : "#ee368e"};
  background-image: ${(props) =>
    props.type === "ghost"
      ? "linear-gradient(to top, transparent, transparent)"
      : props.type === "submitting"
      ? "linear-gradient(160deg,rgb(245,82,64,0.1),rgb(238,54,142,0.1))"
      : props.type === "submitted"
      ? "linear-gradient(160deg,#44b9a4,#32c37e)"
      : props.type === "error"
      ? "linear-gradient(160deg,#f552401f,#ee368e1a)"
      : "linear-gradient(160deg,#f55240,#ee368e)"};
  color: #fff;
  font-size: ${rem(24)};
  font-weight: bold;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "gilroybold";
  span {
    font-family: "gilroybold";
  }
  svg {
    margin-right: 10px;
    // margin-bottom: 5px;
  }
  @media (min-width: 1920px) {
    width: ${rem(217, "large")};
    height: ${rem(70, "large")};
    font-size: ${rem(24, "large")};
    border-radius: ${rem(35, "large")};
  }
  @media (min-width: 2560px) {
    width: ${rem(217, "extraLarge")};
    height: ${rem(70, "extraLarge")};
    font-size: ${rem(24, "extraLarge")};
    border-radius: ${rem(35, "extraLarge")};
  }
  @media (min-width: 3840px) {
    width: ${rem(217, "xxl")};
    height: ${rem(70, "extraLarge")};
    font-size: ${rem(24, "xxl")};
    border-radius: ${rem(35, "xxl")};
  }
`;
