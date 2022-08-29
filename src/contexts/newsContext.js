import React,{createContext, useEffect, useState} from 'react';
import useFetch from '../hooks/useFetch';


const NewsContext = createContext();

const initialData = '';

function NewsProvider({children}){
    const [listNews, setListNews] = useState([]);
    const [load, setLoad] = useState(false);
    const [listVue, setListVue] = useState([]);
    
    
    function  getListNews({fmwSelected, pages}){ 
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [data, isFetching] = useFetch({fmwSelected,pages});
        setListNews(data);
        setLoad(isFetching);
    }   
    

    const data = {listNews, load,  getListNews}
    
    return(
        <NewsContext.Provider value={data}>
            {children}
        </NewsContext.Provider>
    )
}

export {NewsProvider};
export default NewsContext;