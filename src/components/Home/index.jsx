import React, { useEffect, useLayoutEffect, useState } from "react";

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

  useEffect(() => {
    const handleResize = () => {
      setDevice(window.innerWidth <= 767 ? "mobile" : "pc");
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { RiveComponent } = useRive({
    src:
      device == "mobile"
        ? "assets/rives/first_fold_mobile.riv"
        : "assets/rives/first_fold.riv",
    autoplay: true,
    layout: new Layout({ fit: Fit.Cover, alignment: Alignment.CenterRight }),
  });
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
        <GalaxyBackground />
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
            loader={gumletLoader}
            src="/yc_logo.svg"
            height={30}
            width={138}
            alt="fundfolio y-combinator"
          />
        )}
      </BottomLogoContainer>
    </Container>
  );
};
export default Home;
