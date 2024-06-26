import styled from "styled-components"
import imagen from "./background_image.png"
import player from './player.png'

const BannerStyle = styled.section`
    margin-top: 5px;
    background-image: url(${props => props.$imagen});
    background-position: center;
    background-size: 100% 100%;
    height: 89vh;
    width: 100%;
    box-shadow: inset 0 80px 60px -60px #2271D1;
    
`
const PantallaAzul = styled.div`
    background-color: rgba(0,18,51,.5);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
`

const TextoDiv = styled.div`
    /* background-color: red; */
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    padding: 40px;
    &>label {
        background-color: #6BD1FF;
        width: 300px;
        height: 92px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 48px;
        font-weight: 900;
        color: white;
        border-radius: 15px;
    }
    &>h2 {
        font-size: 46px;
        margin-top: 30px;
        color: white;
    }
    &>div {
        font-family: 'SourceSansProLight';
        font-size: 18px;
        font-weight: 200;
        margin-top: 10px;
        color: white;
    }
`

const VideoDiv = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-right: 20px;
    box-sizing: border-box;
    align-items: center;
`

const ImgVideo = styled.img`
    height: 334px;
    width: 85%;
    position: relative;
    top: 50px;
`

const Banner = () => {
    let texto = 'Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.'
    return (
        <BannerStyle $imagen={imagen}>
            <PantallaAzul>
                <TextoDiv>
                    <label>FRONT END</label>
                    <h2>Challenge React</h2>
                    <div>{texto}</div>
                </TextoDiv>  
                <VideoDiv>
                    <ImgVideo src={player} alt=""/>
                </VideoDiv>                
            </PantallaAzul>
        </BannerStyle>
    )
}

export default Banner