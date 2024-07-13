import { useContext, useState, createContext } from "react";


export const FavoritesContext = createContext();

FavoritesContext.displayName = "Favoritos";

//Crea un contaxto para favoritos
export default function FavoritesProvider({ children }) {
    const [favorite, setFavorite] = useState([]);

    //console.log("FavoritesProvider se inicio con favoritos", favorite);

    return <FavoritesContext.Provider value={{ favorite, setFavorite }}>
        {children}
    </FavoritesContext.Provider>
}

//Crea un hook personalizado para favoritos. Para poder agregar favoritos
export function useFavoritesContext() {

    //creamos un nuevo objeto con el contexto
    const { favorite, setFavorite } = useContext(FavoritesContext);
    

    //Dentro de este hook agregamos una funcion para agregar favoritos. Recibe un nuevo favorito
    function addFavorite(newFavorite) {

        //verificamos si el favorito ya existe. Si existe el que recibimos por parametro. Arroja un true o false
        const repitedFavorite = favorite.some(
            (item) => item.id === newFavorite.id
        );

        //Creamos una nueva lista que es una copia de favorito
        let newList = [...favorite];
        //Si no hay favorito repetido agregamod newfavortite con el metodo PUSH
        if (!repitedFavorite) {
            newList.push(newFavorite);
            //retornamos el setFavorito con la nueva lista. Tenemos que actualizar favorito por medio de setFavorito
            return setFavorite(newList);
        }

        //Si el favorito ya existe, eliminamos el favorito de la nueva lista
        newList = favorite.filter(item => item.id !== newFavorite.id);
        //console.log("FavoritesProvider se actualizo con favoritos", newList);
        return setFavorite(newList);
    }

    return { favorite, addFavorite };

}