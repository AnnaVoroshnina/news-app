import {formatTimeAgo} from "../../../../shared/utils/formatTimeAgo.ts";
import styles from "./styles.module.css"
import {INews} from "../../model/types.ts";
import {Image} from "../../../../shared/ui/Image/Image.tsx";
import {ReactNode} from "react";

interface PropsNewsItem {
    item: INews;
    type: 'banner' | 'item'
    viewNewsSlot?: (news: INews) => ReactNode
}
export const NewsCard = ({item, type = 'item', viewNewsSlot}: PropsNewsItem) => {
    return (
        <li className={`${styles.card} ${type === "banner" && styles.banner}`}>
            {type === "banner"
                ? (<Image image={item.image}/>)
                : (<div className={styles.wrapper} style={{backgroundImage: `url(${item.image})`}}></div>)
            }
            <div className={styles.info}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.date}>{formatTimeAgo(item.published)} by {item.author}</p>
            </div>
            {viewNewsSlot ? viewNewsSlot(item) : null}
        </li>
    )
}