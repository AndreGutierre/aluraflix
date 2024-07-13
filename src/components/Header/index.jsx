import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "./LogoMain.png";
import HeaderLink from "../HeaderLink/index";

const HeaderStyled = styled.header`
    //background-color: #262626;
    color: #FFF;
    display: flex;
    flex-direction: column;
   
    align-items: center;
   
    padding: 3em 10em 0 10em;
    gap: 1em;

    section{
        display: flex;
        flex-direction: column;
        align-items: center;
       
    }
    h1{
        display: flex;
        justify-content: center;
        font-size: 14px;
        font-weight: 400;
        color: var(--negro);

    }
    img {
        height: 40px; 
        justify-content: center;
       
    }

   
    
`;


const Header=()=> {
    return (
        <HeaderStyled>
            <section>
            <Link to="/">
                <img src={logo} alt="Logo AluraFlix"/>
            </Link>
            <h1>La plataforma full stack más grande de Latam</h1>
            </section>
           
            <nav>
                <HeaderLink url="./">Home</HeaderLink>
                <HeaderLink url="./favoritos">Favoritos</HeaderLink>
                <HeaderLink url="./agregarvideo">Agregar</HeaderLink>
            </nav>
        </HeaderStyled>
    );
}

export default Header;