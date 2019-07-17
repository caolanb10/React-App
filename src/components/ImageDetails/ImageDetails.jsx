import React from 'react';
import PropTypes from 'prop-types';
import { FullLayout } from '@feature-layouts';
import { Image } from '@styled-components';
import classes from './ImageDetails.css';

const ImageDetails = ({ imageId, thankYouMessage }) => (
  <FullLayout>
    <div className={classes.imageContainer}>
      <Image
        id={imageId}
      />
      {thankYouMessage}
    </div>
  </FullLayout>
);

ImageDetails.propTypes = {
  imageId: PropTypes.number.isRequired,
  thankYouMessage: PropTypes.string,
};

ImageDetails.defaultProps = {
  thankYouMessage: 'Thank you for visiting Shutterstock! ',
};

export default ImageDetails;
