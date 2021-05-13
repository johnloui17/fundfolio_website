import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  SocialIcon,
  Column,
  SubHeading,
  FooterLink,
  Copyright,
  SocialRow,
} from "./style";
import Image from "next/image";
import Link from "next/link";
import Icons from "../Icons";
import { gumletLoader } from "../../utils/gumletLoader";
const Footer = (props) => {
  const [device, setDevice] = useState("");
  useEffect(() => {
    if (window.innerWidth > 1920) setDevice("large");
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
            kinfra hi-tech park
            <br />
            kalamassery,kochi
            <br />
            kerala 683503
          </p>
          <SocialRow>
            <SocialIcon
              href={"https://www.facebook.com/fundfolio.in"}
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
              href={"https://twitter.com/MarketfeedNews"}
              target={"_blank"}
            >
              {device === "large" ? (
                <Image
                  loader={gumletLoader}
                  src={"/twitter.svg"}
                  width={55}
                  height={55}
                />
              ) : (
                <Image
                  loader={gumletLoader}
                  src={"/twitter.svg"}
                  width={22}
                  height={22}
                />
              )}
            </SocialIcon>
            <SocialIcon
              href={"https://www.instagram.com/fundfoliohq/"}
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
              href={"https://www.youtube.com/channel/UC9CKy1ai9qI8p6_Oh0Qa3Rg"}
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
          </SocialRow>
        </Column>
        <Column iFrame={window.location !== window.parent.location}>
          <SubHeading>products</SubHeading>
          <Link href="https://marketfeed.news/" passHref={true}>
            <FooterLink target={"_blank"}>marketfeed.news</FooterLink>
          </Link>
          <Link href="https://marketfeed.app" passHref={true}>
            <FooterLink target={"_blank"}>marketfeed.app</FooterLink>
          </Link>
          <Link href="https://breakout.army/" passHref={true}>
            <FooterLink target={"_blank"}>breakout</FooterLink>
          </Link>
        </Column>
        <Column>
          <SubHeading>company</SubHeading>
          <Link href="/#about" passHref={true}>
            <FooterLink>about</FooterLink>
          </Link>
          <Link href="https://payments.fundfolio.in/disclaimer/" passHref={true}>
            <FooterLink>disclaimer</FooterLink>
          </Link>
          <Link href="https://payments.fundfolio.in/privacy-policy-2/" passHref={true}>
            <FooterLink target={"_blank"}>privacy policy</FooterLink>
          </Link>
          <Link href="https://payments.fundfolio.in/terms-of-use/" passHref={true}>
            <FooterLink target={"_blank"}>terms & conditions</FooterLink>
          </Link>
          <Link href="https://payments.fundfolio.in/refund-policy/" passHref={true}>
            <FooterLink target={"_blank"}>refund policy</FooterLink>
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
          <span>by fundfolio.com.</span>
        </Copyright>
      </Row>
    </Container>
  );
};

export default Footer;
