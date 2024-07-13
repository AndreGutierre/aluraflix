import styled from "styled-components";
import CardGallery from "../CardGallery/index";
import { useVideos } from "../../context/VideoContext";
import { v4 as uuid } from "uuid";  

const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

`
const StyledGallery = styled.div`
    display: flex;
    width: 90vw;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 1em;
    padding-bottom: 3em;
    box-sizing: border-box;
    gap: 1.5em;
    background: linear-gradient(to bottom, #000000, #1708ecb3); /* De fucsia (#ff00ff) a violeta oscuro (#8a2be2) */
    border-radius: 0 0 50px 50px;
    box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.5);

    h2{
      color: #fff;
      font-weight: 200;
      font-size: 24px;
      margin: 2em;
    }
`
const Gallery = ({ busqueda }) => {
  const { videos } = useVideos();

  // Filtrar videos según la búsqueda si hay una búsqueda
  const filteredVideos = busqueda
    ? videos.filter(video => video.titulo.toLowerCase().includes(busqueda.toLowerCase()))
    : videos;

  // Extraer categorías únicas usando Set
  const uniqueCategories = [...new Set(filteredVideos.map(video => video.categoria))];

  return (
    <Container>
      <StyledGallery>
        {filteredVideos.length === 0 ? (
          <h2>No se encontraron videos para la búsqueda `{busqueda}`</h2>
        ) : (
          uniqueCategories.map(categoria => (
            <CardGallery categoria={categoria} key={uuid()} busqueda={busqueda} />
          ))
        )}
      </StyledGallery>
    </Container>
  );
};

export default Gallery;

  
