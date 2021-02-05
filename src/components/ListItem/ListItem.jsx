import React from 'react';
import Typography from "../Typography";
import styles from './ListItem.scss';

const ListItem = () => {
  return (
    <div className={styles.launchItem}>
      <div className={styles.launchItemInfo}>
        <Typography className={styles.launchItemInfo__date}>13 декабря 2020</Typography>
        <Typography className={styles.launchItemInfo__name}>Starlink-15 (v1.0)</Typography>
        <Typography className={styles.launchItemInfo__rocketName}>
          <span>Ракета</span> Falcon 9
        </Typography>
        <Typography className={styles.launchItemInfo__launchSuccess}>
          <span>Результат:</span>успех
        </Typography>
      </div>
    </div>
  )
};

export default ListItem;
