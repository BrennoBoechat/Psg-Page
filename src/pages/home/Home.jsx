import React from 'react'
import { HomeContainer } from './styled'
import NeymarNews from '../../components/neymar-news/NeymarNews'
import Stadium from '../../components/stadium-history/Stadium'

function Home() {
  return (
    <HomeContainer>
        <NeymarNews/>
    </HomeContainer>
  )
}

export default Home