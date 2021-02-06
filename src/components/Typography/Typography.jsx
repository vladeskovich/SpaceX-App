import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Typography.scss';

const VARIANTS = {
  body: 'p',
  header1: 'h1',
};

const Typography = ({
  variant,
  className,
  children,
}) => {
  const classes = classNames('typography', className);
  const Component = VARIANTS[variant];

  return (
    <Component
      className={classes}
    >
      {children}
    </Component>
  );
};

Typography.propTypes = {
  variant: PropTypes.oneOf(Object.keys(VARIANTS)),
  children: PropTypes.node,
  className: PropTypes.string,
};

Typography.defaultProps = {
  variant: 'body',
};

export default Typography;
