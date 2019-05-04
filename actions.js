import uuid from uuid;

export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const LIKE_COMMENT = 'LIKE_COMMENT';
export const UNLIKE_COMMENT = "UNLIKE_COMMENT";

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        id,
        text
    }
}

function deleteComment(id) {
    return {
        type: DELETE_COMMENT,
        id
    }
}

function likeComment(id) {
    return {
        type: LIKE_COMMENT,
        id
    }
}

function unlikeComment(id) {
    return {
        type: UNLIKE_COMMENT,
        id
    }
}

const boundAddComment = text => dispatch(addComment(text));
const boundEditComment = (id, text) => dispatch(editComment(id, text));
const boundDeleteComment = id => dispatch(deleteComment(id));
const boundLikeComment = id => dispatch(likeComment(id));
const boundUnlikeComment = id => dispatch(unlikeComment(id));