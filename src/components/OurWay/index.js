import React, {useEffect, useState} from 'react';
import {Container, HoverNav, Heading, Row, DisplayCard, BackgroundIcon} from './style'
import Image from 'next/image';
import {gumletLoader} from '../../utils/gumletLoader'

const OurWay = (props) => {
    const [currentAttr, setCurrentAttr]  = useState('educate');
    
    return(
      <Container id="our-way">
          <Row>
            <HoverNav>
                <Heading>our way</Heading>
                <li 
                    className={currentAttr === "educate"?"active":""}
                    onClick={()=>setCurrentAttr("educate")}
                ><span>01</span> educate</li>
                <li 
                    onClick={()=>setCurrentAttr("engage")} 
                    className={currentAttr === "engage"?"active":""} 
                    ><span>02</span> engage</li>
                <li 
                    onClick={()=>setCurrentAttr("elevate")} 
                    className={currentAttr === "elevate"?"active":""}
                > <span>03</span> elevate</li>
            </HoverNav>
            <DisplayCard>
                <BackgroundIcon>
                    <Image loader={gumletLoader} src={currentAttr === "educate"?'/educate.svg':currentAttr === "engage"?'/engage.svg':'/elevate.svg'} width={200} height={200}/>
                </BackgroundIcon>
                <p className={currentAttr === "educate"?"active":""}>high quality, proven educational modules that can help anyone learn about the stock market.</p>
                <p className={currentAttr === "engage"?"active":""} >once they learn about the stock market, we provide users with platforms where they can engage, discuss and keep themselves updated about the developments in the market.</p>
                <p className={currentAttr === "elevate"?"active":""}>now our users are active participants, we provide them with tools and services which make sure they win in the stock market.</p>
            </DisplayCard>
          </Row>
      </Container>
    )

}

export default OurWay
