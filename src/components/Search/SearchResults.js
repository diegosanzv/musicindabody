import { connect } from 'react-redux';
import SearchResultsComponent from './SearchResultsComponent';
import { Operators } from '../../modules/search';
import { Operators as AppOperators} from '../../modules/app';

const mapStateToProps = ({search: {items, selectedItemIndex, loading}}) => {
	return {items, selectedItemIndex, loading};
};

const mapDispatchToProps = dispatch => ({
	onSort: (field, order) => dispatch(Operators.sortItems(field, order)),
	onOpenPlay: index => {
		dispatch(Operators.selectItemIndex(index));
		dispatch(AppOperators.redirect('/search/playing'));
	},
	onPlay: index => dispatch(Operators.selectItemIndex(index)),
	onStop: () => dispatch(Operators.unselectItem())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsComponent);
