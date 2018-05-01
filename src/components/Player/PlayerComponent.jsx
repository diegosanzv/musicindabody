import React from 'react';
import AudioPlayer from 'react-audio-player';

function PlayerComponent({item, autoplay, onOpen, onPrevious, onNext, onToggleAutoplay}) {
	if (!item) return null;

	const onEnded = ev => {
		if (autoplay) onNext();
	};

	return (
		<div className="player-component border-top">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="d-flex flex-row align-items-center border-left border-right">

							<div className="player-controls d-i pt-2 bg-light border-right">
								<div className="text-center">
									<img className="artwork rounded" src={item.artworkUrl30} alt={item.collectionName} title="Song details" onClick={onOpen}/>
								</div>
								<div className="d-flex flex-row mt-2">
									<button className="btn btn-sm btn-light" title="Previous" onClick={onPrevious}>
										<span className="oi oi-media-step-backward text-dark"></span>
									</button>
									<button className="btn btn-sm btn-light" title="Next" onClick={onNext}>
										<span className="oi oi-media-step-forward text-dark"></span>
									</button>
								</div>
							</div>

							<div className="player-container flex-fill">
								<AudioPlayer className="w-100"
									src={item.previewUrl}
									autoPlay
									controls
									onEnded={onEnded}
								/>
							</div>

							<div className="d-flex flex-row align-items-center align-self-stretch p-2 border-left">
								<span className="mr-1">Autoplay</span>
								<input type="checkbox" checked={autoplay} onChange={onToggleAutoplay} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PlayerComponent;
