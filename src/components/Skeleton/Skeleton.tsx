import styles from './styles.module.css'

export const Skeleton = ({count = 1, type = 'banner'}) =>{
    return(
        <>
            {count > 1? (
            <ul className={type === 'banner' ? styles.list_column : styles.list_row}>
                {[...Array(count)].map((_, index) => (
                    <li key={index} className={type === 'banner' ? styles.banner : styles.item}></li>)
                )}
            </ul>
            ):(
                <li className={type === 'banner' ? styles.banner : styles.item}></li>
                )
            }
        </>
    )
}