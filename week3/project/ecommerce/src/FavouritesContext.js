import React, { useState } from "react";

export const FavouriteContext = React.createContext([]);

export function FavouritesProvider(props) {

    const [favourites, setFavourites] = useState([]);

    return (
        <FavouriteContext.Provider value={[favourites, setFavourites]}>
            {props.children}
        </FavouriteContext.Provider>
    )
}