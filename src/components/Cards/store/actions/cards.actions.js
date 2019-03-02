
//action types

export const CHANGE_SCORE = 'CHANGE_SCORE'
export const QUIZ_POS = 'QUIZ_POS'


export const alterScore = delta => dispatch => {
    return dispatch({
        type:CHANGE_SCORE,
        delta:delta
    });
};
