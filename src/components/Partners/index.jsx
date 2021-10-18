import React, { useEffect, useState } from "react";
import { Container, Heading, Row, Column, ImageWrapper } from "./style";
import Image from "next/image";
import { gumletLoader } from "../../utils/gumletLoader";

const height = 80;
const width = 217;
const scaledHeight = height * 2;
const scaledWidth = width * 2;
const Partners = (props) => {
  const [device, setDevice] = useState("");
  useEffect(() => {
    if (window.innerWidth > 1920) setDevice("large");
  }, []);
  return (
    <Container id="partners">
      <Heading>our integrations</Heading>
      <Row>
        {device === "large" ? (
          <>
            <Column className="column_1">
              <Image
                loader={gumletLoader}
                src="/goldenPi.png"
                width={scaledWidth}
                height={scaledHeight}
              />
            </Column>
            <Column className="column_2">
              <Image
                loader={gumletLoader}
                src="/zerodha.png"
                width={scaledWidth}
                height={scaledHeight}
              />
            </Column>
            <Column className="column_3">
              <Image
                loader={gumletLoader}
                src="/upstock.png"
                width={scaledWidth}
                height={scaledHeight}
              />
            </Column>
            <Column className="column_4">
              <Image
                loader={gumletLoader}
                src="/tradingView.png"
                width={scaledWidth}
                height={scaledHeight}
              />
            </Column>
            <Column className="column_5">
              <Image
                loader={gumletLoader}
                src="/iifl.png"
                width={scaledWidth}
                height={scaledHeight}
              />
            </Column>
            <Column className="column_6">
              <Image
                loader={gumletLoader}
                src="/tickerTape.png"
                width={scaledWidth}
                height={scaledHeight}
              />
            </Column>
          </>
        ) : (
          <>
            <Column className="column_1">
              <Image
                loader={gumletLoader}
                src="/goldenPi.png"
                width={width}
                height={height}
              />
            </Column>
            <Column className="column_2">
              <Image
                loader={gumletLoader}
                src="/zerodha.png"
                width={width}
                height={height}
              />
            </Column>
            <Column className="column_3">
              <Image
                loader={gumletLoader}
                src="/upstock.png"
                width={width}
                height={height}
              />
            </Column>
            <Column className="column_4">
              <Image
                loader={gumletLoader}
                src="/tradingView.png"
                width={width}
                height={height}
              />
            </Column>
            <Column className="column_5">
              <Image
                loader={gumletLoader}
                src="/smallcase.svg"
                width={width}
                height={height}
              />
            </Column>
            <Column className="column_6">
              <Image
                loader={gumletLoader}
                src="/tickerTape.png"
                width={width}
                height={height}
              />
            </Column>
          </>
        )}
      </Row>
    </Container>
  );
};

export default Partners;
