import styled from "styled-components";
import { rem } from "../../utils/remConverter";

export const Container = styled.div`
  width: 100vw;
  position: relative;
  padding: ${rem(120)} ${rem(150)};
  background: #0d0a1b;

  @media (max-width: 767px) {
    padding: ${rem(20)} ${rem(50)};
  }
`;
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 767px) {
    flex-direction:column;
  }
`;
export const SocialRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .desc {
    max-width: ${rem(264)};
    color: #fff;
    font-size: ${rem(20)};
    font-weight: 500;
    margin: ${rem(24)} 0;
    opacity: 0.6;
  }
`;

export const SocialMediaIcons = styled.div``;

export const SocialIcon = styled.a`
  cursor: pointer;
  margin-right: 16px;
`;
export const SubHeading = styled.div`
  color: #56535f;
  opacity: 0.6;
  font-size: ${rem(24)};
  font-weight: bold;
  margin-bottom: ${rem(16)};
`;
export const FooterLink = styled.a`
  text-decorations: none;
  color: #fff;
  opacity: 0.8;
  font-size: ${rem(20)};
  font-weight: 500;
  line-height: 1.3;
  cursor: pointer;
  margin-bottom: ${rem(12)};
`;
export const Copyright = styled.div`
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: ${rem(18)};
  margin-top: ${rem(120)};
  align-items: center;
  display: flex;
  justify-content: center;
  svg {
    margin: 0 5px;
  }
`;
