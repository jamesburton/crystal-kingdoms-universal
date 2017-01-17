import { DISMISS_SPLASH_SCREEN, QUIT_GAME, RESET_GAME, START_GAME } from '../actions/play';
const initialPlayState = { showSplashScreen: true, gameStarted: false };

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
    return cells;
};

const play = (state = initialPlayState, action) => {
    switch(action.type) {
        case DISMISS_SPLASH_SCREEN:
            return { showSplashScreen: false };
        case QUIT_GAME:
            return { gameStarted: false };
        case RESET_GAME:
            return { cells: createNewCells() };
        case START_GAME:
            return { gameStarted: true };
        default:
            return state;
    }
};

export default play;