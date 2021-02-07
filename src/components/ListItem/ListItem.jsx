import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import Typography from '../Typography';
import ImageBox from '../ImageBox';

import getFormattingDate from '../../utils/getFormattingDate';
import getStatusLaunch from '../../utils/getStatusLaunch';

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
  const launchStatus = getStatusLaunch(launchSuccess);

  const clickItemHandler = useCallback((event) => {
    event.stopPropagation();

    const { currentTarget: { dataset: { itemIndex } } } = event;

    history.push(`/launch/${itemIndex}`);
  }, [history]);

  return (
    <div
      className="launch"
      data-item-index={id}
      onClick={clickItemHandler}
    >
      <ImageBox images={launchImages}/>
      <div className="launch__item-info">
        <Typography className="date">{date}</Typography>
        <Typography className="name">{missionName}</Typography>
        <Typography className="rocket-name">
          <span className="rocket-name_emphasis-text">Ракета</span> {rocketName}
        </Typography>
        <Typography className="launch-status">
          <span className="launch-status_emphasis-text">Результат:</span> {launchStatus}
        </Typography>
      </div>
    </div>
  );
};

ListItem.propTypes = {
  id: PropTypes.string,
  missionName: PropTypes.string,
  launchDate: PropTypes.string,
  launchSuccess: PropTypes.oneOf([null, true, false]),
  rocket: PropTypes.shape({
    rocketName: PropTypes.string,
  }),
  links: PropTypes.shape({
    launchImages: PropTypes.array,
  }),
};

export default ListItem;
