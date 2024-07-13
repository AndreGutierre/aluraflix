import Header from "../../components/Header"
import FooterAlura from "../../components/Footer/index"
import { Outlet } from "react-router-dom"
import FavoritesProvider from "../../context/Favorites"
import { VideosProvider } from "../../context/VideoContext"



function BasePage() {
    return (
        <main>
            <Header></Header>
            
                <VideosProvider>
                    <FavoritesProvider>
                        <Outlet />
                    </FavoritesProvider>
                </VideosProvider>
            
            <FooterAlura />
        </main>
    )
}

export default BasePage