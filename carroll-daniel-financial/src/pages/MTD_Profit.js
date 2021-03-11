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

//const now1 = new Date();
//const yearData = now1.getFullYear();
var currentQuarter = ''
var divisionName = '';


var backlogValueTotal = 0; var totalExpectedProfitTotal=0;
var earnedProfitYTDValueTotal=0; var totalForecastProfitTotal=0; var forecastMonthOne = 0; var forecastMonthTwo = 0;
var forecastMonthThree = 0; var forecastMonthFour = 0; var forecastMonthFive = 0; var forecastMonthSix = 0;
var forecastMonthSeven = 0; var forecastMonthEight = 0; var forecastMonthNine = 0; var forecastMonthTen = 0;
var forecastMonthEleven = 0; var forecastMonthTwelve = 0; var forecastMonthThirteen = 0; var forecastMonthFourteen = 0;
var forecastMonthFifthteen = 0; var forecastMonthSixteen = 0; var forecastMonthSeventeen = 0; var forecastMonthEighteen = 0;
var forecastMonthNineteen = 0; var forecastMonthTwenty = 0; var forecastMonthTwentyOne = 0; var forecastMonthTwentyTwo = 0;
var forecastMonthTwentyThree = 0; var forecastMonthTwentyFour = 0; var forecastMonthTwentyFive = 0;

var financialString = '';
var currentQuarterResp = '';
var currentYearResp = '';
var currentDateString = '';
var loopCount = 0;

