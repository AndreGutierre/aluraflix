import SearchBar from "../../components/SearchBar/index";
import Banner from "../../components/Banner/index";
import Gallery from "../../components/Gallery/index";
import EditForm from "../../components/EditForm/index";
import { useShowForm } from "../../context/EditFormContext";
import { useState } from "react";



//import GlobalContextProvider from "../../context/GlobalContext";



function Inicio() {
    const { showForm } = useShowForm();
    const [busqueda, setBusqueda] = useState("");

    return (
        <>
            <SearchBar setBusqueda={setBusqueda}></SearchBar>

            <Banner imgUrl='ImgBanner.png'
                boton="Front End"
                titulo="Challenge React"
                descripcion="En este Challenge aplcarás todos los conocimientos de React que haz adquirido ."
            />
            <Gallery busqueda={busqueda} />

            {showForm && <EditForm />}
        </>
    );
}

export default Inicio;
