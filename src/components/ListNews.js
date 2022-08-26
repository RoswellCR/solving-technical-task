import React, {useContext, useEffect} from 'react';
import NewsContext from '../contexts/newsContext';
import News from "./News";

export default function ListNews(){
    const {listAng, getListNews} = useContext(NewsContext);
    
    useEffect(()=>{
         getListNews();
    },[])
    
    // useEffect(()=>{
    //     fetch('https://hn.algolia.com/api/v1/search_by_date?query=angular&page=0')
    //     .then(res=>res.json())
    //     .then(datos=>console.log(datos.hits))
    // },[])

    return(
        <div>
            <div><h1>Hacker News</h1></div>
            <div>
                <button>All</button>
                <button>My Faves</button>
            </div>
            <div>
                <select >
                    <option value="" disabled selected hidden>Select your news</option>
                    <option>Angular</option>
                    <option>Reacts</option>
                    <option>Vuejs</option>
                </select>
            </div>
            <div>
                 {listAng.map((story)=><div key={story.story_id}><News story={story} /></div> ) } 
            </div>
            <div>1 2 3 4 ...</div>
        </div>
    )
}