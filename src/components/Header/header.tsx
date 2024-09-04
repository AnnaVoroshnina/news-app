import {formatDate} from "../../helpers/formateDate.ts";
import { useEffect, useState} from "react";
import styles from './styles.module.css'
import {Theme} from "../../assets/Theme/Theme.tsx";
import {useTheme} from "../../context/ThemeContext.tsx";


export const Header = () =>{
    const [time, setTime] = useState<Date>(new Date());

    useEffect(()=>{
        setTime(new Date());
    }, [])

    const {isDark} = useTheme();
    return (
        <header className={`${styles.header} ${isDark ? styles.dark : styles.light}`}>
            <div className={styles.info}>
                <h1 className={styles.title}>NEWS</h1>
                <p className={styles.date}>{formatDate(time)}</p>
            </div>
            <Theme />
        </header>
    )
}