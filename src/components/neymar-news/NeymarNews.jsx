import React from 'react'
import { NeymarNewsContainer } from './styled'

function NeymarNews() {
  return (
    <NeymarNewsContainer>
        <div className='neymar-news'>
            <h1>NEYMAR JR</h1>
            <p>“Tenho Messi e Cristiano Ronaldo como ídolos. Se der para pegar um pouquinho de cada um, fico muito feliz.”</p>
            <button className='button-news'>LER MATÉRIA</button>
        </div>
        <span></span>
    </NeymarNewsContainer>
  )
}

export default NeymarNews