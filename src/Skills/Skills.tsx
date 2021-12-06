import React from 'react';
import classes from "./Skills.module.css"
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    return (
        <div className={classes.skillsBlock}>
            <div className={classes.skillsInner} >
                <h2 className={classes.title}>Skills</h2>
                <div className={classes.skills}>
                    <Skill title="HTML"/>
                    <Skill title="CSS"/>
                    <Skill title="JS"/>
                </div>
            </div>
        </div>
    )
}