import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

/**
 * 
 * Provides global state for favorite movies.
 * Uses localStorage to persist data across page refreshes.
 */
export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        // Load favorites from localStorage when app starts
        const storedFavs = localStorage.getItem("favorites");

        if (storedFavs) setFavorites(JSON.parse(storedFavs));
    }, [])

    useEffect(() => {
        // Save favorites to localStorage whenever favorites change
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites])

    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie]);
    }

    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId));
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId);
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
};