// import React from "react";
// // import Header from "./Header";
// import {toggleIsFetching} from "../../Redux/headerReducer";
// import {connect} from "react-redux";
// import UsersContainer from "../Main/Users/UsersContainer";
//
// class HeaderContainer extends React.Component {
//     componentDidMount() {
//        let = () => {
//            this.props.toggleIsFetching(true);
//        }
//     }
//
//     render() {
//         return ( <div>
//                 if ({toggleIsFetching()}) {
//                 <UsersContainer />
//             }
//         </div>
//
//         )
//     }
// }
//
// const mapStateToProps = (state) => {
//     return {
//         isFetching: state.header.isFetching
//     }
// };
//
// export default connect(mapStateToProps, toggleIsFetching())(HeaderContainer);