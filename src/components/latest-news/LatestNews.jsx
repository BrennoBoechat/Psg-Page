import React from 'react'
import { LatestNewsContainer } from './styled'
import Messi from "../../assets/messi.svg"
import Mbappe1 from "../../assets/mbappe1.svg"
import Mbappe2 from "../../assets/mbappe2.svg"

function LatestNews() {
  return (
    <LatestNewsContainer>
        <div className='news'>

        <div className='title'>
            <h1>ULTIMAS NOTÍCIAS</h1>
        </div>

        <div className='images'>
          <div>
            <img src={Messi}/>
              <div className='news-title'>
                <h2 className='button-news'>EQUIPE PRINCIPAL</h2>
                <p className='date'>17 Maio 2022</p>
              </div>
            <p className='info-news'>Messi deseja comprar 35% das ações de clube.</p>
          </div>

          <div>
            <img src={Mbappe1}/>
              <div className='news-title'>
                <h2 className='button-news'>EQUIPE PRINCIPAL</h2>
                <p className='date'>17 Maio 2022</p>
              </div>
            <p className='info-news'>Tudo sobre a vitória em Montpellier</p>
          </div>

          <div>
            <img src={Mbappe2}/>
              <div className='news-title'>
                <h2 className='button-news'>EQUIPE PRINCIPAL</h2>
                <p className='date'>17 Maio 2022</p>
              </div>
            <p className='info-news'>Mbappé no Liverpool?</p>
          </div>
        </div>

        <div className='more'>
            <button>CARREGAR MAIS</button>
        </div>

        </div>
    </LatestNewsContainer>
  )
}

export default LatestNews