class MTD_Profit extends Component{


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
        const { _id, job_name, dept_job, division, status, start_date, end_date, contract_amount, gross_margin_percent, hit_ratio, backlog, earned_revenue_YTD, 
          earned_revenue, bonded, quarter, year } = ProjectReport //destructuring
    
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
        const checkMonth = now.getMonth() === pastDate.getMonth() && now.getFullYear() === pastDate.getFullYear();
        var checkStartValue = startDate.getMonth() - now.getMonth() + 
          (12 * (startDate.getFullYear() - now.getFullYear()))
        var totalForecastProfit = '';
        var totalExpectedProfit = '';
        var grossMarginEarned = '';
        var expectedContractAmount = '';
        var currentBacklogValue = '';
        var futureRevenue = 0;
        var earnedRevenue = '';
        var burnOffSum = 0;
        var backlogValue = '';
        var totalMonths =  (pastDate.getFullYear() - startDate.getFullYear()) * 12 + (pastDate.getMonth() - startDate.getMonth() + 1);
        var CurrentMonthOfProject =  (now.getFullYear() - startDate.getFullYear()) * 12 + (now.getMonth() - startDate.getMonth() + 1);
        var converter = require('number-to-words');
        var profitCurrentYear = '';
        var futureProfit = 0;
        var newValue = converter.toWords(totalMonths);
        var earnedProfitYTDValue;
        if(status === 'Contract'){
          profit = (parseFloat(contract_amount) * (gross_margin_percent / 100));
          if((pastDate <= now && checkMonth === true) || (pastDate <= now)){
            totalForecastProfit = 0;
            profitCurrentYear = (parseFloat(earned_revenue_YTD) * (gross_margin_percent/100)) + (parseFloat(totalForecastProfit) * (gross_margin_percent/100));
            grossMarginEarned = (parseFloat(earned_revenue) * (gross_margin_percent/100));
            earnedRevenue = earned_revenue;
            backlogValue = backlog;
            expectedContractAmount = Math.round(parseFloat(earned_revenue) + parseFloat(backlog));
            //earnedProfitYTDValue = earned_revenue_YTD * (gross_margin_percent/100);
            if(quarter === '4'){
              earnedProfitYTDValue = 0;
              //totalExpectedRevenue = (parseFloat(contract_amount) - parseFloat(earned_revenue) + earnedRevenueYTDValue);
            }else if(quarter === '3'){
              earnedProfitYTDValue = earned_revenue_YTD * (gross_margin_percent/100);
              //totalExpectedRevenue = (parseFloat(contract_amount) - parseFloat(earned_revenue) + earnedRevenueYTDValue);
            }else if(quarter === '2'){
              earnedProfitYTDValue = earned_revenue_YTD * (gross_margin_percent/100);
              //totalExpectedRevenue = (parseFloat(contract_amount) - parseFloat(earned_revenue) + totalExpectedRevenue);
            }else if(quarter === '1'){
              earnedProfitYTDValue = earned_revenue_YTD * (gross_margin_percent/100);
              //totalExpectedRevenue = (parseFloat(contract_amount) - parseFloat(earned_revenue) + totalExpectedRevenue);
            }
            totalExpectedProfit =  parseFloat(totalForecastProfit) + parseFloat(earnedProfitYTDValue);
            
          }else {
            //totalForecastProfit = backlog * (gross_margin_percent/100);
            expectedContractAmount = Math.round(parseFloat(earned_revenue) + parseFloat(backlog));
            grossMarginEarned = (parseFloat(earned_revenue) * (gross_margin_percent/100));
            earnedRevenue = earned_revenue;
            backlogValue = parseFloat(contract_amount) - parseFloat(earned_revenue);
            //earnedProfitYTDValue = earned_revenue_YTD * (gross_margin_percent/100);
            if(quarter === '4'){
              earnedProfitYTDValue = 0;
              //totalExpectedRevenue = (parseFloat(contract_amount) - parseFloat(earned_revenue) + earnedRevenueYTDValue);
            }else if(quarter === '3'){
              earnedProfitYTDValue = earned_revenue_YTD * (gross_margin_percent/100);
              //totalExpectedRevenue = (parseFloat(contract_amount) - parseFloat(earned_revenue) + earnedRevenueYTDValue);
            }else if(quarter === '2'){
              earnedProfitYTDValue = earned_revenue_YTD * (gross_margin_percent/100);
              //totalExpectedRevenue = (parseFloat(contract_amount) - parseFloat(earned_revenue) + totalExpectedRevenue);
            }else if(quarter === '1'){
              earnedProfitYTDValue = earned_revenue_YTD * (gross_margin_percent/100);
              //totalExpectedRevenue = (parseFloat(contract_amount) - parseFloat(earned_revenue) + totalExpectedRevenue);
            }
            //totalExpectedProfit = parseFloat(totalForecastProfit) + parseFloat(earnedProfitYTDValue);
            var monthlyYearValue = 0;
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

            //const a = now;
            //const b = new Date(new Date().getFullYear(), 11, 31);
            //const c = b.getMonth() - a.getMonth() + 1;
            //var checkloop = 0;
            //var numOfLoops = 0;
            for (var k=0; k < global.burnOffChart.length; k++) {
              if(k >= CurrentMonthOfProject){
                var valueFound = global.burnOffChart[k][newValue];
                var monthlyValue =  (backlogValue * valueFound) / burnOffSum;
                if(checkloop <= loopCount){
                  monthlyYearValue += monthlyValue;
                  checkloop += 1;
                }
                /*if(checkloop > c  && numOfLoops < 12){
                  numOfLoops += 1;
                  futureRevenue += monthlyValue;
                }*/
              }
            }

            totalForecastProfit = monthlyYearValue * (gross_margin_percent/100) ? monthlyYearValue * (gross_margin_percent/100) : 0;
            totalExpectedProfit = parseFloat(totalForecastProfit) + parseFloat(earnedProfitYTDValue);
            profitCurrentYear = (parseFloat(totalExpectedProfit) * (gross_margin_percent/100));
            futureProfit = parseFloat(futureRevenue) * (gross_margin_percent/100);
        } 
      }else{   
          grossMarginEarned = 0;
          earnedRevenue =0;
          backlogValue = (parseFloat(contract_amount) * (parseInt(hit_ratio)/100));
          earnedProfitYTDValue = 0;
          expectedContractAmount = (parseFloat(contract_amount) * (parseInt(hit_ratio)/100));
          currentBacklogValue = expectedContractAmount;
          futureRevenue = currentBacklogValue;
          futureProfit = parseFloat(futureRevenue) * (gross_margin_percent/100);
          profit = futureProfit;
          totalForecastProfit = ((parseFloat(contract_amount) * (parseInt(hit_ratio)/100)) - earned_revenue) * (gross_margin_percent/100);
          totalExpectedProfit = totalForecastProfit + earnedProfitYTDValue;
        }

