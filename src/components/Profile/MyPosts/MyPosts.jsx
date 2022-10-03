import React from "react";
import Post from "./Post/Post";

import classes from "./MyPosts.module.css";

const MyPosts = (props) => {
  let postsElements = props.posts.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  };

  return (
    <div className={classes.div}>
      <div className={classes.postsBlock}>
        <h3>my posts</h3>
        <div>
          <textarea ref={newPostElement}></textarea>
          <div>
            <button onClick={addPost}>Add post</button>
          </div>
          <button>Remove</button>
        </div>
        <div className={classes.posts}>{postsElements}</div>
      </div>
    </div>
  );
};

export default MyPosts;
