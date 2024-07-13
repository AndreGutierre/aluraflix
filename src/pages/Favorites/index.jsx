import Banner from "../../components/Banner";
import CardGalleryFav from "../../components/CardGalleryFav/index";
import styled from "styled-components";

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
    box-sizing: border-box;
    gap: 1.5em;
    background: linear-gradient(to bottom, #000000, #1708ecb3); /* De fucsia (#ff00ff) a violeta oscuro (#8a2be2) */
    border-radius: 0 0 50px 50px;
    box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.5);
`


const Favorites = () => {


    return (
        <>
            <Banner imgUrl='ImgBanner.png' boton="Me Gustan" titulo="Todo lo que amo" descripcion="Una seccion reservada a todo aquello que haz seleccionado historicamente" />
            <Container>
                <StyledGallery>
                    <CardGalleryFav></CardGalleryFav>
                </StyledGallery>
            </Container>
        </>
    )

}

export default Favorites