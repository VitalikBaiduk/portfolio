import React from 'react';
import classes from "../Works/Works.module.css"
import {Work} from "./Work/Work";

export const Works = () => {
    return (
        <div className={classes.mainDiv}>
            <div className={classes.divInfo}>
                <h2 className={classes.titleMW}>My Works</h2>
                <div className={classes.work}>
                    <Work/>
                    <Work/>
                </div>
            </div>
        </div>
    )
}