import styled from "styled-components";


const StyledFormButton = styled.button`

    margin-top: 2em;
  width: 100px;
  height:100px;
  z-index: 2; /* Asegura que el botón esté sobre el overlay */
  padding: 10px 20px;
  background-color: transparent;
  color: #ffffff;
  border: 1px #ffffff solid;
  color: #ffffff;
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;
  transition: background-color 0.9s, border-radius 0.3s, color 0.7s; /* Transiciones */

  &:hover {
    background-color: #fff;
    border-radius: 60px;
    transition: background-color 0.9s, border-radius 0.7s, color 0.7s, scale 0.7s;
    color: #2271D1;
    font-weight: 500;
    scale: 1.2;
}


`;


const FormButton = ({ type ="submit", children, onClick }) => {
    return (
        <StyledFormButton type={type} onClick={onClick}>
            {children}
        </StyledFormButton>
    )
}

export default FormButton