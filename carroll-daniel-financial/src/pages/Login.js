import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//import Form from 'react-bootstrap/Form'
//import Button from 'react-bootstrap/Button'
import { UserAgentApplication } from 'msal'
import axios from 'axios'
import config from '../Config/UserConfig';
import { getUserDetails } from '../Config/GraphService';
import AuthHelperMethods from '../services/AuthHelperMethods';
//import { Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../images/logo.png'

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

    /*var user = this.userAgentApplication.getAccount;

    console.log(this.state)
    /*this.state = {
      isAuthenticated: (user !== null),
      user: {},
      userFailed: true,
      error: null
    };*/

    /*if (user) {
       console.log("checking if user exist")
    // Enhance user object with data from Graph
      this.getUserProfile();
    }*/

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
      
      //console.log(this.state)
      axios.post(
        "https://rest-site-locations-1594736464770.azurewebsites.net/api/auth/login", this.state,
        {
          headers: { "Content-Type" : "application/json" }
        }
      ).then(response => {
        var dataValue = response['data'];
        //console.log(dataValue)
        this.setToken(dataValue.token);
        //console.clear()
        //console.log("This is the value from azure: " + dataValue.token);
        this.props.history.replace("/financial/ExecutiveDashBoard");

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

      console.log("Entered GetUserProfile")
      try {
        // Get the access token silently
        // If the cache contains a non-expired token, this function
        // will just return the cached token. Otherwise, it will
        // make a request to the Azure OAuth endpoint to get a token
    
        if (window.location.hash.includes("id_token")) {
          window.close();
        }

        var accessToken = await this.userAgentApplication.acquireTokenPopup({
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
      axios.post('https://rest-site-locations-1594736464770.azurewebsites.net/api/auth/login', this.state, {
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
      localStorage.setItem("data-token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IkhsQzBSMTJza3hOWjFXUXdtak9GXzZ0X3RERSJ9.eyJhdWQiOiI5YWUwYzEyMC1lZWNhLTQwNjktYTZlMS1jZmM4NDYyOWFhMmIiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vZGVjMjk5ZWUtYWUxMC00MTgwLTg4NzUtNTEwZDc4MThlZTRiL3YyLjAiLCJpYXQiOjE1ODM3NzM3NzAsIm5iZiI6MTU4Mzc3Mzc3MCwiZXhwIjoxNTgzNzc3NjcwLCJhaW8iOiJBVFFBeS84T0FBQUFwR1o2SmFxNDM2MTJhZVU3b0x1dHFYdWVYeVJQMFRDNWJ1SldIR0FLamRMSXJEN2ZyUFZYWGRsVDJ5WUp3VExxIiwibmFtZSI6IkpvYW5pZSBTb2xvcnphbm8iLCJub25jZSI6IjRjODM5NjBlLTYzNzEtNGUyMS04ODUyLWY5ZTgzNjg3NmI1YSIsIm9pZCI6IjMzZjY4Y2JhLWYwMzctNDQxOC05YTkwLTIyNzQ5ODEzM2Y1OCIsInByZWZlcnJlZF91c2VybmFtZSI6Impzb2xvcnphbm9AY2Fycm9sbGRhbmllbC5jb20iLCJyb2xlcyI6WyJXcml0ZXIiLCJSZWFkZXIiXSwic3ViIjoiUnJ0RHIxeWlYOE1IcFdfbUtxMnFUNlA3NHdkeWtZS1UzTkVrVDlOYm00USIsInRpZCI6ImRlYzI5OWVlLWFlMTAtNDE4MC04ODc1LTUxMGQ3ODE4ZWU0YiIsInV0aSI6Im0zVDBjT0NUQjBDcHBiMFNYcjZGQUEiLCJ2ZXIiOiIyLjAifQ.WSIFkK7-iF2qq1gVoiA-kaFNwF2DrbCB8CHvGMt02eryACBCr130nRbuQFlbN1jDpKZ5TO_g7il9UkaMSEOMRCgj_UM6O_jthWsfYAMCfre2qKmx1koqjHWifvqtqh3a9cHDzmqbpBOdMOV_uIHHNcbYUOmv1R6fI73nKoK5J3KZ8puLF6wuoGhxMeNjJsX2Q8Kp3WypeZurJrQMjVcWcgTIDG9nszvbgp04sjS79j7YlJm8_bIkuQn7MyTlqv4D_waeEUpuC2V5SMJumpG4Mdgy9cr4jysGOVD6iTXs34hubabsfP4k-0oRrfCFaaai7irZ3m9gBsrMOW3ZaXQ97A");
    };

    render(){
      
        return (
          <>
        <Navbar className="color-nav" style={{paddingBottom: '2%', paddingTop: '2%'}}>
          <Navbar.Brand href="/financial/login"><img src={logo} alt="carroll-daniel-logo" className="mainLogo" /></Navbar.Brand>
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

