import * as React from 'react';
import {Container, Heading, Row} from './style';
import Image from 'next/image'
import Button from '../Button';
import ProductCard from '../ProductCard';
const OurProduct = (props) => (
  <Container id="products">
    <Heading>our products</Heading>
    <Row>
        <ProductCard 
            type="marketfeed"
            heading="to know"
            desc="curated stock market insights with live feed, market news, screeners and sebi-registered advisory"
            href={"https://marketfeed.news/"}
            width={120}
            height={20}
            scaledWidth={244}
            scaledHeight={32}
        />
        <ProductCard 
            type="breakout"
            heading="to learn"
            desc="learn directly from seasoned stock market experts. taste the secret sauce in their journey to success."
            href={"https://breakout.army/"}
            width={112}
            height={19.3}
            scaledWidth={215.8}
            scaledHeight={35}
            />
        <ProductCard 
            type="fundfolioOne"
            heading="to earn"
            desc="get a personal finance companion to help sort all your financial needs."
            href={""}
            width={120}
            height={20}
            scaledWidth={248}
            scaledHeight={30.2}
        />
    </Row>
  </Container>
)

export default OurProduct
