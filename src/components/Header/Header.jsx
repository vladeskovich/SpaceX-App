import React from 'react';
import Typography from "../Typography";
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <Typography className="headerText">Последние запуски SpaceX</Typography>
    </header>
  );
};

export default Header;
