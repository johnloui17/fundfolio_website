import * as React from "react";
import { Container } from "./style";
import Image from "next/image";
const Button = (props) => {
  return <Container {...props}>{props.children}</Container>;
};

export default Button;
