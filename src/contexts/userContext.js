import React,{createContext, useState} from 'react';

const UserContext = createContext();


const initialData = {id:1, dataId:[], favNews:[  ]};

function UserProvider({children}){
    const [user, setUser] = useState(initialData);
    
    function  getUserFromStorage(){ 
    
    }
    function getData(dataId){
        setUser(
            ...user,
            dataId
        )
    }

    function toggleFavNewsToUser(newsId){
        console.log(newsId);
        const isFavorite = user.favoriteNews.includes(newsId);//Check
        const favoriteNews = isFavorite
            ? user.favoriteNews.filter(favNewsId => favNewsId !== newsId) // Delete
            : [...user.favoriteNews, newsId] // Add

        setUser({
            ...user,
            favoriteNews
        })
    }

    const data = { user,  
                   toggleFavNewsToUser, 
                   getData
                }
    
    return(
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}

export {UserProvider};
export default UserContext;