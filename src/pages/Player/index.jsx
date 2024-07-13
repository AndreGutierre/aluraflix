import Banner from "../../components/Banner/index";
import { useParams } from "react-router-dom";
import { useVideos } from "../../context/VideoContext";
import styled from "styled-components";
import NotFound from "../NotFound/index";


const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    `
const StyledVideo = styled.iframe`
    height: 80vh;
    width: 90vw;
    box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.5);
   
    box-sizing: border-box;
    border-radius: 0 0 50px 50px;
    background: linear-gradient(to bottom, #000000, #1708ecef); /* De fucsia (#ff00ff) a violeta oscuro (#8a2be2) */

   

    @media (max-width: 480px) {
        height: 30vh; /* Ajusta la altura para pantallas muy pequeñas */
    }
    
    
`

function Player() {
    const { videos } = useVideos();
    const parameters = useParams()
    const video = videos.find(video => video.id === Number(parameters.id));
    //console.log(video)

    if(!video)return <NotFound />
    return (
        //React necesita un fragmenot para poder renderizar varios elementos a la vez
        <>
            <Banner imgUrl='ImgBanner.png' boton="Haz Play" titulo="Todo lo que veo" descripcion="Una seccion reservada para la visualización de tus videos favoritos" />
            <Container>

            <StyledVideo
                    width= "100%"
                    height="100%"
                    src={video.link}
                    title={video.titulo}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />
            </Container>
        </>

    )
}

export default Player;