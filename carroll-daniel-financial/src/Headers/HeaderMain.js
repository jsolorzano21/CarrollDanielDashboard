import React, { Component } from 'react';
import { Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import AuthHelperMethods from '../services/AuthHelperMethods';
import { Link } from 'react-router-dom';
import axios from 'axios'



export default class Header extends Component{ 

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.select = this.select.bind(this);
        this.state = {
            dropdownOpen: false,
            email: "j.solorzano3317@gmail.com",
            password: "abc1234",
            title: "",
            liveView: "",
            jobSite: ""
          };
      }

      Auth = new AuthHelperMethods();
    
      toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }

      select(event) {
        localStorage.setItem( 'SelectedOption', event.target.innerText );
        this.setState({
          dropdownOpen: !this.state.dropdownOpen,
          valueDropdown: event.target.innerText,
        });
      }

      _handleLogout = () => {
        this.Auth.logout()
        var str = window.location.href
        var school = str.split('/')
        console.log(school[4])
        var logoutVar = "/projects/" + school[4]
        this.props.history.replace(logoutVar);
      }

      componentDidMount(){
        
        axios.post('http://localhost:8081/api/auth/login', this.state, {
        headers: { "Content-Type" : "application/json"}
      })
      .then(response => {
        var data = response['data'];
        this.setToken(data.token); 
      }).catch(error => {
        console.log(error)
      })

        var tokenValue = localStorage.getItem("data-token")
        const AuthStr = 'Bearer '.concat(tokenValue);


        axios.get(
          "http://localhost:8081/api/pets",
          {headers: {
              "Authorization" : AuthStr,
              "Content-Type" : "application/json"
            }
          }
        ).then(response => {
          var dataValue = response['data'];

          var str = window.location.href
          var school = str.split('/')
          this.setState({ jobSite: school[4]})
          this.setState({ title: dataValue[0].description})
          this.setState({ liveView: dataValue[0].headers[3]})
      }).catch(error => {
        console.log(error)
      })


    }

    setToken = idToken => {
      // Saves user token to localStorage
      localStorage.setItem("data-token", idToken);
    };

    render(){
        
        const isLiveViewEnabled = this.state.liveView;
        var imageLocation = "/projects/" + this.state.jobSite + "/displayImages"

        return (
          <Navbar className="color-nav" expand="lg">
          <Navbar.Brand href="http://localhost:3000/financial/main"><img src={ require('../images/logo.png') } alt="carolldaniellogo" className="mainLogo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                  <Nav.Link style={{color: 'white'}} href="/financial/main">Home</Nav.Link>
                  <Nav.Link style={{color: 'white'}} href="/financial/Graphs">Graphs</Nav.Link>
                  <Nav.Link style={{color: 'white'}} href="/financial/DivIncomeYearOne">Div Income Year One</Nav.Link>
                  <Nav.Link style={{color: 'white'}} href="/financial/DivIncomeYearTwo">Div Income Year Two</Nav.Link>
                  <Nav.Link style={{color: 'white'}} href="/financial/ThreeYearReport">Three Year Report</Nav.Link>
                  <Nav.Link style={{color: 'white'}} href="/financial/ProjectReport">Project Report</Nav.Link>
                  <Nav.Link style={{color: 'white'}} href="/financial/MTD_Profit">MTD Profit</Nav.Link>
                  <Nav.Link style={{color: 'white'}} href="/financial/MTD_Revenue">MTD Revenue</Nav.Link>
                  <Nav.Link style={{color: 'white'}} href="/financial/ForcastRevenue">Forecast Revenue</Nav.Link>
                  <Nav.Link style={{color: 'white'}} href="/financial/future">Future Jobs</Nav.Link>
                  {
                view ? (
                  <Nav.Link style={{color: 'white'}} href="/financial/admin">Admin</Nav.Link>
                ) : null}
                  <Nav.Link style={{color: 'white'}} href="/financial/login">Logout</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        )

    }
}

