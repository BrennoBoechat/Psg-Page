import React from 'react'
import { FooterContainer } from './styled'

function Footer() {
  return (
    <FooterContainer>
        <div>
            <h1>LINGUAS</h1>
            <ul>
                <li>English</li>
                <li>Français</li>
                <li>Español</li>
                <li>العربية</li>
                <li>Bahasa Indonesia</li>
                <li>中文</li>
            </ul>
        </div>

        <div>
            <h1>REDES SOCIAIS</h1>
            <ul>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Youtube</li>
            </ul>
        </div>

        <div>
            <h1>CLUBE</h1>
            <ul>
                <li>Patrocinadores</li>
            </ul>
        </div>
    </FooterContainer>
  )
}

export default Footer