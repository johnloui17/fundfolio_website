import React, { useEffect, useState } from "react";
import { Container, Heading, Row, Column, ImageWrapper } from "./style";
import Image from "next/image";
import { gumletLoader } from "../../utils/gumletLoader";

const Partners = (props) => {
  return (
    <Container id="our-way">
      <Heading>our partners</Heading>
      <Row>
        <Column className="column_1">
          <Image
            loader={gumletLoader}
            src="/goldenPi.png"
            width={217}
            height={80}
          />
        </Column>
        <Column className="column_2">
          <Image
            loader={gumletLoader}
            src="/zerodha.png"
            width={217}
            height={80}
          />
        </Column>
        <Column className="column_3">
          <Image
            loader={gumletLoader}
            src="/upstock.png"
            width={217}
            height={80}
          />
        </Column>
        <Column className="column_4">
          <Image
            loader={gumletLoader}
            src="/tradingView.png"
            width={217}
            height={80}
          />
        </Column>
        <Column className="column_5">
          <Image
            loader={gumletLoader}
            src="/iifl.png"
            width={217}
            height={80}
          />
        </Column>
        <Column className="column_6">
          <Image
            loader={gumletLoader}
            src="/tickerTape.png"
            width={217}
            height={80}
          />
        </Column>
      </Row>
    </Container>
  );
};

export default Partners;
