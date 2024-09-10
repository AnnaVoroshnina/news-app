import styles from './styles.module.css'
import {NewsBanner} from "../../../../entities/news/ui/NewsBanner/newsBanner.tsx";
import {INews} from "../../../../entities/news";

interface PropsBanners {
    banners?: INews[] | null;
}
export const BannersList = ({banners}: PropsBanners) =>{
    return (
        <ul className={styles.banners}>
            {banners?.map(banner => {
                return (
                    <NewsBanner item={banner}/>)
            })}
        </ul>
    )
}
