import styles from './styles.module.css'
import {NewsBanner} from "../NewsBanner/newsBanner.tsx";

export const BannersList = ({banners}) =>{
    return (
        <ul className={styles.banners}>
            {banners?.map(banner => {
                return (
                    <NewsBanner key={banner.id} item={banner}/>)
            })}
        </ul>
    )
}
