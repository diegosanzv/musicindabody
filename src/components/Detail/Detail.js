import { connect } from 'react-redux';
import DetailComponent from './DetailComponent';
import { Operators as AppOperators } from '../../modules/app';

const mapStateToProps = ({search: {selectedItem: item, selectedItemIndex: index}}) => {
	return {item, index};
};

const mapDispatchToProps = dispatch => ({
	redirectSearch: () => dispatch(AppOperators.redirect('/search'))
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailComponent);
