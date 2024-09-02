
import styles from './styles.module.css'
import {BannersList} from "../BannersList/BannersList.tsx";

export const LatestNews = ({banners}) =>{
    return (
        <section className={styles.section}>
            <BannersList banners={banners}/>
        </section>
    )
}