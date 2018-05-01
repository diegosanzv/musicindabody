import moment from 'moment';
import MediaSmallComponent from './MediaSmallComponent';
import MediaLargeComponent from './MediaLargeComponent';

function MediaComponent({item, playing, small, onOpen, onPlay, onStop}) {
	if (!item) return null;

	const releaseMoment = moment(item.releaseDate);
	const duration = moment.utc(item.trackTimeMillis).format('mm:ss');

	const media = {...item, releaseMoment, duration};

	if (small) {
		return MediaSmallComponent({media, playing, onOpen, onPlay, onStop});
	} else  {
		return MediaLargeComponent({media});
	}
};

export default MediaComponent;