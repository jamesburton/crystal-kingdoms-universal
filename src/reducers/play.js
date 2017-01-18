import { DISMISS_SPLASH_SCREEN, QUIT_GAME, RESET_GAME, START_GAME, HIDE_CURSOR, MOVE_CURSOR, SHOW_CURSOR } from '../actions/play';
const initialPlayState = { showSplashScreen: true, gameStarted: false, cells: [], players: [], cursorVisible: true, cursorX: 0, cursorY: 0 };
import { flatten } from '../helpers/arrayHelpers';

const gridSize = { x: 8, y: 8 };
var newCell = function(x,y) {
    return {
        x,
        y,
        owner: null,
        contagion: []
    };
};
var createNewCells = () => {
    var cells = [];
    for(var x = 0; x < gridSize.x; x++) {
        cells[x] = [];
        for(var y = 0; y < gridSize.y; y++) {
            cells[x][y] = newCell(x,y);
        }
    }
    console.log('reducers/play.js:- createNewCells, cells=', cells);
    return cells;
};

const resetGame = () => {
    return { cells: createNewCells() };
};

const getCellsFromRows = (cells) => [].concat.apply([], cells);
const getEmptyCells = (cells) => getCellsFromRows(cells).filter(cell => cell.owner === null);

const newCursorLocation = (cells) => {
    let emptyCells = getEmptyCells(cells);
    let cell = null;
    if(emptyCells && emptyCells.length) {
        const index = Math.floor(Math.random() * emptyCells.length);
        console.log('... we have empty cells, selecting index ', index);
        cell = emptyCells[index];
    }
    console.log('newCursorLocation:- emptyCells=', emptyCells, ', cell=', cell);
    return cell === null ? null : { x: cell.x, y: cell.y };
};

const play = (state = initialPlayState, action) => {
    switch(action.type) {
        case DISMISS_SPLASH_SCREEN:
            //return { showSplashScreen: false };
            return Object.assign({}, state, { showSplashScreen: false });
        case QUIT_GAME:
            //return { gameStarted: false };
            return Object.assign({}, state, { gameStarted: false });
        case RESET_GAME:
            //return resetGame();
            return Object.assign({}, state, resetGame());
        case START_GAME:
            return Object.assign({}, state, { gameStarted: true }, resetGame());
        case HIDE_CURSOR:
            return Object.assign({}, state, { cursorVisible: false });
        case MOVE_CURSOR:
            const position = action.x && action.y ? { x: action.x, y: action.y } : newCursorLocation(state.cells);
            return Object.assign({}, state, { cursorX: position.x, cursorY: position.y });
        case SHOW_CURSOR:
            //return Object.assign({}, state, { cursorVisible: true });
            // Move and show cursor
            return Object.assign({}, play(state, {type: MOVE_CURSOR}), { cursorVisible: true });
        default:
            return state;
    }
};

export default play;