import React from 'react';

function MediaSmallComponent({media, playing, onOpen, onPlay, onStop}) {
	if (!media) return null;

	const action = playing ? (
		<button className="play-button btn btn-secondary rounded-circle" title="Stop" onClick={onStop}>
			<span className="oi oi-media-stop text-light"></span>
		</button>
	) : (
		<button className="play-button btn btn-secondary rounded-circle" title="Play" onClick={onPlay}>
			<span className="oi oi-media-play text-light"></span>
		</button>
	);

	return (
		<div className="media small p-2">
			<img className="artwork mr-3 rounded" src={media.artworkUrl60} alt={media.collectionName} onClick={onOpen} />
			<div className="media-body" onClick={onOpen}>
				<div className="track mt-0 mb-1">{media.trackName} - {media.artistName}</div>
				<div className="album">{media.collectionName} - {media.releaseMoment.format('MMM YYYY')}</div>
				<div className="extra">
					<span className="duration mr-2">{media.duration}</span>|
					<span className="price ml-2 mr-2">{media.trackPrice} {media.currency}</span>|
					<span className="genre ml-2">{media.primaryGenreName}</span>
				</div>
			</div>
			<div>
				{action}
			</div>
		</div>
	);
};

export default MediaSmallComponent;