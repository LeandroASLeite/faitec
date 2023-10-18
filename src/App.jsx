import { useState } from 'react'
import './App.css'
import Contact from './components/Contact'
import FooterPage from './components/FooterPage'
import TopBar from './components/TopBar'
import Home from './components/Home'
import About from './components/About'
import Download from './components/Download'
import Extra from './components/Extra'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopBar />

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="download">
        <Download />
      </section>

      <section id="extra">
        <Extra />
      </section>

      <section id="contact">
        <Contact />
      </section>
      <FooterPage />

    </>
  )
}

export default App
