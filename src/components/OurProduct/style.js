import styled from "styled-components";
import { rem } from "../../utils/remConverter";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  background: #0d0a1b;
  padding: ${rem(120)} ${rem(150)};
  @media (max-width: 1024px) and (min-width: 768px) {
    padding: ${rem(20)} ${rem(150)};
  }
  @media (max-width: 767px) {
    padding: ${rem(0)};
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1024px) and (min-width: 768px) {
    justify-content: center;
  }
  @media (max-width: 767px) {
    justify-content: center;
  }
`;
export const Heading = styled.div`
  color: rgba(256, 256, 256, 0.2);
  font-size: ${rem(38)};
  font-weight: bold;
  letter-spacing: 0.2px;
  margin-bottom: ${rem(40)};
  font-family: "gilroybold";
`;
