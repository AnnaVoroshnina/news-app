import styles from './styles.module.css'
import {useTheme} from "../../context/ThemeContext.tsx";
export const Theme = () =>{

    const {isDark, toggleTheme} = useTheme();
    return(
        <div onClick={toggleTheme} className={`${styles.container_svg} ${isDark === true ? styles.dark : ''}`}>
            <svg id="sunmoon" width="60" height="60">
                <defs>
                    <mask id="hole" >
                        <rect width="100%" height="100%" fill="white" />
                        <circle className={isDark === false? styles.mooned : ''} id="overlay" r="20" cx="150" cy="-90" fill="black" style={{transition: `all 1s`}}/>;
                    </mask>

                    <filter id="blur">
                        <feDropShadow dx="0" dy="0" stdDeviation="3" flood-color="gold"/>
                    </filter>
                </defs>

                <g filter="url(#blur)" style={{transition: `all 0.8s`}} >
                    <circle
                        fill="gold"
                        id="donut"
                        r="20"
                        cx="30"
                        cy="30"
                        mask="url(#hole)"
                    />
                </g>
            </svg>
        </div>
    )
}