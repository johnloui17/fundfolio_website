import React, { useState, useEffect } from "react";
import { Container, Row, NavBar, SocialIcon } from "./style";
import Image from "next/image";
import { gumletLoader } from "../../utils/gumletLoader";
import getImageDimension from "../../utils/dimensionCalculator";
const Header = (props) => {
  const [device, setDevice] = useState("");
  useEffect(() => {
    if (window.innerWidth > 1920) setDevice("large");
  }, []);
  return (
    <Container transparent={props.transparent}>
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
      <Row>
        <NavBar>
          <a
            href="/#home"
            className={props.activeTab === "home" ? "active" : ""}
          >
            home
          </a>
          <a
            href="/#about"
            className={props.activeTab === "about" ? "active" : ""}
          >
            about
          </a>
          <a
            href="/#our-way"
            className={props.activeTab === "our-way" ? "active" : ""}
          >
            our way
          </a>
          <a
            href="/#products"
            className={props.activeTab === "products" ? "active" : ""}
          >
            products
          </a>
          <a
            href="/#partners"
            className={props.activeTab === "partners" ? "active" : ""}
          >
            partners
          </a>
          <a
            href="/#contact"
            className={props.activeTab === "contact" ? "active" : ""}
          >
            contact us
          </a>
        </NavBar>
        <Row>
          <SocialIcon
            href={"https://www.facebook.com/fundfolio.in"}
            target={"_blank"}
          >
            {device === "large" ? (
              <Image
                loader={gumletLoader}
                src={"/facebook.svg"}
                width={44}
                height={44}
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
                width={44}
                height={44}
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
                width={44}
                height={44}
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
                width={44}
                height={44}
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
        </Row>
      </Row>
    </Container>
  );
};

export default Header;
