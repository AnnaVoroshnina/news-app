import styles from './styles.module.css'
import {NewsItem} from "../NewsItem/NewsItem.tsx";
import {INews} from "../../interfaces";

interface PropsNewsList {
    news?: INews[]
}
export const NewsList = ({news}: PropsNewsList) => {
    return (
        <ul className={styles.list}>
            {news?.map(item =>{
                return (<NewsItem  item={item}/>)
            })}
        </ul>
    )
}