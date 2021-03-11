import styled from 'styled-components'
import { rem } from '../../utils/remConverter';

export const Container = styled.div`
    width: 100vw;
    position: relative;
    padding: ${rem(90)} ${rem(150)};
 `;   
export const ImageBackground = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    img{
        height: 100%;
        object-fit: cover;
    }
`;

export const Heading = styled.div`
    color: rgba(256,256,256,0.2);
    font-size: ${rem(38)};
    font-weight: bold;
    letter-spacing: 0.2px;
    margin-bottom: ${rem(40)};
    position: relative;
    font-family: 'gilroybold';
`;