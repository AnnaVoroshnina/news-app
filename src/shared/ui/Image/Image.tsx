import styles from './styles.module.css'

interface PropsImage {
    image: string;
}
export const Image = ({image}: PropsImage) => {
    return (
        <div className={styles.wrapper} style={{backgroundImage: `url(${image})`}}></div>
    )
}