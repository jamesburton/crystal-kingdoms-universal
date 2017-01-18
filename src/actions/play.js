export const DISMISS_SPLASH_SCREEN = "DISMISS_SPLASHSCREEN";
export const QUIT_GAME = "QUIT_GAME";
export const RESET_GAME = "RESET_GAME";
export const START_GAME = "START_GAME";
export const HIDE_CURSOR = "HIDE_CURSOR";
export const MOVE_CURSOR = "MOVE_CURSOR";
export const SHOW_CURSOR = "SHOW_CURSOR";
export const ATTACK = "ATTACK";
export const ADD_PLAYER = "ADD_PLAYER";
export const EDIT_PLAYER = "EDIT_PLAYER";
export const SET_EDIT_PLAYER_NAME = "SET_EDIT_PLAYER_NAME";
export const SET_EDIT_PLAYER_COLOR = "SET_EDIT_PLAYER_COLOR";
export const UPDATE_PLAYER = "UPDATE_PLAYER";
export const REMOVE_PLAYER = "REMOVE_PLAYER";
export const HIDE_NEW_PLAYER = "HIDE_NEW_PLAYER";
export const SHOW_NEW_PLAYER = "SHOW_NEW_PLAYER";
export const ADD_NEW_PLAYER = "ADD_NEW_PLAYER";
export const CLEAR_NEW_PLAYER = "CLEAR_NEW_PLAYER";
export const CLEAR_SCORES = "CLEAR_SCORES";
export const PAUSE = "PAUSE";
export const UNPAUSE = "UNPAUSE";
export const dismissSplashScreen = () => { return { type: DISMISS_SPLASH_SCREEN /* ... other parameters */ }; };
export const quitGame = () => { return { type: QUIT_GAME }; };
export const resetGame = () => { return { type: RESET_GAME }; };
export const startGame = () => { return { type: START_GAME }; };
export const hideCursor = () => { return { type: HIDE_CURSOR }; };
export const moveCursor = (x, y) => { return { type: MOVE_CURSOR, x, y }; };
export const showCursor = () => { return { type: SHOW_CURSOR }; };
export const attack = (player, direction) => { return { type: ATTACK, player, direction }; };
export const addPlayer = (player) => { return { type: ADD_PLAYER, player }; };
export const editPlayer = (index) => { return { type: EDIT_PLAYER, index }; };
export const setEditPlayerName = (name) => { return { type: SET_EDIT_PLAYER_NAME, name } };
export const setEditPlayerColor = (color) => { return { type: SET_EDIT_PLAYER_COLOR, color } };
export const updatePlayer = (index, playerChanges) => { return { type: UPDATE_PLAYER, index, playerChanges }; };
export const removePlayer = (index) => { return { type: REMOVE_PLAYER }; };
export const hideNewPlayer = () => { return { type: HIDE_NEW_PLAYER }; };
export const addNewPlayer = (player) => { return { type: ADD_NEW_PLAYER }; };
export const showNewPlayer = () => { return { type: SHOW_NEW_PLAYER }; };
export const clearNewPlayer = () => { return { type: CLEAR_NEW_PLAYER}; };
export const clearScores = () => { return { type: CLEAR_SCORES }; };
export const pause = () => { return { type: PAUSE }; };
export const unpause = () => { return { type: UNPAUSE }; };
module.exports = {
    DISMISS_SPLASH_SCREEN,
    QUIT_GAME,
    RESET_GAME,
    START_GAME,
    HIDE_CURSOR,
    MOVE_CURSOR,
    SHOW_CURSOR,
    ATTACK,
    ADD_PLAYER,
    EDIT_PLAYER,
    SET_EDIT_PLAYER_NAME,
    SET_EDIT_PLAYER_COLOR,
    UPDATE_PLAYER,
    REMOVE_PLAYER,
    SHOW_NEW_PLAYER,
    HIDE_NEW_PLAYER,
    ADD_NEW_PLAYER,
    CLEAR_NEW_PLAYER,
    CLEAR_SCORES,
    PAUSE,
    UNPAUSE,

    dismissSplashScreen,
    quitGame,
    resetGame,
    startGame,
    hideCursor,
    moveCursor,
    showCursor,
    attack,
    addPlayer,
    editPlayer,
    setEditPlayerName,
    setEditPlayerColor,
    updatePlayer,
    removePlayer,
    showNewPlayer,
    hideNewPlayer,
    addNewPlayer,
    clearNewPlayer,
    clearScores,
    pause,
    unpause
};