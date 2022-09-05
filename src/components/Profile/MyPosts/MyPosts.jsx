import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let postsData = [
        { id: 1, message: 'Hello', likesCount: 15 },
        { id: 2, message: 'What do you thinking about?', likesCount: 20 }
    ]

    return (
        <div className={classes.div}>
            <div className={classes.postsBlock}>
                <h3>my posts</h3>
                <div>
                    <textarea></textarea>
                    <div>
                        <button>Add post</button>
                    </div>
                    <button>Remove</button>
                </div>
                <div className={classes.Posts}>
                    <Post message={postsData[0].message} likesCount={postsData[0].likesCount} />
                    <Post message={postsData[1].message} likesCount={postsData[1].likesCount} />
                </div>
            </div>
        </div>

    );

}

export default MyPosts;