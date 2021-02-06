import React from 'react';
import MagicGrid from 'magic-grid-react';
import Typography from '../Typography';
import ImageBox from '../ImageBox';

import getFormattingDate from '../../utils/getFormattingDate';
import './ListItem.scss';

const ListItem = ({
  missionName,
  launchDate,
  rocket: { rocketName },
  links: { launchImages },
}) => {
  const date = getFormattingDate(launchDate);

  return (
    <div className="launch">
    <ImageBox images={launchImages}/>
    <div className="launch__item-info">
      <Typography className="launch__item-info__date">{date}</Typography>
      <Typography className="launch__item-info__name">{missionName}</Typography>
      <Typography className="launch__item-info__rocket-name">
        <span>Ракета</span> {rocketName}
      </Typography>
      <Typography className="launch__item-info__launch-success">
        <span>Результат:</span> успех
      </Typography>
    </div>
  </div>
  );
};

export default ListItem;
