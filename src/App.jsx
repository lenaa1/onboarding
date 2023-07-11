import { useState } from 'react'
import './App.css'
import {Header} from "./blocks/header/header.tsx";
import {Main} from "./blocks/Main/Main.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
        <Main />
    </>
  )
}

export default App
