import * as React from 'react'
import {Container, Heading, Row, LeftSection, RightSection, ImageWrapper} from './style'
import Image from 'next/image';
import {gumletLoader} from '../../utils/gumletLoader'
const About = (props) => {
  console.log(props.onView);
  return (
  <Container id="about">
    <Heading>about</Heading>
    <Row>
      <LeftSection>
        <h1>we are democratizing capital markets</h1>
        <p>our products are meticulously designed to disentangle and simplify financial assets and capital markets. our class-leading platforms offer end-to-end integration of pragmatic learning , actionable insights and a snowballing community.</p>
      </LeftSection>
      <RightSection onView={props.onView}>
        <ImageWrapper>
          <Image loader={gumletLoader} src="/pattern.svg" width={118} height={102} />
        </ImageWrapper>
        <h2>600k+</h2>
        <p>community <br/>members</p>
      </RightSection>
    </Row>
  </Container>
)
}
export default About
