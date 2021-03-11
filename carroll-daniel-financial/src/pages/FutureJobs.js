import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AuthHelperMethods from '../services/AuthHelperMethods';
import DatePicker from "react-datepicker";
import withAuth from '../services/withAuth';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import 'react-confirm-alert/src/react-confirm-alert.css';
import * as jwt_decode from 'jwt-decode';
import MaterialTable from 'material-table'
import { Nav, Button, Modal } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'


function validate(division, job_name, contract_amount, gross_margin_percent, hit_ratio, start_date, end_date, bonded, status){
 
  return {
    division: division.length === 0,
    job_name: job_name.length === 0,
    contract_amount: contract_amount.length === 0,
    gross_margin_percent: gross_margin_percent.length === 0,
    hit_ratio: hit_ratio.length === 0,
    start_date: start_date.length === 0,
    end_date: end_date.length === 0,
    bonded: bonded.length === 0,
    status: status.length === 0
  };

}

var financialString = '';
var currentUserDiv = '';
var currentQuarterResp = '';
var currentYearResp = '';

class FutureJobs extends Component{


  constructor(props) {

    super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      value: '',
      job_name: '',
      division: '',
      contract_amount: '',
      gross_margin_percent: '',
      hit_ratio: '',
      start_date: '',
      startDateDummyValue: '',
      end_date: '',
      endDateDummyValue: '',
      bonded: '',
      status: 'FA',
      dept_job: '',
      year: '',
      userRole: '',
      userEmail: '',
      show: false,
      futureForecastHeader: [],
      futureDataID: [],
      futureForecastData: [],
      touched: {
        division: false,
        job_name: false,
        contract_amount: false,
        gross_margin_percent: false,
        hit_ratio: false,
        start_date: false,
        end_date: false,
        bonded: false,
        status: false
      }
  };

 }

    showModal = () => {
      this.setState({
        show: true
      });
    };

    hideModal = () => {
      this.setState({ show: false });
    };

     //filter future records
 retrieveFutureData(futureData,checkCall){
  var futureDataRecords = []
  var dataRecordID = []
  var newRecordsRevenue;
  const jsonObj = {};
  //holds all the divisions that will be filtered later
  var div = [];
  //retrieves all the distinct divisions
  const distinct = (divisionVal,index,self) => {
      return self.indexOf(divisionVal) === index;
  }

  futureData.forEach(function (item){
    const {  _id, division, job_name,quarter,year, status, contract_amount,gross_margin_percent,hit_ratio,start_date,end_date,bonded } = item //destructuring

    //if(currentUserDiv === 'all'){
  if(currentQuarterResp === quarter && currentYearResp === year){
      div.push(division);
      //var distinctDivisions = div.filter(distinct);
        dataRecordID.push({_id});
        futureDataRecords.push({'id':_id,'division': division, 'job_name':job_name, 'status': status, 'contract_amount': '$' + Math.round(contract_amount).toLocaleString(undefined, {maximumFractionDigits:2}), 'gross_margin_percent': gross_margin_percent + '%','hit_ratio':hit_ratio + '%','start_date':start_date,'end_date':end_date,'bonded':bonded});
  }
    //}else{
        //if(status !== 'Contract'){
          //div.push(division);
          //var distinctDivisions = div.filter(distinct);
           // dataRecordID.push({_id});
           // futureDataRecords.push({'id':_id,'division': division, 'job_name':job_name, 'status': status, 'contract_amount': Math.round(contract_amount).toLocaleString(undefined, {maximumFractionDigits:2}), 'gross_margin_percent': gross_margin_percent,'hit_ratio':hit_ratio,'start_date':start_date,'end_date':end_date,'bonded':bonded});
         // }
    //}      
  });
  this.setState({futureDataID: [dataRecordID],futureForecastData: futureDataRecords })
  //this.setState({futureForecastData: futureDataRecords })
  var distinctDivisions = div.filter(distinct);
  for(var i = 0; i < distinctDivisions.length; i++){
    jsonObj[distinctDivisions[i]] = distinctDivisions[i];
  }

  if(checkCall === true && currentUserDiv === 'all'){
    newRecordsRevenue =   [{ title: 'Division', field: 'division', lookup: jsonObj},
    { title: 'Job Name', field: 'job_name',type:'string'},
    { title: 'Status', field: 'status', lookup: {Contract: 'Contract',ABNC:'ABNC', FASUB:'FASUB','FA30-90':'FA30-90','FA90+':'FA90+', FA:'FA'} },
    { title: 'Contract Value', field: 'contract_amount'},
    { title: 'Gross Margin %', field: 'gross_margin_percent' },
    { title: 'Hit Percentage %', field: 'hit_ratio'},
    { title: 'Start Date', field: 'start_date', type: 'date' },
    { title: 'End Date', field: 'end_date', type: 'date'},
    { title: 'Bond', field: 'bonded', lookup: {Yes: 'Yes', No: 'No'}}]
  }else{
    newRecordsRevenue =   [{ title: 'Division', field: 'division', lookup: jsonObj},
    { title: 'Job Name', field: 'job_name',type:'string'},
    { title: 'Status', field: 'status', lookup: {Contract: 'Contract',ABNC:'ABNC', FASUB:'FASUB','FA30-90':'FA30-90','FA90+':'FA90+', FA:'FA'} },
    { title: 'Contract Value', field: 'contract_amount'},
    { title: 'Gross Margin %', field: 'gross_margin_percent' },
    { title: 'Hit Percentage %', field: 'hit_ratio'},
    { title: 'Start Date', field: 'start_date', type: 'date' },
    { title: 'End Date', field: 'end_date', type: 'date'},
    { title: 'Bond', field: 'bonded', lookup: {Yes: 'Yes', No: 'No'}}]
  }

  if(checkCall === true){
    this.setState({ futureForecastHeader : newRecordsRevenue })
  }
}

    componentDidMount(){
      
      var tokenValue = localStorage.getItem("data-token")
      const AuthStr = 'Mstoken '.concat(tokenValue);

      axios.get(
        "https://rest-site-locations-1594736464770.azurewebsites.net/api/financialUserInformation",
        {headers: {
            "Authorization" : AuthStr,
            "Content-Type" : "application/json"
          }
        }
      ).then(response => {

      var userInfo = response['data'];
      var decoded = jwt_decode(localStorage.getItem('data-token'));
      userInfo.forEach(function (item){
        const {  useremail, userdivision } = item //destructuring
    
        if(decoded.sub === useremail){
          if(userdivision === "all"){
            currentUserDiv = "all";
            financialString = "https://rest-site-locations-1594736464770.azurewebsites.net/api/financialResultsData/";
          }else{
            currentUserDiv = userdivision;
            financialString = "https://rest-site-locations-1594736464770.azurewebsites.net/api/financialResultsData/division/" + userdivision
          }
        }  
      })

      axios.all([
        axios.get(
          "https://rest-site-locations-1594736464770.azurewebsites.net/api/financialResultsData/",
          {headers: {
              "Authorization" : AuthStr,
              "Content-Type" : "application/json"
            }
          }
      ),
      axios.get(
        "https://rest-site-locations-1594736464770.azurewebsites.net/api/financialUpdateQuarterData",
        {headers: {
            "Authorization" : AuthStr,
            "Content-Type" : "application/json"
          }
        }
      ),
    ]).then(axios.spread((response, response2) => {
        var currentQuarterResponse = response2['data'];
        currentQuarterResponse.forEach(function (values){
          const { current_quarter, current_year} = values //destructing
    
          currentQuarterResp = current_quarter;
          currentYearResp = current_year;
    
        })
        var dataValueByDivision = response['data'];
        var decoded = jwt_decode(localStorage.getItem('data-token'));
        this.setState({ userRole: decoded.roles})
        this.setState({ userEmail: decoded.sub})
        this.retrieveFutureData(dataValueByDivision,true)
  
    })).catch(error => {
      console.log(error)
    })

  })

    } 

   /* Create a new instance of the 'AuthHelperMethods' component*/
   Auth = new AuthHelperMethods();

   _handleLogout = () => {
     this.Auth.logout()
     this.props.history.replace('/financial/login');
   }

  handleDivisionChange = evt => {
    /*var divisionNum = '';
    if(evt.target.value === "K-12"){
      divisionNum = 1
    }else if(evt.target.value === "HigherEd"){
      divisionNum = 2
    }else if(evt.target.value === "Commercial"){
      divisionNum = 3
    }else if(evt.target.value === "Industrial"){
      divisionNum = 4
    }else if(evt.target.value === "Atlanta"){
      divisionNum = 5
    }else if(evt.target.value === "Kitchin"){
      divisionNum = 6
    }else if(evt.target.value === "Greenville"){
      divisionNum = 7
    }*/

    this.setState({ division: evt.target.value });
  };

  handleJobNameChange = evt => {
    this.setState({ job_name: evt.target.value });
  };

  handleContract_amountChange = evt => {
    this.setState({ contract_amount: evt.target.value.replace(/[^\d.-]/g, '') });
  };

  handleProfitMarginChange = evt => {
    this.setState({ gross_margin_percent: evt.target.value.replace(/[^\d.-]/g, '') });
  }

  handleHit_ratioChange = evt => {
    this.setState({ hit_ratio: evt.target.value.replace(/[^\d.-]/g, '') });
  }

  handleStart_dateChange = evt => {
    const now = new Date(); 
    const qetYear = now.getFullYear()
    var quarter = ''
    const q1 = new Date('3/31/' + qetYear)
    const q2 = new Date('6/30/' + qetYear)
    const q3 = new Date('9/30/' + qetYear)
    const q4 = new Date('12/31/' + qetYear)
    if(now <= q1){
      quarter = 1
    }
    else if(now > q1 && now <= q2){
      quarter = 2
    }
    else if(now > q2 && now <= q3){
      quarter = 3
    }
    else if(now > q3 && now <= q4){
      quarter = 4
    }
    const setNewStartDate = new Date(evt);
    const newStartDate =  setNewStartDate.getMonth() + '/' + setNewStartDate.getDate() + '/' + setNewStartDate.getFullYear()
    this.setState({ start_date: newStartDate });
    this.setState({ startDateDummyValue: evt});
    this.setState({ year: now.getFullYear()});
    this.setState({ quarter: quarter });
  }

  handleEnd_dateChange = evt => {
    const setNewEndDate = new Date(evt);
    const newEndDate =  setNewEndDate.getMonth() + '/' + setNewEndDate.getDate() + '/' + setNewEndDate.getFullYear()
    this.setState({ end_date: newEndDate });
    this.setState({ endDateDummyValue: evt});
  }

  handleBondedChange = evt => {
    this.setState({ bonded: evt.target.value });
  }

  handleStatusChange = evt => {
    this.setState({ status: evt.target.value });
  }

  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  }

   handleSubmit = evt => {
    if (!this.canBeSubmitted()) {
      evt.preventDefault();
      return;
    }


    var tokenValue = localStorage.getItem('data-token')

    axios.post(
      "https://rest-site-locations-1594736464770.azurewebsites.net/api/financialResultsData", this.state,
      {
        headers: { 
          "Authorization" : "Mstoken "+ tokenValue,
          "Content-Type" : "application/json" }
      }
    ).then(response => {
      var dataValue = response['data'];
      this.reloadFutureData(false);
      //this.setToken(dataValue.token);
      //this.props.history.replace("/financial/main");

    }).catch(error => {
      console.log(error)
      alert(error);
    })

    this.hideModal()
    window.location.reload(false);

  };

  //update Future Records
 updateFutureRecord(newRecords, oldRecords, status){
  var newKeyValueObj = {};
  var objId;
  if(status === "update"){
    this.state.futureForecastData.forEach(function (item, indx){
      if(item.id === newRecords.id){
        objId = newRecords.id
      }
  })
   Object.keys(newRecords).map((item, num) => {
     Object.keys(oldRecords).map((sec, indx) => {
       if(item === sec){
         if(Object.values(newRecords)[num] !== Object.values(oldRecords)[indx]){
           var updatedValue = Object.values(newRecords)[num]
           if(num === 0){
             alert("Division value cannot be changed")
           }else if(num === 4){
             updatedValue = parseFloat(updatedValue.replace(/[^\d.-]/g, ''))
           }else if(num === 5){
            updatedValue = parseFloat(updatedValue.replace(/[^\d.-]/g, ''))
           }else if(num === 6){
            updatedValue = parseFloat(updatedValue.replace(/[^\d.-]/g, ''))
           }
           newKeyValueObj[item] = updatedValue;
         }
       }
     })
   })
    this.updateFutureDBRecord(objId,newKeyValueObj)
  }else if(status === "delete"){
    this.state.futureForecastData.forEach(function (item, indx){
      if(item.id === oldRecords.id){
        objId = oldRecords.id
      }
  })
      this.deleteFutureDBRecord(objId)
  } 
}

