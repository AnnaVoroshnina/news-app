import styles from './styles.module.css'
import {NewsBanner} from "../NewsBanner/newsBanner.tsx";
import {INews} from "../../interfaces";

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
