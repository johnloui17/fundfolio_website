import React, { useState, useEffect } from "react";
import {
  Container,
  ImageBackground,
  Content,
  ContentWrapper,
  BottomLogoContainer,
} from "./style";
import Image from "next/image";
import Button from "../Button";
import Icons from "../Icons";
import { gumletLoader } from "../../utils/gumletLoader";
const Home = (props) => {
  const [device, setDevice] = useState("");
  useEffect(() => {
    if (window.innerWidth < 800) setDevice("mobile");
    if (window.innerWidth > 1920) setDevice("large");
  }, []);
  return (
    <Container id="home">
      <ImageBackground>
        {device === "mobile" ? (
          <Image
            src="/home-bg-mobile.png"
            loader={gumletLoader}
            className="background"
            layout={"fill"}
            alt="fundfolio website background"
          />
        ) : (
          <Image
            loader={gumletLoader}
            src="/home-bg.png"
            className="background"
            layout={"fill"}
            alt="fundfolio website background"
          />
        )}
      </ImageBackground>
      <ContentWrapper>
        <Content>
          <h1>we help you win the stock market</h1>
          <p>join the next billion revolution</p>
          <Button>
            <Icons name="arrow" fill="#fff" style={{ marginRight: 10 }} />
            <span>join us</span>
          </Button>
        </Content>
      </ContentWrapper>
      <BottomLogoContainer>
        <p>backed by</p>
          {device === "large" ? (
            <Image
              src="/yc_logo.svg"
              loader={gumletLoader}
              height={60}
              width={290}
              alt="fundfolio y-combinator"
            />
          ) : (
            <Image
              loader={gumletLoader}
              src="/yc_logo.svg"
              height={20}
              width={92}
              alt="fundfolio y-combinator"
            />
          )}
      </BottomLogoContainer>
    </Container>
  );
};
export default Home;
