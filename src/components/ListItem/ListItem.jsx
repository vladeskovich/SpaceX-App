import React from 'react';
import MagicGrid from 'magic-grid-react'
import Typography from "../Typography";
import './ListItem.scss';

const ListItem = () => {

  return (
    <MagicGrid gutter={16}>
      {/*<div className={styles.launchItemInfo}>
        <Typography className={styles.launchItemInfo__date}>13 декабря 2020</Typography>
        <Typography className={styles.launchItemInfo__name}>Starlink-15 (v1.0)</Typography>
        <Typography className={styles.launchItemInfo__rocketName}>
          <span>Ракета</span> Falcon 9
        </Typography>
        <Typography className={styles.launchItemInfo__launchSuccess}>
          <span>Результат:</span>успех
        </Typography>
      </div>*/}
    </MagicGrid>
  )
};

export default ListItem;
