import {useState, useContext} from 'react';
import useFetch from '../hooks/useFetch';
import ListNews from './ListNews';
import styles from './Layout.module.css'
import UserContext from '../contexts/userContext';

export default function Layout(){
    
    const [fmwSelected, setFmwSelected] = useState('');
    const [pages, setPages] = useState(0);
    const [loading, setLoading] = useState(false);
    
    const {getData} = useContext(UserContext);

    function HandleChangeOpt(e){
        const fmw = e.target.value;
        setFmwSelected(fmw);
        
    }
    
    const [data, isFetching] = useFetch({fmwSelected,pages});
     
    useFetch(()=>{
        getData(data);
    },[data])
    
    return(
        <div>
            <div className={`${styles.titlePage}  ${styles.TextStyle2}`}><h1>Hacker News</h1></div>
            <div className={styles.buttonSelectContainer}>
                <button className={styles.buttonStyle}>All</button>
                <button className={styles.buttonStyle}>My Faves</button>
            </div>
            <div>
                <select  onChange={HandleChangeOpt} className={styles.selectOp}>
                    <option value="" disabled selected hidden>Select your news</option>
                    <option value='angular'>  Angular </option>
                    <option value='reactjs'>  Reacts </option>
                    <option value='vuejs'>  Vuejs </option>
                </select>
            </div>
            <div>
                <ListNews data={data} loading={loading} key={fmwSelected}/> 
            </div>
            <div>...</div>
        </div>
    )
}