import styles from './styles.module.css'
export const Image = ({image}: {image: string}) => {
    return (
        <div className={styles.wrapper} style={{backgroundImage: `url(${image})`}}></div>
    )
}