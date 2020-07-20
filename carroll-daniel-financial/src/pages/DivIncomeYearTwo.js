import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AuthHelperMethods from '../services/AuthHelperMethods';
import "react-table/react-table.css";
import withAuth from '../services/withAuth';
import axios from 'axios' 
import '../global'
import * as jwt_decode from 'jwt-decode';
import { Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'

var expectedRevenueABNC1 = 0; var expectedRevenueABNC2 = 0; var expectedRevenueABNC3 = 0; var expectedRevenueABNC4 = 0; var expectedRevenueABNC5 = 0;
var expectedRevenueABNC6 = 0; var expectedRevenueABNC7 = 0; var expectedRevenueABNC11 = 0; var expectedRevenueABNC00 = 0; var preexpectedRevenueABNC1 = 0;
var preexpectedRevenueABNC2 = 0; var preexpectedRevenueABNC3 = 0; var preexpectedRevenueABNC4 = 0; var preexpectedRevenueABNC5 = 0; var preexpectedRevenueABNC6 = 0;
var preexpectedRevenueABNC7 = 0; var preexpectedRevenueABNC11 = 0; var preexpectedRevenueABNC00 = 0; var expectedRevenueFA1 = 0; var expectedRevenueFA2 = 0;
var expectedRevenueFA3 = 0; var expectedRevenueFA4 = 0; var expectedRevenueFA5 = 0; var expectedRevenueFA6 = 0; var expectedRevenueFA7 = 0; var expectedRevenueFA11 = 0;
var expectedRevenueFA00 = 0; var preexpectedRevenueFA1 = 0; var preexpectedRevenueFA2 = 0; var preexpectedRevenueFA3 = 0; var preexpectedRevenueFA4 = 0; var preexpectedRevenueFA5 = 0;
var preexpectedRevenueFA6 = 0; var preexpectedRevenueFA7 = 0; var preexpectedRevenueFA11 = 0; var preexpectedRevenueFA00 = 0; var expectedProfitABNC1 = 0; var expectedProfitABNC2 = 0;
var expectedProfitABNC3 = 0; var expectedProfitABNC4 = 0; var expectedProfitABNC5 = 0; var expectedProfitABNC6 = 0; var expectedProfitABNC7 = 0; var expectedProfitABNC11 = 0;
var expectedProfitABNC00 = 0; var preexpectedProfitABNC1 = 0; var preexpectedProfitABNC2 = 0; var preexpectedProfitABNC3 = 0; var preexpectedProfitABNC4 = 0; var preexpectedProfitABNC5 = 0;
var preexpectedProfitABNC6 = 0; var preexpectedProfitABNC7 = 0; var preexpectedProfitABNC11 = 0; var preexpectedProfitABNC00 = 0; var expectedProfitFA1 = 0; var expectedProfitFA2 = 0;
var expectedProfitFA3 = 0; var expectedProfitFA4 = 0; var expectedProfitFA5 = 0; var expectedProfitFA6 = 0; var expectedProfitFA7 = 0; var expectedProfitFA11 = 0; var expectedProfitFA00 = 0;
var preexpectedProfitFA1 = 0; var preexpectedProfitFA2 = 0; var preexpectedProfitFA3 = 0; var preexpectedProfitFA4 = 0; var preexpectedProfitFA5 = 0; var preexpectedProfitFA6 = 0;
var preexpectedProfitFA7 = 0; var preexpectedProfitFA11 = 0; var preexpectedProfitFA00 = 0; var expectedRevenue1 = 0; var expectedRevenue2 = 0; var expectedRevenue3 = 0; var expectedRevenue4 = 0;
var expectedRevenue5 = 0; var expectedRevenue6 = 0; var expectedRevenue7 = 0; var expectedRevenue11 = 0; var expectedRevenue00 = 0; var expectedProfit1 = 0; var expectedProfit2 = 0; var expectedProfit3 = 0;
var expectedProfit4 = 0; var expectedProfit5 = 0; var expectedProfit6 = 0; var expectedProfit7 = 0; var expectedProfit11 = 0; var expectedProfit00 = 0; var preexpectedRevenue1 = 0;
var preexpectedRevenue2 = 0; var preexpectedRevenue3 = 0; var preexpectedRevenue4 = 0; var preexpectedRevenue5 = 0; var preexpectedRevenue6 = 0; var preexpectedRevenue7 = 0;var preexpectedRevenue11 = 0;
var preexpectedRevenue00 = 0; var preexpectedProfit1 = 0; var preexpectedProfit2 = 0; var preexpectedProfit3 = 0; var preexpectedProfit4 = 0; var preexpectedProfit5 = 0; var preexpectedProfit6 = 0;
var preexpectedProfit7 = 0; var preexpectedProfit11 = 0; var preexpectedProfit00 = 0; var revenueTotal = 0; var prerevenueTotal = 0; var revenueABNCTotal = 0; var prerevenueABNCTotal = 0;
var revenueFATotal = 0; var prerevenueFATotal = 0; var revenueFinalTotal = 0; var prerevenueFinalTotal = 0; var jobProfitTotal = 0; var prejobProfitTotal = 0; var jobProfitABNCTotal = 0;
var prejobProfitABNCTotal = 0; var jobProfitFATotal = 0; var prejobProfitFATotal = 0; var jobProfitFinalTotal = 0; var prevJobProfitFinalTotal = 0; var divOneOverhead = 0; var divProfOneOverhead = 0;
var predivProfOneOverhead = 0; var divTwoOverhead = 0; var divProfTwoOverhead = 0; var predivProfTwoOverhead = 0; var divThreeOverhead = 0; var divProfThreeOverhead = 0; var predivProfThreeOverhead = 0;
var divFourOverhead = 0; var divProfFourOverhead = 0; var predivProfFourOverhead = 0; var divFiveOverhead = 0; var divProfFiveOverhead = 0; var predivProfFiveOverhead = 0; var divSixOverhead = 0;
var divProfSixOverhead = 0; var predivProfSixOverhead = 0; var divSevenOverhead = 0; var divProfSevenOverhead = 0; var predivProfSevenOverhead = 0; var divElevenOverhead = 0; var divProfElevenOverhead = 0;
var predivProfElevenOverhead = 0; var divZeroOverhead = 0; var divProfZeroOverhead = 0; var predivProfZeroOverhead = 0; var effDiv01 = 0; var preeffDiv01 = 0; var effDiv02 = 0; var preeffDiv02 = 0;
var effDiv03 = 0; var preeffDiv03 = 0; var effDiv04 = 0; var preeffDiv04 = 0; var effDiv05 = 0; var preeffDiv05 = 0; var effDiv06 = 0; var preeffDiv06 = 0; var effDiv07 = 0; var preeffDiv07 = 0;
var effDiv11 = 0; var preeffDiv11 = 0; var effDiv00 = 0; var preeffDiv00; var divDeferrCompOverhead = 0; var divInvestCompOverhead = 0; var predivInvestCompOverhead = 0; var divRangeOverhead = 0;
var predivOneOverhead = 0; var predivTwoOverhead = 0; var predivThreeOverhead = 0; var predivFourOverhead = 0; var predivFiveOverhead = 0; var predivSixOverhead = 0; var predivSevenOverhead = 0;
var predivElevenOverhead = 0; var predivZeroOverhead = 0; var predivDeferrCompOverhead = 0; var predivRangeOverhead = 0; var fiftyPerRev = 0; var prefiftyPerRev = 0; var profitSummary = 0;
var preprofitSummary = 0; var netCostCorportate = 0; var prenetCostCorportate = 0; var netCostConsolidated = 0; var prenetCostConsolidated = 0; var netGACostDiv01 = 0; var prenetGACostDiv01 = 0;
var netGACostDiv02 = 0; var prenetGACostDiv02 = 0; var netGACostDiv03 = 0; var prenetGACostDiv03 = 0; var netGACostDiv04 = 0; var prenetGACostDiv04 = 0; var netGACostDiv05 = 0; var prenetGACostDiv05 = 0;
var netGACostDiv06 = 0; var prenetGACostDiv06 = 0; var netGACostDiv07 = 0; var prenetGACostDiv07 = 0; var netGACostDiv11 = 0; var prenetGACostDiv11 = 0; var effDivTotal = 0; var preeffDivTotal = 0;
var netGACostDiv00 = 0; var prenetGACostDiv00 = 0; var IncomeOperDiv01 = 0; var preIncomeOperDiv01 = 0; var IncomeOperDiv02 = 0; var preIncomeOperDiv02 = 0; var IncomeOperDiv03 = 0; var preIncomeOperDiv03 = 0;
var IncomeOperDiv04 = 0; var preIncomeOperDiv04 = 0; var IncomeOperDiv05 = 0; var preIncomeOperDiv05 = 0; var IncomeOperDiv06 = 0; var preIncomeOperDiv06 = 0; var IncomeOperDiv07 = 0; var preIncomeOperDiv07 = 0;
var IncomeOperDiv11 = 0; var preIncomeOperDiv11 = 0; var IncomeOperDiv00 = 0; var preIncomeOperDiv00 = 0; var netGACorporateCost = 0; var prenetGACorporateCost = 0; var netGAConsolidatedCost = 0;
var prenetGAConsolidatedCost = 0; var ma_revenue_1 = 0; var ma_profit_1 = 0; var ma_revenue_2 = 0; var ma_profit_2 = 0; var ma_revenue_3 = 0; var ma_profit_3 = 0; var ma_revenue_4 = 0;
var ma_profit_4 = 0; var ma_revenue_5 = 0; var ma_profit_5 = 0; var ma_revenue_6 = 0; var ma_profit_6 = 0; var ma_revenue_7 = 0; var ma_profit_7 = 0; var ma_revenue_11 = 0; var ma_profit_11 = 0;
var ma_revenue_00 = 0; var ma_profit_00 = 0; var prev_ma_revenue_1 = 0; var prev_ma_profit_1 = 0; var prev_ma_revenue_2 = 0; var prev_ma_profit_2 = 0; var prev_ma_revenue_3 = 0; var prev_ma_profit_3 = 0;
var prev_ma_revenue_4 = 0; var prev_ma_profit_4 = 0; var prev_ma_revenue_5 = 0; var prev_ma_profit_5 = 0; var prev_ma_revenue_6 = 0; var prev_ma_profit_6 = 0; var prev_ma_revenue_7 = 0;
var prev_ma_profit_7 = 0;var prev_ma_revenue_11 = 0; var prev_ma_profit_11 = 0; var prev_ma_revenue_00 = 0; var prev_ma_profit_00 = 0; var expectedFutureRev = 0; var expectedFutureProf = 0;
var expectedFutureBack = 0; var profitTotal = 0; var expectedBacklog = 0; var expectedConAmount = 0;
var currentQuarterResp = '';
var currentYearResp = '';
var previousQuarterResp = '';
var previousYearResp = '';
var currentQuarter = '';
var prevcurrentQuarter = '';
var currentDateString = '';
var currentYearLabel = '';
var currentYearLabelTwo = '';
var financialString = '';
var currentMonth = 0;
var totalJobProfitOne = 0;
var pretotalJobProfitOne = 0;
var totalJobProfitTwo = 0;
var pretotalJobProfitTwo = 0;
var totalJobProfitThree = 0;
var pretotalJobProfitThree = 0;
var totalJobProfitFour = 0;
var pretotalJobProfitFour = 0;
var totalJobProfitFive = 0;
var pretotalJobProfitFive = 0;
var totalJobProfitSix = 0;
var pretotalJobProfitSix = 0;
var totalJobProfitSeven = 0;
var pretotalJobProfitSeven = 0;
var totalJobProfitEleven = 0;
var pretotalJobProfitEleven = 0;
var totalJobProfitZero = 0;
var pretotalJobProfitZero = 0;
var totalJobProfitConsolidated = 0;
var pretotalJobProfitConsolidated = 0;

class DivIncomeYearTwo extends Component{


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
      OverHeadData: [],
      ManagementAdjData: [],
      userRole: '',
      dataLoadCheck: null
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
          previousYearResp = parseInt(currentYearResp) - 1;
          prevcurrentQuarter = new Date('12/31/' + previousYearResp)
          currentMonth = 3;
          currentDateString = 'March 31'
          currentYearLabel = currentYearResp
          currentYearLabelTwo = parseInt(currentYearResp) + 1;
          previousQuarterResp = '4';
        }else if(currentQuarterResp === '2'){
          currentQuarter = new Date('6/30/' + currentYearResp)
          prevcurrentQuarter = new Date('3/31/' + currentYearResp)
          currentMonth = 6;
          currentDateString = 'June 30'
          currentYearLabel = currentYearResp
          currentYearLabelTwo = parseInt(currentYearResp) + 1;
          previousQuarterResp = '1';
          previousYearResp = currentYearResp;
        }else if(currentQuarterResp === '3'){
          currentQuarter = new Date('9/30/' + currentYearResp)
          prevcurrentQuarter = new Date('6/30/' + currentYearResp)
          currentMonth = 9;
          currentDateString = 'September 30'
          currentYearLabel = currentYearResp
          currentYearLabelTwo = parseInt(currentYearResp) + 1;
          previousQuarterResp = '2';
          previousYearResp = currentYearResp;
        }else if(currentQuarterResp === '4'){
          currentQuarter = new Date('12/31/' + currentYearResp)
          prevcurrentQuarter = new Date('9/30/' + currentYearResp)
          currentMonth = 12;
          currentDateString = 'December 31'
          currentYearLabel = parseInt(currentYearResp) + 1;
          currentYearLabelTwo = parseInt(currentYearResp) + 2;
          previousQuarterResp = '3';
          previousYearResp = currentYearResp;
        }
        var decoded = jwt_decode(localStorage.getItem('data-token'));  
        userInfo.forEach(function (item){
        const {  useremail, userdivision } = item //destructuring
  
        /*if(decoded.sub === useremail){
          if(userdivision === "all"){
            financialString = "http://localhost:8081/api/financialResultsData/";
          }else{
            financialString = "http://localhost:8081/api/financialResultsData/division/" + userdivision
          }
        } */ 
    })

    axios.all([
      axios.get(
        "https://rest-site-locations-1594736464770.azurewebsites.net/api/financialResultsData",
        {headers: {
            "Authorization" : AuthStr,
            "Content-Type" : "application/json"
          }
        }
      ),
      axios.get(
        "https://rest-site-locations-1594736464770.azurewebsites.net/api/financialActualBudgetData",
        {headers: {
            "Authorization" : AuthStr,
            "Content-Type" : "application/json"
          }
        }
      ),
      axios.get(
        "https://rest-site-locations-1594736464770.azurewebsites.net/api/financialManagementAdjustmentData",
        {headers: {
            "Authorization" : AuthStr,
            "Content-Type" : "application/json"
          }
        }
      )]).then(axios.spread((response, response2, response3) => {
        var dataValue = response['data'];
        var dataValueBudgetActual = response2['data']
        var dataManagementAdjustment = response3['data']
        var decoded = jwt_decode(localStorage.getItem('data-token'));
        this.setState({ ProjectReportData: dataValue});
        this.setState({ OverHeadData: dataValueBudgetActual});
        this.setState({ ManagementAdjData: dataManagementAdjustment})
        this.setState({ userRole: decoded.roles})
        this.setState({ dataLoadCheck: dataValue });
        //this.retrieveManagementData(dataManagementAdjustment,false,previousQuarterResp,previousYearResp)
  
    })).catch(error => {
      console.log(error)
    })

      }))    
}

