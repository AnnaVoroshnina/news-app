import styles from './styles.module.css'
import {Image} from "../../../../shared/ui/Image/Image.tsx";
import {formatTimeAgo} from "../../../../shared/utils/formatTimeAgo.ts";
import {INews} from "../../model/types.ts";

interface PropsBanner {
    item: INews;
}
export const NewsBanner = ({item}: PropsBanner) =>{
    return (
        <div className={styles.banner}>
            <Image image={item.image} />
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.date}>{formatTimeAgo(item.published)} by {item.author}</p>
        </div>
    )
}
