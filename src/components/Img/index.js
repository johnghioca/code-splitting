import React from 'react';
import PropTypes from 'prop-types';
import LARGE from 'assets/js/breakpoints';
import styles from './Img.module.scss';

const Img = ({ src, srcLarge, alt }) => (
  <picture>
    <source srcSet={srcLarge} media={LARGE} />
    <img className={styles.Img} srcSet={src} alt={alt} />
  </picture>
);

Img.propTypes = {
  src: PropTypes.string.isRequired,
  srcLarge: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Img;
