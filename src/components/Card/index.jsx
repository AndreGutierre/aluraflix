import styled from "styled-components";
import iconFavoriteInactive from "../../../public/icons/FavoriteInactive.png"
import iconFavoriteActive from "../../../public/icons/FavoriteActive.png"
import iconTrash from "../../../public/icons/Trash.png"
import iconEdit from "../../../public/icons/Edit.png"
import { useFavoritesContext } from "../../context/Favorites";
import { Link } from "react-router-dom";
import { useShowForm } from "../../context/EditFormContext";
import { useVideos } from "../../context/VideoContext";
import EditForm  from "../EditForm/index";


const ContainerCard = styled.div`
  position: relative;
  width: 290px;
  height: 160px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  border-radius: 10px;
  background-image: url(${props => props.$backgroundImage});
  background-size: cover;
  background-position: center;
  box-shadow: 5px 5px 30px rgba(224, 220, 220, 0.2);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1); 
    border-radius: 10px;/* Ajustar la opacidad según sea necesario */
    z-index: 0;
    overflow: hidden;

  }
`;

const StyledIconBar = styled.div`
   

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    width: 90%;
    height: 7px;
    padding: 1em;
    border-radius: 0 0 10px 10px;
    gap: 2em;
    justify-content: space-evenly;
    background-color: rgba(0,0,0, 0.65);
    opacity: 0;
    cursor: pointer;
    transition: transform 0.6s ease-in-out, opacity 0.6s ease-in-out;
    z-index: 2;
    
    
    ${ContainerCard}:hover & {
    transform: translateY(0%);
    opacity: 1;
    }
    
    
    img{
        height: 1em;
    }

    @media (max-width: 810px) {
        opacity: 1;
        position: absolute;
        
        
        background-color: rgba(0,0,0, 0.2);
    }
   
`;



const Card = ({ id, portada, titulo, link, categoria }) => {
    const { favorite, addFavorite } = useFavoritesContext()
    //const [nombreVariable,funcionActualiza] = useState(valorInicial)
    const {toggleForm, setSelectedVideoId } = useShowForm();
    const {  eliminarVideo } = useVideos();
  

    //isFavorite es un true o un false
    const isFavorite = favorite.some(fav => fav.id === id)
    const iconFav = isFavorite ? iconFavoriteActive : iconFavoriteInactive;

    const handleIconClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };

    const handleEditClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setSelectedVideoId(id);
        toggleForm(); // Abre el formulario de edición
    };

    return (
        <>
        <Link to={`/${id}`}>
            <ContainerCard $backgroundImage={portada}>

                <StyledIconBar onClick={handleIconClick}>
                    <img src={iconEdit} alt="Icono Editar" onClick={handleEditClick}  />
                    <img src={iconTrash} alt="Icono Borrar" onClick={()=>eliminarVideo(id)}/>
                    <img src={iconFav} alt="Icono Favorito" onClick={() => addFavorite({ id, portada, titulo })} />
                </StyledIconBar>
                
            </ContainerCard>
        </Link>
        
        </>
    )
}

export default Card