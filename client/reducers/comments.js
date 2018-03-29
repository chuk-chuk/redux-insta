//a reducer takes in two things

//1. the actifon(info about what happended)
//2. copy of current state

function comments(state = [], action){
    console.log(state, action);
    return state;
}

export default comments;