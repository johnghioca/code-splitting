import React from 'react';
import PropTypes from 'prop-types';
import styles from './A.module.scss';

const A = ({ href, target, children }) => (
  <a
    className={styles.A}
    href={href}
    target={target}
    rel={target === '_blank' ? 'noopener noreferrer' : null}
  >
    {children}
  </a>
);

A.defaultProps = {
  target: '_self',
};

A.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  target: PropTypes.oneOf(['_blank', '_parent', '_top', '_self']),
};

export default A;
