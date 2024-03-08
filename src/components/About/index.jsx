import React, { useState, useEffect } from "react";
import {
  Container,
  Heading,
  Row,
  LeftSection,
  RightSection,
  LeftSideHeader,
  LeftSideContent,
  ButtonCTA,
} from "./style";
import Icons from "../Icons";

import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";
import Image from "next/image";
import { gumletLoader } from "../../utils/gumletLoader";
import Link from "next/link";

function SmallM() {
  const { rive, RiveComponent } = useRive({
    src: "/assets/rives/m_without_bg.riv",
    autoplay: true,
    layout: new Layout({ fit: Fit.Cover, alignment: Alignment.Center }),
  });

  return (
    <div>
      <RiveComponent style={{ height: "40vh", width: "35vw" }} />
    </div>
  );
}
const About = (props) => {
  const [device, setDevice] = useState("");
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
  console.log(device);

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
            <Link href="https://www.marketfeed.com/">
              <ButtonCTA>
                <div className="button">
                  <h1>learn more</h1>
                  <div className="iconsPlacer">
                    <Icons name="rightArrow" />
                  </div>
                </div>
              </ButtonCTA>
            </Link>
          </LeftSideContent>
        </LeftSection>
        <RightSection>
          {/* <SmallM/> */}
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
