import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    width: 100%;
    color: #ffffff;
    padding : 5px 0 0 0;
    label{
        font-size: 16px;
        font-weight: 400;
        color: #ffffff;
        padding : 5px 0;
    }
`
const StyledOptionList = styled.select`
    background-color: #ffffff;
    border-radius: 5px;
    border: none;
    color: #2271D1;
    height: 45px;
    padding: 10px;
    font-size: 14px;
  
    box-sizing: border-box;


`



const OptionList = ({ name, valor, actualizarValor }) => {

    const equipos = [
        "Front End",
        "Back End",
        "Programación",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y Gestión",
    ]
    
    return (
        <>
            <Container>
                <label>{name}</label>
                <StyledOptionList value={valor} onChange={(e) => actualizarValor(e.target.value)}>
                
                    <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
                    {equipos.map((equipo, index) => {
                        //Se podria sacar este return y las llaves fucsias
                        return <option key={index} value={equipo}>{equipo}</option>
                    })}
                </StyledOptionList>
            </Container>
        </>
    )
}

export default OptionList;