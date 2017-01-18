import { DISMISS_SPLASH_SCREEN, QUIT_GAME, RESET_GAME, START_GAME, HIDE_CURSOR, MOVE_CURSOR, SHOW_CURSOR, ATTACK, ADD_PLAYER, EDIT_PLAYER, SET_EDIT_PLAYER_NAME, SET_EDIT_PLAYER_COLOR,
    UPDATE_PLAYER, REMOVE_PLAYER, SHOW_NEW_PLAYER, HIDE_NEW_PLAYER, ADD_NEW_PLAYER, CLEAR_NEW_PLAYER, CLEAR_SCORES, PAUSE, UNPAUSE } from '../actions/play';
import PlayerColors from '../constants/PlayerColors';
import { availablePlayerColors } from '../constants/PlayerColors';
import Directions from '../constants/Directions';
const initialPlayState = { 
    showSplashScreen: true, 
    gameStarted: false, 
    cells: [], 
    players: [], 
    cursorVisible: true, cursorX: 0, cursorY: 0,
    showingNewOrEditPlayer: false,
    editPlayerName: '', editPlayerIndex: null, editPlayerColor: null,
    paused: false
};
//import { flatten } from '../helpers/arrayHelpers';

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

const getNextCell = (cellRows, x, y, direction) => {
    var newX = x, newY = y;
    switch(direction) {
        case Directions.UP:
            newY = y > 0 ? y - 1 : gridSize.y - 1;
            break;
        case Directions.DOWN:
            newY = y < gridSize.y - 1 ? y + 1 : 0;
            break;
        case Directions.LEFT:
            newX = x > 0 ? x - 1 : gridSize.x - 1;
            break;
        case Directions.RIGHT:
            newX = x < gridSize.x - 1 ? x + 1 : 0;
            break;
        case Directions.FIRE:
            // NB: Neither value needs to change
            break;
        default:
            throw 'getNextCell: Unknown direction:- ' + direction;
            return null;
    }
    return cellRows[newX][newY];
};

const addPoints = (type, player, count = 0) => {
    count = count || 0;
    console.log('reducers/play.js, addPoints:- type=', type, ', player=', player, ', count=', count);
    switch(type) {
        //case "CAPTURE": player.score += 100; break;
        case "CAPTURE": player.score += (100 + ((count * count) * 15)); break;
        case "DESTROY": player.score -= 120; break;
        //case "CONTAGION": player.score += 15; break;
        case "CONTAGION": player.score += (12 * count); break;
        case "OVERRUN": player.score += 175; break;
        default:
            console.warn('Unknown points type: ' + type);
    }
}

const adjacentCells = (cellRows, x, y) => {
    const left = x > 0 ? x - 1 : gridSize.x - 1;
    const right = x < gridSize.x - 1 ? x + 1 : 0;
    const up = y > 0 ? y - 1 : gridSize.y - 1;
    const down = y < gridSize.y - 1 ? y + 1 : 0;
    return [cellRows[left][y], cellRows[right][y], cellRows[x][up], cellRows[x][down]];
};
//const ownedAdjacentCount = (cellRows, x, y, player) => adjacentCells(cellRows, x, y).filter(cell => cell.owner === player).length;
const ownedAdjacentCount = (cellRows, x, y, playerId) => adjacentCells(cellRows, x, y).filter(cell => cell.owner && cell.owner.id === playerId).length;

