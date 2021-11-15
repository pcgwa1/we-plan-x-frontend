import {
  TOGGLE_CREATE_DECK_MODAL
} from "../actions/DeckActions";

const initialState = {
  toggle_create_deck: false
};

const deckReducer = function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_CREATE_DECK_MODAL: {
      return {
        ...state,
        toggle_create_deck: !state.toggle_create_deck
      };
    }
    default: {
      return state;
    }
  }
};

export default deckReducer;
