import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";



import Home from "./Pages/Home";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch("/api")
      .then(res => res.json())
      .then(data => console.log(data))
  }, [])

  return (
    <>
      {/* <h1>React Vite App</h1> */}
      {/* <p>Count: {count}</p> */}
      {/* <button onClick={() => setCount(count + 1)}>Increment</button> */}
      <Navbar />
      <section id=""><Home /></section>
      <section id=""><About /></section>
      <section id=""><Projects /></section>
      <section id=""><Contact /></section>
      <Home/>
      <Hero/>
      <Project />
      <Gallery />
    </>
  )
}

export default App
