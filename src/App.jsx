import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Basic from './Form/New_Validation'
import Form_Validation from './Form/Form_Validation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Form_Validation/>
      {/* <Basic/> */}
    </>
  )
}

export default App