//Future Data DB Call
updateFutureDBRecord(id,newKeyValueString){
  var tokenValue = localStorage.getItem("data-token")
  const AuthStr = 'Mstoken '.concat(tokenValue);
  var urlString = "https://rest-site-locations-1594736464770.azurewebsites.net/api/financialResultsData/" + id

  axios.put(
    urlString,
    newKeyValueString,
    {headers: {
        "Authorization" : AuthStr,
        "Content-Type" : "application/json"
      }
    }
  ).then(response => {
    var dataValue = response['data'];
  }).catch(error => {
    console.log(error)
  })
 }

 //Future Data DB Call
deleteFutureDBRecord(id){
  var tokenValue = localStorage.getItem("data-token")
  const AuthStr = 'Mstoken '.concat(tokenValue);
  var urlString = "https://rest-site-locations-1594736464770.azurewebsites.net/api/financialResultsData/" + id

  axios.delete(
    urlString,
    {headers: {
        "Authorization" : AuthStr,
        "Content-Type" : "application/json"
      }
    }
  ).then(response => {
    var dataValue = response['data'];
  }).catch(error => {
    console.log(error)
  })
 }

 //Reload Future Data
reloadFutureData(checkValue){
  var tokenValue = localStorage.getItem("data-token")
  const AuthStr = 'Mstoken '.concat(tokenValue);

  axios.get(
    financialString,
    {headers: {
        "Authorization" : AuthStr,
        "Content-Type" : "application/json"
      }
    }
  ).then(response => {
    var dataValue = response['data'];
    //this.setState({ futureData: dataValue})
    this.retrieveFutureData(dataValue,checkValue)
  }).catch(error => {
    console.log(error)
  })

 }
 


  canBeSubmitted() {
    const errors = validate(this.state.division, this.state.job_name, this.state.contract_amount, this.state.gross_margin_percent, this.state.hit_ratio
      ,this.state.start_date, this.state.end_date, this.state.bonded, this.state.status);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }
  


    render(){

      const errors = validate(this.state.division, this.state.job_name, this.state.contract_amount, this.state.gross_margin_percent, 
        this.state.hit_ratio, this.state.start_date, this.state.end_date, this.state.bonded, this.state.status);
      const isDisabled = Object.keys(errors).some(x => errors[x]);

      const shouldMarkError = (field) => {
        const hasError = errors[field];
        const shouldShow = this.state.touched[field];
  
        return hasError ? shouldShow : false;
      };

      const view = this.state.userRole === 'Writer';
      const admin = this.state.userEmail === 'jsolorzano@carrolldaniel.com' || this.state.userEmail === 'scotto@carrolldaniel.com' || this.state.userEmail === 'astephens@carrolldaniel.com';

        return (
          <>
          <Navbar className="color-nav" style={{paddingBottom: '2%', paddingTop: '2%'}} expand="lg">
          <Navbar.Brand href="/financial/main"><img src={ require('../images/logo.png') } alt="carroll-daniel-logo" className="mainLogo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                  <Nav.Link style={{color: 'white'}} href="/financial/main">Home</Nav.Link>
                  <Nav.Link style={{color: 'white'}} href="/financial/Graphs">Graphs</Nav.Link>
                  <Nav.Link style={{color: 'white'}} href="/financial/DivIncomeYearOne">Current Year</Nav.Link>
                  <Nav.Link style={{color: 'white'}} href="/financial/DivIncomeYearTwo">Next Year</Nav.Link>
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
          <Container style={{paddingTop:'2%'}}>
            <Row>
            <Col ><h2 style={{ textAlign: 'center '}}>Future Job Projection</h2></Col>
            </Row>
            <Row>
            <Col ><h2 style={{textAlign: 'center', fontSize: '17px', color: 'red'}}>* all fields are required</h2></Col>
            </Row>
            <Row style={{ paddingTop: '1%'}}>
            <Col><h2 style={{textAlign: 'center', fontSize: '20px', float: 'right'}}>* Select Division:</h2></Col>
            <Col ><select 
                        onBlur={this.handleBlur('division')}
                        value={this.state.division} 
                        onChange={this.handleDivisionChange}>
                        <option disabled value=''></option>
                        <option value="1">Wiley (Division 1)</option>
                        <option value="2">Haynes (Division 2)</option>
                        <option value="3">Commercial (Division 3)</option>
                        <option value="4">Broadwell (Division 4)</option>
                        <option value="5">Stone (Division 5)</option>
                        <option value="6">Kitchin (Division 6)</option>
                        <option value="7">Gowens (Division 7)</option>
                        <option value="11">Misc (Division 11)</option>
                </select></Col>
            </Row>
            <Row style={{ paddingTop: '1%'}}>
              <Col><h2 style={{textAlign: 'center', fontSize: '20px', float: 'right'}}>* Job Name: </h2></Col>
              <Col> <input style={{ borderColor: shouldMarkError('job_name') ? "#b94a48" : "#aaa", width: '40%'}}
                  className={shouldMarkError('job_name') ? "error" : ""}
                  onBlur={this.handleBlur('job_name')}
                  type="text"
                  placeholder="Enter Job Name"
                  value={this.state.job_name}
                  onChange={this.handleJobNameChange}
                /></Col>
            </Row>
            <Row style={{ paddingTop: '1%'}}>
              <Col><h2 style={{textAlign: 'center', fontSize: '20px', float: 'right'}}>* Contract Amount: </h2></Col>
              <Col> <input style={{ borderColor: shouldMarkError('contract_amount') ? "#b94a48" : "#aaa", width: '40%'}}
                  className={shouldMarkError('contract_amount') ? "error" : ""}
                  onBlur={this.handleBlur('contract_amount')}
                  type="text"
                  placeholder="Example: 1000000"
                  value={this.state.contract_amount}
                  onChange={this.handleContract_amountChange}
                /></Col>
            </Row>
            <Row style={{ paddingTop: '1%'}}>
              <Col><h2 style={{textAlign: 'center', fontSize: '20px', float: 'right'}}>* Status: </h2></Col>
              <Col><select 
                  style={{ borderColor: shouldMarkError('status') ? "#b94a48" : "#aaa", width: '40%'}}
                  onBlur={this.handleBlur('status')}
                  value={this.state.status} 
                  onChange={this.handleStatusChange}>
                  <option disabled value=''></option>
                  <option value="ABNC">ABNC</option>
                  <option value="FA">FA</option>
                </select></Col>
            </Row>
            <Row style={{ paddingTop: '1%'}}>
              <Col><h2 style={{textAlign: 'center', fontSize: '20px', float: 'right'}}>* Gross Margin%: </h2></Col>
              <Col> <input style={{ borderColor: shouldMarkError('gross_margin_percent') ? "#b94a48" : "#aaa", width: '40%'}}
                  className={shouldMarkError('gross_margin_percent') ? "error" : ""}
                  onBlur={this.handleBlur('gross_margin_percent')}
                  type="text"
                  placeholder="Example: 10.0"
                  value={this.state.gross_margin_percent}
                  onChange={this.handleProfitMarginChange}
                /></Col>
            </Row>
            <Row style={{ paddingTop: '1%'}}>
              <Col>
              <h2 style={{textAlign: 'center', fontSize: '20px', float: 'right'}}>* Hit Percentage: </h2>
              </Col>
              <Col><input style={{ borderColor: shouldMarkError('hit_ratio') ? "#b94a48" : "#aaa", width: '40%'}}
                  className={shouldMarkError('hit_ratio') ? "error" : ""}
                  onBlur={this.handleBlur('hit_ratio')}
                  type="text"
                  placeholder="Example: 100"
                  value={this.state.hit_ratio}
                  onChange={this.handleHit_ratioChange}
                /> </Col>
            </Row>
            <Row style={{ paddingTop: '1%'}}>
              <Col><h2 style={{textAlign: 'center', fontSize: '20px', float: 'right'}}>* P&P Bond: </h2></Col>
              <Col><select 
                  style={{ borderColor: shouldMarkError('bonded') ? "#b94a48" : "#aaa", width: '40%'}}
                  onBlur={this.handleBlur('bonded')}
                  value={this.state.bonded} 
                  onChange={this.handleBondedChange}>
                  <option disabled value=''></option>
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select></Col>
            </Row>
            <Row style={{ paddingTop: '1%'}}>
              <Col><h2 style={{textAlign: 'center', fontSize: '20px', float: 'right'}}>* Start Date:</h2></Col>
              <Col><DatePicker
                  className={shouldMarkError('start_date') ? "error" : ""}
                  onBlur={this.handleBlur('start_date')}
                  dateFormat="MM/dd/yyyy"
                  placeholderText="select a date"
                  selected={this.state.startDateDummyValue}
                  onChange={this.handleStart_dateChange}
                /></Col>
            </Row>
            <Row style={{ paddingTop: '1%'}}>
            <Col><h2 style={{textAlign: 'center', fontSize: '20px', float: 'right'}}>* End Date:</h2></Col>
              <Col>
                <DatePicker
                  className={shouldMarkError('end_date') ? "error" : ""}
                  onBlur={this.handleBlur('end_date')}
                  dateFormat="MM/dd/yyyy"
                  placeholderText="select a date"
                  selected={this.state.endDateDummyValue}
                  onChange={this.handleEnd_dateChange}
                />
              </Col>
            </Row>
            <Row style={{ paddingTop: '2%'}}>
              <Col></Col>
              <Col><button style={{ width: '100%', fontSize: '26px', paddingTop:'2%', paddingBottom: '2%', backgroundColor: '#005A8B', color: 'white'}} disabled={isDisabled} type='button' onClick={this.showModal}>Submit</button></Col>
              <Col></Col>
            </Row>
            <Row>
        <Modal show={this.state.show} >
          <Modal.Header closeButton>
            <Modal.Title>Future Job Project</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you would like to Submit a new project?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.hideModal}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
            </Row>
          </Container>
          {
            admin ? (
          <Container style={{paddingTop:'2%'}}>
          <MaterialTable
                style={{ paddingRight: '2%', paddingLeft: '2%', paddingBottom: '3%'}}
                title="Future Project Management"
                columns={this.state.futureForecastHeader}
                data={this.state.futureForecastData}
                options={{
                  search: true,
                  paging: true,
                  sorting: true,
                  pageSize: 10,
                }}
                editable={{
                  /*onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                      this.updateFutureRecord(newData, "add")
                      setTimeout(() => {
                        //{
                          //const data1 = this.state.dataFuture;
                          //console.log("data value: " + data1)
                          //data1.push(newData);
                          //this.setState({ dataFuture : this.state.data1 });
                          //this.setState({ dataFuture : data1 }, () => resolve());
                        //}
                        resolve()
                      }, 1000)
                    }),*/
                  onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                      this.updateFutureRecord(newData, oldData, "update")
                      setTimeout(() => {
                        this.reloadFutureData(false)
                        resolve()
                      }, 1000)
                    }),
                  onRowDelete: oldData =>
                    new Promise((resolve, reject) => {
                      this.updateFutureRecord(null, oldData, "delete")
                      setTimeout(() => {
                        this.reloadFutureData(false)
                        resolve()
                      }, 1000)
                    }),
                }}
              />
          </Container>
          ) : null}
          </>
        )

    }
}

/*const Modal = ({ handleClose, show, children, submit }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        {children}
        <div style={{ width: '100%'}}>
        <button style={{ width: '50%'}}
          onClick={submit}
        >
          Save
        </button>
        <button style={{ width: '50%'}}
          onClick={handleClose}
        >
          Cancel
        </button>
        </div>
      </section>
    </div>
  );
};*/


export default withAuth(FutureJobs);
