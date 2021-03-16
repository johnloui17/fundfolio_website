import React, { useEffect, useState } from "react";
import {
  Container,
  HoverNav,
  Heading,
  Row,
  DisplayCard,
  BackgroundIcon,
} from "./style";
import Image from "next/image";
import { gumletLoader } from "../../utils/gumletLoader";

const attributes = ["educate", "engage", "elevate"];
const OurWay = (props) => {
  const [currentAttr, setCurrentAttr] = useState("educate");
  useEffect(() => {
    let k = 0;
    let intervalId;
    setInterval(() => {
      intervalId = setCurrentAttr(attributes[k % 3]);
      console.log(k);
      k++;
    }, 5000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <Container id="our-way">
      <Row>
        <HoverNav>
          <Heading>our way</Heading>
          <ul>
            <li
              className={currentAttr === "educate" ? "active" : ""}
              onClick={() => setCurrentAttr("educate")}
            >
              <span>01</span> educate
            </li>
            <li
              onClick={() => setCurrentAttr("engage")}
              className={currentAttr === "engage" ? "active" : ""}
            >
              <span>02</span> engage
            </li>
            <li
              onClick={() => setCurrentAttr("elevate")}
              className={currentAttr === "elevate" ? "active" : ""}
            >
              {" "}
              <span>03</span> elevate
            </li>
          </ul>
        </HoverNav>
        <DisplayCard>
          <BackgroundIcon>
            <Image
              loader={gumletLoader}
              src={
                currentAttr === "educate"
                  ? "/educate.svg"
                  : currentAttr === "engage"
                  ? "/engage.svg"
                  : "/elevate.svg"
              }
              width={200}
              height={200}
            />
          </BackgroundIcon>
          <p className={currentAttr === "educate" ? "active" : ""}>
            high quality and proven educational modules that can help everyone
            learn about the financial market
          </p>
          <p className={currentAttr === "engage" ? "active" : ""}>
            platforms where users can engage, discuss and keep themselves
            updated about the developments in the market
          </p>
          <p className={currentAttr === "elevate" ? "active" : ""}>
            products and services to make sure you win in the stock market and
            achieve financial freedom.
          </p>
        </DisplayCard>
      </Row>
    </Container>
  );
};

export default OurWay;
