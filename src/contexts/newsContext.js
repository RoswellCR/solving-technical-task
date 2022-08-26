import React,{createContext, useEffect, useState} from 'react';
import axios from 'axios';

const NewsContext = createContext();

const initialData = '';

function NewsProvider({children}){
    const [listAng, setListAng] = useState([]);
    const [listReact, setListReact] = useState([]);
    const [listVue, setListVue] = useState([]);
    
    
    async function  getListNews(){ 
        // const res = await axios.get('https://hn.algolia.com/api/v1/search_by_date?query=angular&page=0')
        // console.log(res.hits);
        // console.log(res.hits);
        // setListAng(res);
        
        //fetch('https://reqres.in/api/users')
        fetch('https://hn.algolia.com/api/v1/search_by_date?query=angular&page=0')
        .then(res=>res.json())
        .then(datos=> {
            //console.log(datos.hits);
            const stories = datos.hits;
            setListAng(stories);
            
        })
        
        
    }   
    

    const data = {listAng, getListNews}
    
    return(
        <NewsContext.Provider value={data}>
            {children}
        </NewsContext.Provider>
    )
}

export {NewsProvider};
export default NewsContext;