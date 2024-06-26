import styled from 'styled-components'
import React from 'react'

const FooterStyle = styled.footer`
    height: 125px ;
    width: 100%;
    &>div:nth-child(1){
        background-color: #2271D1;
        height: 4px;
        width: 100%;
    }
    &>div:nth-child(2){
        background-color: black;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
const FooterImg = styled.img`
    width: 169px;
    height: 40px;
`

const Footer = () => {
  return (
    <FooterStyle>
        <div></div>
        <div>
            <FooterImg src='/img/LogoMain.png' alt='' />
        </div>
    </FooterStyle>
  )
}

export default Footer
