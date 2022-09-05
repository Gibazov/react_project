import React from "react";
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://img.freepik.com/free-photo/hand-using-gadgets-laptop-on-top-view-blank-screen-with-copyspace-minimalistic-style-technologies-modern-marketing-negative-space-for-ad-flyer-yellow-color-on-background-stylish-trendy_155003-39472.jpg?w=1380&t=st=1660444291~exp=1660444891~hmac=b8f26bda125089f0b25c28049f1f85b2262ebd825db9706dc0be8d93529b1e36' alt="user_avatar"></img>
            </div>
            <div className={classes.discriptionBlock}>ava+discription</div>
        </div>
    );

}

export default ProfileInfo;