import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_LAUNCH_IMAGES } from './queries';
import MasonryItem from '../MasonryItem';
import ListItem from '../ListItem';
import ImageBox from '../ImageBox';
import Typography from '../Typography';
import Image from '../Image';
import './LaunchDetail.scss';

const LaunchDetail = () => {
  const { launchId } = useParams();

  const { loading, error, data } = useQuery(GET_LAUNCH_IMAGES, {
    variables: { id: launchId },
  });

  const { launch: { links: { launchImages = [] } = {} } = {} } = data || {};

  console.log(data);
  return <div className="list-images">
    {!loading && (
      <MasonryItem data={launchImages}>
        {(src) => {
          console.log(src);
          return <div className="launch">
            <Image
              className="launch-image-box__rocket-photo"
              src={src}/>
          </div>;
        }
        }
      </MasonryItem>
    )
    }
  </div>;
};

export default LaunchDetail;
