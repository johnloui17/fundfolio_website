import React from 'react'
import { Container} from './style'
const Input = (props) => {
  let labelStyle = ()=>{
    if (props.value === "") {
      return {color:"#fff"}
    }
    else {
      return { color: "#fff", opacity:"0.4"}
    }
  }
  return(
  <Container>
    <label style={labelStyle()}>{props.label}</label>
    <input {...props}/>
  </Container>
)}

export default Input