renderTableData(value) {
if(value === 'project_report'){
  //management data for div income year one and year two from financial-management-adjustment table
  this.state.ManagementAdjData.map((ManagementAdjData, index) => {
    const {  year, quarter, ma_revenue, ma_profit, division } = ManagementAdjData //destructuring
  
      if(parseInt(2021) === parseInt(year) && parseInt(quarter) === parseInt(currentQuarterResp)){
        if(division === '1'){
          ma_revenue_1 = parseFloat(ma_revenue);
          ma_profit_1 = parseFloat(ma_profit);
        }else if(division === '2'){
          ma_revenue_2 = parseFloat(ma_revenue);
          ma_profit_2 = parseFloat(ma_profit);
        }else if(division === '3'){
          ma_revenue_3 = parseFloat(ma_revenue);
          ma_profit_3 = parseFloat(ma_profit);
        }else if(division === '4'){
          ma_revenue_4 = parseFloat(ma_revenue);
          ma_profit_4 = parseFloat(ma_profit);
        }else if(division === '5'){
          ma_revenue_5 = parseFloat(ma_revenue);
          ma_profit_5 = parseFloat(ma_profit);
        }else if(division === '6'){
          ma_revenue_6 = parseFloat(ma_revenue);
          ma_profit_6 = parseFloat(ma_profit);
        }else if(division === '7'){
          ma_revenue_7 = parseFloat(ma_revenue);
          ma_profit_7 = parseFloat(ma_profit);
        }else if(division === '11'){
          ma_revenue_11 = parseFloat(ma_revenue);
          ma_profit_11 = parseFloat(ma_profit);
        }else if(division === '00'){
          ma_revenue_00 = parseFloat(ma_revenue);
          ma_profit_00 = parseFloat(ma_profit);
        }
      }else if(parseInt(quarter) === parseInt(4) && parseInt(year) === parseInt(2020)){
        if(division === '1'){
          prev_ma_revenue_1 = parseFloat(ma_revenue);
          prev_ma_profit_1 = parseFloat(ma_profit);
        }else if(division === '2'){
          prev_ma_revenue_2 = parseFloat(ma_revenue);
          prev_ma_profit_2 = parseFloat(ma_profit);
        }else if(division === '3'){
          prev_ma_revenue_3 = parseFloat(ma_revenue);
          prev_ma_profit_3 = parseFloat(ma_profit);
        }else if(division === '4'){
          prev_ma_revenue_4 = parseFloat(ma_revenue);
          prev_ma_profit_4 = parseFloat(ma_profit);
        }else if(division === '5'){
          prev_ma_revenue_5 = parseFloat(ma_revenue);
          prev_ma_profit_5 = parseFloat(ma_profit);
        }else if(division === '6'){
          prev_ma_revenue_6 = parseFloat(ma_revenue);
          prev_ma_profit_6 = parseFloat(ma_profit);
        }else if(division === '7'){
          prev_ma_revenue_7 = parseFloat(ma_revenue);
          prev_ma_profit_7 = parseFloat(ma_profit);
        }else if(division === '11'){
          prev_ma_revenue_11 = parseFloat(ma_revenue);
          prev_ma_profit_11 = parseFloat(ma_profit);
        }else if(division === '00'){
          prev_ma_revenue_00 = parseFloat(ma_revenue);
          prev_ma_profit_00 = parseFloat(ma_profit);
        }
      }
  })


  //this is the data for financial-results table data
  this.state.ProjectReportData.map((FY19Plan, index) => {
    const {  job_name, division, status, year, quarter, contract_amount, gross_margin_percent, hit_ratio, earned_revenue_YTD, 
          end_date, backlog, earned_revenue, start_date } = FY19Plan //destructuring
    
    const profit = (parseInt(contract_amount) * gross_margin_percent) / 100;
    const now = new Date(currentQuarter);
    const now2 = new Date(prevcurrentQuarter);
    const pastDate = new Date(end_date);
    const startDate = new Date(start_date);
    const checkMonth = now.getMonth() === pastDate.getMonth() && now.getFullYear() === pastDate.getFullYear();
    const pastcheckMonth = now2.getMonth() === pastDate.getMonth() && now2.getFullYear() === pastDate.getFullYear();
    var totalForcastRevenue = '';
    var pretotalForcastRevenue = '';
    var totalExpectedRevenue = '';
    var pretotalExpectedRevenue = '';
    var expectedContractAmount = '';
    var preexpectedContractAmount = '';
    var profitCurrentYear = '';
    var preprofitCurrentYear = '';
    var totalMonths =  (pastDate.getFullYear() - startDate.getFullYear()) * 12 + (pastDate.getMonth() - startDate.getMonth() + 1);
    var checkStartValue = startDate.getMonth() - now.getMonth() + 
          (12 * (startDate.getFullYear() - now.getFullYear()))
    var checkStartValuePast = startDate.getMonth() - now2.getMonth() + 
          (12 * (startDate.getFullYear() - now2.getFullYear()))
    var currentBacklogValue = '';
    var CurrentMonthOfProject =  (now.getFullYear() - startDate.getFullYear()) * 12 + (now.getMonth() - startDate.getMonth() + 1);
    var CurrentMonthOfProjectPast =  (now2.getFullYear() - startDate.getFullYear()) * 12 + (now2.getMonth() - startDate.getMonth() + 1);
    var backlogValue = parseFloat(contract_amount) - parseFloat(earned_revenue);
    var futureRevenue = 0;
    var prefutureRevenue = 0;
    var burnOffSum = 0;
    var preburnOffSum = 0;
    var futureProfit = 0;
    var futureBacklog = 0;
    var valueCheck = 0;
    var converter = require('number-to-words');
    var newValue = converter.toWords(totalMonths);
    var earnedRevenueYTDValue = 0;
    var preearnedRevenueYTDValue = 0;
    profitTotal += profit;
    
    if(status === 'Contract'){
    //checking if the end date has already passed
    if((pastDate <= now && checkMonth === true && parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)) || (pastDate <= now && parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year))){
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
    }else if(pastDate <= now2 && pastcheckMonth === true && parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
        pretotalForcastRevenue = 0;
        if(quarter === '4'){
          preearnedRevenueYTDValue = 0;
          pretotalExpectedRevenue = parseFloat(preearnedRevenueYTDValue) + parseFloat(pretotalForcastRevenue);
        }else if(quarter === '3'){
          preearnedRevenueYTDValue = earned_revenue_YTD;
          pretotalExpectedRevenue = parseFloat(preearnedRevenueYTDValue) + parseFloat(pretotalForcastRevenue);
        }else if(quarter === '2'){
          preearnedRevenueYTDValue = earned_revenue_YTD;
          pretotalExpectedRevenue = parseFloat(preearnedRevenueYTDValue) + parseFloat(pretotalForcastRevenue);
        }else if(quarter === '1'){
          preearnedRevenueYTDValue = earned_revenue_YTD;
          pretotalExpectedRevenue = parseFloat(preearnedRevenueYTDValue) + parseFloat(pretotalForcastRevenue);
        }
        preprofitCurrentYear = (parseFloat(preearnedRevenueYTDValue) * (gross_margin_percent/100)) + (parseFloat(pretotalForcastRevenue) * (gross_margin_percent/100));
        preexpectedContractAmount = Math.round((parseFloat(earned_revenue) + (parseFloat(contract_amount) - parseFloat(earned_revenue))) * hit_ratio/100);
        //pretotalExpectedRevenue =  preearnedRevenueYTDValue;
        currentBacklogValue = 0;
        futureBacklog = 0;
    }    
    else {
        //calculate Burnoff rate
        var checkloop = 1;
        var forecastData = 0;
        var preforecastData = 0;
        var futureForecastData = 0;
        var prefutureForecastData = 0;
        var forecastNumber = 0;
        var maxForecastNumber = 0;
        var preforecastNumber = 0;
        var premaxForecastNumber = 0;
        var futureRevenueValue = 0;
    if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
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
        totalForcastRevenue = backlog;
          expectedContractAmount = Math.round((parseFloat(earned_revenue) + (parseFloat(contract_amount) - parseFloat(earned_revenue))) * hit_ratio/100);
          var monthlyYearValue = 0;
          for(var j=0; j < global.burnOffChart.length; j++){
            if(j >= CurrentMonthOfProject && j < totalMonths){
                var obj = global.burnOffChart[j][newValue]
                burnOffSum += obj;
            }

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
          profitCurrentYear = (parseFloat(totalExpectedRevenue) * (gross_margin_percent/100));
          futureProfit = parseFloat(futureRevenue) * (gross_margin_percent/100);
      }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
        if(previousQuarterResp === "4"){
          preforecastNumber = 12;
          premaxForecastNumber = 12 + 12;
          preearnedRevenueYTDValue = 0;
      }else if(previousQuarterResp === "1"){
          preforecastNumber = 9;
          premaxForecastNumber = 9 + 12;
          preearnedRevenueYTDValue = earned_revenue_YTD;
      }else if(previousQuarterResp === "2"){
          preforecastNumber = 6;
          premaxForecastNumber = 6 + 12;
          preearnedRevenueYTDValue = earned_revenue_YTD;
      }else if(previousQuarterResp === "3"){
          preforecastNumber = 3;
          premaxForecastNumber = 3 + 12;
          preearnedRevenueYTDValue = earned_revenue_YTD;
      }
        pretotalForcastRevenue = backlog;
        preexpectedContractAmount = Math.round((parseFloat(earned_revenue) + (parseFloat(contract_amount) - parseFloat(earned_revenue))) * hit_ratio/100);
        for(var x=0; x < global.burnOffChart.length; x++){
          if(x >= CurrentMonthOfProjectPast && x < totalMonths){
              var preobj = global.burnOffChart[x][newValue]
              preburnOffSum += preobj;
          }

        }

        if(startDate > now2){
          for(var y=1; y < checkStartValuePast; y++){
            checkloop += 1;
          }
        }

        for (var t=0; t < global.burnOffChart.length; t++) {
          if(t >= CurrentMonthOfProjectPast){
            var valueFoundTwo = global.burnOffChart[t][newValue];
            var monthlyValueTwo =  (backlogValue * valueFoundTwo) / preburnOffSum;
            if(checkloop <= preforecastNumber){
              preforecastData += monthlyValueTwo;
              checkloop += 1;
            }
            else if(checkloop > preforecastNumber && checkloop <= premaxForecastNumber){
              prefutureForecastData += monthlyValueTwo;
              checkloop += 1;
            }else if(checkloop > premaxForecastNumber){
              futureRevenueValue += monthlyValueTwo;
            }

          }
        }
        prefutureRevenue = prefutureForecastData ? prefutureForecastData : 0;
        pretotalExpectedRevenue = parseFloat(preforecastData) + parseFloat(preearnedRevenueYTDValue) ? parseFloat(preforecastData) + parseFloat(preearnedRevenueYTDValue) : 0;
        preprofitCurrentYear = parseFloat(pretotalExpectedRevenue) * (gross_margin_percent/100) ? parseFloat(pretotalExpectedRevenue) * (gross_margin_percent/100) : 0;
        futureProfit = parseFloat(prefutureRevenue) * (gross_margin_percent/100);
      }
    }
  }else{
    if(status !== 'Contract' && parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){

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
                    futureForecastDataProjected += monthlyValueProjected;
                    //futureRevenue += monthlyValue;
                    checkloopProjected += 1;
                }else if(checkloopProjected > maxForecastNumberProjected){
                    futureRevenueValueProjected += monthlyValueProjected;
                }
        
            }
          }
        
        expectedContractAmount = (parseFloat(contract_amount) * (parseInt(hit_ratio)/100));
        totalForcastRevenue = (parseFloat(contract_amount) * (parseInt(hit_ratio)/100)) - earned_revenue;
        totalExpectedRevenue = forecastDataProjected ? forecastDataProjected : 0;
        //totalExpectedRevenue = (parseFloat(totalExpectedRevenue) * (gross_margin_percent/100));
        currentBacklogValue = (futureForecastDataProjected + futureRevenueValueProjected) ? (futureForecastDataProjected + futureRevenueValueProjected) : 0;
        futureRevenue = futureForecastDataProjected ? futureForecastDataProjected : 0;
        futureProfit = parseFloat(futureRevenue) * (gross_margin_percent/100);
        //profit = (parseFloat(expectedContractAmount) * (gross_margin_percent / 100));
        profitCurrentYear = (parseFloat(totalExpectedRevenue) * (gross_margin_percent/100));
        profitTotal += profit;
        futureBacklog = futureRevenueValueProjected ? futureRevenueValueProjected : 0;

    }
    else if(status !== 'Contract' && parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
      //calculate Burnoff rate
      var checkloopProjectedPrevious = 1;
      //var checkCompletedPrevious = 0;
      var forecastDataProjectedPrevious = 0;
      var futureForecastDataProjectedPrevious = 0;
      var forecastNumberProjectedPrevious = 0;
      var maxForecastNumberProjectedPrevious = 0;
      var futureRevenueValueProjectedPrevious = 0;
      if(previousQuarterResp === "4"){
          forecastNumberProjectedPrevious = 12;
          maxForecastNumberProjectedPrevious = 12 + 12;
      }else if(previousQuarterResp === "1"){
          forecastNumberProjectedPrevious = 9;
          maxForecastNumberProjectedPrevious = 9 + 12;
      }else if(previousQuarterResp === "2"){
          forecastNumberProjectedPrevious = 6;
          maxForecastNumberProjectedPrevious = 6 + 12;
      }else if(previousQuarterResp === "3"){
          forecastNumberProjectedPrevious = 3;
          maxForecastNumberProjectedPrevious = 3 + 12;
      }
          
      if(startDate > now2){
        for(var pv=1; pv < checkStartValuePast; pv++){
            checkloopProjectedPrevious += 1;
        }
            //checkCompletedPrevious += 1;
      }
                
      //if(checkCompleted === 1){
          //calculate burnoff sum
          for(var pk=0; pk < global.burnOffChart.length; pk++){
              if(pk >= CurrentMonthOfProjectPast && pk < totalMonths){
                        var objProjectedPrevious = global.burnOffChart[pk][newValue]
                        preburnOffSum += objProjectedPrevious;
              }
        
          }
        
          for (var pj=0; pj < global.burnOffChart.length; pj++) {
            if(pj >= CurrentMonthOfProjectPast){
                var valueFoundProjectedPast = global.burnOffChart[pj][newValue];
                var backlogFuturePast = (parseFloat(contract_amount) * (parseInt(hit_ratio)/100));
                var monthlyValueProjectedPast =  (backlogFuturePast * valueFoundProjectedPast) / preburnOffSum;
                if(checkloopProjectedPrevious <= forecastNumberProjectedPrevious){
                    forecastDataProjectedPrevious += parseFloat(monthlyValueProjectedPast);
                    checkloopProjectedPrevious += 1;
                }
                else if(checkloopProjectedPrevious > forecastNumberProjectedPrevious && checkloopProjectedPrevious <= maxForecastNumberProjectedPrevious){
                    futureForecastDataProjectedPrevious += monthlyValueProjectedPast;
                    //futureRevenue += monthlyValue;
                    checkloopProjectedPrevious += 1;
                }else if(checkloopProjectedPrevious > maxForecastNumberProjectedPrevious){
                    futureRevenueValueProjectedPrevious += monthlyValueProjectedPast;
                }
        
            }
          }
        
        expectedContractAmount = (parseFloat(contract_amount) * (parseInt(hit_ratio)/100));
        totalForcastRevenue = (parseFloat(contract_amount) * (parseInt(hit_ratio)/100)) - earned_revenue;
        pretotalExpectedRevenue = forecastDataProjectedPrevious ? forecastDataProjectedPrevious : 0;
        //totalExpectedRevenue = (parseFloat(totalExpectedRevenue) * (gross_margin_percent/100));
        currentBacklogValue = (futureForecastDataProjectedPrevious + futureRevenueValueProjectedPrevious) ? (futureForecastDataProjectedPrevious + futureRevenueValueProjectedPrevious) : 0;
        futureRevenue = futureForecastDataProjectedPrevious ? futureForecastDataProjectedPrevious : 0;
        futureProfit = parseFloat(futureRevenue) * (gross_margin_percent/100);
        //profit = (parseFloat(expectedContractAmount) * (gross_margin_percent / 100));
        preprofitCurrentYear = (parseFloat(pretotalExpectedRevenue) * (gross_margin_percent/100));
        profitTotal += profit;
        futureBacklog = futureRevenueValueProjectedPrevious ? futureRevenueValueProjectedPrevious : 0; 
    }
  }

  if(status === 'Contract'){
      if(totalForcastRevenue > 0){
        currentBacklogValue = backlog - monthlyYearValue;
      }
      else if(totalForcastRevenue === 0.00){
          
        currentBacklogValue = backlog;
      }
      else{
        currentBacklogValue = 0;
      }

      valueCheck = parseFloat(currentBacklogValue) - parseFloat(futureRevenue);
      if(currentBacklogValue > 0 && valueCheck > 0){
        futureBacklog = parseFloat(currentBacklogValue) - parseFloat(futureRevenue);
      }else{
        futureBacklog = 0;
      }
  }

  expectedConAmount += expectedContractAmount;
  expectedBacklog += parseFloat(currentBacklogValue);
  expectedFutureRev += futureRevenue;
  expectedFutureProf += futureProfit;
  expectedFutureBack += futureBacklog;
  

  //calculating revenue and profit per division
  if(division === '1'){
    if( status === 'Contract'){
      if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
        expectedRevenue1 += parseFloat(futureRevenue);
        expectedProfit1 += futureProfit;
      }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
        preexpectedRevenue1 += parseFloat(pretotalExpectedRevenue) ? parseFloat(pretotalExpectedRevenue) : 0;
        console.log(" Contract 1 Pre Year Two: " + preexpectedRevenue1)
        preexpectedProfit1 += preprofitCurrentYear; 
      }
    }else if( status === 'ABNC'){
      if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
        expectedRevenueABNC1 += parseFloat(futureRevenue);
        expectedProfitABNC1 += futureProfit;
      }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
        preexpectedRevenueABNC1 += parseFloat(pretotalExpectedRevenue);
        preexpectedProfitABNC1 += preprofitCurrentYear;
      }
    }else{
      if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
        expectedRevenueFA1 += parseFloat(futureRevenue);
        expectedProfitFA1 += futureProfit;
      }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
        preexpectedRevenueFA1 += parseFloat(pretotalExpectedRevenue);
        preexpectedProfitFA1 += preprofitCurrentYear;
      }
    }

  }else if(division === '2'){
    if( status === 'Contract'){
      if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
        expectedRevenue2 += parseFloat(futureRevenue);
        expectedProfit2 += futureProfit;
      }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
        preexpectedRevenue2 += parseFloat(pretotalExpectedRevenue);
        preexpectedProfit2 += preprofitCurrentYear;
      }
    }else if( status === 'ABNC'){
      if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
        expectedRevenueABNC2 += parseFloat(futureRevenue);
        expectedProfitABNC2 += futureProfit;
      }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
        preexpectedRevenueABNC2 += parseFloat(pretotalExpectedRevenue);
        preexpectedProfitABNC2 += preprofitCurrentYear;
      }
    }else{
      if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
        expectedRevenueFA2 += parseFloat(futureRevenue);
        expectedProfitFA2 += futureProfit;
      }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
        preexpectedRevenueFA2 += parseFloat(pretotalExpectedRevenue);
        preexpectedProfitFA2 += preprofitCurrentYear;
      }
    }

  }else if(division === '3'){
    if( status === 'Contract'){
      if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
        expectedRevenue3 += parseFloat(futureRevenue);
        expectedProfit3 += futureProfit;
      }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
        preexpectedRevenue3 += parseFloat(pretotalExpectedRevenue);
        preexpectedProfit3 += preprofitCurrentYear;
      }
    }else if( status === 'ABNC'){
      if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
        expectedRevenueABNC3 += parseFloat(futureRevenue);
        expectedProfitABNC3 += futureProfit;
      }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
        preexpectedRevenueABNC3 += parseFloat(pretotalExpectedRevenue);
        preexpectedProfitABNC3 += preprofitCurrentYear;
      }
    }else{
      if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
        expectedRevenueFA3 += parseFloat(futureRevenue);
        expectedProfitFA3 += futureProfit;
      }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
        preexpectedRevenueFA3 += parseFloat(pretotalExpectedRevenue);
        preexpectedProfitFA3 += preprofitCurrentYear;
      }
    }

  }else if(division === '4'){
    if( status === 'Contract'){
      if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
        expectedRevenue4 += parseFloat(futureRevenue);
        expectedProfit4 += futureProfit;
      }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
        preexpectedRevenue4 += parseFloat(pretotalExpectedRevenue);
        preexpectedProfit4 += preprofitCurrentYear;
      }
    }else if( status === 'ABNC'){
      if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
        expectedRevenueABNC4 += parseFloat(futureRevenue);
        expectedProfitABNC4 += futureProfit;
      }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
        preexpectedRevenueABNC4 += parseFloat(pretotalExpectedRevenue);
        preexpectedProfitABNC4 += preprofitCurrentYear;
      }
    }else{
      if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
        expectedRevenueFA4 += parseFloat(futureRevenue);
        expectedProfitFA4 += futureProfit;
      }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
        preexpectedRevenueFA4 += parseFloat(pretotalExpectedRevenue);
        preexpectedProfitFA4 += preprofitCurrentYear;
      }
    }

  }else if(division === '5'){
    if( status === 'Contract'){
      if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
        expectedRevenue5 += parseFloat(futureRevenue);
        expectedProfit5 += futureProfit;
      }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
        preexpectedRevenue5 += parseFloat(pretotalExpectedRevenue);
        preexpectedProfit5 += preprofitCurrentYear;
      }
    }else if( status === 'ABNC'){
      if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
        expectedRevenueABNC5 += parseFloat(futureRevenue);
        expectedProfitABNC5 += futureProfit;
      }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
        preexpectedRevenueABNC5 += parseFloat(pretotalExpectedRevenue);
        preexpectedProfitABNC5 += preprofitCurrentYear;
      }
    }else{
      if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
        expectedRevenueFA5 += parseFloat(futureRevenue);
        expectedProfitFA5 += futureProfit;
      }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
        preexpectedRevenueFA5 += parseFloat(pretotalExpectedRevenue);
        preexpectedProfitFA5 += preprofitCurrentYear;
      }
    }

  }else if(division === '6'){
    if( status === 'Contract'){
      if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
        expectedRevenue6 += parseFloat(futureRevenue);
        expectedProfit6 += futureProfit;
      }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
        preexpectedRevenue6 += parseFloat(pretotalExpectedRevenue);
        preexpectedProfit6 += preprofitCurrentYear;
      }
    }else if( status === 'ABNC'){
      if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
        expectedRevenueABNC6 += parseFloat(futureRevenue);
        expectedProfitABNC6 += futureProfit;
      }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
        preexpectedRevenueABNC6 += parseFloat(pretotalExpectedRevenue);
        preexpectedProfitABNC6 += preprofitCurrentYear;
      }
    }else{
      if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
        expectedRevenueFA6 += parseFloat(futureRevenue);
        expectedProfitFA6 += futureProfit;
      }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
        preexpectedRevenueFA6 += parseFloat(pretotalExpectedRevenue);
        preexpectedProfitFA6 += preprofitCurrentYear;
      }
    }

  }else if(division === '7'){
    if( status === 'Contract'){
      if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
        expectedRevenue7 += parseFloat(futureRevenue);
        expectedProfit7 += futureProfit;
      }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
        preexpectedRevenue7 += parseFloat(pretotalExpectedRevenue);
        preexpectedProfit7 += preprofitCurrentYear;
      }
    }else if( status === 'ABNC'){
      if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
        expectedRevenueABNC7 += parseFloat(futureRevenue);
        expectedProfitABNC7 += futureProfit;
      }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
        preexpectedRevenueABNC7 += parseFloat(pretotalExpectedRevenue);
        preexpectedProfitABNC7 += preprofitCurrentYear;
      }
    }else{
      if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
        expectedRevenueFA7 += parseFloat(futureRevenue);
        expectedProfitFA7 += futureProfit;
      }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
        preexpectedRevenueFA7 += parseFloat(pretotalExpectedRevenue);
        preexpectedProfitFA7 += preprofitCurrentYear;
      }
    }

  }else if(division === '11'){
    if( status === 'Contract'){
      if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
        expectedRevenue11 += parseFloat(futureRevenue);
        expectedProfit11 += futureProfit;
      }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
        preexpectedRevenue11 += parseFloat(pretotalExpectedRevenue);
        preexpectedProfit11 += preprofitCurrentYear;
      }
    }else if( status === 'ABNC'){
      if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
        expectedRevenueABNC11 += parseFloat(futureRevenue);
        expectedProfitABNC11 += futureProfit;
      }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
        preexpectedRevenueABNC11 += parseFloat(pretotalExpectedRevenue);
        preexpectedProfitABNC11 += preprofitCurrentYear;
      }
    }else{
      if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
        expectedRevenueFA11 += parseFloat(futureRevenue);
        expectedProfitFA11 += futureProfit;
      }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
        preexpectedRevenueFA11 += parseFloat(pretotalExpectedRevenue);
        preexpectedProfitFA11 += preprofitCurrentYear;
      }
    }

  }else if(division === '00'){
    if( status === 'Contract'){
      if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
        expectedRevenue00 += parseFloat(futureRevenue);
        expectedProfit00 += futureProfit;
      }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
        preexpectedRevenue00 += parseFloat(pretotalExpectedRevenue);
        preexpectedProfit00 += preprofitCurrentYear;
      }
    }else if( status === 'ABNC'){
      if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
        expectedRevenueABNC00 += parseFloat(futureRevenue);
        expectedProfitABNC00 += futureProfit;
      }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
        preexpectedRevenueABNC00 += parseFloat(pretotalExpectedRevenue);
        preexpectedProfitABNC00 += preprofitCurrentYear;
      }
    }else{
      if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
        expectedRevenueFA00 += parseFloat(futureRevenue);
        expectedProfitFA00 += futureProfit;
      }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
        preexpectedRevenueFA00 += parseFloat(pretotalExpectedRevenue);
        preexpectedProfitFA00 += preprofitCurrentYear;
      }
    }

  }

  revenueTotal = expectedRevenue1 + expectedRevenue2 + expectedRevenue3 + expectedRevenue4 + expectedRevenue5 + expectedRevenue6 + expectedRevenue7 + expectedRevenue11 + expectedRevenue00;
  prerevenueTotal = preexpectedRevenue1 + preexpectedRevenue2 + preexpectedRevenue3 + preexpectedRevenue4 + preexpectedRevenue5 + preexpectedRevenue6 + preexpectedRevenue7 + preexpectedRevenue11 + preexpectedRevenue00;
  revenueABNCTotal = expectedRevenueABNC1 + expectedRevenueABNC2 + expectedRevenueABNC3 + expectedRevenueABNC4 + expectedRevenueABNC5 + expectedRevenueABNC6 + expectedRevenueABNC7 + expectedRevenueABNC11 + expectedRevenueABNC00;
  prerevenueABNCTotal = preexpectedRevenueABNC1 + preexpectedRevenueABNC2 + preexpectedRevenueABNC3 + preexpectedRevenueABNC4 + preexpectedRevenueABNC5 + preexpectedRevenueABNC6 + preexpectedRevenueABNC7 + preexpectedRevenueABNC11 + preexpectedRevenueABNC00;
  revenueFATotal = expectedRevenueFA1 + expectedRevenueFA2 + expectedRevenueFA3 + expectedRevenueFA4 + expectedRevenueFA5 + expectedRevenueFA6 + expectedRevenueFA7 + expectedRevenueFA11 + expectedRevenueFA00;
  prerevenueFATotal = preexpectedRevenueFA1 + preexpectedRevenueFA2 + preexpectedRevenueFA3 + preexpectedRevenueFA4 + preexpectedRevenueFA5 + preexpectedRevenueFA6 + preexpectedRevenueFA7 + preexpectedRevenueFA11 + preexpectedRevenueFA00;
  revenueFinalTotal = (expectedRevenue1 + expectedRevenueABNC1 + expectedRevenueFA1 + expectedRevenue2 + expectedRevenueABNC2 + expectedRevenueFA2 + expectedRevenue3 + expectedRevenueABNC3 + expectedRevenueFA3 + expectedRevenue4 + expectedRevenueABNC4 + expectedRevenueFA4 + expectedRevenue5 + expectedRevenueABNC5 + expectedRevenueFA5 + expectedRevenue6 + expectedRevenueABNC6 + expectedRevenueFA6 + expectedRevenue7 + expectedRevenueABNC7 + expectedRevenueFA7 + expectedRevenue11 + expectedRevenueABNC11 + expectedRevenueFA11 +  expectedRevenue00 + expectedRevenueABNC00 + expectedRevenueFA00);
  prerevenueFinalTotal = (preexpectedRevenue1 + preexpectedRevenueABNC1 + preexpectedRevenueFA1 + preexpectedRevenue2 + preexpectedRevenueABNC2 + preexpectedRevenueFA2 + preexpectedRevenue3 + preexpectedRevenueABNC3 + preexpectedRevenueFA3 + preexpectedRevenue4 + preexpectedRevenueABNC4 + preexpectedRevenueFA4 + preexpectedRevenue5 + preexpectedRevenueABNC5 + preexpectedRevenueFA5 + preexpectedRevenue6 + preexpectedRevenueABNC6 + preexpectedRevenueFA6 + preexpectedRevenue7 + preexpectedRevenueABNC7 + preexpectedRevenueFA7 + preexpectedRevenue11 + preexpectedRevenueABNC11 + preexpectedRevenueFA11 +  preexpectedRevenue00 + preexpectedRevenueABNC00 + preexpectedRevenueFA00);
  jobProfitTotal = expectedProfit1 + expectedProfit2 + expectedProfit3 + expectedProfit4 + expectedProfit5 + expectedProfit6 + expectedProfit7 + expectedProfit11 + expectedProfit00;
  prejobProfitTotal = preexpectedProfit1 + preexpectedProfit2 + preexpectedProfit3 + preexpectedProfit4 + preexpectedProfit5 + preexpectedProfit6 + preexpectedProfit7 + preexpectedProfit11 + preexpectedProfit00;
  jobProfitABNCTotal = parseFloat(expectedProfitABNC1) + parseFloat(expectedProfitABNC2) + parseFloat(expectedProfitABNC3) + parseFloat(expectedProfitABNC4) + parseFloat(expectedProfitABNC5) + parseFloat(expectedProfitABNC6) + parseFloat(expectedProfitABNC7) + parseFloat(expectedProfitABNC11)  + parseFloat(expectedProfitABNC00);
  prejobProfitABNCTotal = parseFloat(preexpectedProfitABNC1) + parseFloat(preexpectedProfitABNC2) + parseFloat(preexpectedProfitABNC3) + parseFloat(preexpectedProfitABNC4) + parseFloat(preexpectedProfitABNC5) + parseFloat(preexpectedProfitABNC6) + parseFloat(preexpectedProfitABNC7) + parseFloat(preexpectedProfitABNC11)  + parseFloat(preexpectedProfitABNC00);
  jobProfitFATotal = parseFloat(expectedProfitFA1) + parseFloat(expectedProfitFA2) + parseFloat(expectedProfitFA3) + parseFloat(expectedProfitFA4) + parseFloat(expectedProfitFA5) + parseFloat(expectedProfitFA6) + parseFloat(expectedProfitFA7) + parseFloat(expectedProfitFA11)  + parseFloat(expectedProfitFA00);
  prejobProfitFATotal = parseFloat(preexpectedProfitFA1) + parseFloat(preexpectedProfitFA2) + parseFloat(preexpectedProfitFA3) + parseFloat(preexpectedProfitFA4) + parseFloat(preexpectedProfitFA5) + parseFloat(preexpectedProfitFA6) + parseFloat(preexpectedProfitFA7) + parseFloat(preexpectedProfitFA11)  + parseFloat(preexpectedProfitFA00);
  jobProfitFinalTotal = parseFloat(expectedProfit1) + parseFloat(expectedProfitABNC1) + parseFloat(expectedProfitFA1) + parseFloat(expectedProfit2) + parseFloat(expectedProfitABNC2) + parseFloat(expectedProfitFA2) + parseFloat(expectedProfit3) + parseFloat(expectedProfitABNC3) + parseFloat(expectedProfitFA3) + parseFloat(expectedProfit4) + parseFloat(expectedProfitABNC4) + parseFloat(expectedProfitFA4) + parseFloat(expectedProfit5) + parseFloat(expectedProfitABNC5) + parseFloat(expectedProfitFA5) + parseFloat(expectedProfit6) + parseFloat(expectedProfitABNC6) + parseFloat(expectedProfitFA6) + parseFloat(expectedProfit7) + parseFloat(expectedProfitABNC7) + parseFloat(expectedProfitFA7) + parseFloat(expectedProfit11) + parseFloat(expectedProfitABNC11) + parseFloat(expectedProfitFA11) + parseFloat(expectedProfit00) + parseFloat(expectedProfitABNC00) + parseFloat(expectedProfitFA00);  
  prevJobProfitFinalTotal = parseFloat(preexpectedProfit1) + parseFloat(preexpectedProfitABNC1) + parseFloat(preexpectedProfitFA1) + parseFloat(preexpectedProfit2) + parseFloat(preexpectedProfitABNC2) + parseFloat(preexpectedProfitFA2) + parseFloat(preexpectedProfit3) + parseFloat(preexpectedProfitABNC3) + parseFloat(preexpectedProfitFA3) + parseFloat(preexpectedProfit4) + parseFloat(preexpectedProfitABNC4) + parseFloat(preexpectedProfitFA4) + parseFloat(preexpectedProfit5) + parseFloat(preexpectedProfitABNC5) + parseFloat(preexpectedProfitFA5) + parseFloat(preexpectedProfit6) + parseFloat(preexpectedProfitABNC6) + parseFloat(preexpectedProfitFA6) + parseFloat(preexpectedProfit7) + parseFloat(preexpectedProfitABNC7) + parseFloat(preexpectedProfitFA7) + parseFloat(preexpectedProfit11) + parseFloat(preexpectedProfitABNC11) + parseFloat(preexpectedProfitFA11) + parseFloat(preexpectedProfit00) + parseFloat(preexpectedProfitABNC00) + parseFloat(preexpectedProfitFA00); 
})


