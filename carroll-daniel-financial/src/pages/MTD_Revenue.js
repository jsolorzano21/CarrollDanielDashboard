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
var contractTotal = 0; var profitTotal = 0; var backlogTotal = 0; var expRevenueTotal = 0;
var earnedRevenueTotal = 0; var forecastRevenueTotal = 0; var forecastMonthOne = 0; var forecastMonthTwo = 0;
var forecastMonthThree = 0; var forecastMonthFour = 0; var forecastMonthFive = 0; var forecastMonthSix = 0;
var forecastMonthSeven = 0; var forecastMonthEight = 0; var forecastMonthNine = 0; var forecastMonthTen = 0;
var forecastMonthEleven = 0; var forecastMonthTwelve = 0; var forecastMonthThirteen = 0; var forecastMonthFourteen = 0;
var forecastMonthFifteen = 0; var forecastMonthSixteen = 0; var forecastMonthSeventeen = 0; var forecastMonthEighteen = 0;
var forecastMonthNineteen = 0; var forecastMonthTwenty = 0; var forecastMonthTwentyOne = 0; var forecastMonthTwentyTwo = 0;
var forecastMonthTwentyThree = 0; var forecastMonthTwentyFour = 0; 
//var forecastMonthTwentyFive = 0;

var financialString = '';
var currentQuarterResp = '';
var currentYearResp = '';
var currentDateString = '';
var loopCount = 0;
var divisionName = '';


