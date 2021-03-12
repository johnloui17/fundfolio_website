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
    padding: ${rem(20)} ${rem(50)};
  }
`;

export const Heading = styled.div`
  color: rgba(256, 256, 256, 0.2);
  font-size: ${rem(38)};
  font-weight: bold;
  letter-spacing: 0.2px;
  margin-bottom: ${rem(40)};
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const Column = styled.div`
  width:33%;
  @media (max-width: 767px) {
      width:50%;
  }
  @media (min-width: 768px) {
   padding:0px 50px;
}
`;
export const ImageWrapper = styled.div`
  padding-right: ${rem(25)};
`;
