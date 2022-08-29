import {fromNow} from '../tools/util';
import styles from './News.module.css';
import {AiFillHeart} from 'react-icons/ai'
import {AiOutlineClockCircle} from 'react-icons/ai'

export default function News({story}){
    function handleFav(){}

    const timeAgo= fromNow(story.created_at);

    return(
        <li className={styles.container}>
            <div className={styles.newsBoxContainer}>
                <a href={story.story_url} className={styles.aBox}>
                    <div><AiOutlineClockCircle/>{timeAgo}</div>
                    <div>{story.story_title}</div>
                </a>
                <button className={styles.buttonFav}>
                    <AiFillHeart color={'red'} size={'2em'} onClick={handleFav} />
                </button>
            </div>
        </li>
    )
}