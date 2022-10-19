import React from "react";
import {
    confirmCreatorAction,
    setUsersCreator,
    unconfirmedCreatorAction,
} from "../../../Redux/usersReducer";
import {connect} from "react-redux";
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        confirmUser: (userId) => {
            dispatch(confirmCreatorAction(userId));
        },
        unconfirmedUser: (userId) => {
            dispatch(unconfirmedCreatorAction(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersCreator(users));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Users)