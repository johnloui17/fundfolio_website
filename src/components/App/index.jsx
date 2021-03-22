import React from 'react'
import Header from '../Header'

const App = (props) => (
  <main style={{backgroundColor:"#0d0a1b"}}>
    <Header {...props}/>
    {props.children}
  </main>)


export default App
