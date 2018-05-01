import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Operators } from '../../modules/app';
import AppComponent from './AppComponent';

const mapStateToProps = state => {
	return {
		currentPath: state.router.location.pathname,
		appLoaded: state.app.loaded,
		redirectTo: state.app.redirectTo,
	}
};

const mapDispatchToProps = dispatch => ({
	onLoad: () => dispatch(Operators.loaded()),
	onRedirect: path => {
		if (path) dispatch(push(path));
		dispatch(Operators.redirected())
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
