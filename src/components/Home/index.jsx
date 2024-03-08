import React, { useState, useEffect } from "react";
import {
  Container,
  ImageBackground,
  Content,
  ContentWrapper,
  BottomLogoContainer,
} from "./style";
import Image from "next/image";
import { gumletLoader } from "../../utils/gumletLoader";
import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";

function Galaxy() {
  const { rive, RiveComponent } = useRive({
    src: "/assets/rives/web_02.riv",
    autoplay: true,
    // layout: new Layout({ fit: Fit.Cover, alignment: Alignment.Center }),
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
  useEffect(() => {
    if (window.innerWidth < 767) setDevice("mobile");
    if (window.innerWidth > 767 && window.innerWidth < 1024)
      setDevice("tablet");

    if (window.innerWidth > 1920) setDevice("large");
  }, []);
  const handleHeaderClick = () => {
    document.getElementById("contact").scrollIntoView();
    props.setIsScrolling(true);
    setTimeout(() => {
      props.setIsScrolling(false);
    }, 750);
  };

  return (
    <Container id="home">
      <ImageBackground>
        {device === "mobile" ? <Galaxy /> : <Galaxy />}
      </ImageBackground>
      <ContentWrapper>
        <Content>
          <h1>
            <span className="noBold">
              {" "}
              we’re {device == "mobile" && <br />}
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
