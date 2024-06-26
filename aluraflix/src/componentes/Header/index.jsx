import styled from 'styled-components'
import { BotonHeader } from '../BotonHeader'

const HeaderStyle = styled.header`
    width: 100%;
    height: 11vh;
    background: Black ;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 0 5px 5px 5px #2271D1;
`
const Img = styled.img`
    position:relative;
    top: 5px;
    height: 80%;
    width: auto;
`
const FrameBotones = styled.div`
    min-width:350px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 20px;
`

const Header = () => {
    return (
        <HeaderStyle>
            <Img src='/img/LogoMain.png' alt="Logo"/>
            <FrameBotones>
                <BotonHeader value='HOME' activo={true}/>
                <BotonHeader value='NUEVO VIDEO'/>
            </FrameBotones>            
        </HeaderStyle>
    )
}

export default Header