import React from 'react';
import {FacebookShareButton, GooglePlusShareButton, TwitterShareButton} from 'react-share';
import {FacebookIcon, GooglePlusIcon, TwitterIcon} from 'react-share';

function MediaLargeComponent({media}) {
	if (!media) return null;

	const shareQuote = 'Listening ' + media.trackName + ' by ' + media.artistName;

	return (
		<div className="media">
			<div className="mr-4">
				<img className="artwork rounded" src={media.artworkUrl100} alt={media.collectionName} />
				<div className="social-buttons mt-2 d-flex justify-content-around">
					<button className="btn btn-sm btn-light d-i p-0" title="Share on Faceook">
						<FacebookShareButton url={media.trackViewUrl} quote={shareQuote}><FacebookIcon size={24} round /></FacebookShareButton>
					</button>
					<button className="btn btn-sm btn-light d-i p-0" title="Share on Twitter">
						<TwitterShareButton url={media.trackViewUrl} title={shareQuote}><TwitterIcon size={24} round /></TwitterShareButton>
					</button>
					<button className="btn btn-sm btn-light d-i p-0" title="Share on Google+">
						<GooglePlusShareButton url={media.trackViewUrl}><GooglePlusIcon size={24} round /></GooglePlusShareButton>
					</button>
				</div>
			</div>
			<div className="media-body">
				<div className="track mt-0 mb-1"><label>Title: </label>{media.trackName}</div>
				<div className="artist mb-1"><label>Artist:</label>{media.artistName}</div>
				<div className="album"><label>Album:</label>{media.collectionName}</div>
				<div className="extra mt-1 pt-2 border-top">
					<div className="release-month"><label>Released:</label>{media.releaseMoment.format('DD MMMM YYYY')}</div>
					<div className="duration"><label>Duration:</label>{media.duration}</div>
					<div className="price"><label>Price:</label><a href={media.trackViewUrl} target="_blank" title="Buy">{media.trackPrice} {media.currency}</a></div>
					<div className="genre"><label>Category:</label>{media.primaryGenreName}</div>
				</div>
			</div>
		</div>
	);
};

export default MediaLargeComponent;
