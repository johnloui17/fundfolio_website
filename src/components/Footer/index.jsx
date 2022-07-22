import React, {
  useEffect,
  useState,
} from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { gumletLoader } from '../../utils/gumletLoader';
import Icons from '../Icons';
import {
  Column,
  Container,
  Copyright,
  FooterLink,
  Row,
  SocialIcon,
  SocialRow,
  SubHeading,
} from './style';

const Footer = (props) => {
  const [device, setDevice] = useState("");
  const [iFrame, setIframe] = useState(false);
  useEffect(() => {
    if (window.innerWidth > 1920) setDevice("large");
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
            HoneyKomb by Bhive, 3/B, 19th Main Road, HSR Sector 3<br /> Bengaluru, Bengaluru Urban
            <br /> Karnataka, 560102
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
              href={"https://twitter.com/marketfeedapp"}
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
        <Column iFrame={iFrame}>
          <SubHeading>products</SubHeading>
          <Link href="https://marketfeed.com/read" passHref={true}>
            <FooterLink target={"_blank"}>marketfeed.read</FooterLink>
          </Link>
          <Link href="https://marketfeed.com" passHref={true}>
            <FooterLink target={"_blank"}>marketfeed.com</FooterLink>
          </Link>
        </Column>
        <Column>
          <SubHeading>company</SubHeading>
          <Link href="https://marketfeed.com" passHref={true}>
            <FooterLink>about</FooterLink>
          </Link>
          <Link
            href="https://payments.fundfolio.in/disclaimer/"
            passHref={true}
          >
            <FooterLink>disclaimer</FooterLink>
          </Link>
          <Link
            href="https://payments.fundfolio.in/privacy-policy-2/"
            passHref={true}
          >
            <FooterLink target={"_blank"}>privacy policy</FooterLink>
          </Link>
          <Link
            href="https://payments.fundfolio.in/terms-of-use/"
            passHref={true}
          >
            <FooterLink target={"_blank"}>terms & conditions</FooterLink>
          </Link>
          <Link
            href="https://payments.fundfolio.in/refund-policy/"
            passHref={true}
          >
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
          <span>by marketfeed.com.</span>
        </Copyright>
      </Row>
    </Container>
  );
};

export default Footer;
