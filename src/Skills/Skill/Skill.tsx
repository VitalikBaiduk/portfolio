import React from 'react';
import classes from "./Skill.module.css"

type SkillPropsType = {
    title: string
}
export const Skill = (props: SkillPropsType) => {
    return (
        <div className={classes.skillBlock}>
            <div className={classes.skill}></div>
            <div className={classes.icon}>
                <h3>{props.title}</h3>
            </div>
            <p className={classes.skillDescription}>Detailed description of the skill</p>
        </div>
    )
}