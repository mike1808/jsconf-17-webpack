import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './FancyButton.css';

const FancyButton = ({ children, onClick, className }) => (
  <a
    href="#"
    role="button"
    className={cx(styles.fancyButton, styles.popOnhover, styles.bgGradient, className)}
    onClick={onClick}
  >
    <span>{children}</span>
  </a>
);

FancyButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

FancyButton.defaultProps = {
  className: '',
  children: null,
  onClick: null,
};

export default FancyButton;
