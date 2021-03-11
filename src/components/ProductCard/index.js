import React, {useEffect, useState} from 'react'
import { Container} from './style'
import Icon from '../Icons'
import Image from 'next/image';
const ProductCard = (props) => {
  const [width, setWidth] = useState(props.width);   
  const [height, setHeight] = useState(props.height);
  const [fill, setFill] = useState(null);
  const mouseEnter = () => {
      setWidth(props.scaledWidth);
      setHeight(props.scaledHeight);
      setFill("#000");
  }
  const mouseleave = () => {
      setWidth(props.width);
      setHeight(props.height);
      setFill(null);
  }
  return(
  <Container type={props.type} onMouseEnter={mouseEnter} onMouseLeave={mouseleave}>
    <div className='icon-wrapper'>
        <Icon name={props.type} width={width} height={height} fill={fill}/>
    </div>
    <div className="heading">{props.heading}</div>
    <div className="desc">{props.desc}</div>
    <a className="link" href={props.href} target="_blank">
        <Icon name='arrow'/> 
        {
            props.href !== ""?
            <span>explore now</span>
            :
            <span>work in progress</span>

        }
    </a>
  </Container>
)}

export default ProductCard
