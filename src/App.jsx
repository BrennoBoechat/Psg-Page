import { useState } from 'react'
import { GlobalStyle } from './Global'
import Home from './pages/home/Home'
import Header from "./components/header/Header"
import Scoreboard from './components/scoreboard/Scoreboard'
import Stadium from './components/stadium-history/Stadium'
import LatestNews from './components/latest-news/LatestNews'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Home/>
      <Scoreboard/>
      <Stadium/>
      <LatestNews/>
      <Footer/>
      <GlobalStyle/>
    </>
  )
}

export default App
