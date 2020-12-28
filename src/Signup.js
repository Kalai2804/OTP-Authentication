import React, { Component } from 'react';
import './App.css';
import firebase  from './firebase';
import * as firebaseui from "firebaseui";
class Signup extends Component {
  componentDidMount() {
    
    const uiConfig = {
      signInSuccessUrl: "", //This URL is used to return to that page when we got success response for phone authentication.
      signInOptions: [firebase.auth.PhoneAuthProvider.PROVIDER_ID],
      tosUrl: "https://netflix-clone-ankur.herokuapp.com/"
    };
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", uiConfig);
  }
  render() {
    return (
      <>
      <h1>RESUME BUILDER</h1>
      <div id="firebaseui-auth-container"></div>
      </>
    )
  }
}
export default Signup;