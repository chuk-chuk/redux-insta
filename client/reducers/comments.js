//a reducer takes in two things

//1. the actifon(info about what happended)
//2. copy of current state

function postComments(state = [], action){
    switch(action.type){
        case "ADD_COMMENT":
        //return teh new state with a new comment
            return [...state, { 
                user: action.author,
                text: action.comment
            }];
        case "DELETE_COMMENT":
        console.log("Removing a comment");
        //remove a new state without a deleted comment
        console.log("STATE", state);
        
        return [
            //from the start of all comment
            ...state.slice(0, action.i),
            //remove from the end 
            ...state.slice(action.i + 1)
        ]
        default:
            return state;
    }
    return state;
}

function comments(state = [], action){
    if(typeof action.postId !== undefined){
        return {
           //take the current state
           ...state, 
           //overwrite with a new state
           [action.postId]: postComments(state[action.postId], action)
        }
    }
    return state;
}

export default comments;