class MTD_Revenue extends Component{


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
          currentQuarter = new Date('3/31/' + currentYearResp);
          currentDateString = 'March 31';
          loopCount = 21;
        }else if(currentQuarterResp === '2'){
          currentQuarter = new Date('6/30/' + currentYearResp);
          currentDateString = 'June 30';
          loopCount = 18;
        }else if(currentQuarterResp === '3'){
          currentQuarter = new Date('9/30/' + currentYearResp);
          currentDateString = 'September 30';
          loopCount = 15;
        }else if(currentQuarterResp === '4'){
          currentQuarter = new Date('12/31/' + currentYearResp);
          currentDateString = 'December 31';
          loopCount = 24;
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
      this.setState({ ProjectForecastData: dataValue});
      this.setState({ data: dataValue });
      this.setState({ userRole: decoded.roles});

  }).catch(error => {
    console.log(error)
  })
}))


}

   renderTableData(value) {
    if(value === 'project_report'){
      return this.state.ProjectReportData.map((ProjectReport, index) => {
        const { _id, job_name, dept_job, division,quarter,year, status, start_date, end_date, contract_amount, gross_margin_percent, hit_ratio, backlog, earned_revenue_YTD, 
          earned_revenue, bonded } = ProjectReport //destructuring
    
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

    if(status === 'Contract' && currentQuarterResp === quarter && currentYearResp === year){
        var profit = 0;
        const now = new Date(currentQuarter);
        const pastDate = new Date(end_date);
        const startDate = new Date(start_date);
        var checkStartValue = startDate.getMonth() - now.getMonth() + 
          (12 * (startDate.getFullYear() - now.getFullYear()))
        const checkMonth = now.getMonth() === pastDate.getMonth() && now.getFullYear() === pastDate.getFullYear();
        var totalForecastRevenue = '';
        var totalExpectedRevenue = '';
        //var grossMarginEarned = '';
        //var expectedContractAmount = '';
        //var currentBacklogValue = '';
        //var futureRevenue = 0;
        //var earnedRevenue = '';
        var burnOffSum = 0;
        var backlogValue = '';
        var totalMonths =  (pastDate.getFullYear() - startDate.getFullYear()) * 12 + (pastDate.getMonth() - startDate.getMonth() + 1);
        var CurrentMonthOfProject =  (now.getFullYear() - startDate.getFullYear()) * 12 + (now.getMonth() - startDate.getMonth() + 1);
        var converter = require('number-to-words');
        //var profitCurrentYear = '';
        //var futureProfit = 0;
        var newValue = converter.toWords(totalMonths);
        var earnedRevenueYTDValue;
        if(status === 'Contract'){
          profit = (parseFloat(contract_amount) * (gross_margin_percent / 100));
          if((pastDate <= now && checkMonth === true) || (pastDate <= now)){
            totalForecastRevenue = 0;
            //profitCurrentYear = (parseFloat(earned_revenue_YTD) * (gross_margin_percent/100)) + (parseFloat(totalForecastRevenue) * (gross_margin_percent/100));
            //totalExpectedRevenue =  earned_revenue_YTD;
            //grossMarginEarned = (parseFloat(earned_revenue) * (gross_margin_percent/100));
            //earnedRevenue = earned_revenue;
            backlogValue = backlog;
            //expectedContractAmount = Math.round(parseFloat(earned_revenue) + parseFloat(backlog));
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
            //earnedRevenueYTDValue = earned_revenue_YTD;
          }else {
            //totalForecastRevenue = backlog;
            //expectedContractAmount = Math.round(parseFloat(earned_revenue) + parseFloat(backlog));
            //totalExpectedRevenue = (parseFloat(backlog) + parseFloat(earned_revenue_YTD));
            //grossMarginEarned = (parseFloat(earned_revenue) * (gross_margin_percent/100));
            //earnedRevenue = earned_revenue;
            //backlogValue = backlog;
            backlogValue = parseFloat(contract_amount) - parseFloat(earned_revenue);
            if(quarter === '4'){
              earnedRevenueYTDValue = 0;
              //totalExpectedRevenue = (parseFloat(contract_amount) - parseFloat(earned_revenue) + earnedRevenueYTDValue);
            }else if(quarter === '3'){
              earnedRevenueYTDValue = earned_revenue_YTD;
              //totalExpectedRevenue = (parseFloat(contract_amount) - parseFloat(earned_revenue) + earnedRevenueYTDValue);
            }else if(quarter === '2'){
              earnedRevenueYTDValue = earned_revenue_YTD;
              //totalExpectedRevenue = (parseFloat(contract_amount) - parseFloat(earned_revenue) + totalExpectedRevenue);
            }else if(quarter === '1'){
              earnedRevenueYTDValue = earned_revenue_YTD;
              //totalExpectedRevenue = (parseFloat(contract_amount) - parseFloat(earned_revenue) + totalExpectedRevenue);
            }
            //earnedRevenueYTDValue = earned_revenue_YTD;
            //var monthlyYearValue = 0;
            for(var j=0; j < global.burnOffChart.length; j++){
              if(j >= CurrentMonthOfProject && j < totalMonths){
                  var obj = global.burnOffChart[j][newValue]
                  burnOffSum += obj;
              }
  
            }

            var checkloop = 1;
            var forecastData = 0;
            if(startDate > now){
              for(var i=1; i < checkStartValue; i++){
                checkloop += 1;
              }
            }

            for (var k=0; k < global.burnOffChart.length; k++) {
              if(k >= CurrentMonthOfProject){
                var valueFound = global.burnOffChart[k][newValue];
                var monthlyValue =  (backlogValue * valueFound) / burnOffSum;
                if(checkloop <= loopCount){
                  forecastData += monthlyValue;
                  checkloop += 1;
                }
  
              }
            }

            totalExpectedRevenue = parseFloat(forecastData) + parseFloat(earnedRevenueYTDValue) ? parseFloat(forecastData) + parseFloat(earnedRevenueYTDValue) : 0;
            totalForecastRevenue = forecastData ? forecastData : 0;
            //profitCurrentYear = (parseFloat(totalExpectedRevenue) * (gross_margin_percent/100));
            //futureProfit = parseFloat(futureRevenue) * (gross_margin_percent/100);
        } 
      }

        contractTotal += parseFloat(contract_amount);
        profitTotal += parseFloat(profit);
        backlogTotal += parseFloat(backlogValue) ? parseFloat(backlogValue) : 0;
        expRevenueTotal += parseFloat(totalExpectedRevenue) ? parseFloat(totalExpectedRevenue) : 0;
        earnedRevenueTotal += parseFloat(earnedRevenueYTDValue) ? parseFloat(earnedRevenueYTDValue) : 0;
        forecastRevenueTotal += parseFloat(totalForecastRevenue) ? parseFloat(totalForecastRevenue) : 0;

        //if(status === 'Contract' && currentQuarterResp === quarter && currentYearResp === year){
        return (
           <tr key={_id} style={{ fontSize: '17px'}}>
              <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{divisionName}</td>
              <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{dept_job}</td>
              <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{job_name}</td>
              <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{status}</td>
              <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{bonded}</td>
              <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{'$' + Math.round(parseFloat(contract_amount)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
              <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{'$' + parseFloat(Math.round(profit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
              <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{gross_margin_percent + '%'}</td>
              <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{hit_ratio + '%'}</td>
              <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{'$' + Math.round(parseFloat(backlogValue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
              <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{'$' + Math.round(parseFloat(totalExpectedRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
              <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{'$' + Math.round(parseFloat(earnedRevenueYTDValue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
              <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{'$' + Math.round(parseFloat(totalForecastRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
           </tr>
        )}
       })
      }else if(value === 'project_report_future'){
        return this.state.ProjectReportData.map((ProjectReport, index) => {
          const { _id, job_name, dept_job, division,quarter,year, status, start_date, end_date, contract_amount, gross_margin_percent, hit_ratio, backlog, earned_revenue_YTD, bonded } = ProjectReport //destructuring
  
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

      if(status !== 'Contract' && currentQuarterResp === quarter && currentYearResp === year){
          var profit = 0;
          const now = new Date(currentQuarter);
          const pastDate = new Date(end_date);
          const startDate = new Date(start_date);
          var checkStartValue = startDate.getMonth() - now.getMonth() + 
            (12 * (startDate.getFullYear() - now.getFullYear()))
          //const checkMonth = now.getMonth() === pastDate.getMonth() && now.getFullYear() === pastDate.getFullYear();
          var totalForecastRevenue = '';
          var totalExpectedRevenue = '';
          //var grossMarginEarned = '';
          var expectedContractAmount = '';
          var currentBacklogValue = '';
          var futureRevenue = 0;
          //var earnedRevenue = '';
          var burnOffSum = 0;
          var backlogValue = (parseFloat(contract_amount) * (parseInt(hit_ratio)/100));
          var totalMonths =  (pastDate.getFullYear() - startDate.getFullYear()) * 12 + (pastDate.getMonth() - startDate.getMonth() + 1);
          var CurrentMonthOfProject =  (now.getFullYear() - startDate.getFullYear()) * 12 + (now.getMonth() - startDate.getMonth() + 1);
          var converter = require('number-to-words');
          //var profitCurrentYear = '';
          var futureProfit = 0;
          var newValue = converter.toWords(totalMonths);
          var earnedRevenueYTDValue;

          if(quarter === '4'){
            earnedRevenueYTDValue = 0;
          }else if(quarter === '3'){
            earnedRevenueYTDValue = earned_revenue_YTD;
          }else if(quarter === '2'){
            earnedRevenueYTDValue = earned_revenue_YTD;
          }else if(quarter === '1'){
            earnedRevenueYTDValue = earned_revenue_YTD;
          }

          for(var jk=0; jk < global.burnOffChart.length; jk++){
            if(jk >= CurrentMonthOfProject && jk < totalMonths){
                var objProjected = global.burnOffChart[jk][newValue]
                burnOffSum += objProjected;
            }
  
          }

          var checkloopProjected = 1;
          var forecastDataProjected = 0;

          if(startDate > now){
            for(var il=1; il < checkStartValue; il++){
              checkloopProjected += 1;
            }
          }

          for (var kj=0; kj < global.burnOffChart.length; kj++) {
            if(kj >= CurrentMonthOfProject){
              var valueFoundProjected = global.burnOffChart[kj][newValue];
              var monthlyValueProjected =  (backlogValue * valueFoundProjected) / burnOffSum;
              if(checkloopProjected <= loopCount){
                forecastDataProjected += monthlyValueProjected;
                checkloopProjected += 1;
              }
  
            }
          }

          expectedContractAmount = (parseFloat(contract_amount) * (parseInt(hit_ratio)/100));
          currentBacklogValue = expectedContractAmount;
          futureRevenue = currentBacklogValue;
          futureProfit = parseFloat(futureRevenue) * (gross_margin_percent/100);
          profit = futureProfit;
          totalForecastRevenue = forecastDataProjected ? forecastDataProjected : 0;
          totalExpectedRevenue = (parseFloat(totalForecastRevenue) + parseFloat(earnedRevenueYTDValue)) ? (parseFloat(totalForecastRevenue) + parseFloat(earnedRevenueYTDValue)) : 0;
            
          contractTotal += parseFloat(contract_amount);
          profitTotal += parseFloat(profit);
          backlogTotal += parseFloat(backlogValue) ? parseFloat(backlogValue) : 0;
          expRevenueTotal += parseFloat(totalExpectedRevenue) ? parseFloat(totalExpectedRevenue) : 0;
          earnedRevenueTotal += parseFloat(earnedRevenueYTDValue) ? parseFloat(earnedRevenueYTDValue) : 0;
          forecastRevenueTotal += parseFloat(totalForecastRevenue) ? parseFloat(totalForecastRevenue) : 0;
  
          //if(status !== 'Contract' && currentQuarterResp === quarter && currentYearResp === year){
          return (
             <tr key={_id} style={{ fontSize: '17px'}}>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{divisionName}</td>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{dept_job}</td>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{job_name}</td>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{status}</td>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{bonded}</td>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{'$' + Math.round(parseFloat(contract_amount)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{'$' + parseFloat(Math.round(profit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{gross_margin_percent + '%'}</td>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{hit_ratio + '%'}</td>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{'$' + Math.round(parseFloat(backlogValue ? backlogValue : 0)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{'$' + Math.round(parseFloat(totalExpectedRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{'$' + Math.round(parseFloat(earnedRevenueYTDValue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{'$' + Math.round(parseFloat(totalForecastRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
             </tr>
          )}
         })
        }     
      else  if(value === 'forecast_months'){
        return this.state.ProjectForecastData.map((FY19Plan, index) => {
          const { _id, end_date, start_date, quarter, year, earned_revenue, division, dept_job, job_name, status, contract_amount, hit_ratio } = FY19Plan //destructuring
          
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

      if(status === 'Contract' && currentQuarterResp === quarter && currentYearResp === year){  
          const now = new Date(currentQuarter);
          const startDate = new Date(start_date);
          const pastDate = new Date(end_date);
          var totalMonths =  (pastDate.getFullYear() - startDate.getFullYear()) * 12 + (pastDate.getMonth() - startDate.getMonth() + 1);
          var CurrentMonthOfProject =  (now.getFullYear() - startDate.getFullYear()) * 12 + (now.getMonth() - startDate.getMonth() + 1);
          var checkStartValue = startDate.getMonth() - now.getMonth() + 
          (12 * (startDate.getFullYear() - now.getFullYear()))
          var converter = require('number-to-words');
          var newValue = converter.toWords(totalMonths);
          var forecastData = [];
          var forecastDataSum = 0;
          var backlogValue = parseFloat(contract_amount) - parseFloat(earned_revenue);;
          var backlogFutureValue = (parseFloat(contract_amount) * (parseInt(hit_ratio)/100));
          var burnOffSum = 0;
          var valueFound = 0;
          var monthlyValue = 0;
          var obj = 0;
          var projectLength = 0;
          const checkMonth = now.getMonth() === pastDate.getMonth() && now.getFullYear() === pastDate.getFullYear();

          
          if(status === 'Contract'){
            if(pastDate < now && checkMonth === false){
              for (let i = 0; i < loopCount; i++) {
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
                    projectLength += 1;
                  }
                }

                for (var k=0; k < global.burnOffChart.length; k++) {
                  if(k >= CurrentMonthOfProject && projectLength < loopCount){
                    projectLength += 1;
                    valueFound = global.burnOffChart[k][newValue];
                    monthlyValue =  (backlogValue * valueFound) / burnOffSum;
                    forecastData.push(Math.round(parseFloat(monthlyValue)));
                    forecastDataSum += monthlyValue;
              }
            }
          } 
        }else{
          for(var l=0; l < global.burnOffChart.length; l++){
            if(l >= CurrentMonthOfProject && l < totalMonths){
                obj = global.burnOffChart[l][newValue]
                burnOffSum += obj;
            }

          }

          if(startDate > now){
            for(var m=1; m < checkStartValue; m++){
              forecastData.push(0);
              projectLength += 1;
            }
          }

          for (var v=0; v < global.burnOffChart.length; v++) {
            if(v >= CurrentMonthOfProject && projectLength < loopCount){
                  projectLength += 1;
                  valueFound = global.burnOffChart[v][newValue];
                  monthlyValue =  (backlogFutureValue * valueFound) / burnOffSum;
                  forecastData.push(parseFloat(monthlyValue)).toLocaleString(undefined, {maximumFractionDigits:2});
                  forecastDataSum += monthlyValue;
            }
          }
        }


          if(parseInt(forecastDataSum) > 0){
          
          forecastMonthOne += parseFloat(forecastData[0]); forecastMonthTwo += parseFloat(forecastData[1]); forecastMonthThree += parseFloat(forecastData[2]); forecastMonthFour += parseFloat(forecastData[3]);
          forecastMonthFive += parseFloat(forecastData[4]); forecastMonthSix += parseFloat(forecastData[5]); forecastMonthSeven += parseFloat(forecastData[6]); forecastMonthEight += parseFloat(forecastData[7]);
          forecastMonthNine += parseFloat(forecastData[8]); forecastMonthTen += parseFloat(forecastData[9]); forecastMonthEleven += parseFloat(forecastData[10]); forecastMonthTwelve += parseFloat(forecastData[11]);
          forecastMonthThirteen += parseFloat(forecastData[12]); forecastMonthFourteen += parseFloat(forecastData[13]); forecastMonthFifteen += parseFloat(forecastData[14]); forecastMonthSixteen += parseFloat(forecastData[15]);
          forecastMonthSeventeen += parseFloat(forecastData[16]); forecastMonthEighteen += parseFloat(forecastData[17]); forecastMonthNineteen += parseFloat(forecastData[18]); forecastMonthTwenty += parseFloat(forecastData[19]);
          forecastMonthTwentyOne += parseFloat(forecastData[20]); forecastMonthTwentyTwo += parseFloat(forecastData[21]); forecastMonthTwentyThree += parseFloat(forecastData[22]); forecastMonthTwentyFour += parseFloat(forecastData[23]);
          ///forecastMonthTwentyFive += parseFloat(forecastData[24]);

          //if(status === 'Contract' && currentQuarterResp === quarter && currentYearResp === year){
            let childrenDataContract = []
              for (let b = 0; b < loopCount; b++) {
                childrenDataContract.push(<td key={b} style={{ border: '1px solid #005A8B', textAlign: 'right', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastData[b] ? forecastData[b]: 0).toLocaleString(undefined, {maximumFractionDigits:2})}</td>)
              }
          return (
             <tr key={_id} style={{ fontSize: '17px'}}>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{divisionName}</td>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{dept_job}</td>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{job_name}</td>
                {childrenDataContract}
             </tr>
          )}}
         })
        }else if(value === 'forecast_months_future'){
          return this.state.ProjectForecastData.map((FY19Plan, index) => {
            const { _id, end_date, start_date, quarter, year, earned_revenue, division, dept_job, job_name, status, contract_amount, hit_ratio } = FY19Plan //destructuring
            

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
            
            
          if(status !== 'Contract' && currentQuarterResp === quarter && currentYearResp === year){   
            const now = new Date(currentQuarter);
            const startDate = new Date(start_date);
            const pastDate = new Date(end_date);
            var totalMonths =  (pastDate.getFullYear() - startDate.getFullYear()) * 12 + (pastDate.getMonth() - startDate.getMonth() + 1);
            var CurrentMonthOfProject =  (now.getFullYear() - startDate.getFullYear()) * 12 + (now.getMonth() - startDate.getMonth() + 1);
            var checkStartValue = startDate.getMonth() - now.getMonth() + 
            (12 * (startDate.getFullYear() - now.getFullYear()))
            var converter = require('number-to-words');
            var newValue = converter.toWords(totalMonths);
            var forecastData = [];
            var forecastDataSum = 0;
            var backlogValue = parseFloat(contract_amount) - parseFloat(earned_revenue);;
            var backlogFutureValue = (parseFloat(contract_amount) * (parseInt(hit_ratio)/100));
            var burnOffSum = 0;
            var valueFound = 0;
            var monthlyValue = 0;
            var obj = 0;
            var projectLength = 0;
            const checkMonth = now.getMonth() === pastDate.getMonth() && now.getFullYear() === pastDate.getFullYear();
            if(status === 'Contract'){
              if(pastDate < now && checkMonth === false){
                for (let i = 0; i < loopCount; i++) {
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
                      projectLength += 1;
                    }
                  }
  
                  for (var k=0; k < global.burnOffChart.length; k++) {
                    if(k >= CurrentMonthOfProject && projectLength < loopCount){
                      projectLength += 1;
                      valueFound = global.burnOffChart[k][newValue];
                      monthlyValue =  (backlogValue * valueFound) / burnOffSum;
                      forecastData.push(Math.round(parseFloat(monthlyValue)));
                      forecastDataSum += monthlyValue;
                }
              }
            } 
          }else{
            for(var l=0; l < global.burnOffChart.length; l++){
              if(l >= CurrentMonthOfProject && l < totalMonths){
                  obj = global.burnOffChart[l][newValue]
                  burnOffSum += obj;
              }
  
            }
  
            if(startDate > now){
              for(var m=1; m < checkStartValue; m++){
                forecastData.push(0);
                projectLength += 1;
              }
            }
  
            for (var v=0; v < global.burnOffChart.length; v++) {
              if(v >= CurrentMonthOfProject && projectLength < loopCount){
                    projectLength += 1;
                    valueFound = global.burnOffChart[v][newValue];
                    monthlyValue =  (backlogFutureValue * valueFound) / burnOffSum;
                    forecastData.push(parseFloat(monthlyValue)).toLocaleString(undefined, {maximumFractionDigits:2});
                    forecastDataSum += monthlyValue;
              }
            }
          }
  
  
            if(parseInt(forecastDataSum) > 0){
       
            forecastMonthOne += parseFloat(forecastData[0]); forecastMonthTwo += parseFloat(forecastData[1]); forecastMonthThree += parseFloat(forecastData[2]); forecastMonthFour += parseFloat(forecastData[3]);
            forecastMonthFive += parseFloat(forecastData[4]); forecastMonthSix += parseFloat(forecastData[5]); forecastMonthSeven += parseFloat(forecastData[6]); forecastMonthEight += parseFloat(forecastData[7]);
            forecastMonthNine += parseFloat(forecastData[8]); forecastMonthTen += parseFloat(forecastData[9]); forecastMonthEleven += parseFloat(forecastData[10]); forecastMonthTwelve += parseFloat(forecastData[11]);
            forecastMonthThirteen += parseFloat(forecastData[12]); forecastMonthFourteen += parseFloat(forecastData[13]); forecastMonthFifteen += parseFloat(forecastData[14]); forecastMonthSixteen += parseFloat(forecastData[15]);
            forecastMonthSeventeen += parseFloat(forecastData[16]); forecastMonthEighteen += parseFloat(forecastData[17]); forecastMonthNineteen += parseFloat(forecastData[18]); forecastMonthTwenty += parseFloat(forecastData[19]);
            forecastMonthTwentyOne += parseFloat(forecastData[20]); forecastMonthTwentyTwo += parseFloat(forecastData[21]); forecastMonthTwentyThree += parseFloat(forecastData[22]); forecastMonthTwentyFour += parseFloat(forecastData[23]);
            //forecastMonthTwentyFive += parseFloat(forecastData[24]);
  
            //if(status !== 'Contract' && currentQuarterResp === quarter && currentYearResp === year){
            let childrenDataFuture = []
              for (let a = 0; a < loopCount; a++) {
                childrenDataFuture.push(<td key={a} style={{ border: '1px solid #005A8B',textAlign: 'right', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastData[a] ? forecastData[a]: 0).toLocaleString(undefined, {maximumFractionDigits:2})}</td>)
              }
            return (
               <tr key={_id} style={{ fontSize: '17px'}}>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{divisionName}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{dept_job}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{job_name}</td>
                  {childrenDataFuture}
               </tr>
            )}}
           })
          }

    }

 renderTableHeader(value) {
  if(value === 'headerSection'){
    return <><th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>Dept Code</th>
             <th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>Job Number</th>
             <th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>Job Name</th>
             <th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>Type</th>
             <th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>Bonded</th>
             <th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>Contract Amount</th>
             <th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>Gross Margin $</th>
             <th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>Gross Margin %</th>
             <th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>Hit Ratio</th>
             <th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>Backlog</th>
             <th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>Revenue YTD + Future</th>
             <th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>Actual Revenue YTD</th>
             <th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>Forecast Revenue</th>
           </>
 }else if(value === 'forecastMonthSection'){
//Dynamically Create Table Data
let children = []
for (let j = 1; j <= loopCount; j++) {

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
    }else if(value === 'headerSectionTotalValue'){
      return <><th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>TOTALS</th>
               <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
               <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
               <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
               <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
               <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + Math.round(parseFloat(contractTotal)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
               <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + Math.round(parseFloat(profitTotal)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
               <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
               <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
               <th style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{'$' + Math.round(parseFloat(backlogTotal)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
               <th style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{'$' + Math.round(parseFloat(expRevenueTotal)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
               <th style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{'$' + Math.round(parseFloat(earnedRevenueTotal)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
               <th style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{'$' + Math.round(parseFloat(forecastRevenueTotal)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
             </>
   }else if(value === 'headerForecastTotalValue'){
    let childrenDataContract = []
    if(loopCount === 24) {
      childrenDataContract.push(<th key={1} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthOne ? Math.round(forecastMonthOne) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={2} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthTwo ? Math.round(forecastMonthTwo) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={3} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthThree ? Math.round(forecastMonthThree) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={4} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthFour ? Math.round(forecastMonthFour) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={5} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthFive ? Math.round(forecastMonthFive) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={6} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthSix ? Math.round(forecastMonthSix) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={7} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthSeven ? Math.round(forecastMonthSeven) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={8} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthEight ? Math.round(forecastMonthEight) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={9} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthNine ? Math.round(forecastMonthNine) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={10} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthTen ? Math.round(forecastMonthTen) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={11} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthEleven ? Math.round(forecastMonthEleven) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={12} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthTwelve ? Math.round(forecastMonthTwelve) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={13} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthThirteen ? Math.round(forecastMonthThirteen) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={14} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthFourteen ? Math.round(forecastMonthFourteen) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={15} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthFifteen ? Math.round(forecastMonthFifteen) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={16} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthSixteen ? Math.round(forecastMonthSixteen) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={17} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthSeventeen ? Math.round(forecastMonthSeventeen) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={18} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthEighteen ? Math.round(forecastMonthEighteen) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={19} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthNineteen ? Math.round(forecastMonthNineteen) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={20} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthTwenty ? Math.round(forecastMonthTwenty) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={21} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthTwentyOne ? Math.round(forecastMonthTwentyOne) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={22} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthTwentyTwo ? Math.round(forecastMonthTwentyTwo) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={23} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthTwentyThree ? Math.round(forecastMonthTwentyThree) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={24} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthTwentyFour ? Math.round(forecastMonthTwentyFour) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
    }else if(loopCount === 21){
      childrenDataContract.push(<th key={1} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthOne ? Math.round(forecastMonthOne) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={2} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthTwo ? Math.round(forecastMonthTwo) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={3} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthThree ? Math.round(forecastMonthThree) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={4} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthFour ? Math.round(forecastMonthFour) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={5} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthFive ? Math.round(forecastMonthFive) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={6} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthSix ? Math.round(forecastMonthSix) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={7} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthSeven ? Math.round(forecastMonthSeven) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={8} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthEight ? Math.round(forecastMonthEight) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={9} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthNine ? Math.round(forecastMonthNine) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={10} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthTen ? Math.round(forecastMonthTen) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={11} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthEleven ? Math.round(forecastMonthEleven) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={12} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthTwelve ? Math.round(forecastMonthTwelve) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={13} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthThirteen ? Math.round(forecastMonthThirteen) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={14} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthFourteen ? Math.round(forecastMonthFourteen) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={15} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthFifteen ? Math.round(forecastMonthFifteen) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={16} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthSixteen ? Math.round(forecastMonthSixteen) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={17} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthSeventeen ? Math.round(forecastMonthSeventeen) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={18} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthEighteen ? Math.round(forecastMonthEighteen) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={19} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthNineteen ? Math.round(forecastMonthNineteen) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={20} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthTwenty ? Math.round(forecastMonthTwenty) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={21} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthTwentyOne ? Math.round(forecastMonthTwentyOne) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
    }else if(loopCount === 18){
      childrenDataContract.push(<th key={1} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthOne ? Math.round(forecastMonthOne) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={2} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthTwo ? Math.round(forecastMonthTwo) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={3} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthThree ? Math.round(forecastMonthThree) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={4} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthFour ? Math.round(forecastMonthFour) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={5} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthFive ? Math.round(forecastMonthFive) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={6} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthSix ? Math.round(forecastMonthSix) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={7} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthSeven ? Math.round(forecastMonthSeven) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={8} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthEight ? Math.round(forecastMonthEight) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={9} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthNine ? Math.round(forecastMonthNine) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={10} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthTen ? Math.round(forecastMonthTen) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={11} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthEleven ? Math.round(forecastMonthEleven) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={12} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthTwelve ? Math.round(forecastMonthTwelve) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={13} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthThirteen ? Math.round(forecastMonthThirteen) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={14} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthFourteen ? Math.round(forecastMonthFourteen) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={15} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthFifteen ? Math.round(forecastMonthFifteen) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={16} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthSixteen ? Math.round(forecastMonthSixteen) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={17} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthSeventeen ? Math.round(forecastMonthSeventeen) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={18} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthEighteen ? Math.round(forecastMonthEighteen) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
    }else if(loopCount === 15){
      childrenDataContract.push(<th key={1} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthOne ? Math.round(forecastMonthOne) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={2} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthTwo ? Math.round(forecastMonthTwo) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={3} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthThree ? Math.round(forecastMonthThree) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={4} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthFour ? Math.round(forecastMonthFour) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={5} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthFive ? Math.round(forecastMonthFive) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={6} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthSix ? Math.round(forecastMonthSix) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={7} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthSeven ? Math.round(forecastMonthSeven) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={8} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthEight ? Math.round(forecastMonthEight) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={9} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthNine ? Math.round(forecastMonthNine) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={10} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthTen ? Math.round(forecastMonthTen) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={11} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthEleven ? Math.round(forecastMonthEleven) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={12} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthTwelve ? Math.round(forecastMonthTwelve) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={13} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthThirteen ? Math.round(forecastMonthThirteen) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={14} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthFourteen ? Math.round(forecastMonthFourteen) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
      childrenDataContract.push(<th key={15} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthFifteen ? Math.round(forecastMonthFifteen) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
    }
    return <><th style={{ textAlign: 'center', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>TOTALS</th>
             <th style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}></th>
             <th style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}></th>
             {childrenDataContract}
           </>
 }

}




    render(){

      const headerSection = "headerSection"
      const forecastMonthSection = "forecastMonthSection"
      const project_report_future = "project_report_future"
      const forecast_months_future = "forecast_months_future"
      const forecast_months = "forecast_months"
      const project_report = "project_report"
      const headerSectionTotalValue = "headerSectionTotalValue"
      const headerForecastTotalValue = "headerForecastTotalValue"
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
                  <h1 id='title'>Expected Revenue for the Following {loopCount} Months</h1>
                  <h1 id='title'>Projected Date: {currentDateString}, {currentYearResp}</h1>
                  <div className="tableFixHead">
                    <table id='tableMain'>
                        <thead>
                        <tr>{this.renderTableHeader(headerSection)}</tr>
                        </thead>
                        <tbody>
                        <tr>{this.renderTableHeader(headerSectionTotalValue)}</tr>
                        {this.renderTableData(project_report)}
                        {this.renderTableData(project_report_future)}
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
                        <tr>{this.renderTableHeader(headerForecastTotalValue)}</tr>
                        {this.renderTableData(forecast_months)}
                        {this.renderTableData(forecast_months_future)}
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

export default withAuth(MTD_Revenue);