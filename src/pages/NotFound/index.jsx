import styled from "styled-components";


const NotFoundStyled = styled.section`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 80vh;
    h2{
        font-size: 150px;
        color: #1149c3;
        margin: 0;
    }

    p{
        margin: 0;
        font-size: 20px;    
        color: var(--negro);
    }

`	

function NotFound() {
    return (
        <NotFoundStyled>
            <h2>404</h2>
            <p>No hay nada por acá</p>
        </NotFoundStyled>
    )

}     

export default NotFound;