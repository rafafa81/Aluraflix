import styled from 'styled-components'
import Logo from './LogoMain.png'
import { BotonHeader } from '../BotonHeader'

const HeaderStyle = styled.header`
    width: 100%;
    height: 100px;
    background: Black ;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 0 2px 3px 3px #2271D1;
`
const Img = styled.img`
    height: 60%;
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
            <Img src={Logo} alt="Logo"/>
            <FrameBotones>
                <BotonHeader value='HOME' activo={true}/>
                <BotonHeader value='NUEVO VIDEO'/>
            </FrameBotones>            
        </HeaderStyle>
    )
}

export default Header