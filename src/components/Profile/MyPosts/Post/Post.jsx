import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.profile__item}>
      <div className={classes.PostDecor}>
        <img
          className={classes.item_img}
          src="https://img.freepik.com/free-vector/binary-code-concept-illustration_114360-6578.jpg?w=740&t=st=1660913253~exp=1660913853~hmac=f07c5f2e349fd03f5c5f914b7fc982554310832916a6af237f4c1216cb1113f1"
          alt="avatar"
        ></img>
      </div>
      <div>{props.message}</div>
      <span>Like {props.likesCount}</span>
    </div>
  );
};

export default Post;