const MAX_CONTAGION = 3;
const attack = (state, player, direction, x, y, cellRows) => {
    if(direction === Directions.NONE) return state;

    cellRows = cellRows || [].concat(state.cells);
    x = x || state.cursorX;
    y = y || state.cursorY;
    
    var nextCell = getNextCell(cellRows, x, y, direction);
    if(!nextCell) throw "nextCell missing in attack method!";

    const playerId = player.id;

    if(nextCell.owner === null) {
        // Capture the cell and stop
        console.log('Capturing cell ' + nextCell.x + ',' + nextCell.y);
        nextCell.owner = player;
        // Clear contagion, as this wipes other attempts to capture it
        nextCell.contagion = [];
        addPoints("CAPTURE", player, ownedAdjacentCount(cellRows, nextCell.x, nextCell.y, player));
        console.log('... new score=', player.score);
    //} else if(nextCell.owner === player) {
    } else if(nextCell.owner.id === playerId) {
        // Destroy the cell and stop
        console.log('Destroying self-owned cell');
        nextCell.owner = null;
        addPoints("DESTROY", player, ownedAdjacentCount(cellRows, nextCell.x, nextCell.y, player));
    } else {
        //let playerIndex = state.players.indexOf(player)
        // NB: Must be another player's castle, so add contagion (TODO: Complete logic and enhance scoring), then attack the next cell if this used a direction other than FIRE
        //nextCell.contagion[player] = (nextCell.contagion[player] || 0)+1;
        nextCell.contagion[playerId] = (nextCell.contagion[playerId] || 0) + 1;
        //console.log('Adding contagion: playerIndex=' + playerIndex + ', nextCell.contagion[playerIndex]=' + nextCell.contagion[playerIndex]);
        //nextCell.contagion[playerIndex] = (nextCell.contagion[playerIndex] || 0) + 1;
        //if(nextCell.contagion[player] > MAX_CONTAGION) {
        //if(nextCell.contagion[playerIndex] > MAX_CONTAGION) {
        if(nextCell.contagion[playerId] > MAX_CONTAGION) {
            console.log('Exceeded max contagion, overrunning castle');
            nextCell.contagion = [];
            nextCell.owner = player;
            addPoints("OVERRUN", player, ownedAdjacentCount(cellRows, nextCell.x, nextCell.y, player));
        } else {
            //console.log('Adding contagion to cell (new total=' + nextCell.contagion[player] + ')');
            //console.log('Adding contagion to cell (new total=' + nextCell.contagion[playerIndex] + ')');
            console.log('Adding contagion to cell (new total=' + nextCell.contagion[playerId] + ')');
            //addPoints("CONTAGION", player, nextCell.contagion[player]);
            //addPoints("CONTAGION", player, nextCell.contagion[playerIndex]);
            addPoints("CONTAGION", player, nextCell.contagion[playerId]);
        }
        if(direction !== Directions.FIRE) {
            console.log('Direction is not FIRE, so proceeding to next cell');
            state = attack(state, player, direction, nextCell.x, nextCell.y, cellRows);
        }
    }

    return state;
};

let nextPlayerId = 10001;

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
            //return Object.assign({}, state, { cursorX: position.x, cursorY: position.y });
            return position === null
                ? play(state, {action: HIDE_CURSOR})
                : Object.assign({}, state, { cursorX: position.x, cursorY: position.y });
        case SHOW_CURSOR:
            //return Object.assign({}, state, { cursorVisible: true });
            // Move and show cursor
            return Object.assign({}, play(state, {type: MOVE_CURSOR}), { cursorVisible: true });
        case ATTACK:
            //return Object.assign({}, attack(state, action.player, action.direction));
            // NB: Changed to JSON stringify+parse to update all child components
            //return JSON.parse(JSON.stringify(attack(state, action.player, action.direction)));
            // NB: Modified JSON pair to also hide the cursor
            return JSON.parse(JSON.stringify(attack(play(state, {type: HIDE_CURSOR}), action.player, action.direction)));
        case ADD_PLAYER:
            action.player.id = action.player.id || nextPlayerId++;
            return Object.assign({}, state, { players: state.players.concat(action.player) });
        case EDIT_PLAYER:
            var player = state.players[action.index];
            return Object.assign({}, play(state, {type: SHOW_NEW_PLAYER}), { editPlayerIndex: action.index, editPlayerName: player.name, editPlayerColor: player.color });
        case SET_EDIT_PLAYER_NAME:
            return Object.assign({}, state, { editPlayerName: action.name });
        case SET_EDIT_PLAYER_COLOR:
            return Object.assign({}, state, { editPlayerColor: action.color });
        case UPDATE_PLAYER:
            var players = Object.assign(state.players);
            state.players[action.index] = Object.assign({}, state.players[action.index], action.playerChanges);
            return Object.assign({}, state, { players });
        case REMOVE_PLAYER:
            return Object.assign({}, state, { players: state.players.splice(action.index, 1) });
        case SHOW_NEW_PLAYER:
            return Object.assign({}, play(state, {type: CLEAR_NEW_PLAYER}), { editPlayerIndex: null, showingNewOrEditPlayer: true });
        case HIDE_NEW_PLAYER:
            //return Object.assign({}, state, { showingNewOrEditPlayer: false });
            return Object.assign({}, play(state, { type: CLEAR_NEW_PLAYER}), { showingNewOrEditPlayer: false });
        case ADD_NEW_PLAYER:
            //return Object.assign(play(state, {type: ADD_PLAYER, player: { name: state.editPlayerName, color: state.editPlayerColor || availablePlayerColors()[0], score: 0 }}));
            return play(Object.assign(play(state, {type: ADD_PLAYER, player: { name: state.editPlayerName, color: state.editPlayerColor || availablePlayerColors()[0], score: 0 }}))
                , {type: HIDE_NEW_PLAYER});
        case CLEAR_NEW_PLAYER:
            return Object.assign({}, state, { editPlayerName: '', editPlayerColor: null });
        case CLEAR_SCORES:
            return Object.assign({}, state, { players: state.players.map(player => { player.score = 0; return player; }) });
        case PAUSE:
            return Object.assign({}, state, { paused: true });
        case UNPAUSE:
            return Object.assign({}, state, { paused: false });
        default:
            return state;
    }
};

export default play;