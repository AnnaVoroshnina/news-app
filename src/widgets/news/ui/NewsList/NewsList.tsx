import styles from './styles.module.css'
import {NewsCard} from "../../../../entities/news/ui/NewsCard/NewsCard.tsx";
import {INews} from "../../../../entities/news";
import {ReactNode} from "react";

interface PropsNewsList {
    news?: INews[]
    type: 'banner' | 'item'
    viewNewsSlot?: (news: INews) => ReactNode

}
export const NewsList = ({news, type = 'item', viewNewsSlot}: PropsNewsList) => {
    return (
        <ul className={`${type === 'item' ? styles.items : styles.banners}`}>
            {news?.map(item =>{
                return (<NewsCard  item={item} viewNewsSlot={viewNewsSlot} type={type}/>)
            })}
        </ul>
    )
}