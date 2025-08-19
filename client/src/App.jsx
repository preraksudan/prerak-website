import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./Pages/Home";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch("/api")
      .then(res => res.json())
      .then(data => console.log(data))
  }, [])

  return (
    <>
      <h1>React Vite App</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Home/>
      <Hero />
      <Projects />
    </>
  )
}

export default App