        backlogValueTotal += parseFloat(backlogValue);
        totalExpectedProfitTotal += parseFloat(totalExpectedProfit);
        earnedProfitYTDValueTotal += parseFloat(earnedProfitYTDValue);
        totalForecastProfitTotal += parseFloat(totalForecastProfit);

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
              <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{'$' + Math.round(parseFloat(totalExpectedProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
              <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{'$' + Math.round(parseFloat(earnedProfitYTDValue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
              <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{'$' + Math.round(parseFloat(totalForecastProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
           </tr>
        )}
       })
      }else if(value === 'project_report_future'){
        return this.state.ProjectReportData.map((ProjectReport, index) => {
          const { _id, job_name, dept_job, division, status, start_date, end_date, contract_amount, gross_margin_percent, hit_ratio, backlog, earned_revenue_YTD, 
            earned_revenue, bonded, quarter, year } = ProjectReport //destructuring
      
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
          const checkMonth = now.getMonth() === pastDate.getMonth() && now.getFullYear() === pastDate.getFullYear();
          var totalForecastProfit = '';
          var totalExpectedProfit = '';
          var grossMarginEarned = '';
          var expectedContractAmount = '';
          var currentBacklogValue = '';
          var futureRevenue = 0;
          var earnedRevenue = '';
          var burnOffSum = 0;
          var backlogValue = '';
          var checkStartValue = startDate.getMonth() - now.getMonth() + 
            (12 * (startDate.getFullYear() - now.getFullYear()))
          var totalMonths =  (pastDate.getFullYear() - startDate.getFullYear()) * 12 + (pastDate.getMonth() - startDate.getMonth() + 1);
          var CurrentMonthOfProject =  (now.getFullYear() - startDate.getFullYear()) * 12 + (now.getMonth() - startDate.getMonth() + 1);
          var converter = require('number-to-words');
          var profitCurrentYear = '';
          var futureProfit = 0;
          var newValue = converter.toWords(totalMonths);
          var earnedProfitYTDValue;
          var forecastDataProjected = 0;

          if(status === 'Contract'){
            profit = (parseFloat(contract_amount) * (gross_margin_percent / 100));
            if(pastDate < now && checkMonth === false){
              totalForecastProfit = 0;
              profitCurrentYear = (parseFloat(earned_revenue_YTD) * (gross_margin_percent/100)) + (parseFloat(totalForecastProfit) * (gross_margin_percent/100));
              grossMarginEarned = (parseFloat(earned_revenue) * (gross_margin_percent/100));
              earnedRevenue = earned_revenue;
              backlogValue = backlog;
              expectedContractAmount = Math.round(parseFloat(earned_revenue) + parseFloat(backlog));
              earnedProfitYTDValue = earned_revenue_YTD * (gross_margin_percent/100);
              totalExpectedProfit =  parseFloat(totalForecastProfit) + parseFloat(earnedProfitYTDValue);
            }else {
              totalForecastProfit = backlog * (gross_margin_percent/100);
              expectedContractAmount = Math.round(parseFloat(earned_revenue) + parseFloat(backlog));
              grossMarginEarned = (parseFloat(earned_revenue) * (gross_margin_percent/100));
              earnedRevenue = earned_revenue;
              backlogValue = backlog;
              earnedProfitYTDValue = earned_revenue_YTD * (gross_margin_percent/100);
              totalExpectedProfit = parseFloat(totalForecastProfit) + parseFloat(earnedProfitYTDValue);
              var monthlyYearValue = 0;
              for(var j=0; j < global.burnOffChart.length; j++){
                if(j >= CurrentMonthOfProject - 1){
                    var obj = global.burnOffChart[j][newValue]
                    burnOffSum += obj;
                }
    
              }
  
              const a = now;
              const b = new Date(new Date().getFullYear(), 11, 31);
              const c = b.getMonth() - a.getMonth() + 1;
              var checkloop = 0;
              var numOfLoops = 0;
              for (var k=0; k < global.burnOffChart.length; k++) {
                if(k >= CurrentMonthOfProject - 1){
                  var valueFound = global.burnOffChart[k][newValue];
                  var monthlyValue =  (backlogValue * valueFound) / burnOffSum;
                  checkloop += 1;
                  if(checkloop <= c){
                    monthlyYearValue += monthlyValue;
                  }
                  if(checkloop > c  && numOfLoops < 12){
                    numOfLoops += 1;
                    futureRevenue += monthlyValue;
                  }
                }
              }
  
              profitCurrentYear = (parseFloat(totalExpectedProfit) * (gross_margin_percent/100));
              futureProfit = parseFloat(futureRevenue) * (gross_margin_percent/100);
          } 
        }else{   

          for(var jk=0; jk < global.burnOffChart.length; jk++){
            if(jk >= CurrentMonthOfProject && jk < totalMonths){
                var objProjected = global.burnOffChart[jk][newValue]
                burnOffSum += objProjected;
            }
  
          }

          var checkloopProjected = 1;

          if(startDate > now){
            for(var il=1; il < checkStartValue; il++){
              checkloopProjected += 1;
            }
          }

          for (var kj=0; kj < global.burnOffChart.length; kj++) {
            if(kj >= CurrentMonthOfProject){
              var valueFoundProjected = global.burnOffChart[kj][newValue];
              var monthlyValueProjected =  (((parseFloat(contract_amount) * (parseInt(hit_ratio)/100))) * valueFoundProjected) / burnOffSum;
              if(checkloopProjected <= loopCount){
                forecastDataProjected += monthlyValueProjected;
                checkloopProjected += 1;
              }
  
            }
          }


            grossMarginEarned = 0;
            earnedRevenue =0;
            backlogValue = (parseFloat(contract_amount) * (parseInt(hit_ratio)/100));
            earnedProfitYTDValue = 0;
            expectedContractAmount = (parseFloat(contract_amount) * (parseInt(hit_ratio)/100));
            currentBacklogValue = expectedContractAmount;
            futureRevenue = currentBacklogValue;
            futureProfit = parseFloat(futureRevenue) * (gross_margin_percent/100);
            profit = futureProfit;
            totalForecastProfit = forecastDataProjected ? forecastDataProjected * (gross_margin_percent/100): 0// * (gross_margin_percent/100) : 0;
            totalExpectedProfit = totalForecastProfit + earnedProfitYTDValue;
          }
  
          backlogValueTotal += parseFloat(backlogValue);
          totalExpectedProfitTotal += parseFloat(totalExpectedProfit);
          earnedProfitYTDValueTotal += parseFloat(earnedProfitYTDValue);
          totalForecastProfitTotal += parseFloat(totalForecastProfit);
  
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
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{'$' + Math.round(parseFloat(backlogValue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{'$' + Math.round(parseFloat(totalExpectedProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{'$' + Math.round(parseFloat(earnedProfitYTDValue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{'$' + Math.round(parseFloat(totalForecastProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
             </tr>
          )}
         })
        }
      
      else  if(value === 'forecast_months'){
        return this.state.ProjectForecastData.map((FY19Plan, index) => {
          const { _id, end_date, start_date,quarter,year,earned_revenue, division, dept_job, job_name, status, contract_amount, hit_ratio, gross_margin_percent } = FY19Plan //destructuring
      
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
          var converter = require('number-to-words');
          var newValue = converter.toWords(totalMonths);
          var forecastData = [];
          var forecastDataSum = 0;
          var backlogValue = parseFloat(contract_amount) - parseFloat(earned_revenue);;
          var backlogFutureValue = (parseFloat(contract_amount) * (parseInt(hit_ratio)/100));
          var burnOffSum = 0;
          var valueFound = 0;
          var monthlyValue = 0;
          var projectLength = 0;
          var checkStartValue = startDate.getMonth() - now.getMonth() + 
          (12 * (startDate.getFullYear() - now.getFullYear()))
          var obj = 0;
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
                    monthlyValue =  ((backlogValue * valueFound) / burnOffSum) * (gross_margin_percent/100);
                    forecastData.push(Math.round(parseFloat(monthlyValue)));
                    forecastDataSum += monthlyValue;
              }
            }
          } 
        }

          if(parseInt(forecastDataSum) > 0){
          
            forecastMonthOne += parseFloat(forecastData[0]); forecastMonthTwo += parseFloat(forecastData[1]); forecastMonthThree += parseFloat(forecastData[2]); forecastMonthFour += parseFloat(forecastData[3]);
            forecastMonthFive += parseFloat(forecastData[4]); forecastMonthSix += parseFloat(forecastData[5]); forecastMonthSeven += parseFloat(forecastData[6]); forecastMonthEight += parseFloat(forecastData[7]);
            forecastMonthNine += parseFloat(forecastData[8]); forecastMonthTen += parseFloat(forecastData[9]); forecastMonthEleven += parseFloat(forecastData[10]); forecastMonthTwelve += parseFloat(forecastData[11]);
            forecastMonthThirteen += parseFloat(forecastData[12]); forecastMonthFourteen += parseFloat(forecastData[13]); forecastMonthFifthteen += parseFloat(forecastData[14]); forecastMonthSixteen += parseFloat(forecastData[15]);
            forecastMonthSeventeen += parseFloat(forecastData[16]); forecastMonthEighteen += parseFloat(forecastData[17]); forecastMonthNineteen += parseFloat(forecastData[18]); forecastMonthTwenty += parseFloat(forecastData[19]);
            forecastMonthTwentyOne += parseFloat(forecastData[20]); forecastMonthTwentyTwo += parseFloat(forecastData[21]); forecastMonthTwentyThree += parseFloat(forecastData[22]); forecastMonthTwentyFour += parseFloat(forecastData[23]);

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
        }else  if(value === 'forecast_months_future'){
          return this.state.ProjectForecastData.map((FY19Plan, index) => {
            const { _id, end_date, start_date, backlog, division, quarter, year, dept_job, job_name, status, contract_amount, hit_ratio, gross_margin_percent } = FY19Plan //destructuring    

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
            var converter = require('number-to-words');
            var newValue = converter.toWords(totalMonths);
            var forecastData = [];
            var forecastDataSum = 0;
            var backlogValue = backlog;
            var backlogFutureValue = (parseFloat(contract_amount) * (parseInt(hit_ratio)/100));
            var burnOffSum = 0;
            var valueFound = 0;
            var monthlyValue = 0;
            var projectLength = 0;
            var checkStartValue = startDate.getMonth() - now.getMonth() + 
            (12 * (startDate.getFullYear() - now.getFullYear()))
            var obj = 0;
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
                      monthlyValue =  ((backlogValue * valueFound) / burnOffSum) * (gross_margin_percent/100);
                      forecastData.push(parseFloat(monthlyValue));
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

            //var numMonths = 0;
            //var num = (startDate.getFullYear() - now.getFullYear()) * 12 + (startDate.getMonth() - now.getMonth())
            //numMonths = num;
            //check to see how many months til start date and skip until project starts
            //for (var m=0; m < global.burnOffChart.length; m++) {
              /*if(numMonths > 0){
                forecastData.push(0);
                forecastDataSum += 0
                --numMonths;
              }else */
              //if((parseInt(m) - parseInt(num)) >= CurrentMonthOfProject - 1){
            for (var v=0; v < global.burnOffChart.length; v++) {
              if(v >= CurrentMonthOfProject && projectLength < loopCount){
                valueFound = global.burnOffChart[v][newValue];
                monthlyValue =  ((backlogFutureValue * valueFound) / burnOffSum) * (gross_margin_percent/100);
                forecastData.push(parseFloat(monthlyValue));
                forecastDataSum += monthlyValue;
              }
            }
          }
  
  
            if(parseInt(forecastDataSum) > 0){
            
              forecastMonthOne += parseFloat(forecastData[0]); forecastMonthTwo += parseFloat(forecastData[1]); forecastMonthThree += parseFloat(forecastData[2]); forecastMonthFour += parseFloat(forecastData[3]);
              forecastMonthFive += parseFloat(forecastData[4]); forecastMonthSix += parseFloat(forecastData[5]); forecastMonthSeven += parseFloat(forecastData[6]); forecastMonthEight += parseFloat(forecastData[7]);
              forecastMonthNine += parseFloat(forecastData[8]); forecastMonthTen += parseFloat(forecastData[9]); forecastMonthEleven += parseFloat(forecastData[10]); forecastMonthTwelve += parseFloat(forecastData[11]);
              forecastMonthThirteen += parseFloat(forecastData[12]); forecastMonthFourteen += parseFloat(forecastData[13]); forecastMonthFifthteen += parseFloat(forecastData[14]); forecastMonthSixteen += parseFloat(forecastData[15]);
              forecastMonthSeventeen += parseFloat(forecastData[16]); forecastMonthEighteen += parseFloat(forecastData[17]); forecastMonthNineteen += parseFloat(forecastData[18]); forecastMonthTwenty += parseFloat(forecastData[19]);
              forecastMonthTwentyOne += parseFloat(forecastData[20]); forecastMonthTwentyTwo += parseFloat(forecastData[21]); forecastMonthTwentyThree += parseFloat(forecastData[22]); forecastMonthTwentyFour += parseFloat(forecastData[23]);
              forecastMonthTwentyFive += parseFloat(forecastData[24]); 
  
        //if(status !== 'Contract' && currentQuarterResp === quarter && currentYearResp === year){
          let childrenDataFuture = []
              for (let a = 0; a < loopCount; a++) {
                childrenDataFuture.push(<td key={a} style={{ border: '1px solid #005A8B', textAlign: 'right', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastData[a] ? Math.round(forecastData[a]): 0).toLocaleString(undefined, {maximumFractionDigits:2})}</td>)
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
             <th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>Profit YTD & Future</th>
             <th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>Profit YTD</th>
             <th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>Forecast Profit</th>
           </>
 }if(value === 'headerSectionTotals'){
  return <><th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
           <th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>Project Name</th>
           <th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>Job Number</th>
           <th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>Division</th>
           <th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>Type</th>
           <th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>Bonded</th>
           <th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>Contract Amount</th>
           <th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>Profit</th>
           <th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>Profit Margin</th>
           <th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>Hit Ratio</th>
           <th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>Backlog</th>
           <th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>Total Expected Profit</th>
           <th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>Profit YTD</th>
           <th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>Forecast Profit</th>
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
               <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
               <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
               <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
               <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
               <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{'$' + Math.round(parseFloat(backlogValueTotal)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
              <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{'$' + Math.round(parseFloat(totalExpectedProfitTotal)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
              <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{'$' + Math.round(parseFloat(earnedProfitYTDValueTotal)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
              <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{'$' + Math.round(parseFloat(totalForecastProfitTotal)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
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
      childrenDataContract.push(<th key={15} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthFifthteen ? Math.round(forecastMonthFifthteen) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
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
      childrenDataContract.push(<th key={15} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthFifthteen ? Math.round(forecastMonthFifthteen) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
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
      childrenDataContract.push(<th key={15} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthFifthteen ? Math.round(forecastMonthFifthteen) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
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
      childrenDataContract.push(<th key={15} style={{ textAlign: 'right', border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif'}}>{'$' + (forecastMonthFifthteen ? Math.round(forecastMonthFifthteen) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>)
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
      const project_report_future = "project_report_future"
      const forecast_months_future = "forecast_months_future"
      const headerSectionTotalValue = "headerSectionTotalValue"
      const forecastMonthSection = "forecastMonthSection"
      const forecast_months = "forecast_months"
      const project_report = "project_report"
      const view = this.state.userRole === 'Writer';
      const loadedData = this.state.data;
      const headerForecastTotalValue = "headerForecastTotalValue";

      /*var monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
      ];*/

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

export default withAuth(MTD_Profit);
