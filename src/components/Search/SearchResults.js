import { connect } from 'react-redux';
import SearchResultsComponent from './SearchResultsComponent';
import { Operators } from '../../modules/search';
import { push } from 'connected-react-router';

const mapStateToProps = ({search: {items, selectedItemIndex, loading}}) => {
	return {items, selectedItemIndex, loading};
};

const mapDispatchToProps = dispatch => ({
	onSort: (field, order) => dispatch(Operators.sortItems(field, order)),
	onOpenPlay: index => {
		dispatch(Operators.selectItemIndex(index));
		dispatch(push('/search/playing'));
	},
	onPlay: index => dispatch(Operators.selectItemIndex(index)),
	onStop: () => dispatch(Operators.unselectItem())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsComponent);
