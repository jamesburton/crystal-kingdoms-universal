export const DISMISS_SPLASH_SCREEN = "DISMISS_SPLASHSCREEN";
export const QUIT_GAME = "QUIT_GAME";
export const RESET_GAME = "RESET_GAME";
export const START_GAME = "START_GAME";
export const HIDE_CURSOR = "HIDE_CURSOR";
export const MOVE_CURSOR = "MOVE_CURSOR";
export const SHOW_CURSOR = "SHOW_CURSOR";
export const dismissSplashScreen = () => { return { type: DISMISS_SPLASH_SCREEN /* ... other parameters */ } };
export const quitGame = () => { return { type: QUIT_GAME } };
export const resetGame = () => { return { type: RESET_GAME } };
export const startGame = () => { return { type: START_GAME } };
export const hideCursor = () => { return { type: HIDE_CURSOR } };
export const moveCursor = (x, y) => { return { type: MOVE_CURSOR, x, y } };
export const showCursor = () => { return { type: SHOW_CURSOR } };
module.exports = {
    DISMISS_SPLASH_SCREEN,
    QUIT_GAME,
    RESET_GAME,
    START_GAME,
    HIDE_CURSOR,
    MOVE_CURSOR,
    SHOW_CURSOR,

    dismissSplashScreen,
    quitGame,
    resetGame,
    startGame,
    hideCursor,
    moveCursor,
    showCursor
};