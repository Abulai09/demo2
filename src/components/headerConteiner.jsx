import React from "react";
import { connect } from "react-redux";
import Header from "./header";

class HeaderContainer extends React.Component{
    render () {
        return(
            <div>
                <Header email={this.props.email} isAuth={this.props.isAuth}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth:state.auth.isAuth,
        email:state.auth.email
    }
}

export default connect(mapStateToProps)(HeaderContainer)