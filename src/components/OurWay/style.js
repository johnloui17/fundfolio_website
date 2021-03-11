import styled from 'styled-components';
import { rem } from '../../utils/remConverter';

export const Container = styled.div`
    width: 100vw;
    background: #0d0a1b;
    padding: ${rem(150)};
`;
export const HoverNav = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    min-width: ${rem(350)};
    li{
       color: #fff;
       font-size: ${rem(60)};
       letter-spacing: 0.2px;
       display: flex;
       align-items: center;
       cursor: pointer;
       margin-bottom: ${rem(20)};
       transition: all 0.3s ease;
       font-family: 'gilroybold';
       span{
           font-size: ${rem(20)};
           font-weight: 300;
           margin-right: ${rem(26)};
        }
    }   
    li.active{
        background: -webkit-linear-gradient(left, #40eaf5 , #504dff);
        background: -o-linear-gradient(right, #40eaf5, #504dff);
        background: -moz-linear-gradient(right, #40eaf5, #504dff);
        background: linear-gradient(to right, #40eaf5 , #504dff); 
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: ${rem(80)};
        font-family: 'gilroybold';
    }
`;

export const Row = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
`;

export const Heading = styled.div`
    color: rgba(256,256,256,0.2);
    font-size: ${rem(38)};
    font-weight: bold;
    letter-spacing: 0.2px;
    margin-bottom: ${rem(40)};
`;

export const DisplayCard = styled.div`
    width: ${rem(754)};
    height: ${rem(600)};
    border-radius: ${rem(16)};
    background-image: linear-gradient(to top, #201e2d, #120f20);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-left: ${rem(30)};
    p{
        transition: all 0.5s ease-in;
        opacity: 0;
        color: #fff;
        width: ${rem(436)};
        position: absolute;
        top: ${rem(190)};
        left: ${rem(196)};
        font-size: ${rem(30)};
        line-height: 1.2;
        font-weight: 500;
        font-family: 'gilroybold';
    }
    p.active{
        animation-delay: 0.5s;
        opacity: 1;
    }
`;

export const BackgroundIcon = styled.div`
    position: absolute;
    z-index: 0;
    top: ${rem(60)};
    left: ${rem(100)};
`;