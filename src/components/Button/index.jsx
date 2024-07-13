import styled from "styled-components";


const StyledButton = styled.button`

position: absolute;
top: 70px;
left: -70px;
  width: 100px;
  height:100px;
  z-index: 2; /* Asegura que el botón esté sobre el overlay */
  padding: 10px 20px;
  background-color: transparent;
  color: #000000;
  border: 1px #000000 solid;
  
  color: #000000;
  font-size: 20px;
  font-weight: lighter;
  cursor: pointer;
`;


const Button = ({ children }) => {
    return (
        <StyledButton>
            {children}
        </StyledButton>
    )
}

export default Button