import React, { useEffect, useState } from "react";

import Image from "next/image";

import { gumletLoader } from "../../utils/gumletLoader";
import { Container, NavBar, Row, SocialIcon } from "./style";
import Icons from "../Icons";
const Header = (props) => {
  const [device, setDevice] = useState("");
  useEffect(() => {
    if (window.innerWidth > 1920) setDevice("large");
  }, []);
  const handleHeaderClick = () => {
    props.setIsScrolling(true);
    setTimeout(() => {
      props.setIsScrolling(false);
    }, 750);
  };
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
        <Row>
          <SocialIcon
            href={"https://www.youtube.com/@marketfeedbyShariqueSamsudheen"}
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
                src={"/you-tube.svg"}
                width={22}
                height={22}
              />
            )}
          </SocialIcon>
          <SocialIcon
            href={"https://www.instagram.com/marketfeed.app"}
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
            href={"https://twitter.com/marketfeedapp"}
            target={"_blank"}
          >
            {device === "large" ? (
              <Icons name="twitterLogo" width={44} height={44} />
            ) : (
              <Icons name="twitterLogo" width={22} height={22} />
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
            href={"https://in.linkedin.com/company/marketfeedapp"}
            target={"_blank"}
          >
            {device === "large" ? (
              <Icons name="linkedin" width={44} height={44} />
            ) : (
              <Icons name="linkedin" width={22} height={22} />
            )}
          </SocialIcon>
        </Row>
      </Row>
    </Container>
  );
};

export default Header;
