export function comments(state = [], action) {
    switch (action.type) {
        case ADD_COMMENT:
            return [{
                    id: action.id,
                    text: action.text,
                    votes: 0
            }, ...state];

        case EDIT_COMMENT:
            return [{
                    id: action.id,
                    text: action.text,
            }, ...state];

        case DELETE_COMMENT:
            return state.filter(comment => comment.id !== action.id);

        case LIKE_COMMENT:
            return state.filter(comment => comment.id !== action.id);

        case UNLIKE_COMMENT:
            return state.filter(comment => comment.id !== action.id);

        default:
            return state;
    }
}