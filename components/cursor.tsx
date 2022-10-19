// cursor text

import { useEffect, useState } from "react";
import styles from "../styles/Cursor.module.scss";

const Cursor = () => {

    /* let [mousePos, setMousePos] = useState({ top: "0px", left: "0px" }) */

    // cursor translate
    let [cursorTrans, setCursorTrans] = useState(`translate(0px, 0px)`)
    // cursor scale
    let [cursorScale, setCursorScale] = useState(`scale(1)`)
    // cursor child index
    let [iCursor, setICursor] = useState(0);

    const cursorCAni = (e: HTMLElement | null) => {
        if (!e) return;

        e.animate({ transform: `scale(5)`, opacity: 0 }, {
            duration: 500,
            fill: "forwards",
        })

        e.animate({ transform: `scale(1)`, opacity: 1 }, {
            delay: 500,
            duration: 0,
            fill: "forwards",
        })
    }

    useEffect(() => {

        // app mouse
        let appCursor = document.getElementById("app_cursor")
        // app cursor child node 0
        let appCursorC0 = document.getElementById("app_cursor_c0")
        // app cursor child node 1
        let appCursorC1 = document.getElementById("app_cursor_c1")
        // app cursor child node 2
        let appCursorC2 = document.getElementById("app_cursor_c2")

        /* 
            window.onmousemove = e => {
                setMousePos({
                    top: (e.clientY - (appCursor?.offsetHeight || 0) / 2) + "px",
                    left: (e.clientX - (appCursor?.offsetWidth || 0) / 2) + "px"
                })
            } 
        */

        // mouse move
        window.onmousemove = e => {
            setCursorTrans(`translate(${e.clientX - (appCursor?.offsetWidth || 0) / 2}px, ${e.clientY - (appCursor?.offsetHeight || 0) / 2}px)`)

            const keyFrames = {
                transform: `${cursorTrans} ${cursorScale}`
            }

            appCursor?.animate(keyFrames, {
                duration: 250,
                fill: "forwards",
            })
        }

        // mouse hover in link than mouse scale change
        let links = document.getElementsByTagName('a')
        for (let i = 0; i < links.length; i++) {
            links[i].onmousemove = e => {
                setCursorScale(`scale(1.5)`)
            }
            links[i].onmouseleave = e => {
                setCursorScale(`scale(1)`)
            }
        }

        // mouse hover in button than mouse scale change
        let buttons = document.getElementsByTagName('button')
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].onmousemove = e => {
                setCursorScale(`scale(1.5)`)
            }
            buttons[i].onmouseleave = e => {
                setCursorScale(`scale(1)`)
            }
        }

        // cursor child animation
        window.onclick = () => {
            switch (iCursor) {
                case 0:
                    cursorCAni(appCursorC0);
                    setICursor(1)
                    break;
                case 1:
                    cursorCAni(appCursorC1);
                    setICursor(2)
                    break;
                case 2:
                    cursorCAni(appCursorC2);
                    setICursor(0)
                    break;
            }
        }

    })

    return (
        <div>
            <div className={`${styles.cursor} app-cursor`} id="app_cursor" /* style={mousePos} */>
                <div className={`cursorBody`}></div>
                <div id="app_cursor_c0"></div>
                <div id="app_cursor_c1"></div>
                <div id="app_cursor_c2"></div>
            </div>
        </div>
    )
}

export default Cursor;
