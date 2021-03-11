import React from 'react'
import Header from '../Header'

const App = (props) => (
  <main>
    <Header {...props}/>
    {props.children}
  </main>)


export default App
