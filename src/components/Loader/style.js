import styled from "styled-components";
import { rem } from "../../utils/remConverter";

export const Container = styled.div`
  background-image: linear-gradient(45deg, #3f3251 2%, #261a66 100%);
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 15;
  body {
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-family: "proxima-nova-soft", sans-serif;
    -webkit-user-select: none;
    overflow: hidden;
  }
  svg {
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    width: 150px;
    margin: auto;
  }
  vertical-centered-box {
    position: absolute;
    width: 100vh;
    height: 100vh;
    text-align: center;
  }
  vertical-centered-box:after {
    content: "";
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    margin-right: -0.25em;
  }
  vertical-centered-box .content {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: middle;
    text-align: left;
    font-size: 0;
  }
  body {
    background: #2c2d44;
  }
  .loader-circle {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
    margin-left: -60px;
    margin-top: -60px;
  }
  .loader-line-mask {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 120px;
    height: 120px;
    margin-left: -60px;
    margin-top: -60px;
    overflow: hidden;
    -webkit-transform-origin: 60px 60px;
    -moz-transform-origin: 60px 60px;
    -ms-transform-origin: 60px 60px;
    -o-transform-origin: 60px 60px;
    transform-origin: 60px 60px;
    -webkit-mask-image: -webkit-linear-gradient(top, #000000, rgba(0, 0, 0, 0));
    -webkit-animation: rotate 1.2s infinite linear;
    -moz-animation: rotate 1.2s infinite linear;
    -o-animation: rotate 1.2s infinite linear;
    animation: rotate 1.2s infinite linear;
  }
  .loader-line-mask .loader-line {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.5);
  }
  lesshat-selector {
    -lh-property: 0;
  }
  @-webkit-keyframes rotate {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @-moz-keyframes rotate {
    0% {
      -moz-transform: rotate(0deg);
    }
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-o-keyframes rotate {
    0% {
      -o-transform: rotate(0deg);
    }
    100% {
      -o-transform: rotate(360deg);
    }
  }
  @keyframes rotate {
    0% {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  [not-existing] {
    zoom: 1;
  }
  lesshat-selector {
    -lh-property: 0;
  }
  @-webkit-keyframes fade {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.25;
    }
  }
  @-moz-keyframes fade {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.25;
    }
  }
  @-o-keyframes fade {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.25;
    }
  }
  @keyframes fade {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.25;
    }
  }
  [not-existing] {
    zoom: 1;
  }
  lesshat-selector {
    -lh-property: 0;
  }
  @-webkit-keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @-moz-keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @-o-keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  [not-existing] {
    zoom: 1;
  }
`;
