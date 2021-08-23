
function camelize(str) {
    return str.replace(/\W+(.)/g, function(match, chr)
     {
          return chr.toUpperCase();
      });
  }
  
export const setType = ({ key, value, item }) => dispatch => {
    dispatch({
        type: "SET_TYPE",
        payload: { key: camelize(key), value, item }
    });
};

export const setTitle = ({ key, value, item }) => dispatch => {
    dispatch({
        type: "SET_TITLE",
        payload: { key: camelize(key)   , value, item }
    });
};

export const setData = ({ key, value, item }) => dispatch => {
    dispatch({
        type: "SET_DATA",
        payload: { key: camelize(key), value, item }
    });
};

export const setLayout = (layout, root) => (dispatch, getState) => {

    dispatch({
        type: "SET_LAYOUT",
        payload: { layout, root, breakpoint: getState().gridlayout.breakpoint }
    });
};

export const setBreakPoint = breakpoint => dispatch => {
    dispatch({
        type: "SET_BREAKPOINT",
        payload: breakpoint
    });
};
