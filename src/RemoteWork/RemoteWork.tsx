import classes from "../RemoteWork/RemoteWork.module.css"

export const RemoteWork = () => {
    return (
        <div className={classes.RemoteWork}>
            <div className={classes.info}>
                <h3 className={classes.firstText}>I am considering the option of remote work</h3>
                <button className={classes.secondText}>Hire me</button>
            </div>
        </div>
    )
}