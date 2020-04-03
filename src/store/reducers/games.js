import selectGames from "../../store/selectors/games";

const gamesReducerDefaultState = {
  // all games
  games: [],
  topFeatures: [],
  vendors: [
    {
      id: 1,
      name: "Evolution"
    },
    {
      id: 2,
      name: "Microgaming"
    },
    {
      id: 3,
      name: "Netent"
    },
    {
      id: 4,
      name: "BetSoft"
    }
  ],
  
  // filter
  sortBy: "",
  text: "",
  // paging
  totalPages: 1,
  currentPage: 1,
  currentGames: [],
  pageLimit: 10,
  disableNext: false,
  disablePrevious: true,
  // selection
  gameId: "",
  selectedGame: undefined,

  // filter
  vendor: "",
 
  // error
  error: undefined,
  loading: false,
  loaded: false
};

export default (state = gamesReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_GAME_LIST": {
      const allGames = [...action.games];
      const currentPage = 1;
      const pageLimit = state.pageLimit;
      const totalPages = Math.floor(action.games.length / pageLimit);

      const offset = (currentPage - 1) * pageLimit;
      const currentGames = allGames.slice(offset, offset + pageLimit);
      const features = allGames.slice(1, 20);

      return {
        ...state,
        games: [...allGames],
        currentGames: [...currentGames],
        topFeatures: [...features],
        currentPage,
        totalPages
      };
    }
    case "SELECT_GAME_ID": {
      return {
        ...state,
        gameId: action.gameId
      };
    }
    case "SET_PREVIOUS": {
      const allGames = [...state.games];

      let currentPage = state.currentPage;
      
      let disablePrevious = true;
      let currentGames = [];

      if (currentPage > 1) {
        disablePrevious = false;
        currentPage--;

        const offset = (currentPage - 1) * state.pageLimit;

        currentGames = allGames.slice(offset, offset + state.pageLimit);
      }

      return {
        ...state,
        currentGames: [...currentGames],
        currentPage,
        disablePrevious
      };
    }
    case "SET_NEXT": {
      const allGames = [...state.games];
      let currentPage = state.currentPage;

      let disableNext = true;
      let disablePrevious = true;
      let currentGames = [];

      if (currentPage < state.totalPages) {
        disableNext = false;
        currentPage++;
        const offset = (currentPage + 1) * state.pageLimit;
      
        currentGames = allGames.slice(offset, offset + state.pageLimit);
      }

      if (currentPage > 1) {
        disablePrevious = false;
      }

      return {
        ...state,
        currentGames: [...currentGames],
        currentPage,
        disableNext,
        disablePrevious
      };
    }
    case "SET_TEXT": {

      return {
        ...state,
        text: action.text
      };
    }
    case "SET_SORT": {
      return {
        ...state,
        sortBy: action.sortBy
      };
    }
    case "SET_VENDOR": {
      return {
        ...state,
        vendor: action.vendor
      };
    }
    case "GET_GAME_DETAILS": {
      const game = action.game;

      return {
        ...state,
        selectedGame: game
      };
    }
    default:
      return state;
  }
};
