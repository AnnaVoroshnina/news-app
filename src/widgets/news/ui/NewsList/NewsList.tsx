import styles from './styles.module.css'
import {NewsCard} from "../../../../entities/news/ui/NewsCard/NewsCard.tsx";
import {INews} from "../../../../entities/news";

interface PropsNewsList {
    news?: INews[]
    type: 'banner' | 'item'
}
export const NewsList = ({news, type = 'item'}: PropsNewsList) => {
    return (
        <ul className={`${type === 'item' ? styles.items : styles.banners}`}>
            {news?.map(item =>{
                return (<NewsCard  item={item} type={type}/>)
            })}
        </ul>
    )
}