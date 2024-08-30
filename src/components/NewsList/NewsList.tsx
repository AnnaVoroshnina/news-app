import styles from './styles.module.css'
import {NewsItem} from "../NewsItem/NewsItem.tsx";
export const NewsList = ({news}) => {
    return (
        <ul className={styles.list}>
            {news.map((item) =>{
                return (<NewsItem  item={item}/>)
            })}
        </ul>
    )
}