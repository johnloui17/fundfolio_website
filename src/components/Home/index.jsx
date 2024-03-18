import React, { useEffect, useLayoutEffect, useState } from "react";
import { isBrowser, isMobile } from "react-device-detect";

import { Alignment, Fit, Layout, useRive } from "@rive-app/react-canvas";
import Image from "next/image";
import { gumletLoader } from "../../utils/gumletLoader";
import {
  BottomLogoContainer,
  Container,
  Content,
  ContentWrapper,
  ImageBackground,
} from "./style";

function GalaxyBackground({ props }) {
  const [device, setDevice] = useState("");
  const [path, setPath] = useState(false);

  const { rive, RiveComponent } = useRive({
    src: isMobile
      ? "assets/rives/first_fold_mobile.riv"
      : "assets/rives/first_fold.riv",
    autoplay: true,
    layout: new Layout({ fit: Fit.Cover, alignment: Alignment.CenterRight }),
  });

  useLayoutEffect(() => {
    const handleResize = () => {
      setDevice(window.innerWidth <= 767 ? "mobile" : "pc");
    };
    handleResize();
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      let scroll = window.scrollY;
      scroll >= 1100 ? setPath(true) : setPath(false);
    });
  }, []);

  if (path) {
    if (rive) {
      setTimeout(() => {
        rive.reset();
        rive.play();
      }, 2500);
    }
  }

  return (
    <div>
      <RiveComponent style={{ height: "100vh" }} />
    </div>
  );
}

const Home = (props) => {
  const [device, setDevice] = useState("");
  useLayoutEffect(() => {
    if (window.innerWidth < 767) setDevice("mobile");
    if (window.innerWidth > 767 && window.innerWidth < 1024)
      setDevice("tablet");

    if (window.innerWidth > 1920) setDevice("large");
    if (window.innerWidth > 1024 && window.innerWidth < 1441) {
      setDevice("pc");
    }
  }, []);

  return (
    <Container id="home">
      <ImageBackground>
        <GalaxyBackground device={device} />
      </ImageBackground>
      <ContentWrapper>
        <Content>
          <h1>
            <span className="noBold">
              {" "}
              we’re {device === "mobile" && <br />}
            </span>{" "}
            democratizing
            <br /> capital markets
          </h1>
        </Content>
      </ContentWrapper>

      <BottomLogoContainer>
        <p>backed by</p>
        <a
          target="_blank"
          href={"https://www.ycombinator.com/companies/marketfeed"}
        >
          {" "}
          <>
            {device === "large" ? (
              <Image
                src="/yc_logo.svg"
                loader={gumletLoader}
                height={90}
                width={480}
                alt="fundfolio y-combinator"
              />
            ) : (
              <Image
                id="yc"
                loader={gumletLoader}
                src="/yc_logo.svg"
                height={30}
                width={138}
                alt="fundfolio y-combinator"
              />
            )}
          </>
        </a>
      </BottomLogoContainer>
    </Container>
  );
};
export default Home;
