import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Image.scss';

const Image = ({
  className,
  src,
}) => {
  const classes = classNames('image', className);

  return (
    <img
      src={src}
      className={classes}
    />
  );
};

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
};

export default Image;
