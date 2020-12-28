import React from 'react'
import Signup from './Signup';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  

} from 'react-router-dom'
// import home from './home';
// import final from './containers/final';
// import Basic from "./components/Left/Basic";

function MainRouter() {
  return (
    <div>
        <Router>
            <Switch>
                {/* <Route exact path="/containers/final" component={final}/>  */}
                <Route exact path="/" component={Signup}/> 
                {/* <Route path="/Basic" component={Basic} /> */}
                

               
            </Switch>
        </Router>
    </div>
  );
}
export default MainRouter