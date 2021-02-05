import React from 'react';
import Typography from "../Typography";
import styles from './Header.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Typography className={styles.headerText}>Последние запуски SpaceX</Typography>
    </header>
  );
};

export default Header;
