import React from 'react'
import { HeaderContainer } from './styled'
import PsgLogo from "../../assets/psg-logo.svg"

function Header() {
  return (
    <HeaderContainer>
        <div className='psg-logo'>
            <img src={PsgLogo}/>
        </div>

            <nav>
                <ul>
                    <li>Inicio</li>
                    <li>Resultados</li>
                    <li>Noticias</li>
                    <li>Clubes</li>
                    <li>Lojas</li>
                </ul>
            </nav>
            
        <div className='login-register'>
            <button className='login'>ENTRAR</button>
            <button className='register'>REGISTRE-SE</button>
        </div>
    </HeaderContainer>
  )
}

export default Header