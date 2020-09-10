import React from 'react';

import styles from './Footer.module.css'

const Footer = () => {
    let newDate = new Date().getFullYear();
    return (
        <footer className={styles.footer}>
            <p>&copy; {newDate} John Nicholson</p>
            <p>
            <a href="mailto:john.nicholson812@gmail.com">john.nicholson812@gmail.com</a>
            </p>
        </footer>
    )
}

export default Footer
