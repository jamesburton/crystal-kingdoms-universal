const PLAYER_COLOR_NONE = "None";
const PLAYER_COLOR_EMPTY = PLAYER_COLOR_NONE;
const PLAYER_COLOR_BLUE = "Blue";
const PLAYER_COLOR_RED = "Red";
const PLAYER_COLOR_GREEN = "Green";
const PLAYER_COLOR_PURPLE = "Purple";
const PLAYER_COLOR_YELLOW = "Yellow";
const PLAYER_COLOR_GREY = "Grey";

export const PlayerColors = {
    //NONE: 0,
    NONE: PLAYER_COLOR_NONE,
    //EMPTY: 0,
    EMPTY: PLAYER_COLOR_EMPTY,
    //BLUE: 1,
    BLUE: PLAYER_COLOR_BLUE,
    //RED: 2,
    RED: PLAYER_COLOR_RED,
    //GREEN: 3,
    GREEN: PLAYER_COLOR_GREEN,
    //PURPLE: 4,
    PURPLE: PLAYER_COLOR_PURPLE,
    //YELLOW: 5,
    YELLOW: PLAYER_COLOR_YELLOW,
    //GREY: 6
    GREY: PLAYER_COLOR_GREY
};
//module.exports = PlayerColors;
export const AllColors = [
    //PlayerColors.NONE,
    PlayerColors.BLUE,
    PlayerColors.RED,
    PlayerColors.GREEN,
    PlayerColors.PURPLE,
    PlayerColors.YELLOW,
    PlayerColors.GREY,
];

export function availablePlayerColors(players = [], ownColor = null) {
    return AllColors.filter(color => color === ownColor || players.findIndex(player => player.color === color) === -1);
};

export default PlayerColors;