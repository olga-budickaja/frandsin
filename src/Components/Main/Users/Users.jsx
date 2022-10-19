import React from "react";
import user1 from "../../../Redux/asscess/img/user1.jpg";
import bg1 from "../../../Redux/asscess/img/bg1.jpg";
import user2 from "../../../Redux/asscess/img/user2.jpg";
import bg2 from "../../../Redux/asscess/img/bg2.jpg";
import user3 from "../../../Redux/asscess/img/user3.jpg";
import bg3 from "../../../Redux/asscess/img/bg3.jpg";
import user4 from "../../../Redux/asscess/img/user4.jpg";
import bg4 from "../../../Redux/asscess/img/bg4.jpg";
import user5 from "../../../Redux/asscess/img/user5.jpg";
import bg5 from "../../../Redux/asscess/img/bg5.jpg";
import user6 from "../../../Redux/asscess/img/user6.jpg";
import bg6 from "../../../Redux/asscess/img/bg6.jpg";
import user7 from "../../../Redux/asscess/img/user7.jpg";
import bg7 from "../../../Redux/asscess/img/bg7.jpg";
import user8 from "../../../Redux/asscess/img/user8.jpg";
import bg8 from "../../../Redux/asscess/img/bg8.jpg";
import user9 from "../../../Redux/asscess/img/user9.jpg";
import bg9 from "../../../Redux/asscess/img/bg9.jpg";
import user10 from "../../../Redux/asscess/img/user10.jpg";
import bg10 from "../../../Redux/asscess/img/bg10.jpg";
import user11 from "../../../Redux/asscess/img/user11.jpg";
import bg11 from "../../../Redux/asscess/img/bg11.jpg";

let Users = (props) => {

    if(props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                src: user1,
                srsBg: bg1,
                name: "Katrin Love",
                friends: 24
            },
            {
                id: 2,
                src: user2,
                srsBg: bg2,
                name: "Natali Hi",
                friends: 2,
                confirmed: true
            },
            {
                id: 3,
                src: user3,
                srsBg: bg3,
                name: "Joe Will",
                friends: 10,
                confirmed: true
            },
            {
                id: 4,
                src: user4,
                srsBg: bg4,
                name: "Tanja Brown",
                friends: 5,
                confirmed: true
            },
            {
                id: 5,
                src: user5,
                srsBg: bg5,
                name: "Alex Cool",
                friends: 1,
                confirmed: true
            },
            {
                id: 6,
                src: user6,
                srsBg: bg6,
                name: "Janny Will",
                friends: 3,
                confirmed: true
            },
            {
                id: 7,
                src: user7,
                srsBg: bg7,
                name: "Kristin Joe",
                friends: 2,
                confirmed: false
            },
            {
                id: 8,
                src: user8,
                srsBg: bg8,
                name: "Kevin Tyler",
                friends: 10,
                confirmed: false
            },
            {
                id: 9,
                src: user9,
                srsBg: bg9,
                name: "Tanja Ministry",
                friends: 5,
                confirmed: false
            },
            {
                id: 10,
                src: user10,
                srsBg: bg10,
                name: "Helen White",
                friends: 1,
                confirmed: false
            },
            {
                id: 11,
                src: user11,
                srsBg: bg11,
                name: "Jon Bon Jove",
                friends: 3,
                confirmed: false
            }
        ]);
    }

    return (
        <div>
            {props.users.map(user => <div>
                <img src={user.src} alt="user"/>
                <div>
                    {user.confirmed
                        ? <button onClick={() => {props.confirmUser(user.id)}}>Confirm</button>
                        : <button onClick={() => {props.unconfirmedUser(user.id)}}>Delete</button>
                    }
                </div>
                </div> )
            }
        </div>
    )
}

export default Users;