import {Facebook, Instagram, YouTube,Twitter} from '@material-ui/icons'
import React from 'react'

import './Footer.scss';

 const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">

        <div className="footer__icons">
            <Facebook className="icon"/>
            <Instagram className="icon"/>
            <Twitter className="icon"/>
            <YouTube className="icon"/>
        </div>
        <div className="footer__sections">
            <div className="footer__section">
                <div className="footer__section__title">Lorem, ipsum dolor.</div>
                <div className="footer__section__title">Lorem, ipsum dolor.</div>
                <div className="footer__section__title">Lorem, ipsum dolor.</div>
            </div>
            <div className="footer__section">
                <div className="footer__section__title">Lorem, ipsum dolor.</div>
                <div className="footer__section__title">Lorem, ipsum dolor.</div>
                <div className="footer__section__title">Lorem, ipsum dolor.</div>
            </div>
            <div className="footer__section">
                <div className="footer__section__title">Lorem, ipsum dolor.</div>
                <div className="footer__section__title">Lorem, ipsum dolor.</div>
                <div className="footer__section__title">Lorem, ipsum dolor.</div>
            </div>
            <div className="footer__section">
                <div className="footer__section__title">Lorem, ipsum dolor.</div>
                <div className="footer__section__title">Lorem, ipsum dolor.</div>
                <div className="footer__section__title">Lorem, ipsum dolor.</div>
            </div>
       </div>
       <p className="footer__about">
       © 1997-2022 Netflix, Inc. 
       </p>

        </div>
        
    </footer>
  )
}

export default Footer;