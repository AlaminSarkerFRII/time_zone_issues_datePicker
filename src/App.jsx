import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyDatePicker from './components/MyDatePicker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <h2>Test DatePicker </h2>

    <MyDatePicker/>


      
    </>
  )
}

export default App
