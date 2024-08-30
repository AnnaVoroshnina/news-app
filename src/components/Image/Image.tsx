import styles from './styles.module.css'
export const Image = ({image}) => {
    return (
        <div className={styles.wrapper} style={{backgroundImage: `url(${image})`}}></div>
    )
}