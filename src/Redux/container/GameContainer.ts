import { connect } from 'react-redux';
import { AppState } from '../store';
import { checkSquare, checkStep } from '../store/game/actions';
import Game from '../component/Game';


const mapStateToProps = (state: AppState) => ({
  game: state.game
});

export default connect(
  mapStateToProps,
  { checkSquare, checkStep }
)(Game);
