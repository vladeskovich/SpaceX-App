import React from 'react';
import MagicGrid from 'magic-grid-react';
import Typography from '../Typography';
import ImageBox from '../ImageBox';

import getDateFromStrings from '../../utils/getDateFromStrings';
import './ListItem.scss';

const ListItem = ({
  mission_name,
  launch_date_local,
  rocket,
  links,
}) => {
  const { day, month, year } = getDateFromStrings();
  return (
    <div className="launch">
    <ImageBox images={links}/>
    <div className="launch__item-info">
      <Typography className="launch__item-info__date">13 декабря 2020</Typography>
      <Typography className="launch__item-info__name">Starlink-15 (v1.0)</Typography>
      <Typography className="launch__item-info__rocket-name">
        <span>Ракета</span> {rocket}
      </Typography>
      <Typography className="launch__item-info__launch-success">
        <span>Результат:</span> успех
      </Typography>
    </div>
  </div>
  );
};

export default ListItem;
