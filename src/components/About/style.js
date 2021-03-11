import styled from 'styled-components'
import { rem } from '../../utils/remConverter';

export const Container = styled.div`
    width: 100vw;
    background: #0d0a1b;
    padding: ${rem(137)} ${rem(150)};
`;
export const Row = styled.div`
    display: flex;
    width: 100%;
`;

export const Heading = styled.div`
    color: rgba(256,256,256,0.2);
    font-size: ${rem(38)};
    font-weight: bold;
    letter-spacing: 0.2px;
    margin-bottom: ${rem(40)};
    font-family: 'gilroybold';
`;

export const LeftSection = styled.div`
    max-width: ${rem(615)};
    h1{
        color: #fff;
        font-size: ${rem(60)};
        font-weight: bold;
        line-height: 1.17;
        font-family: 'gilroybold';
    }
    p{
        color: #70707c; 
        line-height: 1.25;
        font-size: ${rem(24)};
        font-weight: 500;
        margin-top: 20px;
        font-family: 'gilroymedium';
    }
`;

export const RightSection = styled.div`
    margin-left: ${rem(150)};
    position: relative;
    .pattern{
        position: absolute;
    }
    h2{
        position: relative;
        font-size: ${rem(100)};
        background: -webkit-linear-gradient(left, #40eaf5 , #504dff);
        background: -o-linear-gradient(right, #40eaf5, #504dff);
        background: -moz-linear-gradient(right, #40eaf5, #504dff);
        background: linear-gradient(to right, #40eaf5 , #504dff); 
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-top: ${rem(40)};
        margin-left: ${rem(30)};
        font-family: 'gilroybold';
    }
    p{
        color: #fff;
        font-size: ${rem(24)};
        font-weight: 500;
        margin-left: ${rem(30)};
        font-family: 'gilroybold';
        opacity: 0.6;
    }
`;

export const ImageWrapper = styled.div`
    position: absolute;
`;
