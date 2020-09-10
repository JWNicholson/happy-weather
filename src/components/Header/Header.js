import React from 'react';
import styles from './Header.module.css'
import {
    Typography
} from  '@material-ui/core';

const Header = () => {
    return (
    <header className={styles.header}>
        <Typography variant="h2" component="h1">
        Happy Weather
        </Typography>
       
    </header>
    )
}

export default Header;
