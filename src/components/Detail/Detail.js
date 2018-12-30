import { connect } from 'react-redux';
import DetailComponent from './DetailComponent';
import { push } from 'connected-react-router';

const mapStateToProps = ({search: {selectedItem: item, selectedItemIndex: index}}) => {
	return {item, index};
};

const mapDispatchToProps = dispatch => ({
	redirectSearch: () => dispatch(push('/search'))
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailComponent);
