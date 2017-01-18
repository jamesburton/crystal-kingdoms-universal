import { DISMISS_SPLASH_SCREEN, QUIT_GAME, RESET_GAME, START_GAME } from '../actions/play';
const initialPlayState = { showSplashScreen: true, gameStarted: false, cells: [], players: [], cursorVisible: true, cursorX: 0, cursorY: 0 };

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
        default:
            return state;
    }
};

export default play;