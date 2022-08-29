import News from "./News";
import styles from "./ListNews.module.css";

export default function ListNews({data, loading}){
    
    return(
        <ul className={styles.newsGrid}>
            { data.map((story)=><News key={story.story_id} story={story} /> ) }
        </ul>
    )
}
//loading? <div>Loading ...</div> :