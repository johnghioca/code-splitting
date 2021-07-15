import React from 'react';
import PropTypes from 'prop-types';
import styles from './Wrapper.module.scss';

const Wrapper = ({ children }) => (
  <div className={styles.Wrapper}>{children}</div>
);

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
