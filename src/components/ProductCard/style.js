import styled from 'styled-components'
import { rem } from "../../utils/remConverter";
export const Container = styled.div`
    width: ${rem(360)};
    height: ${rem(384)};
    position: relative;
    padding: ${rem(50)};
    margin-bottom: 20px;
    
    .icon-wrapper{
        position: relative;
        transition: all 0.5s ease;
        z-index: 5;
        &:before{
            content: "";
            width: ${rem(20)};
            height: ${rem(2)};
            background:${props => props.type==='marketfeed'?'#ffc400':props.type==='breakout'?"#14cc60":"#6d5ec8"};
            transition: width 1s ease;
            position: absolute;
        }
        & > svg{
            transition: all 0.5s ease;
            top: 10px;
        }
    }
    svg{
        transition: all 0.5s ease;
        transform: translate(${rem(0)}, ${rem(0)});
        position: relative;
        z-index: 2;
    }
    .heading{
        font-size: 60px;
        font-weight: bold;
        color: #fff;
        letter-spacing: 0.2px;
        margin-top: ${rem(37)};
        transition: opacity 0.2s ease;
        transition-delay: 0.5s;
        font-family: 'gilroybold';
        position: relative;
    }
    
    .desc{
        position: relative;
        color: #fff;
        opacity: 0.3;
        font-weight: 500;
        width: ${rem(196)};
        font-size: ${rem(18)};
        margin-top: ${rem(7)};
        transition: opacity 0.2s ease;
        transition-delay: 0.5s;
        font-family: 'gilroymedium';
    }
    .link{
        color: #131319;
        opacity: 0;
        font-size: 24px;
        font-weight: bold;
        visibility: hidden;
        transition: opacity 0.5s ease;
        position: absolute;
        top: 170px;
        text-decoration: none;
        transition-delay: 0.3s;
        margin-top: ${rem(32)};
        z-index: 1;
        svg{
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.5s ease;
        }
        span{
            opacity: 0;
            margin-left: ${rem(12)};
            transition: opacity 0.5s ease;
        }
    }

    &:hover{
     margin-right: 20px;
    }

    &:after{
        content: "";
        position: absolute;
        width: calc(100% - 24px);
        height: calc(100% - 24px);
        background: transparent;
        background-image: linear-gradient(75deg, transparent, transparent);
        transition: all 0.5s ease;
        top: 0px;
        left: 12px;
        bottom: 0;
        margin: auto;
        border-radius: 16px;
    }
    
    &:before{
        content: "";
        position: absolute;
        border-radius: 26px;
        width: calc(100%);
        height: calc(100%);
        background-image: linear-gradient(-210deg, #201E2D, #120F20);
        top: 0;
        left: 0;
        bottom: 0;
        margin: auto;
        width: ${rem(360)};
        height: ${rem(384)};
        transition: all 0.5s ease;
    }

    &:hover:before{
        width: ${rem(384)};
        height: ${rem(324)};
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.03);
        border: solid 1px #424247;
        background: transparent;
    }

    &:hover:after{
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.03);
        background-image: linear-gradient(75deg,${({type})=>type==='marketfeed'?'#dd7c53':type==='breakout'?'#0aa79d':'#b386fc'}, ${({type})=>type==='marketfeed'?'#ffb800':type==='breakout'?'#14cc74':'#7a67f3'});
        width: ${rem(360)};
        height:  ${rem(300)};
    }
    &:hover > .icon-wrapper {
        transform: translate(${rem(0)}, ${rem(94)});
    }
    &:hover > .icon-wrapper:before{
        width: 0;
    }
    &:hover > .desc{
        opacity: 0;
        visibility: hidden;
    }
    &:hover > .heading{
        opacity: 0;
        visibility: hidden;
    }
    &:hover > .link{
        opacity: 1;
        visibility: visible;
        svg{
            opacity: 1;
            visibility: visible;
        }
        span{
            opacity: 1;
            visibility: visible;
        }
    }
`;
