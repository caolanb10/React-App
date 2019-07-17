import { compose, withProps, withStateHandlers } from 'recompose';
import { connect } from 'react-redux';
import ImageDetails from './ImageDetails';
import { translate } from './translate';
import translations from './translations.config.json';

const mapStateToProps = ({ state: { imageDetailsPage: { imageId } } }) => ({
  imageId,
});

const translatedLabels = ({ translate }) => ({
  thankYouMessage: translate('imageDetailsPage_thankYouMessage'),
});

export default compose(
  translate({ ...translations }),
  connect(mapStateToProps),
  withProps(translatedLabels),
)(ImageDetails);
