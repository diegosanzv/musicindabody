import React from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

function SearchComponent() {
	return (
		<div className="search-component container">
			<div className="row">
				<div className="col-md-12">
					<SearchForm />
				</div>
			</div>
			<div className="row">
				<div className="col-md-12">
					<SearchResults />
				</div>
			</div>
		</div>
	);
}

export default SearchComponent;
