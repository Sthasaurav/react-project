import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './assets/components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-green-400 p-6">Tailwind</h1>

  <Card user="Saurav" btnText="click me"/>
  <Card user="Jenisha" btnText="click me jenisha"/>

  <Card user="Rojan" btnText="click me rijan"/>

  </>
  )
}

export default App
