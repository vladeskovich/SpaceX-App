import React, { useCallback } from 'react';
import { useQuery } from '@apollo/client';
import { useParams, useHistory } from 'react-router-dom';

import { GET_LAUNCH_IMAGES } from './queries';

import MasonryItem from '../MasonryItem';
import Typography from '../Typography';
import Image from '../Image';

import getFormattingDate from '../../utils/getFormattingDate';
import getStatusLaunch from '../../utils/getStatusLaunch';

import './LaunchDetail.scss';

const LaunchDetail = () => {
  const { launchId } = useParams();
  const history = useHistory();

  const {
    loading,
    data,
  } = useQuery(GET_LAUNCH_IMAGES, {
    variables: {
      id: launchId,
    },
  });

  const {
    launch: {
      links: {
        launchImages = [],
      } = {},
    } = {},
  } = data || {};

  const {
    launch: {
      launchDate,
      missionName,
      launchSuccess,
      rocket: {
        rocketName,
      } = {},
    } = {},
  } = data || {};

  const date = getFormattingDate(launchDate);
  const launchStatus = getStatusLaunch(launchSuccess);

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
              <Typography className="name">{missionName}</Typography>
              <Typography className="date">{date}</Typography>
              <Typography className="rocket-name">
                <span className="rocket-name_emphasis-text">Ракета</span> {rocketName}
              </Typography>
              <Typography className="launch-status">
                <span className="launch-status_emphasis-text">
                  Результат:</span>
                  {launchStatus}
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
