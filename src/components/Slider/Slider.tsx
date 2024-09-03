import styles from './styles.module.css'
import {useRef} from "react";
import React from 'react';

interface PropsSlider {
    children: React.ReactElement;
    step?: number
}
export const Slider = ({children, step = 150}: PropsSlider) =>{
    const sliderRef = useRef<HTMLElement | null>(null)
    const scrollLeft = () => {
        if (!sliderRef.current) return
        sliderRef.current.scrollLeft -= step
    }
    const scrollRight = () => {
        if (!sliderRef.current) return
        sliderRef.current.scrollLeft += step
    }

    return (
        <div className={styles.slider}>
            <button onClick={scrollLeft} className={styles.arrow}>{`<`}</button>
            {React.cloneElement(children, {ref: sliderRef})}
            <button onClick={scrollRight} className={styles.arrow}>{`>`}</button>
        </div>
    )
}