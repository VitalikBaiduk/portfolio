import React from 'react';
import classes from "./Main.module.css"

export const Main = () => {
    return (
        <div className={classes.mainBlock}>
            <div className={classes.container}>
                <div className={classes.text}>
                    <span>Hi there</span>
                    <h1>I am Baiduk Vitaly</h1>
                    <p>I am a frontend developer</p>
                </div>
                <div className={classes.photo}>
                </div>
            </div>
        </div>
    )
}