import React from 'react'
import { Container} from './style'
const Input = (props) => {
  return(
  <Container>
    <label>{props.label}</label>
    <input {...props}/>
  </Container>
)}

export default Input
