import axios from "axios";

// -------------------------------------------
// Get Latest Games
// -------------------------------------------
export const getLatestGames = (games) => ({
  type: "SET_GAME_LIST",
  games
});

export const startGetLatestGames = () => {
  return (dispatch, getState) => {

    return axios
      .get(
        `https://highrollercdn.blob.core.windows.net/data/test/gamestest.json`
      )
      .then(list => {
        const games =  list.data;

        dispatch(getLatestGames(games));
      });
  };
};

// -------------------------------------------
// Select Game Id
// -------------------------------------------
export const selectGameId = (gameId) => ({
  type: "SELECT_GAME_ID",
  gameId
});

// -------------------------------------------
// Get Game Details
// -------------------------------------------
export const getGameDetails = (game) => ({
  type: "GET_GAME_DETAILS",
  game
});

// -------------------------------------------
// Pagination
// -------------------------------------------
export const setPrevious = () => ({
  type: "SET_PREVIOUS",
});

export const setNext = () => ({
  type: "SET_NEXT",
});

// -------------------------------------------
// Filters
// -------------------------------------------
export const setText = (text) => ({
  type: "SET_TEXT",
  text
});

export const setSort = (sortBy) => ({
  type: "SET_SORT",
  sortBy
});

export const setVendor = (vendor) => ({
  type: "SET_VENDOR",
  vendor
});
