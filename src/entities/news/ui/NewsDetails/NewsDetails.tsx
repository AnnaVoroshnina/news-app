import {formatTimeAgo} from "../../../../shared/utils/formatTimeAgo.ts";
import styles from "./styles.module.css"
import {INews} from "../../model/types.ts";
import {Image} from "../../../../shared/ui/Image/Image.tsx";

interface PropsNewsItem {
    item: INews;
}
export const NewsDetails = ({item}: PropsNewsItem) => {
    return (
        <div className={styles.details}>
            <Image image={item.image}/>
            <div className={styles?.description}>
                <p>{item.description} ({item.language})<a href={item.url} target="_blank"> Read more...</a></p>
                <p className={styles.date}>{formatTimeAgo(item.published)} by {item.author}</p>
                <ul>{item.category.map((category => {
                    return <button
                        className={styles.active}
                    >{category}
                    </button>
                }))}</ul>
            </div>

        </div>
    )
}