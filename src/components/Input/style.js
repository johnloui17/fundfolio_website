import styled from 'styled-components'
import { rem } from '../../utils/remConverter';

export const Container = styled.div`
    width: ${rem(480)};
    background: transparent;
    color: #fff;
    border-bottom: 1px solid #fff;
    margin-bottom: ${rem(48)};
    label{
        display: block;
        font-size: 20px;
        font-family: 'gilroymedium';
    }
    input{
        width: 100%;
        background: none;
        padding: 8px 0 16px;
        border: none;
        font-size: 30px;
        font-weight: 500;
        color: #fff;
        outline: none;
        font-family: 'gilroymedium';
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    /* Firefox */
    input[type=number] {
    -moz-appearance: textfield;
    }
 `;   