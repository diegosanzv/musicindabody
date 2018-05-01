import React from 'react';

function SearchFormComponent({term, scope, onQuery}) {

	const onFormSubmit = (ev) => {
		ev.preventDefault();
		const {term: {value: term}, scope: {value: scope}} = ev.target; // get values from form
		onQuery(term, scope);
	};

	return (
		<form className="form-inline" onSubmit={onFormSubmit}>

			<input name="term" type="text" defaultValue={term} className="form-control my-3 mr-2 flex-grow-1" placeholder="Search" />

			<label className="my-1 mr-2" htmlFor="searchScope">by</label>
			<select name="scope" defaultValue={scope} className="custom-select my-1 mr-2" id="searchScope">
				<option value="all">All</option>
				<option value="song">Song</option>
				<option value="album">Album</option>
				<option value="artist">Artist</option>
			</select>

			<button type="submit" className="btn btn-primary my-1">
				<span className="oi oi-magnifying-glass"></span> Search
			</button>

		</form>
	);
};

export default SearchFormComponent;
