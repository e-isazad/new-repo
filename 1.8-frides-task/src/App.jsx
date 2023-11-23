import React from 'react'
import './App.css'
import Cardsx from './components/Cards'
import Loginn from './components/Login'
import Registerr from './components/Register'

function App() {

  return (
    <React.Fragment>
      <h1>Hello</h1>
      <Loginn/>
      <Registerr/>
      <Cardsx/>
    </React.Fragment>
  )
}

export default App
