import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__container container'>
                <h1 className='footer__title'>Swayam</h1>
                <ul className='footer__list'>
                    <li>
                        <a href='#about' className='footer__link'>About</a>
                    </li>
                    <li>
                        <a href='#projects' className='footer__link'>Projects</a>
                    </li>
                    <li>
                        <a href='#skills' className='footer__link'>Skills</a>
                    </li>
                </ul>

                <div className='footer__social'>
                    <a href="https://x.com/swayamkhatter" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i className="bx bxl-twitter"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/swayam-khatter-525353219/" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i className="uil uil-linkedin"></i>
                    </a>
                    <a href="https://github.com/SwayamKhatter" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i className="uiil uil-github-alt"></i>
                    </a>
                </div>

                <span className='footer__copy'>&#169; Crypticalcoder. All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer