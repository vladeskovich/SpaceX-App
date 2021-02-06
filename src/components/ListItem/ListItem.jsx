import React from 'react';
import MagicGrid from 'magic-grid-react';
import Typography from '../Typography';
import ImageBox from "../ImageBox";
import './ListItem.scss';

const ListItem = () => (
  <div className="launch">
    <ImageBox/>
    <div className="launch__item-info">
      <Typography className="launch__item-info__date">13 декабря 2020</Typography>
      <Typography className="launch__item-info__name">Starlink-15 (v1.0)</Typography>
      <Typography className="launch__item-info__rocket-name">
        <span>Ракета</span> Falcon 9
      </Typography>
      <Typography className="launch__item-info__launch-success">
        <span>Результат:</span> успех
      </Typography>
    </div>
  </div>
);

export default ListItem;
