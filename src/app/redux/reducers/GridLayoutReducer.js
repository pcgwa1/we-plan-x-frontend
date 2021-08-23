import initialState from "../initialState";

export default function gridLayoutReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_TITLE":
        case "SET_DATA":
        case "SET_TYPE": {
            const { key, value, item } = action.payload;
            return {
                ...state,
                data: {
                    ...state.data,
                    [key]: {
                        ...state.data[key],
                        [item]: value
                    }
                }
            };
        }

        case "SET_LAYOUT": {
            const { layout, root, breakpoint } = action.payload;
            // const index = state.layouts[breakpoint].findIndex(({ i }) => i === root);
            // if (index === -1) {
            //     return state;
            // }

            const layouts = state.layouts[breakpoint];

            return {
                ...state,
                layouts: layout
            };
        }

        case "SET_BREAKPOINT":
            return {
                ...state,
                breakpoint: action.payload
            };

        default:
            return state;
    }
}
