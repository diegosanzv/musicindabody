import { connect } from 'react-redux';
import { Operators } from '../../modules/app';
import ErrorAlertComponent from './ErrorAlertComponent';

const mapStateToProps = ({app: {error}}) => {
	return {error};
};

const mapDispatchToProps = dispatch => ({
	onShown: () => dispatch(Operators.errorShown()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorAlertComponent);
