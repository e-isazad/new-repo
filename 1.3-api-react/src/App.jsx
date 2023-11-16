import React from 'react'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import Tablex from './components/Tablex'

function App() {

  return (
    <ChakraProvider>
      <Tablex></Tablex>
    </ChakraProvider>
  )
}

export default App
