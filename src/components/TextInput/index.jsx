import styled from "styled-components";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    width: 100%;
    
    label{
        font-size: 16px;
        font-weight: 400;
        color: #ffffff;
        padding : 5px 0;
    }
   

   
`
const StyledTextInput = styled.input`
    background-color: #ffffff;
    border-radius: 5px;
    border: none;
    color: #2271D1;
    height: 45px;
    padding: 10px;
    font-size: 14px;
  
    box-sizing: border-box;

   
`
const TextInput = ({ name, placeholder, required, valor, actualizarValor }) => {

    return (
        <Container>
            <label>{name}</label>
            <StyledTextInput
                type="text"
                placeholder={placeholder}
                required={required}
                value={valor}
                onChange={(e) => actualizarValor(e.target.value)} />
        </Container>
    );
};

export default TextInput