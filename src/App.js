import React from "react";
import { connect } from "react-redux";
import { Route ,Routes} from "react-router-dom";
import HeaderContainer from "./components/headerConteiner";
import Login from "./components/login/login";
import { initializingThunk } from "./redux/app-reducer";

class App extends React.Component {
  componentDidMount(){
    this.props.initializingThunk()
  }

  render(){
    if(!this.props.initialized){
      return <div><h1>Loading...</h1></div>
    }else{
      return (
        <div>
          <HeaderContainer/>
          <Routes>
            <Route path={'/login'} element={<Login/>}/>
          </Routes>
        </div>
      )
    } 
  }
}

let mapStateToProps = (state) => {
  return {
    initialized:state.app.initialized
  }
}


export default connect(mapStateToProps,{initializingThunk})(App);