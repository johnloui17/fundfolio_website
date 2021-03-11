import * as React from 'react';
import {Container, ImageBackground, Content, ContentWrapper} from './style';
import Image from 'next/image'
import Button from '../Button';
import Icons from '../Icons';
import {gumletLoader} from '../../utils/gumletLoader'
const Home = (props) => (
  <Container id="home">
    <ImageBackground>
      <Image loader={gumletLoader} src="/home-bg.png" className="background" layout={'fill'} alt="fundfolio website background"/>
    </ImageBackground>
    <ContentWrapper>
      <Content>
        <h1>we help you win the stock market</h1>
        <p>join the next billion revolution</p>
        <Button><Icons name='arrow' fill="#fff" style={{marginRight: 10}}/><span>join us</span></Button>
      </Content>
    </ContentWrapper>
  </Container>
)

export default Home
