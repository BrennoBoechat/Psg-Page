import React from 'react'
import { ScoreBoardContainer } from './styled'
import PsgLogo from "../../assets/psg-logo2.svg"
import Montp from "../../assets/montpellier-logo.svg"

function Scoreboard() {
  return (
    <ScoreBoardContainer>
        <h2>Montpellier</h2>
        <img className='montp' src={Montp}/>
        <h2 className='scoreboard'>0 - 4</h2>
        <img className='psg' src={PsgLogo}/>
        <h2>PSG</h2>
    </ScoreBoardContainer>
  )
}

export default Scoreboard