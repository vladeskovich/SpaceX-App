import React from 'react';
import PropTypes from 'prop-types';
import Image from "../Image";
import Typography from "../Typography";
import './ImageBox.scss';

const ImageBox = () => {

  return (
    <div className="launch-image-box">
      <div className="launch-image-box__top-bar">
        <Typography className="launch-image-box__top-bar__text">17 картинок</Typography>
      </div>
      <div className="launch-image-box_shadow-bottom"></div>
      <Image
        className="launch-image-box__rocket-photo"
        src="https://live.staticflickr.com/65535/50428228397_6151927733_o.jpg"
      />
    </div>
  );
};

ImageBox.propTypes = {};

export default ImageBox;
