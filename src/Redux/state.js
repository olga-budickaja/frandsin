// import user1 from "./img/user1.jpg";
// import user2 from "./img/user2.jpg";
// import user3 from "./img/user3.jpg";
// import user4 from "./img/user4.jpg";
// import user5 from "./img/user5.jpg";
// import avatar from "./img/avatar.jpg";
// import user6 from "./img/user6.jpg";
// import user7 from "./img/user7.jpg";
// import user8 from "./img/user8.jpg";
// import user9 from "./img/user9.jpg";
// import user10 from "./img/user10.jpg";
// import bgAvatar from "./img/bgAvatar.jpg";
// import bg1 from "./img/bg1.jpg";
// import bg2 from "./img/bg2.jpg";
// import bg3 from "./img/bg3.jpg";
// import bg4 from "./img/bg4.jpg";
// import bg5 from "./img/bg5.jpg";
// import bg6 from "./img/bg6.jpg";
// import bg7 from "./img/bg7.jpg";
// import bg8 from "./img/bg8.jpg";
// import bg9 from "./img/bg9.jpg";
// import bg10 from "./img/bg10.jpg";
// import profileReducer from "./profileReducer";
//
//
// let store = {
//         _state: {
//                 profilePage: {
//                         users:
//                             [
//                                     {id: avatar, src: avatar, srsBg: bgAvatar, name: "Katrin Love", friends: 24},
//                                     {id: 1, src: user1, srsBg: bg1, name: "Natali Hi", friends: 2, confirm: true},
//                                     {id: 2, src: user2, srsBg: bg2, name: "Joe Will", friends: 10, confirm: true},
//                                     {id: 3, src: user3, srsBg: bg3, name: "Tanja Brown", friends: 5, confirm: true},
//                                     {id: 4, src: user4, srsBg: bg4, name: "Alex Cool", friends: 1, confirm: true},
//                                     {id: 5, src: user5, srsBg: bg5, name: "Janny Will", friends: 3, confirm: true},
//                                     {id: 1, src: user6, srsBg: bg6, name: "Kristin Joe", friends: 2, confirm: false},
//                                     {id: 2, src: user7, srsBg: bg7, name: "Kevin Tyler", friends: 10, confirm: false},
//                                     {id: 3, src: user8, srsBg: bg8, name: "Tanja Ministry", friends: 5, confirm: false},
//                                     {id: 4, src: user9, srsBg: bg9, name: "Helen White", friends: 1, confirm: false},
//                                     {id: 5, src: user10, srsBg: bg10, name: "Jon Bon Jove", friends: 3, confirm: false}
//                             ],
//                 }
//         },
//         _callSubscriber() {
//                 console.log('changed')
//         },
//         getState() {
//                 return this._state;
//         },
//         subscribe(observer) {
//                 this._callSubscriber = observer;
//         },
//         dispatch(action) {
//                 this._state.profilePage = profileReducer(this._state.profilePage, action);
//         }
//
// }
//
// window.state = store;
// export default store;