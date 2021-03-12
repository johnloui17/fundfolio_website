import * as React from 'react'
import { Container, Row, SocialIcon, Column, SubHeading, FooterLink, Copyright,SocialRow } from './style'
import Image from 'next/image'
import Link from 'next/link'
import Icons from '../Icons';
import {gumletLoader} from '../../utils/gumletLoader'
const Footer = (props) => {
  return(
    <Container>
        <Row>
            <Column>
                <Image loader={gumletLoader} src={"/fundfolio.svg"} width={114} height={20}/>
                <p className="desc">Kinfra Hi-Tech Park<br/>
                    HMT Colony, P.O, Kalamassery<br/>
                    Kochi, Kerala 683503</p>
                <SocialRow>
                    <SocialIcon href={"https://www.facebook.com/fundfolio.in"} target={"_blank"}>
                        <Image loader={gumletLoader} src={'/facebook.svg'} width={22} height={22}/>
                    </SocialIcon>
                    <SocialIcon href={"https://twitter.com/MarketfeedNews"} target={"_blank"}>
                        <Image loader={gumletLoader} src={'/twitter.svg'} width={22} height={22}/>
                    </SocialIcon>
                    <SocialIcon href={"https://www.instagram.com/fundfoliohq/"} target={"_blank"}>
                        <Image loader={gumletLoader} src={'/instagram.svg'} width={22} height={22}/>
                    </SocialIcon>
                    <SocialIcon href={"https://www.youtube.com/channel/UC9CKy1ai9qI8p6_Oh0Qa3Rg"} target={"_blank"}>
                        <Image loader={gumletLoader} src={'/you-tube.svg'} width={22} height={22}/>
                    </SocialIcon>
                </SocialRow>
            </Column>
            <Column>
                <SubHeading>products</SubHeading>
                <Link href="https://fundfolio.in" >
                    <FooterLink target={"_blank"}>fundfolio.in</FooterLink>
                </Link>
                <Link href="https://marketfeed.news/" >
                    <FooterLink target={"_blank"}>marketfeed.news</FooterLink>
                </Link>
                <Link href="https://marketfeed.app" >
                    <FooterLink target={"_blank"}>marketfeed.app</FooterLink>
                </Link>
                <Link href="https://breakout.army/" >
                    <FooterLink target={"_blank"}>breakout</FooterLink>
                </Link>
            </Column>
            <Column>
                <SubHeading>company</SubHeading>
                <Link href="/#about" >
                    <FooterLink>about</FooterLink>
                </Link>
                <Link href="https://marketfeed.news/" >
                    <FooterLink target={"_blank"}>jobs</FooterLink>
                </Link>
            </Column>
            <Column>
                <SubHeading>resources</SubHeading>
                <Link href="/#about" >
                    <FooterLink>disclaimer</FooterLink>
                </Link>
                <Link href="https://marketfeed.news/" >
                    <FooterLink target={"_blank"}>help & support</FooterLink>
                </Link>
                <Link href="https://marketfeed.news/" >
                    <FooterLink target={"_blank"}>privacy policy</FooterLink>
                </Link>
                <Link href="https://marketfeed.news/" >
                    <FooterLink target={"_blank"}>terms & conditions</FooterLink>
                </Link>
            </Column>
        </Row>
        <Row>
            <Copyright><span>made with</span><Icons name='love'/><span>by fundfolio.in.</span></Copyright>
        </Row>
    </Container>
)}

export default Footer
