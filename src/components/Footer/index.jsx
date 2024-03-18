import React, { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { gumletLoader } from "../../utils/gumletLoader";
import Icons from "../Icons";
import {
  Column,
  Container,
  Copyright,
  FooterLink,
  Row,
  SocialIcon,
  SocialRow,
  SubHeading,
} from "./style";

const Footer = (props) => {
  const [device, setDevice] = useState("");
  const [iFrame, setIframe] = useState(false);
  useEffect(() => {
    if (window.innerWidth > 1920) setDevice("large");
    if (window.innerWidth < 767) setDevice("mobile");

    if (window.location !== window.parent.location) setIframe(true);
  }, []);
  return (
    <Container>
      <Row>
        <Column>
          {device === "large" ? (
            <Image
              loader={gumletLoader}
              src={"/fundfolio.svg"}
              width={171}
              height={30}
            />
          ) : (
            <Image
              loader={gumletLoader}
              src={"/fundfolio.svg"}
              width={114}
              height={20}
            />
          )}
          <p className="desc">
            Honeykomb by BHIVE, 19th Main Road,{device == "mobile" && <br />}{" "}
            HSR Sector 3, Bengaluru, KA - 560102 <br />
           
          </p>
          <SocialRow>
            <SocialIcon
              href={"https://www.youtube.com/@marketfeedbyShariqueSamsudheen"}
              target={"_blank"}
            >
              {device === "large" ? (
                <Image
                  loader={gumletLoader}
                  src={"/you-tube.svg"}
                  width={55}
                  height={55}
                />
              ) : (
                <Image
                  loader={gumletLoader}
                  src={"/you-tube.svg"}
                  width={22}
                  height={22}
                />
              )}
            </SocialIcon>
            <SocialIcon
              href={"https://www.instagram.com/marketfeed.app/"}
              target={"_blank"}
            >
              {device === "large" ? (
                <Image
                  loader={gumletLoader}
                  src={"/instagram.svg"}
                  width={55}
                  height={55}
                />
              ) : (
                <Image
                  loader={gumletLoader}
                  src={"/instagram.svg"}
                  width={22}
                  height={22}
                />
              )}
            </SocialIcon>

            <SocialIcon
              href={"https://twitter.com/marketfeedapp"}
              target={"_blank"}
            >
              {device === "large" ? (
                // <Image
                //   loader={gumletLoader}
                //   src={"/twitter.svg"}
                //   width={55}
                //   height={55}
                // />
                <Icons name="twitterLogo" width={55} height={55} />
              ) : (
                <Icons name="twitterLogo" width={22} height={24} />
              )}
            </SocialIcon>
            <SocialIcon
              href={"https://www.facebook.com/marketfeedapp"}
              target={"_blank"}
            >
              {device === "large" ? (
                <Image
                  loader={gumletLoader}
                  src={"/facebook.svg"}
                  width={55}
                  height={55}
                />
              ) : (
                <Image
                  loader={gumletLoader}
                  src={"/facebook.svg"}
                  width={22}
                  height={22}
                />
              )}
            </SocialIcon>
            <SocialIcon
              href={"https://in.linkedin.com/company/marketfeedapp"}
              target={"_blank"}
            >
              {device === "large" ? (
 <Image

 src={"/Linkedin-Logo.png"}
 width={55}
 height={55}
/>
              ) : (
                <Icons name="linkedin" width={22} height={24} />
              )}
            </SocialIcon>
          </SocialRow>
        </Column>
        <Column iFrame={iFrame}>
          <SubHeading>product</SubHeading>

          <Link href="https://marketfeed.com" passHref={true}>
            <FooterLink target={"_blank"}>marketfeed.com</FooterLink>
          </Link>
        </Column>
      </Row>
      <Row>
        <Copyright>
          <span>made with</span>
          {device === "large" ? (
            <Icons name="love" width={36} height={36} />
          ) : (
            <Icons name="love" />
          )}
          <span>by fundfolio.</span>
        </Copyright>
      </Row>
    </Container>
  );
};

export default Footer;
