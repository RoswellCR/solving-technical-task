import React,{createContext, useState} from 'react';
import axios from 'axios';

const UserContext = createContext();

const initialData = {id:1, favNews:[]};

function UserProvider({children}){
    const [user, setUser] = useState('');
    const [favNews, setFavNews] = useState(initialData);

    async function  getList(){ 
        const res = await axios.get('https://hn.algolia.com/api/v1/search_by_date?query=angular&page=0')
        console.log(res);
        
    }

    function toggleFavoriteNewToUser(movieId){

        const isFavorite = user.favoriteMovies.includes(movieId);//Check
        const favoriteMovies = isFavorite
            ? user.favoriteMovies.filter(favMovId => favMovId !== movieId) // Delete
            : [...user.favoriteMovies, movieId] // Add

        setUser({
            ...user,
            favoriteMovies
        })
    }

    const data = {getList, toggleFavoriteNewToUser}
    
    return(
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}

export {UserProvider};
export default UserContext;