const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case('SET_CURRENT_USER'):
            return ({
                ...state,
                currentUser: action.payload
            })
        default:
            return state
    }
}

/*
    We have defined an object called the INTIAL_STATE and a function called userReducer that takes in 
    the state and the action. The action is an object that contains the type of the action
    and the payload of the action. The action's type is what then determines what the 
    function will return, if the action's type is recongnized by the function, it will
    return an object with spreaded state and the item of the action's payload
*/

export default userReducer;