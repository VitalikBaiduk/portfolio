import React from 'react';
import classes from "./Nav.module.css"

export const Nav = () => {
    return (
        <div className={classes.nav}>
            <a href="">Home</a>
            <a href="">Skills</a>
            <a href="">Projects</a>
            <a href="">Contacts</a>
        </div>
    )
}