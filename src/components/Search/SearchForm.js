import { connect } from 'react-redux';
import SearchFormComponent from './SearchFormComponent';
import { Operators } from '../../modules/search';
import { push } from 'connected-react-router';

const mapStateToProps = ({search: {term, scope}}) => {
	return {term, scope};
};

const mapDispatchToProps = dispatch => ({
	onQuery: (term, scope) => {
		dispatch(Operators.requestItems(term, scope));
		dispatch(push('/search'));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchFormComponent);
