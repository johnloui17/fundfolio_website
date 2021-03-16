import styled from "styled-components";
import { rem } from "../../utils/remConverter";

export const Container = styled.div`
  width: 100vw;
  background: #0d0a1b;
  padding: ${rem(120)} ${rem(150)};
  @media (max-width: 1024px) and (min-width: 768px) {
    padding: ${rem(20)} ${rem(100)};
  }
  @media (max-width: 767px) {
    padding: ${rem(20)} ${rem(20)};
    padding-top:160px;
  }
`;

export const Heading = styled.div`
  color: rgba(256, 256, 256, 0.2);
  font-family: "gilroybold";
  font-size: ${rem(38)};
  font-weight: bold;
  letter-spacing: 0.2px;
  margin-bottom: ${rem(40)};
  @media (max-width: 767px) {
    margin-bottom: ${rem(40, "mobile")};
    font-size: ${rem(50, "mobile")};
    padding-left:30px;
    padding-right:30px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const Column = styled.div`
  width: 33%;
  padding: ${rem(25)};
  @media (max-width: 767px) {
    width: 50%;
    border-top: ${(props) => {
      if (props.className === "column_5" || props.className === "column_6") {
        return "1px solid #252232";
      }
    }};
    border-bottom: ${(props) => {
      if (
        props.className === "column_1" ||
        props.className === "column_2" 
      ) {
        return "1px solid #252232";
      }
    }};
    border-left: ${(props) => {
      if (props.className === "column_4" || props.className === "column_6"||props.className === "column_2") {
        return "1px solid #252232";
      }
    }};
  }
  @media (min-width: 768px) {
    padding: 40px;
    border-bottom: ${(props) => {
      if (
        props.className === "column_1" ||
        props.className === "column_2" ||
        props.className === "column_3"
      ) {
        return "1px solid #252232";
      }
    }};
    border-left: ${(props) => {
      if (props.className === "column_3" || props.className === "column_6") {
        return "1px solid #252232";
      }
    }};
    border-right: ${(props) => {
      if (props.className === "column_1" || props.className === "column_4") {
        return "1px solid #252232";
      }
    }};
  }
`;
