import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../Footer/LogoMain.png";

const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    padding: 2em 0;
    h1{
        font-size: 10px;
        font-weight: 600;
        margin: 0;
    }   

    h2{
        font-size: 10px;
        margin:0;
        font-weight: 400;
    }
    img{
        width: 100px;
    
    }

`


const FooterAlura = () => {
    return (
        <div>
            <StyledFooter>
                    <Link to="/">
                        <img src={logo} alt="Logo AluraFlix" />
                    </Link>
                    <h1>La plataforma full stack más grande de Latam</h1>
                    <h2>Diseñado por Felipe Valenzuela 2024</h2>
                    <h2>contacto@Lhasa.cl</h2>
            </StyledFooter>
        </div>
    )
}

export default FooterAlura