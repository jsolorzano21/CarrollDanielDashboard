import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AuthHelperMethods from '../services/AuthHelperMethods';
import axios from 'axios'
import withAuth from '../services/withAuth';
import '../global'
import * as jwt_decode from 'jwt-decode';
import { Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'


var currentQuarter = '' 
var financialString = '';
var currentQuarterResp = '';
var currentYearResp = '';
var currentDateString = '';
var divisionName = '';


class ForcastRevenue extends Component{


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
      ProjectForecastData: [],
      data: null,
      userRole: '',
      currentDate: new Date()
    }
 }

   /* Create a new instance of the 'AuthHelperMethods' component*/
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
    }else if(currentQuarterResp === '2'){
      currentQuarter = new Date('6/30/' + currentYearResp)
      currentDateString = 'June 30'
    }else if(currentQuarterResp === '3'){
      currentQuarter = new Date('9/30/' + currentYearResp)
      currentDateString = 'September 30'
    }else if(currentQuarterResp === '4'){
      currentQuarter = new Date('12/31/' + currentYearResp)
      currentDateString = 'December 31'
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
      this.setState({ ProjectReportData: dataValue, ProjectForecastData: dataValue, data: dataValue, userRole: decoded.roles});

  }).catch(error => {
    console.log(error)
  })

}))


}

   renderTableData(value) {
    if(value === 'project_report'){
      return this.state.ProjectReportData.map((ProjectReport, index) => {
        const { _id, job_name,quarter, year, dept_job, division, status, start_date, end_date, contract_amount, gross_margin_percent, hit_ratio, backlog, earned_revenue_YTD, 
          earned_revenue } = ProjectReport //destructuring

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
        const now = new Date(currentQuarter);
        const pastDate = new Date(end_date);
        const checkMonth = now.getMonth() === pastDate.getMonth() && now.getFullYear() === pastDate.getFullYear();
        var totalForecastRevenue = '';
        var totalExpectedRevenue = '';
        var grossMarginEarned = '';
        var earnedRevenue = '';
        var backlogValue = '';
        var earnedRevenueYTDValue;
        if(status === 'Contract'){
          if((pastDate <= now && checkMonth === true) || pastDate <= now){
            totalForecastRevenue = 0;
            totalExpectedRevenue =  earned_revenue_YTD;
            grossMarginEarned = (parseFloat(contract_amount) * (gross_margin_percent/100));
            earnedRevenue = earned_revenue;
            backlogValue = backlog;
            if(quarter === '4'){
              earnedRevenueYTDValue = 0;
              totalExpectedRevenue = parseFloat(earnedRevenueYTDValue) + parseFloat(totalForecastRevenue);
            }else if(quarter === '3'){
              earnedRevenueYTDValue = earned_revenue_YTD;
              totalExpectedRevenue = parseFloat(earnedRevenueYTDValue) + parseFloat(totalForecastRevenue);
            }else if(quarter === '2'){
              earnedRevenueYTDValue = earned_revenue_YTD;
              totalExpectedRevenue = parseFloat(earnedRevenueYTDValue) + parseFloat(totalForecastRevenue);
            }else if(quarter === '1'){
              earnedRevenueYTDValue = earned_revenue_YTD;
              totalExpectedRevenue = parseFloat(earnedRevenueYTDValue) + parseFloat(totalForecastRevenue);
            }
          }else {
            //should be 50 months of forecast
            totalForecastRevenue = parseFloat(contract_amount) - parseFloat(earned_revenue);

            grossMarginEarned = (parseFloat(contract_amount) * (gross_margin_percent/100));
            earnedRevenue = earned_revenue;
            backlogValue = parseFloat(contract_amount) - parseFloat(earned_revenue);
            if(quarter === '4'){
              earnedRevenueYTDValue = 0;
              totalExpectedRevenue = parseFloat(earnedRevenueYTDValue) + parseFloat(totalForecastRevenue);
            }else if(quarter === '3'){
              earnedRevenueYTDValue = earned_revenue_YTD;
              totalExpectedRevenue = parseFloat(earnedRevenueYTDValue) + parseFloat(totalForecastRevenue);
            }else if(quarter === '2'){
              earnedRevenueYTDValue = earned_revenue_YTD;
              totalExpectedRevenue = parseFloat(earnedRevenueYTDValue) + parseFloat(totalForecastRevenue);
            }else if(quarter === '1'){
              earnedRevenueYTDValue = earned_revenue_YTD;
              totalExpectedRevenue = parseFloat(earnedRevenueYTDValue) + parseFloat(totalForecastRevenue);
            }
        } 
      }

        if(status === 'Contract' && currentQuarterResp === quarter && currentYearResp === year){
        return (
           <tr key={_id} style={{ fontSize: '17px'}}>
              <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif',textAlign: 'center'}}>{divisionName}</td>
              <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif',textAlign: 'center'}}>{dept_job}</td>
              <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif',textAlign: 'center'}}>{job_name}</td>
              <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif',textAlign: 'center'}}>{status}</td>
              <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif',textAlign: 'center'}}>{start_date}</td>
              <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif',textAlign: 'center'}}>{end_date}</td>
              <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif',textAlign: 'right'}}>{'$' + Math.round(parseFloat(contract_amount)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
              <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif',textAlign: 'right'}}>{'$' + Math.round(parseFloat(grossMarginEarned)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
              <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif',textAlign: 'right'}}>{gross_margin_percent + '%'}</td>
              <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif',textAlign: 'right'}}>{'$' + Math.round(parseFloat(earnedRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
              <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif',textAlign: 'right'}}>{'$' + Math.round(parseFloat(backlogValue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
              <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif',textAlign: 'right'}}>{hit_ratio + '%'}</td>
              <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif',textAlign: 'right'}}>{'$' + Math.round(parseFloat(earnedRevenueYTDValue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
              <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif',textAlign: 'right'}}>{'$' + Math.round(parseFloat(totalExpectedRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
              <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif',textAlign: 'right'}}>{'$' + Math.round(parseFloat(totalForecastRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
           </tr>
        )}
       })
      }else if(value === 'future_report'){
        return this.state.ProjectReportData.map((ProjectReport, index) => {
          const { _id, job_name, dept_job, quarter, year, division, status, start_date, end_date, contract_amount, gross_margin_percent, hit_ratio, 
            earned_revenue } = ProjectReport //destructuring
            

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
              
          var totalForecastRevenue = '';
          var totalExpectedRevenue = '';
          var grossMarginEarned = '';
          var earnedRevenue = '';
          var backlogValue = '';
          var earnedRevenueYTDValue;

            grossMarginEarned = parseFloat(contract_amount) * (gross_margin_percent/100);
            earnedRevenue =0;
            backlogValue = (parseFloat(contract_amount) * (parseInt(hit_ratio)/100));
            earnedRevenueYTDValue = 0;
            totalExpectedRevenue = (parseFloat(contract_amount) * (parseInt(hit_ratio)/100)) - earned_revenue;
            totalForecastRevenue = (parseFloat(contract_amount) * (parseInt(hit_ratio)/100)) - earned_revenue;
  
          if(status !== 'Contract' && currentQuarterResp === quarter && currentYearResp === year){
          return (
             <tr key={_id} style={{ fontSize: '17px'}}>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif',textAlign: 'center'}}>{divisionName}</td>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif',textAlign: 'center'}}>{dept_job}</td>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif',textAlign: 'center'}}>{job_name}</td>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif',textAlign: 'center'}}>{status}</td>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif',textAlign: 'center'}}>{start_date}</td>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif',textAlign: 'center'}}>{end_date}</td>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif',textAlign: 'right'}}>{'$' + Math.round(parseFloat(contract_amount)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif',textAlign: 'right'}}>{'$' + Math.round(parseFloat(grossMarginEarned)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif',textAlign: 'right'}}>{gross_margin_percent + '%'}</td>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif',textAlign: 'right'}}>{'$' + Math.round(parseFloat(earnedRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif',textAlign: 'right'}}>{'$' + Math.round(parseFloat(backlogValue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif',textAlign: 'right'}}>{hit_ratio + '%'}</td>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif',textAlign: 'right'}}>{'$' + Math.round(parseFloat(earnedRevenueYTDValue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif',textAlign: 'right'}}>{'$' + Math.round(parseFloat(totalExpectedRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif',textAlign: 'right'}}>{'$' + Math.round(parseFloat(totalForecastRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
             </tr>
          )}
         })
        }     
      else if(value === 'forecast_months'){
        return this.state.ProjectForecastData.map((FY19Plan, index) => {
          const { _id, end_date, start_date, quarter, year, division, dept_job, earned_revenue, job_name, status, contract_amount } = FY19Plan //destructuring


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

          const now = new Date(currentQuarter);
          const startDate = new Date(start_date);
          const pastDate = new Date(end_date);
          var totalMonths =  (pastDate.getFullYear() - startDate.getFullYear()) * 12 + (pastDate.getMonth() - startDate.getMonth() + 1);
          var CurrentMonthOfProject =  ((now.getFullYear() - startDate.getFullYear()) * 12) + (now.getMonth() - startDate.getMonth() + 1);
          var checkStartValue = startDate.getMonth() - now.getMonth() + 
          (12 * (startDate.getFullYear() - now.getFullYear()))
          var converter = require('number-to-words');
          var newValue = converter.toWords(totalMonths);
          var forecastData = [];
          var forecastDataSum = 0;
          var backlogValue = parseFloat(contract_amount) - parseFloat(earned_revenue);
          var burnOffSum = 0;
          var valueFound = 0;
          var monthlyValue = 0;
          var obj = 0;
          var projectLength = 0;
          const checkMonth = now.getMonth() === pastDate.getMonth() && now.getFullYear() === pastDate.getFullYear();
          if(status === 'Contract'){
            if((pastDate < now && checkMonth === false) || (pastDate < now)){
              for (let i = 0; i < 50; i++) {
                forecastData.push(0);
                forecastDataSum += 0;
              }  
            }else {
                for(var j=0; j < global.burnOffChart.length; j++){
                  if(j >= CurrentMonthOfProject && j < totalMonths){
                      obj = global.burnOffChart[j][newValue]
                      burnOffSum += obj;
                  }

                }

                if(startDate > now){
                  for(var i=1; i < checkStartValue; i++){
                  forecastData.push(0);
                  }
                }
                for (var k=0; k < global.burnOffChart.length; k++) {
                  if(k >= CurrentMonthOfProject){
                    projectLength += 1;
                    valueFound = global.burnOffChart[k][newValue];
                    monthlyValue =  (backlogValue * valueFound) / burnOffSum;
                    forecastData.push(Math.round(parseFloat(monthlyValue)).toLocaleString(undefined, {maximumFractionDigits:2}));
                    forecastDataSum += monthlyValue;
              }
            }
          } 
        }

          //Dynamically Create Table Data
          let children = []
          for (let j = 0; j < projectLength; j++) {
            children.push(<td key={j} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + forecastData[j]}</td>)
          }

          for (let j = projectLength; j < 50; j++) {
            children.push(<td key={j}></td>)
          }
          if(status === 'Contract' && currentQuarterResp === quarter && currentYearResp === year && parseFloat(forecastDataSum) > 0){
          return (
             <tr key={_id} style={{ fontSize: '17px'}}>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif',textAlign: 'center'}}>{divisionName}</td>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif',textAlign: 'center'}}>{dept_job}</td>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif',textAlign: 'center'}}>{job_name}</td>
                {children}
              </tr>
          )}
         })
        }else if(value === 'forecast_months_non_contracts'){
          return this.state.ProjectForecastData.map((FY19Plan, index) => {
            const { _id, end_date, start_date, year, quarter, division, dept_job, job_name, status, contract_amount, hit_ratio } = FY19Plan //destructuring
  
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

            if(currentQuarterResp === '1'){
              currentQuarter = new Date('3/31/' + currentYearResp)
            }else if(currentQuarterResp === '2'){
              currentQuarter = new Date('6/30/' + currentYearResp)
            }else if(currentQuarterResp === '3'){
              currentQuarter = new Date('9/30/' + currentYearResp)
            }else if(currentQuarterResp === '4'){
              currentQuarter = new Date('12/31/' + currentYearResp)
            }
  
            const now = new Date(currentQuarter);
            const startDate = new Date(start_date);
            const pastDate = new Date(end_date);
            var totalMonths =  ((pastDate.getFullYear() - startDate.getFullYear()) * 12) + (pastDate.getMonth() - startDate.getMonth() + 1);
            var CurrentMonthOfProject =  ((now.getFullYear() - startDate.getFullYear()) * 12) + (now.getMonth() - startDate.getMonth() + 1);
            var checkStartValue = startDate.getMonth() - now.getMonth() + 
            (12 * (startDate.getFullYear() - now.getFullYear()))
            var converter = require('number-to-words');
            var newValue = converter.toWords(totalMonths);
            var forecastData = [];
            var forecastDataSum = 0;
            var backlogFutureValue = (parseFloat(contract_amount) * (parseInt(hit_ratio)/100));
            var burnOffSum = 0;
            var valueFound = 0;
            var monthlyValue = 0;
            var obj = 0;
            var projectLength = 0;
            var checkCompleted = 0;
            const checkMonth = now.getMonth() === pastDate.getMonth() && now.getFullYear() === pastDate.getFullYear();
  
            if(startDate > now){
              for(var m=1; m < checkStartValue; m++){
              forecastData.push(0);
              }
              checkCompleted += 1;
            }
            
            //if(checkCompleted === 1){
              //calculate burnOff sum
              for(var l=0; l < global.burnOffChart.length; l++){
                if(l  >= CurrentMonthOfProject && l < totalMonths){
                    obj = global.burnOffChart[l][newValue]
                    burnOffSum += obj;

                }
              }


                for (var v=0; v < global.burnOffChart.length; v++) {
                  if(v >= CurrentMonthOfProject){
                        projectLength += 1;
                        valueFound = global.burnOffChart[v][newValue];
                        monthlyValue =  (backlogFutureValue * valueFound) / burnOffSum;
                        forecastData.push(Math.round(parseFloat(monthlyValue)).toLocaleString(undefined, {maximumFractionDigits:2}));
                        forecastDataSum += monthlyValue;
                  }
                }
            //}
  
            //Dynamically Create Table Data
            let children = []
            for (let j = 0; j < projectLength; j++) {
              children.push(<td key={j} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + forecastData[j]}</td>)
            }
  
            for (let j = projectLength; j < 50; j++) {
              children.push(<td key={j}></td>)
            }
            if(status !== 'Contract' && currentQuarterResp === quarter && currentYearResp === year && parseFloat(forecastDataSum) > 0){
            return (
               <tr key={_id} style={{ fontSize: '17px'}}>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif',textAlign: 'center'}}>{divisionName}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif',textAlign: 'center'}}>{dept_job}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif',textAlign: 'center'}}>{job_name}</td>
                  {children}
                </tr>
            )}
           })
          }

    }

 renderTableHeader(value) {
  if(value === 'headerSection'){
    return <><th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>Dept Code</th>
             <th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>Job Number</th>
             <th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>Job Name</th>
             <th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>Status</th>
             <th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>Start Date</th>
             <th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>End Date</th>
             <th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>Contract Amount</th>
             <th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>Gross Margin</th>
             <th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>Gross Margin Percentage</th>
             <th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>Earned Revenue</th>
             <th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>Backlog</th>
             <th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>Hit Ratio</th>
             <th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>Earned Revenue YTD</th>
             <th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>YTD + Future Revenue</th>
             <th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>Total Forecast Revenue</th>
           </>
 }else if(value === 'forecastMonthSection'){

            //Dynamically Create Table Data
            let children = []
            for (let j = 1; j <= 50; j++) {

              if(currentQuarterResp === '1'){
                currentQuarter = new Date('3/31/' + currentYearResp)
              }else if(currentQuarterResp === '2'){
                currentQuarter = new Date('6/30/' + currentYearResp)
              }else if(currentQuarterResp === '3'){
                currentQuarter = new Date('9/30/' + currentYearResp)
              }else if(currentQuarterResp === '4'){
                currentQuarter = new Date('12/31/' + currentYearResp)
              }

              var currentHeaderDate = new Date(currentQuarter)
              currentHeaderDate.setDate( currentHeaderDate.getDate() - 10 );

              var newDate1 = new Date(currentHeaderDate)
              newDate1.setMonth(newDate1.getMonth() + j );
              var lastDay = new Date(newDate1.getFullYear(), newDate1.getMonth() + 1, 0);
              let date=parseInt(newDate1.getMonth()+1) + "/" + lastDay.getDate() + "/" +newDate1.getFullYear();
              children.push(<th key={j} style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>{date} {"Month_" + j}</th>)
            }
            
  return <><th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>Dept Code</th>
           <th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>Job Number</th>
           <th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>Job Name</th>
          {children}
         </>
      }

    }
    render(){

      const headerSection = "headerSection"
      const forecastMonthSection = "forecastMonthSection"
      const forecast_months = "forecast_months"
      const forecast_months_non_contracts = "forecast_months_non_contracts"
      const project_report = "project_report"
      const future_report = "future_report"
      const view = this.state.userRole === 'Writer';
      const loadedData = this.state.data;

      if(!loadedData) return <Container>Loading...</Container>
  
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
          <Container>
              <Row>
                  <Col className="FY19Plan" style={{paddingTop: '1%'}}>
                  <h1 id='title'>Carroll Daniel Construction</h1>
                  <h1 id='title'>Projected Detail Report</h1>
                  <h1 id='title'>Projected Date: {currentDateString}, {currentYearResp}</h1>
                  <div className="tableFixHead">
                    <table id='tableMain'>
                        <thead>
                        <tr>{this.renderTableHeader(headerSection)}</tr>
                        </thead>
                        <tbody>
                        {this.renderTableData(project_report)}
                        {this.renderTableData(future_report)}
                        </tbody>
                    </table>
                    </div>
                  </Col>
              </Row>
          </Container>
          <Container>
              <Row>
                  <Col className="FY19Plan">
                  <h1 id='title'>Forecast Months</h1>
                  <div className="tableFixHead">
                    <table id='tableMain'>
                        <thead>
                        <tr>{this.renderTableHeader(forecastMonthSection)}</tr>
                        </thead>
                        <tbody>
                        {this.renderTableData(forecast_months)}
                        {this.renderTableData(forecast_months_non_contracts)}
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

export default withAuth(ForcastRevenue);
