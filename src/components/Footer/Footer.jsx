import React from 'react';
import Typography from '../Typography';
import './Footer.scss';

const Footer = () => (
    <footer className="footer">
      <Typography className="footer__text">© { new Date().getFullYear() } SpaceX, Inc.</Typography>
    </footer>
);

export default Footer;
