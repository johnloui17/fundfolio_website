import styled from "styled-components";
import { rem } from "../../utils/remConverter";

export const Container = styled.div`
  width: ${rem(480)};
  background: transparent;
  color: #fff;
  margin-bottom: ${rem(48)};
  @media (max-width: 767px) {
    width: ${rem(300)};
  }
  @media (min-width: 1920px) {
    width ${rem(480, "large")};
    margin-bottom: ${rem(48, "large")};
  }
  @media (min-width: 2560px){
    width ${rem(480, "extraLarge")};
    margin-bottom: ${rem(48, "extraLarge")};
  }
  @media (min-width: 3840px) {
    width ${rem(480, "xxl")};
    margin-bottom: ${rem(48, "xxl")};
  }
  label {
    display: block;
    font-size: 20px;
    font-family: "gilroymedium";
    @media (min-width: 1920px) {
      font-size: ${rem(20, "large")};
    }
    @media (min-width: 2560px) {
      font-size: ${rem(20, "extraLarge")};
    }
    @media (min-width: 3840px) {
      font-size: ${rem(20, "xxl")};
    }
  }
  input {
    width: 100%;
    background: none;
    padding: 8px 0 16px;
    border: none;
    font-size: 30px;
    font-weight: 500;
    color: #fff;
    outline: none;
    font-family: "gilroymedium";
    border-bottom: 1px solid #6a6a77;
    &:focus {
      outline: none;
      border-bottom: 1px solid #2b80ff;
    }
    @media (min-width: 1920px) {
      font-size: ${rem(30, "large")};
    }
    @media (min-width: 2560px) {
      font-size: ${rem(30, "extraLarge")};
    }
    @media (min-width: 3840px) {
      font-size: ${rem(30, "xxl")};
    }
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;
