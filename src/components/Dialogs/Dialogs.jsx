import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Dialogs.module.css';



const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={classes.dialog + ' ' + classes.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={classes.dialog}>{props.message}</div>
}

const Dialogs = (props) => {

    let dialogData = [
        { id: 1, name: 'Dwane' },
        { id: 2, name: 'Bred' },
        { id: 3, name: 'Arnold' },
        { id: 4, name: 'Bruse' },
        { id: 5, name: 'Richard' },
        { id: 6, name: 'Alex' },
        { id: 7, name: 'Joshua' }
    ]

    let messageData = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is it going?' },
        { id: 3, message: 'Listen up!' },
    ]

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <DialogItem name={dialogData[0].name} id={dialogData[0].id} />
                <DialogItem name={dialogData[1].name} id={dialogData[1].id} />
                <DialogItem name={dialogData[2].name} id={dialogData[2].id} />
                <DialogItem name={dialogData[3].name} id={dialogData[3].id} />
                <DialogItem name={dialogData[4].name} id={dialogData[4].id} />
                <DialogItem name={dialogData[5].name} id={dialogData[5].id} />
                <DialogItem name={dialogData[6].name} id={dialogData[6].id} />
            </div>

            <div className={classes.messages}>
                <Message message={messageData[0].message} />
                <Message message={messageData[1].message} />
                <Message message={messageData[2].message} />
            </div>
        </div>
    )
}



export default Dialogs;