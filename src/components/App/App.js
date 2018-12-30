import { connect } from 'react-redux';
import { Operators } from '../../modules/app';
import AppComponent from './AppComponent';

const mapStateToProps = state => {
	return {
		appLoaded: state.app.loaded,
	}
};

const mapDispatchToProps = dispatch => ({
	onLoad: () => dispatch(Operators.loaded())
});

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
