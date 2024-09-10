import {formatTimeAgo} from "../../../../shared/utils/formatTimeAgo.ts";
import styles from "./styles.module.css"
import {INews} from "../../model/types.ts";

interface PropsNewsItem {
    item: INews
}
export const NewsItem = ({item}: PropsNewsItem) => {
    return (
        <li className={styles.item}>
            <div className={styles.wrapper} style={{backgroundImage: `url(${item.image})`}}></div>
            <div className={styles.info}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.date}>{formatTimeAgo(item.published)} by {item.author}</p>
            </div>
        </li>
    )
}