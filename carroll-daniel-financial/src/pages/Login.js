import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { UserAgentApplication } from 'msal'
import axios from 'axios'
import config from '../Config/UserConfig';
import { getUserDetails } from '../Config/GraphService';
import AuthHelperMethods from '../services/AuthHelperMethods';
import { Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class Login extends Component{

  constructor(props) {
    super(props);

    this.userAgentApplication = new UserAgentApplication({
      auth: {
          clientId: config.appId
      },
      cache: {
          cacheLocation: "localStorage",
          storeAuthStateInCookie: true
      }
    });

    var user = this.userAgentApplication.getAccount;

    /*this.state = {
      isAuthenticated: (user !== null),
      user: {},
      userFailed: true,
      error: null
    };*/

    if (user) {
    // Enhance user object with data from Graph
      this.getUserProfile();
    }

    this.state = {
      email: "",
      password: "",
      adToken: ""
      };

    }

    Auth = new AuthHelperMethods();

     login = async event => {

      try {
        const loginRequest = {
          scopes: config.scopes,
          prompt: "select_account"
      }
          await this.userAgentApplication.loginPopup(loginRequest).then(
            loginResponse => this.state.adToken = "Mstoken " + loginResponse.idToken.rawIdToken     
            //login success

            ).catch(function (error) {
            //login failure
            var test = localStorage.getItem("msal.login.error")

            if(test.includes("is not assigned to a role")){
              alert("You are not assigned access")
            }
        });


      }
      catch(err) {
        var errParts = err.toString().split('|');
        this._isMounted && this.setState({
          isAuthenticated: false,
          user: {},
          error: { message: errParts[1], debug: errParts[0] }
        });
      } 
      
      axios.post(
        "https://rest-site-locations-1594736464770.azurewebsites.net/api/auth/login", this.state,
        {
          headers: { "Content-Type" : "application/json" }
        }
      ).then(response => {
        var dataValue = response['data'];
        this.setToken(dataValue.token);
        console.log("This is the value from azure: " + dataValue.token);
        this.props.history.replace("/financial/main");

      }).catch(error => {
        console.log(error)
        alert("Invalid Username and Password: ");
        this.Auth.logout()
      })
      
    }

    logout() {
      this.userAgentApplication.logout();
    }

    async getUserProfile() {

      try {
        // Get the access token silently
        // If the cache contains a non-expired token, this function
        // will just return the cached token. Otherwise, it will
        // make a request to the Azure OAuth endpoint to get a token
    
        if (window.location.hash.includes("id_token")) {
          window.close();
        }
        var accessToken = await this.userAgentApplication.acquireTokenSilent({
          scopes: config.scopes
        });

        if (accessToken) {
          // Get the user's profile from Graph

          var user = await getUserDetails(accessToken);
          this._isMounted && this.setState({
            isAuthenticated: true,
            user: {
              displayName: user.displayName,
              email: user.mail || user.userPrincipalName
            },
            error: null
          });
        }
      }
      catch(err) {
        var error = {};
        if (typeof(err) === 'string') {
          var errParts = err.toString().split('|');
          error = errParts.length > 1 ?
            { message: errParts[1], debug: errParts[0] } :
            { message: err };
        } else {
          error = {
            message: err.message,
            debug: JSON.stringify(err)
          };
        }
    
        this._isMounted && this.setState({
          isAuthenticated: false,
          user: {},
          error: error
        });
      }
    }

    validateForm() {
      return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
      this._isMounted && this.setState({
        [event.target.id]: event.target.value
      });
    }

    handleSubmit = async event => {
      event.preventDefault();

      this.login();

      /*if(localStorage.getItem("msal.idtoken") !== ''){
          this.props.history.replace("/financial/main");
      }if(this.state.email === '' && this.state.password === '' && localStorage.getItem("msal.idtoken") === null){
          this.login();
        }
      if(this.state.email !== '' && this.state.password !== ''){
      console.log(this.state)
      axios.post('http://localhost:8081/api/auth/login', this.state, {
        headers: { 'Content-Type' : 'application/json'}
      })
      .then(response => {
        var data = response['data'];
        console.log(data)
        this.setToken(data.token); // Setting the token in localStorage
        this.props.history.replace("/financial/main");
      })
      .catch(error => {
        alert("Invalid Username and Password");
        this.Auth.logout()
      })
    }*/
  
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
  }  

    setToken = idToken => {
      // Saves user token to localStorage
      localStorage.setItem("data-token", idToken);
    };

    render(){
      
        return (
          <>
        <Navbar className="color-nav" style={{paddingBottom: '2%', paddingTop: '2%'}}>
          <Navbar.Brand href="http://localhost:3000/financial/main"><img src={ require('../images/logo.png') } alt="carolldaniellogo" className="mainLogo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Navbar>
          <Container style={{ paddingTop: '5%'}}>
            <Row>
            <Col></Col> 
            <Col><button style={{ width: '100%', fontSize: '26px', paddingTop:'2%', paddingBottom: '2%', backgroundColor: '#005A8B', color: 'white'}} type='submit' onClick={this.handleSubmit}>Login</button></Col> 
            <Col></Col>
            </Row>  
          </Container>  
          </>
        )

    }
}

