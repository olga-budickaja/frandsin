const CONFIRM = 'CONFIRM';
const UNCONFIRMED = 'UNCONFIRMED';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONFIRM:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, confirmed: false}
                    }
                    return user;
                })
            }
        case UNCONFIRMED:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, confirmed: true}
                    }
                    return user;
                })
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }
}

export const confirmCreatorAction = (userId) => {
    return {
        type: CONFIRM,
        userId
    }
}
export const unconfirmedCreatorAction = (userId) => {
    return {
        type: UNCONFIRMED,
        userId
    }
}
export const setUsersCreator = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export default usersReducer;