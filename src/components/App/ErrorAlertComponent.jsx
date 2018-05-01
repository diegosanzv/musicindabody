import React from 'react';

function ErrorAlertComponent({error, onShown}) {
	if (!error) return null;

	// TODO: audit error.message

	if (!error.display) {
		onShown();
		return null;
	}

	let levelClass = 'info';
	if (error.level === 'error') levelClass = 'danger';
	if (error.level === 'warn') levelClass = 'warning';

	let closeButton = null;
	if (!error.static) {
		setTimeout(onShown, 5 * 1000);
	} else {
		closeButton = (
			<button type="button" className="close ml-3" data-dismiss="alert" aria-label="Close" onClick={onShown}>
				<span aria-hidden="true">&times;</span>
			</button>
		);
	}

	return (
		<div className={'alert alert-' + levelClass} role="alert">
			{error.display}
			{closeButton}
		</div>
	);
}

export default ErrorAlertComponent;
