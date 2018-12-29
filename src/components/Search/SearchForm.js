import { connect } from 'react-redux';
import SearchFormComponent from './SearchFormComponent';
import { Operators } from '../../modules/search';

const mapStateToProps = ({search: {term, scope}}) => {
	return {term, scope};
};

const mapDispatchToProps = dispatch => ({
	onQuery: (term, scope) => dispatch(Operators.requestItems(term, scope))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchFormComponent);
