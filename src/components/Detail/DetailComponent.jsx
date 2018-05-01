import React from 'react';
import { Link } from 'react-router-dom';
import Media from '../Media';

class DetailComponent extends React.Component {

	componentWillMount() {
		if (!this.props.item) this.props.redirectSearch();
	}

	render() {
		if (!this.props.item) return null;

		return (
			<div className="detail-component container">
				<div className="row">
					<div className="col-md-12">
						<Link to="/search" className="btn btn-link pl-0">&lt; Back to search</Link>
						<h5 className="border-top pt-2 mb-3">Currently Playing</h5>
						<div>
							<Media item={this.props.item}/>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

export default DetailComponent;
