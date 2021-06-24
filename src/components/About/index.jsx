import React, { useState, useEffect } from "react";
import {
  Container,
  Heading,
  Row,
  LeftSection,
  RightSection,
  ImageWrapper,
} from "./style";
import Image from "next/image";
import { gumletLoader } from "../../utils/gumletLoader";
const About = (props) => {
  const [device, setDevice] = useState("");
  useEffect(() => {
    if (window.innerWidth > 2560) setDevice("large");
  }, []);
  return (
    <Container id="about">
      <Heading>about</Heading>
      <Row>
        <LeftSection>
          <h1>we are democratizing capital markets</h1>
          <p>
            our products are meticulously designed to disentangle and simplify
            financial assets and capital markets. our class-leading platforms
            offer end-to-end integration of pragmatic learning , actionable
            insights and a snowballing community.
          </p>
        </LeftSection>
        <RightSection>
          <ImageWrapper>
            {device === "large" ? (
              <Image
                src="/pattern.svg"
                loader={gumletLoader}
                className="background"
                width={236}
                height={234}
                alt="fundfolio images"
              />
            ) : (
              <Image
                loader={gumletLoader}
                src="/pattern.svg"
                className="background"
                width={118}
                height={102}
                alt="fundfolio images"
              />
            )}
          </ImageWrapper>
          <h2>800k+</h2>
          <p>
            community <br />
            members
          </p>
        </RightSection>
      </Row>
    </Container>
  );
};
export default About;
