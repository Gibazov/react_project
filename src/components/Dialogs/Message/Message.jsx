import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./../Dialogs.module.css";
import App from "../../../App";

const Message = (props) => {
  return <div className={classes.dialog}>{props.message}</div>;
};

export default Message;
