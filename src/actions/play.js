export const DISMISS_SPLASH_SCREEN = "DISMISS_SPLASHSCREEN";
export const QUIT_GAME = "QUIT_GAME";
export const RESET_GAME = "RESET_GAME";
export const START_GAME = "START_GAME";
export const dismissSplashScreen = () => { return { type: DISMISS_SPLASH_SCREEN /* ... other parameters */ } };
export const quitGame = () => { return { type: QUIT_GAME } };
export const resetGame = () => { return { type: RESET_GAME } };
export const startGame = () => { return { type: START_GAME } };
module.exports = {
    DISMISS_SPLASH_SCREEN,
    QUIT_GAME,
    RESET_GAME,
    START_GAME,

    dismissSplashScreen,
    quitGame,
    resetGame,
    startGame
};