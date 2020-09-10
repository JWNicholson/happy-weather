import React from 'react'

const Footer = () => {
    let newDate = new Date().getFullYear();
    return (
        <footer>
            <div className="footer-legal">
            <p>&copy; {newDate} John Nicholson</p>
            </div>
            <div className="footer-social">
                <div className="contact-ctnr">
                    email me
                </div>
                <div className="social-links-ctnr">
                    Git Linked Behanced
                </div>
            </div>

        </footer>
    )
}

export default Footer
