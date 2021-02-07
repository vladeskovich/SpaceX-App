import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image';
import Typography from '../Typography';
import getDeclinationNumber from '../../utils/getDeclinationNumber';
import './ImageBox.scss';

const ImageBox = ({ images }) => {
  const urlImage = images[0];
  const numberImages = getDeclinationNumber(images.length);

  return (
    <>
      {!!images.length && <div className="launch-image-box">
        <div className="launch-image-box__top-bar">
          <Typography className="launch-image-box__top-bar__text">{numberImages}</Typography>
        </div>
        <div className="launch-image-box_shadow-bottom"></div>
        <Image
          className="launch-image-box__rocket-photo"
          src={urlImage}
        />
      </div>
      }
    </>
  );
};

ImageBox.propTypes = {};

export default ImageBox;
