import { connect } from 'react-redux';
import PlayerComponent from './PlayerComponent';
import { Operators } from '../../modules/player';
import { Operators as AppOperators } from '../../modules/app';
import { Operators as SearchOperators } from '../../modules/search';

const mapStateToProps = ({search: {selectedItem: item}, player: {autoplay}}) => {
	return {item, autoplay};
};

const mapDispatchToProps = dispatch => ({
	onOpen: () => dispatch(AppOperators.redirect('/search/playing')),
	onNext: () => dispatch(SearchOperators.selectNextItem()),
	onPrevious: () => dispatch(SearchOperators.selectPreviousItem()),
	onToggleAutoplay: () => dispatch(Operators.toggleAutoplay())
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerComponent);