//calculating overhead data
this.state.OverHeadData.map((OverHeadData, index) => {
  const {  department, account, name, status, year, quarter, period_1, 
        period_2, period_3, period_4, period_5, period_6, period_7, period_8, period_9, period_10, period_11, period_12 } = OverHeadData //destructuring
          
  if(account >= 5020 && account <= 6999 && department === "01"){
    if(account >= 5020 && account <= 6999 && department === "01" && status === "Budget"){
            if(currentMonth === 12){
              if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                divOneOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);;
              }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                predivOneOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
              }
            }else if(currentMonth === 9){
              if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                divOneOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
              }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                predivOneOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
              }  
            }else if(currentMonth === 6){
              if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                divOneOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
              }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                predivOneOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
              } 
            }else if(currentMonth === 3){
              if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                divOneOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
              }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                predivOneOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
              } 
            }
        }
  } 
  
  else if(account === "7100.100" && department === "01"){
    if(account === "7100.100" && department === "01" && status === "Budget"){
          if(currentMonth === 12){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divProfOneOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivProfOneOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }
          }else if(currentMonth === 9){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divProfOneOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivProfOneOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }  
          }else if(currentMonth === 6){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divProfOneOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivProfOneOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            } 
          }else if(currentMonth === 3){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divProfOneOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivProfOneOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            } 
          }
        }
  }
  
  else if(account >= 5020 && account <= 6999 && department === "02"){
    if(account >= 5020 && account <= 6999 && department === "02" && status === "Budget"){
          if(currentMonth === 12){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divTwoOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivTwoOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }
          }else if(currentMonth === 9){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divTwoOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivTwoOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }  
          }else if(currentMonth === 6){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divTwoOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivTwoOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            } 
          }else if(currentMonth === 3){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divTwoOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivTwoOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            } 
          }
        }
  }
  
  else if(account === "7100.100" && department === "02"){
    if(account === "7100.100" && department === "02" && status === "Budget"){
          if(currentMonth === 12){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divProfTwoOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivProfTwoOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }
          }else if(currentMonth === 9){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divProfTwoOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivProfTwoOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }  
          }else if(currentMonth === 6){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divProfTwoOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivProfTwoOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            } 
          }else if(currentMonth === 3){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divProfTwoOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivProfTwoOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            } 
          }
        }
  }

  else if(account >= 5020 && account <= 6999 && department === "03"){
    if(account >= 5020 && account <= 6999 && department === "03" && status === "Budget"){
          if(currentMonth === 12){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divThreeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivThreeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }
          }else if(currentMonth === 9){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divThreeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivThreeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }  
          }else if(currentMonth === 6){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divThreeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivThreeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            } 
          }else if(currentMonth === 3){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divThreeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivThreeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            } 
          }
        }
  }
  
  else if(account === "7100.100" && department === "03"){
    if(account === "7100.100" && department === "03" && status === "Budget"){
                if(currentMonth === 12){
                  if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                    divProfThreeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                  }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                    predivProfThreeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                  }
                }else if(currentMonth === 9){
                  if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                    divProfThreeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                  }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                    predivProfThreeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                  }  
                }else if(currentMonth === 6){
                  if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                    divProfThreeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                  }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                    predivProfThreeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                  } 
                }else if(currentMonth === 3){
                  if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                    divProfThreeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                  }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                    predivProfThreeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                  } 
                }
        }
  }
  
  else if(account >= 5020 && account <= 6999 && department === "04"){
    if(account >= 5020 && account <= 6999 && department === "04" && status === "Budget"){
          if(currentMonth === 12){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divFourOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivFourOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }
          }else if(currentMonth === 9){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divFourOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivFourOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }  
          }else if(currentMonth === 6){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divFourOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivFourOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            } 
          }else if(currentMonth === 3){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divFourOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivFourOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            } 
          }
        }
  }
  
  else if(account === "7100.100" && department === "04"){
    if(account === "7100.100" && department === "04" && status === "Budget"){
            if(currentMonth === 12){
              if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                divProfFourOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
              }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                predivProfFourOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
              }
            }else if(currentMonth === 9){
              if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                divProfFourOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
              }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                predivProfFourOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
              }  
            }else if(currentMonth === 6){
              if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                divProfFourOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
              }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                predivProfFourOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
              } 
            }else if(currentMonth === 3){
              if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                divProfFourOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
              }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                predivProfFourOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
              } 
            }
        }
  }
  
  else if(account >= 5020 && account <= 6999 && department === "05"){
      if(account >= 5020 && account <= 6999 && department === "05" && status === "Budget"){
          if(currentMonth === 12){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divFiveOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivFiveOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }
          }else if(currentMonth === 9){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divFiveOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivFiveOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }  
          }else if(currentMonth === 6){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divFiveOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivFiveOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            } 
          }else if(currentMonth === 3){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divFiveOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivFiveOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            } 
          }
        }
  }
  
  else if(account === "7100.100" && department === "05"){
        if(account === "7100.100" && department === "05" && status === "Budget"){
              if(currentMonth === 12){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divProfFiveOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivProfFiveOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }
              }else if(currentMonth === 9){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divProfFiveOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivProfFiveOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }  
              }else if(currentMonth === 6){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divProfFiveOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivProfFiveOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                } 
              }else if(currentMonth === 3){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divProfFiveOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivProfFiveOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                } 
              }
        }
  }
  
  else if(account >= 5020 && account <= 6999 && department === "06"){
      if(account >= 5020 && account <= 6999 && department === "06" && status === "Budget"){
          if(currentMonth === 12){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divSixOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivSixOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }
          }else if(currentMonth === 9){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divSixOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivSixOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }  
          }else if(currentMonth === 6){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divSixOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivSixOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            } 
          }else if(currentMonth === 3){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divSixOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivSixOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            } 
          }
        }
  }
  
  else if(account === "7100.100" && department === "06"){
      if(account === "7100.100" && department === "06" && status === "Budget"){
              if(currentMonth === 12){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divProfSixOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivProfSixOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }
              }else if(currentMonth === 9){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divProfSixOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivProfSixOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }  
              }else if(currentMonth === 6){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divProfSixOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivProfSixOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                } 
              }else if(currentMonth === 3){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divProfSixOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivProfSixOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                } 
              }
        }
  }
  
  else if(account >= 5020 && account <= 6999 && department === "07"){
    if(account >= 5020 && account <= 6999 && department === "07" && status === "Budget"){
          if(currentMonth === 12){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divSevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivSevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }
          }else if(currentMonth === 9){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divSevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivSevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }  
          }else if(currentMonth === 6){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divSevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivSevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            } 
          }else if(currentMonth === 3){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divSevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivSevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            } 
          }
        }
  }
  
  else if(account === "7100.100" && department === "07"){
    if(account === "7100.100" && department === "07" && status === "Budget"){
                if(currentMonth === 12){
                  if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                    divProfSevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                  }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                    predivProfSevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                  }
                }else if(currentMonth === 9){
                  if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                    divProfSevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                  }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                    predivProfSevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                  }  
                }else if(currentMonth === 6){
                  if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                    divProfSevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                  }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                    predivProfSevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                  } 
                }else if(currentMonth === 3){
                  if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                    divProfSevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                  }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                    predivProfSevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                  } 
                }
        }
  }
  
  else if(account >= 5020 && account <= 6999 && department === "11"){
    if(account >= 5020 && account <= 6999 && department === "11" && status === "Budget"){
          if(currentMonth === 12){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divElevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivElevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }
          }else if(currentMonth === 9){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divElevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivElevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }  
          }else if(currentMonth === 6){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divElevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivElevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            } 
          }else if(currentMonth === 3){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divElevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivElevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            } 
          }
        }
  }
  
  else if(account === "7100.100" && department === "11"){
    if(account === "7100.100" && department === "11" && status === "Budget"){
              if(currentMonth === 12){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divProfElevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivProfElevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }
              }else if(currentMonth === 9){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divProfElevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivProfElevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }  
              }else if(currentMonth === 6){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divProfElevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivProfElevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                } 
              }else if(currentMonth === 3){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divProfElevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivProfElevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                } 
              }
        }
  }
  
  else if(account >= 5020 && account <= 6999 && department === "00"){
    if(account >= 5020 && account <= 6999 && department === "00" && status === "Budget"){
          if(currentMonth === 12){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divZeroOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivZeroOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }
          }else if(currentMonth === 9){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divZeroOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivZeroOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }  
          }else if(currentMonth === 6){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divZeroOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivZeroOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            } 
          }else if(currentMonth === 3){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divZeroOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivZeroOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            } 
          }
        }
  }
  
  else if(account === "7100.100" && department === "00"){
    if(account === "7100.100" && department === "00" && status === "Budget"){
              if(currentMonth === 12){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divProfZeroOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivProfZeroOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }
              }else if(currentMonth === 9){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divProfZeroOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivProfZeroOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }  
              }else if(currentMonth === 6){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divProfZeroOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivProfZeroOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                } 
              }else if(currentMonth === 3){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divProfZeroOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivProfZeroOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                } 
              }
        }
  }
  
  else if(account === "7100.200" && department === "00"){
    if(account === "7100.200" && department === "00" && status === "Budget"){
          if(currentMonth === 12){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divDeferrCompOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivDeferrCompOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }
          }else if(currentMonth === 9){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divDeferrCompOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivDeferrCompOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }  
          }else if(currentMonth === 6){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divDeferrCompOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivDeferrCompOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            } 
          }else if(currentMonth === 3){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divDeferrCompOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivDeferrCompOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            } 
          }
        }
  }
  
  else if(account >= "7000" && account !== "7100.100" && account !== "7100.200"){
    if(account >= "7000" && account !== "7100.100" && account !== "7100.200" && status === "Budget"){
          if(currentMonth === 12){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divInvestCompOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivInvestCompOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }
          }else if(currentMonth === 9){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divInvestCompOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivInvestCompOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }  
          }else if(currentMonth === 6){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divInvestCompOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivInvestCompOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            } 
          }else if(currentMonth === 3){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divInvestCompOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivInvestCompOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            } 
          }
        }
  }
  
  else if(account >= 5020 && account <= 6999 && department >= 88 && department <= 99){
    if(account >= 5020 && account <= 6999 && department >= 88 && department <= 99 && status === "Budget"){
          if(currentMonth === 12){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divRangeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivRangeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }
          }else if(currentMonth === 9){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divRangeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivRangeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }  
          }else if(currentMonth === 6){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divRangeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivRangeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            } 
          }else if(currentMonth === 3){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divRangeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivRangeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            } 
          }
        }
  }


  fiftyPerRev = (revenueFinalTotal ? ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedRevenue1 + expectedRevenueABNC1 + expectedRevenueFA1) / revenueFinalTotal)) : 0) +
  (revenueFinalTotal ? ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedRevenue2 + expectedRevenueABNC2 + expectedRevenueFA2) / revenueFinalTotal)) : 0) +
  (revenueFinalTotal ? ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedRevenue3 + expectedRevenueABNC3 + expectedRevenueFA3) / revenueFinalTotal)) : 0) +
  (revenueFinalTotal ? ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedRevenue4 + expectedRevenueABNC4 + expectedRevenueFA4) / revenueFinalTotal)) : 0) +
  (revenueFinalTotal ? ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedRevenue5 + expectedRevenueABNC5 + expectedRevenueFA5) / revenueFinalTotal)) : 0) +
  (revenueFinalTotal ? ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedRevenue6 + expectedRevenueABNC6 + expectedRevenueFA6) / revenueFinalTotal)) : 0) +
  (revenueFinalTotal ? ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedRevenue7 + expectedRevenueABNC7 + expectedRevenueFA7) / revenueFinalTotal)) : 0) +
  (revenueFinalTotal ? ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedRevenue11 + expectedRevenueABNC11 + expectedRevenueFA11) / revenueFinalTotal)) : 0)

  prefiftyPerRev = ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedRevenue1 + preexpectedRevenueABNC1 + preexpectedRevenueFA1) / prerevenueFinalTotal)) +
  ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedRevenue2 + preexpectedRevenueABNC2 + preexpectedRevenueFA2) / prerevenueFinalTotal)) +
  ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedRevenue3 + preexpectedRevenueABNC3 + preexpectedRevenueFA3) / prerevenueFinalTotal)) +
  ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedRevenue4 + preexpectedRevenueABNC4 + preexpectedRevenueFA4) / prerevenueFinalTotal)) +
  ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedRevenue5 + preexpectedRevenueABNC5 + preexpectedRevenueFA5) / prerevenueFinalTotal)) +
  ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedRevenue6 + preexpectedRevenueABNC6 + preexpectedRevenueFA6) / prerevenueFinalTotal)) +
  ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedRevenue7 + preexpectedRevenueABNC7 + preexpectedRevenueFA7) / prerevenueFinalTotal)) +
  ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedRevenue11 + preexpectedRevenueABNC11 + preexpectedRevenueFA11) / prerevenueFinalTotal))


  profitSummary = (parseFloat(expectedProfit1) + parseFloat(expectedProfitABNC1) + parseFloat(expectedProfitFA1) + parseFloat(expectedProfit2) + parseFloat(expectedProfitABNC2) + parseFloat(expectedProfitFA2) + parseFloat(expectedProfit3) + parseFloat(expectedProfitABNC3) + parseFloat(expectedProfitFA3) + parseFloat(expectedProfit4) + parseFloat(expectedProfitABNC4) + parseFloat(expectedProfitFA4) + parseFloat(expectedProfit5) + parseFloat(expectedProfitABNC5) + parseFloat(expectedProfitFA5) + parseFloat(expectedProfit6) + parseFloat(expectedProfitABNC6) + parseFloat(expectedProfitFA6) + parseFloat(expectedProfit7) + parseFloat(expectedProfitABNC7) + parseFloat(expectedProfitFA7) + parseFloat(expectedProfit11) + parseFloat(expectedProfitABNC11) + parseFloat(expectedProfitFA11) + parseFloat(expectedProfit00) + parseFloat(expectedProfitABNC00) + parseFloat(expectedProfitFA00));
  preprofitSummary = (parseFloat(preexpectedProfit1) + parseFloat(preexpectedProfitABNC1) + parseFloat(preexpectedProfitFA1) + parseFloat(preexpectedProfit2) + parseFloat(preexpectedProfitABNC2) + parseFloat(preexpectedProfitFA2) + parseFloat(preexpectedProfit3) + parseFloat(preexpectedProfitABNC3) + parseFloat(preexpectedProfitFA3) + parseFloat(preexpectedProfit4) + parseFloat(preexpectedProfitABNC4) + parseFloat(preexpectedProfitFA4) + parseFloat(preexpectedProfit5) + parseFloat(preexpectedProfitABNC5) + parseFloat(preexpectedProfitFA5) + parseFloat(preexpectedProfit6) + parseFloat(preexpectedProfitABNC6) + parseFloat(preexpectedProfitFA6) + parseFloat(preexpectedProfit7) + parseFloat(preexpectedProfitABNC7) + parseFloat(preexpectedProfitFA7) + parseFloat(preexpectedProfit11) + parseFloat(preexpectedProfitABNC11) + parseFloat(preexpectedProfitFA11) + parseFloat(preexpectedProfit00) + parseFloat(preexpectedProfitABNC00) + parseFloat(preexpectedProfitFA00));

  netCostCorportate = ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedProfit1 + expectedProfitABNC1 + expectedProfitFA1) / profitSummary)) 
  + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedProfit2 + expectedProfitABNC2 + expectedProfitFA2) / profitSummary)) 
  + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedProfit3 + expectedProfitABNC3 + expectedProfitFA3) / profitSummary)) 
  + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedProfit4 + expectedProfitABNC4 + expectedProfitFA4) / profitSummary)) 
  + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedProfit5 + expectedProfitABNC5 + expectedProfitFA5) / profitSummary)) 
  + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedProfit6 + expectedProfitABNC6 + expectedProfitFA6) / profitSummary)) 
  + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedProfit7 + expectedProfitABNC7 + expectedProfitFA7) / profitSummary)) 
  + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedProfit11 + expectedProfitABNC11 + expectedProfitFA11) / profitSummary))


  prenetCostCorportate = (((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedProfit1 + preexpectedProfitABNC1 + preexpectedProfitFA1) / preprofitSummary))) + 
  (((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedProfit2 + preexpectedProfitABNC2 + preexpectedProfitFA2) / preprofitSummary))) +
  (((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedProfit3 + preexpectedProfitABNC3 + preexpectedProfitFA3) / preprofitSummary))) + 
  (((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedProfit4 + preexpectedProfitABNC4 + preexpectedProfitFA4) / preprofitSummary))) + 
  (((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedProfit5 + preexpectedProfitABNC5 + preexpectedProfitFA5) / preprofitSummary))) + 
  (((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedProfit6 + preexpectedProfitABNC6 + preexpectedProfitFA6) / preprofitSummary))) + 
  (((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedProfit7 + preexpectedProfitABNC7 + preexpectedProfitFA7) / preprofitSummary))) + 
  (((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedProfit11 + preexpectedProfitABNC11 + preexpectedProfitFA11) / preprofitSummary)))


  netGACorporateCost = Math.round((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - 
  (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) - fiftyPerRev - netCostCorportate
  
  prenetGACorporateCost = Math.round((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - 
  (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) - prefiftyPerRev - prenetCostCorportate

  netGAConsolidatedCost = (divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) + (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) + (fiftyPerRev - fiftyPerRev)
  prenetGAConsolidatedCost = (predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) + (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) + (prefiftyPerRev - prefiftyPerRev)


  netCostConsolidated = (netCostCorportate) - ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedProfit1 + expectedProfitABNC1 + expectedProfitFA1) / profitSummary))
  - ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedProfit2 + expectedProfitABNC2 + expectedProfitFA2) / profitSummary))
  - ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedProfit3 + expectedProfitABNC3 + expectedProfitFA3) / profitSummary)) 
  - ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedProfit4 + expectedProfitABNC4 + expectedProfitFA4) / profitSummary)) 
  - ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedProfit5 + expectedProfitABNC5 + expectedProfitFA5) / profitSummary))
  - ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedProfit6 + expectedProfitABNC6 + expectedProfitFA6) / profitSummary)) 
  - ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedProfit7 + expectedProfitABNC7 + expectedProfitFA7) / profitSummary))
  - ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedProfit11 + expectedProfitABNC11 + expectedProfitFA11) / profitSummary))

  prenetCostConsolidated = (prenetCostCorportate) - ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedProfit1 + preexpectedProfitABNC1 + preexpectedProfitFA1) / preprofitSummary))
  - ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedProfit2 + preexpectedProfitABNC2 + preexpectedProfitFA2) / preprofitSummary))
  - ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedProfit3 + preexpectedProfitABNC3 + preexpectedProfitFA3) / preprofitSummary)) 
  - ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedProfit4 + preexpectedProfitABNC4 + preexpectedProfitFA4) / preprofitSummary)) 
  - ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedProfit5 + preexpectedProfitABNC5 + preexpectedProfitFA5) / preprofitSummary))
  - ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedProfit6 + preexpectedProfitABNC6 + preexpectedProfitFA6) / preprofitSummary)) 
  - ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedProfit7 + preexpectedProfitABNC7 + preexpectedProfitFA7) / preprofitSummary))
  - ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedProfit11 + preexpectedProfitABNC11 + preexpectedProfitFA11) / preprofitSummary))


  netGACostDiv01 = divOneOverhead*1.03 + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedRevenue1 + expectedRevenueABNC1 + expectedRevenueFA1) / revenueFinalTotal)) + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedProfit1 + expectedProfitABNC1 + expectedProfitFA1) / profitSummary))
  prenetGACostDiv01 = predivOneOverhead*1.03 + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedRevenue1 + preexpectedRevenueABNC1 + preexpectedRevenueFA1) / prerevenueFinalTotal)) + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2)) * ((preexpectedProfit1 + preexpectedProfitABNC1 + preexpectedProfitFA1) / preprofitSummary)
  netGACostDiv02 = divTwoOverhead*1.03 + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedRevenue2 + expectedRevenueABNC2 + expectedRevenueFA2) / revenueFinalTotal)) + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedProfit2 + expectedProfitABNC2 + expectedProfitFA2) / profitSummary))
  prenetGACostDiv02 = predivTwoOverhead*1.03 + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedRevenue2 + preexpectedRevenueABNC2 + preexpectedRevenueFA2) / prerevenueFinalTotal)) + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedProfit2 + preexpectedProfitABNC2 + preexpectedProfitFA2) / preprofitSummary))
  netGACostDiv03 = divThreeOverhead*1.03 + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedRevenue3 + expectedRevenueABNC3 + expectedRevenueFA3) / revenueFinalTotal)) + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedProfit3 + expectedProfitABNC3 + expectedProfitFA3) / profitSummary))
  prenetGACostDiv03 = predivThreeOverhead*1.03 + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedRevenue3 + preexpectedRevenueABNC3 + preexpectedRevenueFA3) / prerevenueFinalTotal)) + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedProfit3 + preexpectedProfitABNC3 + preexpectedProfitFA3) / preprofitSummary))
  netGACostDiv04 = divFourOverhead*1.03 + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedRevenue4 + expectedRevenueABNC4 + expectedRevenueFA4) / revenueFinalTotal)) + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedProfit4 + expectedProfitABNC4 + expectedProfitFA4) / profitSummary))
  prenetGACostDiv04 = predivFourOverhead*1.03 + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedRevenue4 + preexpectedRevenueABNC4 + preexpectedRevenueFA4) / prerevenueFinalTotal)) + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedProfit4 + preexpectedProfitABNC4 + preexpectedProfitFA4) / preprofitSummary))
  netGACostDiv05 = divFiveOverhead*1.03 + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedRevenue5 + expectedRevenueABNC5 + expectedRevenueFA5) / revenueFinalTotal)) + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03+ divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedProfit5 + expectedProfitABNC5 + expectedProfitFA5) / profitSummary))
  prenetGACostDiv05 = predivFiveOverhead*1.03 + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedRevenue5 + preexpectedRevenueABNC5 + preexpectedRevenueFA5) / prerevenueFinalTotal)) + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedProfit5 + preexpectedProfitABNC5 + preexpectedProfitFA5) / preprofitSummary))
  netGACostDiv06 = divSixOverhead*1.03 + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedRevenue6 + expectedRevenueABNC6 + expectedRevenueFA6) / revenueFinalTotal)) + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedProfit6 + expectedProfitABNC6 + expectedProfitFA6) / profitSummary))
  prenetGACostDiv06 = predivSixOverhead*1.03 + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedRevenue6 + preexpectedRevenueABNC6 + preexpectedRevenueFA6) / prerevenueFinalTotal)) + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedProfit6 + preexpectedProfitABNC6 + preexpectedProfitFA6) / preprofitSummary))
  netGACostDiv07 = divSevenOverhead*1.03 + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedRevenue7 + expectedRevenueABNC7 + expectedRevenueFA7) / revenueFinalTotal)) + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedProfit7 + expectedProfitABNC7 + expectedProfitFA7) / profitSummary))
  prenetGACostDiv07 = predivSevenOverhead*1.03 + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedRevenue7 + preexpectedRevenueABNC7 + preexpectedRevenueFA7) / prerevenueFinalTotal)) + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedProfit7 + preexpectedProfitABNC7 + preexpectedProfitFA7) / preprofitSummary))
  netGACostDiv11 = divElevenOverhead*1.03 + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedRevenue11 + expectedRevenueABNC11 + expectedRevenueFA11) / revenueFinalTotal)) + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedProfit11 + expectedProfitABNC11 + expectedProfitFA11) / profitSummary))
  prenetGACostDiv11 = predivElevenOverhead*1.03 + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedRevenue11 + preexpectedRevenueABNC11 + preexpectedRevenueFA11) / prerevenueFinalTotal)) + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedProfit11 + preexpectedProfitABNC11 + preexpectedProfitFA11) / preprofitSummary))


  IncomeOperDiv01 = (parseFloat(expectedProfit1) + parseFloat(expectedProfitABNC1) + parseFloat(expectedProfitFA1) + parseFloat(ma_profit_1)) - (divOneOverhead*1.03 + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedRevenue1 + expectedRevenueABNC1 + expectedRevenueFA1) / revenueFinalTotal)) + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedProfit1 + expectedProfitABNC1 + expectedProfitFA1) / profitSummary)))
  preIncomeOperDiv01 = (parseFloat(preexpectedProfit1) + parseFloat(preexpectedProfitABNC1) + parseFloat(preexpectedProfitFA1) + parseFloat(prev_ma_profit_1)) - (predivOneOverhead*1.03 + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedRevenue1 + preexpectedRevenueABNC1 + preexpectedRevenueFA1) / prerevenueFinalTotal)) + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedProfit1 + preexpectedProfitABNC1 + preexpectedProfitFA1) / preprofitSummary)))
  effDiv01 = (IncomeOperDiv01) / (parseFloat(expectedProfit1) + parseFloat(expectedProfitABNC1) + parseFloat(expectedProfitFA1) + parseFloat(ma_profit_1)) ? (IncomeOperDiv01) / (parseFloat(expectedProfit1) + parseFloat(expectedProfitABNC1) + parseFloat(expectedProfitFA1) + parseFloat(ma_profit_1)) : 0
  if(effDiv01 === Infinity){
    effDiv01 = 0
  }else if(effDiv01 === -Infinity){
    effDiv01 = 0
  }
  preeffDiv01 = (preIncomeOperDiv01) / (parseFloat(preexpectedProfit1) + parseFloat(preexpectedProfitABNC1) + parseFloat(preexpectedProfitFA1) + parseFloat(prev_ma_profit_1)) ? (preIncomeOperDiv01) / (parseFloat(preexpectedProfit1) + parseFloat(preexpectedProfitABNC1) + parseFloat(preexpectedProfitFA1) + parseFloat(prev_ma_profit_1)) : 0
  if(preeffDiv01 === Infinity){
    preeffDiv01 = 0
  }else if(preeffDiv01 === -Infinity){
    preeffDiv01 = 0
  }

  IncomeOperDiv02 = (parseFloat(expectedProfit2) + parseFloat(expectedProfitABNC2) + parseFloat(expectedProfitFA2) + parseFloat(ma_profit_2)) - (divTwoOverhead*1.03 + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedRevenue2 + expectedRevenueABNC2 + expectedRevenueFA2) / revenueFinalTotal)) + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedProfit2 + expectedProfitABNC2 + expectedProfitFA2) / profitSummary)))
  preIncomeOperDiv02 = (parseFloat(preexpectedProfit2) + parseFloat(preexpectedProfitABNC2) + parseFloat(preexpectedProfitFA2) + parseFloat(prev_ma_profit_2)) - (predivTwoOverhead*1.03 + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedRevenue2 + preexpectedRevenueABNC2 + preexpectedRevenueFA2) / prerevenueFinalTotal)) + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedProfit2 + preexpectedProfitABNC2 + preexpectedProfitFA2) / preprofitSummary)))
  effDiv02 = (IncomeOperDiv02) / (parseFloat(expectedProfit2) + parseFloat(expectedProfitABNC2) + parseFloat(expectedProfitFA2) + parseFloat(ma_profit_2)) ? (IncomeOperDiv02) / (parseFloat(expectedProfit2) + parseFloat(expectedProfitABNC2) + parseFloat(expectedProfitFA2) + parseFloat(ma_profit_2)) : 0
  if(effDiv02 === Infinity){
    effDiv02 = 0
  }else if(effDiv02 === -Infinity){
    effDiv02 = 0
  }
  preeffDiv02 = (preIncomeOperDiv02) / (parseFloat(preexpectedProfit2) + parseFloat(preexpectedProfitABNC2) + parseFloat(preexpectedProfitFA2) + parseFloat(prev_ma_profit_2)) ? (preIncomeOperDiv02) / (parseFloat(preexpectedProfit2) + parseFloat(preexpectedProfitABNC2) + parseFloat(preexpectedProfitFA2) + parseFloat(prev_ma_profit_2)) : 0
  if(preeffDiv02 === Infinity){
    preeffDiv02 = 0
  }else if(preeffDiv02 === -Infinity){
    preeffDiv02 = 0
  }

  IncomeOperDiv03 = (parseFloat(expectedProfit3) + parseFloat(expectedProfitABNC1) + parseFloat(expectedProfitFA3) + parseFloat(ma_profit_3)) - (divThreeOverhead*1.03 + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedRevenue3 + expectedRevenueABNC3 + expectedRevenueFA3) / revenueFinalTotal)) + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedProfit3 + expectedProfitABNC3 + expectedProfitFA3) / profitSummary)))
  preIncomeOperDiv03 = (parseFloat(preexpectedProfit3) + parseFloat(preexpectedProfitABNC1) + parseFloat(preexpectedProfitFA3) + parseFloat(prev_ma_profit_3)) - (predivThreeOverhead*1.03 + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedRevenue3 + preexpectedRevenueABNC3 + preexpectedRevenueFA3) / prerevenueFinalTotal)) + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedProfit3 + preexpectedProfitABNC3 + preexpectedProfitFA3) / preprofitSummary)))
  effDiv03 = (IncomeOperDiv03) / (parseFloat(expectedProfit3) + parseFloat(expectedProfitABNC3) + parseFloat(expectedProfitFA3) + parseFloat(ma_profit_3)) ? (IncomeOperDiv03) / (parseFloat(expectedProfit3) + parseFloat(expectedProfitABNC3) + parseFloat(expectedProfitFA3) + parseFloat(ma_profit_3)) : 0
  if(effDiv03 === Infinity){
    effDiv03 = 0
  }else if(effDiv03 === -Infinity){
    effDiv03 = 0
  }
  preeffDiv03 = (preIncomeOperDiv03) / (parseFloat(preexpectedProfit3) + parseFloat(preexpectedProfitABNC3) + parseFloat(preexpectedProfitFA3) + parseFloat(prev_ma_profit_3)) ? (preIncomeOperDiv03) / (parseFloat(preexpectedProfit3) + parseFloat(preexpectedProfitABNC3) + parseFloat(preexpectedProfitFA3) + parseFloat(prev_ma_profit_3)) : 0
  if(preeffDiv03 === Infinity){
    preeffDiv03 = 0
  }else if(preeffDiv03 === -Infinity){
    preeffDiv03 = 0
  }

  IncomeOperDiv04 = (parseFloat(expectedProfit4) + parseFloat(expectedProfitABNC4) + parseFloat(expectedProfitFA4) + parseFloat(ma_profit_4)) - (divFourOverhead*1.03 + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedRevenue4 + expectedRevenueABNC4 + expectedRevenueFA4) / revenueFinalTotal)) + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedProfit4 + expectedProfitABNC4 + expectedProfitFA4) / profitSummary)))
  preIncomeOperDiv04 = (parseFloat(preexpectedProfit4) + parseFloat(preexpectedProfitABNC4) + parseFloat(preexpectedProfitFA4 + parseFloat(prev_ma_profit_4))) - (predivFourOverhead*1.03 + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedRevenue4 + preexpectedRevenueABNC4 + preexpectedRevenueFA4) / prerevenueFinalTotal)) + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedProfit4 + preexpectedProfitABNC4 + preexpectedProfitFA4) / preprofitSummary)))
  effDiv04 = (IncomeOperDiv04) / (parseFloat(expectedProfit4) + parseFloat(expectedProfitABNC4) + parseFloat(expectedProfitFA4) + parseFloat(ma_profit_4)) ? (IncomeOperDiv04) / (parseFloat(expectedProfit4) + parseFloat(expectedProfitABNC4) + parseFloat(expectedProfitFA4) + parseFloat(ma_profit_4)) : 0
  if(effDiv04 === Infinity){
    effDiv04 = 0
  }else if(effDiv04 === -Infinity){
    effDiv04 = 0
  }
  preeffDiv04 = (preIncomeOperDiv04) / (parseFloat(preexpectedProfit4) + parseFloat(preexpectedProfitABNC4) + parseFloat(preexpectedProfitFA4) + parseFloat(prev_ma_profit_4)) ? (preIncomeOperDiv04) / (parseFloat(preexpectedProfit4) + parseFloat(preexpectedProfitABNC4) + parseFloat(preexpectedProfitFA4) + parseFloat(prev_ma_profit_4)) : 0
  if(preeffDiv04 === Infinity){
    preeffDiv04 = 0
  }else if(preeffDiv04 === -Infinity){
    preeffDiv04 = 0
  }
  
  IncomeOperDiv05 = (parseFloat(expectedProfit5) + parseFloat(expectedProfitABNC5) + parseFloat(expectedProfitFA5) + parseFloat(ma_profit_5)) - (divFiveOverhead*1.03 + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedRevenue5 + expectedRevenueABNC5 + expectedRevenueFA5) / revenueFinalTotal)) + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedProfit5 + expectedProfitABNC5 + expectedProfitFA5) / profitSummary)))
  preIncomeOperDiv05 = (parseFloat(preexpectedProfit5) + parseFloat(preexpectedProfitABNC5) + parseFloat(preexpectedProfitFA5) + parseFloat(prev_ma_profit_5)) - (predivFiveOverhead*1.03 + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedRevenue5 + preexpectedRevenueABNC5 + preexpectedRevenueFA5) / prerevenueFinalTotal)) + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedProfit5 + preexpectedProfitABNC5 + preexpectedProfitFA5) / preprofitSummary)))
  effDiv05 = (IncomeOperDiv05) / (parseFloat(expectedProfit5) + parseFloat(expectedProfitABNC5) + parseFloat(expectedProfitFA5) + parseFloat(ma_profit_5)) ? (IncomeOperDiv05) / (parseFloat(expectedProfit5) + parseFloat(expectedProfitABNC5) + parseFloat(expectedProfitFA5) + parseFloat(ma_profit_5)) : 0
  if(effDiv05 === Infinity){
    effDiv05 = 0
  }else if(effDiv05 === -Infinity){
    effDiv05 = 0
  }
  preeffDiv05 = (preIncomeOperDiv05) / (parseFloat(preexpectedProfit5) + parseFloat(preexpectedProfitABNC5) + parseFloat(preexpectedProfitFA5) + parseFloat(prev_ma_profit_5)) ? (preIncomeOperDiv05) / (parseFloat(preexpectedProfit5) + parseFloat(preexpectedProfitABNC5) + parseFloat(preexpectedProfitFA5) + parseFloat(prev_ma_profit_5)) : 0
  if(preeffDiv05 === Infinity){
    preeffDiv05 = 0
  }else if(preeffDiv05 === -Infinity){
    preeffDiv05 = 0
  }

  IncomeOperDiv06 = (parseFloat(expectedProfit6) + parseFloat(expectedProfitABNC6) + parseFloat(expectedProfitFA6) + parseFloat(ma_profit_6)) - (divSixOverhead*1.03 + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedRevenue6 + expectedRevenueABNC6 + expectedRevenueFA6) / revenueFinalTotal)) + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedProfit6 + expectedProfitABNC6 + expectedProfitFA6) / profitSummary)))
  preIncomeOperDiv06 = (parseFloat(preexpectedProfit6) + parseFloat(preexpectedProfitABNC6) + parseFloat(preexpectedProfitFA6) + parseFloat(prev_ma_profit_6)) - (predivSixOverhead*1.03 + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedRevenue6 + preexpectedRevenueABNC6 + preexpectedRevenueFA6) / prerevenueFinalTotal)) + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedProfit6 + preexpectedProfitABNC6 + preexpectedProfitFA6) / preprofitSummary)))
  effDiv06 = (IncomeOperDiv06 / (parseFloat(expectedProfit6) + parseFloat(expectedProfitABNC6) + parseFloat(expectedProfitFA6) + parseFloat(ma_profit_6))) ? (IncomeOperDiv06 / (parseFloat(expectedProfit6) + parseFloat(expectedProfitABNC6) + parseFloat(expectedProfitFA6) + parseFloat(ma_profit_6)) ) : 0
  if(effDiv06 === Infinity){
    effDiv06 = 0
  }else if(effDiv06 === -Infinity){
    effDiv06 = 0
  }
  preeffDiv06 = (preIncomeOperDiv06 / (parseFloat(preexpectedProfit6) + parseFloat(preexpectedProfitABNC6) + parseFloat(preexpectedProfitFA6) + parseFloat(prev_ma_profit_6))) ? (preIncomeOperDiv06 / parseFloat(preexpectedProfit6) + parseFloat(preexpectedProfitABNC6) + parseFloat(preexpectedProfitFA6) + parseFloat(prev_ma_profit_6)) : 0
  if(preeffDiv06 === Infinity){
    preeffDiv06 = 0
  }else if(preeffDiv06 === -Infinity){
    preeffDiv06 = 0
  }

  IncomeOperDiv07 = (parseFloat(expectedProfit7) + parseFloat(expectedProfitABNC7) + parseFloat(expectedProfitFA7) + parseFloat(ma_profit_7)) - (divSevenOverhead*1.03 + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedRevenue7 + expectedRevenueABNC7 + expectedRevenueFA7) / revenueFinalTotal)) + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedProfit7 + expectedProfitABNC7 + expectedProfitFA7) / profitSummary)))
  preIncomeOperDiv07 = (parseFloat(preexpectedProfit7) + parseFloat(preexpectedProfitABNC7) + parseFloat(preexpectedProfitFA7) + parseFloat(prev_ma_profit_7)) - (predivSevenOverhead*1.03 + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedRevenue7 + preexpectedRevenueABNC7 + preexpectedRevenueFA7) / prerevenueFinalTotal)) + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedProfit7 + preexpectedProfitABNC7 + preexpectedProfitFA7) / preprofitSummary)))
  effDiv07 = (IncomeOperDiv07 / (parseFloat(expectedProfit7) + parseFloat(expectedProfitABNC7) + parseFloat(expectedProfitFA7) + parseFloat(ma_profit_7))) ? (IncomeOperDiv07 / (parseFloat(expectedProfit7) + parseFloat(expectedProfitABNC7) + parseFloat(expectedProfitFA7) + parseFloat(ma_profit_7)) ) : 0
  if(effDiv07 === Infinity){
    effDiv07 = 0
  }else if(effDiv07 === -Infinity){
    effDiv07 = 0
  }
  preeffDiv07 = (preIncomeOperDiv07 / (parseFloat(preexpectedProfit7) + parseFloat(preexpectedProfitABNC7) + parseFloat(preexpectedProfitFA7) + parseFloat(prev_ma_profit_7))) ? (preIncomeOperDiv07 / parseFloat(preexpectedProfit7) + parseFloat(preexpectedProfitABNC7) + parseFloat(preexpectedProfitFA7) + parseFloat(prev_ma_profit_7)) : 0
  if(preeffDiv07 === Infinity){
    preeffDiv07 = 0
  }else if(preeffDiv07 === -Infinity){
    preeffDiv07 = 0
  }

  IncomeOperDiv11 = (parseFloat(expectedProfit11) + parseFloat(expectedProfitABNC11) + parseFloat(expectedProfitFA11) + parseFloat(ma_profit_11)) - (divElevenOverhead*1.03 + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedRevenue11 + expectedRevenueABNC11 + expectedRevenueFA11) / revenueFinalTotal)) + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedProfit11 + expectedProfitABNC11 + expectedProfitFA11) / profitSummary)))
  preIncomeOperDiv11 = (parseFloat(preexpectedProfit11) + parseFloat(preexpectedProfitABNC11) + parseFloat(preexpectedProfitFA11) + parseFloat(prev_ma_profit_11)) - (predivElevenOverhead*1.03 + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedRevenue11 + preexpectedRevenueABNC11 + preexpectedRevenueFA11) / prerevenueFinalTotal)) + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedProfit11 + preexpectedProfitABNC11 + preexpectedProfitFA11) / preprofitSummary)))
  effDiv11 = (IncomeOperDiv11 / (parseFloat(expectedProfit11) + parseFloat(expectedProfitABNC11) + parseFloat(expectedProfitFA11) + parseFloat(ma_profit_11))) ? (IncomeOperDiv11 / (parseFloat(expectedProfit11) + parseFloat(expectedProfitABNC11) + parseFloat(expectedProfitFA11) + parseFloat(ma_profit_11)) ) : 0
  if(effDiv11 === Infinity){
    effDiv11 = 0
  }else if(effDiv11 === -Infinity){
    effDiv11 = 0
  }

  preeffDiv11 = (preIncomeOperDiv11 / (parseFloat(preexpectedProfit11) + parseFloat(preexpectedProfitABNC11) + parseFloat(preexpectedProfitFA11) + parseFloat(prev_ma_profit_11))) ? (preIncomeOperDiv11 / parseFloat(preexpectedProfit11) + parseFloat(preexpectedProfitABNC11) + parseFloat(preexpectedProfitFA11) + parseFloat(prev_ma_profit_11)) : 0
  if(preeffDiv11 === Infinity){
    preeffDiv11 = 0
  }else if(preeffDiv11 === -Infinity){
    preeffDiv11 = 0
  }

  IncomeOperDiv00 = (parseFloat(expectedProfit00) + parseFloat(expectedProfitABNC00) + parseFloat(expectedProfitFA00) + parseFloat(ma_profit_00)) - netGACorporateCost
  preIncomeOperDiv00 = (parseFloat(preexpectedProfit00) + parseFloat(preexpectedProfitABNC00) + parseFloat(preexpectedProfitFA00) + parseFloat(prev_ma_profit_00)) - prenetGACorporateCost
  effDiv00 = (IncomeOperDiv00 / (parseFloat(expectedProfit00) + parseFloat(expectedProfitABNC00) + parseFloat(expectedProfitFA00) + parseFloat(ma_profit_00))) ? (IncomeOperDiv00 / (parseFloat(expectedProfit00) + parseFloat(expectedProfitABNC00) + parseFloat(expectedProfitFA00) + parseFloat(ma_profit_00)) ) : 0
  if(effDiv00 === Infinity){
    effDiv00 = 0
  }else if(effDiv00 === -Infinity){
    effDiv00 = 0
  }
  preeffDiv00 = (preIncomeOperDiv00 / (parseFloat(preexpectedProfit00) + parseFloat(preexpectedProfitABNC00) + parseFloat(preexpectedProfitFA00) + parseFloat(prev_ma_profit_00))) ? (preIncomeOperDiv00 / parseFloat(preexpectedProfit00) + parseFloat(preexpectedProfitABNC00) + parseFloat(preexpectedProfitFA00) + parseFloat(prev_ma_profit_00)) : 0
  if(preeffDiv00 === Infinity){
    preeffDiv00 = 0
  }else if(preeffDiv00 === -Infinity){
    preeffDiv00 = 0
  }

  var incomeOptTotal = IncomeOperDiv01 + IncomeOperDiv02 + IncomeOperDiv03 + IncomeOperDiv04 + IncomeOperDiv05 + IncomeOperDiv06 + IncomeOperDiv07 + IncomeOperDiv11 + IncomeOperDiv00
  var totJobProf = parseFloat(totalJobProfitConsolidated) + parseFloat(expectedProfitABNC1) + parseFloat(expectedProfitFA1) + parseFloat(ma_profit_1) + parseFloat(expectedProfit2) + parseFloat(expectedProfitABNC2) + parseFloat(expectedProfitFA2) + parseFloat(ma_profit_2) + parseFloat(expectedProfit3) + parseFloat(expectedProfitABNC3) + parseFloat(ma_profit_3) + parseFloat(expectedProfitFA3) + parseFloat(expectedProfit4) + parseFloat(expectedProfitABNC4) + parseFloat(expectedProfitFA4) + parseFloat(ma_profit_4) + parseFloat(expectedProfit5) + parseFloat(expectedProfitABNC5) + parseFloat(expectedProfitFA5) + parseFloat(ma_profit_5) + parseFloat(expectedProfit6) + parseFloat(expectedProfitABNC6) + parseFloat(expectedProfitFA6) + parseFloat(ma_profit_6) + parseFloat(expectedProfit7) + parseFloat(expectedProfitABNC7) + parseFloat(expectedProfitFA7) + parseFloat(ma_profit_7) + parseFloat(expectedProfit11) + parseFloat(expectedProfitABNC11) + parseFloat(expectedProfitFA11) + parseFloat(ma_profit_11) + parseFloat(expectedProfit00) + parseFloat(expectedProfitABNC00) + parseFloat(expectedProfitFA00) + parseFloat(ma_profit_00) ? incomeOptTotal / parseFloat(expectedProfit1) + parseFloat(expectedProfitABNC1) + parseFloat(expectedProfitFA1) + parseFloat(ma_profit_1) + parseFloat(expectedProfit2) + parseFloat(expectedProfitABNC2) + parseFloat(expectedProfitFA2) + parseFloat(ma_profit_2) + parseFloat(expectedProfit3) + parseFloat(expectedProfitABNC3) + parseFloat(ma_profit_3) + parseFloat(expectedProfitFA3) + parseFloat(expectedProfit4) + parseFloat(expectedProfitABNC4) + parseFloat(expectedProfitFA4) + parseFloat(ma_profit_4) + parseFloat(expectedProfit5) + parseFloat(expectedProfitABNC5) + parseFloat(expectedProfitFA5) + parseFloat(ma_profit_5) + parseFloat(expectedProfit6) + parseFloat(expectedProfitABNC6) + parseFloat(expectedProfitFA6) + parseFloat(ma_profit_6) + parseFloat(expectedProfit7) + parseFloat(expectedProfitABNC7) + parseFloat(expectedProfitFA7) + parseFloat(ma_profit_7) + parseFloat(expectedProfit11) + parseFloat(expectedProfitABNC11) + parseFloat(expectedProfitFA11) + parseFloat(ma_profit_11) + parseFloat(expectedProfit00) + parseFloat(expectedProfitABNC00) + parseFloat(expectedProfitFA00) + parseFloat(ma_profit_00) : 0
  effDivTotal = (incomeOptTotal / totJobProf) ? (incomeOptTotal / totJobProf) : 0
  if(effDivTotal === Infinity){
    effDivTotal = 0
  }else if(effDivTotal === -Infinity){
    effDivTotal = 0
  }
  var preincomeOptTotal = preIncomeOperDiv01 + preIncomeOperDiv02 + preIncomeOperDiv03 + preIncomeOperDiv04 + preIncomeOperDiv05 + preIncomeOperDiv06 + preIncomeOperDiv07 + preIncomeOperDiv11 + preIncomeOperDiv00
  var pretotJobProf = (parseFloat(preexpectedProfit1) + parseFloat(preexpectedProfitABNC1) + parseFloat(preexpectedProfitFA1) + parseFloat(prev_ma_profit_1) + parseFloat(preexpectedProfit2) + parseFloat(preexpectedProfitABNC2) + parseFloat(preexpectedProfitFA2) + parseFloat(prev_ma_profit_2) + parseFloat(preexpectedProfit3) + parseFloat(preexpectedProfitABNC3) + parseFloat(preexpectedProfitFA3) + parseFloat(prev_ma_profit_4) + parseFloat(preexpectedProfit4) + parseFloat(preexpectedProfitABNC4) + parseFloat(preexpectedProfitFA4) + parseFloat(prev_ma_profit_4) + parseFloat(preexpectedProfit5) + parseFloat(preexpectedProfitABNC5) + parseFloat(preexpectedProfitFA5) + parseFloat(prev_ma_profit_5) + parseFloat(preexpectedProfit6) + parseFloat(preexpectedProfitABNC6) + parseFloat(preexpectedProfitFA6) + parseFloat(prev_ma_profit_6) + parseFloat(preexpectedProfit7) + parseFloat(preexpectedProfitABNC7) + parseFloat(preexpectedProfitFA7) + parseFloat(prev_ma_profit_7) + parseFloat(preexpectedProfit11) + parseFloat(preexpectedProfitABNC11) + parseFloat(preexpectedProfitFA11) + parseFloat(prev_ma_profit_11) + parseFloat(preexpectedProfit00) + parseFloat(preexpectedProfitABNC00) + parseFloat(preexpectedProfitFA00) + parseFloat(prev_ma_profit_00))
  preeffDivTotal = (preincomeOptTotal / pretotJobProf) ? (preincomeOptTotal / pretotJobProf) : 0
  if(preeffDivTotal === Infinity){
    preeffDivTotal = 0
  }else if(preeffDivTotal === -Infinity){
    preeffDivTotal = 0
  }

})
 
  }

  totalJobProfitOne = ((Math.round(expectedProfit1) + Math.round(expectedProfitABNC1) + Math.round(expectedProfitFA1)) + parseFloat(ma_profit_1))
  pretotalJobProfitOne = ((Math.round(preexpectedProfit1) + Math.round(preexpectedProfitABNC1) + Math.round(preexpectedProfitFA1)) + parseFloat(prev_ma_profit_1))
  totalJobProfitTwo = ((Math.round(expectedProfit2) + Math.round(expectedProfitABNC2) + Math.round(expectedProfitFA2)) + parseFloat(ma_profit_2))
  pretotalJobProfitTwo = ((Math.round(preexpectedProfit2) + Math.round(preexpectedProfitABNC2) + Math.round(preexpectedProfitFA2)) + parseFloat(prev_ma_profit_2))
  totalJobProfitThree = ((Math.round(expectedProfit3) + Math.round(expectedProfitABNC3) + Math.round(expectedProfitFA3)) + parseFloat(ma_profit_3))
  pretotalJobProfitThree = ((Math.round(preexpectedProfit3) + Math.round(preexpectedProfitABNC3) + Math.round(preexpectedProfitFA3)) + parseFloat(prev_ma_profit_3))
  totalJobProfitFour = ((Math.round(expectedProfit4) + Math.round(expectedProfitABNC4) + Math.round(expectedProfitFA4)) + parseFloat(ma_profit_4))
  pretotalJobProfitFour = ((Math.round(preexpectedProfit4) + Math.round(preexpectedProfitABNC4) + Math.round(preexpectedProfitFA4)) + parseFloat(prev_ma_profit_4))
  totalJobProfitFive = ((Math.round(expectedProfit5) + Math.round(expectedProfitABNC5) + Math.round(expectedProfitFA5)) + parseFloat(ma_profit_5))
  pretotalJobProfitFive = ((Math.round(preexpectedProfit5) + Math.round(preexpectedProfitABNC5) + Math.round(preexpectedProfitFA5)) + parseFloat(prev_ma_profit_5))
  totalJobProfitSix = ((Math.round(expectedProfit6) + Math.round(expectedProfitABNC6) + Math.round(expectedProfitFA6)) + parseFloat(ma_profit_6))
  pretotalJobProfitSix = ((Math.round(preexpectedProfit6) + Math.round(preexpectedProfitABNC6) + Math.round(preexpectedProfitFA6)) + parseFloat(prev_ma_profit_6))
  totalJobProfitSeven = ((Math.round(expectedProfit7) + Math.round(expectedProfitABNC7) + Math.round(expectedProfitFA7)) + parseFloat(ma_profit_7))
  pretotalJobProfitSeven = ((Math.round(preexpectedProfit7) + Math.round(preexpectedProfitABNC7) + Math.round(preexpectedProfitFA7)) + parseFloat(prev_ma_profit_7))
  totalJobProfitEleven = ((Math.round(expectedProfit11) + Math.round(expectedProfitABNC11) + Math.round(expectedProfitFA11)) + parseFloat(ma_profit_11))
  pretotalJobProfitEleven = ((Math.round(preexpectedProfit11) + Math.round(preexpectedProfitABNC11) + Math.round(preexpectedProfitFA11)) + parseFloat(prev_ma_profit_11))
  totalJobProfitZero = ((Math.round(expectedProfit00) + Math.round(expectedProfitABNC00) + Math.round(expectedProfitFA00)) + parseFloat(ma_profit_00))
  pretotalJobProfitZero = ((Math.round(preexpectedProfit00) + Math.round(preexpectedProfitABNC00) + Math.round(preexpectedProfitFA00)) + parseFloat(prev_ma_profit_00))
  totalJobProfitConsolidated = ((Math.round(expectedProfit1) + Math.round(expectedProfitABNC1) + Math.round(expectedProfitFA1) + Math.round(expectedProfit2) + Math.round(expectedProfitABNC2) + Math.round(expectedProfitFA2) + Math.round(expectedProfit3) + Math.round(expectedProfitABNC3) + Math.round(expectedProfitFA3) + Math.round(expectedProfit4) + Math.round(expectedProfitABNC4) + Math.round(expectedProfitFA4) + Math.round(expectedProfit5) + Math.round(expectedProfitABNC5) + Math.round(expectedProfitFA5) + Math.round(expectedProfit6) + Math.round(expectedProfitABNC6) + Math.round(expectedProfitFA6) + Math.round(expectedProfit7) + Math.round(expectedProfitABNC7) + Math.round(expectedProfitFA7) + Math.round(expectedProfit11) + Math.round(expectedProfitABNC11) + Math.round(expectedProfitFA11) + Math.round(expectedProfit00) + Math.round(expectedProfitABNC00) + Math.round(expectedProfitFA00)) + parseFloat(ma_profit_1) + parseFloat(ma_profit_2) + parseFloat(ma_profit_3) + parseFloat(ma_profit_4) + parseFloat(ma_profit_5) + parseFloat(ma_profit_6) + parseFloat(ma_profit_7) + parseFloat(ma_profit_11) + parseFloat(ma_profit_00))
  pretotalJobProfitConsolidated = ((Math.round(preexpectedProfit1) + Math.round(preexpectedProfitABNC1) + Math.round(preexpectedProfitFA1) + Math.round(preexpectedProfit2) + Math.round(preexpectedProfitABNC2) + Math.round(preexpectedProfitFA2) + Math.round(preexpectedProfit3) + Math.round(preexpectedProfitABNC3) + Math.round(preexpectedProfitFA3) + Math.round(preexpectedProfit4) + Math.round(preexpectedProfitABNC4) + Math.round(preexpectedProfitFA4) + Math.round(preexpectedProfit5) + Math.round(preexpectedProfitABNC5) + Math.round(preexpectedProfitFA5) + Math.round(preexpectedProfit6) + Math.round(preexpectedProfitABNC6) + Math.round(preexpectedProfitFA6) + Math.round(preexpectedProfit7) + Math.round(preexpectedProfitABNC7) + Math.round(preexpectedProfitFA7) + Math.round(preexpectedProfit11) + Math.round(preexpectedProfitABNC11) + Math.round(preexpectedProfitFA11) + Math.round(preexpectedProfit00) + Math.round(preexpectedProfitABNC00) + Math.round(preexpectedProfitFA00)) + parseFloat(prev_ma_profit_1) + parseFloat(prev_ma_profit_2) + parseFloat(prev_ma_profit_3) +  parseFloat(prev_ma_profit_4) + parseFloat(prev_ma_profit_5) + parseFloat(prev_ma_profit_6) + parseFloat(prev_ma_profit_7) + parseFloat(prev_ma_profit_11) + parseFloat(prev_ma_profit_00))
}


 renderTableHeader(value) {
  if(value === 'headerSection'){
    return <>
             <th colSpan={1} style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}></th>
             <th colSpan={2} style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>Division Wiley</th>
             <th colSpan={2} style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>Division Haynes</th>
             <th colSpan={2} style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>Division Commercial</th>
             <th colSpan={2} style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>Division Broadwell</th>
             <th colSpan={2} style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>Division Stone</th>
             <th colSpan={2} style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>Division Kitchin</th>
             <th colSpan={2} style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>Division Gowens</th>
             <th colSpan={2} style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>Division Misc</th>
             <th colSpan={2} style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>Corporate Office</th>
             <th colSpan={2} style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>Consolidated CDCC</th>
           </>
 }else if(value === 'revenue'){
  return <>
        <tr>
            <th style={{ textAlign: 'center'}}>Revenue</th>
            <th style={{ textAlign: 'center'}}>Current Projection</th>
            <th style={{ textAlign: 'center'}}>Previous Projection</th>
            <th style={{ textAlign: 'center'}}>Current Projection</th>
            <th style={{ textAlign: 'center'}}>Previous Projection</th>
            <th style={{ textAlign: 'center'}}>Current Projection</th>
            <th style={{ textAlign: 'center'}}>Previous Projection</th>
            <th style={{ textAlign: 'center'}}>Current Projection</th>
            <th style={{ textAlign: 'center'}}>Previous Projection</th>
            <th style={{ textAlign: 'center'}}>Current Projection</th>
            <th style={{ textAlign: 'center'}}>Previous Projection</th>
            <th style={{ textAlign: 'center'}}>Current Projection</th>
            <th style={{ textAlign: 'center'}}>Previous Projection</th>
            <th style={{ textAlign: 'center'}}>Current Projection</th>
            <th style={{ textAlign: 'center'}}>Previous Projection</th>
            <th style={{ textAlign: 'center'}}>Current Projection</th>
            <th style={{ textAlign: 'center'}}>Previous Projection</th>
            <th style={{ textAlign: 'center'}}>Current Projection</th>
            <th style={{ textAlign: 'center'}}>Previous Projection</th>
            <th style={{ textAlign: 'center'}}>Current Projection</th>
            <th style={{ textAlign: 'center'}}>Previous Projection</th>
        </tr>
        <tr>
        <th style={{ textAlign: 'center'}}>Current Contracts</th>
            <th style={{ textAlign: 'center'}}>{'$' + parseFloat(expectedRevenue1 !== 0 ? Math.round(expectedRevenue1) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + parseFloat(preexpectedRevenue1 !== 0 ? Math.round(preexpectedRevenue1) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + parseFloat(expectedRevenue2 !== 0 ? Math.round(expectedRevenue2) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + parseFloat(preexpectedRevenue2 !== 0 ? Math.round(preexpectedRevenue2) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + parseFloat(expectedRevenue3 !== 0 ? Math.round(expectedRevenue3) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + parseFloat(preexpectedRevenue3 !== 0 ? Math.round(preexpectedRevenue3) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + parseFloat(expectedRevenue4 !== 0 ? Math.round(expectedRevenue4) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + parseFloat(preexpectedRevenue4 !== 0 ? Math.round(preexpectedRevenue4) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + parseFloat(expectedRevenue5 !== 0 ? Math.round(expectedRevenue5) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + parseFloat(preexpectedRevenue5 !== 0 ? Math.round(preexpectedRevenue5) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + parseFloat(expectedRevenue6 !== 0 ? Math.round(expectedRevenue6) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + parseFloat(preexpectedRevenue6 !== 0 ? Math.round(preexpectedRevenue6) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + parseFloat(expectedRevenue7 !== 0 ? Math.round(expectedRevenue7) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + parseFloat(preexpectedRevenue7 !== 0 ? Math.round(preexpectedRevenue7) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + parseFloat(expectedRevenue11 !== 0 ? Math.round(expectedRevenue11) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + parseFloat(preexpectedRevenue11 !== 0 ? Math.round(preexpectedRevenue11) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + parseFloat(expectedRevenue00 !== 0 ? Math.round(expectedRevenue00) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + parseFloat(preexpectedRevenue00 !== 0 ? Math.round(preexpectedRevenue00) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th> 
            <th style={{ textAlign: 'center'}}>{'$' + (revenueTotal !== 0 ? Math.round(revenueTotal) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (prerevenueTotal !== 0 ? Math.round(prerevenueTotal) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th> 
        </tr>
        <tr>
        <th style={{ textAlign: 'center'}}>Awarded But Not Contracted</th>
            <th style={{ textAlign: 'center'}}>{'$' + parseFloat(expectedRevenueABNC1 !== 0 ? Math.round(expectedRevenueABNC1) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + parseFloat(preexpectedRevenueABNC1 !== 0 ? Math.round(preexpectedRevenueABNC1) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + parseFloat(expectedRevenueABNC2 !== 0 ? Math.round(expectedRevenueABNC2) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + parseFloat(preexpectedRevenueABNC2 !== 0 ? Math.round(preexpectedRevenueABNC2) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + parseFloat(expectedRevenueABNC3 !== 0 ? Math.round(expectedRevenueABNC3) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + parseFloat(preexpectedRevenueABNC3 !== 0 ? Math.round(preexpectedRevenueABNC3) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + parseFloat(expectedRevenueABNC4 !== 0 ? Math.round(expectedRevenueABNC4) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + parseFloat(preexpectedRevenueABNC4 !== 0 ? Math.round(preexpectedRevenueABNC4) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + parseFloat(expectedRevenueABNC5 !== 0 ? Math.round(expectedRevenueABNC5) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + parseFloat(preexpectedRevenueABNC5 !== 0 ? Math.round(preexpectedRevenueABNC5) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + parseFloat(expectedRevenueABNC6 !== 0 ? Math.round(expectedRevenueABNC6) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + parseFloat(preexpectedRevenueABNC6 !== 0 ? Math.round(preexpectedRevenueABNC6) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + parseFloat(expectedRevenueABNC7 !== 0 ? Math.round(expectedRevenueABNC7) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + parseFloat(preexpectedRevenueABNC7 !== 0 ? Math.round(preexpectedRevenueABNC7) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + parseFloat(expectedRevenueABNC11 !== 0 ? Math.round(expectedRevenueABNC11) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + parseFloat(preexpectedRevenueABNC11 !== 0 ? Math.round(preexpectedRevenueABNC11) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + parseFloat(expectedRevenueABNC00 !== 0 ? Math.round(expectedRevenueABNC00) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + parseFloat(preexpectedRevenueABNC00 !== 0 ? Math.round(preexpectedRevenueABNC00) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (revenueABNCTotal !== 0 ? Math.round(revenueABNCTotal) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (prerevenueABNCTotal !== 0 ? Math.round(prerevenueABNCTotal) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>  
        </tr>
        <tr>
        <th style={{ textAlign: 'center'}}>Future Awards</th>
            <th style={{ textAlign: 'center'}}>{'$' + parseFloat(expectedRevenueFA1 !== 0 ? Math.round(expectedRevenueFA1) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + parseFloat(preexpectedRevenueFA1 !== 0 ? Math.round(preexpectedRevenueFA1) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + parseFloat(expectedRevenueFA2 !== 0 ? Math.round(expectedRevenueFA2) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + parseFloat(preexpectedRevenueFA2 !== 0 ? Math.round(preexpectedRevenueFA2) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + parseFloat(expectedRevenueFA3 !== 0 ? Math.round(expectedRevenueFA3) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + parseFloat(preexpectedRevenueFA3 !== 0 ? Math.round(preexpectedRevenueFA3) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + parseFloat(expectedRevenueFA4 !== 0 ? Math.round(expectedRevenueFA4) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + parseFloat(preexpectedRevenueFA4 !== 0 ? Math.round(preexpectedRevenueFA4) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + parseFloat(expectedRevenueFA5 !== 0 ? Math.round(expectedRevenueFA5) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + parseFloat(preexpectedRevenueFA5 !== 0 ? Math.round(preexpectedRevenueFA5) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + parseFloat(expectedRevenueFA6 !== 0 ? Math.round(expectedRevenueFA6) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + parseFloat(preexpectedRevenueFA6 !== 0 ? Math.round(preexpectedRevenueFA6) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + parseFloat(expectedRevenueFA7 !== 0 ? Math.round(expectedRevenueFA7) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + parseFloat(preexpectedRevenueFA7 !== 0 ? Math.round(preexpectedRevenueFA7) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + parseFloat(expectedRevenueFA11 !== 0 ? Math.round(expectedRevenueFA11) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + parseFloat(preexpectedRevenueFA11 !== 0 ? Math.round(preexpectedRevenueFA11) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + parseFloat(expectedRevenueFA00 !== 0 ? Math.round(expectedRevenueFA00) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + parseFloat(preexpectedRevenueFA00 !== 0 ? Math.round(expectedRevenueFA00) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th> 
            <th style={{ textAlign: 'center'}}>{'$' + (revenueFATotal !== 0 ? Math.round(revenueFATotal) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (prerevenueFATotal !== 0 ? Math.round(prerevenueFATotal) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th> 
        </tr>
        <tr>
        <th style={{ textAlign: 'center'}}>Management Adjustment</th>
            <th style={{ textAlign: 'center'}}>{'$' + ma_revenue_1}</th>
            <th style={{ textAlign: 'center'}}>{'$' + prev_ma_revenue_1}</th>
            <th style={{ textAlign: 'center'}}>{'$' + ma_revenue_2}</th>
            <th style={{ textAlign: 'center'}}>{'$' + prev_ma_revenue_2}</th>
            <th style={{ textAlign: 'center'}}>{'$' + ma_revenue_3}</th>
            <th style={{ textAlign: 'center'}}>{'$' + prev_ma_revenue_3}</th>
            <th style={{ textAlign: 'center'}}>{'$' + ma_revenue_4}</th>
            <th style={{ textAlign: 'center'}}>{'$' + prev_ma_revenue_4}</th>
            <th style={{ textAlign: 'center'}}>{'$' + ma_revenue_5}</th>
            <th style={{ textAlign: 'center'}}>{'$' + prev_ma_revenue_5}</th>
            <th style={{ textAlign: 'center'}}>{'$' + ma_revenue_6}</th>
            <th style={{ textAlign: 'center'}}>{'$' + prev_ma_revenue_6}</th>
            <th style={{ textAlign: 'center'}}>{'$' + ma_revenue_7}</th>
            <th style={{ textAlign: 'center'}}>{'$' + prev_ma_revenue_7}</th>
            <th style={{ textAlign: 'center'}}>{'$' + ma_revenue_11}</th>
            <th style={{ textAlign: 'center'}}>{'$' + prev_ma_revenue_11}</th>
            <th style={{ textAlign: 'center'}}>{'$' + ma_revenue_00}</th>
            <th style={{ textAlign: 'center'}}>{'$' + prev_ma_revenue_00}</th> 
            <th style={{ textAlign: 'center'}}>{'$' + (ma_revenue_1 + ma_revenue_2 + ma_revenue_3 + ma_revenue_4 + ma_revenue_5 + ma_revenue_6 + ma_revenue_7 + ma_revenue_11 + ma_revenue_00)}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (prev_ma_revenue_1 + prev_ma_revenue_2 + prev_ma_revenue_3 + prev_ma_revenue_4 + prev_ma_revenue_5 + prev_ma_revenue_6 + prev_ma_revenue_7 + prev_ma_revenue_11 + prev_ma_revenue_00)}</th> 
        </tr>
        <tr>
        <th style={{ textAlign: 'center'}}>Total</th>
            <th style={{ textAlign: 'center'}}>{'$' + (((Math.round(expectedRevenue1) + Math.round(expectedRevenueABNC1) + Math.round(expectedRevenueFA1))) + ma_revenue_1).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (((Math.round(preexpectedRevenue1) + Math.round(preexpectedRevenueABNC1) + Math.round(preexpectedRevenueFA1))) + prev_ma_revenue_1).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (((Math.round(expectedRevenue2) + Math.round(expectedRevenueABNC2) + Math.round(expectedRevenueFA2))) + ma_revenue_2).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (((Math.round(preexpectedRevenue2) + Math.round(preexpectedRevenueABNC2) + Math.round(preexpectedRevenueFA2))) + prev_ma_revenue_2).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (((Math.round(expectedRevenue3) + Math.round(expectedRevenueABNC3) + Math.round(expectedRevenueFA3))) + ma_revenue_3).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (((Math.round(preexpectedRevenue3) + Math.round(preexpectedRevenueABNC3) + Math.round(preexpectedRevenueFA3))) + prev_ma_revenue_3).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (((Math.round(expectedRevenue4) + Math.round(expectedRevenueABNC4) + Math.round(expectedRevenueFA4))) + ma_revenue_4).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (((Math.round(preexpectedRevenue4) + Math.round(preexpectedRevenueABNC4) + Math.round(preexpectedRevenueFA4))) + prev_ma_revenue_4).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (((Math.round(expectedRevenue5) + Math.round(expectedRevenueABNC5) + Math.round(expectedRevenueFA5))) + ma_revenue_5).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (((Math.round(preexpectedRevenue5) + Math.round(preexpectedRevenueABNC5) + Math.round(preexpectedRevenueFA5))) + prev_ma_revenue_5).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (((Math.round(expectedRevenue6) + Math.round(expectedRevenueABNC6) + Math.round(expectedRevenueFA6))) + ma_revenue_6).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (((Math.round(preexpectedRevenue6) + Math.round(preexpectedRevenueABNC6) + Math.round(preexpectedRevenueFA6))) + prev_ma_revenue_6).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (((Math.round(expectedRevenue7) + Math.round(expectedRevenueABNC7) + Math.round(expectedRevenueFA7))) + ma_revenue_7).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (((Math.round(preexpectedRevenue7) + Math.round(preexpectedRevenueABNC7) + Math.round(preexpectedRevenueFA7))) + prev_ma_revenue_7).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (((Math.round(expectedRevenue11) + Math.round(expectedRevenueABNC11) + Math.round(expectedRevenueFA11))) + ma_revenue_11).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (((Math.round(preexpectedRevenue11) + Math.round(preexpectedRevenueABNC11) + Math.round(preexpectedRevenueFA11))) + prev_ma_revenue_11).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (((Math.round(expectedRevenue00) + Math.round(expectedRevenueABNC00) + Math.round(expectedRevenueFA00))) + + ma_revenue_00).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (((Math.round(preexpectedRevenue00) + Math.round(preexpectedRevenueABNC00) + Math.round(preexpectedRevenueFA00))) + prev_ma_revenue_00).toLocaleString(undefined, {maximumFractionDigits:2})}</th> 
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(revenueFinalTotal + ma_revenue_1 + ma_revenue_2 + ma_revenue_3 + ma_revenue_4 + ma_revenue_5 + ma_revenue_6 + ma_revenue_7 + ma_revenue_11 + ma_revenue_00).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(prerevenueFinalTotal + prev_ma_revenue_1 + prev_ma_revenue_2 + prev_ma_revenue_3 + prev_ma_revenue_4 + prev_ma_revenue_5 + prev_ma_revenue_6 + prev_ma_revenue_7 + prev_ma_revenue_11 + prev_ma_revenue_00).toLocaleString(undefined, {maximumFractionDigits:2})}</th> 
        </tr>
        </>
  } else if(value === 'jobProfit'){
    return <>
        <tr>
        <th style={{ textAlign: 'center'}}>Job Profit</th>
        <th style={{ textAlign: 'center'}}>Current Projection</th>
        <th style={{ textAlign: 'center'}}>Previous Projection</th>
        <th style={{ textAlign: 'center'}}>Current Projection</th>
        <th style={{ textAlign: 'center'}}>Previous Projection</th>
        <th style={{ textAlign: 'center'}}>Current Projection</th>
        <th style={{ textAlign: 'center'}}>Previous Projection</th>
        <th style={{ textAlign: 'center'}}>Current Projection</th>
        <th style={{ textAlign: 'center'}}>Previous Projection</th>
        <th style={{ textAlign: 'center'}}>Current Projection</th>
        <th style={{ textAlign: 'center'}}>Previous Projection</th>
        <th style={{ textAlign: 'center'}}>Current Projection</th>
        <th style={{ textAlign: 'center'}}>Previous Projection</th>
        <th style={{ textAlign: 'center'}}>Current Projection</th>
        <th style={{ textAlign: 'center'}}>Previous Projection</th>
        <th style={{ textAlign: 'center'}}>Current Projection</th>
        <th style={{ textAlign: 'center'}}>Previous Projection</th>
        <th style={{ textAlign: 'center'}}>Current Projection</th>
        <th style={{ textAlign: 'center'}}>Previous Projection</th>
        <th style={{ textAlign: 'center'}}>Current Projection</th>
        <th style={{ textAlign: 'center'}}>Previous Projection</th>
        </tr>
        <tr>
        <th style={{ textAlign: 'center'}}>Current Contracts</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(expectedProfit1).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(preexpectedProfit1).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(expectedProfit2).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(preexpectedProfit2).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(expectedProfit3).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(preexpectedProfit3).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(expectedProfit4).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(preexpectedProfit4).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(expectedProfit5).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(preexpectedProfit5).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(expectedProfit6).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(preexpectedProfit6).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(expectedProfit7).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(preexpectedProfit7).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(expectedProfit11).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(preexpectedProfit11).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(expectedProfit00).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(preexpectedProfit00).toLocaleString(undefined, {maximumFractionDigits:2})}</th> 
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(jobProfitTotal).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(prejobProfitTotal).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
        </tr>
        <tr>
        <th style={{ textAlign: 'center'}}>Awarded But Not Contracted</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(expectedProfitABNC1).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(preexpectedProfitABNC1).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(expectedProfitABNC2).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(preexpectedProfitABNC2).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(expectedProfitABNC3).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(preexpectedProfitABNC3).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(expectedProfitABNC4).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(preexpectedProfitABNC4).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(expectedProfitABNC5).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(preexpectedProfitABNC5).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(expectedProfitABNC6).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(preexpectedProfitABNC6).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(expectedProfitABNC7).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(preexpectedProfitABNC7).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(expectedProfitABNC11).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(preexpectedProfitABNC11).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(expectedProfitABNC00).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(preexpectedProfitABNC00).toLocaleString(undefined, {maximumFractionDigits:2})}</th> 
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(jobProfitABNCTotal).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(prejobProfitABNCTotal).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
        </tr>
        <tr>
        <th style={{ textAlign: 'center'}}>Future Awards</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(expectedProfitFA1).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(preexpectedProfitFA1).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(expectedProfitFA2).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(preexpectedProfitFA2).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(expectedProfitFA3).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(preexpectedProfitFA3).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(expectedProfitFA4).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(preexpectedProfitFA4).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(expectedProfitFA5).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(preexpectedProfitFA5).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(expectedProfitFA6).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(preexpectedProfitFA6).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(expectedProfitFA7).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(preexpectedProfitFA7).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(expectedProfitFA11).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(preexpectedProfitFA11).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(expectedProfitFA00).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(preexpectedProfitFA00).toLocaleString(undefined, {maximumFractionDigits:2})}</th> 
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(jobProfitFATotal).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(prejobProfitFATotal).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
        </tr>
        <tr>
        <th style={{ textAlign: 'center'}}>Management Adjustment</th>
            <th style={{ textAlign: 'center'}}>{'$' + ma_profit_1}</th>
            <th style={{ textAlign: 'center'}}>{'$' + prev_ma_profit_1}</th>
            <th style={{ textAlign: 'center'}}>{'$' + ma_profit_2}</th>
            <th style={{ textAlign: 'center'}}>{'$' + prev_ma_profit_2}</th>
            <th style={{ textAlign: 'center'}}>{'$' + ma_profit_3}</th>
            <th style={{ textAlign: 'center'}}>{'$' + prev_ma_profit_3}</th>
            <th style={{ textAlign: 'center'}}>{'$' + ma_profit_4}</th>
            <th style={{ textAlign: 'center'}}>{'$' + prev_ma_profit_4}</th>
            <th style={{ textAlign: 'center'}}>{'$' + ma_profit_5}</th>
            <th style={{ textAlign: 'center'}}>{'$' + prev_ma_profit_5}</th>
            <th style={{ textAlign: 'center'}}>{'$' + ma_profit_6}</th>
            <th style={{ textAlign: 'center'}}>{'$' + prev_ma_profit_6}</th>
            <th style={{ textAlign: 'center'}}>{'$' + ma_profit_7}</th>
            <th style={{ textAlign: 'center'}}>{'$' + prev_ma_profit_7}</th>
            <th style={{ textAlign: 'center'}}>{'$' + ma_profit_11}</th>
            <th style={{ textAlign: 'center'}}>{'$' + prev_ma_profit_11}</th>
            <th style={{ textAlign: 'center'}}>{'$' + ma_profit_00}</th>
            <th style={{ textAlign: 'center'}}>{'$' + prev_ma_profit_00}</th> 
            <th style={{ textAlign: 'center'}}>{'$' + (ma_profit_1 + ma_profit_2 + ma_profit_3 + ma_profit_4 + ma_profit_5 + ma_profit_6 + ma_profit_7 + ma_profit_11 + ma_profit_00)}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (prev_ma_profit_1 + prev_ma_profit_2 + prev_ma_profit_3 + prev_ma_profit_4 + prev_ma_profit_5 + prev_ma_profit_6 + prev_ma_profit_7 + prev_ma_profit_11 + prev_ma_profit_00)}</th>
        </tr>
        <tr>
        <th style={{ textAlign: 'center'}}>Total</th>
            <th style={{ textAlign: 'center'}}>{'$' + (((Math.round(expectedProfit1) + Math.round(expectedProfitABNC1) + Math.round(expectedProfitFA1))) + ma_profit_1).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (((Math.round(preexpectedProfit1) + Math.round(preexpectedProfitABNC1) + Math.round(preexpectedProfitFA1))) + prev_ma_profit_1).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (((Math.round(expectedProfit2) + Math.round(expectedProfitABNC2) + Math.round(expectedProfitFA2))) + ma_profit_2).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (((Math.round(preexpectedProfit2) + Math.round(preexpectedProfitABNC2) + Math.round(preexpectedProfitFA2))) + prev_ma_profit_2).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (((Math.round(expectedProfit3) + Math.round(expectedProfitABNC3) + Math.round(expectedProfitFA3))) + ma_profit_3).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (((Math.round(preexpectedProfit3) + Math.round(preexpectedProfitABNC3) + Math.round(preexpectedProfitFA3))) + prev_ma_profit_3).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (((Math.round(expectedProfit4) + Math.round(expectedProfitABNC4) + Math.round(expectedProfitFA4))) + ma_profit_4).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (((Math.round(preexpectedProfit4) + Math.round(preexpectedProfitABNC4) + Math.round(preexpectedProfitFA4))) + prev_ma_profit_4).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (((Math.round(expectedProfit5) + Math.round(expectedProfitABNC5) + Math.round(expectedProfitFA5))) + ma_profit_5).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (((Math.round(preexpectedProfit5) + Math.round(preexpectedProfitABNC5) + Math.round(preexpectedProfitFA5))) + prev_ma_profit_5).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (((Math.round(expectedProfit6) + Math.round(expectedProfitABNC6) + Math.round(expectedProfitFA6))) + ma_profit_6).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (((Math.round(preexpectedProfit6) + Math.round(preexpectedProfitABNC6) + Math.round(preexpectedProfitFA6))) + prev_ma_profit_6).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (((Math.round(expectedProfit7) + Math.round(expectedProfitABNC7) + Math.round(expectedProfitFA7))) + ma_profit_7).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (((Math.round(preexpectedProfit7) + Math.round(preexpectedProfitABNC7) + Math.round(preexpectedProfitFA7))) + prev_ma_profit_7).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (((Math.round(expectedProfit11) + Math.round(expectedProfitABNC11) + Math.round(expectedProfitFA11))) + ma_profit_11).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (((Math.round(preexpectedProfit11) + Math.round(preexpectedProfitABNC11) + Math.round(preexpectedProfitFA11))) + prev_ma_profit_11).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (((Math.round(expectedProfit00) + Math.round(expectedProfitABNC00) + Math.round(expectedProfitFA00))) + ma_profit_1).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (((Math.round(preexpectedProfit00) + Math.round(preexpectedProfitABNC00) + Math.round(preexpectedProfitFA00))) + prev_ma_profit_1).toLocaleString(undefined, {maximumFractionDigits:2})}</th> 
            <th style={{ textAlign: 'center'}}>{'$' + Math.round((jobProfitFinalTotal) + ma_profit_1 + ma_profit_2 + ma_profit_3 + ma_profit_4 + ma_profit_5 + ma_profit_6 + ma_profit_7 + ma_profit_11 + ma_profit_00).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round((prevJobProfitFinalTotal) + prev_ma_profit_1 + prev_ma_profit_2 + prev_ma_profit_3 + prev_ma_profit_4 + prev_ma_profit_5 + prev_ma_profit_6 + prev_ma_profit_7 + prev_ma_profit_11 + prev_ma_profit_00).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
        </tr>
    </>
} else if(value === 'PercentRev'){
  return <>
        <tr>
            <th style={{ textAlign: 'center'}}>% Rev</th>
            <th style={{ textAlign: 'center'}}>Current Projection</th>
            <th style={{ textAlign: 'center'}}>Previous Projection</th>
            <th style={{ textAlign: 'center'}}>Current Projection</th>
            <th style={{ textAlign: 'center'}}>Previous Projection</th>
            <th style={{ textAlign: 'center'}}>Current Projection</th>
            <th style={{ textAlign: 'center'}}>Previous Projection</th>
            <th style={{ textAlign: 'center'}}>Current Projection</th>
            <th style={{ textAlign: 'center'}}>Previous Projection</th>
            <th style={{ textAlign: 'center'}}>Current Projection</th>
            <th style={{ textAlign: 'center'}}>Previous Projection</th>
            <th style={{ textAlign: 'center'}}>Current Projection</th>
            <th style={{ textAlign: 'center'}}>Previous Projection</th>
            <th style={{ textAlign: 'center'}}>Current Projection</th>
            <th style={{ textAlign: 'center'}}>Previous Projection</th>
            <th style={{ textAlign: 'center'}}>Current Projection</th>
            <th style={{ textAlign: 'center'}}>Previous Projection</th>
            <th style={{ textAlign: 'center'}}>Current Projection</th>
            <th style={{ textAlign: 'center'}}>Previous Projection</th>
            <th style={{ textAlign: 'center'}}>Current Projection</th>
            <th style={{ textAlign: 'center'}}>Previous Projection</th>
        </tr>
        <tr>
        <th style={{ textAlign: 'center'}}>Current Contracts</th>
            <th style={{ textAlign: 'center'}}>{parseFloat((expectedRevenue1 !== 0 ? parseFloat(expectedProfit1)/expectedRevenue1 : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{parseFloat((preexpectedRevenue1 !== 0 ? parseFloat(preexpectedProfit1)/preexpectedRevenue1 : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{parseFloat((expectedRevenue2 !== 0 ? parseFloat(expectedProfit2)/expectedRevenue2 : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{parseFloat((preexpectedRevenue2 !== 0 ? parseFloat(preexpectedProfit2)/preexpectedRevenue2 : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{parseFloat((expectedRevenue3 !== 0 ? parseFloat(expectedProfit3)/expectedRevenue3 : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{parseFloat((preexpectedRevenue3 !== 0 ? parseFloat(preexpectedProfit3)/preexpectedRevenue3 : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{parseFloat((expectedRevenue4 !== 0 ? parseFloat(expectedProfit4)/expectedRevenue4 : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{parseFloat((preexpectedRevenue4 !== 0 ? parseFloat(preexpectedProfit4)/preexpectedRevenue4 : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{parseFloat((expectedRevenue5 !== 0 ? parseFloat(expectedProfit5)/expectedRevenue5 : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{parseFloat((preexpectedRevenue5 !== 0 ? parseFloat(preexpectedProfit5)/preexpectedRevenue5 : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{parseFloat((expectedRevenue6 !== 0 ? parseFloat(expectedProfit6)/expectedRevenue6 : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{parseFloat((preexpectedRevenue6 !== 0 ? parseFloat(preexpectedProfit6)/preexpectedRevenue6 : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{parseFloat((expectedRevenue7 !== 0 ? parseFloat(expectedProfit7)/expectedRevenue7 : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{parseFloat((preexpectedRevenue7 !== 0 ? parseFloat(preexpectedProfit7)/preexpectedRevenue7 : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{parseFloat((expectedRevenue11 !== 0 ? parseFloat(expectedProfit11)/expectedRevenue11 : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{parseFloat((preexpectedRevenue11 !== 0 ? parseFloat(preexpectedProfit11)/preexpectedRevenue11 : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{parseFloat((expectedRevenue00 !== 0 ? parseFloat(expectedProfit00)/expectedRevenue00 : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{parseFloat((preexpectedRevenue00 !== 0 ? parseFloat(preexpectedProfit00)/preexpectedRevenue00 : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{parseFloat((revenueTotal !== 0 ? parseFloat(jobProfitTotal)/revenueTotal : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{parseFloat((prerevenueTotal !== 0 ? parseFloat(prejobProfitTotal)/prerevenueTotal : 0) * 100).toFixed(1) + '%'}</th>  
        </tr>
        <tr>
        <th style={{ textAlign: 'center'}}>Awarded But Not Contracted</th>
            <th style={{ textAlign: 'center'}}>{((expectedRevenueABNC1 !== 0 ? expectedProfitABNC1/expectedRevenueABNC1 : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{((preexpectedRevenueABNC1 !== 0 ? preexpectedProfitABNC1/preexpectedRevenueABNC1 : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{((expectedRevenueABNC2 !== 0 ? expectedProfitABNC2/expectedRevenueABNC2 : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{((preexpectedRevenueABNC2 !== 0 ? preexpectedProfitABNC2/preexpectedRevenueABNC2 : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{((expectedRevenueABNC3 !== 0 ? expectedProfitABNC1/expectedRevenueABNC3 : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{((preexpectedRevenueABNC3 !== 0 ? preexpectedProfitABNC1/preexpectedRevenueABNC3 : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{((expectedRevenueABNC4 !== 0 ? expectedProfitABNC4/expectedRevenueABNC4 : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{((preexpectedRevenueABNC4 !== 0 ? preexpectedProfitABNC4/preexpectedRevenueABNC4 : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{((expectedRevenueABNC5 !== 0 ? expectedProfitABNC5/expectedRevenueABNC5 : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{((preexpectedRevenueABNC5 !== 0 ? preexpectedProfitABNC5/preexpectedRevenueABNC5 : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{((expectedRevenueABNC6 !== 0 ? expectedProfitABNC6/expectedRevenueABNC6 : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{((preexpectedRevenueABNC6 !== 0 ? preexpectedProfitABNC6/preexpectedRevenueABNC6 : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{((expectedRevenueABNC7 !== 0 ? expectedProfitABNC7/expectedRevenueABNC7 : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{((preexpectedRevenueABNC7 !== 0 ? preexpectedProfitABNC7/preexpectedRevenueABNC7 : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{((expectedRevenueABNC11 !== 0 ? expectedProfitABNC11/expectedRevenueABNC11 : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{((preexpectedRevenueABNC11 !== 0 ? preexpectedProfitABNC11/preexpectedRevenueABNC11 : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{((expectedRevenueABNC00 !== 0 ? expectedProfitABNC00/expectedRevenueABNC00 : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{((preexpectedRevenueABNC00 !== 0 ? preexpectedProfitABNC00/preexpectedRevenueABNC00 : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{((revenueABNCTotal !== 0 ? jobProfitABNCTotal/revenueABNCTotal : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{((prerevenueABNCTotal !== 0 ? prejobProfitABNCTotal/prerevenueABNCTotal : 0) * 100).toFixed(1) + '%'}</th>  
        </tr>
        <tr>
        <th style={{ textAlign: 'center'}}>Future Awards</th>
            <th style={{ textAlign: 'center'}}>{((expectedRevenueFA1 !== 0 ? expectedProfitFA1/ expectedRevenueFA1 : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{((preexpectedRevenueFA1 !== 0 ? preexpectedProfitFA1/preexpectedRevenueFA1 : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{((expectedRevenueFA2 !== 0 ? expectedProfitFA2/ expectedRevenueFA2 : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{((preexpectedRevenueFA2 !== 0 ? preexpectedProfitFA2/ preexpectedRevenueFA2 : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{((expectedRevenueFA3 !== 0 ? expectedProfitFA3/ expectedRevenueFA3 : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{((preexpectedRevenueFA3 !== 0 ? preexpectedProfitFA3/ preexpectedRevenueFA3 : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{((expectedRevenueFA4 !== 0 ? expectedProfitFA4/ expectedRevenueFA4 : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{((preexpectedRevenueFA4 !== 0 ? preexpectedProfitFA4/ preexpectedRevenueFA4 : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{((expectedRevenueFA5 !== 0 ? expectedProfitFA5/ expectedRevenueFA5 : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{((preexpectedRevenueFA5 !== 0 ? preexpectedProfitFA5/ preexpectedRevenueFA5 : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{((expectedRevenueFA6 !== 0 ? expectedProfitFA6/ expectedRevenueFA6 : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{((preexpectedRevenueFA6 !== 0 ? preexpectedProfitFA6/ preexpectedRevenueFA6 : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{((expectedRevenueFA7 !== 0 ? expectedProfitFA7/ expectedRevenueFA7 : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{((preexpectedRevenueFA7 !== 0 ? preexpectedProfitFA7/ preexpectedRevenueFA7 : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{((expectedRevenueFA11 !== 0 ? expectedProfitFA11/ expectedRevenueFA11 : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{((preexpectedRevenueFA11 !== 0 ? preexpectedProfitFA11/ preexpectedRevenueFA11 : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{((expectedRevenueFA00 !== 0 ? expectedProfitFA00/ expectedRevenueFA00 : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{((preexpectedRevenueFA00 !== 0 ? preexpectedProfitFA00/ preexpectedRevenueFA00 : 0) * 100).toFixed(1) + '%'}</th> 
            <th style={{ textAlign: 'center'}}>{((revenueFATotal !== 0 ? jobProfitFATotal/ revenueFATotal : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{((prerevenueFATotal !== 0 ? prejobProfitFATotal/ prerevenueFATotal : 0) * 100).toFixed(1) + '%'}</th> 
        </tr>
        <tr>
        <th style={{ textAlign: 'center'}}>Total</th>
            <th style={{ textAlign: 'center'}}>{(((expectedRevenue1 + expectedRevenueABNC1 + expectedRevenueFA1) !== 0 ? ((parseFloat(expectedProfit1) + parseFloat(expectedProfitABNC1) + parseFloat(expectedProfitFA1)))/ (expectedRevenue1 + expectedRevenueABNC1 + expectedRevenueFA1) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{(((preexpectedRevenue1 + preexpectedRevenueABNC1 + preexpectedRevenueFA1) !== 0 ? ((parseFloat(preexpectedProfit1) + parseFloat(preexpectedProfitABNC1) + parseFloat(preexpectedProfitFA1)))/ (preexpectedRevenue1 + preexpectedRevenueABNC1 + preexpectedRevenueFA1) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{(((expectedRevenue2 + expectedRevenueABNC2 + expectedRevenueFA2) !== 0 ? ((parseFloat(expectedProfit2) + parseFloat(expectedProfitABNC2) + parseFloat(expectedProfitFA2)))/ (expectedRevenue2 + expectedRevenueABNC2 + expectedRevenueFA2) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{(((preexpectedRevenue2 + preexpectedRevenueABNC2 + preexpectedRevenueFA2) !== 0 ? ((parseFloat(preexpectedProfit2) + parseFloat(preexpectedProfitABNC2) + parseFloat(preexpectedProfitFA2)))/ (preexpectedRevenue2 + preexpectedRevenueABNC2 + preexpectedRevenueFA2) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{(((expectedRevenue3 + expectedRevenueABNC3 + expectedRevenueFA3) !== 0 ? ((parseFloat(expectedProfit3) + parseFloat(expectedProfitABNC3) + parseFloat(expectedProfitFA3)))/ (expectedRevenue3 + expectedRevenueABNC3 + expectedRevenueFA3) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{(((preexpectedRevenue3 + preexpectedRevenueABNC3 + preexpectedRevenueFA3) !== 0 ? ((parseFloat(preexpectedProfit3) + parseFloat(preexpectedProfitABNC3) + parseFloat(preexpectedProfitFA3)))/ (preexpectedRevenue3 + preexpectedRevenueABNC3 + preexpectedRevenueFA3) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{(((expectedRevenue4 + expectedRevenueABNC4 + expectedRevenueFA4) !== 0 ? ((parseFloat(expectedProfit4) + parseFloat(expectedProfitABNC4) + parseFloat(expectedProfitFA4)))/ (expectedRevenue4 + expectedRevenueABNC4 + expectedRevenueFA4) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{(((preexpectedRevenue4 + preexpectedRevenueABNC4 + preexpectedRevenueFA4) !== 0 ? ((parseFloat(preexpectedProfit4) + parseFloat(preexpectedProfitABNC4) + parseFloat(preexpectedProfitFA4)))/ (preexpectedRevenue4 + preexpectedRevenueABNC4 + preexpectedRevenueFA4) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{(((expectedRevenue5 + expectedRevenueABNC5 + expectedRevenueFA5) !== 0 ? ((parseFloat(expectedProfit5) + parseFloat(expectedProfitABNC5) + parseFloat(expectedProfitFA5)))/ (expectedRevenue5 + expectedRevenueABNC5 + expectedRevenueFA5) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{(((preexpectedRevenue5 + preexpectedRevenueABNC5 + preexpectedRevenueFA5) !== 0 ? ((parseFloat(preexpectedProfit5) + parseFloat(preexpectedProfitABNC5) + parseFloat(preexpectedProfitFA5)))/ (preexpectedRevenue5 + preexpectedRevenueABNC5 + preexpectedRevenueFA5) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{(((expectedRevenue6 + expectedRevenueABNC6 + expectedRevenueFA6) !== 0 ? ((parseFloat(expectedProfit6) + parseFloat(expectedProfitABNC6) + parseFloat(expectedProfitFA6)))/ (expectedRevenue6 + expectedRevenueABNC6 + expectedRevenueFA6) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{(((preexpectedRevenue6 + preexpectedRevenueABNC6 + preexpectedRevenueFA6) !== 0 ? ((parseFloat(preexpectedProfit6) + parseFloat(preexpectedProfitABNC6) + parseFloat(preexpectedProfitFA6)))/ (preexpectedRevenue6 + preexpectedRevenueABNC6 + preexpectedRevenueFA6) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{(((expectedRevenue7 + expectedRevenueABNC7 + expectedRevenueFA7) !== 0 ? ((parseFloat(expectedProfit7) + parseFloat(expectedProfitABNC7) + parseFloat(expectedProfitFA7)))/ (expectedRevenue7 + expectedRevenueABNC7 + expectedRevenueFA7) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{(((preexpectedRevenue7 + preexpectedRevenueABNC7 + preexpectedRevenueFA7) !== 0 ? ((parseFloat(preexpectedProfit7) + parseFloat(preexpectedProfitABNC7) + parseFloat(preexpectedProfitFA7)))/ (preexpectedRevenue7 + preexpectedRevenueABNC7 + preexpectedRevenueFA7) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{(((expectedRevenue11 + expectedRevenueABNC11 + expectedRevenueFA11) !== 0 ? ((parseFloat(expectedProfit11) + parseFloat(expectedProfitABNC11) + parseFloat(expectedProfitFA11)))/ (expectedRevenue11 + expectedRevenueABNC11 + expectedRevenueFA11) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{(((preexpectedRevenue11 + preexpectedRevenueABNC11 + preexpectedRevenueFA11) !== 0 ? ((parseFloat(preexpectedProfit11) + parseFloat(preexpectedProfitABNC11) + parseFloat(preexpectedProfitFA11)))/ (preexpectedRevenue11 + preexpectedRevenueABNC11 + preexpectedRevenueFA11) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{(((expectedRevenue00 + expectedRevenueABNC00 + expectedRevenueFA00) !== 0 ? ((parseFloat(expectedProfit00) + parseFloat(expectedProfitABNC00) + parseFloat(expectedProfitFA00)))/ (expectedRevenue00 + expectedRevenueABNC00 + expectedRevenueFA00) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{(((preexpectedRevenue00 + preexpectedRevenueABNC00 + preexpectedRevenueFA00) !== 0 ? ((parseFloat(preexpectedProfit00) + parseFloat(preexpectedProfitABNC00) + parseFloat(preexpectedProfitFA00)))/ (preexpectedRevenue00 + preexpectedRevenueABNC00 + preexpectedRevenueFA00) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{(((revenueTotal + revenueABNCTotal + revenueFATotal) !== 0 ? (jobProfitTotal + jobProfitABNCTotal + jobProfitFATotal)/ (revenueTotal + revenueABNCTotal + revenueFATotal) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{(((prerevenueTotal + prerevenueABNCTotal + prerevenueFATotal) !== 0 ? (prejobProfitTotal + prejobProfitABNCTotal + prejobProfitFATotal)/ (prerevenueTotal + prerevenueABNCTotal + prerevenueFATotal) : 0) * 100).toFixed(1) + '%'}</th>  
        </tr>
</>
}  else if(value === 'minorityInterest'){
  return <>
           <tr>
           <th></th>
           <th style={{ textAlign: 'center'}}>Current Projection</th>
           <th style={{ textAlign: 'center'}}>Previous Projection</th>
           <th style={{ textAlign: 'center'}}>Current Projection</th>
           <th style={{ textAlign: 'center'}}>Previous Projection</th>
           <th style={{ textAlign: 'center'}}>Current Projection</th>
           <th style={{ textAlign: 'center'}}>Previous Projection</th>
           <th style={{ textAlign: 'center'}}>Current Projection</th>
           <th style={{ textAlign: 'center'}}>Previous Projection</th>
           <th style={{ textAlign: 'center'}}>Current Projection</th>
           <th style={{ textAlign: 'center'}}>Previous Projection</th>
           <th style={{ textAlign: 'center'}}>Current Projection</th>
           <th style={{ textAlign: 'center'}}>Previous Projection</th>
           <th style={{ textAlign: 'center'}}>Current Projection</th>
           <th style={{ textAlign: 'center'}}>Previous Projection</th>
           <th style={{ textAlign: 'center'}}>Current Projection</th>
           <th style={{ textAlign: 'center'}}>Previous Projection</th>
           <th style={{ textAlign: 'center'}}>Current Projection</th>
           <th style={{ textAlign: 'center'}}>Previous Projection</th>
           <th style={{ textAlign: 'center'}}>Current Projection</th>
           <th style={{ textAlign: 'center'}}>Previous Projection</th>
        </tr>
        <tr>
        <th style={{ textAlign: 'center'}}>Total Job Profit</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(totalJobProfitOne).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(pretotalJobProfitOne).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(totalJobProfitTwo).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(pretotalJobProfitTwo).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(totalJobProfitThree).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(pretotalJobProfitThree).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(totalJobProfitFour).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(pretotalJobProfitFour).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(totalJobProfitFive).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(pretotalJobProfitFive).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(totalJobProfitSix).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(pretotalJobProfitSix).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(totalJobProfitSeven).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(pretotalJobProfitSeven).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(totalJobProfitEleven).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(pretotalJobProfitEleven).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(totalJobProfitZero).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(pretotalJobProfitZero).toLocaleString(undefined, {maximumFractionDigits:2})}</th> 
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(totalJobProfitConsolidated).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(pretotalJobProfitConsolidated).toLocaleString(undefined, {maximumFractionDigits:2})}</th> 
        </tr>
        <tr>
        <th style={{ textAlign: 'center'}}>% Rev</th>
            <th style={{ textAlign: 'center'}}>{(((expectedRevenue1 + expectedRevenueABNC1 + expectedRevenueFA1) !== 0 ? ((parseFloat(expectedProfit1) + parseFloat(expectedProfitABNC1) + parseFloat(expectedProfitFA1)))/ (expectedRevenue1 + expectedRevenueABNC1 + expectedRevenueFA1) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{(((preexpectedRevenue1 + preexpectedRevenueABNC1 + preexpectedRevenueFA1) !== 0 ? ((parseFloat(preexpectedProfit1) + parseFloat(preexpectedProfitABNC1) + parseFloat(preexpectedProfitFA1)))/ (preexpectedRevenue1 + preexpectedRevenueABNC1 + preexpectedRevenueFA1) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{(((expectedRevenue2 + expectedRevenueABNC2 + expectedRevenueFA2) !== 0 ? ((parseFloat(expectedProfit2) + parseFloat(expectedProfitABNC2) + parseFloat(expectedProfitFA2)))/ (expectedRevenue2 + expectedRevenueABNC2 + expectedRevenueFA2) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{(((preexpectedRevenue2 + preexpectedRevenueABNC2 + preexpectedRevenueFA2) !== 0 ? ((parseFloat(preexpectedProfit2) + parseFloat(preexpectedProfitABNC2) + parseFloat(preexpectedProfitFA2)))/ (preexpectedRevenue2 + preexpectedRevenueABNC2 + preexpectedRevenueFA2) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{(((expectedRevenue3 + expectedRevenueABNC3 + expectedRevenueFA3) !== 0 ? ((parseFloat(expectedProfit3) + parseFloat(expectedProfitABNC3) + parseFloat(expectedProfitFA3)))/ (expectedRevenue3 + expectedRevenueABNC3 + expectedRevenueFA3) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{(((preexpectedRevenue3 + preexpectedRevenueABNC3 + preexpectedRevenueFA3) !== 0 ? ((parseFloat(preexpectedProfit3) + parseFloat(preexpectedProfitABNC3) + parseFloat(preexpectedProfitFA3)))/ (preexpectedRevenue3 + preexpectedRevenueABNC3 + preexpectedRevenueFA3) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{(((expectedRevenue4 + expectedRevenueABNC4 + expectedRevenueFA4) !== 0 ? ((parseFloat(expectedProfit4) + parseFloat(expectedProfitABNC4) + parseFloat(expectedProfitFA4)))/ (expectedRevenue4 + expectedRevenueABNC4 + expectedRevenueFA4) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{(((preexpectedRevenue4 + preexpectedRevenueABNC4 + preexpectedRevenueFA4) !== 0 ? ((parseFloat(preexpectedProfit4) + parseFloat(preexpectedProfitABNC4) + parseFloat(preexpectedProfitFA4)))/ (preexpectedRevenue4 + preexpectedRevenueABNC4 + preexpectedRevenueFA4) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{(((expectedRevenue5 + expectedRevenueABNC5 + expectedRevenueFA5) !== 0 ? ((parseFloat(expectedProfit5) + parseFloat(expectedProfitABNC5) + parseFloat(expectedProfitFA5)))/ (expectedRevenue5 + expectedRevenueABNC5 + expectedRevenueFA5) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{(((preexpectedRevenue5 + preexpectedRevenueABNC5 + preexpectedRevenueFA5) !== 0 ? ((parseFloat(preexpectedProfit5) + parseFloat(preexpectedProfitABNC5) + parseFloat(preexpectedProfitFA5)))/ (preexpectedRevenue5 + preexpectedRevenueABNC5 + preexpectedRevenueFA5) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{(((expectedRevenue6 + expectedRevenueABNC6 + expectedRevenueFA6) !== 0 ? ((parseFloat(expectedProfit6) + parseFloat(expectedProfitABNC6) + parseFloat(expectedProfitFA6)))/ (expectedRevenue6 + expectedRevenueABNC6 + expectedRevenueFA6) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{(((preexpectedRevenue6 + preexpectedRevenueABNC6 + preexpectedRevenueFA6) !== 0 ? ((parseFloat(preexpectedProfit6) + parseFloat(preexpectedProfitABNC6) + parseFloat(preexpectedProfitFA6)))/ (preexpectedRevenue6 + preexpectedRevenueABNC6 + preexpectedRevenueFA6) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{(((expectedRevenue7 + expectedRevenueABNC7 + expectedRevenueFA7) !== 0 ? ((parseFloat(expectedProfit7) + parseFloat(expectedProfitABNC7) + parseFloat(expectedProfitFA7)))/ (expectedRevenue7 + expectedRevenueABNC7 + expectedRevenueFA7) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{(((preexpectedRevenue7 + preexpectedRevenueABNC7 + preexpectedRevenueFA7) !== 0 ? ((parseFloat(preexpectedProfit7) + parseFloat(preexpectedProfitABNC7) + parseFloat(preexpectedProfitFA7)))/ (preexpectedRevenue7 + preexpectedRevenueABNC7 + preexpectedRevenueFA7) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{(((expectedRevenue11 + expectedRevenueABNC11 + expectedRevenueFA11) !== 0 ? ((parseFloat(expectedProfit11) + parseFloat(expectedProfitABNC11) + parseFloat(expectedProfitFA11)))/ (expectedRevenue11 + expectedRevenueABNC11 + expectedRevenueFA11) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{(((preexpectedRevenue11 + preexpectedRevenueABNC11 + preexpectedRevenueFA11) !== 0 ? ((parseFloat(preexpectedProfit11) + parseFloat(preexpectedProfitABNC11) + parseFloat(preexpectedProfitFA11)))/ (preexpectedRevenue11 + preexpectedRevenueABNC11 + preexpectedRevenueFA11) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{(((expectedRevenue00 + expectedRevenueABNC00 + expectedRevenueFA00) !== 0 ? ((parseFloat(expectedProfit00) + parseFloat(expectedProfitABNC00) + parseFloat(expectedProfitFA00)))/ (expectedRevenue00 + expectedRevenueABNC00 + expectedRevenueFA00) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{(((preexpectedRevenue00 + preexpectedRevenueABNC00 + preexpectedRevenueFA00) !== 0 ? ((parseFloat(preexpectedProfit00) + parseFloat(preexpectedProfitABNC00) + parseFloat(preexpectedProfitFA00)))/ (preexpectedRevenue00 + preexpectedRevenueABNC00 + preexpectedRevenueFA00) : 0) * 100).toFixed(1) + '%'}</th> 
            <th style={{ textAlign: 'center'}}>{((revenueFinalTotal !== 0 ? ((parseFloat(expectedProfit1) + parseFloat(expectedProfitABNC1) + parseFloat(expectedProfitFA1) + parseFloat(expectedProfit2) + parseFloat(expectedProfitABNC2) + parseFloat(expectedProfitFA2) + parseFloat(expectedProfit3) + parseFloat(expectedProfitABNC3) + parseFloat(expectedProfitFA3) + parseFloat(expectedProfit4) + parseFloat(expectedProfitABNC4) + parseFloat(expectedProfitFA4) + parseFloat(expectedProfit5) + parseFloat(expectedProfitABNC5) + parseFloat(expectedProfitFA5) + parseFloat(expectedProfit6) + parseFloat(expectedProfitABNC6) + parseFloat(expectedProfitFA6) + parseFloat(expectedProfit7) + parseFloat(expectedProfitABNC7) + parseFloat(expectedProfitFA7) + parseFloat(expectedProfit11) + parseFloat(expectedProfitABNC11) + parseFloat(expectedProfitFA11) + parseFloat(expectedProfit00) + parseFloat(expectedProfitABNC00) + parseFloat(expectedProfitFA00)))/ (revenueFinalTotal) : 0) * 100).toFixed(1) + '%'}</th> 
            <th style={{ textAlign: 'center'}}>{((prerevenueFinalTotal !== 0 ? ((parseFloat(preexpectedProfit1) + parseFloat(preexpectedProfitABNC1) + parseFloat(preexpectedProfitFA1) + parseFloat(preexpectedProfit2) + parseFloat(preexpectedProfitABNC2) + parseFloat(preexpectedProfitFA2) + parseFloat(preexpectedProfit3) + parseFloat(preexpectedProfitABNC3) + parseFloat(preexpectedProfitFA3) + parseFloat(preexpectedProfit4) + parseFloat(preexpectedProfitABNC4) + parseFloat(preexpectedProfitFA4) + parseFloat(preexpectedProfit5) + parseFloat(preexpectedProfitABNC5) + parseFloat(preexpectedProfitFA5) + parseFloat(preexpectedProfit6) + parseFloat(preexpectedProfitABNC6) + parseFloat(preexpectedProfitFA6) + parseFloat(preexpectedProfit7) + parseFloat(preexpectedProfitABNC7) + parseFloat(preexpectedProfitFA7) + parseFloat(preexpectedProfit11) + parseFloat(preexpectedProfitABNC11) + parseFloat(preexpectedProfitFA11) + parseFloat(preexpectedProfit00) + parseFloat(preexpectedProfitABNC00) + parseFloat(preexpectedProfitFA00)))/ (prerevenueFinalTotal) : 0) * 100).toFixed(1) + '%'}</th>
        </tr>
         </>
} else if(value === 'generalOverhead'){
  return <>
           <tr>
           <th></th>
           <th style={{ textAlign: 'center'}}>Current Projection</th>
           <th style={{ textAlign: 'center'}}>Previous Projection</th>
           <th style={{ textAlign: 'center'}}>Current Projection</th>
           <th style={{ textAlign: 'center'}}>Previous Projection</th>
           <th style={{ textAlign: 'center'}}>Current Projection</th>
           <th style={{ textAlign: 'center'}}>Previous Projection</th>
           <th style={{ textAlign: 'center'}}>Current Projection</th>
           <th style={{ textAlign: 'center'}}>Previous Projection</th>
           <th style={{ textAlign: 'center'}}>Current Projection</th>
           <th style={{ textAlign: 'center'}}>Previous Projection</th>
           <th style={{ textAlign: 'center'}}>Current Projection</th>
           <th style={{ textAlign: 'center'}}>Previous Projection</th>
           <th style={{ textAlign: 'center'}}>Current Projection</th>
           <th style={{ textAlign: 'center'}}>Previous Projection</th>
           <th style={{ textAlign: 'center'}}>Current Projection</th>
           <th style={{ textAlign: 'center'}}>Previous Projection</th>
           <th style={{ textAlign: 'center'}}>Current Projection</th>
           <th style={{ textAlign: 'center'}}>Previous Projection</th>
           <th style={{ textAlign: 'center'}}>Current Projection</th>
           <th style={{ textAlign: 'center'}}>Previous Projection</th>
           </tr>
           <tr>
        <th style={{ textAlign: 'center'}}>Total G & A Cost</th>
            <th style={{ textAlign: 'center'}}>{}</th>
            <th style={{ textAlign: 'center'}}>{}</th>
            <th style={{ textAlign: 'center'}}>{}</th>
            <th style={{ textAlign: 'center'}}>{}</th>
            <th style={{ textAlign: 'center'}}>{}</th>
            <th style={{ textAlign: 'center'}}>{}</th>
            <th style={{ textAlign: 'center'}}>{}</th>
            <th style={{ textAlign: 'center'}}>{}</th>
            <th style={{ textAlign: 'center'}}>{}</th>
            <th style={{ textAlign: 'center'}}>{}</th>
            <th style={{ textAlign: 'center'}}>{}</th>
            <th style={{ textAlign: 'center'}}>{}</th>
            <th style={{ textAlign: 'center'}}>{}</th>
            <th style={{ textAlign: 'center'}}>{}</th>
            <th style={{ textAlign: 'center'}}>{}</th>
            <th style={{ textAlign: 'center'}}>{}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)).toLocaleString(undefined, {maximumFractionDigits:2})}</th> 
            <th style={{ textAlign: 'center'}}>{'$' + Math.round((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)).toLocaleString(undefined, {maximumFractionDigits:2})}</th> 
        </tr>
        <tr>
        <th style={{ textAlign: 'center'}}>Direct Overhead Expenses</th>
            <th style={{ textAlign: 'center'}}>{Math.sign(Math.round(divOneOverhead*1.03)) > 0 ? '$' + Math.round(divOneOverhead*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) : '($' +  Math.round(divOneOverhead*1.03) + ')'}</th>
            <th style={{ textAlign: 'center'}}>{Math.sign(Math.round(predivOneOverhead*1.03)) > 0 ? '$' + Math.round(predivOneOverhead*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) : '($' +  Math.round(predivOneOverhead*1.03) + ')'}</th>
            <th style={{ textAlign: 'center'}}>{Math.sign(Math.round(divTwoOverhead*1.03)) > 0 ? '$' + Math.round(divTwoOverhead*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) : '($' +  Math.round(divTwoOverhead*1.03) + ')'}</th>
            <th style={{ textAlign: 'center'}}>{Math.sign(Math.round(predivTwoOverhead*1.03)) > 0 ? '$' + Math.round(predivTwoOverhead*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) : '($' +  Math.round(predivTwoOverhead*1.03) + ')'}</th>
            <th style={{ textAlign: 'center'}}>{Math.sign(Math.round(divThreeOverhead*1.03)) > 0 ? '$' + Math.round(divThreeOverhead*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) : '($' +  Math.round(divThreeOverhead*1.03) + ')'}</th>
            <th style={{ textAlign: 'center'}}>{Math.sign(Math.round(predivThreeOverhead*1.03)) > 0 ? '$' + Math.round(predivThreeOverhead*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) : '($' +  Math.round(predivThreeOverhead*1.03) + ')'}</th>
            <th style={{ textAlign: 'center'}}>{Math.sign(Math.round(divFourOverhead*1.03)) > 0 ? '$' + Math.round(divFourOverhead*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) : '($' +  Math.round(divFourOverhead*1.03) + ')'}</th>
            <th style={{ textAlign: 'center'}}>{Math.sign(Math.round(predivFourOverhead*1.03)) > 0 ? '$' + Math.round(predivFourOverhead*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) : '($' +  Math.round(predivFourOverhead*1.03) + ')'}</th>
            <th style={{ textAlign: 'center'}}>{Math.sign(Math.round(divFiveOverhead*1.03)) > 0 ? '$' + Math.round(divFiveOverhead*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) : '($' +  Math.round(divFiveOverhead*1.03) + ')'}</th>
            <th style={{ textAlign: 'center'}}>{Math.sign(Math.round(predivFiveOverhead*1.03)) > 0 ? '$' + Math.round(predivFiveOverhead*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) : '($' +  Math.round(predivFiveOverhead*1.03) + ')'}</th>
            <th style={{ textAlign: 'center'}}>{Math.sign(Math.round(divSixOverhead*1.03)) > 0 ? '$' + Math.round(divSixOverhead*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) : '($' +  Math.round(divSixOverhead*1.03) + ')'}</th>
            <th style={{ textAlign: 'center'}}>{Math.sign(Math.round(predivSixOverhead*1.03)) > 0 ? '$' + Math.round(predivSixOverhead*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) : '($' +  Math.round(predivSixOverhead*1.03) + ')'}</th>
            <th style={{ textAlign: 'center'}}>{Math.sign(Math.round(divSevenOverhead*1.03)) > 0 ? '$' + Math.round(divSevenOverhead*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) : '($' +  Math.round(divSevenOverhead*1.03) + ')'}</th>
            <th style={{ textAlign: 'center'}}>{Math.sign(Math.round(predivSevenOverhead*1.03)) > 0 ? '$' + Math.round(predivSevenOverhead*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) : '($' +  Math.round(predivSevenOverhead*1.03) + ')'}</th>
            <th style={{ textAlign: 'center'}}>{Math.sign(Math.round(divElevenOverhead*1.03)) > 0 ? '$' + Math.round(divElevenOverhead*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) : '($' +  Math.round(divElevenOverhead*1.03) + ')'}</th>
            <th style={{ textAlign: 'center'}}>{Math.sign(Math.round(predivElevenOverhead*1.03)) > 0 ? '$' + Math.round(predivElevenOverhead*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) : '($' +  Math.round(predivElevenOverhead*1.03) + ')'}</th>
            <th style={{ textAlign: 'center'}}>{'($' + Math.round(divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
            <th style={{ textAlign: 'center'}}>{'($' + Math.round(predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th> 
            <th style={{ textAlign: 'center'}}>{'$' + ((divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03))}</th>
            <th style={{ textAlign: 'center'}}>{'$' + ((predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03))}</th> 
        </tr>
        <tr>
        <th style={{ textAlign: 'center'}}>50% of Rev. Allocation</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(revenueFinalTotal ? ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedRevenue1 + expectedRevenueABNC1 + expectedRevenueFA1) / revenueFinalTotal)) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedRevenue1 + preexpectedRevenueABNC1 + preexpectedRevenueFA1) / prerevenueFinalTotal)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(revenueFinalTotal ? ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedRevenue2 + expectedRevenueABNC2 + expectedRevenueFA2) / revenueFinalTotal)) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedRevenue2 + preexpectedRevenueABNC2 + preexpectedRevenueFA2) / prerevenueFinalTotal)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(revenueFinalTotal ? ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedRevenue3 + expectedRevenueABNC3 + expectedRevenueFA3) / revenueFinalTotal)) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedRevenue3 + preexpectedRevenueABNC3 + preexpectedRevenueFA3) / prerevenueFinalTotal)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(revenueFinalTotal ? ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedRevenue4 + expectedRevenueABNC4 + expectedRevenueFA4) / revenueFinalTotal)) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedRevenue4 + preexpectedRevenueABNC4 + preexpectedRevenueFA4) / prerevenueFinalTotal)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(revenueFinalTotal ? ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedRevenue5 + expectedRevenueABNC5 + expectedRevenueFA5) / revenueFinalTotal)) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedRevenue5 + preexpectedRevenueABNC5 + preexpectedRevenueFA5) / prerevenueFinalTotal)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(revenueFinalTotal ? ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedRevenue6 + expectedRevenueABNC6 + expectedRevenueFA6) / revenueFinalTotal)) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedRevenue6 + preexpectedRevenueABNC6 + preexpectedRevenueFA6) / prerevenueFinalTotal)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(revenueFinalTotal ? ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedRevenue7 + expectedRevenueABNC7 + expectedRevenueFA7) / revenueFinalTotal)) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedRevenue7 + preexpectedRevenueABNC7 + preexpectedRevenueFA7) / prerevenueFinalTotal)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(revenueFinalTotal ? ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedRevenue11 + expectedRevenueABNC11 + expectedRevenueFA11) / revenueFinalTotal)) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedRevenue11 + preexpectedRevenueABNC11 + preexpectedRevenueFA11) / prerevenueFinalTotal)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'($' + (fiftyPerRev ?  Math.round(fiftyPerRev) : 0).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
            <th style={{ textAlign: 'center'}}>{'($' + (prefiftyPerRev ? Math.round(prefiftyPerRev) : 0).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th> 
            <th style={{ textAlign: 'center'}}>{'$' + ((fiftyPerRev - fiftyPerRev) ? (fiftyPerRev - fiftyPerRev) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + ((prefiftyPerRev - prefiftyPerRev) ? (prefiftyPerRev - prefiftyPerRev) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th> 
        </tr>
        <tr>
        <th style={{ textAlign: 'center'}}>50% of GM Allocation</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) ? (((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedProfit1 + expectedProfitABNC1 + expectedProfitFA1) / profitSummary) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) ? Math.round((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2)  * ((preexpectedProfit1 + preexpectedProfitABNC1 + preexpectedProfitFA1) / preprofitSummary)) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) ? (((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedProfit2 + expectedProfitABNC2 + expectedProfitFA2) / profitSummary) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) ? Math.round((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedProfit2 + preexpectedProfitABNC2 + preexpectedProfitFA2) / preprofitSummary)) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) ? (((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedProfit3 + expectedProfitABNC3 + expectedProfitFA3) / profitSummary) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) ? Math.round((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedProfit3 + preexpectedProfitABNC3 + preexpectedProfitFA3) / preprofitSummary)) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) ? (((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedProfit4 + expectedProfitABNC4 + expectedProfitFA4) / profitSummary) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) ? Math.round((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedProfit4 + preexpectedProfitABNC4 + preexpectedProfitFA4) / preprofitSummary)) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) ? (((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedProfit5 + expectedProfitABNC5 + expectedProfitFA5) / profitSummary) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) ? Math.round((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedProfit5 + preexpectedProfitABNC5 + preexpectedProfitFA5) / preprofitSummary)) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) ? (((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedProfit6 + expectedProfitABNC6 + expectedProfitFA6) / profitSummary) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) ? Math.round((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedProfit6 + preexpectedProfitABNC6 + preexpectedProfitFA6) / preprofitSummary)) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) ? Math.round((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedProfit7 + expectedProfitABNC7 + expectedProfitFA7) / profitSummary)) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) ? Math.round((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedProfit7 + preexpectedProfitABNC7 + preexpectedProfitFA7) / preprofitSummary)) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) ? Math.round((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedProfit11 + expectedProfitABNC11 + expectedProfitFA11) / profitSummary)) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) ? Math.round((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedProfit11 + preexpectedProfitABNC11 + preexpectedProfitFA11) / preprofitSummary)) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'($' + (netCostCorportate ? Math.round(netCostCorportate) : 0).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
            <th style={{ textAlign: 'center'}}>{'($' + (prenetCostCorportate ? Math.round(prenetCostCorportate) : 0).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th> 
            <th style={{ textAlign: 'center'}}>{'$' + (netCostConsolidated ? netCostConsolidated : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (prenetCostConsolidated ? prenetCostConsolidated : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th> 
        </tr>
        <tr>
        <th style={{ textAlign: 'center'}}>Net G & A Cost</th>
            <th style={{ textAlign: 'center'}}>{'$' + (netGACostDiv01 ? Math.round(netGACostDiv01) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (prenetGACostDiv01 ? Math.round(prenetGACostDiv01) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (netGACostDiv02 ? Math.round(netGACostDiv02) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (prenetGACostDiv02 ? Math.round(prenetGACostDiv02) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (netGACostDiv03 ? Math.round(netGACostDiv03) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (prenetGACostDiv03 ? Math.round(prenetGACostDiv03) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (netGACostDiv04 ? Math.round(netGACostDiv04) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (prenetGACostDiv04 ? Math.round(prenetGACostDiv04) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (netGACostDiv05 ? Math.round(netGACostDiv05) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (prenetGACostDiv05 ? Math.round(prenetGACostDiv05) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (netGACostDiv06 ? Math.round(netGACostDiv06) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (prenetGACostDiv06 ? Math.round(prenetGACostDiv06) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (netGACostDiv07 ? Math.round(netGACostDiv07) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (prenetGACostDiv07 ? Math.round(prenetGACostDiv07) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (netGACostDiv11 ? Math.round(netGACostDiv11) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (prenetGACostDiv11 ? Math.round(prenetGACostDiv11) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (netGACorporateCost ? Math.round(netGACorporateCost) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (prenetGACorporateCost ? Math.round(prenetGACorporateCost) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th> 
            <th style={{ textAlign: 'center'}}>{'$' + (netGAConsolidatedCost ? Math.round(netGAConsolidatedCost) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (prenetGAConsolidatedCost ? Math.round(prenetGAConsolidatedCost) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th> 
        </tr>
        <tr>
        <th style={{ textAlign: 'center'}}>% Rev</th>
            <th style={{ textAlign: 'center'}}>{(((expectedRevenue1 + expectedRevenueABNC1 + expectedRevenueFA1) !== 0 ? ((divOneOverhead*1.03 + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedRevenue1 + expectedRevenueABNC1 + expectedRevenueFA1) / revenueFinalTotal)) + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedProfit1 + expectedProfitABNC1 + expectedProfitFA1) / profitSummary))) / (expectedRevenue1 + expectedRevenueABNC1 + expectedRevenueFA1)) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{(((preexpectedRevenue1 + preexpectedRevenueABNC1 + preexpectedRevenueFA1) !== 0 ? ((predivOneOverhead*1.03 + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedRevenue1 + preexpectedRevenueABNC1 + preexpectedRevenueFA1) / prerevenueFinalTotal)) + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedProfit1 + preexpectedProfitABNC1 + preexpectedProfitFA1) / preprofitSummary))) / (preexpectedRevenue1 + preexpectedRevenueABNC1 + preexpectedRevenueFA1)) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{(((expectedRevenue2 + expectedRevenueABNC2 + expectedRevenueFA2) !== 0 ? ((divTwoOverhead*1.03 + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedRevenue2 + expectedRevenueABNC2 + expectedRevenueFA2) / revenueFinalTotal)) + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedProfit2 + expectedProfitABNC2 + expectedProfitFA2) / profitSummary))) / (expectedRevenue2 + expectedRevenueABNC2 + expectedRevenueFA2)) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{(((preexpectedRevenue2 + preexpectedRevenueABNC2 + preexpectedRevenueFA2) !== 0 ? ((predivTwoOverhead*1.03 + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedRevenue2 + preexpectedRevenueABNC2 + preexpectedRevenueFA2) / prerevenueFinalTotal)) + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedProfit2 + preexpectedProfitABNC2 + preexpectedProfitFA2) / preprofitSummary))) / (preexpectedRevenue2 + preexpectedRevenueABNC2 + preexpectedRevenueFA2)) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{(((expectedRevenue3 + expectedRevenueABNC3 + expectedRevenueFA3) !== 0 ? ((divThreeOverhead*1.03 + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedRevenue3 + expectedRevenueABNC3 + expectedRevenueFA3) / revenueFinalTotal)) + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedProfit3 + expectedProfitABNC3 + expectedProfitFA3) / profitSummary))) / (expectedRevenue3 + expectedRevenueABNC3 + expectedRevenueFA3)) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{(((preexpectedRevenue3 + preexpectedRevenueABNC3 + preexpectedRevenueFA3) !== 0 ? ((predivThreeOverhead*1.03 + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedRevenue3 + preexpectedRevenueABNC3 + preexpectedRevenueFA3) / prerevenueFinalTotal)) + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedProfit3 + preexpectedProfitABNC3 + preexpectedProfitFA3) / preprofitSummary))) / (preexpectedRevenue3 + preexpectedRevenueABNC3 + preexpectedRevenueFA3)) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{(((expectedRevenue4 + expectedRevenueABNC4 + expectedRevenueFA4) !== 0 ? ((divFourOverhead*1.03 + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedRevenue4 + expectedRevenueABNC4 + expectedRevenueFA4) / revenueFinalTotal)) + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedProfit4 + expectedProfitABNC4 + expectedProfitFA4) / profitSummary))) / (expectedRevenue4 + expectedRevenueABNC4 + expectedRevenueFA4)) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{(((preexpectedRevenue4 + preexpectedRevenueABNC4 + preexpectedRevenueFA4) !== 0 ? ((predivFourOverhead*1.03 + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedRevenue4 + preexpectedRevenueABNC4 + preexpectedRevenueFA4) / prerevenueFinalTotal)) + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedProfit4 + preexpectedProfitABNC4 + preexpectedProfitFA4) / preprofitSummary))) / (preexpectedRevenue4 + preexpectedRevenueABNC4 + preexpectedRevenueFA4)) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{(((expectedRevenue5 + expectedRevenueABNC5 + expectedRevenueFA5) !== 0 ? ((divFiveOverhead*1.03 + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedRevenue5 + expectedRevenueABNC5 + expectedRevenueFA5) / revenueFinalTotal)) + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedProfit5 + expectedProfitABNC5 + expectedProfitFA5) / profitSummary))) / (expectedRevenue5 + expectedRevenueABNC5 + expectedRevenueFA5)) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{(((preexpectedRevenue5 + preexpectedRevenueABNC5 + preexpectedRevenueFA5) !== 0 ? ((predivFiveOverhead*1.03 + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedRevenue5 + preexpectedRevenueABNC5 + preexpectedRevenueFA5) / prerevenueFinalTotal)) + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedProfit5 + preexpectedProfitABNC5 + preexpectedProfitFA5) / preprofitSummary))) / (preexpectedRevenue5 + preexpectedRevenueABNC5 + preexpectedRevenueFA5)) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{(((expectedRevenue6 + expectedRevenueABNC6 + expectedRevenueFA6) !== 0 ? ((divSixOverhead*1.03 + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedRevenue6 + expectedRevenueABNC6 + expectedRevenueFA6) / revenueFinalTotal)) + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedProfit6 + expectedProfitABNC6 + expectedProfitFA6) / profitSummary))) / (expectedRevenue6 + expectedRevenueABNC6 + expectedRevenueFA6)) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{(((preexpectedRevenue6 + preexpectedRevenueABNC6 + preexpectedRevenueFA6) !== 0 ? ((predivSixOverhead*1.03 + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedRevenue6 + preexpectedRevenueABNC6 + preexpectedRevenueFA6) / prerevenueFinalTotal)) + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedProfit6 + preexpectedProfitABNC6 + preexpectedProfitFA6) / preprofitSummary))) / (preexpectedRevenue6 + preexpectedRevenueABNC6 + preexpectedRevenueFA6)) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{(((expectedRevenue7 + expectedRevenueABNC7 + expectedRevenueFA7) !== 0 ? ((divSevenOverhead*1.03 + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedRevenue7 + expectedRevenueABNC7 + expectedRevenueFA7) / revenueFinalTotal)) + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedProfit7 + expectedProfitABNC7 + expectedProfitFA7) / profitSummary))) / (expectedRevenue7 + expectedRevenueABNC7 + expectedRevenueFA7)) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{(((preexpectedRevenue7 + preexpectedRevenueABNC7 + preexpectedRevenueFA7) !== 0 ? ((predivSevenOverhead*1.03 + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedRevenue7 + preexpectedRevenueABNC7 + preexpectedRevenueFA7) / prerevenueFinalTotal)) + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedProfit7 + preexpectedProfitABNC7 + preexpectedProfitFA7) / preprofitSummary))) / (preexpectedRevenue7 + preexpectedRevenueABNC7 + preexpectedRevenueFA7)) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{(((expectedRevenue11 + expectedRevenueABNC11 + expectedRevenueFA11) !== 0 ? ((divElevenOverhead*1.03 + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedRevenue11 + expectedRevenueABNC11 + expectedRevenueFA11) / revenueFinalTotal)) + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedProfit11 + expectedProfitABNC11 + expectedProfitFA11) / profitSummary))) / (expectedRevenue11 + expectedRevenueABNC11 + expectedRevenueFA11)) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{(((preexpectedRevenue11 + preexpectedRevenueABNC11 + preexpectedRevenueFA11) !== 0 ? ((predivElevenOverhead *1.03+ ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedRevenue11 + preexpectedRevenueABNC11 + preexpectedRevenueFA11) / prerevenueFinalTotal)) + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedProfit11 + preexpectedProfitABNC11 + preexpectedProfitFA11) / preprofitSummary))) / (preexpectedRevenue11 + preexpectedRevenueABNC11 + preexpectedRevenueFA11)) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{(((expectedRevenue00 + expectedRevenueABNC00 + expectedRevenueFA00) !== 0 ? ((netGACorporateCost) / (expectedRevenue00 + expectedRevenueABNC00 + expectedRevenueFA00)) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{(((preexpectedRevenue00 + preexpectedRevenueABNC00 + preexpectedRevenueFA00) !== 0 ? ((prenetGACorporateCost) / (preexpectedRevenue00 + preexpectedRevenueABNC00 + preexpectedRevenueFA00)) : 0) * 100).toFixed(1) + '%'}</th> 
            <th style={{ textAlign: 'center'}}>{(((revenueFinalTotal) !== 0 ? ((netGAConsolidatedCost) / (revenueFinalTotal)) : 0) * 100).toFixed(1) + '%'}</th> 
            <th style={{ textAlign: 'center'}}>{(((prerevenueFinalTotal) !== 0 ? ((prenetGAConsolidatedCost) / (prerevenueFinalTotal)) : 0) * 100).toFixed(1) + '%'}</th>
        </tr>
         </>
}else if(value === 'incomeOperations'){
     return <>
      <tr>
           <th></th>
           <th>Current Projection</th>
           <th>Previous Projection</th>
           <th>Current Projection</th>
           <th>Previous Projection</th>
           <th>Current Projection</th>
           <th>Previous Projection</th>
           <th>Current Projection</th>
           <th>Previous Projection</th>
           <th>Current Projection</th>
           <th>Previous Projection</th>
           <th>Current Projection</th>
           <th>Previous Projection</th>
           <th>Current Projection</th>
           <th>Previous Projection</th>
           <th>Current Projection</th>
           <th>Previous Projection</th>
           <th>Current Projection</th>
           <th>Previous Projection</th>
           <th>Current Projection</th>
           <th>Previous Projection</th>
           </tr>
     <tr>
        <th style={{ textAlign: 'center'}}>Net Operating Income</th>
            <th style={{ textAlign: 'center'}}>{'$' + (netGACostDiv01 ? Math.round(parseFloat(totalJobProfitOne) - parseFloat(netGACostDiv01)) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (prenetGACostDiv01 ? Math.round(parseFloat(pretotalJobProfitOne) - parseFloat(prenetGACostDiv01)) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (netGACostDiv02 ? Math.round(parseFloat(totalJobProfitTwo) - parseFloat(netGACostDiv02)) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (prenetGACostDiv02 ? Math.round(parseFloat(pretotalJobProfitTwo) - parseFloat(prenetGACostDiv02)) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (netGACostDiv03 ? Math.round(parseFloat(totalJobProfitThree) - parseFloat(netGACostDiv03)) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (prenetGACostDiv03 ? Math.round(parseFloat(totalJobProfitThree) - parseFloat(prenetGACostDiv03)) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (netGACostDiv04 ? Math.round(parseFloat(totalJobProfitFour) - parseFloat(netGACostDiv04)) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (prenetGACostDiv04 ? Math.round(parseFloat(pretotalJobProfitFour) - parseFloat(prenetGACostDiv04)) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (netGACostDiv05 ? Math.round(parseFloat(totalJobProfitFive) - parseFloat(netGACostDiv05)) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (prenetGACostDiv05 ? Math.round(parseFloat(pretotalJobProfitFive) - parseFloat(prenetGACostDiv05)) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (netGACostDiv06 ? Math.round(parseFloat(totalJobProfitSix) - parseFloat(netGACostDiv06)) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (prenetGACostDiv06 ? Math.round(parseFloat(pretotalJobProfitSix) - parseFloat(prenetGACostDiv06)) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (netGACostDiv07 ? Math.round(parseFloat(totalJobProfitSeven) - parseFloat(netGACostDiv07)) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (prenetGACostDiv07 ? Math.round(parseFloat(pretotalJobProfitSeven) - parseFloat(prenetGACostDiv07)) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (netGACostDiv11 ? Math.round(parseFloat(totalJobProfitEleven) - parseFloat(netGACostDiv11)) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (prenetGACostDiv11 ? Math.round(parseFloat(pretotalJobProfitEleven) - parseFloat(prenetGACostDiv11)) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (netGACorporateCost ? Math.round(parseFloat(totalJobProfitZero) - parseFloat(netGACorporateCost)) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + (prenetGACorporateCost ? Math.round(parseFloat(pretotalJobProfitZero) - parseFloat(prenetGACorporateCost)) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(parseFloat(totalJobProfitOne) - parseFloat(netGACostDiv01) + parseFloat(totalJobProfitTwo) - parseFloat(netGACostDiv02) + parseFloat(totalJobProfitThree) - parseFloat(netGACostDiv03) + parseFloat(totalJobProfitFour) - parseFloat(netGACostDiv04) + parseFloat(totalJobProfitFive) - parseFloat(netGACostDiv05) + parseFloat(totalJobProfitSix) - parseFloat(netGACostDiv06) + parseFloat(totalJobProfitSeven) - parseFloat(netGACostDiv07) + parseFloat(totalJobProfitEleven) - parseFloat(netGACostDiv11) + parseFloat(totalJobProfitZero) - parseFloat(netGACorporateCost) ? (parseFloat(totalJobProfitOne) - parseFloat(netGACostDiv01) + parseFloat(totalJobProfitTwo) - parseFloat(netGACostDiv02) + parseFloat(totalJobProfitThree) - parseFloat(netGACostDiv03) + parseFloat(totalJobProfitFour) - parseFloat(netGACostDiv04) + parseFloat(totalJobProfitFive) - parseFloat(netGACostDiv05) + parseFloat(totalJobProfitSix) - parseFloat(netGACostDiv06) + parseFloat(totalJobProfitSeven) - parseFloat(netGACostDiv07) + parseFloat(totalJobProfitEleven) - parseFloat(netGACostDiv11) + parseFloat(totalJobProfitZero) - parseFloat(netGACorporateCost)) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(parseFloat(pretotalJobProfitOne) - parseFloat(prenetGACostDiv01) + parseFloat(pretotalJobProfitTwo) - parseFloat(prenetGACostDiv02) + parseFloat(pretotalJobProfitThree) - parseFloat(prenetGACostDiv03) + parseFloat(pretotalJobProfitFour) - parseFloat(prenetGACostDiv04) + parseFloat(pretotalJobProfitFive) - parseFloat(prenetGACostDiv05) + parseFloat(pretotalJobProfitSix) - parseFloat(prenetGACostDiv06) + parseFloat(pretotalJobProfitSeven) - parseFloat(prenetGACostDiv07) + parseFloat(pretotalJobProfitEleven) - parseFloat(prenetGACostDiv11) + parseFloat(pretotalJobProfitZero) - parseFloat(prenetGACorporateCost) ? (parseFloat(pretotalJobProfitOne) - parseFloat(prenetGACostDiv01) + parseFloat(pretotalJobProfitTwo) - parseFloat(prenetGACostDiv02) + parseFloat(pretotalJobProfitThree) - parseFloat(prenetGACostDiv03) + parseFloat(pretotalJobProfitFour) - parseFloat(prenetGACostDiv04) + parseFloat(pretotalJobProfitFive) - parseFloat(prenetGACostDiv05) + parseFloat(pretotalJobProfitSix) - parseFloat(prenetGACostDiv06) + parseFloat(pretotalJobProfitSeven) - parseFloat(prenetGACostDiv07) + parseFloat(pretotalJobProfitEleven) - parseFloat(prenetGACostDiv11) + parseFloat(pretotalJobProfitZero) - parseFloat(prenetGACorporateCost)) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th> 
        </tr>
        <tr>
        <th style={{ textAlign: 'center'}}>% Rev</th>
            <th style={{ textAlign: 'center'}}>{((((expectedRevenue1 + expectedRevenueABNC1 + expectedRevenueFA1)) !== 0 ? ((((parseFloat(expectedProfit1) + parseFloat(expectedProfitABNC1) + parseFloat(expectedProfitFA1)) - (divOneOverhead*1.03 + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedRevenue1 + expectedRevenueABNC1 + expectedRevenueFA1) / revenueFinalTotal)) + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedProfit1 + expectedProfitABNC1 + expectedProfitFA1) / profitSummary))))) / ((expectedRevenue1 + expectedRevenueABNC1 + expectedRevenueFA1))) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{((((preexpectedRevenue1 + preexpectedRevenueABNC1 + preexpectedRevenueFA1)) !== 0 ? ((((parseFloat(preexpectedProfit1) + parseFloat(preexpectedProfitABNC1) + parseFloat(preexpectedProfitFA1)) - (predivOneOverhead*1.03 + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedRevenue1 + preexpectedRevenueABNC1 + preexpectedRevenueFA1) / prerevenueFinalTotal)) + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedProfit1 + preexpectedProfitABNC1 + preexpectedProfitFA1) / preprofitSummary))))) / ((preexpectedRevenue1 + preexpectedRevenueABNC1 + preexpectedRevenueFA1))) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{((((expectedRevenue2 + expectedRevenueABNC2 + expectedRevenueFA2)) !== 0 ? ((((parseFloat(expectedProfit2) + parseFloat(expectedProfitABNC2) + parseFloat(expectedProfitFA2)) - (divTwoOverhead*1.03 + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedRevenue2 + expectedRevenueABNC2 + expectedRevenueFA2) / revenueFinalTotal)) + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedProfit2 + expectedProfitABNC2 + expectedProfitFA2) / profitSummary))))) / ((expectedRevenue2 + expectedRevenueABNC2 + expectedRevenueFA2))) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{((((preexpectedRevenue2 + preexpectedRevenueABNC2 + preexpectedRevenueFA2)) !== 0 ? ((((parseFloat(preexpectedProfit2) + parseFloat(preexpectedProfitABNC2) + parseFloat(preexpectedProfitFA2)) - (predivTwoOverhead*1.03 + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedRevenue2 + preexpectedRevenueABNC2 + preexpectedRevenueFA2) / prerevenueFinalTotal)) + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedProfit2 + preexpectedProfitABNC2 + preexpectedProfitFA2) / preprofitSummary))))) / ((preexpectedRevenue2 + preexpectedRevenueABNC2 + preexpectedRevenueFA2))) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{((((expectedRevenue3 + expectedRevenueABNC3 + expectedRevenueFA3)) !== 0 ? ((((parseFloat(expectedProfit3) + parseFloat(expectedProfitABNC3) + parseFloat(expectedProfitFA3)) - (divThreeOverhead*1.03 + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedRevenue3 + expectedRevenueABNC3 + expectedRevenueFA3) / revenueFinalTotal)) + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedProfit3 + expectedProfitABNC3 + expectedProfitFA3) / profitSummary))))) / ((expectedRevenue3 + expectedRevenueABNC3 + expectedRevenueFA3))) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{((((preexpectedRevenue3 + preexpectedRevenueABNC3 + preexpectedRevenueFA3)) !== 0 ? ((((parseFloat(preexpectedProfit3) + parseFloat(preexpectedProfitABNC3) + parseFloat(preexpectedProfitFA3)) - (predivThreeOverhead*1.03 + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedRevenue3 + preexpectedRevenueABNC3 + preexpectedRevenueFA3) / prerevenueFinalTotal)) + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedProfit3 + preexpectedProfitABNC3 + preexpectedProfitFA3) / preprofitSummary))))) / ((preexpectedRevenue3 + preexpectedRevenueABNC3 + preexpectedRevenueFA3))) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{((((expectedRevenue4 + expectedRevenueABNC4 + expectedRevenueFA4)) !== 0 ? ((((parseFloat(expectedProfit4) + parseFloat(expectedProfitABNC4) + parseFloat(expectedProfitFA4)) - (divFourOverhead*1.03 + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedRevenue4 + expectedRevenueABNC4 + expectedRevenueFA4) / revenueFinalTotal)) + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedProfit4 + expectedProfitABNC4 + expectedProfitFA4) / profitSummary))))) / ((expectedRevenue4 + expectedRevenueABNC4 + expectedRevenueFA4))) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{((((preexpectedRevenue4 + preexpectedRevenueABNC4 + preexpectedRevenueFA4)) !== 0 ? ((((parseFloat(preexpectedProfit4) + parseFloat(preexpectedProfitABNC4) + parseFloat(preexpectedProfitFA4)) - (predivFourOverhead*1.03 + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedRevenue4 + preexpectedRevenueABNC4 + preexpectedRevenueFA4) / prerevenueFinalTotal)) + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedProfit4 + preexpectedProfitABNC4 + preexpectedProfitFA4) / preprofitSummary))))) / ((preexpectedRevenue4 + preexpectedRevenueABNC4 + preexpectedRevenueFA4))) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{((((expectedRevenue5 + expectedRevenueABNC5 + expectedRevenueFA5)) !== 0 ? ((((parseFloat(expectedProfit5) + parseFloat(expectedProfitABNC5) + parseFloat(expectedProfitFA5)) - (divFiveOverhead*1.03 + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedRevenue5 + expectedRevenueABNC5 + expectedRevenueFA5) / revenueFinalTotal)) + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedProfit5 + expectedProfitABNC5 + expectedProfitFA5) / profitSummary))))) / ((expectedRevenue5 + expectedRevenueABNC5 + expectedRevenueFA5))) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{((((preexpectedRevenue5 + preexpectedRevenueABNC5 + preexpectedRevenueFA5)) !== 0 ? ((((parseFloat(preexpectedProfit5) + parseFloat(preexpectedProfitABNC5) + parseFloat(preexpectedProfitFA5)) - (predivFiveOverhead*1.03 + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedRevenue5 + preexpectedRevenueABNC5 + preexpectedRevenueFA5) / prerevenueFinalTotal)) + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedProfit5 + preexpectedProfitABNC5 + preexpectedProfitFA5) / preprofitSummary))))) / ((preexpectedRevenue5 + preexpectedRevenueABNC5 + preexpectedRevenueFA5))) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{((((expectedRevenue6 + expectedRevenueABNC6 + expectedRevenueFA6)) !== 0 ? ((((parseFloat(expectedProfit6) + parseFloat(expectedProfitABNC6) + parseFloat(expectedProfitFA6)) - (divSixOverhead*1.03 + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedRevenue6 + expectedRevenueABNC6 + expectedRevenueFA6) / revenueFinalTotal)) + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedProfit6 + expectedProfitABNC6 + expectedProfitFA6) / profitSummary))))) / ((expectedRevenue6 + expectedRevenueABNC6 + expectedRevenueFA6))) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{((((preexpectedRevenue6 + preexpectedRevenueABNC6 + preexpectedRevenueFA6)) !== 0 ? ((((parseFloat(preexpectedProfit6) + parseFloat(preexpectedProfitABNC6) + parseFloat(preexpectedProfitFA6)) - (predivSixOverhead*1.03 + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedRevenue6 + preexpectedRevenueABNC6 + preexpectedRevenueFA6) / prerevenueFinalTotal)) + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedProfit6 + preexpectedProfitABNC6 + preexpectedProfitFA6) / preprofitSummary))))) / ((preexpectedRevenue6 + preexpectedRevenueABNC6 + preexpectedRevenueFA6))) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{((((expectedRevenue7 + expectedRevenueABNC7 + expectedRevenueFA7)) !== 0 ? ((((parseFloat(expectedProfit7) + parseFloat(expectedProfitABNC7) + parseFloat(expectedProfitFA7)) - (divSevenOverhead*1.03 + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedRevenue7 + expectedRevenueABNC7 + expectedRevenueFA7) / revenueFinalTotal)) + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedProfit7 + expectedProfitABNC7 + expectedProfitFA7) / profitSummary))))) / ((expectedRevenue7 + expectedRevenueABNC7 + expectedRevenueFA7))) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{((((preexpectedRevenue7 + preexpectedRevenueABNC7 + preexpectedRevenueFA7)) !== 0 ? ((((parseFloat(preexpectedProfit7) + parseFloat(preexpectedProfitABNC7) + parseFloat(preexpectedProfitFA7)) - (predivSevenOverhead*1.03 + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedRevenue7 + preexpectedRevenueABNC7 + preexpectedRevenueFA7) / prerevenueFinalTotal)) + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedProfit7 + preexpectedProfitABNC7 + preexpectedProfitFA7) / preprofitSummary))))) / ((preexpectedRevenue7 + preexpectedRevenueABNC7 + preexpectedRevenueFA7))) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{((((expectedRevenue11 + expectedRevenueABNC11 + expectedRevenueFA11)) !== 0 ? ((((parseFloat(expectedProfit11) + parseFloat(expectedProfitABNC11) + parseFloat(expectedProfitFA11)) - (divElevenOverhead*1.03 + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedRevenue11 + expectedRevenueABNC11 + expectedRevenueFA11) / revenueFinalTotal)) + ((((divZeroOverhead*1.03 + divRangeOverhead*1.03 + divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03) - (divOneOverhead*1.03 + divTwoOverhead*1.03 + divThreeOverhead*1.03 + divFourOverhead*1.03 + divFiveOverhead*1.03 + divSixOverhead*1.03 + divSevenOverhead*1.03 + divElevenOverhead*1.03)) / 2) * ((expectedProfit11 + expectedProfitABNC11 + expectedProfitFA11) / profitSummary))))) / ((expectedRevenue11 + expectedRevenueABNC11 + expectedRevenueFA11))) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{((((preexpectedRevenue11 + preexpectedRevenueABNC11 + preexpectedRevenueFA11)) !== 0 ? ((((parseFloat(preexpectedProfit11) + parseFloat(preexpectedProfitABNC11) + parseFloat(preexpectedProfitFA11)) - (predivElevenOverhead*1.03 + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedRevenue11 + preexpectedRevenueABNC11 + preexpectedRevenueFA11) / prerevenueFinalTotal)) + ((((predivZeroOverhead*1.03 + predivRangeOverhead*1.03 + predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03) - (predivOneOverhead*1.03 + predivTwoOverhead*1.03 + predivThreeOverhead*1.03 + predivFourOverhead*1.03 + predivFiveOverhead*1.03 + predivSixOverhead*1.03 + predivSevenOverhead*1.03 + predivElevenOverhead*1.03)) / 2) * ((preexpectedProfit11 + preexpectedProfitABNC11 + preexpectedProfitFA11) / preprofitSummary))))) / ((preexpectedRevenue11 + preexpectedRevenueABNC11 + preexpectedRevenueFA11))) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{((((expectedRevenue00 + expectedRevenueABNC00 + expectedRevenueFA00)) !== 0 ? ((((parseFloat(expectedProfit00) + parseFloat(expectedProfitABNC00) + parseFloat(expectedProfitFA00)) - netGACorporateCost)) / ((expectedRevenue00 + expectedRevenueABNC00 + expectedRevenueFA00))) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{((((preexpectedRevenue00 + preexpectedRevenueABNC00 + preexpectedRevenueFA00)) !== 0 ? ((((parseFloat(preexpectedProfit00) + parseFloat(preexpectedProfitABNC00) + parseFloat(preexpectedProfitFA00)) - prenetGACorporateCost)) / ((preexpectedRevenue00 + preexpectedRevenueABNC00 + preexpectedRevenueFA00))) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{(((revenueFinalTotal) !== 0 ? (((parseFloat(expectedProfit1) + parseFloat(expectedProfitABNC1) + parseFloat(expectedProfitFA1) + parseFloat(expectedProfit2) + parseFloat(expectedProfitABNC2) + parseFloat(expectedProfitFA2) + parseFloat(expectedProfit3) + parseFloat(expectedProfitABNC3) + parseFloat(expectedProfitFA3) + parseFloat(expectedProfit4) + parseFloat(expectedProfitABNC4) + parseFloat(expectedProfitFA4) + parseFloat(expectedProfit5) + parseFloat(expectedProfitABNC5) + parseFloat(expectedProfitFA5) + parseFloat(expectedProfit6) + parseFloat(expectedProfitABNC6) + parseFloat(expectedProfitFA6) + parseFloat(expectedProfit7) + parseFloat(expectedProfitABNC7) + parseFloat(expectedProfitFA7) + parseFloat(expectedProfit11) + parseFloat(expectedProfitABNC11) + parseFloat(expectedProfitFA11) + parseFloat(expectedProfit00) + parseFloat(expectedProfitABNC00) + parseFloat(expectedProfitFA00)) - netGAConsolidatedCost) / revenueFinalTotal) : 0) * 100).toFixed(1) + '%'}</th>
            <th style={{ textAlign: 'center'}}>{(((prerevenueFinalTotal) !== 0 ? (((parseFloat(preexpectedProfit1) + parseFloat(preexpectedProfitABNC1) + parseFloat(preexpectedProfitFA1) + parseFloat(preexpectedProfit2) + parseFloat(preexpectedProfitABNC2) + parseFloat(preexpectedProfitFA2) + parseFloat(preexpectedProfit3) + parseFloat(preexpectedProfitABNC3) + parseFloat(preexpectedProfitFA3) + parseFloat(preexpectedProfit4) + parseFloat(preexpectedProfitABNC4) + parseFloat(preexpectedProfitFA4) + parseFloat(preexpectedProfit5) + parseFloat(preexpectedProfitABNC5) + parseFloat(preexpectedProfitFA5) + parseFloat(preexpectedProfit6) + parseFloat(preexpectedProfitABNC6) + parseFloat(preexpectedProfitFA6) + parseFloat(preexpectedProfit7) + parseFloat(preexpectedProfitABNC7) + parseFloat(preexpectedProfitFA7) + parseFloat(preexpectedProfit11) + parseFloat(preexpectedProfitABNC11) + parseFloat(preexpectedProfitFA11) + parseFloat(preexpectedProfit00) + parseFloat(preexpectedProfitABNC00) + parseFloat(preexpectedProfitFA00)) - prenetGAConsolidatedCost) / prerevenueFinalTotal) : 0) * 100).toFixed(1) + '%'}</th> 
        </tr>
        <tr>
        <th style={{ textAlign: 'center'}}>Deferred Compensation</th>
            <th style={{ textAlign: 'center'}}>{'$' + 0}</th>
            <th style={{ textAlign: 'center'}}>{'$' + 0}</th>
            <th style={{ textAlign: 'center'}}>{'$' + 0}</th>
            <th style={{ textAlign: 'center'}}>{'$' + 0}</th>
            <th style={{ textAlign: 'center'}}>{'$' + 0}</th>
            <th style={{ textAlign: 'center'}}>{'$' + 0}</th>
            <th style={{ textAlign: 'center'}}>{'$' + 0}</th>
            <th style={{ textAlign: 'center'}}>{'$' + 0}</th>
            <th style={{ textAlign: 'center'}}>{'$' + 0}</th>
            <th style={{ textAlign: 'center'}}>{'$' + 0}</th>
            <th style={{ textAlign: 'center'}}>{'$' + 0}</th>
            <th style={{ textAlign: 'center'}}>{'$' + 0}</th>
            <th style={{ textAlign: 'center'}}>{'$' + 0}</th>
            <th style={{ textAlign: 'center'}}>{'$' + 0}</th>
            <th style={{ textAlign: 'center'}}>{'$' + 0}</th>
            <th style={{ textAlign: 'center'}}>{'$' + 0}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(divDeferrCompOverhead*1.03).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(predivDeferrCompOverhead*1.03).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(divDeferrCompOverhead*1.03).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(predivDeferrCompOverhead*1.03).toLocaleString(undefined, {maximumFractionDigits:2})}</th> 
        </tr>
        <tr>
        <th style={{ textAlign: 'center'}}>Profit Sharing</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(divProfOneOverhead*1.03).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(predivProfOneOverhead*1.03).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(divProfTwoOverhead*1.03).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(predivProfTwoOverhead*1.03).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(divProfThreeOverhead*1.03).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(predivProfThreeOverhead*1.03).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(divProfFourOverhead*1.03).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(predivProfFourOverhead*1.03).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(divProfFiveOverhead*1.03).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(predivProfFiveOverhead*1.03).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(divProfSixOverhead*1.03).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(predivProfSixOverhead*1.03).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(divProfSevenOverhead*1.03).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(predivProfSevenOverhead*1.03).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(divProfElevenOverhead*1.03).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(predivProfElevenOverhead*1.03).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(divProfZeroOverhead*1.03).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(predivProfZeroOverhead*1.03).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(divProfOneOverhead*1.03 + divProfTwoOverhead*1.03 + divProfThreeOverhead*1.03 + divProfFourOverhead*1.03 + divProfFiveOverhead*1.03 + divProfSixOverhead*1.03 + divProfSevenOverhead*1.03 + divProfElevenOverhead*1.03 + divProfZeroOverhead*1.03).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(predivProfOneOverhead*1.03 + predivProfTwoOverhead*1.03 + predivProfThreeOverhead*1.03 + predivProfFourOverhead*1.03 + predivProfFiveOverhead*1.03 + predivProfSixOverhead*1.03 + predivProfSevenOverhead*1.03 + predivProfElevenOverhead*1.03 + predivProfZeroOverhead*1.03).toLocaleString(undefined, {maximumFractionDigits:2})}</th> 
        </tr>
        <tr>
        <th style={{ textAlign: 'center'}}>Other Income</th>
            <th style={{ textAlign: 'center'}}>{'$' + 0}</th>
            <th style={{ textAlign: 'center'}}>{'$' + 0}</th>
            <th style={{ textAlign: 'center'}}>{'$' + 0}</th>
            <th style={{ textAlign: 'center'}}>{'$' + 0}</th>
            <th style={{ textAlign: 'center'}}>{'$' + 0}</th>
            <th style={{ textAlign: 'center'}}>{'$' + 0}</th>
            <th style={{ textAlign: 'center'}}>{'$' + 0}</th>
            <th style={{ textAlign: 'center'}}>{'$' + 0}</th>
            <th style={{ textAlign: 'center'}}>{'$' + 0}</th>
            <th style={{ textAlign: 'center'}}>{'$' + 0}</th>
            <th style={{ textAlign: 'center'}}>{'$' + 0}</th>
            <th style={{ textAlign: 'center'}}>{'$' + 0}</th>
            <th style={{ textAlign: 'center'}}>{'$' + 0}</th>
            <th style={{ textAlign: 'center'}}>{'$' + 0}</th>
            <th style={{ textAlign: 'center'}}>{'$' + 0}</th>
            <th style={{ textAlign: 'center'}}>{'$' + 0}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(divInvestCompOverhead*1.03).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(predivInvestCompOverhead*1.03).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(divInvestCompOverhead*1.03).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{'$' + Math.round(predivInvestCompOverhead*1.03).toLocaleString(undefined, {maximumFractionDigits:2})}</th> 
        </tr>
        <tr>
        <th style={{ textAlign: 'center'}}>Net Income</th>
            <th style={{ textAlign: 'center'}}>{Math.sign(parseFloat(totalJobProfitOne) - parseFloat(netGACostDiv01) - parseFloat(divProfOneOverhead)*1.03) > 0 ? '$' + Math.round(parseFloat(totalJobProfitOne) - parseFloat(netGACostDiv01) - parseFloat(divProfOneOverhead)*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) : '($' + Math.round(parseFloat(totalJobProfitOne) - parseFloat(netGACostDiv01) - parseFloat(divProfOneOverhead)*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
            <th style={{ textAlign: 'center'}}>{Math.sign(parseFloat(pretotalJobProfitOne) - parseFloat(prenetGACostDiv01) - parseFloat(predivProfOneOverhead)*1.03) > 0 ? '$' + Math.round(parseFloat(pretotalJobProfitOne) - parseFloat(prenetGACostDiv01) - parseFloat(predivProfOneOverhead)*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) : '($' + Math.round(parseFloat(pretotalJobProfitOne) - parseFloat(prenetGACostDiv01) - parseFloat(predivProfOneOverhead)*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
            <th style={{ textAlign: 'center'}}>{Math.sign(parseFloat(totalJobProfitTwo) - parseFloat(netGACostDiv02) - parseFloat(divProfTwoOverhead)*1.03) > 0 ? '$' + Math.round(parseFloat(totalJobProfitTwo) - parseFloat(netGACostDiv02) - parseFloat(divProfTwoOverhead)*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) : '$' + Math.round(parseFloat(totalJobProfitTwo) - parseFloat(netGACostDiv02) - parseFloat(divProfTwoOverhead)*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
            <th style={{ textAlign: 'center'}}>{Math.sign(parseFloat(pretotalJobProfitTwo) - parseFloat(prenetGACostDiv02) - parseFloat(predivProfTwoOverhead)*1.03) > 0 ? '$' + Math.round(parseFloat(pretotalJobProfitTwo) - parseFloat(prenetGACostDiv02) - parseFloat(predivProfTwoOverhead)*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) : '($' + Math.round(parseFloat(pretotalJobProfitTwo) - parseFloat(prenetGACostDiv02) - parseFloat(predivProfTwoOverhead)*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
            <th style={{ textAlign: 'center'}}>{Math.sign(parseFloat(totalJobProfitThree) - parseFloat(netGACostDiv03) - parseFloat(divProfThreeOverhead)*1.03) > 0 ? '$' + Math.round(parseFloat(totalJobProfitThree) - parseFloat(netGACostDiv03) - parseFloat(divProfThreeOverhead)*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) : '($' + Math.round(parseFloat(totalJobProfitThree) - parseFloat(netGACostDiv03) - parseFloat(divProfThreeOverhead)*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
            <th style={{ textAlign: 'center'}}>{Math.sign(parseFloat(pretotalJobProfitThree) - parseFloat(prenetGACostDiv03)- parseFloat(predivProfThreeOverhead)*1.03) > 0 ? '$' + Math.round(parseFloat(pretotalJobProfitThree) - parseFloat(prenetGACostDiv03) - parseFloat(predivProfThreeOverhead)*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) : '($' + Math.round(parseFloat(pretotalJobProfitThree) - parseFloat(prenetGACostDiv03) - parseFloat(predivProfThreeOverhead)*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
            <th style={{ textAlign: 'center'}}>{Math.sign(parseFloat(totalJobProfitFour) - parseFloat(netGACostDiv04) - parseFloat(divProfFourOverhead)*1.03) > 0 ? '$' + Math.round(parseFloat(totalJobProfitFour) - parseFloat(netGACostDiv04) - parseFloat(divProfFourOverhead)*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) : '($' + Math.round(parseFloat(totalJobProfitFour) - parseFloat(netGACostDiv04) - parseFloat(divProfFourOverhead)*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
            <th style={{ textAlign: 'center'}}>{Math.sign(parseFloat(pretotalJobProfitFour) - parseFloat(prenetGACostDiv04) - parseFloat(predivProfFourOverhead)*1.03) > 0 ? '$' + Math.round(parseFloat(pretotalJobProfitFour) - parseFloat(prenetGACostDiv04) - parseFloat(predivProfFourOverhead)*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) : '($' + Math.round(parseFloat(pretotalJobProfitFour) - parseFloat(prenetGACostDiv04) - parseFloat(predivProfFourOverhead)*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
            <th style={{ textAlign: 'center'}}>{Math.sign(parseFloat(totalJobProfitFive) - parseFloat(netGACostDiv05) - parseFloat(divProfFiveOverhead)*1.03) > 0 ? '$' + Math.round(parseFloat(totalJobProfitFive) - parseFloat(netGACostDiv05) - parseFloat(divProfFiveOverhead)*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) : '($' + Math.round(parseFloat(totalJobProfitFive) - parseFloat(netGACostDiv05) - parseFloat(divProfFiveOverhead)*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
            <th style={{ textAlign: 'center'}}>{Math.sign(parseFloat(pretotalJobProfitFive) - parseFloat(prenetGACostDiv05) - parseFloat(predivProfFiveOverhead)*1.03) > 0 ? '$' + Math.round(parseFloat(pretotalJobProfitFive) - parseFloat(prenetGACostDiv05) - parseFloat(predivProfFiveOverhead)*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) : '($' + Math.round(parseFloat(pretotalJobProfitFive) - parseFloat(prenetGACostDiv05) - parseFloat(predivProfFiveOverhead)*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
            <th style={{ textAlign: 'center'}}>{Math.sign(parseFloat(totalJobProfitSix) - parseFloat(netGACostDiv06) - parseFloat(divProfSixOverhead)*1.03) > 0 ? '$' + Math.round(parseFloat(totalJobProfitSix) - parseFloat(netGACostDiv06) - parseFloat(divProfSixOverhead)*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) : '($' + Math.round(parseFloat(totalJobProfitSix) - parseFloat(netGACostDiv06) - parseFloat(divProfSixOverhead)*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
            <th style={{ textAlign: 'center'}}>{Math.sign(parseFloat(pretotalJobProfitSix) - parseFloat(prenetGACostDiv06) - parseFloat(predivProfSixOverhead)*1.03) > 0 ? '$' + Math.round(parseFloat(pretotalJobProfitSix) - parseFloat(prenetGACostDiv06) - parseFloat(predivProfSixOverhead)*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) : '($' + Math.round(parseFloat(pretotalJobProfitSix) - parseFloat(prenetGACostDiv06) - parseFloat(predivProfSixOverhead)*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
            <th style={{ textAlign: 'center'}}>{Math.sign(parseFloat(totalJobProfitSeven) - parseFloat(netGACostDiv07) - parseFloat(divProfSevenOverhead)*1.03) > 0 ? '$' + Math.round(parseFloat(totalJobProfitSeven) - parseFloat(netGACostDiv07) - parseFloat(divProfSevenOverhead)*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) : '($' + Math.round(parseFloat(totalJobProfitSeven) - parseFloat(netGACostDiv07) - parseFloat(divProfSevenOverhead)*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
            <th style={{ textAlign: 'center'}}>{Math.sign(parseFloat(pretotalJobProfitSeven) - parseFloat(prenetGACostDiv07) - parseFloat(predivProfSevenOverhead)*1.03) > 0 ? '$' + Math.round(parseFloat(pretotalJobProfitSeven) - parseFloat(prenetGACostDiv07) - parseFloat(predivProfSevenOverhead)*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) : '($' + Math.round(parseFloat(pretotalJobProfitSeven) - parseFloat(prenetGACostDiv07) - parseFloat(predivProfSevenOverhead)*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
            <th style={{ textAlign: 'center'}}>{Math.sign(parseFloat(totalJobProfitEleven) - parseFloat(netGACostDiv11) - parseFloat(divProfElevenOverhead)*1.03) > 0 ? '$' + Math.round(parseFloat(totalJobProfitEleven) - parseFloat(netGACostDiv11) - parseFloat(divProfElevenOverhead)*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) : '($' + Math.round(parseFloat(totalJobProfitEleven) - parseFloat(netGACostDiv11) - parseFloat(divProfElevenOverhead)*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
            <th style={{ textAlign: 'center'}}>{Math.sign(parseFloat(pretotalJobProfitEleven) - parseFloat(prenetGACostDiv11) - parseFloat(predivProfElevenOverhead)*1.03) > 0 ? '$' + Math.round(parseFloat(pretotalJobProfitEleven) - parseFloat(prenetGACostDiv11) - parseFloat(predivProfElevenOverhead)*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) : '($' + Math.round(parseFloat(pretotalJobProfitEleven) - parseFloat(prenetGACostDiv11) - parseFloat(predivProfElevenOverhead)*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
            <th style={{ textAlign: 'center'}}>{Math.sign(IncomeOperDiv00 - (parseFloat(divDeferrCompOverhead)*1.03 + parseFloat(divProfZeroOverhead)*1.03 + parseFloat(divInvestCompOverhead)*1.03)) > 0 ? '$' + Math.round(IncomeOperDiv00 - (parseFloat(divDeferrCompOverhead)*1.03 + parseFloat(divProfZeroOverhead)*1.03 + parseFloat(divInvestCompOverhead)*1.03)).toLocaleString(undefined, {maximumFractionDigits:2}) : '($' + Math.round(IncomeOperDiv00 - (parseFloat(divDeferrCompOverhead)*1.03 + parseFloat(divProfZeroOverhead)*1.03 + parseFloat(divInvestCompOverhead)*1.03)).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
            <th style={{ textAlign: 'center'}}>{Math.sign(preIncomeOperDiv00 - (parseFloat(predivDeferrCompOverhead)*1.03 + parseFloat(predivProfZeroOverhead)*1.03 + parseFloat(predivInvestCompOverhead)*1.03)) > 0 ? '$' + Math.round(preIncomeOperDiv00 - (parseFloat(predivDeferrCompOverhead)*1.03 + parseFloat(predivProfZeroOverhead)*1.03 + parseFloat(predivInvestCompOverhead)*1.03)).toLocaleString(undefined, {maximumFractionDigits:2}) : '($' + Math.round(preIncomeOperDiv00 - (parseFloat(predivDeferrCompOverhead)*1.03 + parseFloat(predivProfZeroOverhead)*1.03 + parseFloat(predivInvestCompOverhead)*1.03)).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
            <th style={{ textAlign: 'center'}}>{Math.round((IncomeOperDiv00 - (parseFloat(divDeferrCompOverhead)*1.03 + parseFloat(divProfZeroOverhead)*1.03 + parseFloat(divInvestCompOverhead)*1.03)) + (parseFloat(totalJobProfitOne) - parseFloat(netGACostDiv01) - parseFloat(divProfOneOverhead)*1.03) + (parseFloat(totalJobProfitTwo) - parseFloat(netGACostDiv02) - parseFloat(divProfTwoOverhead)*1.03) + (parseFloat(totalJobProfitThree) - parseFloat(netGACostDiv03) - parseFloat(divProfThreeOverhead)*1.03) + (parseFloat(totalJobProfitFour) - parseFloat(netGACostDiv04) - parseFloat(divProfFourOverhead)*1.03) + (parseFloat(totalJobProfitFive) - parseFloat(netGACostDiv05) - parseFloat(divProfFiveOverhead)*1.03) + (parseFloat(totalJobProfitSix) - parseFloat(netGACostDiv06) - parseFloat(divProfSixOverhead)*1.03) + (parseFloat(totalJobProfitSeven) - parseFloat(netGACostDiv07) - parseFloat(divProfSevenOverhead)*1.03) + (parseFloat(totalJobProfitEleven) - parseFloat(netGACostDiv11) - parseFloat(divProfElevenOverhead)*1.03) ? (IncomeOperDiv00 - (parseFloat(divDeferrCompOverhead)*1.03 + parseFloat(divProfZeroOverhead)*1.03 + parseFloat(divInvestCompOverhead)*1.03)) + (parseFloat(totalJobProfitOne) - parseFloat(netGACostDiv01) - parseFloat(divProfOneOverhead)*1.03) + (parseFloat(totalJobProfitTwo) - parseFloat(netGACostDiv02) - parseFloat(divProfTwoOverhead)*1.03) + (parseFloat(totalJobProfitThree) - parseFloat(netGACostDiv03) - parseFloat(divProfThreeOverhead)*1.03) + (parseFloat(totalJobProfitFour) - parseFloat(netGACostDiv04) - parseFloat(divProfFourOverhead)*1.03) + (parseFloat(totalJobProfitFive) - parseFloat(netGACostDiv05) - parseFloat(divProfFiveOverhead)*1.03) + (parseFloat(totalJobProfitSix) - parseFloat(netGACostDiv06) - parseFloat(divProfSixOverhead)*1.03) + (parseFloat(totalJobProfitSeven)*1.03 - parseFloat(netGACostDiv07) - parseFloat(divProfSevenOverhead)) + (parseFloat(totalJobProfitEleven) - parseFloat(netGACostDiv11) - parseFloat(divProfElevenOverhead)*1.03) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
            <th style={{ textAlign: 'center'}}>{Math.round((preIncomeOperDiv01 - predivProfOneOverhead*1.03) + (preIncomeOperDiv02 - predivProfTwoOverhead*1.03) + (preIncomeOperDiv03 - predivProfThreeOverhead*1.03) + (preIncomeOperDiv04 - predivProfFourOverhead*1.03) + (preIncomeOperDiv05 - predivProfFiveOverhead*1.03) + (preIncomeOperDiv06 - predivProfSixOverhead*1.03) + (preIncomeOperDiv07 - predivProfSevenOverhead*1.03) + (preIncomeOperDiv11 - predivProfElevenOverhead*1.03) + (preIncomeOperDiv00 - (parseFloat(predivDeferrCompOverhead)*1.03 + parseFloat(predivProfZeroOverhead)*1.03 + parseFloat(predivInvestCompOverhead)*1.03)) ? (preIncomeOperDiv01 - predivProfOneOverhead*1.03) + (preIncomeOperDiv02 - predivProfTwoOverhead*1.03) + (preIncomeOperDiv03 - predivProfThreeOverhead*1.03) + (preIncomeOperDiv04 - predivProfFourOverhead*1.03) + (preIncomeOperDiv05 - predivProfFiveOverhead*1.03) + (preIncomeOperDiv06 - predivProfSixOverhead*1.03) + (preIncomeOperDiv07 - predivProfSevenOverhead*1.03) + (preIncomeOperDiv11 - predivProfElevenOverhead*1.03) + (preIncomeOperDiv00 - (parseFloat(predivDeferrCompOverhead)*1.03 + parseFloat(predivProfZeroOverhead)*1.03 + parseFloat(predivInvestCompOverhead)*1.03)) : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th> 
        </tr>
  </>
}

}

    render(){

      console.log("Rendering Main Page!")
      const headerSection = "headerSection"
      const jobProfit = "jobProfit"
      const PercentRev = "PercentRev"
      const minorityInterest = "minorityInterest"
      const revenue = "revenue"
      const project_report = "project_report"
      const generalOverhead = "generalOverhead"
      const incomeOperations = "incomeOperations"
      const view = this.state.userRole === 'Writer';
      const loadedData = this.state.dataLoadCheck;


      if(!loadedData) return <Container>Loading...</Container>
  
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
                  <Col>
                  <div>
                    <table>
                        <tbody>
                        {this.renderTableData(project_report)}
                        </tbody>
                        <thead>
                        </thead>
                    </table>
                    </div>
                  </Col>
              </Row>
          </Container>
          <Container>
          <Row>
          <Col className="FY19Plan">  
          <div>
            <h1 id='title'>Carroll Daniel Construction</h1>
            <h1 id='title'>Projected Division Income Statement</h1>
            <h1 id='title'>For The Year Ending December 31, {currentYearLabelTwo}</h1>
            <h1 id='title'>Projected Date: {currentDateString}, {currentYearLabel}</h1>
            <div style={{ overflow: 'scroll'}}>
            <table id='tableMain'>
               <tbody>
               <tr>{this.renderTableHeader(headerSection)}</tr>
               {this.renderTableHeader(revenue)}
               </tbody>
            </table>
            </div>
         </div>
         </Col>
          </Row>
          <Row>
          <Col className="FY19Plan">  
          <div style={{ overflow: 'scroll'}}>
            <table id='tableMain'>
               <tbody>
               <tr>{this.renderTableHeader(headerSection)}</tr>
               {this.renderTableHeader(jobProfit)}
               </tbody>
            </table>
         </div>
         </Col>
          </Row>
          <Row>
          <Col className="FY19Plan">  
          <div style={{ overflow: 'scroll'}}>
            <table id='tableMain'>
               <tbody>
               <tr>{this.renderTableHeader(headerSection)}</tr>
               {this.renderTableHeader(PercentRev)}
               </tbody>
            </table>
         </div>
         </Col>
          </Row>
          <Row>
          <Col className="FY19Plan">  
          <div style={{ overflow: 'scroll'}}>
            <table id='tableMain'>
               <tbody>
               <tr>{this.renderTableHeader(headerSection)}</tr>
               {this.renderTableHeader(minorityInterest)}
               </tbody>
            </table>
         </div>
         </Col>
          </Row>
          <Row>
          <Col className="FY19Plan">  
          <div style={{ overflow: 'scroll'}}>
            <table id='tableMain'>
               <tbody>
               <tr>{this.renderTableHeader(headerSection)}</tr>
               {this.renderTableHeader(generalOverhead)}
               </tbody>
            </table>
         </div>
         </Col>
          </Row>
          <Row>
          <Col className="FY19Plan">  
          <div style={{ overflow: 'scroll'}}>
            <table id='tableMain'>
               <tbody>
               <tr>{this.renderTableHeader(headerSection)}</tr>
               {this.renderTableHeader(incomeOperations)}
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

export default withAuth(DivIncomeYearTwo);