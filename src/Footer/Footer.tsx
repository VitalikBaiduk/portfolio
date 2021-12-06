import classes from "./Footer.module.css"

export const Footer = () => {
    return (
        <div className={classes.mainDiv}>
            <div className={classes.info}>
                <h4 className={classes.name}>Vitali Baiduk</h4>
                <div className={classes.divCompany}>
                    <div className={classes.company}></div>
                    <div className={classes.company}></div>
                    <div className={classes.company}></div>
                    <div className={classes.company}></div>
                </div>
                <p className={classes.footerInfo}>ⓒ All rights reserved</p>
            </div>
        </div>
    )
}