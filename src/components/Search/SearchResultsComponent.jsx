import React from 'react';
import Media from '../Media';

function SearchItemListComponent({items, selectedItemIndex, loading, onSort, onOpenPlay, onPlay, onStop}) {
	if (loading) return (<div className="load-spinner"><span></span></div>);

	if (!items) return null;
	if (!items.length) return (<div className="search-results">No results</div>);

	const SearchListItems = items.map((item, index) => {
		const playing = (selectedItemIndex === index);
		return (
			<li key={index} className={playing? ' playing' : ''}>
				<Media item={item} small
					playing={playing? 'playing' : null}
					onOpen={ev => onOpenPlay(index)}
					onPlay={ev => onPlay(index)}
					onStop={ev => onStop()}
				/>
			</li>
		);
	});

	return (
		<div className="search-results">
			<h5 className="border-top pt-2">Search Results</h5>
			<div className="list-unstyled mt-1 bt-1">
				<label className="my-1 mr-3">Sort by: </label>
				<button className="btn btn-link mr-2" onClick={ev => onSort('trackTimeMillis')}>Duration</button>
				<button className="btn btn-link" onClick={ev => onSort('trackPrice')}>Price</button>
				<button className="btn btn-link" onClick={ev => onSort('primaryGenreName')}>Genre</button>
			</div>
			<ol className="list-unstyled mt-3">
				{SearchListItems}
	  		</ol>
	  	</div>
	);
};

export default SearchItemListComponent;


