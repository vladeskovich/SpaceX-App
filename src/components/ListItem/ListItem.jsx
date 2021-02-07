import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import Typography from '../Typography';
import ImageBox from '../ImageBox';

import getFormattingDate from '../../utils/getFormattingDate';
import './ListItem.scss';

const ListItem = ({
  id,
  missionName,
  launchDate,
  launchSuccess,
  rocket: { rocketName },
  links: { launchImages },
}) => {
  const history = useHistory();
  const date = getFormattingDate(launchDate);

  const clickItemHandler = useCallback((event) => {
    event.stopPropagation();

    const { currentTarget: { dataset: { itemIndex } } } = event;

    history.push(`/launch/${itemIndex}`);
  }, []);

  return (
    <div
      className="launch"
      data-item-index={id}
      onClick={clickItemHandler}
    >
      <ImageBox images={launchImages}/>
      <div className="launch__item-info">
        <Typography className="launch__item-info__date">{date}</Typography>
        <Typography className="launch__item-info__name">{missionName}</Typography>
        <Typography className="launch__item-info__rocket-name">
          <span>Ракета</span> {rocketName}
        </Typography>
        <Typography className="launch__item-info__launch-status">
          <span>Результат:</span> успех
        </Typography>
      </div>
    </div>
  );
};

export default ListItem;
