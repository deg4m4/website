// cursor text

import { useEffect, useState } from "react";
import styles from "../styles/Cursor.module.scss";

const Cursor = () => {

    /* let [mousePos, setMousePos] = useState({ top: "0px", left: "0px" }) */

    // mouse translate
    let [mouseTrans, setMouseTrans] = useState(`translate(0px, 0px)`)
    // mouse scale
    let [mouseScale, setMouseScale] = useState(`scale(1)`)
    useEffect(() => {

        // app mouse
        let appMouse = document.getElementById("app_cursor")

        /* 
            window.onmousemove = e => {
                setMousePos({
                    top: (e.clientY - (appMouse?.offsetHeight || 0) / 2) + "px",
                    left: (e.clientX - (appMouse?.offsetWidth || 0) / 2) + "px"
                })
            } 
        */

        // mouse move
        window.onmousemove = e => {
            setMouseTrans(`translate(${e.clientX - (appMouse?.offsetWidth || 0) / 2}px, ${e.clientY - (appMouse?.offsetHeight || 0) / 2}px)`)

            const keyFrames = {
                transform: `${mouseTrans} ${mouseScale}`
            }

            appMouse?.animate(keyFrames, {
                duration: 250,
                fill: "forwards"
            })
        }

        // mouse hover in link than mouse scale change
        let links = document.getElementsByTagName('a')
        for (let i = 0; i < links.length; i++) {
            links[i].onmousemove = e => {
                setMouseScale(`scale(2.1)`)
            }
            links[i].onmouseleave = e => {
                setMouseScale(`scale(1)`)
            }
        }

        // mouse hover in button than mouse scale change
        let buttons = document.getElementsByTagName('button')
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].onmousemove = e => {
                setMouseScale(`scale(2.1)`)
            }
            buttons[i].onmouseleave = e => {
                setMouseScale(`scale(1)`)
            }
        }

    })

    return (
        <div>
            <div className={`${styles.cursor} app-cursor`} id="app_cursor" /* style={mousePos} */>
            </div>
        </div>
    )
}

export default Cursor;
