import React, { useEffect, useState } from "react";
import { Container } from "./style";
import Icon from "../Icons";
import Image from "next/image";
const ProductCard = (props) => {
  const [width, setWidth] = useState(props.width);
  const [height, setHeight] = useState(props.height);
  const [fill, setFill] = useState(null);
  const [device, setDevice] = useState("");
  useEffect(() => {
    if (window.innerWidth > 1920&& props.type==="fundfolioOne") {
      setWidth(props.scaledWidth * 2);
      setHeight(props.scaledHeight * 2);
      setDevice("large");
    }
    else if (window.innerWidth > 1920) {
      setWidth(props.scaledWidth * 1.5);
      setHeight(props.scaledHeight * 1.5);
      setDevice("large");
    }
  }, []);
  const mouseEnter = () => {
    if (window.innerWidth > 1920) {
      console.log("in");
      setWidth(props.scaledWidth * 2);
      setHeight(props.scaledHeight * 2);
      setFill("#000");
    }
    if (window.innerWidth > 1024 && window.innerWidth <= 1920) {
      setWidth(props.scaledWidth);
      setHeight(props.scaledHeight);
      setFill("#000");
    }
  };
  const mouseleave = () => {
    if (window.innerWidth > 1920) {
      console.log("in");
      setWidth(props.scaledWidth * 1.5);
      setHeight(props.scaledHeight * 1.5);
      setFill(null);
    }
    if (window.innerWidth === 1920) {
      console.log("in");
      setWidth(props.scaledWidth);
      setHeight(props.scaledHeight);
      setFill(null);
    }
    if (window.innerWidth > 1024 && window.innerWidth < 1920) {
      setWidth(props.width);
      setHeight(props.height);
      setFill(null);
    }
  };
  return (
    <Container
      type={props.type}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseleave}
    >
      <div className="icon-wrapper">
        <Icon name={props.type} width={width} height={height} fill={fill} />
      </div>
      <div className="heading">{props.heading}</div>
      <div className="desc">{props.desc}</div>
      <a className="link" href={props.href} target="_blank">
        {device === "large" ? (
          <Icon name="arrow" width={28} height={26} />
        ) : (
          <Icon name="arrow" />
        )}
        {props.href !== "" ? (
          <span>explore now</span>
        ) : (
          <span>work in progress</span>
        )}
      </a>
    </Container>
  );
};

export default ProductCard;
