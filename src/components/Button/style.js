import styled from 'styled-components'
import { rem } from "../../utils/remConverter";
export const Container = styled.button`
    width: ${rem(217)};
    height: ${rem(70)};
    border-radius: 35px;
    border: solid 1px ${props=>props.type=='ghost'?'#f55240':'transparent'};
    background:  ${props=>props.type=='ghost'?'transparent':'#ee368e'};
    background-image: ${props=>props.type=='ghost'?'linear-gradient(to top, transparent, transparent)':'linear-gradient(160deg,#f55240,#ee368e)'};
    color: #fff;
    font-size: ${rem(24)};
    font-weight: bold;
    outline: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'gilroybold';
    span{
      font-family: 'gilroybold';
    }
    svg{
      margin-right: 10px;
      margin-bottom: 5px;
    }
  `;