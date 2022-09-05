import React from "react";
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <img className={classes.header__img} src='https://img.freepik.com/free-photo/top-view-airplane-copy-space_23-2148300711.jpg?w=740&t=st=1660445952~exp=1660446552~hmac=634bc95da589d6f436a3ab8fd9326d912e866ee5ad5c55a18f36fa2cd0de08de' alt="logo_web"></img>
        </header>
    );
}
export default Header;