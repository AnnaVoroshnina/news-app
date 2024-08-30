import {formatDate} from "../../helpers/formateDate.ts";
import {useEffect, useState} from "react";
import styles from './styles.module.css'

export const Header = () =>{
    const [time, setTime] = useState<Date>(new Date());

    useEffect(()=>{
        setTime(new Date());
    }, [])

    return (
        <header className={styles.header}>
            <h1 className={styles.title}>NEWS</h1>
            <p className={styles.date}>{formatDate(time)}</p>
        </header>
    )
}