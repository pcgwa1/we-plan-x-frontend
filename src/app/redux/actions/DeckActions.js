export const TOGGLE_CREATE_DECK_MODAL = "OPEN_CREATE_DECK_MODAL";

export function toggleCreateDeck() {
  return dispatch => {
    dispatch({
      type: TOGGLE_CREATE_DECK_MODAL
    });
  };
}

