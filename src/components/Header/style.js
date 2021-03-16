import styled from 'styled-components'
import { rem } from "../../utils/remConverter";
export const Container = styled.div`
    width: 100vw;
    height: ${rem(70)};
    background ${props => props.transparent? 'transparent': 'rgba(0, 0, 0, 0.06)'};
    -webkit-backdrop-filter: blur(100px);
    backdrop-filter: blur(100px);
    transition: background 0.5s ease;
    position: fixed;
    top: 0;
    z-index:10;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 100px;
    @media (max-width: 1024px) and (min-width: 768px) {
        padding: 0 50px;
    }
    @media (max-width: 767px){
        padding: 0 20px;
    }
`;

export const NavBar = styled.div`
    margin-right: ${rem(40)};

    a{
        font-size: ${rem(16)};
        font-weight: bold;
        cursor: pointer;
        color: #ffffff;
        margin-left: ${rem(40)};
        text-decoration: none;
        font-family: 'gilroybold';
    }
    a.active{
        color: #f55240;
    }
    a:hover{
        color: #f55240;
    }

    @media (max-width: 1024px) {
        display: none;
    }
`;
export const Row = styled.div`
    display: flex;
`;

export const SocialMediaIcons = styled.div`

`;

export const SocialIcon = styled.a`
    margin-left: 12px;
`;