import { connect } from 'react-redux';
import PlayerComponent from './PlayerComponent';
import { Operators } from '../../modules/player';
import { Operators as SearchOperators } from '../../modules/search';
import { push } from 'connected-react-router';

const mapStateToProps = ({search: {selectedItem: item}, player: {autoplay}}) => {
	return {item, autoplay};
};

const mapDispatchToProps = dispatch => ({
	onOpen: () => dispatch(push('/search/playing')),
	onNext: () => dispatch(SearchOperators.selectNextItem()),
	onPrevious: () => dispatch(SearchOperators.selectPreviousItem()),
	onToggleAutoplay: () => dispatch(Operators.toggleAutoplay())
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerComponent);
