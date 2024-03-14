import React, { useState, useEffect, useLayoutEffect } from "react";
import { isBrowser, isMobile } from "react-device-detect";
import {
  Container,
  Heading,
  Row,
  LeftSection,
  RightSection,
  LeftSideHeader,
  LeftSideContent,
  Btn,
} from "./style";
import Icons from "../Icons";

import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";
import Image from "next/image";
import { gumletLoader } from "../../utils/gumletLoader";
import Link from "next/link";

const About = (props) => {
  const [device, setDevice] = useState("");
  const [click, setClick] = useState(false);
  useEffect(() => {
    if (window.innerWidth > 2560) setDevice("large");
    if (window.innerWidth < 767) setDevice("mobile");
    if (window.innerWidth > 767 && window.innerWidth < 1024) {
      setDevice("tablet");
    }
    if (window.innerWidth > 1024 && window.innerWidth < 1441) {
      setDevice("pc");
    }
  }, []);

  return (
    <Container id="about">
      <Row>
        <LeftSection>
          <LeftSideHeader>
            <Heading>our product</Heading>

            <h1>
              supercharge{device === "mobile" && <br />} your investments
              {device === "mobile" && <br />} with us
            </h1>
          </LeftSideHeader>
          <LeftSideContent>
            <p>
              <span className="highlight">marketfeed. </span>
              is carefully crafted to simplify
              {device == "mobile" || (device == "tablet" && <br />)} trading
              {device === "pc" || device == "large" ? <br /> : null} for all. We
              help you automate {device == "mobile" && <br />}
              options trading {device == "large" ||
                (device == "pc" && <br />)}{" "}
              strategies designed by {device == "mobile" && <br />}experts.{" "}
            </p>
            <Btn
              onMouseDown={() => setClick(true)}
              onMouseUp={() => setClick(false)}
              clicked={click}
            >
              <a
                target="_blank"
                href="https://www.marketfeed.com"
                className="btn"
              ></a>
            </Btn>
          </LeftSideContent>
        </LeftSection>
        <RightSection>
          {device === "large" ? (
            <Image
              src="/SmallM.png"
              height={500}
              width={600}
              alt="marketfeed Logo
              "
            />
          ) : device == "mobile" ? null : (
            <Image
              src="/SmallM.png"
              height={289}
              width={450}
              alt="marketfeed Logo
              "
            />
          )}
        </RightSection>
      </Row>
    </Container>
  );
};
export default About;
