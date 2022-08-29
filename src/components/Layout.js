import {useState, useEffect} from 'react';
import useFetch from '../hooks/useFetch';
import ListNews from './ListNews';

export default function Layout(){
    //const {listNews, getListNews} = useContext(NewsContext);
    const [listNews, setListNews] = useState([]);
    const [fmwSelected, setFmwSelected] = useState('');
    const [pages, setPages] = useState(0);
    const [loading, setLoading] = useState(false);
    

    function HandleChangeOpt(e){
        const fmw = e.target.value;
        setFmwSelected(fmw);
        
    }
    
    const [data, isFetching] = useFetch({fmwSelected,pages});
        
        

    // useEffect(() => {
    //     const [data, isFetching] = useFetch({fmwSelected,pages});
    //     setListNews(data);
    //     setLoading(isFetching);
        
    // }, []);

    return(
        <div>
            <div><h1>Hacker News</h1></div>
            <div>
                <button>All</button>
                <button>My Faves</button>
            </div>
            <div>
                <select  onChange={HandleChangeOpt}>
                    <option value="" disabled selected hidden>Select your news</option>
                    <option value='angular'>Angular</option>
                    <option value='reactjs'>Reacts</option>
                    <option value='vuejs'>Vuejs</option>
                </select>
            </div>
            <div>
                <ListNews data={data} loading={loading} key={fmwSelected}/> 
            </div>
            <div>1 2 3 4 ...</div>
        </div>
    )
}