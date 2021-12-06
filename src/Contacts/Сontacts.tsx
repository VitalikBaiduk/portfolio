import classes from "./Contacts.module.css"

export const Contacts = () => {
    return (
        <div className={classes.mainDiv}>
            <div className={classes.info}>
                <p className={classes.contacts}>Contacts</p>
                <form className={classes.form}>
                    <input className={classes.input}/>
                    <input className={classes.input}/>
                    <textarea className={classes.textArea}/>
                </form>
                <button className={classes.sendButton}>Send</button>
            </div>
        </div>
    )
}