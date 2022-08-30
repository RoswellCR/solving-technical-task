import { useContext } from 'react';
import {fromNow} from '../tools/util';
import styles from './News.module.css';
import {AiFillHeart} from 'react-icons/ai'
import {AiOutlineClockCircle} from 'react-icons/ai'
import UserContext from '../contexts/userContext';

export default function News({story}){
    const { user, toggleFavNewsToUser } = useContext(UserContext); 

    const isFavorite = user?.favNews?.includes(story.id);

    
    const timeAgo= fromNow(story.created_at);

    return(
        <li className={styles.container}>
            <div className={styles.newsBoxContainer}>
                <a href={story.story_url} className={styles.aBox}>
                    <div><AiOutlineClockCircle/>  {timeAgo}</div>
                    <div>{story.story_title}</div>
                </a>
                <button className={styles.buttonFav} onClick={()=>toggleFavNewsToUser(story.story_id)}>
                    
                    {user?.id && isFavorite ? <AiFillHeart  color={'red'} size={'2em'}/> :
                    <AiFillHeart  color={'gray'} border={'red'}  size={'2em'}/>  }    
                </button>
            </div>
        </li>
    )
}