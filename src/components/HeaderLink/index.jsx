import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
    text-decoration: none;
    color: var(--negro);
    font-size: 18px;
    font-weight: 400;
    margin: 1em;

    &:hover{
        text-decoration: none;
        color: var(--azul);
        transition: all 0.5s ease;
        
    }
`;


const HeaderLink = ({ url, children }) => {
    return (
           
        <StyledLink to={url}>
            {children}
        </StyledLink>
      
    )
}

export default HeaderLink;

