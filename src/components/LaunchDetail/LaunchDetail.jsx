import React, { useCallback } from 'react';
import { useQuery } from '@apollo/client';
import { useParams, useHistory } from 'react-router-dom';
import { GET_LAUNCH_IMAGES } from './queries';
import MasonryItem from '../MasonryItem';
import Typography from '../Typography';
import Image from '../Image';
import './LaunchDetail.scss';

const LaunchDetail = () => {
  const { launchId } = useParams();
  const history = useHistory();

  const { loading, error, data } = useQuery(GET_LAUNCH_IMAGES, {
    variables: { id: launchId },
  });

  const { launch: { links: { launchImages = [] } = {} } = {} } = data || {};
  const {
    launch: {
      date, missionName, rocket: { rocketName } = {}, launchSuccess,
    } = {},
  } = data || {};

  const clickItemHandler = useCallback(() => {
    history.push('/');
  }, [history]);

  return (
    <>
      {!loading && (
        <div className="launch-detail">
          <div className="launch-detail-header">
            <nav
              className="launch-detail-header__nav"
              onClick={clickItemHandler}
            >
              <Typography className="launch-detail-header__nav_back">Назад к списку</Typography>
            </nav>
            <div className="launch-detail-header__info">
              <Typography className="launch-detail-header__info__name">{missionName}</Typography>
              <Typography className="launch-detail-header__info__date">{date}</Typography>
              <Typography className="launch-detail-header__info__rocket-name">
                <span>Ракета</span> {rocketName}
              </Typography>
              <Typography className="launch-detail-header__info__launch-status">
                <span>Результат:</span> успех
              </Typography>
            </div>
          </div>
          <div className="list-images">
            {!loading && (
              <MasonryItem data={launchImages}>
                {(src) => (
                  <div className="launch">
                    <Image
                      className="launch-image-box__rocket-photo"
                      src={src}/>
                  </div>
                )}
              </MasonryItem>
            )
            }
          </div>
        </div>
      )}
    </>
  );
};

export default LaunchDetail;
