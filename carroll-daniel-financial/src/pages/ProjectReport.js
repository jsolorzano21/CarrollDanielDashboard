import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AuthHelperMethods from '../services/AuthHelperMethods';
import withAuth from '../services/withAuth';
import axios from 'axios' 
import '../global'
import * as jwt_decode from 'jwt-decode';
import { Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'

var contractTotal = 0;
var profitTotal = 0;
var expectedConAmount = 0;
var expectedRevenue = 0;
var expectedProfit = 0;
var expectedBacklog = 0;
var expectedFutureRev = 0;
var expectedFutureProf = 0;
var expectedFutureBack = 0;
var currentQuarter = ''

var financialString = '';
var currentQuarterResp = '';
var currentYearResp = '';
var currentDateString = '';
var currentYearLabel = '';
var valuesChecked = 0;
var divisionName = '';

class ProjectReport extends Component{


  constructor(props) {
    super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = { //state is by default an object
      projectionsSelected: true,
      k12Selected: true,
      higherEdSelected: true,
      commercialSelected: true,
      industrialSelected: true,
      atlantaSelected: true,
      ProjectReportData: [],
      data: null,
      userRole: '',
      currentDate: new Date(currentQuarter)
    }
 }

   /* Create a new instance of the 'AuthHelperMethods' compoenent*/
   Auth = new AuthHelperMethods();

   _handleLogout = () => {
     this.Auth.logout()
     this.props.history.replace('/financial/login');
   }

   componentDidMount(){

    var tokenValue = localStorage.getItem("data-token")
    const AuthStr = 'Mstoken '.concat(tokenValue);

  axios.all([
    axios.get(
      "https://rest-site-locations-1594736464770.azurewebsites.net/api/financialUserInformation",
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
    )]).then(axios.spread((response, response2) => {

    var userInfo = response['data'];
    var currentQuarterResponse = response2['data'];
    currentQuarterResponse.forEach(function (values){
      const { current_quarter, current_year} = values //destructing

      currentQuarterResp = current_quarter;
      currentYearResp = current_year;

    })
    if(currentQuarterResp === '1'){
      currentQuarter = new Date('3/31/' + currentYearResp)
      currentDateString = 'March 31'
      currentYearLabel = currentYearResp
    }else if(currentQuarterResp === '2'){
      currentQuarter = new Date('6/30/' + currentYearResp)
      currentDateString = 'June 30'
      currentYearLabel = currentYearResp
    }else if(currentQuarterResp === '3'){
      currentQuarter = new Date('9/30/' + currentYearResp)
      currentDateString = 'September 30'
      currentYearLabel = currentYearResp
    }else if(currentQuarterResp === '4'){
      currentQuarter = new Date('12/31/' + currentYearResp)
      currentDateString = 'December 31'
      currentYearLabel = parseInt(currentYearResp) + 1;
    }
    var decoded = jwt_decode(localStorage.getItem('data-token'));  
    userInfo.forEach(function (item){
      const {  useremail, userdivision } = item //destructuring
  
      if(decoded.sub === useremail){
        if(userdivision === "all"){
          financialString = "https://rest-site-locations-1594736464770.azurewebsites.net/api/financialResultsData/";
        }else{
          financialString = "https://rest-site-locations-1594736464770.azurewebsites.net/api/financialResultsData/division/" + userdivision
        }
      }  
    })

    axios.get(
      financialString,
      {headers: {
          "Authorization" : AuthStr,
          "Content-Type" : "application/json"
        }
      }
    ).then(response => {
      var dataValue = response['data'];
      var decoded = jwt_decode(localStorage.getItem('data-token'));
      this.setState({ ProjectReportData: dataValue});
      this.setState({ data: dataValue });
      this.setState({ userRole: decoded.roles})

  }).catch(error => {
    console.log(error)
  })

}))


}


   renderTableData(value) {
    if(value === 'project_report'){
      
      return this.state.ProjectReportData.map((FY19Plan, index) => {
        const { _id, job_name, dept_job, quarter, year, division, status, bonded, contract_amount, gross_margin_percent, hit_ratio, earned_revenue_YTD, 
              end_date, backlog, earned_revenue, start_date } = FY19Plan //destructuring

              if(division === '1'){
                divisionName = 'Wiley'
              }else if(division === '2'){
                divisionName = 'Haynes'
              }else if(division === '3'){
                divisionName = 'Commercial'
              }else if (division === '4'){
                divisionName = 'Broadwell'
              }else if (division === '5'){
                divisionName = 'Stone'
              }else if (division === '6'){
                divisionName = 'Kitchin'
              }else if (division === '7'){
                divisionName = 'Gowens'
              }else if (division === '11'){
                divisionName = 'Misc'
              }else if (division === '00'){
                divisionName = 'Corporate'
              }

    if(currentQuarterResp === quarter && currentYearResp === year){    
        var profit = 0;
        const now = new Date(currentQuarter);
        const pastDate = new Date(end_date);
        const startDate = new Date(start_date);
        var checkStartValue = startDate.getMonth() - now.getMonth() + 
          (12 * (startDate.getFullYear() - now.getFullYear()))
        const checkMonth = now.getMonth() === pastDate.getMonth() && now.getFullYear() === pastDate.getFullYear();
        var totalForcastRevenue = '';
        var totalExpectedRevenue = '';
        var expectedContractAmount = '';
        var profitCurrentYear = '';
        var totalMonths =  (pastDate.getFullYear() - startDate.getFullYear()) * 12 + (pastDate.getMonth() - startDate.getMonth() + 1);
        var currentBacklogValue = '';
        var CurrentMonthOfProject =  (now.getFullYear() - startDate.getFullYear()) * 12 + (now.getMonth() - startDate.getMonth() + 1);
        var backlogValue = parseFloat(contract_amount) - parseFloat(earned_revenue);
        var futureRevenue = 0;
        var burnOffSum = 0;
        var futureProfit = 0;
        var futureBacklog = 0;
        var converter = require('number-to-words');
        var newValue = converter.toWords(totalMonths);
        var earnedRevenueYTDValue = 0;
        contractTotal += parseFloat(contract_amount);  

        if(status === 'Contract' && checkMonth !== 'true'){
        profit = (parseFloat(contract_amount) * (gross_margin_percent / 100));
        profitTotal += profit;
        if((pastDate <= now  && checkMonth === true) || pastDate <= now){
          totalForcastRevenue = 0;
          if(quarter === '4'){
            earnedRevenueYTDValue = 0;
            totalExpectedRevenue = parseFloat(earnedRevenueYTDValue) + parseFloat(totalForcastRevenue);
          }else if(quarter === '3'){
            earnedRevenueYTDValue = earned_revenue_YTD;
            totalExpectedRevenue = parseFloat(earnedRevenueYTDValue) + parseFloat(totalForcastRevenue);
          }else if(quarter === '2'){
            earnedRevenueYTDValue = earned_revenue_YTD;
            totalExpectedRevenue = parseFloat(earnedRevenueYTDValue) + parseFloat(totalForcastRevenue);
          }else if(quarter === '1'){
            earnedRevenueYTDValue = earned_revenue_YTD;
            totalExpectedRevenue = parseFloat(earnedRevenueYTDValue) + parseFloat(totalForcastRevenue);
          }
          profitCurrentYear = (parseFloat(earnedRevenueYTDValue) * (gross_margin_percent/100)) + (parseFloat(totalForcastRevenue) * (gross_margin_percent/100));
          expectedContractAmount = Math.round((parseFloat(earned_revenue) + (parseFloat(contract_amount) - parseFloat(earned_revenue))) * hit_ratio/100);
          //totalExpectedRevenue =  earned_revenue_YTD;
          currentBacklogValue = 0;
          futureBacklog = 0;
        }else {
          totalForcastRevenue = backlog;
          expectedContractAmount = Math.round((parseFloat(earned_revenue) + (parseFloat(contract_amount) - parseFloat(earned_revenue))) * hit_ratio/100);
          for(var j=0; j < global.burnOffChart.length; j++){
            if(j >= CurrentMonthOfProject && j < totalMonths){
                var obj = global.burnOffChart[j][newValue]
                burnOffSum += obj;
            }

          }

          //calculate Burnoff rate
          var checkloop = 1;
          var forecastData = 0;
          var futureForecastData = 0;
          var forecastNumber = 0;
          var maxForecastNumber = 0;
          var futureRevenueValue = 0;
          if(currentQuarterResp === "4"){
            forecastNumber = 12;
            maxForecastNumber = 12 + 12;
            earnedRevenueYTDValue = 0;
          }else if(currentQuarterResp === "1"){
            forecastNumber = 9;
            maxForecastNumber = 9 + 12;
            earnedRevenueYTDValue = earned_revenue_YTD;
          }else if(currentQuarterResp === "2"){
            forecastNumber = 6;
            maxForecastNumber = 6 + 12;
            earnedRevenueYTDValue = earned_revenue_YTD;
          }else if(currentQuarterResp === "3"){
            forecastNumber = 3;
            maxForecastNumber = 3 + 12;
            earnedRevenueYTDValue = earned_revenue_YTD;
          }

          if(startDate > now){
            for(var i=1; i < checkStartValue; i++){
              checkloop += 1;
            }
          }
          for (var k=0; k < global.burnOffChart.length; k++) {
            if(k >= CurrentMonthOfProject){
              var valueFound = global.burnOffChart[k][newValue];
              var monthlyValue =  (backlogValue * valueFound) / burnOffSum;
              if(checkloop <= forecastNumber){
                forecastData += monthlyValue;
                checkloop += 1;
              }
              else if(checkloop > forecastNumber && checkloop <= maxForecastNumber){
                futureForecastData += monthlyValue;
                checkloop += 1;
              }else if(checkloop > maxForecastNumber){
                futureRevenueValue += monthlyValue;
              }

            }
          }

          futureRevenue = futureForecastData ? futureForecastData : 0;
          totalExpectedRevenue = parseFloat(forecastData) + parseFloat(earnedRevenueYTDValue) ? parseFloat(forecastData) + parseFloat(earnedRevenueYTDValue) : 0;
          currentBacklogValue = (futureForecastData + futureRevenueValue) ? (futureForecastData + futureRevenueValue) : 0;
          profitCurrentYear = (parseFloat(totalExpectedRevenue) * (gross_margin_percent/100));
          futureProfit = parseFloat(futureRevenue) * (gross_margin_percent/100);
          futureBacklog = futureRevenueValue ? futureRevenueValue : 0;
        }
      }else{

        //calculate Burnoff rate
        var checkloopProjected = 1;
        var checkCompleted = 0;
        var forecastDataProjected = 0;
        var futureForecastDataProjected = 0;
        var forecastNumberProjected = 0;
        var maxForecastNumberProjected = 0;
        var futureRevenueValueProjected = 0;
        if(currentQuarterResp === "4"){
          forecastNumberProjected = 12;
          maxForecastNumberProjected = 12 + 12;
        }else if(currentQuarterResp === "1"){
          forecastNumberProjected = 9;
          maxForecastNumberProjected = 9 + 12;
        }else if(currentQuarterResp === "2"){
          forecastNumberProjected = 6;
          maxForecastNumberProjected = 6 + 12;
        }else if(currentQuarterResp === "3"){
          forecastNumberProjected = 3;
          maxForecastNumberProjected = 3 + 12;
        }

        if(startDate > now){
          for(var il=1; il < checkStartValue; il++){
            checkloopProjected += 1;
          }
          checkCompleted += 1;
        }
        

        //if(checkCompleted === 1){
          //calculate burnoff sum
          for(var jk=0; jk < global.burnOffChart.length; jk++){
            if(jk >= CurrentMonthOfProject && jk < totalMonths){
                var objProjected = global.burnOffChart[jk][newValue]
                burnOffSum += objProjected;
            }

          }

        for (var kj=0; kj < global.burnOffChart.length; kj++) {
          if(kj >= CurrentMonthOfProject){
            var valueFoundProjected = global.burnOffChart[kj][newValue];
            var backlogFuture = (parseFloat(contract_amount) * (parseInt(hit_ratio)/100));
            var monthlyValueProjected =  (backlogFuture * valueFoundProjected) / burnOffSum;
            if(checkloopProjected <= forecastNumberProjected){
              forecastDataProjected += parseFloat(monthlyValueProjected);
              checkloopProjected += 1;
            }
            else if(checkloopProjected > forecastNumberProjected && checkloopProjected <= maxForecastNumberProjected){
              futureForecastDataProjected += parseFloat(monthlyValueProjected);
              //futureRevenue += monthlyValue;
              checkloopProjected += 1;
            }else if(checkloopProjected > maxForecastNumberProjected){
              futureRevenueValueProjected += monthlyValueProjected;
            }

          }
        //}

      }

        expectedContractAmount = (parseFloat(contract_amount) * (parseInt(hit_ratio)/100));
        totalForcastRevenue = (parseFloat(contract_amount) * (parseInt(hit_ratio)/100)) - earned_revenue;
        totalExpectedRevenue = forecastDataProjected ? forecastDataProjected : 0;
        //totalExpectedRevenue = (parseFloat(totalExpectedRevenue) * (gross_margin_percent/100));
        currentBacklogValue = (futureForecastDataProjected + futureRevenueValueProjected) ? (futureForecastDataProjected + futureRevenueValueProjected) : 0;
        futureRevenue = futureForecastDataProjected ? futureForecastDataProjected : 0;
        futureProfit = parseFloat(futureRevenue) * (gross_margin_percent/100);
        profit = (parseFloat(expectedContractAmount) * (gross_margin_percent / 100));
        profitCurrentYear = (parseFloat(totalExpectedRevenue) * (gross_margin_percent/100));
        profitTotal += profit;
        futureBacklog = futureRevenueValueProjected ? futureRevenueValueProjected : 0;

      }

      expectedConAmount += expectedContractAmount;
      expectedRevenue += parseFloat(totalExpectedRevenue);
      expectedProfit += profitCurrentYear;
      expectedBacklog += parseFloat(currentBacklogValue);
      expectedFutureRev += futureRevenue;
      expectedFutureProf += futureProfit;
      expectedFutureBack += futureBacklog;

      if(year == "2019" && division == "1"){
        valuesChecked += parseFloat(totalExpectedRevenue)
      }

      //if(currentQuarterResp === quarter && currentYearResp === year){
        return (
           <tr key={_id} style={{ fontSize: '17px'}}>
              <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{divisionName}</td>
              <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{dept_job}</td>
              <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{job_name}</td>
              <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{status}</td>
              <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}> {bonded}</td>
              <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(contract_amount)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
              <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(profit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
              <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{gross_margin_percent + '%'}</td>
              <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{hit_ratio + '%'}</td>
              <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
              <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(totalExpectedRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
              <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(profitCurrentYear)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
              <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{gross_margin_percent + '%'}</td>
              <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(currentBacklogValue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
              <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
              <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
              <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{gross_margin_percent + '%'}</td>
              <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureBacklog)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
           </tr>
           
        )}
       })
      }

    }

 renderTableHeader(value) {
  if(value === 'yearSection'){
    return <><th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}></th>
             <th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}></th>
             <th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}></th>
             <th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}></th>
             <th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}></th>
             <th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}></th>
             <th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}></th>
             <th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}></th>
             <th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}></th>
             <th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}></th>
             <th colSpan={4} style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>{currentYearLabel}</th>
             <th colSpan={4} style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>{parseInt(currentYearLabel)+1}</th>
           </>
 }
  else if(value === 'headerSection'){
    return <><th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>Dept Code</th>
             <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>Job Number</th>
             <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>Job Name</th>
             <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>Type</th>
             <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>Bonded</th>
             <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>Contract Amount</th>
             <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>Gross Margin</th>
             <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>Gross Margin %</th>
             <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>Hit Ratio</th>
             <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>Exp. Contract Amount</th>
             <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>Revenue</th>
             <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>Gross Margin</th>
             <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>Gross Margin %</th>
             <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>Ending Backlog</th>
             <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>Revenue</th>
             <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>Gross Margin</th>
             <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>Gross Margin %</th>
             <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>Ending Backlog</th>
           </>
 } else if(value === 'headerSectionTotal'){
    return <><th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>TOTALS</th>
             <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
             <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
             <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
             <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
             <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(contractTotal)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
             <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(profitTotal)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
             <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((parseFloat(profitTotal) / parseFloat(contractTotal)) * 100).toFixed(2) + '%'}</th>
             <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
             <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedConAmount)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
             <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
             <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
             <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((parseFloat(expectedProfit) / parseFloat(expectedRevenue)) * 100).toFixed(2) + '%'}</th>
             <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedBacklog)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
             <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureRev)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
             <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureProf)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
             <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((parseFloat(expectedFutureProf) / parseFloat(expectedFutureRev)) * 100).toFixed(2) + '%'}</th>
             <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureBack)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
           </>
 }

}




    render(){

      const headerSection = "headerSection"
      const yearSection = "yearSection"
      const headerSectionTotal = "headerSectionTotal"
      const project_report = "project_report"
      const view = this.state.userRole === 'Writer';
      const loadedData = this.state.data;

      if(!loadedData){
         return (<Container>Loading...</Container>)
      }
  
        return (
          <>
        <Navbar className="color-nav" style={{paddingBottom: '2%', paddingTop: '2%'}} expand="lg">
          <Navbar.Brand href="http://localhost:3000/financial/main"><img src={ require('../images/logo.png') } alt="carolldaniellogo" className="mainLogo" /></Navbar.Brand>
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
          <Container>
              <Row>
                  <Col className="FY19Plan" style={{paddingTop: '1%'}}>
                  <h1 id='title'>Carroll Daniel Construction</h1>
                  <h1 id='title'>Projected Detail Report</h1>
                  <h1 id='title'>For The Year Ending December 31, {currentYearResp} and {parseInt(currentYearResp)+1}</h1>
                  <h1 id='title'>Projected Date: {currentDateString}, {currentYearResp}</h1>
                  <div className="tableFixHead">
                    <table id='tableMain'>
                        <thead>
                        <tr>{this.renderTableHeader(yearSection)}</tr>
                        <tr>{this.renderTableHeader(headerSection)}</tr>
                        </thead>
                        <tbody>
                        <tr>{this.renderTableHeader(headerSectionTotal)}</tr>
                        {this.renderTableData(project_report)}
                        </tbody>
                    </table>
                    </div>
                  </Col>
              </Row>
          </Container>
          </>
        )

    }
}

export default withAuth(ProjectReport);
