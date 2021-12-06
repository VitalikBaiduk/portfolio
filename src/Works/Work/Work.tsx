import classes from "../Work/Work.module.css"

export const Work = () => {
    return (
        <div className={classes.work}>
            <div className={classes.work_inner}>
                <div className={classes.img}>
                    <h3 className={classes.img_inner}>Watch</h3>
                </div>
                <div className={classes.info}>
                    <p className={classes.projName}>Project name</p>
                    <p className={classes.shortDescr}>Short description</p>
                </div>
            </div>
        </div>
    )

}

