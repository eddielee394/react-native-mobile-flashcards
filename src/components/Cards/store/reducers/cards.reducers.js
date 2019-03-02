import * as Actions from "../actions";
//import _ from "@lodash";

const quizState = {currentCard:0, score:0}



function quizReducer(state=quizState, action) {
    switch (action.type) {
        case Actions.CHANGE_SCORE:
            return Object.assign({},state,{score:Number(state.score)+Number(action.delta)})
        default:
            return state
    }

}

export default quizReducer;
