import styled from "styled-components";
import Card from "../Card/index";
import { useVideos } from "../../context/VideoContext";
import { v4 as uuid } from "uuid";


const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    
    h1{
        color: #ffffff;
        font-size: 1.5;
        font-weight: 600;
        margin : 1em;
       
  
    }
   

`
const StyledCardGallery = styled.div`
    display: flex;
    width: 80vw;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 1.5;
    box-sizing: border-box;
    gap: 1.5em;
    
   
`
const CardGallery = ({ categoria }) => {
    const { videos } = useVideos();
  
    // Filtrar los videos por categoría
    const filteredVideos = videos.filter(video => video.categoria === categoria);
  
    return (
      <Container>
        <h1>{categoria}</h1>
        <StyledCardGallery>
          {filteredVideos.map(video => (
            <Card {...video} key={video.id} videoId={uuid()} />
          ))}
        </StyledCardGallery>
      </Container>
    );
  };

export default CardGallery