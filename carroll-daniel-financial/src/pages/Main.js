import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AuthHelperMethods from '../services/AuthHelperMethods';
import withAuth from '../services/withAuth';
import "react-table/react-table.css";
import axios from 'axios' 
import '../global'
import * as jwt_decode from 'jwt-decode';
import { Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'

var expectedRevenueABNC1 = 0; var expectedRevenueABNC2 = 0; var expectedRevenueABNC3 = 0; var expectedRevenueABNC4 = 0; var expectedRevenueABNC5 = 0;
var expectedRevenueABNC6 = 0; var expectedRevenueABNC7 = 0; var expectedRevenueABNC11 = 0; var expectedRevenueABNC00 = 0;
var expectedRevenueABNC1_two = 0; var expectedRevenueABNC2_two = 0; var expectedRevenueABNC3_two = 0; var expectedRevenueABNC4_two = 0; var expectedRevenueABNC5_two = 0;
var expectedRevenueABNC6_two = 0; var expectedRevenueABNC7_two = 0; var expectedRevenueABNC11_two = 0; var expectedRevenueABNC00_two = 0;
var preexpectedRevenueABNC1 = 0;
var preexpectedRevenueABNC2 = 0; var preexpectedRevenueABNC3 = 0; var preexpectedRevenueABNC4 = 0; var preexpectedRevenueABNC5 = 0; var preexpectedRevenueABNC6 = 0;
var preexpectedRevenueABNC7 = 0; var preexpectedRevenueABNC11 = 0; var preexpectedRevenueABNC11_two = 0; var preexpectedRevenueABNC00 = 0; 
var preexpectedRevenueABNC1_two = 0; var preexpectedRevenueABNC00_two = 0; 
var preexpectedRevenueABNC2_two = 0; var preexpectedRevenueABNC3_two = 0; var preexpectedRevenueABNC4_two = 0; var preexpectedRevenueABNC5_two = 0; var preexpectedRevenueABNC6_two = 0; var preexpectedRevenueABNC7_two = 0;
var expectedRevenueFA1 = 0; var expectedRevenueFA2 = 0;
var expectedRevenueFA3 = 0; var expectedRevenueFA4 = 0; var expectedRevenueFA5 = 0; var expectedRevenueFA6 = 0; var expectedRevenueFA7 = 0; var expectedRevenueFA11 = 0;
var expectedRevenueFA00 = 0; 
var expectedRevenueFA1_two = 0; var expectedRevenueFA2_two = 0;
var expectedRevenueFA3_two = 0; var expectedRevenueFA4_two = 0; var expectedRevenueFA5_two = 0; var expectedRevenueFA6_two = 0; var expectedRevenueFA7_two = 0; var expectedRevenueFA11_two = 0;
var expectedRevenueFA00_two = 0;
var preexpectedRevenueFA1 = 0; var preexpectedRevenueFA2 = 0; var preexpectedRevenueFA3 = 0; var preexpectedRevenueFA4 = 0; var preexpectedRevenueFA5 = 0;
var preexpectedRevenueFA6 = 0; var preexpectedRevenueFA7 = 0; var preexpectedRevenueFA11 = 0; var preexpectedRevenueFA00 = 0;
var preexpectedRevenueFA1_two = 0; var preexpectedRevenueFA2_two = 0; var preexpectedRevenueFA3_two = 0; var preexpectedRevenueFA4_two = 0; var preexpectedRevenueFA5_two = 0;
var preexpectedRevenueFA6_two = 0; var preexpectedRevenueFA7_two = 0; var preexpectedRevenueFA11_two = 0; var preexpectedRevenueFA00_two = 0;
var expectedProfitABNC1 = 0; var expectedProfitABNC2 = 0;
var expectedProfitABNC3 = 0; var expectedProfitABNC4 = 0; var expectedProfitABNC5 = 0; var expectedProfitABNC6 = 0; var expectedProfitABNC7 = 0; var expectedProfitABNC11 = 0;
var expectedProfitABNC00 = 0; var expectedProfitABNC1_two = 0; var expectedProfitABNC2_two = 0;
var expectedProfitABNC3_two = 0; var expectedProfitABNC4_two = 0; var expectedProfitABNC5_two = 0; var expectedProfitABNC6_two = 0; var expectedProfitABNC7_two = 0; var expectedProfitABNC11_two = 0;var expectedProfitABNC00_two = 0;
var preexpectedProfitABNC1 = 0; var preexpectedProfitABNC2 = 0; var preexpectedProfitABNC3 = 0; var preexpectedProfitABNC4 = 0; var preexpectedProfitABNC5 = 0;
var preexpectedProfitABNC6 = 0; var preexpectedProfitABNC7 = 0; var preexpectedProfitABNC11 = 0; var preexpectedProfitABNC00 = 0; 
var preexpectedProfitABNC1_two = 0; var preexpectedProfitABNC2_two = 0; var preexpectedProfitABNC3_two = 0; var preexpectedProfitABNC4_two = 0; var preexpectedProfitABNC5_two = 0;
var preexpectedProfitABNC6_two = 0; var preexpectedProfitABNC7_two = 0; var preexpectedProfitABNC11_two = 0; var preexpectedProfitABNC00_two = 0;
var expectedProfitFA1 = 0; var expectedProfitFA2 = 0;
var expectedProfitFA3 = 0; var expectedProfitFA4 = 0; var expectedProfitFA5 = 0; var expectedProfitFA6 = 0; var expectedProfitFA7 = 0; var expectedProfitFA11 = 0; var expectedProfitFA00 = 0;
var expectedProfitFA1_two = 0; var expectedProfitFA2_two = 0;
var expectedProfitFA3_two = 0; var expectedProfitFA4_two = 0; var expectedProfitFA5_two = 0; var expectedProfitFA6_two = 0; var expectedProfitFA7_two = 0; var expectedProfitFA11_two = 0; var expectedProfitFA00_two = 0;
var preexpectedProfitFA1 = 0; var preexpectedProfitFA1_two = 0; var preexpectedProfitFA2 = 0; var preexpectedProfitFA2_two = 0; var preexpectedProfitFA3 = 0; var preexpectedProfitFA3_two = 0; var preexpectedProfitFA4 = 0; var preexpectedProfitFA4_two = 0; var preexpectedProfitFA5 = 0; var preexpectedProfitFA5_two = 0; var preexpectedProfitFA6 = 0; var preexpectedProfitFA6_two = 0;
var preexpectedProfitFA7 = 0; var preexpectedProfitFA7_two = 0; var preexpectedProfitFA11 = 0; var preexpectedProfitFA11_two = 0; var preexpectedProfitFA00 = 0; var preexpectedProfitFA00_two = 0; var expectedRevenue1 = 0; var expectedRevenue2 = 0; var expectedRevenue3 = 0; var expectedRevenue4 = 0;
var expectedRevenue5 = 0; var expectedRevenue6 = 0; var expectedRevenue7 = 0; var expectedRevenue11 = 0; var expectedRevenue00 = 0; var expectedProfit1 = 0; var expectedProfit2 = 0; var expectedProfit3 = 0;
var expectedProfit4 = 0; var expectedProfit5 = 0; var expectedProfit6 = 0; var expectedProfit7 = 0; var expectedProfit11 = 0; var expectedProfit00 = 0;
var expectedRevenue1_two = 0; var expectedRevenue2_two = 0; var expectedRevenue3_two = 0; var expectedRevenue4_two = 0;
var expectedRevenue5_two = 0; var expectedRevenue6_two = 0; var expectedRevenue7_two = 0; var expectedRevenue11_two = 0; var expectedRevenue00_two = 0; var expectedProfit1_two = 0; var expectedProfit2_two = 0; var expectedProfit3_two = 0;
var expectedProfit4_two = 0; var expectedProfit5_two = 0; var expectedProfit6_two = 0; var expectedProfit7_two = 0; var expectedProfit11_two = 0; var expectedProfit00_two = 0;
var preexpectedRevenue1_two = 0; var preexpectedRevenue2_two = 0; var preexpectedRevenue3_two = 0; var preexpectedRevenue4_two = 0; var preexpectedRevenue5_two = 0; var preexpectedRevenue6_two = 0; var preexpectedRevenue7_two = 0;var preexpectedRevenue11_two = 0;
var preexpectedRevenue00_two = 0; var preexpectedProfit1_two = 0; var preexpectedProfit2_two = 0; var preexpectedProfit3_two = 0; var preexpectedProfit4_two = 0; var preexpectedProfit5_two = 0; var preexpectedProfit6_two = 0;
var preexpectedProfit7_two = 0; var preexpectedProfit11_two = 0; var preexpectedProfit00_two = 0;
var preexpectedRevenue1 = 0; var preexpectedRevenue2 = 0; var preexpectedRevenue3 = 0; var preexpectedRevenue4 = 0; var preexpectedRevenue5 = 0; var preexpectedRevenue6 = 0; var preexpectedRevenue7 = 0;var preexpectedRevenue11 = 0;
var preexpectedRevenue00 = 0; var preexpectedProfit1 = 0; var preexpectedProfit2 = 0; var preexpectedProfit3 = 0; var preexpectedProfit4 = 0; var preexpectedProfit5 = 0; var preexpectedProfit6 = 0;
var preexpectedProfit7 = 0; var preexpectedProfit11 = 0; var preexpectedProfit00 = 0; var revenueTotal = 0; var revenueTotal_two = 0; var prerevenueTotal = 0; var prerevenueTotal_two = 0; var revenueABNCTotal = 0; var revenueABNCTotal_two = 0; var prerevenueABNCTotal = 0; var prerevenueABNCTotal_two = 0;
var revenueFATotal = 0; var revenueFATotal_two = 0; var prerevenueFATotal = 0; var prerevenueFATotal_two = 0; var revenueFinalTotal = 0; var revenueFinalTotal_two = 0; var prerevenueFinalTotal = 0; var prerevenueFinalTotal_two = 0; var jobProfitTotal = 0; var jobProfitTotal_two = 0; var prejobProfitTotal = 0; var prejobProfitTotal_two = 0; var jobProfitABNCTotal = 0; var jobProfitABNCTotal_two = 0;
var prejobProfitABNCTotal = 0; var prejobProfitABNCTotal_two = 0; var jobProfitFATotal = 0; var jobProfitFATotal_two = 0; var prejobProfitFATotal = 0; var prejobProfitFATotal_two = 0; var jobProfitFinalTotal = 0; var jobProfitFinalTotal_two = 0; var prevJobProfitFinalTotal = 0; var prevJobProfitFinalTotal_two = 0; var divOneOverhead = 0; var divOneOverhead_two = 0; var divProfOneOverhead = 0; var divProfOneOverhead_two = 0;
var predivProfOneOverhead = 0; var predivProfOneOverhead_two = 0; var divTwoOverhead = 0; var divTwoOverhead_two = 0; var divProfTwoOverhead = 0; var divProfTwoOverhead_two = 0; var predivProfTwoOverhead = 0; var predivProfTwoOverhead_two = 0; var divThreeOverhead = 0; var divThreeOverhead_two = 0; var divProfThreeOverhead = 0; var divProfThreeOverhead_two = 0; var predivProfThreeOverhead = 0; var predivProfThreeOverhead_two = 0;
var divFourOverhead = 0; var divFourOverhead_two = 0;  var divProfFourOverhead = 0; var divProfFourOverhead_two = 0; var predivProfFourOverhead = 0; var predivProfFourOverhead_two = 0; var divFiveOverhead = 0; var divFiveOverhead_two = 0; var divProfFiveOverhead = 0; var divProfFiveOverhead_two = 0; var predivProfFiveOverhead = 0; var predivProfFiveOverhead_two = 0; var divSixOverhead = 0; var divSixOverhead_two = 0;
var divProfSixOverhead = 0; var divProfSixOverhead_two = 0; var predivProfSixOverhead = 0; var predivProfSixOverhead_two = 0; var divSevenOverhead = 0;  var divSevenOverhead_two = 0; var divProfSevenOverhead = 0; var divProfSevenOverhead_two = 0; var predivProfSevenOverhead = 0; var predivProfSevenOverhead_two = 0; var divElevenOverhead = 0; var divElevenOverhead_two = 0; var divProfElevenOverhead = 0; var divProfElevenOverhead_two = 0;
var predivProfElevenOverhead = 0; var predivProfElevenOverhead_two = 0; var divZeroOverhead = 0; var divZeroOverhead_two = 0; var divProfZeroOverhead = 0; var divProfZeroOverhead_two = 0; var predivProfZeroOverhead = 0; var predivProfZeroOverhead_two = 0; var effDiv01 = 0; var preeffDiv01 = 0; var effDiv02 = 0; var preeffDiv02 = 0;
var effDiv03 = 0; var preeffDiv03 = 0; var effDiv04 = 0; var preeffDiv04 = 0; var effDiv05 = 0; var preeffDiv05 = 0; var effDiv06 = 0; var preeffDiv06 = 0; var effDiv07 = 0; var preeffDiv07 = 0;
var effDiv11 = 0; var preeffDiv11 = 0; var effDiv00 = 0; var preeffDiv00; var divDeferrCompOverhead = 0; var divDeferrCompOverhead_two = 0; var divInvestCompOverhead = 0; var divInvestCompOverhead_two = 0; var predivInvestCompOverhead = 0; var predivInvestCompOverhead_two = 0; var divRangeOverhead = 0; var divRangeOverhead_two = 0;
var predivOneOverhead = 0; var predivTwoOverhead = 0; var predivThreeOverhead = 0; var predivFourOverhead = 0; var predivFiveOverhead = 0; var predivSixOverhead = 0; var predivSevenOverhead = 0;
var predivElevenOverhead = 0; var predivZeroOverhead = 0; var predivDeferrCompOverhead = 0; var predivRangeOverhead = 0;
var predivOneOverhead_two = 0; var predivTwoOverhead_two = 0; var predivThreeOverhead_two = 0; var predivFourOverhead_two = 0; var predivFiveOverhead_two = 0; var predivSixOverhead_two = 0; var predivSevenOverhead_two = 0;
var predivElevenOverhead_two = 0; var predivZeroOverhead_two = 0; var predivDeferrCompOverhead_two = 0; var predivRangeOverhead_two = 0;
var fiftyPerRev = 0; var fiftyPerRev_two = 0; var prefiftyPerRev = 0; var prefiftyPerRev_two = 0; var profitSummary = 0; var profitSummary_two = 0;
var preprofitSummary = 0; var preprofitSummary_two = 0; var netCostCorportate = 0; var netCostCorportate_two = 0; var prenetCostCorportate = 0; var prenetCostCorportate_two = 0; var netCostConsolidated = 0; var netCostConsolidated_two = 0; var prenetCostConsolidated = 0;var prenetCostConsolidated_two = 0; var netGACostDiv01 = 0; var netGACostDiv01_two = 0; var prenetGACostDiv01 = 0; var prenetGACostDiv01_two = 0;
var netGACostDiv02 = 0; var netGACostDiv02_two = 0; var prenetGACostDiv02 = 0; var prenetGACostDiv02_two = 0; var netGACostDiv03 = 0; var netGACostDiv03_two = 0; var prenetGACostDiv03 = 0; var prenetGACostDiv03_two = 0; var netGACostDiv04 = 0; var netGACostDiv04_two = 0; var prenetGACostDiv04 = 0; var prenetGACostDiv04_two = 0; var netGACostDiv05 = 0; var netGACostDiv05_two = 0; var prenetGACostDiv05 = 0; var prenetGACostDiv05_two = 0;
var netGACostDiv06 = 0; var netGACostDiv06_two = 0; var prenetGACostDiv06 = 0; var prenetGACostDiv06_two = 0; var netGACostDiv07 = 0; var netGACostDiv07_two = 0; var prenetGACostDiv07 = 0; var prenetGACostDiv07_two = 0; var netGACostDiv11 = 0; var netGACostDiv11_two = 0; var prenetGACostDiv11 = 0; var prenetGACostDiv11_two = 0; var effDivTotal = 0; var preeffDivTotal = 0;
var netGACostDiv00 = 0; var prenetGACostDiv00 = 0; var IncomeOperDiv01 = 0; var IncomeOperDiv01_two = 0; var preIncomeOperDiv01 = 0; var preIncomeOperDiv01_two = 0; var IncomeOperDiv02 = 0; var IncomeOperDiv02_two = 0; var preIncomeOperDiv02 = 0; var preIncomeOperDiv02_two = 0; var IncomeOperDiv03 = 0; var IncomeOperDiv03_two = 0; var preIncomeOperDiv03 = 0; var preIncomeOperDiv03_two = 0;
var IncomeOperDiv04 = 0; var IncomeOperDiv04_two = 0; var preIncomeOperDiv04 = 0; var preIncomeOperDiv04_two = 0; var IncomeOperDiv05 = 0; var IncomeOperDiv05_two = 0; var preIncomeOperDiv05 = 0; var preIncomeOperDiv05_two = 0; var IncomeOperDiv06 = 0; var IncomeOperDiv06_two = 0; var preIncomeOperDiv06 = 0; var preIncomeOperDiv06_two = 0; var IncomeOperDiv07 = 0; var IncomeOperDiv07_two = 0; var preIncomeOperDiv07 = 0; var preIncomeOperDiv07_two = 0;
var IncomeOperDiv11 = 0; var IncomeOperDiv11_two = 0; var preIncomeOperDiv11 = 0; var preIncomeOperDiv11_two = 0; var IncomeOperDiv00 = 0; var IncomeOperDiv00_two = 0; var preIncomeOperDiv00 = 0; var preIncomeOperDiv00_two = 0; var netGACorporateCost = 0; var netGACorporateCost_two = 0; var prenetGACorporateCost = 0; var prenetGACorporateCost_two = 0; var netGAConsolidatedCost = 0; var netGAConsolidatedCost_two = 0;
var prenetGAConsolidatedCost = 0; var prenetGAConsolidatedCost_two = 0; var ma_revenue_1 = 0; var ma_profit_1 = 0; var ma_revenue_2 = 0; var ma_profit_2 = 0; var ma_revenue_3 = 0; var ma_profit_3 = 0; var ma_revenue_4 = 0;
var ma_profit_4 = 0; var ma_revenue_5 = 0; var ma_profit_5 = 0; var ma_revenue_6 = 0; var ma_profit_6 = 0; var ma_revenue_7 = 0; var ma_profit_7 = 0; var ma_revenue_11 = 0; var ma_profit_11 = 0;
var ma_revenue_00 = 0; var ma_profit_00 = 0; var prev_ma_revenue_1 = 0; var prev_ma_profit_1 = 0; var prev_ma_revenue_2 = 0; var prev_ma_profit_2 = 0; var prev_ma_revenue_3 = 0; var prev_ma_profit_3 = 0;
var prev_ma_revenue_4 = 0; var prev_ma_profit_4 = 0; var prev_ma_revenue_5 = 0; var prev_ma_profit_5 = 0; var prev_ma_revenue_6 = 0; var prev_ma_profit_6 = 0; var prev_ma_revenue_7 = 0;
var prev_ma_profit_7 = 0;var prev_ma_revenue_11 = 0; var prev_ma_profit_11 = 0; var prev_ma_revenue_00 = 0; var prev_ma_profit_00 = 0; var expectedFutureRev = 0; var expectedFutureProf = 0;
var expectedFutureBack = 0; var profitTotal = 0; var expectedBacklog = 0; var expectedConAmount = 0;
var ma_revenue_1_two = 0; var ma_profit_1_two = 0; var ma_revenue_2_two = 0; var ma_profit_2_two = 0; var ma_revenue_3_two = 0; var ma_profit_3_two = 0; var ma_revenue_4_two = 0;
var ma_profit_4_two = 0; var ma_revenue_5_two = 0; var ma_profit_5_two = 0; var ma_revenue_6_two = 0; var ma_profit_6_two = 0; var ma_revenue_7_two = 0; var ma_profit_7_two = 0; var ma_revenue_11_two = 0; var ma_profit_11_two = 0;
var ma_revenue_00_two = 0; var ma_profit_00_two = 0; var prev_ma_revenue_1_two = 0; var prev_ma_profit_1_two = 0; var prev_ma_revenue_2_two = 0; var prev_ma_profit_2_two = 0; var prev_ma_revenue_3_two = 0; var prev_ma_profit_3_two = 0;
var prev_ma_revenue_4_two = 0; var prev_ma_profit_4_two = 0; var prev_ma_revenue_5_two = 0; var prev_ma_profit_5_two = 0; var prev_ma_revenue_6_two = 0; var prev_ma_profit_6_two = 0; var prev_ma_revenue_7_two = 0;
var prev_ma_profit_7_two = 0;var prev_ma_revenue_11_two = 0; var prev_ma_profit_11_two = 0; var prev_ma_revenue_00_two = 0; var prev_ma_profit_00_two = 0;
var currentQuarterResp = '';
var currentYearResp = '';
var previousQuarterResp = '';
var previousYearResp = '';
var currentQuarter = '';
var prevcurrentQuarter = '';
var currentDateString = '';
var currentYearLabel = '';
var financialString = '';
var currentMonth = 0;
var totalJobProfitOne = 0;
var totalJobProfitOne_two = 0;
var pretotalJobProfitOne = 0;
var pretotalJobProfitOne_two = 0;
var totalJobProfitTwo = 0;
var totalJobProfitTwo_two = 0;
var totalJobProfitTwo_two = 0;
var pretotalJobProfitTwo = 0;
var pretotalJobProfitTwo_two = 0;
var totalJobProfitThree = 0;
var totalJobProfitThree_two = 0;
var pretotalJobProfitThree = 0;
var pretotalJobProfitThree_two = 0;
var totalJobProfitFour = 0;
var totalJobProfitFour_two = 0;
var pretotalJobProfitFour = 0;
var pretotalJobProfitFour_two = 0;
var totalJobProfitFive = 0;
var totalJobProfitFive_two = 0;
var pretotalJobProfitFive = 0;
var pretotalJobProfitFive_two = 0;
var totalJobProfitSix = 0;
var totalJobProfitSix_two = 0;
var pretotalJobProfitSix = 0;
var pretotalJobProfitSix_two = 0;
var totalJobProfitSeven = 0;
var totalJobProfitSeven_two = 0;
var pretotalJobProfitSeven = 0;
var pretotalJobProfitSeven_two = 0;
var totalJobProfitEleven = 0;
var totalJobProfitEleven_two = 0;
var pretotalJobProfitEleven = 0;
var pretotalJobProfitEleven_two = 0;
var totalJobProfitZero = 0;
var totalJobProfitZero_two = 0;
var pretotalJobProfitZero = 0;
var pretotalJobProfitZero_two = 0;
var totalJobProfitConsolidated = 0;
var totalJobProfitConsolidated_two = 0;
var pretotalJobProfitConsolidated = 0;
var pretotalJobProfitConsolidated_two = 0;
var currentYearTwo = '';
var previousYearRespTwo = '';
var prevcurrentQuarterDate = '';
var otherIncomeTotal = 0;
var preotherIncomeTotal = 0;




class Main extends Component{


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
     //this.Auth.logout()
     this.userAgentApplication.logout();
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
          currentYearTwo = parseInt(current_year) + 1;
    
        })
        if(currentQuarterResp === '1'){
          currentQuarter = new Date('3/31/' + currentYearResp)
          previousYearResp = parseInt(currentYearResp) - 1;
          prevcurrentQuarter = new Date('12/31/' + previousYearResp)
          previousYearRespTwo = parseInt(currentYearTwo) - 1;
          prevcurrentQuarterDate = new Date('12/31/' + previousYearRespTwo)
          currentMonth = 3;
          currentDateString = 'March 31'
          currentYearLabel = currentYearResp
          previousQuarterResp = '4';
        }else if(currentQuarterResp === '2'){
          currentQuarter = new Date('6/30/' + currentYearResp)
          prevcurrentQuarter = new Date('3/31/' + currentYearResp)
          currentMonth = 6;
          currentDateString = 'June 30'
          currentYearLabel = currentYearResp
          previousQuarterResp = '1';
          previousYearResp = currentYearResp;
          previousYearRespTwo = currentYearTwo;
          prevcurrentQuarterDate = new Date('3/31/' + currentYearTwo)
        }else if(currentQuarterResp === '3'){
          currentQuarter = new Date('9/30/' + currentYearResp)
          prevcurrentQuarter = new Date('6/30/' + currentYearResp)
          currentMonth = 9;
          currentDateString = 'September 30'
          currentYearLabel = currentYearResp
          previousQuarterResp = '2';
          previousYearResp = currentYearResp;
          previousYearRespTwo = currentYearTwo;
          prevcurrentQuarterDate = new Date('6/30/' + currentYearTwo)
        }else if(currentQuarterResp === '4'){
          currentQuarter = new Date('12/31/' + currentYearResp)
          prevcurrentQuarter = new Date('9/30/' + currentYearResp)
          currentMonth = 12;
          currentDateString = 'December 31'
          currentYearLabel = parseInt(currentYearResp) + 1;
          previousQuarterResp = '3';
          previousYearResp = currentYearResp;
          previousYearRespTwo = currentYearTwo;
          prevcurrentQuarterDate = new Date('9/30/' + currentYearTwo)
        }
        var decoded = jwt_decode(localStorage.getItem('data-token'));  
        userInfo.forEach(function (item){
        const {  useremail, userdivision } = item //destructuring
  
        /*if(decoded.sub === useremail){
          if(userdivision === "all"){
            financialString = "https://rest-site-locations-1594736464770.azurewebsites.net/api/financialResultsData/";
          }else{
            financialString = "https://rest-site-locations-1594736464770.azurewebsites.net/api/financialResultsData/division/" + userdivision
          }
        } */ 
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
        "https://rest-site-locations-1594736464770.azurewebsites.net/api/financialActualBudgetData",
        {headers: {
            "Authorization" : AuthStr,
            "Content-Type" : "application/json"
          }
        }
      ),
      axios.get(
        "https://rest-site-locations-1594736464770.azurewebsites.net/api/financialManagementAdjustmentData/",
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
        this.setState({ ProjectReportData: dataValue, OverHeadData: dataValueBudgetActual, ManagementAdjData: dataManagementAdjustment, userRole: decoded.roles, dataLoadCheck: dataValue});
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
      
          if(parseInt(currentYearResp) === parseInt(year) && parseInt(quarter) === parseInt(currentQuarterResp)){
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
          }else if(parseInt(quarter) === parseInt(previousQuarterResp) && parseInt(year) === parseInt(previousYearResp)){
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
          }else if(parseInt(currentYearTwo) === parseInt(year) && parseInt(quarter) === parseInt(currentQuarterResp)){
            if(division === '1'){
              ma_revenue_1_two = parseFloat(ma_revenue);
              ma_profit_1_two = parseFloat(ma_profit);
            }else if(division === '2'){
              ma_revenue_2_two = parseFloat(ma_revenue);
              ma_profit_2_two = parseFloat(ma_profit);
            }else if(division === '3'){
              ma_revenue_3_two = parseFloat(ma_revenue);
              ma_profit_3_two = parseFloat(ma_profit);
            }else if(division === '4'){
              ma_revenue_4_two = parseFloat(ma_revenue);
              ma_profit_4_two = parseFloat(ma_profit);
            }else if(division === '5'){
              ma_revenue_5_two = parseFloat(ma_revenue);
              ma_profit_5_two = parseFloat(ma_profit);
            }else if(division === '6'){
              ma_revenue_6_two = parseFloat(ma_revenue);
              ma_profit_6_two = parseFloat(ma_profit);
            }else if(division === '7'){
              ma_revenue_7_two = parseFloat(ma_revenue);
              ma_profit_7_two = parseFloat(ma_profit);
            }else if(division === '11'){
              ma_revenue_11_two = parseFloat(ma_revenue);
              ma_profit_11_two = parseFloat(ma_profit);
            }else if(division === '00'){
              ma_revenue_00_two = parseFloat(ma_revenue);
              ma_profit_00_two = parseFloat(ma_profit);
            }
          }else if(parseInt(quarter) === parseInt(previousQuarterResp) && parseInt(year) === parseInt(previousYearRespTwo)){
            if(division === '1'){
              prev_ma_revenue_1_two = parseFloat(ma_revenue);
              prev_ma_profit_1_two = parseFloat(ma_profit);
            }else if(division === '2'){
              prev_ma_revenue_2_two = parseFloat(ma_revenue);
              prev_ma_profit_2_two = parseFloat(ma_profit);
            }else if(division === '3'){
              prev_ma_revenue_3_two = parseFloat(ma_revenue);
              prev_ma_profit_3_two = parseFloat(ma_profit);
            }else if(division === '4'){
              prev_ma_revenue_4_two = parseFloat(ma_revenue);
              prev_ma_profit_4_two = parseFloat(ma_profit);
            }else if(division === '5'){
              prev_ma_revenue_5_two = parseFloat(ma_revenue);
              prev_ma_profit_5_two = parseFloat(ma_profit);
            }else if(division === '6'){
              prev_ma_revenue_6_two = parseFloat(ma_revenue);
              prev_ma_profit_6_two = parseFloat(ma_profit);
            }else if(division === '7'){
              prev_ma_revenue_7_two = parseFloat(ma_revenue);
              prev_ma_profit_7_two = parseFloat(ma_profit);
            }else if(division === '11'){
              prev_ma_revenue_11_two = parseFloat(ma_revenue);
              prev_ma_profit_11_two = parseFloat(ma_profit);
            }else if(division === '00'){
              prev_ma_revenue_00_two = parseFloat(ma_revenue);
              prev_ma_profit_00_two = parseFloat(ma_profit);
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
        var prefutureProfit = 0;
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
        }else if((pastDate <= now2 && pastcheckMonth === true && parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)) || (pastDate <= now2 && parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year))){
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

        //current Quarter and Year Calculations    
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
            prefutureProfit = parseFloat(prefutureRevenue) * (gross_margin_percent/100);
          }
        }
      }else{
        //Current Quarter and Year non contract Calculations
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
            expectedRevenue1 += parseFloat(totalExpectedRevenue);
            expectedProfit1 += profitCurrentYear;
            expectedRevenue1_two += parseFloat(futureRevenue);
            expectedProfit1_two += futureProfit;
          }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
            preexpectedRevenue1 += parseFloat(pretotalExpectedRevenue) ? parseFloat(pretotalExpectedRevenue) : 0;
            preexpectedProfit1 += preprofitCurrentYear; 
            preexpectedRevenue1_two += parseFloat(prefutureRevenue);
            preexpectedProfit1_two += prefutureProfit;
          }
        }else if( status === 'ABNC'){
          if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
            expectedRevenueABNC1 += parseFloat(totalExpectedRevenue);
            expectedProfitABNC1 += profitCurrentYear;
            expectedRevenueABNC1_two += parseFloat(futureRevenue);
            expectedProfitABNC1_two += futureProfit;
          }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
            preexpectedRevenueABNC1 += parseFloat(pretotalExpectedRevenue);
            preexpectedProfitABNC1 += preprofitCurrentYear;
            preexpectedRevenueABNC1_two += parseFloat(futureRevenue);
            preexpectedProfitABNC1_two += futureProfit;
          }
        }else{
          if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
            expectedRevenueFA1 += parseFloat(totalExpectedRevenue);
            expectedProfitFA1 += profitCurrentYear;
            expectedRevenueFA1_two += parseFloat(futureRevenue);
            expectedProfitFA1_two += futureProfit;
          }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
            preexpectedRevenueFA1 += parseFloat(pretotalExpectedRevenue);
            preexpectedProfitFA1 += preprofitCurrentYear;
            preexpectedRevenueFA1_two += parseFloat(futureRevenue);
            preexpectedProfitFA1_two += futureProfit;
          }
        }
    
      }else if(division === '2'){
        if( status === 'Contract'){
          if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
            expectedRevenue2 += parseFloat(totalExpectedRevenue);
            expectedProfit2 += profitCurrentYear;
            expectedRevenue2_two += parseFloat(futureRevenue);
            expectedProfit2_two += futureProfit;
          }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
            preexpectedRevenue2 += parseFloat(pretotalExpectedRevenue);
            preexpectedProfit2 += preprofitCurrentYear;
            preexpectedRevenue2_two += parseFloat(prefutureRevenue);
            preexpectedProfit2_two += prefutureProfit;
          }
        }else if( status === 'ABNC'){
          if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
            expectedRevenueABNC2 += parseFloat(totalExpectedRevenue);
            expectedProfitABNC2 += profitCurrentYear;
            expectedRevenueABNC2_two += parseFloat(futureRevenue);
            expectedProfitABNC2_two += futureProfit;
          }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
            preexpectedRevenueABNC2 += parseFloat(pretotalExpectedRevenue);
            preexpectedProfitABNC2 += preprofitCurrentYear;
            preexpectedRevenueABNC2_two += parseFloat(futureRevenue);
            preexpectedProfitABNC2_two += futureProfit;
          }
        }else{
          if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
            expectedRevenueFA2 += parseFloat(totalExpectedRevenue);
            expectedProfitFA2 += profitCurrentYear;
            expectedRevenueFA2_two += parseFloat(futureRevenue);
            expectedProfitFA2_two += futureProfit;
          }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
            preexpectedRevenueFA2 += parseFloat(pretotalExpectedRevenue);
            preexpectedProfitFA2 += preprofitCurrentYear;
            preexpectedRevenueFA2_two += parseFloat(futureRevenue);
            preexpectedProfitFA2_two += futureProfit;
          }
        }
    
      }else if(division === '3'){
        if( status === 'Contract'){
          if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
            expectedRevenue3 += parseFloat(totalExpectedRevenue);
            expectedProfit3 += profitCurrentYear;
            expectedRevenue3_two += parseFloat(futureRevenue);
            expectedProfit3_two += futureProfit;
          }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
            preexpectedRevenue3 += parseFloat(pretotalExpectedRevenue);
            preexpectedProfit3 += preprofitCurrentYear;
            preexpectedRevenue3_two += parseFloat(prefutureRevenue);
            preexpectedProfit3_two += prefutureProfit;
          }
        }else if( status === 'ABNC'){
          if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
            expectedRevenueABNC3 += parseFloat(totalExpectedRevenue);
            expectedProfitABNC3 += profitCurrentYear;
            expectedRevenueABNC3_two += parseFloat(futureRevenue);
            expectedProfitABNC3_two += futureProfit;
          }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
            preexpectedRevenueABNC3 += parseFloat(pretotalExpectedRevenue);
            preexpectedProfitABNC3 += preprofitCurrentYear;
            preexpectedRevenueABNC3_two += parseFloat(futureRevenue);
            preexpectedProfitABNC3_two += futureProfit;
          }
        }else{
          if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
            expectedRevenueFA3 += parseFloat(totalExpectedRevenue);
            expectedProfitFA3 += profitCurrentYear;
            expectedRevenueFA3_two += parseFloat(futureRevenue);
            expectedProfitFA3_two += futureProfit;
          }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
            preexpectedRevenueFA3 += parseFloat(pretotalExpectedRevenue);
            preexpectedProfitFA3 += preprofitCurrentYear;
            preexpectedRevenueFA3_two += parseFloat(futureRevenue);
            preexpectedProfitFA3_two += futureProfit;
          }
        }
    
      }else if(division === '4'){
        if( status === 'Contract'){
          if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
            expectedRevenue4 += parseFloat(totalExpectedRevenue);
            expectedProfit4 += profitCurrentYear;
            expectedRevenue4_two += parseFloat(futureRevenue);
            expectedProfit4_two += futureProfit;
          }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
            preexpectedRevenue4 += parseFloat(pretotalExpectedRevenue);
            preexpectedProfit4 += preprofitCurrentYear;
            preexpectedRevenue4_two += parseFloat(prefutureRevenue);
            preexpectedProfit4_two += prefutureProfit;
          }
        }else if( status === 'ABNC'){
          if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
            expectedRevenueABNC4 += parseFloat(totalExpectedRevenue);
            expectedProfitABNC4 += profitCurrentYear;
            expectedRevenueABNC4_two += parseFloat(futureRevenue);
            expectedProfitABNC4_two += futureProfit;
          }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
            preexpectedRevenueABNC4 += parseFloat(pretotalExpectedRevenue);
            preexpectedProfitABNC4 += preprofitCurrentYear;
            preexpectedRevenueABNC4_two += parseFloat(futureRevenue);
            preexpectedProfitABNC4_two += futureProfit;
          }
        }else{
          if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
            expectedRevenueFA4 += parseFloat(totalExpectedRevenue);
            expectedProfitFA4 += profitCurrentYear;
            expectedRevenueFA4_two += parseFloat(futureRevenue);
            expectedProfitFA4_two += futureProfit;
          }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
            preexpectedRevenueFA4 += parseFloat(pretotalExpectedRevenue);
            preexpectedProfitFA4 += preprofitCurrentYear;
            preexpectedRevenueFA4_two += parseFloat(futureRevenue);
            preexpectedProfitFA4_two += futureProfit;
          }
        }
    
      }else if(division === '5'){
        if( status === 'Contract'){
          if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
            expectedRevenue5 += parseFloat(totalExpectedRevenue);
            expectedProfit5 += profitCurrentYear;
            expectedRevenue5_two += parseFloat(futureRevenue);
            expectedProfit5_two += futureProfit;
          }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
            preexpectedRevenue5 += parseFloat(pretotalExpectedRevenue);
            preexpectedProfit5 += preprofitCurrentYear;
            preexpectedRevenue5_two += parseFloat(prefutureRevenue);
            preexpectedProfit5_two += prefutureProfit;
          }
        }else if( status === 'ABNC'){
          if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
            expectedRevenueABNC5 += parseFloat(totalExpectedRevenue);
            expectedProfitABNC5 += profitCurrentYear;
            expectedRevenueABNC5_two += parseFloat(futureRevenue);
            expectedProfitABNC5_two += futureProfit;
          }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
            preexpectedRevenueABNC5 += parseFloat(pretotalExpectedRevenue);
            preexpectedProfitABNC5 += preprofitCurrentYear;
            preexpectedRevenueABNC5_two += parseFloat(futureRevenue);
            preexpectedProfitABNC5_two += futureProfit;
          }
        }else{
          if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
            expectedRevenueFA5 += parseFloat(totalExpectedRevenue);
            expectedProfitFA5 += profitCurrentYear;
            expectedRevenueFA5_two += parseFloat(futureRevenue);
            expectedProfitFA5_two += futureProfit;
          }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
            preexpectedRevenueFA5 += parseFloat(pretotalExpectedRevenue);
            preexpectedProfitFA5 += preprofitCurrentYear;
            preexpectedRevenueFA5_two += parseFloat(futureRevenue);
            preexpectedProfitFA5_two += futureProfit;
          }
        }
    
      }else if(division === '6'){
        if( status === 'Contract'){
          if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
            expectedRevenue6 += parseFloat(totalExpectedRevenue);
            expectedProfit6 += profitCurrentYear;
            expectedRevenue6_two += parseFloat(futureRevenue);
            expectedProfit6_two += futureProfit;
          }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
            preexpectedRevenue6 += parseFloat(pretotalExpectedRevenue);
            preexpectedProfit6 += preprofitCurrentYear;
            preexpectedRevenue6_two += parseFloat(prefutureRevenue);
            preexpectedProfit6_two += prefutureProfit;
          }
        }else if( status === 'ABNC'){
          if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
            expectedRevenueABNC6 += parseFloat(totalExpectedRevenue);
            expectedProfitABNC6 += profitCurrentYear;
            expectedRevenueABNC6_two += parseFloat(futureRevenue);
            expectedProfitABNC6_two += futureProfit;
          }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
            preexpectedRevenueABNC6 += parseFloat(pretotalExpectedRevenue);
            preexpectedProfitABNC6 += preprofitCurrentYear;
            preexpectedRevenueABNC6_two += parseFloat(futureRevenue);
            preexpectedProfitABNC6_two += futureProfit;
          }
        }else{
          if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
            expectedRevenueFA6 += parseFloat(totalExpectedRevenue);
            expectedProfitFA6 += profitCurrentYear;
            expectedRevenueFA6_two += parseFloat(futureRevenue);
            expectedProfitFA6_two += futureProfit;
          }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
            preexpectedRevenueFA6 += parseFloat(pretotalExpectedRevenue);
            preexpectedProfitFA6 += preprofitCurrentYear;
            preexpectedRevenueFA6_two += parseFloat(futureRevenue);
            preexpectedProfitFA6_two += futureProfit;
          }
        }
    
      }else if(division === '7'){
        if( status === 'Contract'){
          if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
            expectedRevenue7 += parseFloat(totalExpectedRevenue);
            expectedProfit7 += profitCurrentYear;
            expectedRevenue7_two += parseFloat(futureRevenue);
            expectedProfit7_two += futureProfit;
          }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
            preexpectedRevenue7 += parseFloat(pretotalExpectedRevenue);
            preexpectedProfit7 += preprofitCurrentYear;
            preexpectedRevenue7_two += parseFloat(prefutureRevenue);
            preexpectedProfit7_two += prefutureProfit;
          }
        }else if( status === 'ABNC'){
          if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
            expectedRevenueABNC7 += parseFloat(totalExpectedRevenue);
            expectedProfitABNC7 += profitCurrentYear;
            expectedRevenueABNC7_two += parseFloat(futureRevenue);
            expectedProfitABNC7_two += futureProfit;
          }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
            preexpectedRevenueABNC7 += parseFloat(pretotalExpectedRevenue);
            preexpectedProfitABNC7 += preprofitCurrentYear;
            preexpectedRevenueABNC7_two += parseFloat(futureRevenue);
            preexpectedProfitABNC7_two += futureProfit;
          }
        }else{
          if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
            expectedRevenueFA7 += parseFloat(totalExpectedRevenue);
            expectedProfitFA7 += profitCurrentYear;
            expectedRevenueFA7_two += parseFloat(futureRevenue);
            expectedProfitFA7_two += futureProfit;
          }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
            preexpectedRevenueFA7 += parseFloat(pretotalExpectedRevenue);
            preexpectedProfitFA7 += preprofitCurrentYear;
            preexpectedRevenueFA7_two += parseFloat(futureRevenue);
            preexpectedProfitFA7_two += futureProfit;
          }
        }
    
      }else if(division === '11'){
        if( status === 'Contract'){
          if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
            expectedRevenue11 += parseFloat(totalExpectedRevenue);
            expectedProfit11 += profitCurrentYear;
            expectedRevenue11_two += parseFloat(futureRevenue);
            expectedProfit11_two += futureProfit;
          }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
            preexpectedRevenue11 += parseFloat(pretotalExpectedRevenue);
            preexpectedProfit11 += preprofitCurrentYear;
            preexpectedRevenue11_two += parseFloat(prefutureRevenue);
            preexpectedProfit11_two += prefutureProfit;
          }
        }else if( status === 'ABNC'){
          if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
            expectedRevenueABNC11 += parseFloat(totalExpectedRevenue);
            expectedProfitABNC11 += profitCurrentYear;
            expectedRevenueABNC11_two += parseFloat(futureRevenue);
            expectedProfitABNC11_two += futureProfit;
          }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
            preexpectedRevenueABNC11 += parseFloat(pretotalExpectedRevenue);
            preexpectedProfitABNC11 += preprofitCurrentYear;
            preexpectedRevenueABNC11_two += parseFloat(futureRevenue);
            preexpectedProfitABNC11_two += futureProfit;
          }
        }else{
          if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
            expectedRevenueFA11 += parseFloat(totalExpectedRevenue);
            expectedProfitFA11 += profitCurrentYear;
            expectedRevenueFA11_two += parseFloat(futureRevenue);
            expectedProfitFA11_two += futureProfit;
          }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
            preexpectedRevenueFA11 += parseFloat(pretotalExpectedRevenue);
            preexpectedProfitFA11 += preprofitCurrentYear;
            preexpectedRevenueFA11_two += parseFloat(futureRevenue);
            preexpectedProfitFA11_two += futureProfit;
          }
        }
    
      }else if(division === '00'){
        if( status === 'Contract'){
          if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
            expectedRevenue00 += parseFloat(totalExpectedRevenue);
            expectedProfit00 += profitCurrentYear;
            expectedRevenue00_two += parseFloat(futureRevenue);
            expectedProfit00_two += futureProfit;
          }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
            preexpectedRevenue00 += parseFloat(pretotalExpectedRevenue);
            preexpectedProfit00 += preprofitCurrentYear;
            preexpectedRevenue00_two += parseFloat(prefutureRevenue);
            preexpectedProfit00_two += prefutureProfit;
          }
        }else if( status === 'ABNC'){
          if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
            expectedRevenueABNC00 += parseFloat(totalExpectedRevenue);
            expectedProfitABNC00 += profitCurrentYear;
            expectedRevenueABNC00_two += parseFloat(futureRevenue);
            expectedProfitABNC00_two += futureProfit;
          }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
            preexpectedRevenueABNC00 += parseFloat(pretotalExpectedRevenue);
            preexpectedProfitABNC00 += preprofitCurrentYear;
            preexpectedRevenueABNC00_two += parseFloat(futureRevenue);
            preexpectedProfitABNC00_two += futureProfit;
          }
        }else{
          if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
            expectedRevenueFA00 += parseFloat(totalExpectedRevenue);
            expectedProfitFA00 += profitCurrentYear;
            expectedRevenueFA00_two += parseFloat(futureRevenue);
            expectedProfitFA00_two += futureProfit;
          }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
            preexpectedRevenueFA00 += parseFloat(pretotalExpectedRevenue);
            preexpectedProfitFA00 += preprofitCurrentYear;
            preexpectedRevenueFA00_two += parseFloat(futureRevenue);
            preexpectedProfitFA00_two += futureProfit;
          }
        }
    
      }
    
      revenueTotal = expectedRevenue1 + expectedRevenue2 + expectedRevenue3 + expectedRevenue4 + expectedRevenue5 + expectedRevenue6 + expectedRevenue7 + expectedRevenue11 + expectedRevenue00;
      revenueTotal_two = expectedRevenue1_two + expectedRevenue2_two + expectedRevenue3_two + expectedRevenue4_two + expectedRevenue5_two + expectedRevenue6_two + expectedRevenue7_two + expectedRevenue11_two + expectedRevenue00_two;
      prerevenueTotal = preexpectedRevenue1 + preexpectedRevenue2 + preexpectedRevenue3 + preexpectedRevenue4 + preexpectedRevenue5 + preexpectedRevenue6 + preexpectedRevenue7 + preexpectedRevenue11 + preexpectedRevenue00;
      prerevenueTotal_two = preexpectedRevenue1_two + preexpectedRevenue2_two + preexpectedRevenue3_two + preexpectedRevenue4_two + preexpectedRevenue5_two + preexpectedRevenue6_two + preexpectedRevenue7_two + preexpectedRevenue11_two + preexpectedRevenue00_two;
      
      revenueABNCTotal = expectedRevenueABNC1 + expectedRevenueABNC2 + expectedRevenueABNC3 + expectedRevenueABNC4 + expectedRevenueABNC5 + expectedRevenueABNC6 + expectedRevenueABNC7 + expectedRevenueABNC11 + expectedRevenueABNC00;
      revenueABNCTotal_two = expectedRevenueABNC1_two + expectedRevenueABNC2_two + expectedRevenueABNC3_two + expectedRevenueABNC4_two + expectedRevenueABNC5_two + expectedRevenueABNC6_two + expectedRevenueABNC7_two + expectedRevenueABNC11_two + expectedRevenueABNC00_two;
      prerevenueABNCTotal = preexpectedRevenueABNC1 + preexpectedRevenueABNC2 + preexpectedRevenueABNC3 + preexpectedRevenueABNC4 + preexpectedRevenueABNC5 + preexpectedRevenueABNC6 + preexpectedRevenueABNC7 + preexpectedRevenueABNC11 + preexpectedRevenueABNC00;
      prerevenueABNCTotal_two = preexpectedRevenueABNC1_two + preexpectedRevenueABNC2_two + preexpectedRevenueABNC3_two + preexpectedRevenueABNC4_two + preexpectedRevenueABNC5_two + preexpectedRevenueABNC6_two + preexpectedRevenueABNC7_two + preexpectedRevenueABNC11_two + preexpectedRevenueABNC00_two;
      
      revenueFATotal = expectedRevenueFA1 + expectedRevenueFA2 + expectedRevenueFA3 + expectedRevenueFA4 + expectedRevenueFA5 + expectedRevenueFA6 + expectedRevenueFA7 + expectedRevenueFA11 + expectedRevenueFA00;
      revenueFATotal_two = expectedRevenueFA1_two + expectedRevenueFA2_two + expectedRevenueFA3_two + expectedRevenueFA4_two + expectedRevenueFA5_two + expectedRevenueFA6_two + expectedRevenueFA7_two + expectedRevenueFA11_two + expectedRevenueFA00_two;
      prerevenueFATotal = preexpectedRevenueFA1 + preexpectedRevenueFA2 + preexpectedRevenueFA3 + preexpectedRevenueFA4 + preexpectedRevenueFA5 + preexpectedRevenueFA6 + preexpectedRevenueFA7 + preexpectedRevenueFA11 + preexpectedRevenueFA00;
      prerevenueFATotal_two = preexpectedRevenueFA1_two + preexpectedRevenueFA2_two + preexpectedRevenueFA3_two + preexpectedRevenueFA4_two + preexpectedRevenueFA5_two + preexpectedRevenueFA6_two + preexpectedRevenueFA7_two + preexpectedRevenueFA11_two + preexpectedRevenueFA00_two;


      revenueFinalTotal = (Math.round(expectedRevenue1) + Math.round(expectedRevenueABNC1) + Math.round(expectedRevenueFA1) + Math.round(expectedRevenue2) + Math.round(expectedRevenueABNC2) + Math.round(expectedRevenueFA2) + Math.round(expectedRevenue3) + Math.round(expectedRevenueABNC3) + Math.round(expectedRevenueFA3) + Math.round(expectedRevenue4) + Math.round(expectedRevenueABNC4) + Math.round(expectedRevenueFA4) + Math.round(expectedRevenue5) + Math.round(expectedRevenueABNC5) + Math.round(expectedRevenueFA5) + Math.round(expectedRevenue6) + Math.round(expectedRevenueABNC6) + Math.round(expectedRevenueFA6) + Math.round(expectedRevenue7) + Math.round(expectedRevenueABNC7) + Math.round(expectedRevenueFA7) + Math.round(expectedRevenue11) + Math.round(expectedRevenueABNC11) + Math.round(expectedRevenueFA11) +  Math.round(expectedRevenue00) + Math.round(expectedRevenueABNC00) + Math.round(expectedRevenueFA00));
      revenueFinalTotal_two = (expectedRevenue1_two + expectedRevenueABNC1_two + expectedRevenueFA1_two + expectedRevenue2_two + expectedRevenueABNC2_two + expectedRevenueFA2_two + expectedRevenue3_two + expectedRevenueABNC3_two + expectedRevenueFA3_two + expectedRevenue4_two + expectedRevenueABNC4_two + expectedRevenueFA4_two + expectedRevenue5_two + expectedRevenueABNC5_two + expectedRevenueFA5_two + expectedRevenue6_two + expectedRevenueABNC6_two + expectedRevenueFA6_two + expectedRevenue7_two + expectedRevenueABNC7_two + expectedRevenueFA7_two + expectedRevenue11_two + expectedRevenueABNC11_two + expectedRevenueFA11_two +  expectedRevenue00_two + expectedRevenueABNC00_two + expectedRevenueFA00_two);
      prerevenueFinalTotal = (Math.round(preexpectedRevenue1) + Math.round(preexpectedRevenueABNC1) + Math.round(preexpectedRevenueFA1) + Math.round(preexpectedRevenue2) + Math.round(preexpectedRevenueABNC2) + Math.round(preexpectedRevenueFA2) + Math.round(preexpectedRevenue3) + Math.round(preexpectedRevenueABNC3) + Math.round(preexpectedRevenueFA3) + Math.round(preexpectedRevenue4) + Math.round(preexpectedRevenueABNC4) + Math.round(preexpectedRevenueFA4) + Math.round(preexpectedRevenue5) + Math.round(preexpectedRevenueABNC5) + Math.round(preexpectedRevenueFA5) + Math.round(preexpectedRevenue6) + Math.round(preexpectedRevenueABNC6) + Math.round(preexpectedRevenueFA6) + Math.round(preexpectedRevenue7) + Math.round(preexpectedRevenueABNC7) + Math.round(preexpectedRevenueFA7) + Math.round(preexpectedRevenue11) + Math.round(preexpectedRevenueABNC11) + Math.round(preexpectedRevenueFA11) +  Math.round(preexpectedRevenue00) + Math.round(preexpectedRevenueABNC00) + Math.round(preexpectedRevenueFA00));
      prerevenueFinalTotal_two = (Math.round(preexpectedRevenue1_two) + Math.round(preexpectedRevenueABNC1_two) + Math.round(preexpectedRevenueFA1_two) + Math.round(preexpectedRevenue2_two) + Math.round(preexpectedRevenueABNC2_two) + Math.round(preexpectedRevenueFA2_two) + Math.round(preexpectedRevenue3_two) + Math.round(preexpectedRevenueABNC3_two) + Math.round(preexpectedRevenueFA3_two) + Math.round(preexpectedRevenue4_two) + Math.round(preexpectedRevenueABNC4_two) + Math.round(preexpectedRevenueFA4_two) + Math.round(preexpectedRevenue5_two) + Math.round(preexpectedRevenueABNC5_two) + Math.round(preexpectedRevenueFA5_two) + Math.round(preexpectedRevenue6_two) + Math.round(preexpectedRevenueABNC6_two) + Math.round(preexpectedRevenueFA6_two) + Math.round(preexpectedRevenue7_two) + Math.round(preexpectedRevenueABNC7_two) + Math.round(preexpectedRevenueFA7_two) + Math.round(preexpectedRevenue11_two) + Math.round(preexpectedRevenueABNC11_two) + Math.round(preexpectedRevenueFA11_two) +  Math.round(preexpectedRevenue00_two) + Math.round(preexpectedRevenueABNC00_two) + Math.round(preexpectedRevenueFA00_two));


      jobProfitTotal = expectedProfit1 + expectedProfit2 + expectedProfit3 + expectedProfit4 + expectedProfit5 + expectedProfit6 + expectedProfit7 + expectedProfit11 + expectedProfit00;
      jobProfitTotal_two = expectedProfit1_two + expectedProfit2_two + expectedProfit3_two + expectedProfit4_two + expectedProfit5_two + expectedProfit6_two + expectedProfit7_two + expectedProfit11_two + expectedProfit00_two;
      prejobProfitTotal = preexpectedProfit1 + preexpectedProfit2 + preexpectedProfit3 + preexpectedProfit4 + preexpectedProfit5 + preexpectedProfit6 + preexpectedProfit7 + preexpectedProfit11 + preexpectedProfit00;
      prejobProfitTotal_two = preexpectedProfit1_two + preexpectedProfit2_two + preexpectedProfit3_two + preexpectedProfit4_two + preexpectedProfit5_two + preexpectedProfit6_two + preexpectedProfit7_two + preexpectedProfit11_two + preexpectedProfit00_two;
      
      jobProfitABNCTotal = parseFloat(expectedProfitABNC1) + parseFloat(expectedProfitABNC2) + parseFloat(expectedProfitABNC3) + parseFloat(expectedProfitABNC4) + parseFloat(expectedProfitABNC5) + parseFloat(expectedProfitABNC6) + parseFloat(expectedProfitABNC7) + parseFloat(expectedProfitABNC11)  + parseFloat(expectedProfitABNC00);
      jobProfitABNCTotal_two = parseFloat(expectedProfitABNC1_two) + parseFloat(expectedProfitABNC2_two) + parseFloat(expectedProfitABNC3_two) + parseFloat(expectedProfitABNC4_two) + parseFloat(expectedProfitABNC5_two) + parseFloat(expectedProfitABNC6_two) + parseFloat(expectedProfitABNC7_two) + parseFloat(expectedProfitABNC11_two)  + parseFloat(expectedProfitABNC00_two);
      prejobProfitABNCTotal = parseFloat(preexpectedProfitABNC1) + parseFloat(preexpectedProfitABNC2) + parseFloat(preexpectedProfitABNC3) + parseFloat(preexpectedProfitABNC4) + parseFloat(preexpectedProfitABNC5) + parseFloat(preexpectedProfitABNC6) + parseFloat(preexpectedProfitABNC7) + parseFloat(preexpectedProfitABNC11)  + parseFloat(preexpectedProfitABNC00);
      prejobProfitABNCTotal_two = parseFloat(preexpectedProfitABNC1_two) + parseFloat(preexpectedProfitABNC2_two) + parseFloat(preexpectedProfitABNC3_two) + parseFloat(preexpectedProfitABNC4_two) + parseFloat(preexpectedProfitABNC5_two) + parseFloat(preexpectedProfitABNC6_two) + parseFloat(preexpectedProfitABNC7_two) + parseFloat(preexpectedProfitABNC11_two)  + parseFloat(preexpectedProfitABNC00_two);
      
      jobProfitFATotal = parseFloat(expectedProfitFA1) + parseFloat(expectedProfitFA2) + parseFloat(expectedProfitFA3) + parseFloat(expectedProfitFA4) + parseFloat(expectedProfitFA5) + parseFloat(expectedProfitFA6) + parseFloat(expectedProfitFA7) + parseFloat(expectedProfitFA11)  + parseFloat(expectedProfitFA00);
      jobProfitFATotal_two = parseFloat(expectedProfitFA1_two) + parseFloat(expectedProfitFA2_two) + parseFloat(expectedProfitFA3_two) + parseFloat(expectedProfitFA4_two) + parseFloat(expectedProfitFA5_two) + parseFloat(expectedProfitFA6_two) + parseFloat(expectedProfitFA7_two) + parseFloat(expectedProfitFA11_two)  + parseFloat(expectedProfitFA00_two);
      prejobProfitFATotal = parseFloat(preexpectedProfitFA1) + parseFloat(preexpectedProfitFA2) + parseFloat(preexpectedProfitFA3) + parseFloat(preexpectedProfitFA4) + parseFloat(preexpectedProfitFA5) + parseFloat(preexpectedProfitFA6) + parseFloat(preexpectedProfitFA7) + parseFloat(preexpectedProfitFA11)  + parseFloat(preexpectedProfitFA00);
      prejobProfitFATotal_two = parseFloat(preexpectedProfitFA1_two) + parseFloat(preexpectedProfitFA2_two) + parseFloat(preexpectedProfitFA3_two) + parseFloat(preexpectedProfitFA4_two) + parseFloat(preexpectedProfitFA5_two) + parseFloat(preexpectedProfitFA6_two) + parseFloat(preexpectedProfitFA7_two) + parseFloat(preexpectedProfitFA11_two)  + parseFloat(preexpectedProfitFA00_two);


      jobProfitFinalTotal = Math.round(jobProfitTotal) + Math.round(jobProfitABNCTotal) + Math.round(jobProfitFATotal);  
      jobProfitFinalTotal_two = Math.round(jobProfitTotal_two) + Math.round(jobProfitABNCTotal_two) + Math.round(jobProfitFATotal_two);  
      prevJobProfitFinalTotal = Math.round(preexpectedProfit1) + Math.round(preexpectedProfitABNC1) + Math.round(preexpectedProfitFA1) + Math.round(preexpectedProfit2) + Math.round(preexpectedProfitABNC2) + Math.round(preexpectedProfitFA2) + Math.round(preexpectedProfit3) + Math.round(preexpectedProfitABNC3) + Math.round(preexpectedProfitFA3) + Math.round(preexpectedProfit4) + Math.round(preexpectedProfitABNC4) + Math.round(preexpectedProfitFA4) + Math.round(preexpectedProfit5) + Math.round(preexpectedProfitABNC5) + Math.round(preexpectedProfitFA5) + Math.round(preexpectedProfit6) + Math.round(preexpectedProfitABNC6) + Math.round(preexpectedProfitFA6) + Math.round(preexpectedProfit7) + Math.round(preexpectedProfitABNC7) + Math.round(preexpectedProfitFA7) + Math.round(preexpectedProfit11) + Math.round(preexpectedProfitABNC11) + Math.round(preexpectedProfitFA11) + Math.round(preexpectedProfit00) + Math.round(preexpectedProfitABNC00) + Math.round(preexpectedProfitFA00); 
      prevJobProfitFinalTotal_two = Math.round(preexpectedProfit1_two) + Math.round(preexpectedProfitABNC1_two) + Math.round(preexpectedProfitFA1_two) + Math.round(preexpectedProfit2_two) + Math.round(preexpectedProfitABNC2_two) + Math.round(preexpectedProfitFA2_two) + Math.round(preexpectedProfit3_two) + Math.round(preexpectedProfitABNC3_two) + Math.round(preexpectedProfitFA3_two) + Math.round(preexpectedProfit4_two) + Math.round(preexpectedProfitABNC4_two) + Math.round(preexpectedProfitFA4_two) + Math.round(preexpectedProfit5_two) + Math.round(preexpectedProfitABNC5_two) + Math.round(preexpectedProfitFA5_two) + Math.round(preexpectedProfit6_two) + Math.round(preexpectedProfitABNC6_two) + Math.round(preexpectedProfitFA6_two) + Math.round(preexpectedProfit7_two) + Math.round(preexpectedProfitABNC7_two) + Math.round(preexpectedProfitFA7_two) + Math.round(preexpectedProfit11_two) + Math.round(preexpectedProfitABNC11_two) + Math.round(preexpectedProfitFA11_two) + Math.round(preexpectedProfit00_two) + Math.round(preexpectedProfitABNC00_two) + Math.round(preexpectedProfitFA00_two); 

    })
    
    
    //calculating overhead data
    this.state.OverHeadData.map((OverHeadData, index) => {
      const {  department, account, name, status, year, quarter, period_1, 
            period_2, period_3, period_4, period_5, period_6, period_7, period_8, period_9, period_10, period_11, period_12 } = OverHeadData //destructuring
              
      if(account >= 5020 && account <= 6999 && department === "01"){
        if(account >= 5020 && account <= 6999 && department === "01" && status === "Actual"){
            if(currentMonth === 3){
              if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                divOneOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
              }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                predivOneOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
              }  
            }else if(currentMonth === 6){
              if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                divOneOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
              }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                predivOneOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
              } 
            }else if(currentMonth === 9){
              if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                divOneOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
              }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                predivOneOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
              } 
            }else if(currentMonth === 12){
              if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                divOneOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
              }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                predivOneOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
              }  
            }
          }
            else if(account >= 5020 && account <= 6999 && department === "01" && status === "Budget"){
                if(currentMonth === 12){
                  if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                    divOneOverhead += parseFloat(0);
                    divOneOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                  }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                    predivOneOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                    predivOneOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                  }
                }else if(currentMonth === 9){
                  if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                    divOneOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                    divOneOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                  }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                    predivOneOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                    predivOneOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                  }  
                }else if(currentMonth === 6){
                  if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                    divOneOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                    divOneOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                  }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                    predivOneOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                    predivOneOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                  } 
                }else if(currentMonth === 3){
                  if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                    divOneOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                    divOneOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                  }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                    predivOneOverhead += parseFloat(0);
                    predivOneOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                  } 
                }
            }
      } 
      
      else if(account === "7100.100" && department === "01"){
        if(account === "7100.100" && department === "01" && status === "Actual"){
              if(currentMonth === 3){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divProfOneOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivProfOneOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }  
              }else if(currentMonth === 6){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divProfOneOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivProfOneOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                } 
              }else if(currentMonth === 9){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divProfOneOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivProfOneOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                } 
              }else if(currentMonth === 12){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divProfOneOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivProfOneOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                }  
              }
    
          }   
            else if(account === "7100.100" && department === "01" && status === "Budget"){
              if(currentMonth === 12){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divProfOneOverhead += parseFloat(0);
                  divProfOneOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivProfOneOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                  predivProfOneOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }
              }else if(currentMonth === 9){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divProfOneOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                  divProfOneOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);

                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivProfOneOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                  predivProfOneOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }  
              }else if(currentMonth === 6){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divProfOneOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                  divProfOneOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivProfOneOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                  predivProfOneOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                } 
              }else if(currentMonth === 3){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divProfOneOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                  divProfOneOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivProfOneOverhead += parseFloat(0);
                  predivProfOneOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                } 
              }
            }
      }
      
      else if(account >= 5020 && account <= 6999 && department === "02"){
        if(account >= 5020 && account <= 6999 && department === "02" && status === "Actual"){
          if(currentMonth === 3){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divTwoOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivTwoOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }  
          }else if(currentMonth === 6){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divTwoOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivTwoOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
            } 
          }else if(currentMonth === 9){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divTwoOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivTwoOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
            } 
          }else if(currentMonth === 12){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divTwoOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivTwoOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
            }  
          }
            }
            else if(account >= 5020 && account <= 6999 && department === "02" && status === "Budget"){
              if(currentMonth === 12){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divTwoOverhead += parseFloat(0);
                  divTwoOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivTwoOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                  predivTwoOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }
              }else if(currentMonth === 9){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divTwoOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                  divTwoOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivTwoOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                  predivTwoOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }  
              }else if(currentMonth === 6){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divTwoOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                  divTwoOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivTwoOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                  predivTwoOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                } 
              }else if(currentMonth === 3){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divTwoOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                  divTwoOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivTwoOverhead += parseFloat(0);
                  predivTwoOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                } 
              }
            }
      }
      
      else if(account === "7100.100" && department === "02"){
        if(account === "7100.100" && department === "02" && status === "Actual"){
          if(currentMonth === 3){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divProfTwoOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivProfTwoOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }  
          }else if(currentMonth === 6){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divProfTwoOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivProfTwoOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
            } 
          }else if(currentMonth === 9){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divProfTwoOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivProfTwoOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
            } 
          }else if(currentMonth === 12){
            if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
              divProfTwoOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
            }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
              predivProfTwoOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
            }  
          }
            }   
            else if(account === "7100.100" && department === "02" && status === "Budget"){
              if(currentMonth === 12){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divProfTwoOverhead += parseFloat(0);
                  divProfTwoOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivProfTwoOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                  predivProfTwoOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }
              }else if(currentMonth === 9){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divProfTwoOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                  divProfTwoOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivProfTwoOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                  predivProfTwoOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }  
              }else if(currentMonth === 6){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divProfTwoOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                  divProfTwoOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivProfTwoOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                  predivProfTwoOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                } 
              }else if(currentMonth === 3){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divProfTwoOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                  divProfTwoOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivProfTwoOverhead += parseFloat(0);
                  predivProfTwoOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                } 
              }
            }
      }
    
      else if(account >= 5020 && account <= 6999 && department === "03"){
        if(account >= 5020 && account <= 6999 && department === "03" && status === "Actual"){
                if(currentMonth === 3){
                  if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                    divThreeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                  }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                    predivThreeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                  }  
                }else if(currentMonth === 6){
                  if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                    divThreeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                  }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                    predivThreeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                  } 
                }else if(currentMonth === 9){
                  if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                    divThreeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                  }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                    predivThreeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                  } 
                }else if(currentMonth === 12){
                  if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                    divThreeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                  }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                    predivThreeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                  }  
                }
            }
            else if(account >= 5020 && account <= 6999 && department === "03" && status === "Budget"){
              if(currentMonth === 12){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divThreeOverhead += parseFloat(0);
                  divThreeOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivThreeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                  predivThreeOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }
              }else if(currentMonth === 9){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divThreeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                  divThreeOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivThreeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                  predivThreeOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }  
              }else if(currentMonth === 6){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divThreeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                  divThreeOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivThreeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                  predivThreeOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                } 
              }else if(currentMonth === 3){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divThreeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                  divThreeOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivThreeOverhead += parseFloat(0);
                  predivThreeOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                } 
              }
            }
      }
      
      else if(account === "7100.100" && department === "03"){
        if(account === "7100.100" && department === "03" && status === "Actual"){
                if(currentMonth === 3){
                  if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                    divProfThreeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                  }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                    predivProfThreeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                  }  
                }else if(currentMonth === 6){
                  if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                    divProfThreeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                  }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                    predivProfThreeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                  } 
                }else if(currentMonth === 9){
                  if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                    divProfThreeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                  }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                    predivProfThreeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                  } 
                }else if(currentMonth === 12){
                  if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                    divProfThreeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                  }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                    predivProfThreeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                  }  
                }
    
            }    
            else if(account === "7100.100" && department === "03" && status === "Budget"){
                    if(currentMonth === 12){
                      if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                        divProfThreeOverhead += parseFloat(0);
                        divProfThreeOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                      }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                        predivProfThreeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                        predivProfThreeOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                      }
                    }else if(currentMonth === 9){
                      if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                        divProfThreeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                        divProfThreeOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                      }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                        predivProfThreeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                        predivProfThreeOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                      }  
                    }else if(currentMonth === 6){
                      if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                        divProfThreeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                        divProfThreeOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                      }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                        predivProfThreeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                        predivProfThreeOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                      } 
                    }else if(currentMonth === 3){
                      if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                        divProfThreeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                        divProfThreeOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                      }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                        predivProfThreeOverhead += parseFloat(0);
                        predivProfThreeOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                      } 
                    }
            }
      }
      
      else if(account >= 5020 && account <= 6999 && department === "04"){
        if(account >= 5020 && account <= 6999 && department === "04" && status === "Actual"){
                  if(currentMonth === 3){
                    if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                      divFourOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                    }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                      predivFourOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                    }  
                  }else if(currentMonth === 6){
                    if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                      divFourOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                    }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                      predivFourOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                    } 
                  }else if(currentMonth === 9){
                    if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                      divFourOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                    }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                      predivFourOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                    } 
                  }else if(currentMonth === 12){
                    if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                      divFourOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                    }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                      predivFourOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                    }  
                  }
            }
            else if(account >= 5020 && account <= 6999 && department === "04" && status === "Budget"){
              if(currentMonth === 12){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divFourOverhead += parseFloat(0);
                  divFourOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivFourOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                  predivFourOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }
              }else if(currentMonth === 9){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divFourOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                  divFourOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivFourOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                  predivFourOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }  
              }else if(currentMonth === 6){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divFourOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                  divFourOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivFourOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                  predivFourOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                } 
              }else if(currentMonth === 3){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divFourOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                  divFourOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivFourOverhead += parseFloat(0);
                  predivFourOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                } 
              }
            }
      }
      
      else if(account === "7100.100" && department === "04"){
        if(account === "7100.100" && department === "04" && status === "Actual"){
                if(currentMonth === 3){
                  if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                    divProfFourOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                  }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                    predivProfFourOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                  }  
                }else if(currentMonth === 6){
                  if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                    divProfFourOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                  }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                    predivProfFourOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                  } 
                }else if(currentMonth === 9){
                  if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                    divProfFourOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                  }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                    predivProfFourOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                  } 
                }else if(currentMonth === 12){
                  if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                    divProfFourOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                  }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                    predivProfFourOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                  }  
                }
    
        }  
        else if(account === "7100.100" && department === "04" && status === "Budget"){
                if(currentMonth === 12){
                  if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                    divProfFourOverhead += parseFloat(0);
                    divProfFourOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                  }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                    predivProfFourOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                    predivProfFourOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                  }
                }else if(currentMonth === 9){
                  if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                    divProfFourOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                    divProfFourOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                  }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                    predivProfFourOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                    predivProfFourOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                  }  
                }else if(currentMonth === 6){
                  if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                    divProfFourOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                    divProfFourOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                  }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                    predivProfFourOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                    predivProfFourOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                  } 
                }else if(currentMonth === 3){
                  if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                    divProfFourOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                    divProfFourOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                  }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                    predivProfFourOverhead += parseFloat(0);
                    predivProfFourOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                  } 
                }
            }
      }
      
      else if(account >= 5020 && account <= 6999 && department === "05"){
                if(account >= 5020 && account <= 6999 && department === "05" && status === "Actual"){
                  if(currentMonth === 3){
                    if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                      divFiveOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                    }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                      predivFiveOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                    }  
                  }else if(currentMonth === 6){
                    if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                      divFiveOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                    }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                      predivFiveOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                    } 
                  }else if(currentMonth === 9){
                    if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                      divFiveOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                    }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                      predivFiveOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                    } 
                  }else if(currentMonth === 12){
                    if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                      divFiveOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                    }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                      predivFiveOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                    }  
                  }
            }    
            else if(account >= 5020 && account <= 6999 && department === "05" && status === "Budget"){
              if(currentMonth === 12){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divFiveOverhead += parseFloat(0);
                  divFiveOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivFiveOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                  predivFiveOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }
              }else if(currentMonth === 9){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divFiveOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                  divFiveOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivFiveOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                  predivFiveOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }  
              }else if(currentMonth === 6){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divFiveOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                  divFiveOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivFiveOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                  predivFiveOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                } 
              }else if(currentMonth === 3){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divFiveOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                  divFiveOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivFiveOverhead += parseFloat(0);
                  predivFiveOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                } 
              }
            }
      }
      
      else if(account === "7100.100" && department === "05"){
                if(account === "7100.100" && department === "05" && status === "Actual"){
                  if(currentMonth === 3){
                    if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                      divProfFiveOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                    }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                      predivProfFiveOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                    }  
                  }else if(currentMonth === 6){
                    if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                      divProfFiveOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                    }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                      predivProfFiveOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                    } 
                  }else if(currentMonth === 9){
                    if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                      divProfFiveOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                    }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                      predivProfFiveOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                    } 
                  }else if(currentMonth === 12){
                    if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                      divProfFiveOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                    }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                      predivProfFiveOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                    }  
                  }
    
            }    
            else if(account === "7100.100" && department === "05" && status === "Budget"){
                  if(currentMonth === 12){
                    if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                      divProfFiveOverhead += parseFloat(0);
                      divProfFiveOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                    }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                      predivProfFiveOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                      predivProfFiveOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                    }
                  }else if(currentMonth === 9){
                    if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                      divProfFiveOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                      divProfFiveOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                    }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                      predivProfFiveOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                      predivProfFiveOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                    }  
                  }else if(currentMonth === 6){
                    if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                      divProfFiveOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                      divProfFiveOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                    }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                      predivProfFiveOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                      predivProfFiveOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                    } 
                  }else if(currentMonth === 3){
                    if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                      divProfFiveOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                      divProfFiveOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                    }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                      predivProfFiveOverhead += parseFloat(0);
                      predivProfFiveOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                    } 
                  }
            }
      }
      
      else if(account >= 5020 && account <= 6999 && department === "06"){
                if(account >= 5020 && account <= 6999 && department === "06" && status === "Actual"){
                  if(currentMonth === 3){
                    if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                      divSixOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                    }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                      predivSixOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                    }  
                  }else if(currentMonth === 6){
                    if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                      divSixOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                    }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                      predivSixOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                    } 
                  }else if(currentMonth === 9){
                    if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                      divSixOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                    }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                      predivSixOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                    } 
                  }else if(currentMonth === 12){
                    if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                      divSixOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                    }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                      predivSixOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                    }  
                  }
    
            }     
            else if(account >= 5020 && account <= 6999 && department === "06" && status === "Budget"){
              if(currentMonth === 12){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divSixOverhead += parseFloat(0);
                  divSixOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivSixOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                  predivSixOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }
              }else if(currentMonth === 9){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divSixOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                  divSixOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivSixOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                  predivSixOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }  
              }else if(currentMonth === 6){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divSixOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                  divSixOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivSixOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                  predivSixOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                } 
              }else if(currentMonth === 3){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divSixOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                  divSixOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivSixOverhead += parseFloat(0);
                  predivSixOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                } 
              }
            }
      }
      
      else if(account === "7100.100" && department === "06"){
              if(account === "7100.100" && department === "06" && status === "Actual"){
                if(currentMonth === 3){
                  if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                    divProfSixOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                  }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                    predivProfSixOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                  }  
                }else if(currentMonth === 6){
                  if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                    divProfSixOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                  }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                    predivProfSixOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                  } 
                }else if(currentMonth === 9){
                  if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                    divProfSixOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                  }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                    predivProfSixOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                  } 
                }else if(currentMonth === 12){
                  if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                    divProfSixOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                  }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                    predivProfSixOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                  }  
                }
    
            }    
            else if(account === "7100.100" && department === "06" && status === "Budget"){
                  if(currentMonth === 12){
                    if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                      divProfSixOverhead += parseFloat(0);
                      divProfSixOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                    }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                      predivProfSixOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                      predivProfSixOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                    }
                  }else if(currentMonth === 9){
                    if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                      divProfSixOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                      divProfSixOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                    }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                      predivProfSixOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                      predivProfSixOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                    }  
                  }else if(currentMonth === 6){
                    if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                      divProfSixOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                      divProfSixOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                    }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                      predivProfSixOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                      predivProfSixOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                    } 
                  }else if(currentMonth === 3){
                    if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                      divProfSixOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                      divProfSixOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                    }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                      predivProfSixOverhead += parseFloat(0);
                      predivProfSixOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                    } 
                  }
            }
      }
      
      else if(account >= 5020 && account <= 6999 && department === "07"){
        if(account >= 5020 && account <= 6999 && department === "07" && status === "Actual"){
                if(currentMonth === 3){
                  if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                    divSevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                  }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                    predivSevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                  }  
                }else if(currentMonth === 6){
                  if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                    divSevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                  }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                    predivSevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                  } 
                }else if(currentMonth === 9){
                  if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                    divSevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                  }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                    predivSevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                  } 
                }else if(currentMonth === 12){
                  if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                    divSevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                  }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                    predivSevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                  }  
                }
            }      
            else if(account >= 5020 && account <= 6999 && department === "07" && status === "Budget"){
              if(currentMonth === 12){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divSevenOverhead += parseFloat(0);
                  divSevenOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivSevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                  predivSevenOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }
              }else if(currentMonth === 9){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divSevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                  divSevenOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivSevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                  predivSevenOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }  
              }else if(currentMonth === 6){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divSevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                  divSevenOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivSevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                  predivSevenOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                } 
              }else if(currentMonth === 3){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divSevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                  divSevenOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivSevenOverhead += parseFloat(0);
                  predivSevenOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                } 
              }
            }
      }
      
      else if(account === "7100.100" && department === "07"){
        if(account === "7100.100" && department === "07" && status === "Actual"){
                  if(currentMonth === 3){
                    if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                      divProfSevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                    }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                      predivProfSevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                    }  
                  }else if(currentMonth === 6){
                    if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                      divProfSevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                    }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                      predivProfSevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                    } 
                  }else if(currentMonth === 9){
                    if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                      divProfSevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                    }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                      predivProfSevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                    } 
                  }else if(currentMonth === 12){
                    if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                      divProfSevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                    }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                      predivProfSevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                    }  
                  }
            }    
            else if(account === "7100.100" && department === "07" && status === "Budget"){
                    if(currentMonth === 12){
                      if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                        divProfSevenOverhead += parseFloat(0);
                        divProfSevenOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                      }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                        predivProfSevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                        predivProfSevenOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                      }
                    }else if(currentMonth === 9){
                      if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                        divProfSevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                        divProfSevenOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                      }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                        predivProfSevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                        predivProfSevenOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                      }  
                    }else if(currentMonth === 6){
                      if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                        divProfSevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                        divProfSevenOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                      }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                        predivProfSevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                        predivProfSevenOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                      } 
                    }else if(currentMonth === 3){
                      if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                        divProfSevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                        divProfSevenOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                      }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                        predivProfSevenOverhead += parseFloat(0);
                        predivProfSevenOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                      } 
                    }
            }
      }
      
      else if(account >= 5020 && account <= 6999 && department === "11"){
        if(account >= 5020 && account <= 6999 && department === "11" && status === "Actual"){
                    if(currentMonth === 3){
                      if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                        divElevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                      }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                        predivElevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                      }  
                    }else if(currentMonth === 6){
                      if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                        divElevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                      }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                        predivElevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                      } 
                    }else if(currentMonth === 9){
                      if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                        divElevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                      }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                        predivElevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                      } 
                    }else if(currentMonth === 12){
                      if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                        divElevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                      }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                        predivElevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                      }  
                    }
            }      
            else if(account >= 5020 && account <= 6999 && department === "11" && status === "Budget"){
              if(currentMonth === 12){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divElevenOverhead += parseFloat(0);
                  divElevenOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivElevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                  predivElevenOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }
              }else if(currentMonth === 9){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divElevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                  divElevenOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivElevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                  predivElevenOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }  
              }else if(currentMonth === 6){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divElevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                  divElevenOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivElevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                  predivElevenOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                } 
              }else if(currentMonth === 3){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divElevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                  divElevenOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivElevenOverhead += parseFloat(0);
                  predivElevenOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                } 
              }
            }
      }
      
      else if(account === "7100.100" && department === "11"){
        if(account === "7100.100" && department === "11" && status === "Actual"){
                if(currentMonth === 3){
                  if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                    divProfElevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                  }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                    predivProfElevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                  }  
                }else if(currentMonth === 6){
                  if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                    divProfElevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                  }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                    predivProfElevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                  } 
                }else if(currentMonth === 9){
                  if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                    divProfElevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                  }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                    predivProfElevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                  } 
                }else if(currentMonth === 12){
                  if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                    divProfElevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                  }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                    predivProfElevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                  }  
                }
    
            }       
            else if(account === "7100.100" && department === "11" && status === "Budget"){
                  if(currentMonth === 12){
                    if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                      divProfElevenOverhead += parseFloat(0);
                      divProfElevenOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                    }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                      predivProfElevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                      predivProfElevenOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                    }
                  }else if(currentMonth === 9){
                    if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                      divProfElevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                      divProfElevenOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                    }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                      predivProfElevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                      predivProfElevenOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                    }  
                  }else if(currentMonth === 6){
                    if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                      divProfElevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                      divProfElevenOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                    }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                      predivProfElevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                      predivProfElevenOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                    } 
                  }else if(currentMonth === 3){
                    if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                      divProfElevenOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                      divProfElevenOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                    }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                      predivProfElevenOverhead += parseFloat(0);
                      predivProfElevenOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                    } 
                  }
            }
      }
      
      else if(account >= 5020 && account <= 6999 && department === "00"){
        if(account >= 5020 && account <= 6999 && department === "00" && status === "Actual"){
                  if(currentMonth === 3){
                    if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                      divZeroOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                    }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                      predivZeroOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                    }  
                  }else if(currentMonth === 6){
                    if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                      divZeroOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                    }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                      predivZeroOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                    } 
                  }else if(currentMonth === 9){
                    if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                      divZeroOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                    }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                      predivZeroOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                    } 
                  }else if(currentMonth === 12){
                    if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                      divZeroOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                    }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                      predivZeroOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                    }  
                  }
            }     
            else if(account >= 5020 && account <= 6999 && department === "00" && status === "Budget"){
              if(currentMonth === 12){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divZeroOverhead += parseFloat(0);
                  divZeroOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivZeroOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                  predivZeroOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }
              }else if(currentMonth === 9){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divZeroOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                  divZeroOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivZeroOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                  predivZeroOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }  
              }else if(currentMonth === 6){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divZeroOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                  divZeroOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivZeroOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                  predivZeroOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                } 
              }else if(currentMonth === 3){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divZeroOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                  divZeroOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivZeroOverhead += parseFloat(0);
                  predivZeroOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                } 
              }
            }
      }
      
      else if(account === "7100.100" && department === "00"){
        if(account === "7100.100" && department === "00" && status === "Actual"){
                  if(currentMonth === 3){
                    if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                      divProfZeroOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                    }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                      predivProfZeroOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                    }  
                  }else if(currentMonth === 6){
                    if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                      divProfZeroOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                    }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                      predivProfZeroOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                    } 
                  }else if(currentMonth === 9){
                    if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                      divProfZeroOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                    }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                      predivProfZeroOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                    } 
                  }else if(currentMonth === 12){
                    if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                      divProfZeroOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                    }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                      predivProfZeroOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                    }  
                  }
            }      
            else if(account === "7100.100" && department === "00" && status === "Budget"){
                  if(currentMonth === 12){
                    if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                      divProfZeroOverhead += parseFloat(0);
                      divProfZeroOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                    }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                      predivProfZeroOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                      predivProfZeroOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                    }
                  }else if(currentMonth === 9){
                    if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                      divProfZeroOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                      divProfZeroOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                    }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                      predivProfZeroOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                      predivProfZeroOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                    }  
                  }else if(currentMonth === 6){
                    if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                      divProfZeroOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                      divProfZeroOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                    }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                      predivProfZeroOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                      predivProfZeroOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                    } 
                  }else if(currentMonth === 3){
                    if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                      divProfZeroOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                      divProfZeroOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                    }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                      predivProfZeroOverhead += parseFloat(0);
                      predivProfZeroOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                    } 
                  }
            }
      }
      
      else if(account === "7100.200" && department === "00"){
        if(account === "7100.200" && department === "00" && status === "Actual"){
                  if(currentMonth === 3){
                    if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                      divDeferrCompOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                    }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                      predivDeferrCompOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                    }  
                  }else if(currentMonth === 6){
                    if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                      divDeferrCompOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                    }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                      predivDeferrCompOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                    } 
                  }else if(currentMonth === 9){
                    if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                      divDeferrCompOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                    }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                      predivDeferrCompOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                    } 
                  }else if(currentMonth === 12){
                    if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                      divDeferrCompOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                    }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                      predivDeferrCompOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                    }  
                  }
            }        
            else if(account === "7100.200" && department === "00" && status === "Budget"){
              if(currentMonth === 12){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divDeferrCompOverhead += parseFloat(0);
                  divDeferrCompOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivDeferrCompOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                  predivDeferrCompOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }
              }else if(currentMonth === 9){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divDeferrCompOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                  divDeferrCompOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivDeferrCompOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                  predivDeferrCompOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }  
              }else if(currentMonth === 6){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divDeferrCompOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                  divDeferrCompOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivDeferrCompOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                  predivDeferrCompOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                } 
              }else if(currentMonth === 3){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divDeferrCompOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                  divDeferrCompOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivDeferrCompOverhead += parseFloat(0);
                  predivDeferrCompOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                } 
              }
            }
      }
      
      else if(account >= "7000" && account !== "7100.100" && account !== "7100.200"){
        if(account >= "7000" && account !== "7100.100" && account !== "7100.200" && status === "Actual"){
                    if(currentMonth === 3){
                      if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                        divInvestCompOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                      }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                        predivInvestCompOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);;
                      }  
                    }else if(currentMonth === 6){
                      if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                        divInvestCompOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                      }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                        predivInvestCompOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                      } 
                    }else if(currentMonth === 9){
                      if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                        divInvestCompOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                      }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                        predivInvestCompOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                      } 
                    }else if(currentMonth === 12){
                      if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                        divInvestCompOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                      }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                        predivInvestCompOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                      }  
                    }
            }         
            else if(account >= "7000" && account !== "7100.100" && account !== "7100.200" && status === "Budget"){
              if(currentMonth === 12){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divInvestCompOverhead += parseFloat(0);
                  divInvestCompOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivInvestCompOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                  predivInvestCompOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }
              }else if(currentMonth === 9){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divInvestCompOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                  divInvestCompOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivInvestCompOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                  predivInvestCompOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }  
              }else if(currentMonth === 6){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divInvestCompOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                  divInvestCompOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivInvestCompOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6)  + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                  predivInvestCompOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                } 
              }else if(currentMonth === 3){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divInvestCompOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                  divInvestCompOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivInvestCompOverhead += parseFloat(0);
                  predivInvestCompOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                } 
              }
            }
      }
      
      else if(account >= 5020 && account <= 6999 && department >= 88 && department <= 99){
        if(account >= 5020 && account <= 6999 && department >= 88 && department <= 99 && status === "Actual"){
                  if(currentMonth === 3){
                    if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                      divRangeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                    }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                      predivRangeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3)  + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                    }  
                  }else if(currentMonth === 6){
                    if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                      divRangeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                    }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                      predivRangeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                    } 
                  }else if(currentMonth === 9){
                    if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                      divRangeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                    }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                      predivRangeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                    } 
                  }else if(currentMonth === 12){
                    if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                      divRangeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                    }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                      predivRangeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                    }  
                  }
            }       
            else if(account >= 5020 && account <= 6999 && department >= 88 && department <= 99 && status === "Budget"){
              if(currentMonth === 12){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divRangeOverhead += parseFloat(0);
                  divRangeOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivRangeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                  predivRangeOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }
              }else if(currentMonth === 9){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divRangeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3);
                  divRangeOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivRangeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                  predivRangeOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }  
              }else if(currentMonth === 6){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divRangeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6);
                  divRangeOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivRangeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6)  + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                  predivRangeOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                } 
              }else if(currentMonth === 3){
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  divRangeOverhead += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9);
                  divRangeOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                }else if(parseInt(previousQuarterResp) === parseInt(quarter) && parseInt(previousYearResp) === parseInt(year)){
                  predivRangeOverhead += parseFloat(0);
                  predivRangeOverhead_two += parseFloat(period_1) + parseFloat(period_2) + parseFloat(period_3) + parseFloat(period_4) + parseFloat(period_5) + parseFloat(period_6) + parseFloat(period_7) + parseFloat(period_8) + parseFloat(period_9) + parseFloat(period_10) + parseFloat(period_11) + parseFloat(period_12);
                } 
              }
            }
      }
    
    
      fiftyPerRev = (revenueFinalTotal ? ((((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) / 2) * ((expectedRevenue1 + expectedRevenueABNC1 + expectedRevenueFA1) / revenueFinalTotal)) : 0) +
      (revenueFinalTotal ? ((((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) / 2) * ((expectedRevenue2 + expectedRevenueABNC2 + expectedRevenueFA2) / revenueFinalTotal)) : 0) +
      (revenueFinalTotal ? ((((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) / 2) * ((expectedRevenue3 + expectedRevenueABNC3 + expectedRevenueFA3) / revenueFinalTotal)) : 0) +
      (revenueFinalTotal ? ((((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) / 2) * ((expectedRevenue4 + expectedRevenueABNC4 + expectedRevenueFA4) / revenueFinalTotal)) : 0) +
      (revenueFinalTotal ? ((((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) / 2) * ((expectedRevenue5 + expectedRevenueABNC5 + expectedRevenueFA5) / revenueFinalTotal)) : 0) +
      (revenueFinalTotal ? ((((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) / 2) * ((expectedRevenue6 + expectedRevenueABNC6 + expectedRevenueFA6) / revenueFinalTotal)) : 0) +
      (revenueFinalTotal ? ((((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) / 2) * ((expectedRevenue7 + expectedRevenueABNC7 + expectedRevenueFA7) / revenueFinalTotal)) : 0) +
      (revenueFinalTotal ? ((((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) / 2) * ((expectedRevenue11 + expectedRevenueABNC11 + expectedRevenueFA11) / revenueFinalTotal)) : 0)
    
      fiftyPerRev_two = (revenueFinalTotal_two ? ((((divZeroOverhead_two*1.03 + divRangeOverhead_two*1.03 + divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03) - (divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03)) / 2) * ((expectedRevenue1_two + expectedRevenueABNC1_two + expectedRevenueFA1_two) / revenueFinalTotal_two)) : 0) +
      (revenueFinalTotal_two ? ((((divZeroOverhead_two*1.03 + divRangeOverhead_two*1.03 + divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03) - (divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03)) / 2) * ((expectedRevenue2_two + expectedRevenueABNC2_two + expectedRevenueFA2_two) / revenueFinalTotal_two)) : 0) +
      (revenueFinalTotal_two ? ((((divZeroOverhead_two*1.03 + divRangeOverhead_two*1.03 + divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03) - (divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03)) / 2) * ((expectedRevenue3_two + expectedRevenueABNC3_two + expectedRevenueFA3_two) / revenueFinalTotal_two)) : 0) +
      (revenueFinalTotal_two ? ((((divZeroOverhead_two*1.03 + divRangeOverhead_two*1.03 + divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03) - (divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03)) / 2) * ((expectedRevenue4_two + expectedRevenueABNC4_two + expectedRevenueFA4_two) / revenueFinalTotal_two)) : 0) +
      (revenueFinalTotal_two ? ((((divZeroOverhead_two*1.03 + divRangeOverhead_two*1.03 + divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03) - (divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03)) / 2) * ((expectedRevenue5_two + expectedRevenueABNC5_two + expectedRevenueFA5_two) / revenueFinalTotal_two)) : 0) +
      (revenueFinalTotal_two ? ((((divZeroOverhead_two*1.03 + divRangeOverhead_two*1.03 + divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03) - (divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03)) / 2) * ((expectedRevenue6_two + expectedRevenueABNC6_two + expectedRevenueFA6_two) / revenueFinalTotal_two)) : 0) +
      (revenueFinalTotal_two ? ((((divZeroOverhead_two*1.03 + divRangeOverhead_two*1.03 + divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03) - (divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03)) / 2) * ((expectedRevenue7_two + expectedRevenueABNC7_two + expectedRevenueFA7_two) / revenueFinalTotal_two)) : 0) +
      (revenueFinalTotal_two ? ((((divZeroOverhead_two*1.03 + divRangeOverhead_two*1.03 + divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03) - (divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03)) / 2) * ((expectedRevenue11_two + expectedRevenueABNC11_two + expectedRevenueFA11_two) / revenueFinalTotal_two)) : 0)
    

      prefiftyPerRev = ((((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)) / 2) * ((preexpectedRevenue1 + preexpectedRevenueABNC1 + preexpectedRevenueFA1) / prerevenueFinalTotal)) +
      ((((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)) / 2) * ((preexpectedRevenue2 + preexpectedRevenueABNC2 + preexpectedRevenueFA2) / prerevenueFinalTotal)) +
      ((((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)) / 2) * ((preexpectedRevenue3 + preexpectedRevenueABNC3 + preexpectedRevenueFA3) / prerevenueFinalTotal)) +
      ((((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)) / 2) * ((preexpectedRevenue4 + preexpectedRevenueABNC4 + preexpectedRevenueFA4) / prerevenueFinalTotal)) +
      ((((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)) / 2) * ((preexpectedRevenue5 + preexpectedRevenueABNC5 + preexpectedRevenueFA5) / prerevenueFinalTotal)) +
      ((((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)) / 2) * ((preexpectedRevenue6 + preexpectedRevenueABNC6 + preexpectedRevenueFA6) / prerevenueFinalTotal)) +
      ((((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)) / 2) * ((preexpectedRevenue7 + preexpectedRevenueABNC7 + preexpectedRevenueFA7) / prerevenueFinalTotal)) +
      ((((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)) / 2) * ((preexpectedRevenue11 + preexpectedRevenueABNC11 + preexpectedRevenueFA11) / prerevenueFinalTotal))
    

      prefiftyPerRev_two = ((((predivZeroOverhead_two*1.03 + predivRangeOverhead_two*1.03 + predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03) - (predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03)) / 2) * ((preexpectedRevenue1_two + preexpectedRevenueABNC1_two + preexpectedRevenueFA1_two) / prerevenueFinalTotal_two)) +
      ((((predivZeroOverhead_two*1.03 + predivRangeOverhead_two*1.03 + predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03) - (predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03)) / 2) * ((preexpectedRevenue2_two + preexpectedRevenueABNC2_two + preexpectedRevenueFA2_two) / prerevenueFinalTotal_two)) +
      ((((predivZeroOverhead_two*1.03 + predivRangeOverhead_two*1.03 + predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03) - (predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03)) / 2) * ((preexpectedRevenue3_two + preexpectedRevenueABNC3_two + preexpectedRevenueFA3_two) / prerevenueFinalTotal_two)) +
      ((((predivZeroOverhead_two*1.03 + predivRangeOverhead_two*1.03 + predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03) - (predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03)) / 2) * ((preexpectedRevenue4_two + preexpectedRevenueABNC4_two + preexpectedRevenueFA4_two) / prerevenueFinalTotal_two)) +
      ((((predivZeroOverhead_two*1.03 + predivRangeOverhead_two*1.03 + predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03) - (predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03)) / 2) * ((preexpectedRevenue5_two + preexpectedRevenueABNC5_two + preexpectedRevenueFA5_two) / prerevenueFinalTotal_two)) +
      ((((predivZeroOverhead_two*1.03 + predivRangeOverhead_two*1.03 + predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03) - (predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03)) / 2) * ((preexpectedRevenue6_two + preexpectedRevenueABNC6_two + preexpectedRevenueFA6_two) / prerevenueFinalTotal_two)) +
      ((((predivZeroOverhead_two*1.03 + predivRangeOverhead_two*1.03 + predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03) - (predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03)) / 2) * ((preexpectedRevenue7_two + preexpectedRevenueABNC7_two + preexpectedRevenueFA7_two) / prerevenueFinalTotal_two)) +
      ((((predivZeroOverhead_two*1.03 + predivRangeOverhead_two*1.03 + predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03) - (predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03)) / 2) * ((preexpectedRevenue11_two + preexpectedRevenueABNC11_two + preexpectedRevenueFA11_two) / prerevenueFinalTotal_two))

    
      profitSummary = (parseFloat(expectedProfit1) + parseFloat(expectedProfitABNC1) + parseFloat(expectedProfitFA1) + parseFloat(expectedProfit2) + parseFloat(expectedProfitABNC2) + parseFloat(expectedProfitFA2) + parseFloat(expectedProfit3) + parseFloat(expectedProfitABNC3) + parseFloat(expectedProfitFA3) + parseFloat(expectedProfit4) + parseFloat(expectedProfitABNC4) + parseFloat(expectedProfitFA4) + parseFloat(expectedProfit5) + parseFloat(expectedProfitABNC5) + parseFloat(expectedProfitFA5) + parseFloat(expectedProfit6) + parseFloat(expectedProfitABNC6) + parseFloat(expectedProfitFA6) + parseFloat(expectedProfit7) + parseFloat(expectedProfitABNC7) + parseFloat(expectedProfitFA7) + parseFloat(expectedProfit11) + parseFloat(expectedProfitABNC11) + parseFloat(expectedProfitFA11) + parseFloat(expectedProfit00) + parseFloat(expectedProfitABNC00) + parseFloat(expectedProfitFA00));
      profitSummary_two = (parseFloat(expectedProfit1_two) + parseFloat(expectedProfitABNC1_two) + parseFloat(expectedProfitFA1_two) + parseFloat(expectedProfit2_two) + parseFloat(expectedProfitABNC2_two) + parseFloat(expectedProfitFA2_two) + parseFloat(expectedProfit3_two) + parseFloat(expectedProfitABNC3_two) + parseFloat(expectedProfitFA3_two) + parseFloat(expectedProfit4_two) + parseFloat(expectedProfitABNC4_two) + parseFloat(expectedProfitFA4_two) + parseFloat(expectedProfit5_two) + parseFloat(expectedProfitABNC5_two) + parseFloat(expectedProfitFA5_two) + parseFloat(expectedProfit6_two) + parseFloat(expectedProfitABNC6_two) + parseFloat(expectedProfitFA6_two) + parseFloat(expectedProfit7_two) + parseFloat(expectedProfitABNC7_two) + parseFloat(expectedProfitFA7_two) + parseFloat(expectedProfit11_two) + parseFloat(expectedProfitABNC11_two) + parseFloat(expectedProfitFA11_two) + parseFloat(expectedProfit00_two) + parseFloat(expectedProfitABNC00_two) + parseFloat(expectedProfitFA00_two));
      preprofitSummary = (parseFloat(preexpectedProfit1) + parseFloat(preexpectedProfitABNC1) + parseFloat(preexpectedProfitFA1) + parseFloat(preexpectedProfit2) + parseFloat(preexpectedProfitABNC2) + parseFloat(preexpectedProfitFA2) + parseFloat(preexpectedProfit3) + parseFloat(preexpectedProfitABNC3) + parseFloat(preexpectedProfitFA3) + parseFloat(preexpectedProfit4) + parseFloat(preexpectedProfitABNC4) + parseFloat(preexpectedProfitFA4) + parseFloat(preexpectedProfit5) + parseFloat(preexpectedProfitABNC5) + parseFloat(preexpectedProfitFA5) + parseFloat(preexpectedProfit6) + parseFloat(preexpectedProfitABNC6) + parseFloat(preexpectedProfitFA6) + parseFloat(preexpectedProfit7) + parseFloat(preexpectedProfitABNC7) + parseFloat(preexpectedProfitFA7) + parseFloat(preexpectedProfit11) + parseFloat(preexpectedProfitABNC11) + parseFloat(preexpectedProfitFA11) + parseFloat(preexpectedProfit00) + parseFloat(preexpectedProfitABNC00) + parseFloat(preexpectedProfitFA00));
      preprofitSummary_two = (parseFloat(preexpectedProfit1_two) + parseFloat(preexpectedProfitABNC1_two) + parseFloat(preexpectedProfitFA1_two) + parseFloat(preexpectedProfit2_two) + parseFloat(preexpectedProfitABNC2_two) + parseFloat(preexpectedProfitFA2_two) + parseFloat(preexpectedProfit3_two) + parseFloat(preexpectedProfitABNC3_two) + parseFloat(preexpectedProfitFA3_two) + parseFloat(preexpectedProfit4_two) + parseFloat(preexpectedProfitABNC4_two) + parseFloat(preexpectedProfitFA4_two) + parseFloat(preexpectedProfit5_two) + parseFloat(preexpectedProfitABNC5_two) + parseFloat(preexpectedProfitFA5_two) + parseFloat(preexpectedProfit6_two) + parseFloat(preexpectedProfitABNC6_two) + parseFloat(preexpectedProfitFA6_two) + parseFloat(preexpectedProfit7_two) + parseFloat(preexpectedProfitABNC7_two) + parseFloat(preexpectedProfitFA7_two) + parseFloat(preexpectedProfit11_two) + parseFloat(preexpectedProfitABNC11_two) + parseFloat(preexpectedProfitFA11_two) + parseFloat(preexpectedProfit00_two) + parseFloat(preexpectedProfitABNC00_two) + parseFloat(preexpectedProfitFA00_two));

    
      netCostCorportate = ((((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) / 2) * ((expectedProfit1 + expectedProfitABNC1 + expectedProfitFA1) / profitSummary)) 
      + ((((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) / 2) * ((expectedProfit2 + expectedProfitABNC2 + expectedProfitFA2) / profitSummary)) 
      + ((((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) / 2) * ((expectedProfit3 + expectedProfitABNC3 + expectedProfitFA3) / profitSummary)) 
      + ((((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) / 2) * ((expectedProfit4 + expectedProfitABNC4 + expectedProfitFA4) / profitSummary)) 
      + ((((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) / 2) * ((expectedProfit5 + expectedProfitABNC5 + expectedProfitFA5) / profitSummary)) 
      + ((((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) / 2) * ((expectedProfit6 + expectedProfitABNC6 + expectedProfitFA6) / profitSummary)) 
      + ((((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) / 2) * ((expectedProfit7 + expectedProfitABNC7 + expectedProfitFA7) / profitSummary)) 
      + ((((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) / 2) * ((expectedProfit11 + expectedProfitABNC11 + expectedProfitFA11) / profitSummary))
    
      netCostCorportate_two = ((((divZeroOverhead_two*1.03 + divRangeOverhead_two*1.03 + divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03) - (divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03)) / 2) * ((expectedProfit1_two + expectedProfitABNC1_two + expectedProfitFA1_two) / profitSummary_two)) 
      + ((((divZeroOverhead_two*1.03 + divRangeOverhead_two*1.03 + divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03) - (divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03)) / 2) * ((expectedProfit2_two + expectedProfitABNC2_two + expectedProfitFA2_two) / profitSummary_two)) 
      + ((((divZeroOverhead_two*1.03 + divRangeOverhead_two*1.03 + divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03) - (divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03)) / 2) * ((expectedProfit3_two + expectedProfitABNC3_two + expectedProfitFA3_two) / profitSummary_two)) 
      + ((((divZeroOverhead_two*1.03 + divRangeOverhead_two*1.03 + divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03) - (divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03)) / 2) * ((expectedProfit4_two + expectedProfitABNC4_two + expectedProfitFA4_two) / profitSummary_two)) 
      + ((((divZeroOverhead_two*1.03 + divRangeOverhead_two*1.03 + divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03) - (divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03)) / 2) * ((expectedProfit5_two + expectedProfitABNC5_two + expectedProfitFA5_two) / profitSummary_two)) 
      + ((((divZeroOverhead_two*1.03 + divRangeOverhead_two*1.03 + divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03) - (divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03)) / 2) * ((expectedProfit6_two + expectedProfitABNC6_two + expectedProfitFA6_two) / profitSummary_two)) 
      + ((((divZeroOverhead_two*1.03 + divRangeOverhead_two*1.03 + divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03) - (divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03)) / 2) * ((expectedProfit7_two + expectedProfitABNC7_two + expectedProfitFA7_two) / profitSummary_two)) 
      + ((((divZeroOverhead_two*1.03 + divRangeOverhead_two*1.03 + divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03) - (divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03)) / 2) * ((expectedProfit11_two + expectedProfitABNC11_two + expectedProfitFA11_two) / profitSummary_two))
    
    
      prenetCostCorportate = (((((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)) / 2) * ((preexpectedProfit1 + preexpectedProfitABNC1 + preexpectedProfitFA1) / preprofitSummary))) + 
      (((((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)) / 2) * ((preexpectedProfit2 + preexpectedProfitABNC2 + preexpectedProfitFA2) / preprofitSummary))) +
      (((((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)) / 2) * ((preexpectedProfit3 + preexpectedProfitABNC3 + preexpectedProfitFA3) / preprofitSummary))) + 
      (((((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)) / 2) * ((preexpectedProfit4 + preexpectedProfitABNC4 + preexpectedProfitFA4) / preprofitSummary))) + 
      (((((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)) / 2) * ((preexpectedProfit5 + preexpectedProfitABNC5 + preexpectedProfitFA5) / preprofitSummary))) + 
      (((((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)) / 2) * ((preexpectedProfit6 + preexpectedProfitABNC6 + preexpectedProfitFA6) / preprofitSummary))) + 
      (((((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)) / 2) * ((preexpectedProfit7 + preexpectedProfitABNC7 + preexpectedProfitFA7) / preprofitSummary))) + 
      (((((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)) / 2) * ((preexpectedProfit11 + preexpectedProfitABNC11 + preexpectedProfitFA11) / preprofitSummary)))
    

      prenetCostCorportate_two = (((((predivZeroOverhead_two*1.03 + predivRangeOverhead_two*1.03 + predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03) - (predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03)) / 2) * ((preexpectedProfit1_two + preexpectedProfitABNC1_two + preexpectedProfitFA1_two) / preprofitSummary_two))) + 
      (((((predivZeroOverhead_two*1.03 + predivRangeOverhead_two*1.03 + predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03) - (predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03)) / 2) * ((preexpectedProfit2_two + preexpectedProfitABNC2_two + preexpectedProfitFA2_two) / preprofitSummary_two))) +
      (((((predivZeroOverhead_two*1.03 + predivRangeOverhead_two*1.03 + predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03) - (predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03)) / 2) * ((preexpectedProfit3_two + preexpectedProfitABNC3_two + preexpectedProfitFA3_two) / preprofitSummary_two))) + 
      (((((predivZeroOverhead_two*1.03 + predivRangeOverhead_two*1.03 + predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03) - (predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03)) / 2) * ((preexpectedProfit4_two + preexpectedProfitABNC4_two + preexpectedProfitFA4_two) / preprofitSummary_two))) + 
      (((((predivZeroOverhead_two*1.03 + predivRangeOverhead_two*1.03 + predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03) - (predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03)) / 2) * ((preexpectedProfit5_two + preexpectedProfitABNC5_two + preexpectedProfitFA5_two) / preprofitSummary_two))) + 
      (((((predivZeroOverhead_two*1.03 + predivRangeOverhead_two*1.03 + predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03) - (predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03)) / 2) * ((preexpectedProfit6_two + preexpectedProfitABNC6_two + preexpectedProfitFA6_two) / preprofitSummary_two))) + 
      (((((predivZeroOverhead_two*1.03 + predivRangeOverhead_two*1.03 + predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03) - (predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03)) / 2) * ((preexpectedProfit7_two + preexpectedProfitABNC7_two + preexpectedProfitFA7_two) / preprofitSummary_two))) + 
      (((((predivZeroOverhead_two*1.03 + predivRangeOverhead_two*1.03 + predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03) - (predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03)) / 2) * ((preexpectedProfit11_two + preexpectedProfitABNC11_two + preexpectedProfitFA11_two) / preprofitSummary_two)))


    
      netGACorporateCost = Math.round((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - 
      (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) - fiftyPerRev - netCostCorportate
      netGACorporateCost_two = Math.round((divZeroOverhead_two*1.03 + divRangeOverhead_two*1.03 + divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03) - 
      (divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03)) - fiftyPerRev_two - netCostCorportate_two
      prenetGACorporateCost = Math.round((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - 
      (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)) - prefiftyPerRev - prenetCostCorportate
      prenetGACorporateCost_two = Math.round((predivZeroOverhead_two*1.03 + predivRangeOverhead_two*1.03 + predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03) - 
      (predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03)) - prefiftyPerRev_two - prenetCostCorportate_two
    

      netGAConsolidatedCost = (divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) + (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) + (fiftyPerRev - fiftyPerRev)
      netGAConsolidatedCost_two = (divZeroOverhead_two*1.03 + divRangeOverhead_two*1.03 + divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03) + (divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03) - (divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03) + (fiftyPerRev_two - fiftyPerRev_two)
      prenetGAConsolidatedCost = (predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) + (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) + (prefiftyPerRev - prefiftyPerRev)
      prenetGAConsolidatedCost_two = (predivZeroOverhead_two*1.03 + predivRangeOverhead_two*1.03 + predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03) + (predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03) - (predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03) + (prefiftyPerRev_two - prefiftyPerRev_two)
    
      netCostConsolidated = (netCostCorportate) - ((((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) / 2) * ((expectedProfit1 + expectedProfitABNC1 + expectedProfitFA1) / profitSummary))
      - ((((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) / 2) * ((expectedProfit2 + expectedProfitABNC2 + expectedProfitFA2) / profitSummary))
      - ((((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) / 2) * ((expectedProfit3 + expectedProfitABNC3 + expectedProfitFA3) / profitSummary)) 
      - ((((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) / 2) * ((expectedProfit4 + expectedProfitABNC4 + expectedProfitFA4) / profitSummary)) 
      - ((((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) / 2) * ((expectedProfit5 + expectedProfitABNC5 + expectedProfitFA5) / profitSummary))
      - ((((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) / 2) * ((expectedProfit6 + expectedProfitABNC6 + expectedProfitFA6) / profitSummary)) 
      - ((((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) / 2) * ((expectedProfit7 + expectedProfitABNC7 + expectedProfitFA7) / profitSummary))
      - ((((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) / 2) * ((expectedProfit11 + expectedProfitABNC11 + expectedProfitFA11) / profitSummary))
    
      netCostConsolidated_two = (netCostCorportate_two) - ((((divZeroOverhead_two*1.03 + divRangeOverhead_two*1.03 + divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03) - (divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03)) / 2) * ((expectedProfit1_two + expectedProfitABNC1_two + expectedProfitFA1_two) / profitSummary_two))
      - ((((divZeroOverhead_two*1.03 + divRangeOverhead_two*1.03 + divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03) - (divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03)) / 2) * ((expectedProfit2_two + expectedProfitABNC2_two + expectedProfitFA2_two) / profitSummary_two))
      - ((((divZeroOverhead_two*1.03 + divRangeOverhead_two*1.03 + divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03) - (divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03)) / 2) * ((expectedProfit3_two + expectedProfitABNC3_two + expectedProfitFA3_two) / profitSummary_two)) 
      - ((((divZeroOverhead_two*1.03 + divRangeOverhead_two*1.03 + divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03) - (divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03)) / 2) * ((expectedProfit4_two + expectedProfitABNC4_two + expectedProfitFA4_two) / profitSummary_two)) 
      - ((((divZeroOverhead_two*1.03 + divRangeOverhead_two*1.03 + divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03) - (divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03)) / 2) * ((expectedProfit5_two + expectedProfitABNC5_two + expectedProfitFA5_two) / profitSummary_two))
      - ((((divZeroOverhead_two*1.03 + divRangeOverhead_two*1.03 + divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03) - (divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03)) / 2) * ((expectedProfit6_two + expectedProfitABNC6_two + expectedProfitFA6_two) / profitSummary_two)) 
      - ((((divZeroOverhead_two*1.03 + divRangeOverhead_two*1.03 + divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03) - (divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03)) / 2) * ((expectedProfit7_two + expectedProfitABNC7_two + expectedProfitFA7_two) / profitSummary_two))
      - ((((divZeroOverhead_two*1.03 + divRangeOverhead_two*1.03 + divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03) - (divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03)) / 2) * ((expectedProfit11_two + expectedProfitABNC11_two + expectedProfitFA11_two) / profitSummary_two))
     
      prenetCostConsolidated = (prenetCostCorportate) - ((((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)) / 2) * ((preexpectedProfit1 + preexpectedProfitABNC1 + preexpectedProfitFA1) / preprofitSummary))
      - ((((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)) / 2) * ((preexpectedProfit2 + preexpectedProfitABNC2 + preexpectedProfitFA2) / preprofitSummary))
      - ((((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)) / 2) * ((preexpectedProfit3 + preexpectedProfitABNC3 + preexpectedProfitFA3) / preprofitSummary)) 
      - ((((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)) / 2) * ((preexpectedProfit4 + preexpectedProfitABNC4 + preexpectedProfitFA4) / preprofitSummary)) 
      - ((((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)) / 2) * ((preexpectedProfit5 + preexpectedProfitABNC5 + preexpectedProfitFA5) / preprofitSummary))
      - ((((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)) / 2) * ((preexpectedProfit6 + preexpectedProfitABNC6 + preexpectedProfitFA6) / preprofitSummary)) 
      - ((((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)) / 2) * ((preexpectedProfit7 + preexpectedProfitABNC7 + preexpectedProfitFA7) / preprofitSummary))
      - ((((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)) / 2) * ((preexpectedProfit11 + preexpectedProfitABNC11 + preexpectedProfitFA11) / preprofitSummary))
    
      prenetCostConsolidated_two = (prenetCostCorportate_two) - ((((predivZeroOverhead_two*1.03 + predivRangeOverhead_two*1.03 + predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03) - (predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03)) / 2) * ((preexpectedProfit1_two + preexpectedProfitABNC1_two + preexpectedProfitFA1_two) / preprofitSummary_two))
  - ((((predivZeroOverhead_two*1.03 + predivRangeOverhead_two*1.03 + predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03) - (predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03)) / 2) * ((preexpectedProfit2_two + preexpectedProfitABNC2_two + preexpectedProfitFA2_two) / preprofitSummary_two))
  - ((((predivZeroOverhead_two*1.03 + predivRangeOverhead_two*1.03 + predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03) - (predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03)) / 2) * ((preexpectedProfit3_two + preexpectedProfitABNC3_two + preexpectedProfitFA3_two) / preprofitSummary_two)) 
  - ((((predivZeroOverhead_two*1.03 + predivRangeOverhead_two*1.03 + predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03) - (predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03)) / 2) * ((preexpectedProfit4_two + preexpectedProfitABNC4_two + preexpectedProfitFA4_two) / preprofitSummary_two)) 
  - ((((predivZeroOverhead_two*1.03 + predivRangeOverhead_two*1.03 + predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03) - (predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03)) / 2) * ((preexpectedProfit5_two + preexpectedProfitABNC5_two + preexpectedProfitFA5_two) / preprofitSummary_two))
  - ((((predivZeroOverhead_two*1.03 + predivRangeOverhead_two*1.03 + predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03) - (predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03)) / 2) * ((preexpectedProfit6_two + preexpectedProfitABNC6_two + preexpectedProfitFA6_two) / preprofitSummary_two)) 
  - ((((predivZeroOverhead_two*1.03 + predivRangeOverhead_two*1.03 + predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03) - (predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03)) / 2) * ((preexpectedProfit7_two + preexpectedProfitABNC7_two + preexpectedProfitFA7_two) / preprofitSummary_two))
  - ((((predivZeroOverhead_two*1.03 + predivRangeOverhead_two*1.03 + predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03) - (predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03)) / 2) * ((preexpectedProfit11_two + preexpectedProfitABNC11_two + preexpectedProfitFA11_two) / preprofitSummary_two))

    
      netGACostDiv01 = divOneOverhead + ((((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) / 2) * ((expectedRevenue1 + expectedRevenueABNC1 + expectedRevenueFA1) / revenueFinalTotal)) + ((((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) / 2) * ((expectedProfit1 + expectedProfitABNC1 + expectedProfitFA1) / profitSummary))
      prenetGACostDiv01 = predivOneOverhead + ((((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)) / 2) * ((preexpectedRevenue1 + preexpectedRevenueABNC1 + preexpectedRevenueFA1) / prerevenueFinalTotal)) + ((((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)) / 2)) * ((preexpectedProfit1 + preexpectedProfitABNC1 + preexpectedProfitFA1) / preprofitSummary)
      netGACostDiv02 = divTwoOverhead + ((((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) / 2) * ((expectedRevenue2 + expectedRevenueABNC2 + expectedRevenueFA2) / revenueFinalTotal)) + ((((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) / 2) * ((expectedProfit2 + expectedProfitABNC2 + expectedProfitFA2) / profitSummary))
      prenetGACostDiv02 = predivTwoOverhead + ((((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)) / 2) * ((preexpectedRevenue2 + preexpectedRevenueABNC2 + preexpectedRevenueFA2) / prerevenueFinalTotal)) + ((((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)) / 2) * ((preexpectedProfit2 + preexpectedProfitABNC2 + preexpectedProfitFA2) / preprofitSummary))
      netGACostDiv03 = divThreeOverhead + ((((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) / 2) * ((expectedRevenue3 + expectedRevenueABNC3 + expectedRevenueFA3) / revenueFinalTotal)) + ((((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) / 2) * ((expectedProfit3 + expectedProfitABNC3 + expectedProfitFA3) / profitSummary))
      prenetGACostDiv03 = predivThreeOverhead + ((((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)) / 2) * ((preexpectedRevenue3 + preexpectedRevenueABNC3 + preexpectedRevenueFA3) / prerevenueFinalTotal)) + ((((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)) / 2) * ((preexpectedProfit3 + preexpectedProfitABNC3 + preexpectedProfitFA3) / preprofitSummary))
      netGACostDiv04 = divFourOverhead + ((((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) / 2) * ((expectedRevenue4 + expectedRevenueABNC4 + expectedRevenueFA4) / revenueFinalTotal)) + ((((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) / 2) * ((expectedProfit4 + expectedProfitABNC4 + expectedProfitFA4) / profitSummary))
      prenetGACostDiv04 = predivFourOverhead + ((((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)) / 2) * ((preexpectedRevenue4 + preexpectedRevenueABNC4 + preexpectedRevenueFA4) / prerevenueFinalTotal)) + ((((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)) / 2) * ((preexpectedProfit4 + preexpectedProfitABNC4 + preexpectedProfitFA4) / preprofitSummary))
      netGACostDiv05 = divFiveOverhead + ((((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) / 2) * ((expectedRevenue5 + expectedRevenueABNC5 + expectedRevenueFA5) / revenueFinalTotal)) + ((((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) / 2) * ((expectedProfit5 + expectedProfitABNC5 + expectedProfitFA5) / profitSummary))
      prenetGACostDiv05 = predivFiveOverhead + ((((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)) / 2) * ((preexpectedRevenue5 + preexpectedRevenueABNC5 + preexpectedRevenueFA5) / prerevenueFinalTotal)) + ((((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)) / 2) * ((preexpectedProfit5 + preexpectedProfitABNC5 + preexpectedProfitFA5) / preprofitSummary))
      netGACostDiv06 = divSixOverhead + ((((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) / 2) * ((expectedRevenue6 + expectedRevenueABNC6 + expectedRevenueFA6) / revenueFinalTotal)) + ((((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) / 2) * ((expectedProfit6 + expectedProfitABNC6 + expectedProfitFA6) / profitSummary))
      prenetGACostDiv06 = predivSixOverhead + ((((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)) / 2) * ((preexpectedRevenue6 + preexpectedRevenueABNC6 + preexpectedRevenueFA6) / prerevenueFinalTotal)) + ((((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)) / 2) * ((preexpectedProfit6 + preexpectedProfitABNC6 + preexpectedProfitFA6) / preprofitSummary))
      netGACostDiv07 = divSevenOverhead + ((((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) / 2) * ((expectedRevenue7 + expectedRevenueABNC7 + expectedRevenueFA7) / revenueFinalTotal)) + ((((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) / 2) * ((expectedProfit7 + expectedProfitABNC7 + expectedProfitFA7) / profitSummary))
      prenetGACostDiv07 = predivSevenOverhead + ((((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)) / 2) * ((preexpectedRevenue7 + preexpectedRevenueABNC7 + preexpectedRevenueFA7) / prerevenueFinalTotal)) + ((((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)) / 2) * ((preexpectedProfit7 + preexpectedProfitABNC7 + preexpectedProfitFA7) / preprofitSummary))
      netGACostDiv11 = divElevenOverhead + ((((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) / 2) * ((expectedRevenue11 + expectedRevenueABNC11 + expectedRevenueFA11) / revenueFinalTotal)) + ((((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) / 2) * ((expectedProfit11 + expectedProfitABNC11 + expectedProfitFA11) / profitSummary))
      prenetGACostDiv11 = predivElevenOverhead + ((((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)) / 2) * ((preexpectedRevenue11 + preexpectedRevenueABNC11 + preexpectedRevenueFA11) / prerevenueFinalTotal)) + ((((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)) / 2) * ((preexpectedProfit11 + preexpectedProfitABNC11 + preexpectedProfitFA11) / preprofitSummary))
    
      netGACostDiv01_two = divOneOverhead_two*1.03 + ((((divZeroOverhead_two*1.03 + divRangeOverhead_two*1.03 + divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03) - (divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03)) / 2) * ((expectedRevenue1_two + expectedRevenueABNC1_two + expectedRevenueFA1_two) / revenueFinalTotal_two)) + ((((divZeroOverhead_two*1.03 + divRangeOverhead_two*1.03 + divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03) - (divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03)) / 2) * ((expectedProfit1_two + expectedProfitABNC1_two + expectedProfitFA1_two) / profitSummary_two))
      prenetGACostDiv01_two = predivOneOverhead_two*1.03 + ((((predivZeroOverhead_two*1.03 + predivRangeOverhead_two*1.03 + predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03) - (predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03)) / 2) * ((preexpectedRevenue1_two + preexpectedRevenueABNC1_two + preexpectedRevenueFA1_two) / prerevenueFinalTotal_two)) + ((((predivZeroOverhead_two*1.03 + predivRangeOverhead_two*1.03 + predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03) - (predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03)) / 2)) * ((preexpectedProfit1_two + preexpectedProfitABNC1_two + preexpectedProfitFA1_two) / preprofitSummary_two)
      netGACostDiv02_two = divTwoOverhead_two*1.03 + ((((divZeroOverhead_two*1.03 + divRangeOverhead_two*1.03 + divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03) - (divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03)) / 2) * ((expectedRevenue2_two + expectedRevenueABNC2_two + expectedRevenueFA2_two) / revenueFinalTotal_two)) + ((((divZeroOverhead_two*1.03 + divRangeOverhead_two*1.03 + divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03) - (divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03)) / 2) * ((expectedProfit2_two + expectedProfitABNC2_two + expectedProfitFA2_two) / profitSummary_two))
      prenetGACostDiv02_two = predivTwoOverhead_two*1.03 + ((((predivZeroOverhead_two*1.03 + predivRangeOverhead_two*1.03 + predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03) - (predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03)) / 2) * ((preexpectedRevenue2_two + preexpectedRevenueABNC2_two + preexpectedRevenueFA2_two) / prerevenueFinalTotal_two)) + ((((predivZeroOverhead_two*1.03 + predivRangeOverhead_two*1.03 + predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03) - (predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03)) / 2) * ((preexpectedProfit2_two + preexpectedProfitABNC2_two + preexpectedProfitFA2_two) / preprofitSummary_two))
      netGACostDiv03_two = divThreeOverhead_two*1.03 + ((((divZeroOverhead_two*1.03 + divRangeOverhead_two*1.03 + divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03) - (divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03)) / 2) * ((expectedRevenue3_two + expectedRevenueABNC3_two + expectedRevenueFA3_two) / revenueFinalTotal_two)) + ((((divZeroOverhead_two*1.03 + divRangeOverhead_two*1.03 + divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03) - (divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03)) / 2) * ((expectedProfit3_two + expectedProfitABNC3_two + expectedProfitFA3_two) / profitSummary_two))
      prenetGACostDiv03_two = predivThreeOverhead_two*1.03 + ((((predivZeroOverhead_two*1.03 + predivRangeOverhead_two*1.03 + predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03) - (predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03)) / 2) * ((preexpectedRevenue3_two + preexpectedRevenueABNC3_two + preexpectedRevenueFA3_two) / prerevenueFinalTotal_two)) + ((((predivZeroOverhead_two*1.03 + predivRangeOverhead_two*1.03 + predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03) - (predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03)) / 2) * ((preexpectedProfit3_two + preexpectedProfitABNC3_two + preexpectedProfitFA3_two) / preprofitSummary_two))
      netGACostDiv04_two = divFourOverhead_two*1.03 + ((((divZeroOverhead_two*1.03 + divRangeOverhead_two*1.03 + divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03) - (divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03)) / 2) * ((expectedRevenue4_two + expectedRevenueABNC4_two + expectedRevenueFA4_two) / revenueFinalTotal_two)) + ((((divZeroOverhead_two*1.03 + divRangeOverhead_two*1.03 + divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03) - (divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03)) / 2) * ((expectedProfit4_two + expectedProfitABNC4_two + expectedProfitFA4_two) / profitSummary_two))
      prenetGACostDiv04_two = predivFourOverhead_two*1.03 + ((((predivZeroOverhead_two*1.03 + predivRangeOverhead_two*1.03 + predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03) - (predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03)) / 2) * ((preexpectedRevenue4_two + preexpectedRevenueABNC4_two + preexpectedRevenueFA4_two) / prerevenueFinalTotal_two)) + ((((predivZeroOverhead_two*1.03 + predivRangeOverhead_two*1.03 + predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03) - (predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03)) / 2) * ((preexpectedProfit4_two + preexpectedProfitABNC4_two + preexpectedProfitFA4_two) / preprofitSummary_two))
      netGACostDiv05_two = divFiveOverhead_two*1.03 + ((((divZeroOverhead_two*1.03 + divRangeOverhead_two*1.03 + divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03) - (divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03)) / 2) * ((expectedRevenue5_two + expectedRevenueABNC5_two + expectedRevenueFA5_two) / revenueFinalTotal_two)) + ((((divZeroOverhead_two*1.03 + divRangeOverhead_two*1.03 + divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03+ divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03) - (divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03)) / 2) * ((expectedProfit5_two + expectedProfitABNC5_two + expectedProfitFA5_two) / profitSummary_two))
      prenetGACostDiv05_two = predivFiveOverhead_two*1.03 + ((((predivZeroOverhead_two*1.03 + predivRangeOverhead_two*1.03 + predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03) - (predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03)) / 2) * ((preexpectedRevenue5_two + preexpectedRevenueABNC5_two + preexpectedRevenueFA5_two) / prerevenueFinalTotal_two)) + ((((predivZeroOverhead_two*1.03 + predivRangeOverhead_two*1.03 + predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03) - (predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03)) / 2) * ((preexpectedProfit5_two + preexpectedProfitABNC5_two + preexpectedProfitFA5_two) / preprofitSummary_two))
      netGACostDiv06_two = divSixOverhead_two*1.03 + ((((divZeroOverhead_two*1.03 + divRangeOverhead_two*1.03 + divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03) - (divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03)) / 2) * ((expectedRevenue6_two + expectedRevenueABNC6_two + expectedRevenueFA6_two) / revenueFinalTotal_two)) + ((((divZeroOverhead_two*1.03 + divRangeOverhead_two*1.03 + divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03) - (divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03)) / 2) * ((expectedProfit6_two + expectedProfitABNC6_two + expectedProfitFA6_two) / profitSummary_two))
      prenetGACostDiv06_two = predivSixOverhead_two*1.03 + ((((predivZeroOverhead_two*1.03 + predivRangeOverhead_two*1.03 + predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03) - (predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03)) / 2) * ((preexpectedRevenue6_two + preexpectedRevenueABNC6_two + preexpectedRevenueFA6_two) / prerevenueFinalTotal_two)) + ((((predivZeroOverhead_two*1.03 + predivRangeOverhead_two*1.03 + predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03) - (predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03)) / 2) * ((preexpectedProfit6_two + preexpectedProfitABNC6_two + preexpectedProfitFA6_two) / preprofitSummary_two))
      netGACostDiv07_two = divSevenOverhead_two*1.03 + ((((divZeroOverhead_two*1.03 + divRangeOverhead_two*1.03 + divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03) - (divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03)) / 2) * ((expectedRevenue7_two + expectedRevenueABNC7_two + expectedRevenueFA7_two) / revenueFinalTotal_two)) + ((((divZeroOverhead_two*1.03 + divRangeOverhead_two*1.03 + divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03) - (divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03)) / 2) * ((expectedProfit7_two + expectedProfitABNC7_two + expectedProfitFA7_two) / profitSummary_two))
      prenetGACostDiv07_two = predivSevenOverhead_two*1.03 + ((((predivZeroOverhead_two*1.03 + predivRangeOverhead_two*1.03 + predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03) - (predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03)) / 2) * ((preexpectedRevenue7_two + preexpectedRevenueABNC7_two + preexpectedRevenueFA7_two) / prerevenueFinalTotal_two)) + ((((predivZeroOverhead_two*1.03 + predivRangeOverhead_two*1.03 + predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03) - (predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03)) / 2) * ((preexpectedProfit7_two + preexpectedProfitABNC7_two + preexpectedProfitFA7_two) / preprofitSummary_two))
      netGACostDiv11_two = divElevenOverhead_two*1.03 + ((((divZeroOverhead_two*1.03 + divRangeOverhead_two*1.03 + divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03) - (divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03)) / 2) * ((expectedRevenue11_two + expectedRevenueABNC11_two + expectedRevenueFA11_two) / revenueFinalTotal_two)) + ((((divZeroOverhead_two*1.03 + divRangeOverhead_two*1.03 + divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03) - (divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03)) / 2) * ((expectedProfit11_two + expectedProfitABNC11_two + expectedProfitFA11_two) / profitSummary_two))
      prenetGACostDiv11_two = predivElevenOverhead_two*1.03 + ((((predivZeroOverhead_two*1.03 + predivRangeOverhead_two*1.03 + predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03) - (predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03)) / 2) * ((preexpectedRevenue11_two + preexpectedRevenueABNC11_two + preexpectedRevenueFA11_two) / prerevenueFinalTotal_two)) + ((((predivZeroOverhead_two*1.03 + predivRangeOverhead_two*1.03 + predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03) - (predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03)) / 2) * ((preexpectedProfit11_two + preexpectedProfitABNC11_two + preexpectedProfitFA11_two) / preprofitSummary_two))

      
      IncomeOperDiv01 = (parseFloat(expectedProfit1) + parseFloat(expectedProfitABNC1) + parseFloat(expectedProfitFA1) + parseFloat(ma_profit_1)) - (divOneOverhead + ((((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) / 2) * ((expectedRevenue1 + expectedRevenueABNC1 + expectedRevenueFA1) / revenueFinalTotal)) + ((((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) / 2) * ((expectedProfit1 + expectedProfitABNC1 + expectedProfitFA1) / profitSummary)))
      IncomeOperDiv01_two = (parseFloat(expectedProfit1_two) + parseFloat(expectedProfitABNC1_two) + parseFloat(expectedProfitFA1_two) + parseFloat(ma_profit_1)) - (divOneOverhead_two + ((((divZeroOverhead_two + divRangeOverhead_two + divOneOverhead_two + divTwoOverhead_two + divThreeOverhead_two + divFourOverhead_two + divFiveOverhead_two + divSixOverhead_two + divSevenOverhead_two + divElevenOverhead_two) - (divOneOverhead_two + divTwoOverhead_two + divThreeOverhead_two + divFourOverhead_two + divFiveOverhead_two + divSixOverhead_two + divSevenOverhead_two + divElevenOverhead_two)) / 2) * ((expectedRevenue1_two + expectedRevenueABNC1_two + expectedRevenueFA1_two) / revenueFinalTotal_two)) + ((((divZeroOverhead_two + divRangeOverhead_two + divOneOverhead_two + divTwoOverhead_two + divThreeOverhead_two + divFourOverhead_two + divFiveOverhead_two + divSixOverhead_two + divSevenOverhead_two + divElevenOverhead_two) - (divOneOverhead_two + divTwoOverhead_two + divThreeOverhead_two + divFourOverhead_two + divFiveOverhead_two + divSixOverhead_two + divSevenOverhead_two + divElevenOverhead_two)) / 2) * ((expectedProfit1_two + expectedProfitABNC1_two + expectedProfitFA1_two) / profitSummary_two)))
      preIncomeOperDiv01 = (parseFloat(preexpectedProfit1) + parseFloat(preexpectedProfitABNC1) + parseFloat(preexpectedProfitFA1) + parseFloat(prev_ma_profit_1)) - (predivOneOverhead + ((((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)) / 2) * ((preexpectedRevenue1 + preexpectedRevenueABNC1 + preexpectedRevenueFA1) / prerevenueFinalTotal)) + ((((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)) / 2) * ((preexpectedProfit1 + preexpectedProfitABNC1 + preexpectedProfitFA1) / preprofitSummary)))
      preIncomeOperDiv01_two = (parseFloat(preexpectedProfit1_two) + parseFloat(preexpectedProfitABNC1_two) + parseFloat(preexpectedProfitFA1_two) + parseFloat(prev_ma_profit_1_two)) - (predivOneOverhead_two + ((((predivZeroOverhead_two + predivRangeOverhead_two + predivOneOverhead_two + predivTwoOverhead_two + predivThreeOverhead_two + predivFourOverhead_two + predivFiveOverhead_two + predivSixOverhead_two + predivSevenOverhead_two + predivElevenOverhead_two) - (predivOneOverhead_two + predivTwoOverhead_two + predivThreeOverhead_two + predivFourOverhead_two + predivFiveOverhead_two + predivSixOverhead_two + predivSevenOverhead_two + predivElevenOverhead_two)) / 2) * ((preexpectedRevenue1_two + preexpectedRevenueABNC1_two + preexpectedRevenueFA1_two) / prerevenueFinalTotal_two)) + ((((predivZeroOverhead_two + predivRangeOverhead_two + predivOneOverhead_two + predivTwoOverhead_two + predivThreeOverhead_two + predivFourOverhead_two + predivFiveOverhead_two + predivSixOverhead_two + predivSevenOverhead_two + predivElevenOverhead_two) - (predivOneOverhead_two + predivTwoOverhead_two + predivThreeOverhead_two + predivFourOverhead_two + predivFiveOverhead_two + predivSixOverhead_two + predivSevenOverhead_two + predivElevenOverhead_two)) / 2) * ((preexpectedProfit1_two + preexpectedProfitABNC1_two + preexpectedProfitFA1_two) / preprofitSummary_two)))
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
    
      IncomeOperDiv02 = (parseFloat(expectedProfit2) + parseFloat(expectedProfitABNC2) + parseFloat(expectedProfitFA2) + parseFloat(ma_profit_2)) - (divTwoOverhead + ((((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) / 2) * ((expectedRevenue2 + expectedRevenueABNC2 + expectedRevenueFA2) / revenueFinalTotal)) + ((((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) / 2) * ((expectedProfit2 + expectedProfitABNC2 + expectedProfitFA2) / profitSummary)))
      IncomeOperDiv02_two = (parseFloat(expectedProfit2_two) + parseFloat(expectedProfitABNC2_two) + parseFloat(expectedProfitFA2_two) + parseFloat(ma_profit_2_two)) - (divTwoOverhead_two + ((((divZeroOverhead_two + divRangeOverhead_two + divOneOverhead_two + divTwoOverhead_two + divThreeOverhead_two + divFourOverhead_two + divFiveOverhead_two + divSixOverhead_two + divSevenOverhead_two + divElevenOverhead_two) - (divOneOverhead_two + divTwoOverhead_two + divThreeOverhead_two + divFourOverhead_two + divFiveOverhead_two + divSixOverhead_two + divSevenOverhead_two + divElevenOverhead_two)) / 2) * ((expectedRevenue2_two + expectedRevenueABNC2_two + expectedRevenueFA2_two) / revenueFinalTotal_two)) + ((((divZeroOverhead_two + divRangeOverhead_two + divOneOverhead_two + divTwoOverhead_two + divThreeOverhead_two + divFourOverhead_two + divFiveOverhead_two + divSixOverhead_two + divSevenOverhead_two + divElevenOverhead_two) - (divOneOverhead_two + divTwoOverhead_two + divThreeOverhead_two + divFourOverhead_two + divFiveOverhead_two + divSixOverhead_two + divSevenOverhead_two + divElevenOverhead_two)) / 2) * ((expectedProfit2_two + expectedProfitABNC2_two + expectedProfitFA2_two) / profitSummary_two)))
      preIncomeOperDiv02 = (parseFloat(preexpectedProfit2) + parseFloat(preexpectedProfitABNC2) + parseFloat(preexpectedProfitFA2) + parseFloat(prev_ma_profit_2)) - (predivTwoOverhead + ((((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)) / 2) * ((preexpectedRevenue2 + preexpectedRevenueABNC2 + preexpectedRevenueFA2) / prerevenueFinalTotal)) + ((((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)) / 2) * ((preexpectedProfit2 + preexpectedProfitABNC2 + preexpectedProfitFA2) / preprofitSummary)))
      preIncomeOperDiv02_two = (parseFloat(preexpectedProfit2_two) + parseFloat(preexpectedProfitABNC2_two) + parseFloat(preexpectedProfitFA2_two) + parseFloat(prev_ma_profit_2_two)) - (predivTwoOverhead_two + ((((predivZeroOverhead_two + predivRangeOverhead_two + predivOneOverhead_two + predivTwoOverhead_two + predivThreeOverhead_two + predivFourOverhead_two + predivFiveOverhead_two + predivSixOverhead_two + predivSevenOverhead_two + predivElevenOverhead_two) - (predivOneOverhead_two + predivTwoOverhead_two + predivThreeOverhead_two + predivFourOverhead_two + predivFiveOverhead_two + predivSixOverhead_two + predivSevenOverhead_two + predivElevenOverhead_two)) / 2) * ((preexpectedRevenue2_two + preexpectedRevenueABNC2_two + preexpectedRevenueFA2_two) / prerevenueFinalTotal_two)) + ((((predivZeroOverhead_two + predivRangeOverhead_two + predivOneOverhead_two + predivTwoOverhead_two + predivThreeOverhead_two + predivFourOverhead_two + predivFiveOverhead_two + predivSixOverhead_two + predivSevenOverhead_two + predivElevenOverhead_two) - (predivOneOverhead_two + predivTwoOverhead_two + predivThreeOverhead_two + predivFourOverhead_two + predivFiveOverhead_two + predivSixOverhead_two + predivSevenOverhead_two + predivElevenOverhead_two)) / 2) * ((preexpectedProfit2_two + preexpectedProfitABNC2_two + preexpectedProfitFA2_two) / preprofitSummary_two)))
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
    
      IncomeOperDiv03 = (parseFloat(expectedProfit3) + parseFloat(expectedProfitABNC1) + parseFloat(expectedProfitFA3) + parseFloat(ma_profit_3)) - (divThreeOverhead + ((((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) / 2) * ((expectedRevenue3 + expectedRevenueABNC3 + expectedRevenueFA3) / revenueFinalTotal)) + ((((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) / 2) * ((expectedProfit3 + expectedProfitABNC3 + expectedProfitFA3) / profitSummary)))
      IncomeOperDiv03_two = (parseFloat(expectedProfit3_two) + parseFloat(expectedProfitABNC1_two) + parseFloat(expectedProfitFA3_two) + parseFloat(ma_profit_3)) - (divThreeOverhead_two + ((((divZeroOverhead_two + divRangeOverhead_two + divOneOverhead_two + divTwoOverhead_two + divThreeOverhead_two + divFourOverhead_two + divFiveOverhead_two + divSixOverhead_two + divSevenOverhead_two + divElevenOverhead_two) - (divOneOverhead_two + divTwoOverhead_two + divThreeOverhead_two + divFourOverhead_two + divFiveOverhead_two + divSixOverhead_two + divSevenOverhead_two + divElevenOverhead_two)) / 2) * ((expectedRevenue3_two + expectedRevenueABNC3_two + expectedRevenueFA3_two) / revenueFinalTotal_two)) + ((((divZeroOverhead_two + divRangeOverhead_two + divOneOverhead_two + divTwoOverhead_two + divThreeOverhead_two + divFourOverhead_two + divFiveOverhead_two + divSixOverhead_two + divSevenOverhead_two + divElevenOverhead_two) - (divOneOverhead_two + divTwoOverhead_two + divThreeOverhead_two + divFourOverhead_two + divFiveOverhead_two + divSixOverhead_two + divSevenOverhead_two + divElevenOverhead_two)) / 2) * ((expectedProfit3_two + expectedProfitABNC3_two + expectedProfitFA3_two) / profitSummary_two)))
      preIncomeOperDiv03 = (parseFloat(preexpectedProfit3) + parseFloat(preexpectedProfitABNC1) + parseFloat(preexpectedProfitFA3) + parseFloat(prev_ma_profit_3)) - (predivThreeOverhead + ((((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)) / 2) * ((preexpectedRevenue3 + preexpectedRevenueABNC3 + preexpectedRevenueFA3) / prerevenueFinalTotal)) + ((((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)) / 2) * ((preexpectedProfit3 + preexpectedProfitABNC3 + preexpectedProfitFA3) / preprofitSummary)))
      preIncomeOperDiv03_two = (parseFloat(preexpectedProfit3_two) + parseFloat(preexpectedProfitABNC1_two) + parseFloat(preexpectedProfitFA3_two) + parseFloat(prev_ma_profit_3_two)) - (predivThreeOverhead_two + ((((predivZeroOverhead_two + predivRangeOverhead_two + predivOneOverhead_two + predivTwoOverhead_two + predivThreeOverhead_two + predivFourOverhead_two + predivFiveOverhead_two + predivSixOverhead_two + predivSevenOverhead_two + predivElevenOverhead_two) - (predivOneOverhead_two + predivTwoOverhead_two + predivThreeOverhead_two + predivFourOverhead_two + predivFiveOverhead_two + predivSixOverhead_two + predivSevenOverhead_two + predivElevenOverhead_two)) / 2) * ((preexpectedRevenue3_two + preexpectedRevenueABNC3_two + preexpectedRevenueFA3_two) / prerevenueFinalTotal_two)) + ((((predivZeroOverhead_two + predivRangeOverhead_two + predivOneOverhead_two + predivTwoOverhead_two + predivThreeOverhead_two + predivFourOverhead_two + predivFiveOverhead_two + predivSixOverhead_two + predivSevenOverhead_two + predivElevenOverhead_two) - (predivOneOverhead_two + predivTwoOverhead_two + predivThreeOverhead_two + predivFourOverhead_two + predivFiveOverhead_two + predivSixOverhead_two + predivSevenOverhead_two + predivElevenOverhead_two)) / 2) * ((preexpectedProfit3_two + preexpectedProfitABNC3_two + preexpectedProfitFA3_two) / preprofitSummary_two)))
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
    
      IncomeOperDiv04 = (parseFloat(expectedProfit4) + parseFloat(expectedProfitABNC4) + parseFloat(expectedProfitFA4) + parseFloat(ma_profit_4)) - (divFourOverhead + ((((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) / 2) * ((expectedRevenue4 + expectedRevenueABNC4 + expectedRevenueFA4) / revenueFinalTotal)) + ((((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) / 2) * ((expectedProfit4 + expectedProfitABNC4 + expectedProfitFA4) / profitSummary)))
      IncomeOperDiv04_two = (parseFloat(expectedProfit4_two) + parseFloat(expectedProfitABNC4_two) + parseFloat(expectedProfitFA4_two) + parseFloat(ma_profit_4)) - (divFourOverhead_two + ((((divZeroOverhead_two + divRangeOverhead_two + divOneOverhead_two + divTwoOverhead_two + divThreeOverhead_two + divFourOverhead_two + divFiveOverhead_two + divSixOverhead_two + divSevenOverhead_two + divElevenOverhead_two) - (divOneOverhead_two + divTwoOverhead_two + divThreeOverhead_two + divFourOverhead_two + divFiveOverhead_two + divSixOverhead_two + divSevenOverhead_two + divElevenOverhead_two)) / 2) * ((expectedRevenue4_two + expectedRevenueABNC4_two + expectedRevenueFA4_two) / revenueFinalTotal_two)) + ((((divZeroOverhead_two + divRangeOverhead_two + divOneOverhead_two + divTwoOverhead_two + divThreeOverhead_two + divFourOverhead_two + divFiveOverhead_two + divSixOverhead_two + divSevenOverhead_two + divElevenOverhead_two) - (divOneOverhead_two + divTwoOverhead_two + divThreeOverhead_two + divFourOverhead_two + divFiveOverhead_two + divSixOverhead_two + divSevenOverhead_two + divElevenOverhead_two)) / 2) * ((expectedProfit4_two + expectedProfitABNC4_two + expectedProfitFA4_two) / profitSummary_two)))
      preIncomeOperDiv04 = (parseFloat(preexpectedProfit4) + parseFloat(preexpectedProfitABNC4) + parseFloat(preexpectedProfitFA4) + parseFloat(prev_ma_profit_4)) - (predivFourOverhead + ((((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)) / 2) * ((preexpectedRevenue4 + preexpectedRevenueABNC4 + preexpectedRevenueFA4) / prerevenueFinalTotal)) + ((((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)) / 2) * ((preexpectedProfit4 + preexpectedProfitABNC4 + preexpectedProfitFA4) / preprofitSummary)))
      preIncomeOperDiv04_two = (parseFloat(preexpectedProfit4_two) + parseFloat(preexpectedProfitABNC4_two) + parseFloat(preexpectedProfitFA4_two) + parseFloat(prev_ma_profit_4_two)) - (predivFourOverhead_two + ((((predivZeroOverhead_two + predivRangeOverhead_two + predivOneOverhead_two + predivTwoOverhead_two + predivThreeOverhead_two + predivFourOverhead_two + predivFiveOverhead_two + predivSixOverhead_two + predivSevenOverhead_two + predivElevenOverhead_two) - (predivOneOverhead_two + predivTwoOverhead_two + predivThreeOverhead_two + predivFourOverhead_two + predivFiveOverhead_two + predivSixOverhead_two + predivSevenOverhead_two + predivElevenOverhead_two)) / 2) * ((preexpectedRevenue4_two + preexpectedRevenueABNC4_two + preexpectedRevenueFA4_two) / prerevenueFinalTotal_two)) + ((((predivZeroOverhead_two + predivRangeOverhead_two + predivOneOverhead_two + predivTwoOverhead_two + predivThreeOverhead_two + predivFourOverhead_two + predivFiveOverhead_two + predivSixOverhead_two + predivSevenOverhead_two + predivElevenOverhead_two) - (predivOneOverhead_two + predivTwoOverhead_two + predivThreeOverhead_two + predivFourOverhead_two + predivFiveOverhead_two + predivSixOverhead_two + predivSevenOverhead_two + predivElevenOverhead_two)) / 2) * ((preexpectedProfit4_two + preexpectedProfitABNC4_two + preexpectedProfitFA4_two) / preprofitSummary_two)))
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
      
      IncomeOperDiv05 = (parseFloat(expectedProfit5) + parseFloat(expectedProfitABNC5) + parseFloat(expectedProfitFA5) + parseFloat(ma_profit_5)) - (divFiveOverhead + ((((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) / 2) * ((expectedRevenue5 + expectedRevenueABNC5 + expectedRevenueFA5) / revenueFinalTotal)) + ((((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) / 2) * ((expectedProfit5 + expectedProfitABNC5 + expectedProfitFA5) / profitSummary)))
      IncomeOperDiv05_two = (parseFloat(expectedProfit5_two) + parseFloat(expectedProfitABNC5_two) + parseFloat(expectedProfitFA5_two) + parseFloat(ma_profit_5)) - (divFiveOverhead_two + ((((divZeroOverhead_two + divRangeOverhead_two + divOneOverhead_two + divTwoOverhead_two + divThreeOverhead_two + divFourOverhead_two + divFiveOverhead_two + divSixOverhead_two + divSevenOverhead_two + divElevenOverhead_two) - (divOneOverhead_two + divTwoOverhead_two + divThreeOverhead_two + divFourOverhead_two + divFiveOverhead_two + divSixOverhead_two + divSevenOverhead_two + divElevenOverhead_two)) / 2) * ((expectedRevenue5_two + expectedRevenueABNC5_two + expectedRevenueFA5_two) / revenueFinalTotal_two)) + ((((divZeroOverhead_two + divRangeOverhead_two + divOneOverhead_two + divTwoOverhead_two + divThreeOverhead_two + divFourOverhead_two + divFiveOverhead_two + divSixOverhead_two + divSevenOverhead_two + divElevenOverhead_two) - (divOneOverhead_two + divTwoOverhead_two + divThreeOverhead_two + divFourOverhead_two + divFiveOverhead_two + divSixOverhead_two + divSevenOverhead_two + divElevenOverhead_two)) / 2) * ((expectedProfit5_two + expectedProfitABNC5_two + expectedProfitFA5_two) / profitSummary_two)))
      preIncomeOperDiv05 = (parseFloat(preexpectedProfit5) + parseFloat(preexpectedProfitABNC5) + parseFloat(preexpectedProfitFA5) + parseFloat(prev_ma_profit_5)) - (predivFiveOverhead + ((((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)) / 2) * ((preexpectedRevenue5 + preexpectedRevenueABNC5 + preexpectedRevenueFA5) / prerevenueFinalTotal)) + ((((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)) / 2) * ((preexpectedProfit5 + preexpectedProfitABNC5 + preexpectedProfitFA5) / preprofitSummary)))
      preIncomeOperDiv05_two = (parseFloat(preexpectedProfit5_two) + parseFloat(preexpectedProfitABNC5_two) + parseFloat(preexpectedProfitFA5_two) + parseFloat(prev_ma_profit_5_two)) - (predivFiveOverhead_two + ((((predivZeroOverhead_two + predivRangeOverhead_two + predivOneOverhead_two + predivTwoOverhead_two + predivThreeOverhead_two + predivFourOverhead_two + predivFiveOverhead_two + predivSixOverhead_two + predivSevenOverhead_two + predivElevenOverhead_two) - (predivOneOverhead_two + predivTwoOverhead_two + predivThreeOverhead_two + predivFourOverhead_two + predivFiveOverhead_two + predivSixOverhead_two + predivSevenOverhead_two + predivElevenOverhead_two)) / 2) * ((preexpectedRevenue5_two + preexpectedRevenueABNC5_two + preexpectedRevenueFA5_two) / prerevenueFinalTotal_two)) + ((((predivZeroOverhead_two + predivRangeOverhead_two + predivOneOverhead_two + predivTwoOverhead_two + predivThreeOverhead_two + predivFourOverhead_two + predivFiveOverhead_two + predivSixOverhead_two + predivSevenOverhead_two + predivElevenOverhead_two) - (predivOneOverhead_two + predivTwoOverhead_two + predivThreeOverhead_two + predivFourOverhead_two + predivFiveOverhead_two + predivSixOverhead_two + predivSevenOverhead_two + predivElevenOverhead_two)) / 2) * ((preexpectedProfit5_two + preexpectedProfitABNC5_two + preexpectedProfitFA5_two) / preprofitSummary_two)))
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
    
      IncomeOperDiv06 = (parseFloat(expectedProfit6) + parseFloat(expectedProfitABNC6) + parseFloat(expectedProfitFA6) + parseFloat(ma_profit_6)) - (divSixOverhead + ((((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) / 2) * ((expectedRevenue6 + expectedRevenueABNC6 + expectedRevenueFA6) / revenueFinalTotal)) + ((((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) / 2) * ((expectedProfit6 + expectedProfitABNC6 + expectedProfitFA6) / profitSummary)))
      IncomeOperDiv06_two = (parseFloat(expectedProfit6_two) + parseFloat(expectedProfitABNC6_two) + parseFloat(expectedProfitFA6_two) + parseFloat(ma_profit_6)) - (divSixOverhead_two + ((((divZeroOverhead_two + divRangeOverhead_two + divOneOverhead_two + divTwoOverhead_two + divThreeOverhead_two + divFourOverhead_two + divFiveOverhead_two + divSixOverhead_two + divSevenOverhead_two + divElevenOverhead_two) - (divOneOverhead_two + divTwoOverhead_two + divThreeOverhead_two + divFourOverhead_two + divFiveOverhead_two + divSixOverhead_two + divSevenOverhead_two + divElevenOverhead_two)) / 2) * ((expectedRevenue6_two + expectedRevenueABNC6_two + expectedRevenueFA6_two) / revenueFinalTotal_two)) + ((((divZeroOverhead_two + divRangeOverhead_two + divOneOverhead_two + divTwoOverhead_two + divThreeOverhead_two + divFourOverhead_two + divFiveOverhead_two + divSixOverhead_two + divSevenOverhead_two + divElevenOverhead_two) - (divOneOverhead_two + divTwoOverhead_two + divThreeOverhead_two + divFourOverhead_two + divFiveOverhead_two + divSixOverhead_two + divSevenOverhead_two + divElevenOverhead_two)) / 2) * ((expectedProfit6_two + expectedProfitABNC6_two + expectedProfitFA6_two) / profitSummary_two)))
      preIncomeOperDiv06 = (parseFloat(preexpectedProfit6) + parseFloat(preexpectedProfitABNC6) + parseFloat(preexpectedProfitFA6) + parseFloat(prev_ma_profit_6)) - (predivSixOverhead + ((((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)) / 2) * ((preexpectedRevenue6 + preexpectedRevenueABNC6 + preexpectedRevenueFA6) / prerevenueFinalTotal)) + ((((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)) / 2) * ((preexpectedProfit6 + preexpectedProfitABNC6 + preexpectedProfitFA6) / preprofitSummary)))
      preIncomeOperDiv06_two = (parseFloat(preexpectedProfit6_two) + parseFloat(preexpectedProfitABNC6_two) + parseFloat(preexpectedProfitFA6_two) + parseFloat(prev_ma_profit_6_two)) - (predivSixOverhead_two + ((((predivZeroOverhead_two + predivRangeOverhead_two + predivOneOverhead_two + predivTwoOverhead_two + predivThreeOverhead_two + predivFourOverhead_two + predivFiveOverhead_two + predivSixOverhead_two + predivSevenOverhead_two + predivElevenOverhead_two) - (predivOneOverhead_two + predivTwoOverhead_two + predivThreeOverhead_two + predivFourOverhead_two + predivFiveOverhead_two + predivSixOverhead_two + predivSevenOverhead_two + predivElevenOverhead_two)) / 2) * ((preexpectedRevenue6_two + preexpectedRevenueABNC6_two + preexpectedRevenueFA6_two) / prerevenueFinalTotal_two)) + ((((predivZeroOverhead_two + predivRangeOverhead_two + predivOneOverhead_two + predivTwoOverhead_two + predivThreeOverhead_two + predivFourOverhead_two + predivFiveOverhead_two + predivSixOverhead_two + predivSevenOverhead_two + predivElevenOverhead_two) - (predivOneOverhead_two + predivTwoOverhead_two + predivThreeOverhead_two + predivFourOverhead_two + predivFiveOverhead_two + predivSixOverhead_two + predivSevenOverhead_two + predivElevenOverhead_two)) / 2) * ((preexpectedProfit6_two + preexpectedProfitABNC6_two + preexpectedProfitFA6_two) / preprofitSummary_two)))
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
    
      IncomeOperDiv07 = (parseFloat(expectedProfit7) + parseFloat(expectedProfitABNC7) + parseFloat(expectedProfitFA7) + parseFloat(ma_profit_7)) - (divSevenOverhead + ((((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) / 2) * ((expectedRevenue7 + expectedRevenueABNC7 + expectedRevenueFA7) / revenueFinalTotal)) + ((((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) / 2) * ((expectedProfit7 + expectedProfitABNC7 + expectedProfitFA7) / profitSummary)))
      IncomeOperDiv07_two = (parseFloat(expectedProfit7_two) + parseFloat(expectedProfitABNC7_two) + parseFloat(expectedProfitFA7_two) + parseFloat(ma_profit_7)) - (divSevenOverhead_two + ((((divZeroOverhead_two + divRangeOverhead_two + divOneOverhead_two + divTwoOverhead_two + divThreeOverhead_two + divFourOverhead_two + divFiveOverhead_two + divSixOverhead_two + divSevenOverhead_two + divElevenOverhead_two) - (divOneOverhead_two + divTwoOverhead_two + divThreeOverhead_two + divFourOverhead_two + divFiveOverhead_two + divSixOverhead_two + divSevenOverhead_two + divElevenOverhead_two)) / 2) * ((expectedRevenue7_two + expectedRevenueABNC7_two + expectedRevenueFA7_two) / revenueFinalTotal_two)) + ((((divZeroOverhead_two + divRangeOverhead_two + divOneOverhead_two + divTwoOverhead_two + divThreeOverhead_two + divFourOverhead_two + divFiveOverhead_two + divSixOverhead_two + divSevenOverhead_two + divElevenOverhead_two) - (divOneOverhead_two + divTwoOverhead_two + divThreeOverhead_two + divFourOverhead_two + divFiveOverhead_two + divSixOverhead_two + divSevenOverhead_two + divElevenOverhead_two)) / 2) * ((expectedProfit7_two + expectedProfitABNC7_two + expectedProfitFA7_two) / profitSummary_two)))
      preIncomeOperDiv07 = (parseFloat(preexpectedProfit7) + parseFloat(preexpectedProfitABNC7) + parseFloat(preexpectedProfitFA7) + parseFloat(prev_ma_profit_7)) - (predivSevenOverhead + ((((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)) / 2) * ((preexpectedRevenue7 + preexpectedRevenueABNC7 + preexpectedRevenueFA7) / prerevenueFinalTotal)) + ((((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)) / 2) * ((preexpectedProfit7 + preexpectedProfitABNC7 + preexpectedProfitFA7) / preprofitSummary)))
      preIncomeOperDiv07_two = (parseFloat(preexpectedProfit7_two) + parseFloat(preexpectedProfitABNC7_two) + parseFloat(preexpectedProfitFA7_two) + parseFloat(prev_ma_profit_7_two)) - (predivSevenOverhead_two + ((((predivZeroOverhead_two + predivRangeOverhead_two + predivOneOverhead_two + predivTwoOverhead_two + predivThreeOverhead_two + predivFourOverhead_two + predivFiveOverhead_two + predivSixOverhead_two + predivSevenOverhead_two + predivElevenOverhead_two) - (predivOneOverhead_two + predivTwoOverhead_two + predivThreeOverhead_two + predivFourOverhead_two + predivFiveOverhead_two + predivSixOverhead_two + predivSevenOverhead_two + predivElevenOverhead_two)) / 2) * ((preexpectedRevenue7_two + preexpectedRevenueABNC7_two + preexpectedRevenueFA7_two) / prerevenueFinalTotal_two)) + ((((predivZeroOverhead_two + predivRangeOverhead_two + predivOneOverhead_two + predivTwoOverhead_two + predivThreeOverhead_two + predivFourOverhead_two + predivFiveOverhead_two + predivSixOverhead_two + predivSevenOverhead_two + predivElevenOverhead_two) - (predivOneOverhead_two + predivTwoOverhead_two + predivThreeOverhead_two + predivFourOverhead_two + predivFiveOverhead_two + predivSixOverhead_two + predivSevenOverhead_two + predivElevenOverhead_two)) / 2) * ((preexpectedProfit7_two + preexpectedProfitABNC7_two + preexpectedProfitFA7_two) / preprofitSummary_two)))
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
    
      IncomeOperDiv11 = (parseFloat(expectedProfit11) + parseFloat(expectedProfitABNC11) + parseFloat(expectedProfitFA11) + parseFloat(ma_profit_11)) - (divElevenOverhead + ((((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) / 2) * ((expectedRevenue11 + expectedRevenueABNC11 + expectedRevenueFA11) / revenueFinalTotal)) + ((((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) / 2) * ((expectedProfit11 + expectedProfitABNC11 + expectedProfitFA11) / profitSummary)))
      IncomeOperDiv11_two = (parseFloat(expectedProfit11_two) + parseFloat(expectedProfitABNC11_two) + parseFloat(expectedProfitFA11_two) + parseFloat(ma_profit_11_two)) - (divElevenOverhead_two + ((((divZeroOverhead_two + divRangeOverhead_two + divOneOverhead_two + divTwoOverhead_two + divThreeOverhead_two + divFourOverhead_two + divFiveOverhead_two + divSixOverhead_two + divSevenOverhead_two + divElevenOverhead_two) - (divOneOverhead_two + divTwoOverhead_two + divThreeOverhead_two + divFourOverhead_two + divFiveOverhead_two + divSixOverhead_two + divSevenOverhead_two + divElevenOverhead_two)) / 2) * ((expectedRevenue11_two + expectedRevenueABNC11_two + expectedRevenueFA11_two) / revenueFinalTotal_two)) + ((((divZeroOverhead_two + divRangeOverhead_two + divOneOverhead_two + divTwoOverhead_two + divThreeOverhead_two + divFourOverhead_two + divFiveOverhead_two + divSixOverhead_two + divSevenOverhead_two + divElevenOverhead_two) - (divOneOverhead_two + divTwoOverhead_two + divThreeOverhead_two + divFourOverhead_two + divFiveOverhead_two + divSixOverhead_two + divSevenOverhead_two + divElevenOverhead_two)) / 2) * ((expectedProfit11_two + expectedProfitABNC11_two + expectedProfitFA11_two) / profitSummary_two)))
      preIncomeOperDiv11 = (parseFloat(preexpectedProfit11) + parseFloat(preexpectedProfitABNC11) + parseFloat(preexpectedProfitFA11) + parseFloat(prev_ma_profit_11)) - (predivElevenOverhead + ((((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)) / 2) * ((preexpectedRevenue11 + preexpectedRevenueABNC11 + preexpectedRevenueFA11) / prerevenueFinalTotal)) + ((((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)) / 2) * ((preexpectedProfit11 + preexpectedProfitABNC11 + preexpectedProfitFA11) / preprofitSummary)))
      preIncomeOperDiv11_two = (parseFloat(preexpectedProfit11_two) + parseFloat(preexpectedProfitABNC11_two) + parseFloat(preexpectedProfitFA11_two) + parseFloat(prev_ma_profit_11_two)) - (predivElevenOverhead_two + ((((predivZeroOverhead_two + predivRangeOverhead_two + predivOneOverhead_two + predivTwoOverhead_two + predivThreeOverhead_two + predivFourOverhead_two + predivFiveOverhead_two + predivSixOverhead_two + predivSevenOverhead_two + predivElevenOverhead_two) - (predivOneOverhead_two + predivTwoOverhead_two + predivThreeOverhead_two + predivFourOverhead_two + predivFiveOverhead_two + predivSixOverhead_two + predivSevenOverhead_two + predivElevenOverhead_two)) / 2) * ((preexpectedRevenue11_two + preexpectedRevenueABNC11_two + preexpectedRevenueFA11_two) / prerevenueFinalTotal_two)) + ((((predivZeroOverhead_two + predivRangeOverhead_two + predivOneOverhead_two + predivTwoOverhead_two + predivThreeOverhead_two + predivFourOverhead_two + predivFiveOverhead_two + predivSixOverhead_two + predivSevenOverhead_two + predivElevenOverhead_two) - (predivOneOverhead_two + predivTwoOverhead_two + predivThreeOverhead_two + predivFourOverhead_two + predivFiveOverhead_two + predivSixOverhead_two + predivSevenOverhead_two + predivElevenOverhead_two)) / 2) * ((preexpectedProfit11_two + preexpectedProfitABNC11_two + preexpectedProfitFA11_two) / preprofitSummary_two)))
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
      IncomeOperDiv00_two = (parseFloat(expectedProfit00_two) + parseFloat(expectedProfitABNC00_two) + parseFloat(expectedProfitFA00_two) + parseFloat(ma_profit_00)) - netGACorporateCost_two
      preIncomeOperDiv00 = (parseFloat(preexpectedProfit00) + parseFloat(preexpectedProfitABNC00) + parseFloat(preexpectedProfitFA00) + parseFloat(prev_ma_profit_00)) - prenetGACorporateCost
      preIncomeOperDiv00_two = (parseFloat(preexpectedProfit00_two) + parseFloat(preexpectedProfitABNC00_two) + parseFloat(preexpectedProfitFA00_two) + parseFloat(prev_ma_profit_00_two)) - prenetGACorporateCost_two
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
    

      otherIncomeTotal = divDeferrCompOverhead + Math.round(divProfOneOverhead + divProfTwoOverhead + divProfThreeOverhead + divProfFourOverhead + divProfFiveOverhead + divProfSixOverhead + divProfSevenOverhead + divProfElevenOverhead + divProfZeroOverhead) + Math.round(divInvestCompOverhead);
      preotherIncomeTotal = Math.round(predivDeferrCompOverhead) + Math.round(predivProfOneOverhead + predivProfTwoOverhead + predivProfThreeOverhead + predivProfFourOverhead + predivProfFiveOverhead + predivProfSixOverhead + predivProfSevenOverhead + predivProfElevenOverhead + predivProfZeroOverhead) + Math.round(predivInvestCompOverhead);
      
      totalJobProfitOne = Math.round((parseFloat(expectedProfit1) + parseFloat(expectedProfitABNC1) + parseFloat(expectedProfitFA1)) + parseFloat(ma_profit_1))
      totalJobProfitOne_two = Math.round((parseFloat(expectedProfit1_two) + parseFloat(expectedProfitABNC1_two) + parseFloat(expectedProfitFA1_two)) + parseFloat(ma_profit_1_two))
      pretotalJobProfitOne = Math.round((parseFloat(preexpectedProfit1) + parseFloat(preexpectedProfitABNC1) + parseFloat(preexpectedProfitFA1)) + parseFloat(prev_ma_profit_1))
      pretotalJobProfitOne_two = Math.round((parseFloat(preexpectedProfit1_two) + parseFloat(preexpectedProfitABNC1_two) + parseFloat(preexpectedProfitFA1_two)) + parseFloat(prev_ma_profit_1_two))

      totalJobProfitTwo = Math.round((parseFloat(expectedProfit2) + parseFloat(expectedProfitABNC2) + parseFloat(expectedProfitFA2)) + parseFloat(ma_profit_2))
      totalJobProfitTwo_two = Math.round((parseFloat(expectedProfit2_two) + parseFloat(expectedProfitABNC2_two) + parseFloat(expectedProfitFA2_two)) + parseFloat(ma_profit_2_two))
      pretotalJobProfitTwo = Math.round((parseFloat(preexpectedProfit2) + parseFloat(preexpectedProfitABNC2) + parseFloat(preexpectedProfitFA2)) + parseFloat(prev_ma_profit_2))
      pretotalJobProfitTwo_two = Math.round((parseFloat(preexpectedProfit2_two) + parseFloat(preexpectedProfitABNC2_two) + parseFloat(preexpectedProfitFA2_two)) + parseFloat(prev_ma_profit_2_two))

      totalJobProfitThree = Math.round((parseFloat(expectedProfit3) + parseFloat(expectedProfitABNC3) + parseFloat(expectedProfitFA3)) + parseFloat(ma_profit_3))
      totalJobProfitThree_two = Math.round((parseFloat(expectedProfit3_two) + parseFloat(expectedProfitABNC3_two) + parseFloat(expectedProfitFA3_two)) + parseFloat(ma_profit_3_two))
      pretotalJobProfitThree = Math.round((parseFloat(preexpectedProfit3) + parseFloat(preexpectedProfitABNC3) + parseFloat(preexpectedProfitFA3)) + parseFloat(prev_ma_profit_3))
      pretotalJobProfitThree_two = Math.round((parseFloat(preexpectedProfit3_two) + parseFloat(preexpectedProfitABNC3_two) + parseFloat(preexpectedProfitFA3_two)) + parseFloat(prev_ma_profit_3_two))

      totalJobProfitFour = Math.round((parseFloat(expectedProfit4) + parseFloat(expectedProfitABNC4) + parseFloat(expectedProfitFA4)) + parseFloat(ma_profit_4))
      totalJobProfitFour_two = Math.round((parseFloat(expectedProfit4_two) + parseFloat(expectedProfitABNC4_two) + parseFloat(expectedProfitFA4_two)) + parseFloat(ma_profit_4_two))
      pretotalJobProfitFour = Math.round((parseFloat(preexpectedProfit4) + parseFloat(preexpectedProfitABNC4) + parseFloat(preexpectedProfitFA4)) + parseFloat(prev_ma_profit_4))
      pretotalJobProfitFour_two = Math.round((parseFloat(preexpectedProfit4_two) + parseFloat(preexpectedProfitABNC4_two) + parseFloat(preexpectedProfitFA4_two)) + parseFloat(prev_ma_profit_4_two))

      totalJobProfitFive = Math.round((parseFloat(expectedProfit5) + parseFloat(expectedProfitABNC5) + parseFloat(expectedProfitFA5)) + parseFloat(ma_profit_5))
      totalJobProfitFive_two = Math.round((parseFloat(expectedProfit5_two) + parseFloat(expectedProfitABNC5_two) + parseFloat(expectedProfitFA5_two)) + parseFloat(ma_profit_5_two))
      pretotalJobProfitFive = Math.round((parseFloat(preexpectedProfit5) + parseFloat(preexpectedProfitABNC5) + parseFloat(preexpectedProfitFA5)) + parseFloat(prev_ma_profit_5))
      pretotalJobProfitFive_two = Math.round((parseFloat(preexpectedProfit5_two) + parseFloat(preexpectedProfitABNC5_two) + parseFloat(preexpectedProfitFA5_two)) + parseFloat(prev_ma_profit_5_two))

      totalJobProfitSix = Math.round((parseFloat(expectedProfit6) + parseFloat(expectedProfitABNC6) + parseFloat(expectedProfitFA6)) + parseFloat(ma_profit_6))
      totalJobProfitSix_two = Math.round((parseFloat(expectedProfit6_two) + parseFloat(expectedProfitABNC6_two) + parseFloat(expectedProfitFA6_two)) + parseFloat(ma_profit_6_two))
      pretotalJobProfitSix = Math.round((parseFloat(preexpectedProfit6) + parseFloat(preexpectedProfitABNC6) + parseFloat(preexpectedProfitFA6)) + parseFloat(prev_ma_profit_6))
      pretotalJobProfitSix_two = Math.round((parseFloat(preexpectedProfit6_two) + parseFloat(preexpectedProfitABNC6_two) + parseFloat(preexpectedProfitFA6_two)) + parseFloat(prev_ma_profit_6_two))

      totalJobProfitSeven = Math.round((parseFloat(expectedProfit7) + parseFloat(expectedProfitABNC7) + parseFloat(expectedProfitFA7)) + parseFloat(ma_profit_7))
      totalJobProfitSeven_two = Math.round((parseFloat(expectedProfit7_two) + parseFloat(expectedProfitABNC7_two) + parseFloat(expectedProfitFA7_two)) + parseFloat(ma_profit_7_two))
      pretotalJobProfitSeven = Math.round((parseFloat(preexpectedProfit7) + parseFloat(preexpectedProfitABNC7) + parseFloat(preexpectedProfitFA7)) + parseFloat(prev_ma_profit_7))
      pretotalJobProfitSeven_two = Math.round((parseFloat(preexpectedProfit7_two) + parseFloat(preexpectedProfitABNC7_two) + parseFloat(preexpectedProfitFA7_two)) + parseFloat(prev_ma_profit_7_two))

      totalJobProfitEleven = Math.round((parseFloat(expectedProfit11) + parseFloat(expectedProfitABNC11) + parseFloat(expectedProfitFA11)) + parseFloat(ma_profit_11))
      totalJobProfitEleven_two = Math.round((parseFloat(expectedProfit11_two) + parseFloat(expectedProfitABNC11_two) + parseFloat(expectedProfitFA11_two)) + parseFloat(ma_profit_11_two))
      pretotalJobProfitEleven = Math.round((parseFloat(preexpectedProfit11) + parseFloat(preexpectedProfitABNC11) + parseFloat(preexpectedProfitFA11)) + parseFloat(prev_ma_profit_11))
      pretotalJobProfitEleven_two = Math.round((parseFloat(preexpectedProfit11_two) + parseFloat(preexpectedProfitABNC11_two) + parseFloat(preexpectedProfitFA11_two)) + parseFloat(prev_ma_profit_11_two))

      totalJobProfitZero = Math.round((parseFloat(expectedProfit00) + parseFloat(expectedProfitABNC00) + parseFloat(expectedProfitFA00)) + parseFloat(ma_profit_00))
      totalJobProfitZero_two = Math.round((parseFloat(expectedProfit00_two) + parseFloat(expectedProfitABNC00_two) + parseFloat(expectedProfitFA00_two)) + parseFloat(ma_profit_00_two))
      pretotalJobProfitZero = Math.round((parseFloat(preexpectedProfit00) + parseFloat(preexpectedProfitABNC00) + parseFloat(preexpectedProfitFA00)) + parseFloat(prev_ma_profit_00))
      pretotalJobProfitZero_two = Math.round((parseFloat(preexpectedProfit00_two) + parseFloat(preexpectedProfitABNC00_two) + parseFloat(preexpectedProfitFA00_two)) + parseFloat(prev_ma_profit_00_two))

      totalJobProfitConsolidated = Math.round((parseFloat(expectedProfit1) + parseFloat(expectedProfitABNC1) + parseFloat(expectedProfitFA1) + parseFloat(expectedProfit2) + parseFloat(expectedProfitABNC2) + parseFloat(expectedProfitFA2) + parseFloat(expectedProfit3) + parseFloat(expectedProfitABNC3) + parseFloat(expectedProfitFA3) + parseFloat(expectedProfit4) + parseFloat(expectedProfitABNC4) + parseFloat(expectedProfitFA4) + parseFloat(expectedProfit5) + parseFloat(expectedProfitABNC5) + parseFloat(expectedProfitFA5) + parseFloat(expectedProfit6) + parseFloat(expectedProfitABNC6) + parseFloat(expectedProfitFA6) + parseFloat(expectedProfit7) + parseFloat(expectedProfitABNC7) + parseFloat(expectedProfitFA7) + parseFloat(expectedProfit11) + parseFloat(expectedProfitABNC11) + parseFloat(expectedProfitFA11) + parseFloat(expectedProfit00) + parseFloat(expectedProfitABNC00) + parseFloat(expectedProfitFA00)) + parseFloat(ma_profit_1) + parseFloat(ma_profit_2) + parseFloat(ma_profit_3) + parseFloat(ma_profit_4) + parseFloat(ma_profit_5) + parseFloat(ma_profit_6) + parseFloat(ma_profit_7) + parseFloat(ma_profit_11) + parseFloat(ma_profit_00))
      totalJobProfitConsolidated_two = Math.round((parseFloat(expectedProfit1_two) + parseFloat(expectedProfitABNC1_two) + parseFloat(expectedProfitFA1_two) + parseFloat(expectedProfit2_two) + parseFloat(expectedProfitABNC2_two) + parseFloat(expectedProfitFA2_two) + parseFloat(expectedProfit3_two) + parseFloat(expectedProfitABNC3_two) + parseFloat(expectedProfitFA3_two) + parseFloat(expectedProfit4_two) + parseFloat(expectedProfitABNC4_two) + parseFloat(expectedProfitFA4_two) + parseFloat(expectedProfit5_two) + parseFloat(expectedProfitABNC5_two) + parseFloat(expectedProfitFA5_two) + parseFloat(expectedProfit6_two) + parseFloat(expectedProfitABNC6_two) + parseFloat(expectedProfitFA6_two) + parseFloat(expectedProfit7_two) + parseFloat(expectedProfitABNC7_two) + parseFloat(expectedProfitFA7_two) + parseFloat(expectedProfit11_two) + parseFloat(expectedProfitABNC11_two) + parseFloat(expectedProfitFA11_two) + parseFloat(expectedProfit00_two) + parseFloat(expectedProfitABNC00_two) + parseFloat(expectedProfitFA00_two)) + parseFloat(ma_profit_1) + parseFloat(ma_profit_2) + parseFloat(ma_profit_3) + parseFloat(ma_profit_4) + parseFloat(ma_profit_5) + parseFloat(ma_profit_6) + parseFloat(ma_profit_7) + parseFloat(ma_profit_11) + parseFloat(ma_profit_00))
      pretotalJobProfitConsolidated = Math.round((parseFloat(preexpectedProfit1) + parseFloat(preexpectedProfitABNC1) + parseFloat(preexpectedProfitFA1) + parseFloat(preexpectedProfit2) + parseFloat(preexpectedProfitABNC2) + parseFloat(preexpectedProfitFA2) + parseFloat(preexpectedProfit3) + parseFloat(preexpectedProfitABNC3) + parseFloat(preexpectedProfitFA3) + parseFloat(preexpectedProfit4) + parseFloat(preexpectedProfitABNC4) + parseFloat(preexpectedProfitFA4) + parseFloat(preexpectedProfit5) + parseFloat(preexpectedProfitABNC5) + parseFloat(preexpectedProfitFA5) + parseFloat(preexpectedProfit6) + parseFloat(preexpectedProfitABNC6) + parseFloat(preexpectedProfitFA6) + parseFloat(preexpectedProfit7) + parseFloat(preexpectedProfitABNC7) + parseFloat(preexpectedProfitFA7) + parseFloat(preexpectedProfit11) + parseFloat(preexpectedProfitABNC11) + parseFloat(preexpectedProfitFA11) + parseFloat(preexpectedProfit00) + parseFloat(preexpectedProfitABNC00) + parseFloat(preexpectedProfitFA00)) + parseFloat(prev_ma_profit_1) + parseFloat(prev_ma_profit_2) + parseFloat(prev_ma_profit_3) +  parseFloat(prev_ma_profit_4) + parseFloat(prev_ma_profit_5) + parseFloat(prev_ma_profit_6) + parseFloat(prev_ma_profit_7) + parseFloat(prev_ma_profit_11) + parseFloat(prev_ma_profit_00))
      pretotalJobProfitConsolidated_two = Math.round((parseFloat(preexpectedProfit1_two) + parseFloat(preexpectedProfitABNC1_two) + parseFloat(preexpectedProfitFA1_two) + parseFloat(preexpectedProfit2_two) + parseFloat(preexpectedProfitABNC2_two) + parseFloat(preexpectedProfitFA2_two) + parseFloat(preexpectedProfit3_two) + parseFloat(preexpectedProfitABNC3_two) + parseFloat(preexpectedProfitFA3_two) + parseFloat(preexpectedProfit4_two) + parseFloat(preexpectedProfitABNC4_two) + parseFloat(preexpectedProfitFA4_two) + parseFloat(preexpectedProfit5_two) + parseFloat(preexpectedProfitABNC5_two) + parseFloat(preexpectedProfitFA5_two) + parseFloat(preexpectedProfit6_two) + parseFloat(preexpectedProfitABNC6_two) + parseFloat(preexpectedProfitFA6_two) + parseFloat(preexpectedProfit7_two) + parseFloat(preexpectedProfitABNC7_two) + parseFloat(preexpectedProfitFA7_two) + parseFloat(preexpectedProfit11_two) + parseFloat(preexpectedProfitABNC11_two) + parseFloat(preexpectedProfitFA11_two) + parseFloat(preexpectedProfit00_two) + parseFloat(preexpectedProfitABNC00_two) + parseFloat(preexpectedProfitFA00_two)) + parseFloat(prev_ma_profit_1_two) + parseFloat(prev_ma_profit_2_two) + parseFloat(prev_ma_profit_3_two) +  parseFloat(prev_ma_profit_4_two) + parseFloat(prev_ma_profit_5_two) + parseFloat(prev_ma_profit_6_two) + parseFloat(prev_ma_profit_7_two) + parseFloat(prev_ma_profit_11_two) + parseFloat(prev_ma_profit_00_two))

    }

   renderTableHeader(value) {
      if(value === 'headerSection'){
        return <>
                 <th colSpan={1} style={{ textAlign: 'center', backgroundColor: '#005A8B', borderColor: 'white'}}></th>
                 <th colSpan={4} style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>2020 Consolidated CDCC</th>
                 <th colSpan={4} style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>2021 Consolidated CDCC</th>
               </>
     }else if(value === 'revenue'){
      return <>
            <tr>
                <th style={{ textAlign: 'center'}}>Revenue</th>
                <th style={{ textAlign: 'center'}}>Current Projection</th>
                <th style={{ textAlign: 'center'}}>% of Revenue</th>
                <th style={{ textAlign: 'center'}}>Previous Projection</th>
                <th style={{ textAlign: 'center'}}>Change</th>
                <th style={{ textAlign: 'center'}}>Current Projection</th>
                <th style={{ textAlign: 'center'}}>% of Revenue</th>
                <th style={{ textAlign: 'center'}}>Previous Projection</th>
                <th style={{ textAlign: 'center'}}>Change</th>
            </tr>
            <tr>
            <th style={{ textAlign: 'center'}}>Current Contracts</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round(revenueTotal)) >= 0 ? '$' + Math.round(revenueTotal).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round(revenueTotal).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{(revenueTotal !== 0 ? (Math.round(revenueTotal) / Math.round(Math.round(revenueTotal) + Math.round(revenueABNCTotal) + Math.round(revenueFATotal) + ma_revenue_1 + ma_revenue_2 + ma_revenue_3 + ma_revenue_4 + ma_revenue_5 + ma_revenue_6 + ma_revenue_7 + ma_revenue_11 + ma_revenue_00) * 100).toFixed(2) + '%' : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round(prerevenueTotal)) >= 0 ? '$' + Math.round(prerevenueTotal).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round(prerevenueTotal).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign((Math.round(revenueTotal) - Math.round(prerevenueTotal))) >= 0 ? '$' + (Math.round(revenueTotal) - Math.round(prerevenueTotal)).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + (Math.round(revenueTotal) - Math.round(prerevenueTotal)).toLocaleString(undefined, {maximumFractionDigits:2}) + ')' }</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round(revenueTotal_two)) >= 0 ? '$' + Math.round(revenueTotal_two).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round(revenueTotal_two).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{(revenueTotal_two !== 0 ? (Math.round(revenueTotal_two) / Math.round(Math.round(revenueTotal_two) +  Math.round(revenueABNCTotal_two) + Math.round(revenueFATotal_two) + ma_revenue_1_two + ma_revenue_2_two + ma_revenue_3_two + ma_revenue_4_two + ma_revenue_5_two + ma_revenue_6_two + ma_revenue_7_two + ma_revenue_11_two + ma_revenue_00_two) * 100).toFixed(2) + '%' : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round(prerevenueTotal_two)) >= 0 ? '$' + Math.round(prerevenueTotal_two).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round(prerevenueTotal_two).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign((Math.round(revenueTotal_two) - Math.round(prerevenueTotal_two))) >= 0 ? '$' + (Math.round(revenueTotal_two) - Math.round(prerevenueTotal_two)).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + (Math.round(revenueTotal_two) - Math.round(prerevenueTotal_two)).toLocaleString(undefined, {maximumFractionDigits:2}) +  ')'}</th>
            </tr>
            <tr>
            <th style={{ textAlign: 'center'}}>Awarded But Not Contracted</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(revenueABNCTotal) >= 0 ? '$' + Math.round(revenueABNCTotal).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round(revenueABNCTotal).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{(revenueABNCTotal !== 0 ? (Math.round(revenueABNCTotal) / Math.round(Math.round(revenueTotal) + Math.round(revenueABNCTotal) + Math.round(revenueFATotal) + ma_revenue_1 + ma_revenue_2 + ma_revenue_3 + ma_revenue_4 + ma_revenue_5 + ma_revenue_6 + ma_revenue_7 + ma_revenue_11 + ma_revenue_00) * 100).toFixed(2) + '%' : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(prerevenueABNCTotal) >= 0 ? '$' + Math.round(prerevenueABNCTotal).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round(prerevenueABNCTotal).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign((Math.round(revenueABNCTotal) - Math.round(prerevenueABNCTotal))) >= 0 ? '$' + (Math.round(revenueABNCTotal) - Math.round(prerevenueABNCTotal)).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + (Math.round(revenueABNCTotal) - Math.round(prerevenueABNCTotal)).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round(revenueABNCTotal_two)) >= 0 ? '$' + Math.round(revenueABNCTotal_two).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round(revenueABNCTotal_two).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{(revenueABNCTotal_two !== 0 ? (Math.round(revenueABNCTotal_two) / Math.round(Math.round(revenueTotal_two) +  Math.round(revenueABNCTotal_two) + Math.round(revenueFATotal_two) + ma_revenue_1_two + ma_revenue_2_two + ma_revenue_3_two + ma_revenue_4_two + ma_revenue_5_two + ma_revenue_6_two + ma_revenue_7_two + ma_revenue_11_two + ma_revenue_00_two) * 100).toFixed(2) + '%' : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round(prerevenueABNCTotal_two)) >= 0 ? '$' +  Math.round(prerevenueABNCTotal_two).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' +  Math.round(prerevenueABNCTotal_two).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign((Math.round(revenueABNCTotal_two) - Math.round(prerevenueABNCTotal_two))) >= 0 ? '$' + (Math.round(revenueABNCTotal_two) - Math.round(prerevenueABNCTotal_two)).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + (Math.round(revenueABNCTotal_two) - Math.round(prerevenueABNCTotal_two)).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>  
            </tr>
            <tr>
            <th style={{ textAlign: 'center'}}>Future Awards</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round(revenueFATotal)) >= 0 ? '$' + Math.round(revenueFATotal).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round(revenueFATotal).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{(revenueFATotal !== 0 ? (Math.round(revenueFATotal) / Math.round(Math.round(revenueTotal) + Math.round(revenueABNCTotal) + Math.round(revenueFATotal) + ma_revenue_1 + ma_revenue_2 + ma_revenue_3 + ma_revenue_4 + ma_revenue_5 + ma_revenue_6 + ma_revenue_7 + ma_revenue_11 + ma_revenue_00) * 100).toFixed(2) + '%' : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round(prerevenueFATotal)) >= 0 ? '$' +  Math.round(prerevenueFATotal).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' +  Math.round(prerevenueFATotal).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign((Math.round(revenueFATotal) - Math.round(prerevenueFATotal))) >= 0 ? '$' + (Math.round(revenueFATotal) - Math.round(prerevenueFATotal)).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + (Math.round(revenueFATotal) - Math.round(prerevenueFATotal)).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round(revenueFATotal_two)) >= 0 ? '$' + Math.round(revenueFATotal_two).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round(revenueFATotal_two).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{(revenueFATotal_two !== 0 ? (Math.round(revenueFATotal_two) / Math.round(Math.round(revenueTotal_two) +  Math.round(revenueABNCTotal_two) + Math.round(revenueFATotal_two) + ma_revenue_1_two + ma_revenue_2_two + ma_revenue_3_two + ma_revenue_4_two + ma_revenue_5_two + ma_revenue_6_two + ma_revenue_7_two + ma_revenue_11_two + ma_revenue_00_two) * 100).toFixed(2) + '%' : 0).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round(prerevenueFATotal_two)) >= 0 ? '$' + Math.round(prerevenueFATotal_two).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round(prerevenueFATotal_two).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign((Math.round(revenueFATotal_two) - Math.round(prerevenueFATotal_two))) >= 0 ? '$' + (Math.round(revenueFATotal_two) - Math.round(prerevenueFATotal_two)).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + (Math.round(revenueFATotal_two) - Math.round(prerevenueFATotal_two)).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
            </tr>
            <tr>
            <th style={{ textAlign: 'center'}}>Management Adjustment</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round(ma_revenue_1 + ma_revenue_2 + ma_revenue_3 + ma_revenue_4 + ma_revenue_5 + ma_revenue_6 + ma_revenue_7 + ma_revenue_11 + ma_revenue_00)) >= 0 ? '$' + Math.round(ma_revenue_1 + ma_revenue_2 + ma_revenue_3 + ma_revenue_4 + ma_revenue_5 + ma_revenue_6 + ma_revenue_7 + ma_revenue_11 + ma_revenue_00).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round(ma_revenue_1 + ma_revenue_2 + ma_revenue_3 + ma_revenue_4 + ma_revenue_5 + ma_revenue_6 + ma_revenue_7 + ma_revenue_11 + ma_revenue_00).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}></th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round(prev_ma_revenue_1 + prev_ma_revenue_2 + prev_ma_revenue_3 + prev_ma_revenue_4 + prev_ma_revenue_5 + prev_ma_revenue_6 + prev_ma_revenue_7 + prev_ma_revenue_11 + prev_ma_revenue_00)) >= 0 ? '$' + Math.round(prev_ma_revenue_1 + prev_ma_revenue_2 + prev_ma_revenue_3 + prev_ma_revenue_4 + prev_ma_revenue_5 + prev_ma_revenue_6 + prev_ma_revenue_7 + prev_ma_revenue_11 + prev_ma_revenue_00).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round(prev_ma_revenue_1 + prev_ma_revenue_2 + prev_ma_revenue_3 + prev_ma_revenue_4 + prev_ma_revenue_5 + prev_ma_revenue_6 + prev_ma_revenue_7 + prev_ma_revenue_11 + prev_ma_revenue_00).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign((Math.round(ma_revenue_1 + ma_revenue_2 + ma_revenue_3 + ma_revenue_4 + ma_revenue_5 + ma_revenue_6 + ma_revenue_7 + ma_revenue_11 + ma_revenue_00)) - (Math.round(prev_ma_revenue_1 + prev_ma_revenue_2 + prev_ma_revenue_3 + prev_ma_revenue_4 + prev_ma_revenue_5 + prev_ma_revenue_6 + prev_ma_revenue_7 + prev_ma_revenue_11 + prev_ma_revenue_00))) >= 0 ? '$' + ((Math.round(ma_revenue_1 + ma_revenue_2 + ma_revenue_3 + ma_revenue_4 + ma_revenue_5 + ma_revenue_6 + ma_revenue_7 + ma_revenue_11 + ma_revenue_00)) - (Math.round(prev_ma_revenue_1 + prev_ma_revenue_2 + prev_ma_revenue_3 + prev_ma_revenue_4 + prev_ma_revenue_5 + prev_ma_revenue_6 + prev_ma_revenue_7 + prev_ma_revenue_11 + prev_ma_revenue_00))).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + ((Math.round(ma_revenue_1 + ma_revenue_2 + ma_revenue_3 + ma_revenue_4 + ma_revenue_5 + ma_revenue_6 + ma_revenue_7 + ma_revenue_11 + ma_revenue_00)) - (Math.round(prev_ma_revenue_1 + prev_ma_revenue_2 + prev_ma_revenue_3 + prev_ma_revenue_4 + prev_ma_revenue_5 + prev_ma_revenue_6 + prev_ma_revenue_7 + prev_ma_revenue_11 + prev_ma_revenue_00))).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round(ma_revenue_1_two + ma_revenue_2_two + ma_revenue_3_two + ma_revenue_4_two + ma_revenue_5_two + ma_revenue_6_two + ma_revenue_7_two + ma_revenue_11_two + ma_revenue_00_two)) >= 0 ? '$' + Math.round(ma_revenue_1_two + ma_revenue_2_two + ma_revenue_3_two + ma_revenue_4_two + ma_revenue_5_two + ma_revenue_6_two + ma_revenue_7_two + ma_revenue_11_two + ma_revenue_00_two).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round(ma_revenue_1_two + ma_revenue_2_two + ma_revenue_3_two + ma_revenue_4_two + ma_revenue_5_two + ma_revenue_6_two + ma_revenue_7_two + ma_revenue_11_two + ma_revenue_00_two).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}></th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round(prev_ma_revenue_1_two + prev_ma_revenue_2_two + prev_ma_revenue_3_two + prev_ma_revenue_4_two + prev_ma_revenue_5_two + prev_ma_revenue_6_two + prev_ma_revenue_7_two + prev_ma_revenue_11_two + prev_ma_revenue_00_two)) >= 0 ? '$' + Math.round(prev_ma_revenue_1_two + prev_ma_revenue_2_two + prev_ma_revenue_3_two + prev_ma_revenue_4_two + prev_ma_revenue_5_two + prev_ma_revenue_6_two + prev_ma_revenue_7_two + prev_ma_revenue_11_two + prev_ma_revenue_00_two).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round(prev_ma_revenue_1_two + prev_ma_revenue_2_two + prev_ma_revenue_3_two + prev_ma_revenue_4_two + prev_ma_revenue_5_two + prev_ma_revenue_6_two + prev_ma_revenue_7_two + prev_ma_revenue_11_two + prev_ma_revenue_00_two).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign((Math.round(ma_revenue_1_two + ma_revenue_2_two + ma_revenue_3_two + ma_revenue_4_two + ma_revenue_5_two + ma_revenue_6_two + ma_revenue_7_two + ma_revenue_11_two + ma_revenue_00_two)) - (Math.round(prev_ma_revenue_1_two + prev_ma_revenue_2_two + prev_ma_revenue_3_two + prev_ma_revenue_4_two + prev_ma_revenue_5_two + prev_ma_revenue_6_two + prev_ma_revenue_7_two + prev_ma_revenue_11_two + prev_ma_revenue_00_two))) >= 0 ? '$' + ((Math.round(ma_revenue_1_two + ma_revenue_2_two + ma_revenue_3_two + ma_revenue_4_two + ma_revenue_5_two + ma_revenue_6_two + ma_revenue_7_two + ma_revenue_11_two + ma_revenue_00_two)) - (Math.round(prev_ma_revenue_1_two + prev_ma_revenue_2_two + prev_ma_revenue_3_two + prev_ma_revenue_4_two + prev_ma_revenue_5_two + prev_ma_revenue_6_two + prev_ma_revenue_7_two + prev_ma_revenue_11_two + prev_ma_revenue_00_two))).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + ((Math.round(ma_revenue_1_two + ma_revenue_2_two + ma_revenue_3_two + ma_revenue_4_two + ma_revenue_5_two + ma_revenue_6_two + ma_revenue_7_two + ma_revenue_11_two + ma_revenue_00_two)) - (Math.round(prev_ma_revenue_1_two + prev_ma_revenue_2_two + prev_ma_revenue_3_two + prev_ma_revenue_4_two + prev_ma_revenue_5_two + prev_ma_revenue_6_two + prev_ma_revenue_7_two + prev_ma_revenue_11_two + prev_ma_revenue_00_two))).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
            </tr>
            <tr>
            <th style={{ textAlign: 'center'}}>Total</th>
                <th style={{ textAlign: 'center'}}>{Math.sign(Math.round(Math.round(revenueTotal) + Math.round(revenueABNCTotal) + Math.round(revenueFATotal) + ma_revenue_1 + ma_revenue_2 + ma_revenue_3 + ma_revenue_4 + ma_revenue_5 + ma_revenue_6 + ma_revenue_7 + ma_revenue_11 + ma_revenue_00)) > 0 ? '$' + Math.round(Math.round(revenueTotal) + Math.round(revenueABNCTotal) + Math.round(revenueFATotal) + ma_revenue_1 + ma_revenue_2 + ma_revenue_3 + ma_revenue_4 + ma_revenue_5 + ma_revenue_6 + ma_revenue_7 + ma_revenue_11 + ma_revenue_00).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round(Math.round(revenueTotal) + Math.round(revenueABNCTotal) + Math.round(revenueFATotal) + ma_revenue_1 + ma_revenue_2 + ma_revenue_3 + ma_revenue_4 + ma_revenue_5 + ma_revenue_6 + ma_revenue_7 + ma_revenue_11 + ma_revenue_00).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center'}}>{((Math.round(revenueTotal) / Math.round(Math.round(revenueTotal) + Math.round(revenueABNCTotal) + Math.round(revenueFATotal) + ma_revenue_1 + ma_revenue_2 + ma_revenue_3 + ma_revenue_4 + ma_revenue_5 + ma_revenue_6 + ma_revenue_7 + ma_revenue_11 + ma_revenue_00) * 100) + (Math.round(revenueABNCTotal) / Math.round(Math.round(revenueTotal) + Math.round(revenueABNCTotal) + Math.round(revenueFATotal) + ma_revenue_1 + ma_revenue_2 + ma_revenue_3 + ma_revenue_4 + ma_revenue_5 + ma_revenue_6 + ma_revenue_7 + ma_revenue_11 + ma_revenue_00) * 100) + (Math.round(revenueFATotal) / Math.round(Math.round(revenueTotal) + Math.round(revenueABNCTotal) + Math.round(revenueFATotal) + ma_revenue_1 + ma_revenue_2 + ma_revenue_3 + ma_revenue_4 + ma_revenue_5 + ma_revenue_6 + ma_revenue_7 + ma_revenue_11 + ma_revenue_00) * 100)).toFixed(2) + '%'}</th>
                <th style={{ textAlign: 'center'}}>{Math.sign(Math.round(Math.round(prerevenueTotal) + Math.round(prerevenueABNCTotal) + Math.round(prerevenueFATotal) + prev_ma_revenue_1 + prev_ma_revenue_2 + prev_ma_revenue_3 + prev_ma_revenue_4 + prev_ma_revenue_5 + prev_ma_revenue_6 + prev_ma_revenue_7 + prev_ma_revenue_11 + prev_ma_revenue_00)) >=0  ? '$' + Math.round(Math.round(prerevenueTotal) + Math.round(prerevenueABNCTotal) + Math.round(prerevenueFATotal) + prev_ma_revenue_1 + prev_ma_revenue_2 + prev_ma_revenue_3 + prev_ma_revenue_4 + prev_ma_revenue_5 + prev_ma_revenue_6 + prev_ma_revenue_7 + prev_ma_revenue_11 + prev_ma_revenue_00).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round(Math.round(prerevenueTotal) + Math.round(prerevenueABNCTotal) + Math.round(prerevenueFATotal) + prev_ma_revenue_1 + prev_ma_revenue_2 + prev_ma_revenue_3 + prev_ma_revenue_4 + prev_ma_revenue_5 + prev_ma_revenue_6 + prev_ma_revenue_7 + prev_ma_revenue_11 + prev_ma_revenue_00).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center'}}>{Math.sign((Math.round(Math.round(revenueTotal) + Math.round(revenueABNCTotal) + Math.round(revenueFATotal) + ma_revenue_1 + ma_revenue_2 + ma_revenue_3 + ma_revenue_4 + ma_revenue_5 + ma_revenue_6 + ma_revenue_7 + ma_revenue_11 + ma_revenue_00) - Math.round(Math.round(prerevenueTotal) + Math.round(prerevenueABNCTotal) + Math.round(prerevenueFATotal) + prev_ma_revenue_1 + prev_ma_revenue_2 + prev_ma_revenue_3 + prev_ma_revenue_4 + prev_ma_revenue_5 + prev_ma_revenue_6 + prev_ma_revenue_7 + prev_ma_revenue_11 + prev_ma_revenue_00))) >= 0 ? '$' + (Math.round(Math.round(revenueTotal) + Math.round(revenueABNCTotal) + Math.round(revenueFATotal) + ma_revenue_1 + ma_revenue_2 + ma_revenue_3 + ma_revenue_4 + ma_revenue_5 + ma_revenue_6 + ma_revenue_7 + ma_revenue_11 + ma_revenue_00) - Math.round(Math.round(prerevenueTotal) + Math.round(prerevenueABNCTotal) + Math.round(prerevenueFATotal) + prev_ma_revenue_1 + prev_ma_revenue_2 + prev_ma_revenue_3 + prev_ma_revenue_4 + prev_ma_revenue_5 + prev_ma_revenue_6 + prev_ma_revenue_7 + prev_ma_revenue_11 + prev_ma_revenue_00)).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + (Math.round(Math.round(revenueTotal) + Math.round(revenueABNCTotal) + Math.round(revenueFATotal) + ma_revenue_1 + ma_revenue_2 + ma_revenue_3 + ma_revenue_4 + ma_revenue_5 + ma_revenue_6 + ma_revenue_7 + ma_revenue_11 + ma_revenue_00) - Math.round(Math.round(prerevenueTotal) + Math.round(prerevenueABNCTotal) + Math.round(prerevenueFATotal) + prev_ma_revenue_1 + prev_ma_revenue_2 + prev_ma_revenue_3 + prev_ma_revenue_4 + prev_ma_revenue_5 + prev_ma_revenue_6 + prev_ma_revenue_7 + prev_ma_revenue_11 + prev_ma_revenue_00)).toLocaleString(undefined, {maximumFractionDigits:2}) +')'}</th> 
                <th style={{ textAlign: 'center'}}>{Math.sign(Math.round(Math.round(revenueTotal_two) +  Math.round(revenueABNCTotal_two) + Math.round(revenueFATotal_two) + ma_revenue_1_two + ma_revenue_2_two + ma_revenue_3_two + ma_revenue_4_two + ma_revenue_5_two + ma_revenue_6_two + ma_revenue_7_two + ma_revenue_11_two + ma_revenue_00_two)) >=0 ? '$' + Math.round(Math.round(revenueTotal_two) +  Math.round(revenueABNCTotal_two) + Math.round(revenueFATotal_two) + ma_revenue_1_two + ma_revenue_2_two + ma_revenue_3_two + ma_revenue_4_two + ma_revenue_5_two + ma_revenue_6_two + ma_revenue_7_two + ma_revenue_11_two + ma_revenue_00_two).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round(Math.round(revenueTotal_two) +  Math.round(revenueABNCTotal_two) + Math.round(revenueFATotal_two) + ma_revenue_1_two + ma_revenue_2_two + ma_revenue_3_two + ma_revenue_4_two + ma_revenue_5_two + ma_revenue_6_two + ma_revenue_7_two + ma_revenue_11_two + ma_revenue_00_two).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center'}}>{((Math.round(revenueTotal_two) / Math.round(Math.round(revenueTotal_two) +  Math.round(revenueABNCTotal_two) + Math.round(revenueFATotal_two) + ma_revenue_1_two + ma_revenue_2_two + ma_revenue_3_two + ma_revenue_4_two + ma_revenue_5_two + ma_revenue_6_two + ma_revenue_7_two + ma_revenue_11_two + ma_revenue_00_two) * 100) + (Math.round(revenueABNCTotal_two) / Math.round(Math.round(revenueTotal_two) +  Math.round(revenueABNCTotal_two) + Math.round(revenueFATotal_two) + ma_revenue_1_two + ma_revenue_2_two + ma_revenue_3_two + ma_revenue_4_two + ma_revenue_5_two + ma_revenue_6_two + ma_revenue_7_two + ma_revenue_11_two + ma_revenue_00_two) * 100) + (Math.round(revenueFATotal_two) / Math.round(Math.round(revenueTotal_two) +  Math.round(revenueABNCTotal_two) + Math.round(revenueFATotal_two) + ma_revenue_1_two + ma_revenue_2_two + ma_revenue_3_two + ma_revenue_4_two + ma_revenue_5_two + ma_revenue_6_two + ma_revenue_7_two + ma_revenue_11_two + ma_revenue_00_two) * 100)).toFixed(2) + '%'}</th>
                <th style={{ textAlign: 'center'}}>{Math.sign((Math.round(prerevenueTotal_two) + Math.round(prerevenueABNCTotal_two) + Math.round(prerevenueFATotal_two) + Math.round(prev_ma_revenue_1_two + prev_ma_revenue_2_two + prev_ma_revenue_3_two + prev_ma_revenue_4_two + prev_ma_revenue_5_two + prev_ma_revenue_6_two + prev_ma_revenue_7_two + prev_ma_revenue_11_two + prev_ma_revenue_00_two))) >= 0 ? '$' + (Math.round(prerevenueTotal_two) + Math.round(prerevenueABNCTotal_two) + Math.round(prerevenueFATotal_two) + Math.round(prev_ma_revenue_1_two + prev_ma_revenue_2_two + prev_ma_revenue_3_two + prev_ma_revenue_4_two + prev_ma_revenue_5_two + prev_ma_revenue_6_two + prev_ma_revenue_7_two + prev_ma_revenue_11_two + prev_ma_revenue_00_two)).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + (Math.round(prerevenueTotal_two) + Math.round(prerevenueABNCTotal_two) + Math.round(prerevenueFATotal_two) + Math.round(prev_ma_revenue_1_two + prev_ma_revenue_2_two + prev_ma_revenue_3_two + prev_ma_revenue_4_two + prev_ma_revenue_5_two + prev_ma_revenue_6_two + prev_ma_revenue_7_two + prev_ma_revenue_11_two + prev_ma_revenue_00_two)).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center'}}>{Math.sign((((Math.round(revenueTotal_two) - Math.round(prerevenueTotal_two))) + (Math.round(revenueABNCTotal_two) - Math.round(prerevenueABNCTotal_two)) + (Math.round(revenueFATotal_two) - Math.round(prerevenueFATotal_two)) + (Math.round(ma_revenue_1_two + ma_revenue_2_two + ma_revenue_3_two + ma_revenue_4_two + ma_revenue_5_two + ma_revenue_6_two + ma_revenue_7_two + ma_revenue_11_two + ma_revenue_00_two)) - (Math.round(prev_ma_revenue_1_two + prev_ma_revenue_2_two + prev_ma_revenue_3_two + prev_ma_revenue_4_two + prev_ma_revenue_5_two + prev_ma_revenue_6_two + prev_ma_revenue_7_two + prev_ma_revenue_11_two + prev_ma_revenue_00_two)))) >= 0 ? '$' + (((Math.round(revenueTotal_two) - Math.round(prerevenueTotal_two))) + (Math.round(revenueABNCTotal_two) - Math.round(prerevenueABNCTotal_two)) + (Math.round(revenueFATotal_two) - Math.round(prerevenueFATotal_two)) + (Math.round(ma_revenue_1_two + ma_revenue_2_two + ma_revenue_3_two + ma_revenue_4_two + ma_revenue_5_two + ma_revenue_6_two + ma_revenue_7_two + ma_revenue_11_two + ma_revenue_00_two)) - (Math.round(prev_ma_revenue_1_two + prev_ma_revenue_2_two + prev_ma_revenue_3_two + prev_ma_revenue_4_two + prev_ma_revenue_5_two + prev_ma_revenue_6_two + prev_ma_revenue_7_two + prev_ma_revenue_11_two + prev_ma_revenue_00_two))).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + (((Math.round(revenueTotal_two) - Math.round(prerevenueTotal_two))) + (Math.round(revenueABNCTotal_two) - Math.round(prerevenueABNCTotal_two)) + (Math.round(revenueFATotal_two) - Math.round(prerevenueFATotal_two)) + (Math.round(ma_revenue_1_two + ma_revenue_2_two + ma_revenue_3_two + ma_revenue_4_two + ma_revenue_5_two + ma_revenue_6_two + ma_revenue_7_two + ma_revenue_11_two + ma_revenue_00_two)) - (Math.round(prev_ma_revenue_1_two + prev_ma_revenue_2_two + prev_ma_revenue_3_two + prev_ma_revenue_4_two + prev_ma_revenue_5_two + prev_ma_revenue_6_two + prev_ma_revenue_7_two + prev_ma_revenue_11_two + prev_ma_revenue_00_two))).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th> 
            </tr>
            </>
      } else if(value === 'jobProfit'){
        return <>
            <tr>
                <th style={{ textAlign: 'center'}}>Job Profit</th>
                <th style={{ textAlign: 'center'}}>Current Projection</th>
                <th style={{ textAlign: 'center'}}>% Gross Profit</th>
                <th style={{ textAlign: 'center'}}>Previous Projection</th>
                <th style={{ textAlign: 'center'}}>Change</th>
                <th style={{ textAlign: 'center'}}>Current Projection</th>
                <th style={{ textAlign: 'center'}}>% Gross Profit</th>
                <th style={{ textAlign: 'center'}}>Previous Projection</th>
                <th style={{ textAlign: 'center'}}>Change</th>
            </tr>
            <tr>
            <th style={{ textAlign: 'center'}}>Current Contracts</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round(jobProfitTotal)) >= 0 ? '$' + Math.round(jobProfitTotal).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round(jobProfitTotal).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{((Math.round(jobProfitTotal) / Math.round((jobProfitFinalTotal) + ma_profit_1 + ma_profit_2 + ma_profit_3 + ma_profit_4 + ma_profit_5 + ma_profit_6 + ma_profit_7 + ma_profit_11 + ma_profit_00) * 100).toFixed(2) + '%').toLocaleString(undefined, {maximumFractionDigits:2})}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round(prejobProfitTotal)) >= 0 ? '$' + Math.round(prejobProfitTotal).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round(prejobProfitTotal).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign((Math.round(jobProfitTotal) - Math.round(prejobProfitTotal))) >= 0 ? '$' + (Math.round(jobProfitTotal) - Math.round(prejobProfitTotal)).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + (Math.round(jobProfitTotal) - Math.round(prejobProfitTotal)).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round(jobProfitTotal_two)) >= 0 ? '$' + Math.round(jobProfitTotal_two).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round(jobProfitTotal_two).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{((Math.round(jobProfitTotal_two) / Math.round((jobProfitFinalTotal_two) + ma_profit_1_two + ma_profit_2_two + ma_profit_3_two + ma_profit_4_two + ma_profit_5_two + ma_profit_6_two + ma_profit_7_two + ma_profit_11_two + ma_profit_00_two) * 100).toFixed(2) + '%').toLocaleString(undefined, {maximumFractionDigits:2})}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round(prejobProfitTotal_two)) >= 0 ? '$' + Math.round(prejobProfitTotal_two).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round(prejobProfitTotal_two).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign((Math.round(jobProfitTotal_two) - Math.round(prejobProfitTotal_two))) >= 0 ? '$' + (Math.round(jobProfitTotal_two) - Math.round(prejobProfitTotal_two)).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + (Math.round(jobProfitTotal_two) - Math.round(prejobProfitTotal_two)).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
            </tr>
            <tr>
            <th style={{ textAlign: 'center'}}>Awarded But Not Contracted</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round(jobProfitABNCTotal)) >= 0 ? '$' + Math.round(jobProfitABNCTotal).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round(jobProfitABNCTotal).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{((Math.round(jobProfitABNCTotal) / Math.round((jobProfitFinalTotal) + ma_profit_1 + ma_profit_2 + ma_profit_3 + ma_profit_4 + ma_profit_5 + ma_profit_6 + ma_profit_7 + ma_profit_11 + ma_profit_00) * 100).toFixed(2) + '%').toLocaleString(undefined, {maximumFractionDigits:2})}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round(prejobProfitABNCTotal)) >= 0 ? '$' + Math.round(prejobProfitABNCTotal).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round(prejobProfitABNCTotal).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign((Math.round(jobProfitABNCTotal) - Math.round(prejobProfitABNCTotal))) >= 0 ? '$' + (Math.round(jobProfitABNCTotal) - Math.round(prejobProfitABNCTotal)).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + (Math.round(jobProfitABNCTotal) - Math.round(prejobProfitABNCTotal)).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round(jobProfitABNCTotal_two)) >= 0 ? '$' + Math.round(jobProfitABNCTotal_two).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round(jobProfitABNCTotal_two).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{((Math.round(jobProfitABNCTotal_two) / Math.round((jobProfitFinalTotal_two) + ma_profit_1_two + ma_profit_2_two + ma_profit_3_two + ma_profit_4_two + ma_profit_5_two + ma_profit_6_two + ma_profit_7_two + ma_profit_11_two + ma_profit_00_two) * 100).toFixed(2) + '%').toLocaleString(undefined, {maximumFractionDigits:2})}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round(prejobProfitABNCTotal_two)) >= 0 ? '$' + Math.round(prejobProfitABNCTotal_two).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round(prejobProfitABNCTotal_two).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign((Math.round(jobProfitABNCTotal_two) + Math.round(prejobProfitABNCTotal_two))) >= 0 ? '$' + (Math.round(jobProfitABNCTotal_two) + Math.round(prejobProfitABNCTotal_two)).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + (Math.round(jobProfitABNCTotal_two) + Math.round(prejobProfitABNCTotal_two)).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
            </tr>
            <tr>
            <th style={{ textAlign: 'center'}}>Future Awards</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round(jobProfitFATotal)) >= 0 ? '$' + Math.round(jobProfitFATotal).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round(jobProfitFATotal).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{((Math.round(jobProfitFATotal) / Math.round((jobProfitFinalTotal) + ma_profit_1 + ma_profit_2 + ma_profit_3 + ma_profit_4 + ma_profit_5 + ma_profit_6 + ma_profit_7 + ma_profit_11 + ma_profit_00) * 100).toFixed(2) + '%').toLocaleString(undefined, {maximumFractionDigits:2})}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round(prejobProfitFATotal)) >= 0 ? '$' + Math.round(prejobProfitFATotal).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round(prejobProfitFATotal).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign((Math.round(jobProfitFATotal) - Math.round(prejobProfitFATotal))) >= 0 ? '$' + (Math.round(jobProfitFATotal) - Math.round(prejobProfitFATotal)).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + (Math.round(jobProfitFATotal) - Math.round(prejobProfitFATotal)).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round(jobProfitFATotal_two)) >= 0 ? '$' + Math.round(jobProfitFATotal_two).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round(jobProfitFATotal_two).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{((Math.round(jobProfitFATotal_two) / Math.round((jobProfitFinalTotal_two) + ma_profit_1_two + ma_profit_2_two + ma_profit_3_two + ma_profit_4_two + ma_profit_5_two + ma_profit_6_two + ma_profit_7_two + ma_profit_11_two + ma_profit_00_two) * 100).toFixed(2) + '%').toLocaleString(undefined, {maximumFractionDigits:2})}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round(prejobProfitFATotal_two)) >= 0 ? '$' + Math.round(prejobProfitFATotal_two).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round(prejobProfitFATotal_two).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign((Math.round(jobProfitFATotal_two) - Math.round(prejobProfitFATotal_two))) >= 0 ? '$' + (Math.round(jobProfitFATotal_two) - Math.round(prejobProfitFATotal_two)).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + (Math.round(jobProfitFATotal_two) - Math.round(prejobProfitFATotal_two)).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
            </tr>
            <tr>
            <th style={{ textAlign: 'center'}}>Management Adjustment</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round(ma_profit_1 + ma_profit_2 + ma_profit_3 + ma_profit_4 + ma_profit_5 + ma_profit_6 + ma_profit_7 + ma_profit_11 + ma_profit_00)) >= 0 ? '$' + Math.round(ma_profit_1 + ma_profit_2 + ma_profit_3 + ma_profit_4 + ma_profit_5 + ma_profit_6 + ma_profit_7 + ma_profit_11 + ma_profit_00).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round(ma_profit_1 + ma_profit_2 + ma_profit_3 + ma_profit_4 + ma_profit_5 + ma_profit_6 + ma_profit_7 + ma_profit_11 + ma_profit_00).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}></th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round(prev_ma_profit_1 + prev_ma_profit_2 + prev_ma_profit_3 + prev_ma_profit_4 + prev_ma_profit_5 + prev_ma_profit_6 + prev_ma_profit_7 + prev_ma_profit_11 + prev_ma_profit_00)) >= 0 ? '$' + Math.round(prev_ma_profit_1 + prev_ma_profit_2 + prev_ma_profit_3 + prev_ma_profit_4 + prev_ma_profit_5 + prev_ma_profit_6 + prev_ma_profit_7 + prev_ma_profit_11 + prev_ma_profit_00).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round(prev_ma_profit_1 + prev_ma_profit_2 + prev_ma_profit_3 + prev_ma_profit_4 + prev_ma_profit_5 + prev_ma_profit_6 + prev_ma_profit_7 + prev_ma_profit_11 + prev_ma_profit_00).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round((ma_profit_1 + ma_profit_2 + ma_profit_3 + ma_profit_4 + ma_profit_5 + ma_profit_6 + ma_profit_7 + ma_profit_11 + ma_profit_00) - (prev_ma_profit_1 + prev_ma_profit_2 + prev_ma_profit_3 + prev_ma_profit_4 + prev_ma_profit_5 + prev_ma_profit_6 + prev_ma_profit_7 + prev_ma_profit_11 + prev_ma_profit_00))) >= 0 ? '$' + Math.round((ma_profit_1 + ma_profit_2 + ma_profit_3 + ma_profit_4 + ma_profit_5 + ma_profit_6 + ma_profit_7 + ma_profit_11 + ma_profit_00) - (prev_ma_profit_1 + prev_ma_profit_2 + prev_ma_profit_3 + prev_ma_profit_4 + prev_ma_profit_5 + prev_ma_profit_6 + prev_ma_profit_7 + prev_ma_profit_11 + prev_ma_profit_00)).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round((ma_profit_1 + ma_profit_2 + ma_profit_3 + ma_profit_4 + ma_profit_5 + ma_profit_6 + ma_profit_7 + ma_profit_11 + ma_profit_00) - (prev_ma_profit_1 + prev_ma_profit_2 + prev_ma_profit_3 + prev_ma_profit_4 + prev_ma_profit_5 + prev_ma_profit_6 + prev_ma_profit_7 + prev_ma_profit_11 + prev_ma_profit_00)).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round(ma_profit_1_two + ma_profit_2_two + ma_profit_3_two + ma_profit_4_two + ma_profit_5_two + ma_profit_6_two + ma_profit_7_two + ma_profit_11_two + ma_profit_00_two)) >= 0 ? '$' + Math.round(ma_profit_1_two + ma_profit_2_two + ma_profit_3_two + ma_profit_4_two + ma_profit_5_two + ma_profit_6_two + ma_profit_7_two + ma_profit_11_two + ma_profit_00_two).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round(ma_profit_1_two + ma_profit_2_two + ma_profit_3_two + ma_profit_4_two + ma_profit_5_two + ma_profit_6_two + ma_profit_7_two + ma_profit_11_two + ma_profit_00_two).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}></th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round(prev_ma_profit_1_two + prev_ma_profit_2_two + prev_ma_profit_3_two + prev_ma_profit_4_two + prev_ma_profit_5_two + prev_ma_profit_6_two + prev_ma_profit_7_two + prev_ma_profit_11_two + prev_ma_profit_00_two)) >= 0 ? '$' + Math.round(prev_ma_profit_1_two + prev_ma_profit_2_two + prev_ma_profit_3_two + prev_ma_profit_4_two + prev_ma_profit_5_two + prev_ma_profit_6_two + prev_ma_profit_7_two + prev_ma_profit_11_two + prev_ma_profit_00_two).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round(prev_ma_profit_1_two + prev_ma_profit_2_two + prev_ma_profit_3_two + prev_ma_profit_4_two + prev_ma_profit_5_two + prev_ma_profit_6_two + prev_ma_profit_7_two + prev_ma_profit_11_two + prev_ma_profit_00_two).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign((Math.round(ma_profit_1_two + ma_profit_2_two + ma_profit_3_two + ma_profit_4_two + ma_profit_5_two + ma_profit_6_two + ma_profit_7_two + ma_profit_11_two + ma_profit_00_two) - Math.round(prev_ma_profit_1_two + prev_ma_profit_2_two + prev_ma_profit_3_two + prev_ma_profit_4_two + prev_ma_profit_5_two + prev_ma_profit_6_two + prev_ma_profit_7_two + prev_ma_profit_11_two + prev_ma_profit_00_two))) >= 0 ? '$' + (Math.round(ma_profit_1_two + ma_profit_2_two + ma_profit_3_two + ma_profit_4_two + ma_profit_5_two + ma_profit_6_two + ma_profit_7_two + ma_profit_11_two + ma_profit_00_two) - Math.round(prev_ma_profit_1_two + prev_ma_profit_2_two + prev_ma_profit_3_two + prev_ma_profit_4_two + prev_ma_profit_5_two + prev_ma_profit_6_two + prev_ma_profit_7_two + prev_ma_profit_11_two + prev_ma_profit_00_two)).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + (Math.round(ma_profit_1_two + ma_profit_2_two + ma_profit_3_two + ma_profit_4_two + ma_profit_5_two + ma_profit_6_two + ma_profit_7_two + ma_profit_11_two + ma_profit_00_two) - Math.round(prev_ma_profit_1_two + prev_ma_profit_2_two + prev_ma_profit_3_two + prev_ma_profit_4_two + prev_ma_profit_5_two + prev_ma_profit_6_two + prev_ma_profit_7_two + prev_ma_profit_11_two + prev_ma_profit_00_two)).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
            </tr>
            <tr>
            <th style={{ textAlign: 'center'}}>Total</th>
                <th style={{ textAlign: 'center'}}>{Math.sign(Math.round((jobProfitFinalTotal) + ma_profit_1 + ma_profit_2 + ma_profit_3 + ma_profit_4 + ma_profit_5 + ma_profit_6 + ma_profit_7 + ma_profit_11 + ma_profit_00)) >= 0 ? '$' + Math.round((jobProfitFinalTotal) + ma_profit_1 + ma_profit_2 + ma_profit_3 + ma_profit_4 + ma_profit_5 + ma_profit_6 + ma_profit_7 + ma_profit_11 + ma_profit_00).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round((jobProfitFinalTotal) + ma_profit_1 + ma_profit_2 + ma_profit_3 + ma_profit_4 + ma_profit_5 + ma_profit_6 + ma_profit_7 + ma_profit_11 + ma_profit_00).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center'}}>{((Math.round(jobProfitTotal) / Math.round((jobProfitFinalTotal) + ma_profit_1 + ma_profit_2 + ma_profit_3 + ma_profit_4 + ma_profit_5 + ma_profit_6 + ma_profit_7 + ma_profit_11 + ma_profit_00) * 100) + (Math.round(jobProfitABNCTotal) / Math.round((jobProfitFinalTotal) + ma_profit_1 + ma_profit_2 + ma_profit_3 + ma_profit_4 + ma_profit_5 + ma_profit_6 + ma_profit_7 + ma_profit_11 + ma_profit_00) * 100) + (Math.round(jobProfitFATotal) / Math.round((jobProfitFinalTotal) + ma_profit_1 + ma_profit_2 + ma_profit_3 + ma_profit_4 + ma_profit_5 + ma_profit_6 + ma_profit_7 + ma_profit_11 + ma_profit_00) * 100)).toFixed(2) + '%'}</th> 
                <th style={{ textAlign: 'center'}}>{Math.sign(Math.round((prevJobProfitFinalTotal) + prev_ma_profit_1 + prev_ma_profit_2 + prev_ma_profit_3 + prev_ma_profit_4 + prev_ma_profit_5 + prev_ma_profit_6 + prev_ma_profit_7 + prev_ma_profit_11 + prev_ma_profit_00)) >= 0 ? '$' + Math.round((prevJobProfitFinalTotal) + prev_ma_profit_1 + prev_ma_profit_2 + prev_ma_profit_3 + prev_ma_profit_4 + prev_ma_profit_5 + prev_ma_profit_6 + prev_ma_profit_7 + prev_ma_profit_11 + prev_ma_profit_00).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round((prevJobProfitFinalTotal) + prev_ma_profit_1 + prev_ma_profit_2 + prev_ma_profit_3 + prev_ma_profit_4 + prev_ma_profit_5 + prev_ma_profit_6 + prev_ma_profit_7 + prev_ma_profit_11 + prev_ma_profit_00).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center'}}>{Math.sign(((Math.round((jobProfitFinalTotal) + ma_profit_1 + ma_profit_2 + ma_profit_3 + ma_profit_4 + ma_profit_5 + ma_profit_6 + ma_profit_7 + ma_profit_11 + ma_profit_00)) - (Math.round((prevJobProfitFinalTotal) + prev_ma_profit_1 + prev_ma_profit_2 + prev_ma_profit_3 + prev_ma_profit_4 + prev_ma_profit_5 + prev_ma_profit_6 + prev_ma_profit_7 + prev_ma_profit_11 + prev_ma_profit_00)))) >= 0 ? '$' + ((Math.round((jobProfitFinalTotal) + ma_profit_1 + ma_profit_2 + ma_profit_3 + ma_profit_4 + ma_profit_5 + ma_profit_6 + ma_profit_7 + ma_profit_11 + ma_profit_00)) - (Math.round((prevJobProfitFinalTotal) + prev_ma_profit_1 + prev_ma_profit_2 + prev_ma_profit_3 + prev_ma_profit_4 + prev_ma_profit_5 + prev_ma_profit_6 + prev_ma_profit_7 + prev_ma_profit_11 + prev_ma_profit_00))).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + ((Math.round((jobProfitFinalTotal) + ma_profit_1 + ma_profit_2 + ma_profit_3 + ma_profit_4 + ma_profit_5 + ma_profit_6 + ma_profit_7 + ma_profit_11 + ma_profit_00)) - (Math.round((prevJobProfitFinalTotal) + prev_ma_profit_1 + prev_ma_profit_2 + prev_ma_profit_3 + prev_ma_profit_4 + prev_ma_profit_5 + prev_ma_profit_6 + prev_ma_profit_7 + prev_ma_profit_11 + prev_ma_profit_00))).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center'}}>{Math.sign(Math.round((jobProfitFinalTotal_two) + ma_profit_1_two + ma_profit_2_two + ma_profit_3_two + ma_profit_4_two + ma_profit_5_two + ma_profit_6_two + ma_profit_7_two + ma_profit_11_two + ma_profit_00_two)) >= 0 ? '$' + Math.round((jobProfitFinalTotal_two) + ma_profit_1_two + ma_profit_2_two + ma_profit_3_two + ma_profit_4_two + ma_profit_5_two + ma_profit_6_two + ma_profit_7_two + ma_profit_11_two + ma_profit_00_two).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round((jobProfitFinalTotal_two) + ma_profit_1_two + ma_profit_2_two + ma_profit_3_two + ma_profit_4_two + ma_profit_5_two + ma_profit_6_two + ma_profit_7_two + ma_profit_11_two + ma_profit_00_two).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center'}}>{((Math.round(jobProfitTotal_two) / Math.round((jobProfitFinalTotal_two) + ma_profit_1_two + ma_profit_2_two + ma_profit_3_two + ma_profit_4_two + ma_profit_5_two + ma_profit_6_two + ma_profit_7_two + ma_profit_11_two + ma_profit_00_two) * 100) + (Math.round(jobProfitABNCTotal_two) / Math.round((jobProfitFinalTotal_two) + ma_profit_1_two + ma_profit_2_two + ma_profit_3_two + ma_profit_4_two + ma_profit_5_two + ma_profit_6_two + ma_profit_7_two + ma_profit_11_two + ma_profit_00_two) * 100) + (Math.round(jobProfitFATotal_two) / Math.round((jobProfitFinalTotal_two) + ma_profit_1_two + ma_profit_2_two + ma_profit_3_two + ma_profit_4_two + ma_profit_5_two + ma_profit_6_two + ma_profit_7_two + ma_profit_11_two + ma_profit_00_two) * 100)).toFixed(2) + '%'}</th>
                <th style={{ textAlign: 'center'}}>{Math.sign(Math.round((prevJobProfitFinalTotal_two) + prev_ma_profit_1_two + prev_ma_profit_2_two + prev_ma_profit_3_two + prev_ma_profit_4_two + prev_ma_profit_5_two + prev_ma_profit_6_two + prev_ma_profit_7_two + prev_ma_profit_11_two + prev_ma_profit_00_two)) >= 0 ? '$' + Math.round((prevJobProfitFinalTotal_two) + prev_ma_profit_1_two + prev_ma_profit_2_two + prev_ma_profit_3_two + prev_ma_profit_4_two + prev_ma_profit_5_two + prev_ma_profit_6_two + prev_ma_profit_7_two + prev_ma_profit_11_two + prev_ma_profit_00_two).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round((prevJobProfitFinalTotal_two) + prev_ma_profit_1_two + prev_ma_profit_2_two + prev_ma_profit_3_two + prev_ma_profit_4_two + prev_ma_profit_5_two + prev_ma_profit_6_two + prev_ma_profit_7_two + prev_ma_profit_11_two + prev_ma_profit_00_two).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center'}}>{Math.sign(((Math.round(jobProfitTotal_two) - Math.round(prejobProfitTotal_two)) + (Math.round(jobProfitABNCTotal_two) + Math.round(prejobProfitABNCTotal_two)) + (Math.round(jobProfitFATotal_two) - Math.round(prejobProfitFATotal_two)) + (Math.round(ma_profit_1_two + ma_profit_2_two + ma_profit_3_two + ma_profit_4_two + ma_profit_5_two + ma_profit_6_two + ma_profit_7_two + ma_profit_11_two + ma_profit_00_two) - Math.round(prev_ma_profit_1_two + prev_ma_profit_2_two + prev_ma_profit_3_two + prev_ma_profit_4_two + prev_ma_profit_5_two + prev_ma_profit_6_two + prev_ma_profit_7_two + prev_ma_profit_11_two + prev_ma_profit_00_two)))) >= 0 ? '$' + ((Math.round(jobProfitTotal_two) - Math.round(prejobProfitTotal_two)) + (Math.round(jobProfitABNCTotal_two) + Math.round(prejobProfitABNCTotal_two)) + (Math.round(jobProfitFATotal_two) - Math.round(prejobProfitFATotal_two)) + (Math.round(ma_profit_1_two + ma_profit_2_two + ma_profit_3_two + ma_profit_4_two + ma_profit_5_two + ma_profit_6_two + ma_profit_7_two + ma_profit_11_two + ma_profit_00_two) - Math.round(prev_ma_profit_1_two + prev_ma_profit_2_two + prev_ma_profit_3_two + prev_ma_profit_4_two + prev_ma_profit_5_two + prev_ma_profit_6_two + prev_ma_profit_7_two + prev_ma_profit_11_two + prev_ma_profit_00_two))).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + ((Math.round(jobProfitTotal_two) - Math.round(prejobProfitTotal_two)) + (Math.round(jobProfitABNCTotal_two) + Math.round(prejobProfitABNCTotal_two)) + (Math.round(jobProfitFATotal_two) - Math.round(prejobProfitFATotal_two)) + (Math.round(ma_profit_1_two + ma_profit_2_two + ma_profit_3_two + ma_profit_4_two + ma_profit_5_two + ma_profit_6_two + ma_profit_7_two + ma_profit_11_two + ma_profit_00_two) - Math.round(prev_ma_profit_1_two + prev_ma_profit_2_two + prev_ma_profit_3_two + prev_ma_profit_4_two + prev_ma_profit_5_two + prev_ma_profit_6_two + prev_ma_profit_7_two + prev_ma_profit_11_two + prev_ma_profit_00_two))).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
            </tr>
        </>
    } else if(value === 'PercentRev'){
      return <>
            <tr>
                <th style={{ textAlign: 'center'}}>% Rev</th>
                <th style={{ textAlign: 'center'}}>Current Projection</th>
                <th style={{ textAlign: 'center'}}></th>
                <th style={{ textAlign: 'center'}}>Previous Projection</th>
                <th style={{ textAlign: 'center'}}>Change</th>
                <th style={{ textAlign: 'center'}}>Current Projection</th>
                <th style={{ textAlign: 'center'}}></th>
                <th style={{ textAlign: 'center'}}>Previous Projection</th>
                <th style={{ textAlign: 'center'}}>Change</th>
            </tr>
            <tr>
            <th style={{ textAlign: 'center'}}>Current Contracts</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{parseFloat((revenueTotal !== 0 ? parseFloat(jobProfitTotal)/revenueTotal : 0) * 100).toFixed(1) + '%'}</th>
                <th style={{ textAlign: 'center'}}></th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{parseFloat((prerevenueTotal !== 0 ? parseFloat(prejobProfitTotal)/prerevenueTotal : 0) * 100).toFixed(1) + '%'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{((parseFloat(jobProfitTotal - prejobProfitTotal)) / parseFloat(revenueTotal - prerevenueTotal)* 100).toFixed(1) + '%'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{parseFloat((revenueTotal_two !== 0 ? parseFloat(jobProfitTotal_two)/revenueTotal_two : 0) * 100).toFixed(1) + '%'}</th>
                <th style={{ textAlign: 'center'}}></th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{parseFloat((prerevenueTotal_two !== 0 ? parseFloat(prejobProfitTotal_two)/prerevenueTotal_two : 0) * 100).toFixed(1) + '%'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{((parseFloat(jobProfitTotal_two - prejobProfitTotal_two)) / parseFloat(revenueTotal_two - prerevenueTotal_two)* 100).toFixed(1) + '%'}</th>  
            </tr>
            <tr>
            <th style={{ textAlign: 'center'}}>Awarded But Not Contracted</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{((revenueABNCTotal !== 0 ? jobProfitABNCTotal/revenueABNCTotal : 0) * 100).toFixed(1) + '%'}</th>
                <th style={{ textAlign: 'center'}}></th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{((prerevenueABNCTotal !== 0 ? prejobProfitABNCTotal/prerevenueABNCTotal : 0) * 100).toFixed(1) + '%'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{((Math.round(revenueABNCTotal - prerevenueABNCTotal)) ? ((Math.round(jobProfitABNCTotal - prejobProfitABNCTotal)) / (Math.round(revenueABNCTotal - prerevenueABNCTotal)) * 100) : 0).toFixed(1) + '%'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{((revenueABNCTotal_two !== 0 ? jobProfitABNCTotal_two/revenueABNCTotal_two : 0) * 100).toFixed(1) + '%'}</th>
                <th style={{ textAlign: 'center'}}></th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{((prerevenueABNCTotal_two !== 0 ? prejobProfitABNCTotal_two/prerevenueABNCTotal_two : 0) * 100).toFixed(1) + '%'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{((Math.round(revenueABNCTotal_two - prerevenueABNCTotal_two)) ? ((Math.round(jobProfitABNCTotal_two - prejobProfitABNCTotal_two)) / (Math.round(revenueABNCTotal_two - prerevenueABNCTotal_two)) * 100) : 0).toFixed(1) + '%'}</th> 
            </tr>
            <tr>
            <th style={{ textAlign: 'center'}}>Future Awards</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{((revenueFATotal !== 0 ? jobProfitFATotal/ revenueFATotal : 0) * 100).toFixed(1) + '%'}</th>
                <th style={{ textAlign: 'center'}}></th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{((prerevenueFATotal !== 0 ? prejobProfitFATotal/ prerevenueFATotal : 0) * 100).toFixed(1) + '%'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{((Math.round(revenueFATotal - prerevenueFATotal)) ? ((Math.round(jobProfitFATotal - prejobProfitFATotal)) / (Math.round(revenueFATotal - prerevenueFATotal)) * 100) : 0).toFixed(1) + '%'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{((revenueFATotal_two !== 0 ? jobProfitFATotal_two/ revenueFATotal_two : 0) * 100).toFixed(1) + '%'}</th>
                <th style={{ textAlign: 'center'}}></th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{((prerevenueFATotal_two !== 0 ? prejobProfitFATotal_two/ prerevenueFATotal_two : 0) * 100).toFixed(1) + '%'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{((Math.round(revenueFATotal_two - prerevenueFATotal_two)) ? ((Math.round(jobProfitFATotal_two - prejobProfitFATotal_two)) / (Math.round(revenueFATotal_two - prerevenueFATotal_two)) * 100) : 0).toFixed(1) + '%'}</th> 
            </tr>
            <tr>
            <th style={{ textAlign: 'center'}}>Management Adjustment</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{(Math.round(ma_profit_1 + ma_profit_2 + ma_profit_3 + ma_profit_4 + ma_profit_5 + ma_profit_6 + ma_profit_7 + ma_profit_11 + ma_profit_00) !== 0 ? (Math.round(ma_profit_1 + ma_profit_2 + ma_profit_3 + ma_profit_4 + ma_profit_5 + ma_profit_6 + ma_profit_7 + ma_profit_11 + ma_profit_00) / Math.round(ma_revenue_1 + ma_revenue_2 + ma_revenue_3 + ma_revenue_4 + ma_revenue_5 + ma_revenue_6 + ma_revenue_7 + ma_revenue_11 + ma_revenue_00)).toLocaleString(undefined, {maximumFractionDigits:2}) + '%' : 0 + '%')}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}></th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{(Math.round(prev_ma_profit_1 + prev_ma_profit_2 + prev_ma_profit_3 + prev_ma_profit_4 + prev_ma_profit_5 + prev_ma_profit_6 + prev_ma_profit_7 + prev_ma_profit_11 + prev_ma_profit_00) !== 0 ? (Math.round(prev_ma_profit_1 + prev_ma_profit_2 + prev_ma_profit_3 + prev_ma_profit_4 + prev_ma_profit_5 + prev_ma_profit_6 + prev_ma_profit_7 + prev_ma_profit_11 + prev_ma_profit_00)).toLocaleString(undefined, {maximumFractionDigits:2}) + '%' : 0 + '%')}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{(Math.round(ma_profit_1 + ma_profit_2 + ma_profit_3 + ma_profit_4 + ma_profit_5 + ma_profit_6 + ma_profit_7 + ma_profit_11 + ma_profit_00) - (prev_ma_profit_1 + prev_ma_profit_2 + prev_ma_profit_3 + prev_ma_profit_4 + prev_ma_profit_5 + prev_ma_profit_6 + prev_ma_profit_7 + prev_ma_profit_11 + prev_ma_profit_00)) !== 0 ? (Math.round((ma_profit_1 + ma_profit_2 + ma_profit_3 + ma_profit_4 + ma_profit_5 + ma_profit_6 + ma_profit_7 + ma_profit_11 + ma_profit_00) - (prev_ma_profit_1 + prev_ma_profit_2 + prev_ma_profit_3 + prev_ma_profit_4 + prev_ma_profit_5 + prev_ma_profit_6 + prev_ma_profit_7 + prev_ma_profit_11 + prev_ma_profit_00)) / (Math.round(ma_revenue_1 + ma_revenue_2 + ma_revenue_3 + ma_revenue_4 + ma_revenue_5 + ma_revenue_6 + ma_revenue_7 + ma_revenue_11 + ma_revenue_00)) - (Math.round(prev_ma_revenue_1 + prev_ma_revenue_2 + prev_ma_revenue_3 + prev_ma_revenue_4 + prev_ma_revenue_5 + prev_ma_revenue_6 + prev_ma_revenue_7 + prev_ma_revenue_11 + prev_ma_revenue_00))).toLocaleString(undefined, {maximumFractionDigits:2}) + '%' : 0 + '%'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.round(ma_profit_1_two + ma_profit_2_two + ma_profit_3_two + ma_profit_4_two + ma_profit_5_two + ma_profit_6_two + ma_profit_7_two + ma_profit_11_two + ma_profit_00_two) !== 0 ? (Math.round(ma_profit_1_two + ma_profit_2_two + ma_profit_3_two + ma_profit_4_two + ma_profit_5_two + ma_profit_6_two + ma_profit_7_two + ma_profit_11_two + ma_profit_00_two) / Math.round(ma_revenue_1_two + ma_revenue_2_two + ma_revenue_3_two + ma_revenue_4_two + ma_revenue_5_two + ma_revenue_6_two + ma_revenue_7_two + ma_revenue_11_two + ma_revenue_00_two)).toLocaleString(undefined, {maximumFractionDigits:2}) + '%' : 0 + '%'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}></th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.round(prev_ma_profit_1_two + prev_ma_profit_2_two + prev_ma_profit_3_two + prev_ma_profit_4_two + prev_ma_profit_5_two + prev_ma_profit_6_two + prev_ma_profit_7_two + prev_ma_profit_11_two + prev_ma_profit_00_two) !== 0 ? (Math.round(prev_ma_profit_1_two + prev_ma_profit_2_two + prev_ma_profit_3_two + prev_ma_profit_4_two + prev_ma_profit_5_two + prev_ma_profit_6_two + prev_ma_profit_7_two + prev_ma_profit_11_two + prev_ma_profit_00_two) / Math.round(prev_ma_revenue_1_two + prev_ma_revenue_2_two + prev_ma_revenue_3_two + prev_ma_revenue_4_two + prev_ma_revenue_5_two + prev_ma_revenue_6_two + prev_ma_revenue_7_two + prev_ma_revenue_11_two + prev_ma_revenue_00_two)).toLocaleString(undefined, {maximumFractionDigits:2}) + '%' : 0 + '%'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{(Math.round(ma_profit_1_two + ma_profit_2_two + ma_profit_3_two + ma_profit_4_two + ma_profit_5_two + ma_profit_6_two + ma_profit_7_two + ma_profit_11_two + ma_profit_00_two) - Math.round(prev_ma_profit_1_two + prev_ma_profit_2_two + prev_ma_profit_3_two + prev_ma_profit_4_two + prev_ma_profit_5_two + prev_ma_profit_6_two + prev_ma_profit_7_two + prev_ma_profit_11_two + prev_ma_profit_00_two)) !== 0 ? ((Math.round(ma_profit_1_two + ma_profit_2_two + ma_profit_3_two + ma_profit_4_two + ma_profit_5_two + ma_profit_6_two + ma_profit_7_two + ma_profit_11_two + ma_profit_00_two) - Math.round(prev_ma_profit_1_two + prev_ma_profit_2_two + prev_ma_profit_3_two + prev_ma_profit_4_two + prev_ma_profit_5_two + prev_ma_profit_6_two + prev_ma_profit_7_two + prev_ma_profit_11_two + prev_ma_profit_00_two)) / (Math.round(ma_revenue_1_two + ma_revenue_2_two + ma_revenue_3_two + ma_revenue_4_two + ma_revenue_5_two + ma_revenue_6_two + ma_revenue_7_two + ma_revenue_11_two + ma_revenue_00_two)) - (Math.round(prev_ma_revenue_1_two + prev_ma_revenue_2_two + prev_ma_revenue_3_two + prev_ma_revenue_4_two + prev_ma_revenue_5_two + prev_ma_revenue_6_two + prev_ma_revenue_7_two + prev_ma_revenue_11_two + prev_ma_revenue_00_two))).toLocaleString(undefined, {maximumFractionDigits:2}) + '%' : 0 + '%'}</th>
            </tr>
            <tr>
            <th style={{ textAlign: 'center'}}>Total</th>
                <th style={{ textAlign: 'center'}}>{(((revenueTotal + revenueABNCTotal + revenueFATotal) !== 0 ? (jobProfitTotal + jobProfitABNCTotal + jobProfitFATotal)/ (revenueTotal + revenueABNCTotal + revenueFATotal) : 0) * 100).toFixed(1) + '%'}</th>
                <th style={{ textAlign: 'center'}}></th>
                <th style={{ textAlign: 'center'}}>{(((prerevenueTotal + prerevenueABNCTotal + prerevenueFATotal) !== 0 ? (prejobProfitTotal + prejobProfitABNCTotal + prejobProfitFATotal)/ (prerevenueTotal + prerevenueABNCTotal + prerevenueFATotal) : 0) * 100).toFixed(1) + '%'}</th> 
                <th style={{ textAlign: 'center'}}>{((((Math.round((jobProfitFinalTotal) + ma_profit_1 + ma_profit_2 + ma_profit_3 + ma_profit_4 + ma_profit_5 + ma_profit_6 + ma_profit_7 + ma_profit_11 + ma_profit_00)) - (Math.round((prevJobProfitFinalTotal) + prev_ma_profit_1 + prev_ma_profit_2 + prev_ma_profit_3 + prev_ma_profit_4 + prev_ma_profit_5 + prev_ma_profit_6 + prev_ma_profit_7 + prev_ma_profit_11 + prev_ma_profit_00)))) / ((Math.round(revenueFinalTotal + ma_revenue_1 + ma_revenue_2 + ma_revenue_3 + ma_revenue_4 + ma_revenue_5 + ma_revenue_6 + ma_revenue_7 + ma_revenue_11 + ma_revenue_00) - Math.round(prerevenueFinalTotal + prev_ma_revenue_1 + prev_ma_revenue_2 + prev_ma_revenue_3 + prev_ma_revenue_4 + prev_ma_revenue_5 + prev_ma_revenue_6 + prev_ma_revenue_7 + prev_ma_revenue_11 + prev_ma_revenue_00))) * 100).toFixed(1) + '%'}</th>
                <th style={{ textAlign: 'center'}}>{(((revenueTotal_two + revenueABNCTotal_two + revenueFATotal_two) !== 0 ? (jobProfitTotal_two + jobProfitABNCTotal_two + jobProfitFATotal_two)/ (revenueTotal_two + revenueABNCTotal_two + revenueFATotal_two) : 0) * 100).toFixed(1) + '%'}</th>
                <th style={{ textAlign: 'center'}}></th>
                <th style={{ textAlign: 'center'}}>{(((prerevenueTotal_two + prerevenueABNCTotal_two + prerevenueFATotal_two) !== 0 ? (prejobProfitTotal_two + prejobProfitABNCTotal_two + prejobProfitFATotal_two)/ (prerevenueTotal_two + prerevenueABNCTotal_two + prerevenueFATotal_two) : 0) * 100).toFixed(1) + '%'}</th> 
                <th style={{ textAlign: 'center'}}>{((((Math.round((jobProfitFinalTotal_two) + ma_profit_1_two + ma_profit_2_two + ma_profit_3_two + ma_profit_4_two + ma_profit_5_two + ma_profit_6_two + ma_profit_7_two + ma_profit_11_two + ma_profit_00_two)) - (Math.round((prevJobProfitFinalTotal_two) + prev_ma_profit_1_two + prev_ma_profit_2_two + prev_ma_profit_3_two + prev_ma_profit_4_two + prev_ma_profit_5_two + prev_ma_profit_6_two + prev_ma_profit_7_two + prev_ma_profit_11_two + prev_ma_profit_00_two)))) / ((Math.round(revenueFinalTotal_two + ma_revenue_1_two + ma_revenue_2_two + ma_revenue_3_two + ma_revenue_4_two + ma_revenue_5_two + ma_revenue_6_two + ma_revenue_7_two + ma_revenue_11_two + ma_revenue_00_two) - Math.round(prerevenueFinalTotal_two + prev_ma_revenue_1_two + prev_ma_revenue_2_two + prev_ma_revenue_3_two + prev_ma_revenue_4_two + prev_ma_revenue_5_two + prev_ma_revenue_6_two + prev_ma_revenue_7_two + prev_ma_revenue_11_two + prev_ma_revenue_00_two))) * 100).toFixed(1) + '%'}</th>  
            </tr>
    </>
    }  else if(value === 'minorityInterest'){
      return <>
               <tr>
               <th></th>
               <th style={{ textAlign: 'center'}}>Current Projection</th>
               <th style={{ textAlign: 'center'}}></th>
                <th style={{ textAlign: 'center'}}>Previous Projection</th>
                <th style={{ textAlign: 'center'}}>Change</th>
                <th style={{ textAlign: 'center'}}>Current Projection</th>
                <th style={{ textAlign: 'center'}}></th>
                <th style={{ textAlign: 'center'}}>Previous Projection</th>
                <th style={{ textAlign: 'center'}}>Change</th>
               </tr>
            <tr>
            <th style={{ textAlign: 'center'}}>Total Job Profit</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(((Math.round(expectedProfit1) + Math.round(expectedProfitABNC1) + Math.round(expectedProfitFA1) + Math.round(expectedProfit2) + Math.round(expectedProfitABNC2) + Math.round(expectedProfitFA2) + Math.round(expectedProfit3) + Math.round(expectedProfitABNC3) + Math.round(expectedProfitFA3) + Math.round(expectedProfit4) + Math.round(expectedProfitABNC4) + Math.round(expectedProfitFA4) + Math.round(expectedProfit5) + Math.round(expectedProfitABNC5) + Math.round(expectedProfitFA5) + Math.round(expectedProfit6) + Math.round(expectedProfitABNC6) + Math.round(expectedProfitFA6) + Math.round(expectedProfit7) + Math.round(expectedProfitABNC7) + Math.round(expectedProfitFA7) + Math.round(expectedProfit11) + Math.round(expectedProfitABNC11) + Math.round(expectedProfitFA11) + Math.round(expectedProfit00) + Math.round(expectedProfitABNC00) + Math.round(expectedProfitFA00)) + Math.round(ma_profit_1) + Math.round(ma_profit_2) + Math.round(ma_profit_3) + Math.round(ma_profit_4) + Math.round(ma_profit_5) + Math.round(ma_profit_6) + Math.round(ma_profit_7) + Math.round(ma_profit_11) + Math.round(ma_profit_00))) >= 0 ? '$' + ((Math.round(expectedProfit1) + Math.round(expectedProfitABNC1) + Math.round(expectedProfitFA1) + Math.round(expectedProfit2) + Math.round(expectedProfitABNC2) + Math.round(expectedProfitFA2) + Math.round(expectedProfit3) + Math.round(expectedProfitABNC3) + Math.round(expectedProfitFA3) + Math.round(expectedProfit4) + Math.round(expectedProfitABNC4) + Math.round(expectedProfitFA4) + Math.round(expectedProfit5) + Math.round(expectedProfitABNC5) + Math.round(expectedProfitFA5) + Math.round(expectedProfit6) + Math.round(expectedProfitABNC6) + Math.round(expectedProfitFA6) + Math.round(expectedProfit7) + Math.round(expectedProfitABNC7) + Math.round(expectedProfitFA7) + Math.round(expectedProfit11) + Math.round(expectedProfitABNC11) + Math.round(expectedProfitFA11) + Math.round(expectedProfit00) + Math.round(expectedProfitABNC00) + Math.round(expectedProfitFA00)) + Math.round(ma_profit_1) + Math.round(ma_profit_2) + Math.round(ma_profit_3) + Math.round(ma_profit_4) + Math.round(ma_profit_5) + Math.round(ma_profit_6) + Math.round(ma_profit_7) + Math.round(ma_profit_11) + Math.round(ma_profit_00)).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + ((Math.round(expectedProfit1) + Math.round(expectedProfitABNC1) + Math.round(expectedProfitFA1) + Math.round(expectedProfit2) + Math.round(expectedProfitABNC2) + Math.round(expectedProfitFA2) + Math.round(expectedProfit3) + Math.round(expectedProfitABNC3) + Math.round(expectedProfitFA3) + Math.round(expectedProfit4) + Math.round(expectedProfitABNC4) + Math.round(expectedProfitFA4) + Math.round(expectedProfit5) + Math.round(expectedProfitABNC5) + Math.round(expectedProfitFA5) + Math.round(expectedProfit6) + Math.round(expectedProfitABNC6) + Math.round(expectedProfitFA6) + Math.round(expectedProfit7) + Math.round(expectedProfitABNC7) + Math.round(expectedProfitFA7) + Math.round(expectedProfit11) + Math.round(expectedProfitABNC11) + Math.round(expectedProfitFA11) + Math.round(expectedProfit00) + Math.round(expectedProfitABNC00) + Math.round(expectedProfitFA00)) + Math.round(ma_profit_1) + Math.round(ma_profit_2) + Math.round(ma_profit_3) + Math.round(ma_profit_4) + Math.round(ma_profit_5) + Math.round(ma_profit_6) + Math.round(ma_profit_7) + Math.round(ma_profit_11) + Math.round(ma_profit_00)).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{((((Math.round(expectedProfit1) + Math.round(expectedProfitABNC1) + Math.round(expectedProfitFA1) + Math.round(expectedProfit2) + Math.round(expectedProfitABNC2) + Math.round(expectedProfitFA2) + Math.round(expectedProfit3) + Math.round(expectedProfitABNC3) + Math.round(expectedProfitFA3) + Math.round(expectedProfit4) + Math.round(expectedProfitABNC4) + Math.round(expectedProfitFA4) + Math.round(expectedProfit5) + Math.round(expectedProfitABNC5) + Math.round(expectedProfitFA5) + Math.round(expectedProfit6) + Math.round(expectedProfitABNC6) + Math.round(expectedProfitFA6) + Math.round(expectedProfit7) + Math.round(expectedProfitABNC7) + Math.round(expectedProfitFA7) + Math.round(expectedProfit11) + Math.round(expectedProfitABNC11) + Math.round(expectedProfitFA11) + Math.round(expectedProfit00) + Math.round(expectedProfitABNC00) + Math.round(expectedProfitFA00)) + Math.round(ma_profit_1) + Math.round(ma_profit_2) + Math.round(ma_profit_3) + Math.round(ma_profit_4) + Math.round(ma_profit_5) + Math.round(ma_profit_6) + Math.round(ma_profit_7) + Math.round(ma_profit_11) + Math.round(ma_profit_00)) / Math.round(Math.round(revenueTotal) + Math.round(revenueABNCTotal) + Math.round(revenueFATotal) + ma_revenue_1 + ma_revenue_2 + ma_revenue_3 + ma_revenue_4 + ma_revenue_5 + ma_revenue_6 + ma_revenue_7 + ma_revenue_11 + ma_revenue_00)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(((Math.round(preexpectedProfit1) + Math.round(preexpectedProfitABNC1) + Math.round(preexpectedProfitFA1) + Math.round(preexpectedProfit2) + Math.round(preexpectedProfitABNC2) + Math.round(preexpectedProfitFA2) + Math.round(preexpectedProfit3) + Math.round(preexpectedProfitABNC3) + Math.round(preexpectedProfitFA3) + Math.round(preexpectedProfit4) + Math.round(preexpectedProfitABNC4) + Math.round(preexpectedProfitFA4) + Math.round(preexpectedProfit5) + Math.round(preexpectedProfitABNC5) + Math.round(preexpectedProfitFA5) + Math.round(preexpectedProfit6) + Math.round(preexpectedProfitABNC6) + Math.round(preexpectedProfitFA6) + Math.round(preexpectedProfit7) + Math.round(preexpectedProfitABNC7) + Math.round(preexpectedProfitFA7) + Math.round(preexpectedProfit11) + Math.round(preexpectedProfitABNC11) + Math.round(preexpectedProfitFA11) + Math.round(preexpectedProfit00) + Math.round(preexpectedProfitABNC00) + Math.round(preexpectedProfitFA00)) + Math.round(prev_ma_profit_1) + Math.round(prev_ma_profit_2) + Math.round(prev_ma_profit_3) +  Math.round(prev_ma_profit_4) + Math.round(prev_ma_profit_5) + Math.round(prev_ma_profit_6) + Math.round(prev_ma_profit_7) + Math.round(prev_ma_profit_11) + Math.round(prev_ma_profit_00))) >= 0 ? '$' + ((Math.round(preexpectedProfit1) + Math.round(preexpectedProfitABNC1) + Math.round(preexpectedProfitFA1) + Math.round(preexpectedProfit2) + Math.round(preexpectedProfitABNC2) + Math.round(preexpectedProfitFA2) + Math.round(preexpectedProfit3) + Math.round(preexpectedProfitABNC3) + Math.round(preexpectedProfitFA3) + Math.round(preexpectedProfit4) + Math.round(preexpectedProfitABNC4) + Math.round(preexpectedProfitFA4) + Math.round(preexpectedProfit5) + Math.round(preexpectedProfitABNC5) + Math.round(preexpectedProfitFA5) + Math.round(preexpectedProfit6) + Math.round(preexpectedProfitABNC6) + Math.round(preexpectedProfitFA6) + Math.round(preexpectedProfit7) + Math.round(preexpectedProfitABNC7) + Math.round(preexpectedProfitFA7) + Math.round(preexpectedProfit11) + Math.round(preexpectedProfitABNC11) + Math.round(preexpectedProfitFA11) + Math.round(preexpectedProfit00) + Math.round(preexpectedProfitABNC00) + Math.round(preexpectedProfitFA00)) + Math.round(prev_ma_profit_1) + Math.round(prev_ma_profit_2) + Math.round(prev_ma_profit_3) +  Math.round(prev_ma_profit_4) + Math.round(prev_ma_profit_5) + Math.round(prev_ma_profit_6) + Math.round(prev_ma_profit_7) + Math.round(prev_ma_profit_11) + Math.round(prev_ma_profit_00)).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + ((Math.round(preexpectedProfit1) + Math.round(preexpectedProfitABNC1) + Math.round(preexpectedProfitFA1) + Math.round(preexpectedProfit2) + Math.round(preexpectedProfitABNC2) + Math.round(preexpectedProfitFA2) + Math.round(preexpectedProfit3) + Math.round(preexpectedProfitABNC3) + Math.round(preexpectedProfitFA3) + Math.round(preexpectedProfit4) + Math.round(preexpectedProfitABNC4) + Math.round(preexpectedProfitFA4) + Math.round(preexpectedProfit5) + Math.round(preexpectedProfitABNC5) + Math.round(preexpectedProfitFA5) + Math.round(preexpectedProfit6) + Math.round(preexpectedProfitABNC6) + Math.round(preexpectedProfitFA6) + Math.round(preexpectedProfit7) + Math.round(preexpectedProfitABNC7) + Math.round(preexpectedProfitFA7) + Math.round(preexpectedProfit11) + Math.round(preexpectedProfitABNC11) + Math.round(preexpectedProfitFA11) + Math.round(preexpectedProfit00) + Math.round(preexpectedProfitABNC00) + Math.round(preexpectedProfitFA00)) + Math.round(prev_ma_profit_1) + Math.round(prev_ma_profit_2) + Math.round(prev_ma_profit_3) +  Math.round(prev_ma_profit_4) + Math.round(prev_ma_profit_5) + Math.round(prev_ma_profit_6) + Math.round(prev_ma_profit_7) + Math.round(prev_ma_profit_11) + Math.round(prev_ma_profit_00)).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(((Math.round((Math.round(expectedProfit1) + Math.round(expectedProfitABNC1) + Math.round(expectedProfitFA1) + Math.round(expectedProfit2) + Math.round(expectedProfitABNC2) + Math.round(expectedProfitFA2) + Math.round(expectedProfit3) + Math.round(expectedProfitABNC3) + Math.round(expectedProfitFA3) + Math.round(expectedProfit4) + Math.round(expectedProfitABNC4) + Math.round(expectedProfitFA4) + Math.round(expectedProfit5) + Math.round(expectedProfitABNC5) + Math.round(expectedProfitFA5) + Math.round(expectedProfit6) + Math.round(expectedProfitABNC6) + Math.round(expectedProfitFA6) + Math.round(expectedProfit7) + Math.round(expectedProfitABNC7) + Math.round(expectedProfitFA7) + Math.round(expectedProfit11) + Math.round(expectedProfitABNC11) + Math.round(expectedProfitFA11) + Math.round(expectedProfit00) + Math.round(expectedProfitABNC00) + Math.round(expectedProfitFA00)) + Math.round(ma_profit_1) + Math.round(ma_profit_2) + Math.round(ma_profit_3) + Math.round(ma_profit_4) + Math.round(ma_profit_5) + Math.round(ma_profit_6) + Math.round(ma_profit_7) + Math.round(ma_profit_11) + Math.round(ma_profit_00))) - (Math.round((Math.round(preexpectedProfit1) + Math.round(preexpectedProfitABNC1) + Math.round(preexpectedProfitFA1) + Math.round(preexpectedProfit2) + Math.round(preexpectedProfitABNC2) + Math.round(preexpectedProfitFA2) + Math.round(preexpectedProfit3) + Math.round(preexpectedProfitABNC3) + Math.round(preexpectedProfitFA3) + Math.round(preexpectedProfit4) + Math.round(preexpectedProfitABNC4) + Math.round(preexpectedProfitFA4) + Math.round(preexpectedProfit5) + Math.round(preexpectedProfitABNC5) + Math.round(preexpectedProfitFA5) + Math.round(preexpectedProfit6) + Math.round(preexpectedProfitABNC6) + Math.round(preexpectedProfitFA6) + Math.round(preexpectedProfit7) + Math.round(preexpectedProfitABNC7) + Math.round(preexpectedProfitFA7) + Math.round(preexpectedProfit11) + Math.round(preexpectedProfitABNC11) + Math.round(preexpectedProfitFA11) + Math.round(preexpectedProfit00) + Math.round(preexpectedProfitABNC00) + Math.round(preexpectedProfitFA00)) + Math.round(prev_ma_profit_1) + Math.round(prev_ma_profit_2) + Math.round(prev_ma_profit_3) +  Math.round(prev_ma_profit_4) + Math.round(prev_ma_profit_5) + Math.round(prev_ma_profit_6) + Math.round(prev_ma_profit_7) + Math.round(prev_ma_profit_11) + Math.round(prev_ma_profit_00))))) >= 0 ? '$' + ((Math.round((Math.round(expectedProfit1) + Math.round(expectedProfitABNC1) + Math.round(expectedProfitFA1) + Math.round(expectedProfit2) + Math.round(expectedProfitABNC2) + Math.round(expectedProfitFA2) + Math.round(expectedProfit3) + Math.round(expectedProfitABNC3) + Math.round(expectedProfitFA3) + Math.round(expectedProfit4) + Math.round(expectedProfitABNC4) + Math.round(expectedProfitFA4) + Math.round(expectedProfit5) + Math.round(expectedProfitABNC5) + Math.round(expectedProfitFA5) + Math.round(expectedProfit6) + Math.round(expectedProfitABNC6) + Math.round(expectedProfitFA6) + Math.round(expectedProfit7) + Math.round(expectedProfitABNC7) + Math.round(expectedProfitFA7) + Math.round(expectedProfit11) + Math.round(expectedProfitABNC11) + Math.round(expectedProfitFA11) + Math.round(expectedProfit00) + Math.round(expectedProfitABNC00) + Math.round(expectedProfitFA00)) + Math.round(ma_profit_1) + Math.round(ma_profit_2) + Math.round(ma_profit_3) + Math.round(ma_profit_4) + Math.round(ma_profit_5) + Math.round(ma_profit_6) + Math.round(ma_profit_7) + Math.round(ma_profit_11) + Math.round(ma_profit_00))) - (Math.round((Math.round(preexpectedProfit1) + Math.round(preexpectedProfitABNC1) + Math.round(preexpectedProfitFA1) + Math.round(preexpectedProfit2) + Math.round(preexpectedProfitABNC2) + Math.round(preexpectedProfitFA2) + Math.round(preexpectedProfit3) + Math.round(preexpectedProfitABNC3) + Math.round(preexpectedProfitFA3) + Math.round(preexpectedProfit4) + Math.round(preexpectedProfitABNC4) + Math.round(preexpectedProfitFA4) + Math.round(preexpectedProfit5) + Math.round(preexpectedProfitABNC5) + Math.round(preexpectedProfitFA5) + Math.round(preexpectedProfit6) + Math.round(preexpectedProfitABNC6) + Math.round(preexpectedProfitFA6) + Math.round(preexpectedProfit7) + Math.round(preexpectedProfitABNC7) + Math.round(preexpectedProfitFA7) + Math.round(preexpectedProfit11) + Math.round(preexpectedProfitABNC11) + Math.round(preexpectedProfitFA11) + Math.round(preexpectedProfit00) + Math.round(preexpectedProfitABNC00) + Math.round(preexpectedProfitFA00)) + Math.round(prev_ma_profit_1) + Math.round(prev_ma_profit_2) + Math.round(prev_ma_profit_3) +  Math.round(prev_ma_profit_4) + Math.round(prev_ma_profit_5) + Math.round(prev_ma_profit_6) + Math.round(prev_ma_profit_7) + Math.round(prev_ma_profit_11) + Math.round(prev_ma_profit_00)))).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + ((Math.round((Math.round(expectedProfit1) + Math.round(expectedProfitABNC1) + Math.round(expectedProfitFA1) + Math.round(expectedProfit2) + Math.round(expectedProfitABNC2) + Math.round(expectedProfitFA2) + Math.round(expectedProfit3) + Math.round(expectedProfitABNC3) + Math.round(expectedProfitFA3) + Math.round(expectedProfit4) + Math.round(expectedProfitABNC4) + Math.round(expectedProfitFA4) + Math.round(expectedProfit5) + Math.round(expectedProfitABNC5) + Math.round(expectedProfitFA5) + Math.round(expectedProfit6) + Math.round(expectedProfitABNC6) + Math.round(expectedProfitFA6) + Math.round(expectedProfit7) + Math.round(expectedProfitABNC7) + Math.round(expectedProfitFA7) + Math.round(expectedProfit11) + Math.round(expectedProfitABNC11) + Math.round(expectedProfitFA11) + Math.round(expectedProfit00) + Math.round(expectedProfitABNC00) + Math.round(expectedProfitFA00)) + Math.round(ma_profit_1) + Math.round(ma_profit_2) + Math.round(ma_profit_3) + Math.round(ma_profit_4) + Math.round(ma_profit_5) + Math.round(ma_profit_6) + Math.round(ma_profit_7) + Math.round(ma_profit_11) + Math.round(ma_profit_00))) - (Math.round((Math.round(preexpectedProfit1) + Math.round(preexpectedProfitABNC1) + Math.round(preexpectedProfitFA1) + Math.round(preexpectedProfit2) + Math.round(preexpectedProfitABNC2) + Math.round(preexpectedProfitFA2) + Math.round(preexpectedProfit3) + Math.round(preexpectedProfitABNC3) + Math.round(preexpectedProfitFA3) + Math.round(preexpectedProfit4) + Math.round(preexpectedProfitABNC4) + Math.round(preexpectedProfitFA4) + Math.round(preexpectedProfit5) + Math.round(preexpectedProfitABNC5) + Math.round(preexpectedProfitFA5) + Math.round(preexpectedProfit6) + Math.round(preexpectedProfitABNC6) + Math.round(preexpectedProfitFA6) + Math.round(preexpectedProfit7) + Math.round(preexpectedProfitABNC7) + Math.round(preexpectedProfitFA7) + Math.round(preexpectedProfit11) + Math.round(preexpectedProfitABNC11) + Math.round(preexpectedProfitFA11) + Math.round(preexpectedProfit00) + Math.round(preexpectedProfitABNC00) + Math.round(preexpectedProfitFA00)) + Math.round(prev_ma_profit_1) + Math.round(prev_ma_profit_2) + Math.round(prev_ma_profit_3) +  Math.round(prev_ma_profit_4) + Math.round(prev_ma_profit_5) + Math.round(prev_ma_profit_6) + Math.round(prev_ma_profit_7) + Math.round(prev_ma_profit_11) + Math.round(prev_ma_profit_00)))).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(((Math.round(expectedProfit1_two) + Math.round(expectedProfitABNC1_two) + Math.round(expectedProfitFA1_two) + Math.round(expectedProfit2_two) + Math.round(expectedProfitABNC2_two) + Math.round(expectedProfitFA2_two) + Math.round(expectedProfit3_two) + Math.round(expectedProfitABNC3_two) + Math.round(expectedProfitFA3_two) + Math.round(expectedProfit4_two) + Math.round(expectedProfitABNC4_two) + Math.round(expectedProfitFA4_two) + Math.round(expectedProfit5_two) + Math.round(expectedProfitABNC5_two) + Math.round(expectedProfitFA5_two) + Math.round(expectedProfit6_two) + Math.round(expectedProfitABNC6_two) + Math.round(expectedProfitFA6_two) + Math.round(expectedProfit7_two) + Math.round(expectedProfitABNC7_two) + Math.round(expectedProfitFA7_two) + Math.round(expectedProfit11_two) + Math.round(expectedProfitABNC11_two) + Math.round(expectedProfitFA11_two) + Math.round(expectedProfit00_two) + Math.round(expectedProfitABNC00_two) + Math.round(expectedProfitFA00_two)) + Math.round(ma_profit_1_two) + Math.round(ma_profit_2_two) + Math.round(ma_profit_3_two) + Math.round(ma_profit_4_two) + Math.round(ma_profit_5_two) + Math.round(ma_profit_6_two) + Math.round(ma_profit_7_two) + Math.round(ma_profit_11_two) + Math.round(ma_profit_00_two))) >= 0 ? '$' + ((Math.round(expectedProfit1_two) + Math.round(expectedProfitABNC1_two) + Math.round(expectedProfitFA1_two) + Math.round(expectedProfit2_two) + Math.round(expectedProfitABNC2_two) + Math.round(expectedProfitFA2_two) + Math.round(expectedProfit3_two) + Math.round(expectedProfitABNC3_two) + Math.round(expectedProfitFA3_two) + Math.round(expectedProfit4_two) + Math.round(expectedProfitABNC4_two) + Math.round(expectedProfitFA4_two) + Math.round(expectedProfit5_two) + Math.round(expectedProfitABNC5_two) + Math.round(expectedProfitFA5_two) + Math.round(expectedProfit6_two) + Math.round(expectedProfitABNC6_two) + Math.round(expectedProfitFA6_two) + Math.round(expectedProfit7_two) + Math.round(expectedProfitABNC7_two) + Math.round(expectedProfitFA7_two) + Math.round(expectedProfit11_two) + Math.round(expectedProfitABNC11_two) + Math.round(expectedProfitFA11_two) + Math.round(expectedProfit00_two) + Math.round(expectedProfitABNC00_two) + Math.round(expectedProfitFA00_two)) + Math.round(ma_profit_1_two) + Math.round(ma_profit_2_two) + Math.round(ma_profit_3_two) + Math.round(ma_profit_4_two) + Math.round(ma_profit_5_two) + Math.round(ma_profit_6_two) + Math.round(ma_profit_7_two) + Math.round(ma_profit_11_two) + Math.round(ma_profit_00_two)).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + ((Math.round(expectedProfit1_two) + Math.round(expectedProfitABNC1_two) + Math.round(expectedProfitFA1_two) + Math.round(expectedProfit2_two) + Math.round(expectedProfitABNC2_two) + Math.round(expectedProfitFA2_two) + Math.round(expectedProfit3_two) + Math.round(expectedProfitABNC3_two) + Math.round(expectedProfitFA3_two) + Math.round(expectedProfit4_two) + Math.round(expectedProfitABNC4_two) + Math.round(expectedProfitFA4_two) + Math.round(expectedProfit5_two) + Math.round(expectedProfitABNC5_two) + Math.round(expectedProfitFA5_two) + Math.round(expectedProfit6_two) + Math.round(expectedProfitABNC6_two) + Math.round(expectedProfitFA6_two) + Math.round(expectedProfit7_two) + Math.round(expectedProfitABNC7_two) + Math.round(expectedProfitFA7_two) + Math.round(expectedProfit11_two) + Math.round(expectedProfitABNC11_two) + Math.round(expectedProfitFA11_two) + Math.round(expectedProfit00_two) + Math.round(expectedProfitABNC00_two) + Math.round(expectedProfitFA00_two)) + Math.round(ma_profit_1_two) + Math.round(ma_profit_2_two) + Math.round(ma_profit_3_two) + Math.round(ma_profit_4_two) + Math.round(ma_profit_5_two) + Math.round(ma_profit_6_two) + Math.round(ma_profit_7_two) + Math.round(ma_profit_11_two) + Math.round(ma_profit_00_two)).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{((((Math.round(expectedProfit1_two) + Math.round(expectedProfitABNC1_two) + Math.round(expectedProfitFA1_two) + Math.round(expectedProfit2_two) + Math.round(expectedProfitABNC2_two) + Math.round(expectedProfitFA2_two) + Math.round(expectedProfit3_two) + Math.round(expectedProfitABNC3_two) + Math.round(expectedProfitFA3_two) + Math.round(expectedProfit4_two) + Math.round(expectedProfitABNC4_two) + Math.round(expectedProfitFA4_two) + Math.round(expectedProfit5_two) + Math.round(expectedProfitABNC5_two) + Math.round(expectedProfitFA5_two) + Math.round(expectedProfit6_two) + Math.round(expectedProfitABNC6_two) + Math.round(expectedProfitFA6_two) + Math.round(expectedProfit7_two) + Math.round(expectedProfitABNC7_two) + Math.round(expectedProfitFA7_two) + Math.round(expectedProfit11_two) + Math.round(expectedProfitABNC11_two) + Math.round(expectedProfitFA11_two) + Math.round(expectedProfit00_two) + Math.round(expectedProfitABNC00_two) + Math.round(expectedProfitFA00_two)) + Math.round(ma_profit_1_two) + Math.round(ma_profit_2_two) + Math.round(ma_profit_3_two) + Math.round(ma_profit_4_two) + Math.round(ma_profit_5_two) + Math.round(ma_profit_6_two) + Math.round(ma_profit_7_two) + Math.round(ma_profit_11_two) + Math.round(ma_profit_00_two)) / Math.round(Math.round(revenueTotal_two) +  Math.round(revenueABNCTotal_two) + Math.round(revenueFATotal_two) + ma_revenue_1_two + ma_revenue_2_two + ma_revenue_3_two + ma_revenue_4_two + ma_revenue_5_two + ma_revenue_6_two + ma_revenue_7_two + ma_revenue_11_two + ma_revenue_00_two)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(((Math.round(preexpectedProfit1_two) + Math.round(preexpectedProfitABNC1_two) + Math.round(preexpectedProfitFA1_two) + Math.round(preexpectedProfit2_two) + Math.round(preexpectedProfitABNC2_two) + Math.round(preexpectedProfitFA2_two) + Math.round(preexpectedProfit3_two) + Math.round(preexpectedProfitABNC3_two) + Math.round(preexpectedProfitFA3_two) + Math.round(preexpectedProfit4_two) + Math.round(preexpectedProfitABNC4_two) + Math.round(preexpectedProfitFA4_two) + Math.round(preexpectedProfit5_two) + Math.round(preexpectedProfitABNC5_two) + Math.round(preexpectedProfitFA5_two) + Math.round(preexpectedProfit6_two) + Math.round(preexpectedProfitABNC6_two) + Math.round(preexpectedProfitFA6_two) + Math.round(preexpectedProfit7_two) + Math.round(preexpectedProfitABNC7_two) + Math.round(preexpectedProfitFA7_two) + Math.round(preexpectedProfit11_two) + Math.round(preexpectedProfitABNC11_two) + Math.round(preexpectedProfitFA11_two) + Math.round(preexpectedProfit00_two) + Math.round(preexpectedProfitABNC00_two) + Math.round(preexpectedProfitFA00)) + Math.round(prev_ma_profit_1_two) + Math.round(prev_ma_profit_2_two) + Math.round(prev_ma_profit_3_two) +  Math.round(prev_ma_profit_4_two) + Math.round(prev_ma_profit_5_two) + Math.round(prev_ma_profit_6_two) + Math.round(prev_ma_profit_7_two) + Math.round(prev_ma_profit_11_two) + Math.round(prev_ma_profit_00_two))) >= 0 ? '$' + ((Math.round(preexpectedProfit1_two) + Math.round(preexpectedProfitABNC1_two) + Math.round(preexpectedProfitFA1_two) + Math.round(preexpectedProfit2_two) + Math.round(preexpectedProfitABNC2_two) + Math.round(preexpectedProfitFA2_two) + Math.round(preexpectedProfit3_two) + Math.round(preexpectedProfitABNC3_two) + Math.round(preexpectedProfitFA3_two) + Math.round(preexpectedProfit4_two) + Math.round(preexpectedProfitABNC4_two) + Math.round(preexpectedProfitFA4_two) + Math.round(preexpectedProfit5_two) + Math.round(preexpectedProfitABNC5_two) + Math.round(preexpectedProfitFA5_two) + Math.round(preexpectedProfit6_two) + Math.round(preexpectedProfitABNC6_two) + Math.round(preexpectedProfitFA6_two) + Math.round(preexpectedProfit7_two) + Math.round(preexpectedProfitABNC7_two) + Math.round(preexpectedProfitFA7_two) + Math.round(preexpectedProfit11_two) + Math.round(preexpectedProfitABNC11_two) + Math.round(preexpectedProfitFA11_two) + Math.round(preexpectedProfit00_two) + Math.round(preexpectedProfitABNC00_two) + Math.round(preexpectedProfitFA00)) + Math.round(prev_ma_profit_1_two) + Math.round(prev_ma_profit_2_two) + Math.round(prev_ma_profit_3_two) +  Math.round(prev_ma_profit_4_two) + Math.round(prev_ma_profit_5_two) + Math.round(prev_ma_profit_6_two) + Math.round(prev_ma_profit_7_two) + Math.round(prev_ma_profit_11_two) + Math.round(prev_ma_profit_00_two)).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + ((Math.round(preexpectedProfit1_two) + Math.round(preexpectedProfitABNC1_two) + Math.round(preexpectedProfitFA1_two) + Math.round(preexpectedProfit2_two) + Math.round(preexpectedProfitABNC2_two) + Math.round(preexpectedProfitFA2_two) + Math.round(preexpectedProfit3_two) + Math.round(preexpectedProfitABNC3_two) + Math.round(preexpectedProfitFA3_two) + Math.round(preexpectedProfit4_two) + Math.round(preexpectedProfitABNC4_two) + Math.round(preexpectedProfitFA4_two) + Math.round(preexpectedProfit5_two) + Math.round(preexpectedProfitABNC5_two) + Math.round(preexpectedProfitFA5_two) + Math.round(preexpectedProfit6_two) + Math.round(preexpectedProfitABNC6_two) + Math.round(preexpectedProfitFA6_two) + Math.round(preexpectedProfit7_two) + Math.round(preexpectedProfitABNC7_two) + Math.round(preexpectedProfitFA7_two) + Math.round(preexpectedProfit11_two) + Math.round(preexpectedProfitABNC11_two) + Math.round(preexpectedProfitFA11_two) + Math.round(preexpectedProfit00_two) + Math.round(preexpectedProfitABNC00_two) + Math.round(preexpectedProfitFA00)) + Math.round(prev_ma_profit_1_two) + Math.round(prev_ma_profit_2_two) + Math.round(prev_ma_profit_3_two) +  Math.round(prev_ma_profit_4_two) + Math.round(prev_ma_profit_5_two) + Math.round(prev_ma_profit_6_two) + Math.round(prev_ma_profit_7_two) + Math.round(prev_ma_profit_11_two) + Math.round(prev_ma_profit_00_two)).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(((Math.round((Math.round(expectedProfit1_two) + Math.round(expectedProfitABNC1_two) + Math.round(expectedProfitFA1_two) + Math.round(expectedProfit2_two) + Math.round(expectedProfitABNC2_two) + Math.round(expectedProfitFA2_two) + Math.round(expectedProfit3_two) + Math.round(expectedProfitABNC3_two) + Math.round(expectedProfitFA3_two) + Math.round(expectedProfit4_two) + Math.round(expectedProfitABNC4_two) + Math.round(expectedProfitFA4_two) + Math.round(expectedProfit5_two) + Math.round(expectedProfitABNC5_two) + Math.round(expectedProfitFA5_two) + Math.round(expectedProfit6_two) + Math.round(expectedProfitABNC6_two) + Math.round(expectedProfitFA6_two) + Math.round(expectedProfit7_two) + Math.round(expectedProfitABNC7_two) + Math.round(expectedProfitFA7_two) + Math.round(expectedProfit11_two) + Math.round(expectedProfitABNC11_two) + Math.round(expectedProfitFA11_two) + Math.round(expectedProfit00_two) + Math.round(expectedProfitABNC00_two) + Math.round(expectedProfitFA00_two)) + Math.round(ma_profit_1_two) + Math.round(ma_profit_2_two) + Math.round(ma_profit_3_two) + Math.round(ma_profit_4_two) + Math.round(ma_profit_5_two) + Math.round(ma_profit_6_two) + Math.round(ma_profit_7_two) + Math.round(ma_profit_11_two) + Math.round(ma_profit_00_two))) - (Math.round((Math.round(preexpectedProfit1_two) + Math.round(preexpectedProfitABNC1_two) + Math.round(preexpectedProfitFA1_two) + Math.round(preexpectedProfit2_two) + Math.round(preexpectedProfitABNC2_two) + Math.round(preexpectedProfitFA2_two) + Math.round(preexpectedProfit3_two) + Math.round(preexpectedProfitABNC3_two) + Math.round(preexpectedProfitFA3_two) + Math.round(preexpectedProfit4_two) + Math.round(preexpectedProfitABNC4_two) + Math.round(preexpectedProfitFA4_two) + Math.round(preexpectedProfit5_two) + Math.round(preexpectedProfitABNC5_two) + Math.round(preexpectedProfitFA5_two) + Math.round(preexpectedProfit6_two) + Math.round(preexpectedProfitABNC6_two) + Math.round(preexpectedProfitFA6_two) + Math.round(preexpectedProfit7_two) + Math.round(preexpectedProfitABNC7_two) + Math.round(preexpectedProfitFA7_two) + Math.round(preexpectedProfit11_two) + Math.round(preexpectedProfitABNC11_two) + Math.round(preexpectedProfitFA11_two) + Math.round(preexpectedProfit00_two) + Math.round(preexpectedProfitABNC00_two) + Math.round(preexpectedProfitFA00_two)) + Math.round(prev_ma_profit_1_two) + Math.round(prev_ma_profit_2_two) + Math.round(prev_ma_profit_3_two) +  Math.round(prev_ma_profit_4_two) + Math.round(prev_ma_profit_5_two) + Math.round(prev_ma_profit_6_two) + Math.round(prev_ma_profit_7_two) + Math.round(prev_ma_profit_11_two) + Math.round(prev_ma_profit_00_two))))) >= 0 ? '$' + ((Math.round((Math.round(expectedProfit1_two) + Math.round(expectedProfitABNC1_two) + Math.round(expectedProfitFA1_two) + Math.round(expectedProfit2_two) + Math.round(expectedProfitABNC2_two) + Math.round(expectedProfitFA2_two) + Math.round(expectedProfit3_two) + Math.round(expectedProfitABNC3_two) + Math.round(expectedProfitFA3_two) + Math.round(expectedProfit4_two) + Math.round(expectedProfitABNC4_two) + Math.round(expectedProfitFA4_two) + Math.round(expectedProfit5_two) + Math.round(expectedProfitABNC5_two) + Math.round(expectedProfitFA5_two) + Math.round(expectedProfit6_two) + Math.round(expectedProfitABNC6_two) + Math.round(expectedProfitFA6_two) + Math.round(expectedProfit7_two) + Math.round(expectedProfitABNC7_two) + Math.round(expectedProfitFA7_two) + Math.round(expectedProfit11_two) + Math.round(expectedProfitABNC11_two) + Math.round(expectedProfitFA11_two) + Math.round(expectedProfit00_two) + Math.round(expectedProfitABNC00_two) + Math.round(expectedProfitFA00_two)) + Math.round(ma_profit_1_two) + Math.round(ma_profit_2_two) + Math.round(ma_profit_3_two) + Math.round(ma_profit_4_two) + Math.round(ma_profit_5_two) + Math.round(ma_profit_6_two) + Math.round(ma_profit_7_two) + Math.round(ma_profit_11_two) + Math.round(ma_profit_00_two))) - (Math.round((Math.round(preexpectedProfit1_two) + Math.round(preexpectedProfitABNC1_two) + Math.round(preexpectedProfitFA1_two) + Math.round(preexpectedProfit2_two) + Math.round(preexpectedProfitABNC2_two) + Math.round(preexpectedProfitFA2_two) + Math.round(preexpectedProfit3_two) + Math.round(preexpectedProfitABNC3_two) + Math.round(preexpectedProfitFA3_two) + Math.round(preexpectedProfit4_two) + Math.round(preexpectedProfitABNC4_two) + Math.round(preexpectedProfitFA4_two) + Math.round(preexpectedProfit5_two) + Math.round(preexpectedProfitABNC5_two) + Math.round(preexpectedProfitFA5_two) + Math.round(preexpectedProfit6_two) + Math.round(preexpectedProfitABNC6_two) + Math.round(preexpectedProfitFA6_two) + Math.round(preexpectedProfit7_two) + Math.round(preexpectedProfitABNC7_two) + Math.round(preexpectedProfitFA7_two) + Math.round(preexpectedProfit11_two) + Math.round(preexpectedProfitABNC11_two) + Math.round(preexpectedProfitFA11_two) + Math.round(preexpectedProfit00_two) + Math.round(preexpectedProfitABNC00_two) + Math.round(preexpectedProfitFA00_two)) + Math.round(prev_ma_profit_1_two) + Math.round(prev_ma_profit_2_two) + Math.round(prev_ma_profit_3_two) +  Math.round(prev_ma_profit_4_two) + Math.round(prev_ma_profit_5_two) + Math.round(prev_ma_profit_6_two) + Math.round(prev_ma_profit_7_two) + Math.round(prev_ma_profit_11_two) + Math.round(prev_ma_profit_00_two)))).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + ((Math.round((Math.round(expectedProfit1_two) + Math.round(expectedProfitABNC1_two) + Math.round(expectedProfitFA1_two) + Math.round(expectedProfit2_two) + Math.round(expectedProfitABNC2_two) + Math.round(expectedProfitFA2_two) + Math.round(expectedProfit3_two) + Math.round(expectedProfitABNC3_two) + Math.round(expectedProfitFA3_two) + Math.round(expectedProfit4_two) + Math.round(expectedProfitABNC4_two) + Math.round(expectedProfitFA4_two) + Math.round(expectedProfit5_two) + Math.round(expectedProfitABNC5_two) + Math.round(expectedProfitFA5_two) + Math.round(expectedProfit6_two) + Math.round(expectedProfitABNC6_two) + Math.round(expectedProfitFA6_two) + Math.round(expectedProfit7_two) + Math.round(expectedProfitABNC7_two) + Math.round(expectedProfitFA7_two) + Math.round(expectedProfit11_two) + Math.round(expectedProfitABNC11_two) + Math.round(expectedProfitFA11_two) + Math.round(expectedProfit00_two) + Math.round(expectedProfitABNC00_two) + Math.round(expectedProfitFA00_two)) + Math.round(ma_profit_1_two) + Math.round(ma_profit_2_two) + Math.round(ma_profit_3_two) + Math.round(ma_profit_4_two) + Math.round(ma_profit_5_two) + Math.round(ma_profit_6_two) + Math.round(ma_profit_7_two) + Math.round(ma_profit_11_two) + Math.round(ma_profit_00_two))) - (Math.round((Math.round(preexpectedProfit1_two) + Math.round(preexpectedProfitABNC1_two) + Math.round(preexpectedProfitFA1_two) + Math.round(preexpectedProfit2_two) + Math.round(preexpectedProfitABNC2_two) + Math.round(preexpectedProfitFA2_two) + Math.round(preexpectedProfit3_two) + Math.round(preexpectedProfitABNC3_two) + Math.round(preexpectedProfitFA3_two) + Math.round(preexpectedProfit4_two) + Math.round(preexpectedProfitABNC4_two) + Math.round(preexpectedProfitFA4_two) + Math.round(preexpectedProfit5_two) + Math.round(preexpectedProfitABNC5_two) + Math.round(preexpectedProfitFA5_two) + Math.round(preexpectedProfit6_two) + Math.round(preexpectedProfitABNC6_two) + Math.round(preexpectedProfitFA6_two) + Math.round(preexpectedProfit7_two) + Math.round(preexpectedProfitABNC7_two) + Math.round(preexpectedProfitFA7_two) + Math.round(preexpectedProfit11_two) + Math.round(preexpectedProfitABNC11_two) + Math.round(preexpectedProfitFA11_two) + Math.round(preexpectedProfit00_two) + Math.round(preexpectedProfitABNC00_two) + Math.round(preexpectedProfitFA00_two)) + Math.round(prev_ma_profit_1_two) + Math.round(prev_ma_profit_2_two) + Math.round(prev_ma_profit_3_two) +  Math.round(prev_ma_profit_4_two) + Math.round(prev_ma_profit_5_two) + Math.round(prev_ma_profit_6_two) + Math.round(prev_ma_profit_7_two) + Math.round(prev_ma_profit_11_two) + Math.round(prev_ma_profit_00_two)))).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>  
            </tr>
            <tr>
            <th style={{ textAlign: 'center'}}>% Rev</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{((revenueFinalTotal !== 0 ? ((Math.round(expectedProfit1) + Math.round(expectedProfitABNC1) + Math.round(expectedProfitFA1) + Math.round(expectedProfit2) + Math.round(expectedProfitABNC2) + Math.round(expectedProfitFA2) + Math.round(expectedProfit3) + Math.round(expectedProfitABNC3) + Math.round(expectedProfitFA3) + Math.round(expectedProfit4) + Math.round(expectedProfitABNC4) + Math.round(expectedProfitFA4) + Math.round(expectedProfit5) + Math.round(expectedProfitABNC5) + Math.round(expectedProfitFA5) + Math.round(expectedProfit6) + Math.round(expectedProfitABNC6) + Math.round(expectedProfitFA6) + Math.round(expectedProfit7) + Math.round(expectedProfitABNC7) + Math.round(expectedProfitFA7) + Math.round(expectedProfit11) + Math.round(expectedProfitABNC11) + Math.round(expectedProfitFA11) + Math.round(expectedProfit00) + Math.round(expectedProfitABNC00) + Math.round(expectedProfitFA00)))/ (revenueFinalTotal) : 0) * 100).toFixed(1) + '%'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}></th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{((prerevenueFinalTotal !== 0 ? ((Math.round(preexpectedProfit1) + Math.round(preexpectedProfitABNC1) + Math.round(preexpectedProfitFA1) + Math.round(preexpectedProfit2) + Math.round(preexpectedProfitABNC2) + Math.round(preexpectedProfitFA2) + Math.round(preexpectedProfit3) + Math.round(preexpectedProfitABNC3) + Math.round(preexpectedProfitFA3) + Math.round(preexpectedProfit4) + Math.round(preexpectedProfitABNC4) + Math.round(preexpectedProfitFA4) + Math.round(preexpectedProfit5) + Math.round(preexpectedProfitABNC5) + Math.round(preexpectedProfitFA5) + Math.round(preexpectedProfit6) + Math.round(preexpectedProfitABNC6) + Math.round(preexpectedProfitFA6) + Math.round(preexpectedProfit7) + Math.round(preexpectedProfitABNC7) + Math.round(preexpectedProfitFA7) + Math.round(preexpectedProfit11) + Math.round(preexpectedProfitABNC11) + Math.round(preexpectedProfitFA11) + Math.round(preexpectedProfit00) + Math.round(preexpectedProfitABNC00) + Math.round(preexpectedProfitFA00)))/ (prerevenueFinalTotal) : 0) * 100).toFixed(1) + '%'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{((Math.round((Math.round((Math.round(expectedProfit1) + Math.round(expectedProfitABNC1) + Math.round(expectedProfitFA1) + Math.round(expectedProfit2) + Math.round(expectedProfitABNC2) + Math.round(expectedProfitFA2) + Math.round(expectedProfit3) + Math.round(expectedProfitABNC3) + Math.round(expectedProfitFA3) + Math.round(expectedProfit4) + Math.round(expectedProfitABNC4) + Math.round(expectedProfitFA4) + Math.round(expectedProfit5) + Math.round(expectedProfitABNC5) + Math.round(expectedProfitFA5) + Math.round(expectedProfit6) + Math.round(expectedProfitABNC6) + Math.round(expectedProfitFA6) + Math.round(expectedProfit7) + Math.round(expectedProfitABNC7) + Math.round(expectedProfitFA7) + Math.round(expectedProfit11) + Math.round(expectedProfitABNC11) + Math.round(expectedProfitFA11) + Math.round(expectedProfit00) + Math.round(expectedProfitABNC00) + Math.round(expectedProfitFA00)) + Math.round(ma_profit_1) + Math.round(ma_profit_2) + Math.round(ma_profit_3) + Math.round(ma_profit_4) + Math.round(ma_profit_5) + Math.round(ma_profit_6) + Math.round(ma_profit_7) + Math.round(ma_profit_11) + Math.round(ma_profit_00))) - (Math.round((Math.round(preexpectedProfit1) + Math.round(preexpectedProfitABNC1) + Math.round(preexpectedProfitFA1) + Math.round(preexpectedProfit2) + Math.round(preexpectedProfitABNC2) + Math.round(preexpectedProfitFA2) + Math.round(preexpectedProfit3) + Math.round(preexpectedProfitABNC3) + Math.round(preexpectedProfitFA3) + Math.round(preexpectedProfit4) + Math.round(preexpectedProfitABNC4) + Math.round(preexpectedProfitFA4) + Math.round(preexpectedProfit5) + Math.round(preexpectedProfitABNC5) + Math.round(preexpectedProfitFA5) + Math.round(preexpectedProfit6) + Math.round(preexpectedProfitABNC6) + Math.round(preexpectedProfitFA6) + Math.round(preexpectedProfit7) + Math.round(preexpectedProfitABNC7) + Math.round(preexpectedProfitFA7) + Math.round(preexpectedProfit11) + Math.round(preexpectedProfitABNC11) + Math.round(preexpectedProfitFA11) + Math.round(preexpectedProfit00) + Math.round(preexpectedProfitABNC00) + Math.round(preexpectedProfitFA00)) + Math.round(prev_ma_profit_1) + Math.round(prev_ma_profit_2) + Math.round(prev_ma_profit_3) +  Math.round(prev_ma_profit_4) + Math.round(prev_ma_profit_5) + Math.round(prev_ma_profit_6) + Math.round(prev_ma_profit_7) + Math.round(prev_ma_profit_11) + Math.round(prev_ma_profit_00))))) / ((Math.round(Math.round(revenueFinalTotal) + ma_revenue_1 + ma_revenue_2 + ma_revenue_3 + ma_revenue_4 + ma_revenue_5 + ma_revenue_6 + ma_revenue_7 + ma_revenue_11 + ma_revenue_00) - Math.round(prerevenueFinalTotal + prev_ma_revenue_1 + prev_ma_revenue_2 + prev_ma_revenue_3 + prev_ma_revenue_4 + prev_ma_revenue_5 + prev_ma_revenue_6 + prev_ma_revenue_7 + prev_ma_revenue_11 + prev_ma_revenue_00)))* 100).toFixed(1) + '%'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{((revenueFinalTotal_two !== 0 ? ((Math.round(expectedProfit1_two) + Math.round(expectedProfitABNC1_two) + Math.round(expectedProfitFA1_two) + Math.round(expectedProfit2_two) + Math.round(expectedProfitABNC2_two) + Math.round(expectedProfitFA2_two) + Math.round(expectedProfit3_two) + Math.round(expectedProfitABNC3_two) + Math.round(expectedProfitFA3_two) + Math.round(expectedProfit4_two) + Math.round(expectedProfitABNC4_two) + Math.round(expectedProfitFA4_two) + Math.round(expectedProfit5_two) + Math.round(expectedProfitABNC5_two) + Math.round(expectedProfitFA5_two) + Math.round(expectedProfit6_two) + Math.round(expectedProfitABNC6_two) + Math.round(expectedProfitFA6_two) + Math.round(expectedProfit7_two) + Math.round(expectedProfitABNC7_two) + Math.round(expectedProfitFA7_two) + Math.round(expectedProfit11_two) + Math.round(expectedProfitABNC11_two) + Math.round(expectedProfitFA11_two) + Math.round(expectedProfit00_two) + Math.round(expectedProfitABNC00_two) + Math.round(expectedProfitFA00_two)))/ (revenueFinalTotal_two) : 0) * 100).toFixed(1) + '%'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}></th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{((prerevenueFinalTotal_two !== 0 ? ((Math.round(preexpectedProfit1_two) + Math.round(preexpectedProfitABNC1_two) + Math.round(preexpectedProfitFA1_two) + Math.round(preexpectedProfit2_two) + Math.round(preexpectedProfitABNC2_two) + Math.round(preexpectedProfitFA2_two) + Math.round(preexpectedProfit3_two) + Math.round(preexpectedProfitABNC3_two) + Math.round(preexpectedProfitFA3_two) + Math.round(preexpectedProfit4_two) + Math.round(preexpectedProfitABNC4_two) + Math.round(preexpectedProfitFA4_two) + Math.round(preexpectedProfit5_two) + Math.round(preexpectedProfitABNC5_two) + Math.round(preexpectedProfitFA5_two) + Math.round(preexpectedProfit6_two) + Math.round(preexpectedProfitABNC6_two) + Math.round(preexpectedProfitFA6_two) + Math.round(preexpectedProfit7_two) + Math.round(preexpectedProfitABNC7_two) + Math.round(preexpectedProfitFA7_two) + Math.round(preexpectedProfit11_two) + Math.round(preexpectedProfitABNC11_two) + Math.round(preexpectedProfitFA11_two) + Math.round(preexpectedProfit00_two) + Math.round(preexpectedProfitABNC00_two) + Math.round(preexpectedProfitFA00_two)))/ (prerevenueFinalTotal_two) : 0) * 100).toFixed(1) + '%'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{((Math.round((Math.round((Math.round(expectedProfit1_two) + Math.round(expectedProfitABNC1_two) + Math.round(expectedProfitFA1_two) + Math.round(expectedProfit2_two) + Math.round(expectedProfitABNC2_two) + Math.round(expectedProfitFA2_two) + Math.round(expectedProfit3_two) + Math.round(expectedProfitABNC3_two) + Math.round(expectedProfitFA3_two) + Math.round(expectedProfit4_two) + Math.round(expectedProfitABNC4_two) + Math.round(expectedProfitFA4_two) + Math.round(expectedProfit5_two) + Math.round(expectedProfitABNC5_two) + Math.round(expectedProfitFA5_two) + Math.round(expectedProfit6_two) + Math.round(expectedProfitABNC6_two) + Math.round(expectedProfitFA6_two) + Math.round(expectedProfit7_two) + Math.round(expectedProfitABNC7_two) + Math.round(expectedProfitFA7_two) + Math.round(expectedProfit11_two) + Math.round(expectedProfitABNC11_two) + Math.round(expectedProfitFA11_two) + Math.round(expectedProfit00_two) + Math.round(expectedProfitABNC00_two) + Math.round(expectedProfitFA00_two)) + Math.round(ma_profit_1_two) + Math.round(ma_profit_2_two) + Math.round(ma_profit_3_two) + Math.round(ma_profit_4_two) + Math.round(ma_profit_5_two) + Math.round(ma_profit_6_two) + Math.round(ma_profit_7_two) + Math.round(ma_profit_11_two) + Math.round(ma_profit_00_two))) - (Math.round((Math.round(preexpectedProfit1_two) + Math.round(preexpectedProfitABNC1_two) + Math.round(preexpectedProfitFA1_two) + Math.round(preexpectedProfit2_two) + Math.round(preexpectedProfitABNC2_two) + Math.round(preexpectedProfitFA2_two) + Math.round(preexpectedProfit3_two) + Math.round(preexpectedProfitABNC3_two) + Math.round(preexpectedProfitFA3_two) + Math.round(preexpectedProfit4_two) + Math.round(preexpectedProfitABNC4_two) + Math.round(preexpectedProfitFA4_two) + Math.round(preexpectedProfit5_two) + Math.round(preexpectedProfitABNC5_two) + Math.round(preexpectedProfitFA5_two) + Math.round(preexpectedProfit6_two) + Math.round(preexpectedProfitABNC6_two) + Math.round(preexpectedProfitFA6_two) + Math.round(preexpectedProfit7_two) + Math.round(preexpectedProfitABNC7_two) + Math.round(preexpectedProfitFA7_two) + Math.round(preexpectedProfit11_two) + Math.round(preexpectedProfitABNC11_two) + Math.round(preexpectedProfitFA11_two) + Math.round(preexpectedProfit00_two) + Math.round(preexpectedProfitABNC00_two) + Math.round(preexpectedProfitFA00_two)) + Math.round(prev_ma_profit_1_two) + Math.round(prev_ma_profit_2_two) + Math.round(prev_ma_profit_3_two) +  Math.round(prev_ma_profit_4_two) + Math.round(prev_ma_profit_5_two) + Math.round(prev_ma_profit_6_two) + Math.round(prev_ma_profit_7_two) + Math.round(prev_ma_profit_11_two) + Math.round(prev_ma_profit_00_two))))) / ((Math.round(Math.round(revenueFinalTotal_two) + ma_revenue_1_two + ma_revenue_2_two + ma_revenue_3_two + ma_revenue_4_two + ma_revenue_5_two + ma_revenue_6_two + ma_revenue_7_two + ma_revenue_11_two + ma_revenue_00_two) - Math.round(prerevenueFinalTotal_two + prev_ma_revenue_1_two + prev_ma_revenue_2_two + prev_ma_revenue_3_two + prev_ma_revenue_4_two + prev_ma_revenue_5_two + prev_ma_revenue_6_two + prev_ma_revenue_7_two + prev_ma_revenue_11_two + prev_ma_revenue_00_two)))* 100).toFixed(1) + '%'}</th>
            </tr>
             </>
    } else if(value === 'generalOverhead'){
      return <>
               <tr>
               <th></th>
               <th style={{ textAlign: 'center'}}>Current Projection</th>
               <th style={{ textAlign: 'center'}}></th>
                <th style={{ textAlign: 'center'}}>Previous Projection</th>
                <th style={{ textAlign: 'center'}}>Change</th>
                <th style={{ textAlign: 'center'}}>Current Projection</th>
                <th style={{ textAlign: 'center'}}></th>
                <th style={{ textAlign: 'center'}}>Previous Projection</th>
                <th style={{ textAlign: 'center'}}>Change</th>
               </tr>
               <tr>
            <th style={{ textAlign: 'center'}}>Total G & A Cost</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead))) >= 0 ? '$' + Math.round((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{((Math.round((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) / Math.round(Math.round(revenueTotal) + Math.round(revenueABNCTotal) + Math.round(revenueFATotal) + ma_revenue_1 + ma_revenue_2 + ma_revenue_3 + ma_revenue_4 + ma_revenue_5 + ma_revenue_6 + ma_revenue_7 + ma_revenue_11 + ma_revenue_00)) * 100).toFixed(2) + '%'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead))) >= 0 ? '$' + Math.round((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(((Math.round((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead))) - Math.round((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)))) >= 0 ? '$' + ((Math.round((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead))) - Math.round((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead))).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + ((Math.round((divZeroOverhead + divRangeOverhead + divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead))) - Math.round((predivZeroOverhead + predivRangeOverhead + predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead))).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round((((divZeroOverhead_two)*1.03) + ((divRangeOverhead_two)*1.03) + ((divOneOverhead_two)*1.03) + ((divTwoOverhead_two)*1.03) + ((divThreeOverhead_two)*1.03) + ((divFourOverhead_two)*1.03) + ((divFiveOverhead_two)*1.03) + ((divSixOverhead_two)*1.03) + ((divSevenOverhead_two)*1.03) + ((divElevenOverhead_two)*1.03)))) >= 0 ? '$' + Math.round((((divZeroOverhead_two)*1.03) + ((divRangeOverhead_two)*1.03) + ((divOneOverhead_two)*1.03) + ((divTwoOverhead_two)*1.03) + ((divThreeOverhead_two)*1.03) + ((divFourOverhead_two)*1.03) + ((divFiveOverhead_two)*1.03) + ((divSixOverhead_two)*1.03) + ((divSevenOverhead_two)*1.03) + ((divElevenOverhead_two)*1.03))).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round((((divZeroOverhead_two)*1.03) + ((divRangeOverhead_two)*1.03) + ((divOneOverhead_two)*1.03) + ((divTwoOverhead_two)*1.03) + ((divThreeOverhead_two)*1.03) + ((divFourOverhead_two)*1.03) + ((divFiveOverhead_two)*1.03) + ((divSixOverhead_two)*1.03) + ((divSevenOverhead_two)*1.03) + ((divElevenOverhead_two)*1.03))).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{(((Math.round((divZeroOverhead_two)*1.03) + ((divRangeOverhead_two)*1.03) + ((divOneOverhead_two)*1.03) + ((divTwoOverhead_two)*1.03) + ((divThreeOverhead_two)*1.03) + ((divFourOverhead_two)*1.03) + ((divFiveOverhead_two)*1.03) + ((divSixOverhead_two)*1.03) + ((divSevenOverhead_two)*1.03) + ((divElevenOverhead_two)*1.03)) / Math.round(Math.round(revenueTotal_two) +  Math.round(revenueABNCTotal_two) + Math.round(revenueFATotal_two) + ma_revenue_1_two + ma_revenue_2_two + ma_revenue_3_two + ma_revenue_4_two + ma_revenue_5_two + ma_revenue_6_two + ma_revenue_7_two + ma_revenue_11_two + ma_revenue_00_two)) * 100).toFixed(2) + '%'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round((((predivZeroOverhead_two)*1.03) + ((predivRangeOverhead_two)*1.03) + ((predivOneOverhead_two)*1.03) + ((predivTwoOverhead_two)*1.03) + ((predivThreeOverhead_two)*1.03) + ((predivFourOverhead_two)*1.03) + ((predivFiveOverhead_two)*1.03) + ((predivSixOverhead_two)*1.03) + ((predivSevenOverhead_two)*1.03) + ((predivElevenOverhead_two)*1.03)))) >= 0 ? '$' + Math.round((((predivZeroOverhead_two)*1.03) + ((predivRangeOverhead_two)*1.03) + ((predivOneOverhead_two)*1.03) + ((predivTwoOverhead_two)*1.03) + ((predivThreeOverhead_two)*1.03) + ((predivFourOverhead_two)*1.03) + ((predivFiveOverhead_two)*1.03) + ((predivSixOverhead_two)*1.03) + ((predivSevenOverhead_two)*1.03) + ((predivElevenOverhead_two)*1.03))).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round((((predivZeroOverhead_two)*1.03) + ((predivRangeOverhead_two)*1.03) + ((predivOneOverhead_two)*1.03) + ((predivTwoOverhead_two)*1.03) + ((predivThreeOverhead_two)*1.03) + ((predivFourOverhead_two)*1.03) + ((predivFiveOverhead_two)*1.03) + ((predivSixOverhead_two)*1.03) + ((predivSevenOverhead_two)*1.03) + ((predivElevenOverhead_two)*1.03))).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign((Math.round((((divZeroOverhead_two)*1.03) + ((divRangeOverhead_two)*1.03) + ((divOneOverhead_two)*1.03) + ((divTwoOverhead_two)*1.03) + ((divThreeOverhead_two)*1.03) + ((divFourOverhead_two)*1.03) + ((divFiveOverhead_two)*1.03) + ((divSixOverhead_two)*1.03) + ((divSevenOverhead_two)*1.03) + ((divElevenOverhead_two)*1.03))) - Math.round((((predivZeroOverhead_two)*1.03) + ((predivRangeOverhead_two)*1.03) + ((predivOneOverhead_two)*1.03) + ((predivTwoOverhead_two)*1.03) + ((predivThreeOverhead_two)*1.03) + ((predivFourOverhead_two)*1.03) + ((predivFiveOverhead_two)*1.03) + ((predivSixOverhead_two)*1.03) + ((predivSevenOverhead_two)*1.03) + ((predivElevenOverhead_two)*1.03))))) >= 0 ? '$' + (Math.round((((divZeroOverhead_two)*1.03) + ((divRangeOverhead_two)*1.03) + ((divOneOverhead_two)*1.03) + ((divTwoOverhead_two)*1.03) + ((divThreeOverhead_two)*1.03) + ((divFourOverhead_two)*1.03) + ((divFiveOverhead_two)*1.03) + ((divSixOverhead_two)*1.03) + ((divSevenOverhead_two)*1.03) + ((divElevenOverhead_two)*1.03))) - Math.round((((predivZeroOverhead_two)*1.03) + ((predivRangeOverhead_two)*1.03) + ((predivOneOverhead_two)*1.03) + ((predivTwoOverhead_two)*1.03) + ((predivThreeOverhead_two)*1.03) + ((predivFourOverhead_two)*1.03) + ((predivFiveOverhead_two)*1.03) + ((predivSixOverhead_two)*1.03) + ((predivSevenOverhead_two)*1.03) + ((predivElevenOverhead_two)*1.03)))).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + (Math.round((((divZeroOverhead_two)*1.03) + ((divRangeOverhead_two)*1.03) + ((divOneOverhead_two)*1.03) + ((divTwoOverhead_two)*1.03) + ((divThreeOverhead_two)*1.03) + ((divFourOverhead_two)*1.03) + ((divFiveOverhead_two)*1.03) + ((divSixOverhead_two)*1.03) + ((divSevenOverhead_two)*1.03) + ((divElevenOverhead_two)*1.03))) - Math.round((((predivZeroOverhead_two)*1.03) + ((predivRangeOverhead_two)*1.03) + ((predivOneOverhead_two)*1.03) + ((predivTwoOverhead_two)*1.03) + ((predivThreeOverhead_two)*1.03) + ((predivFourOverhead_two)*1.03) + ((predivFiveOverhead_two)*1.03) + ((predivSixOverhead_two)*1.03) + ((predivSevenOverhead_two)*1.03) + ((predivElevenOverhead_two)*1.03)))).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
            </tr>
            <tr>
            <th style={{ textAlign: 'center'}}>Direct Overhead Expenses</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round((divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead))) >= 0 ? '$' + Math.round((divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round((divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}></th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round((predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead))) >= 0 ? '$' + Math.round((predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round((predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round(((divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) - ((predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead)))) >= 0 ? '$' + Math.round(((divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) - ((predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead))).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round(((divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead) - (divOneOverhead + divTwoOverhead + divThreeOverhead + divFourOverhead + divFiveOverhead + divSixOverhead + divSevenOverhead + divElevenOverhead)) - ((predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead) - (predivOneOverhead + predivTwoOverhead + predivThreeOverhead + predivFourOverhead + predivFiveOverhead + predivSixOverhead + predivSevenOverhead + predivElevenOverhead))).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round((divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03) - (divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03))) >= 0 ? '$' + Math.round((divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03) - (divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03)).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round((divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03) - (divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03)).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}></th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round((predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03) - (predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03))) >= 0 ? '$' + Math.round((predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03) - (predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03)).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round((predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03) - (predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03)).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign((Math.round((divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03) - (divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03)) - Math.round((predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03) - (predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03)))) >= 0 ? '$' + (Math.round((divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03) - (divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03)) - Math.round((predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03) - (predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03))).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + (Math.round((divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03) - (divOneOverhead_two*1.03 + divTwoOverhead_two*1.03 + divThreeOverhead_two*1.03 + divFourOverhead_two*1.03 + divFiveOverhead_two*1.03 + divSixOverhead_two*1.03 + divSevenOverhead_two*1.03 + divElevenOverhead_two*1.03)) - Math.round((predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03) - (predivOneOverhead_two*1.03 + predivTwoOverhead_two*1.03 + predivThreeOverhead_two*1.03 + predivFourOverhead_two*1.03 + predivFiveOverhead_two*1.03 + predivSixOverhead_two*1.03 + predivSevenOverhead_two*1.03 + predivElevenOverhead_two*1.03))).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
            </tr>
            <tr>
            <th style={{ textAlign: 'center'}}>50% of Rev. Allocation</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(fiftyPerRev - fiftyPerRev) >= 0 ? '$' + (fiftyPerRev - fiftyPerRev).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + (fiftyPerRev - fiftyPerRev).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}></th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(prefiftyPerRev - prefiftyPerRev) >= 0 ? '$' + (prefiftyPerRev - prefiftyPerRev).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + (prefiftyPerRev - prefiftyPerRev).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign((fiftyPerRev - fiftyPerRev) - (prefiftyPerRev - prefiftyPerRev)) >= 0 ? '$' + ((fiftyPerRev - fiftyPerRev) - (prefiftyPerRev - prefiftyPerRev)).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + ((fiftyPerRev - fiftyPerRev) - (prefiftyPerRev - prefiftyPerRev)).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(fiftyPerRev_two - fiftyPerRev_two) >= 0 ? '$' + (fiftyPerRev_two - fiftyPerRev_two).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + (fiftyPerRev_two - fiftyPerRev_two).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}></th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(prefiftyPerRev_two - prefiftyPerRev_two) >= 0 ? '$' + (prefiftyPerRev_two - prefiftyPerRev_two).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + (prefiftyPerRev_two - prefiftyPerRev_two).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(((fiftyPerRev_two - fiftyPerRev_two) - (prefiftyPerRev_two - prefiftyPerRev_two))) >= 0 ? '$' + ((fiftyPerRev_two - fiftyPerRev_two) - (prefiftyPerRev_two - prefiftyPerRev_two)).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + ((fiftyPerRev_two - fiftyPerRev_two) - (prefiftyPerRev_two - prefiftyPerRev_two)).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
            </tr>
            <tr>
            <th style={{ textAlign: 'center'}}>50% of GM Allocation</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(netCostConsolidated) >= 0 ? '$' + (netCostConsolidated).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + (netCostConsolidated).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}></th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(prenetCostConsolidated) >= 0 ? '$' + (prenetCostConsolidated).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + (prenetCostConsolidated).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(netCostConsolidated - prenetCostConsolidated) >= 0 ? '$' + (netCostConsolidated - prenetCostConsolidated).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + (netCostConsolidated - prenetCostConsolidated).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(netCostConsolidated_two) >= 0 ? '$' + (netCostConsolidated_two).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + (netCostConsolidated_two).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}></th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(prenetCostConsolidated_two) >= 0 ? '$' + (prenetCostConsolidated_two).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + (prenetCostConsolidated_two).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(netCostConsolidated_two - prenetCostConsolidated_two) >= 0 ? '$' +  (netCostConsolidated_two - prenetCostConsolidated_two).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + (netCostConsolidated_two - prenetCostConsolidated_two).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th> 
            </tr>
            <tr>
            <th style={{ textAlign: 'center'}}>Net G & A Cost</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(netGAConsolidatedCost) >= 0 ? '$' + Math.round(netGAConsolidatedCost).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.rouud(netGAConsolidatedCost).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}></th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(prenetGAConsolidatedCost) >= 0 ? '$' + Math.round(prenetGAConsolidatedCost).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round(prenetGAConsolidatedCost).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(netGAConsolidatedCost - prenetGAConsolidatedCost) >= 0 ? '$' + Math.round(netGAConsolidatedCost - prenetGAConsolidatedCost).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round(netGAConsolidatedCost - prenetGAConsolidatedCost).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(netGAConsolidatedCost_two) >= 0 ? '$' + Math.round(netGAConsolidatedCost_two).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round(netGAConsolidatedCost_two).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}></th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(prenetGAConsolidatedCost_two) >= 0 ? '$' + Math.round(prenetGAConsolidatedCost_two).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round(prenetGAConsolidatedCost_two).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(netGAConsolidatedCost_two - prenetGAConsolidatedCost_two) >= 0 ? '$' + Math.round(netGAConsolidatedCost_two - prenetGAConsolidatedCost_two).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round(netGAConsolidatedCost_two - prenetGAConsolidatedCost_two).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th> 
            </tr>
            <tr>
            <th style={{ textAlign: 'center'}}>% Rev</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{(((revenueFinalTotal) !== 0 ? ((netGAConsolidatedCost) / (revenueFinalTotal)) : 0) * 100).toFixed(1) + '%'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}></th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{(((prerevenueFinalTotal) !== 0 ? ((prenetGAConsolidatedCost) / (prerevenueFinalTotal)) : 0) * 100).toFixed(1) + '%'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{((Math.round((netGAConsolidatedCost ? netGAConsolidatedCost : 0) - prenetGAConsolidatedCost)) / ((Math.round(revenueFinalTotal + ma_revenue_1 + ma_revenue_2 + ma_revenue_3 + ma_revenue_4 + ma_revenue_5 + ma_revenue_6 + ma_revenue_7 + ma_revenue_11 + ma_revenue_00) - Math.round(prerevenueFinalTotal + prev_ma_revenue_1 + prev_ma_revenue_2 + prev_ma_revenue_3 + prev_ma_revenue_4 + prev_ma_revenue_5 + prev_ma_revenue_6 + prev_ma_revenue_7 + prev_ma_revenue_11 + prev_ma_revenue_00)))* 100).toFixed(1) + '%'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{(((revenueFinalTotal_two) !== 0 ? ((netGAConsolidatedCost_two) / (revenueFinalTotal_two)) : 0) * 100).toFixed(1) + '%'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}></th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{(((prerevenueFinalTotal_two) !== 0 ? ((prenetGAConsolidatedCost_two) / (prerevenueFinalTotal_two)) : 0) * 100).toFixed(1) + '%'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{((Math.round((netGAConsolidatedCost_two ? netGAConsolidatedCost_two : 0) - prenetGAConsolidatedCost_two)) / ((Math.round(revenueFinalTotal_two + ma_revenue_1_two + ma_revenue_2_two + ma_revenue_3_two + ma_revenue_4_two + ma_revenue_5_two + ma_revenue_6_two + ma_revenue_7_two + ma_revenue_11_two + ma_revenue_00_two) - Math.round(prerevenueFinalTotal_two + prev_ma_revenue_1_two + prev_ma_revenue_2_two + prev_ma_revenue_3_two + prev_ma_revenue_4_two + prev_ma_revenue_5_two + prev_ma_revenue_6_two + prev_ma_revenue_7_two + prev_ma_revenue_11_two + prev_ma_revenue_00_two)))* 100).toFixed(1) + '%'}</th>
            </tr>
             </>
    }else if(value === 'incomeOperations'){
         return <>
          <tr>
          <th></th>
               <th style={{ textAlign: 'center'}}>Current Projection</th>
               <th style={{ textAlign: 'center'}}></th> 
                <th style={{ textAlign: 'center'}}>Previous Projection</th>
                <th style={{ textAlign: 'center'}}>Change</th>
                <th style={{ textAlign: 'center'}}>Current Projection</th>
                <th style={{ textAlign: 'center'}}></th>
                <th style={{ textAlign: 'center'}}>Previous Projection</th>
                <th style={{ textAlign: 'center'}}>Change</th>
               </tr>
         <tr>
            <th style={{ textAlign: 'center'}}>Net Operating Income</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round(((Math.round(expectedProfit1) + Math.round(expectedProfitABNC1) + Math.round(expectedProfitFA1) + Math.round(expectedProfit2) + Math.round(expectedProfitABNC2) + Math.round(expectedProfitFA2) + Math.round(expectedProfit3) + Math.round(expectedProfitABNC3) + Math.round(expectedProfitFA3) + Math.round(expectedProfit4) + Math.round(expectedProfitABNC4) + Math.round(expectedProfitFA4) + Math.round(expectedProfit5) + Math.round(expectedProfitABNC5) + Math.round(expectedProfitFA5) + Math.round(expectedProfit6) + Math.round(expectedProfitABNC6) + Math.round(expectedProfitFA6) + Math.round(expectedProfit7) + Math.round(expectedProfitABNC7) + Math.round(expectedProfitFA7) + Math.round(expectedProfit11) + Math.round(expectedProfitABNC11) + Math.round(expectedProfitFA11) + Math.round(expectedProfit00) + Math.round(expectedProfitABNC00) + Math.round(expectedProfitFA00)) + Math.round(ma_profit_1) + Math.round(ma_profit_2) + Math.round(ma_profit_3) + Math.round(ma_profit_4) + Math.round(ma_profit_5) + Math.round(ma_profit_6) + Math.round(ma_profit_7) + Math.round(ma_profit_11) + Math.round(ma_profit_00)) -  Math.round(netGAConsolidatedCost))) >= 0 ? '$' + Math.round(((Math.round(expectedProfit1) + Math.round(expectedProfitABNC1) + Math.round(expectedProfitFA1) + Math.round(expectedProfit2) + Math.round(expectedProfitABNC2) + Math.round(expectedProfitFA2) + Math.round(expectedProfit3) + Math.round(expectedProfitABNC3) + Math.round(expectedProfitFA3) + Math.round(expectedProfit4) + Math.round(expectedProfitABNC4) + Math.round(expectedProfitFA4) + Math.round(expectedProfit5) + Math.round(expectedProfitABNC5) + Math.round(expectedProfitFA5) + Math.round(expectedProfit6) + Math.round(expectedProfitABNC6) + Math.round(expectedProfitFA6) + Math.round(expectedProfit7) + Math.round(expectedProfitABNC7) + Math.round(expectedProfitFA7) + Math.round(expectedProfit11) + Math.round(expectedProfitABNC11) + Math.round(expectedProfitFA11) + Math.round(expectedProfit00) + Math.round(expectedProfitABNC00) + Math.round(expectedProfitFA00)) + Math.round(ma_profit_1) + Math.round(ma_profit_2) + Math.round(ma_profit_3) + Math.round(ma_profit_4) + Math.round(ma_profit_5) + Math.round(ma_profit_6) + Math.round(ma_profit_7) + Math.round(ma_profit_11) + Math.round(ma_profit_00)) -  Math.round(netGAConsolidatedCost)).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round(((Math.round(expectedProfit1) + Math.round(expectedProfitABNC1) + Math.round(expectedProfitFA1) + Math.round(expectedProfit2) + Math.round(expectedProfitABNC2) + Math.round(expectedProfitFA2) + Math.round(expectedProfit3) + Math.round(expectedProfitABNC3) + Math.round(expectedProfitFA3) + Math.round(expectedProfit4) + Math.round(expectedProfitABNC4) + Math.round(expectedProfitFA4) + Math.round(expectedProfit5) + Math.round(expectedProfitABNC5) + Math.round(expectedProfitFA5) + Math.round(expectedProfit6) + Math.round(expectedProfitABNC6) + Math.round(expectedProfitFA6) + Math.round(expectedProfit7) + Math.round(expectedProfitABNC7) + Math.round(expectedProfitFA7) + Math.round(expectedProfit11) + Math.round(expectedProfitABNC11) + Math.round(expectedProfitFA11) + Math.round(expectedProfit00) + Math.round(expectedProfitABNC00) + Math.round(expectedProfitFA00)) + Math.round(ma_profit_1) + Math.round(ma_profit_2) + Math.round(ma_profit_3) + Math.round(ma_profit_4) + Math.round(ma_profit_5) + Math.round(ma_profit_6) + Math.round(ma_profit_7) + Math.round(ma_profit_11) + Math.round(ma_profit_00)) -  Math.round(netGAConsolidatedCost)).toLocaleString(undefined, {maximumFractionDigits:2}) + ')' }</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{((Math.round(((Math.round(expectedProfit1) + Math.round(expectedProfitABNC1) + Math.round(expectedProfitFA1) + Math.round(expectedProfit2) + Math.round(expectedProfitABNC2) + Math.round(expectedProfitFA2) + Math.round(expectedProfit3) + Math.round(expectedProfitABNC3) + Math.round(expectedProfitFA3) + Math.round(expectedProfit4) + Math.round(expectedProfitABNC4) + Math.round(expectedProfitFA4) + Math.round(expectedProfit5) + Math.round(expectedProfitABNC5) + Math.round(expectedProfitFA5) + Math.round(expectedProfit6) + Math.round(expectedProfitABNC6) + Math.round(expectedProfitFA6) + Math.round(expectedProfit7) + Math.round(expectedProfitABNC7) + Math.round(expectedProfitFA7) + Math.round(expectedProfit11) + Math.round(expectedProfitABNC11) + Math.round(expectedProfitFA11) + Math.round(expectedProfit00) + Math.round(expectedProfitABNC00) + Math.round(expectedProfitFA00)) + Math.round(ma_profit_1) + Math.round(ma_profit_2) + Math.round(ma_profit_3) + Math.round(ma_profit_4) + Math.round(ma_profit_5) + Math.round(ma_profit_6) + Math.round(ma_profit_7) + Math.round(ma_profit_11) + Math.round(ma_profit_00)) -  Math.round(netGAConsolidatedCost)) / Math.round(Math.round(revenueTotal) + Math.round(revenueABNCTotal) + Math.round(revenueFATotal) + ma_revenue_1 + ma_revenue_2 + ma_revenue_3 + ma_revenue_4 + ma_revenue_5 + ma_revenue_6 + ma_revenue_7 + ma_revenue_11 + ma_revenue_00)) * 100).toFixed(2) + '%' }</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign((((Math.round(preexpectedProfit1) + Math.round(preexpectedProfitABNC1) + Math.round(preexpectedProfitFA1) + Math.round(preexpectedProfit2) + Math.round(preexpectedProfitABNC2) + Math.round(preexpectedProfitFA2) + Math.round(preexpectedProfit3) + Math.round(preexpectedProfitABNC3) + Math.round(preexpectedProfitFA3) + Math.round(preexpectedProfit4) + Math.round(preexpectedProfitABNC4) + Math.round(preexpectedProfitFA4) + Math.round(preexpectedProfit5) + Math.round(preexpectedProfitABNC5) + Math.round(preexpectedProfitFA5) + Math.round(preexpectedProfit6) + Math.round(preexpectedProfitABNC6) + Math.round(preexpectedProfitFA6) + Math.round(preexpectedProfit7) + Math.round(preexpectedProfitABNC7) + Math.round(preexpectedProfitFA7) + Math.round(preexpectedProfit11) + Math.round(preexpectedProfitABNC11) + Math.round(preexpectedProfitFA11) + Math.round(preexpectedProfit00) + Math.round(preexpectedProfitABNC00) + Math.round(preexpectedProfitFA00)) + Math.round(prev_ma_profit_1) + Math.round(prev_ma_profit_2) + Math.round(prev_ma_profit_3) +  Math.round(prev_ma_profit_4) + Math.round(prev_ma_profit_5) + Math.round(prev_ma_profit_6) + Math.round(prev_ma_profit_7) + Math.round(prev_ma_profit_11) + Math.round(prev_ma_profit_00)) - Math.round(prenetGAConsolidatedCost))) >= 0 ? '$' + (((Math.round(preexpectedProfit1) + Math.round(preexpectedProfitABNC1) + Math.round(preexpectedProfitFA1) + Math.round(preexpectedProfit2) + Math.round(preexpectedProfitABNC2) + Math.round(preexpectedProfitFA2) + Math.round(preexpectedProfit3) + Math.round(preexpectedProfitABNC3) + Math.round(preexpectedProfitFA3) + Math.round(preexpectedProfit4) + Math.round(preexpectedProfitABNC4) + Math.round(preexpectedProfitFA4) + Math.round(preexpectedProfit5) + Math.round(preexpectedProfitABNC5) + Math.round(preexpectedProfitFA5) + Math.round(preexpectedProfit6) + Math.round(preexpectedProfitABNC6) + Math.round(preexpectedProfitFA6) + Math.round(preexpectedProfit7) + Math.round(preexpectedProfitABNC7) + Math.round(preexpectedProfitFA7) + Math.round(preexpectedProfit11) + Math.round(preexpectedProfitABNC11) + Math.round(preexpectedProfitFA11) + Math.round(preexpectedProfit00) + Math.round(preexpectedProfitABNC00) + Math.round(preexpectedProfitFA00)) + Math.round(prev_ma_profit_1) + Math.round(prev_ma_profit_2) + Math.round(prev_ma_profit_3) +  Math.round(prev_ma_profit_4) + Math.round(prev_ma_profit_5) + Math.round(prev_ma_profit_6) + Math.round(prev_ma_profit_7) + Math.round(prev_ma_profit_11) + Math.round(prev_ma_profit_00)) - Math.round(prenetGAConsolidatedCost)).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + (((Math.round(preexpectedProfit1) + Math.round(preexpectedProfitABNC1) + Math.round(preexpectedProfitFA1) + Math.round(preexpectedProfit2) + Math.round(preexpectedProfitABNC2) + Math.round(preexpectedProfitFA2) + Math.round(preexpectedProfit3) + Math.round(preexpectedProfitABNC3) + Math.round(preexpectedProfitFA3) + Math.round(preexpectedProfit4) + Math.round(preexpectedProfitABNC4) + Math.round(preexpectedProfitFA4) + Math.round(preexpectedProfit5) + Math.round(preexpectedProfitABNC5) + Math.round(preexpectedProfitFA5) + Math.round(preexpectedProfit6) + Math.round(preexpectedProfitABNC6) + Math.round(preexpectedProfitFA6) + Math.round(preexpectedProfit7) + Math.round(preexpectedProfitABNC7) + Math.round(preexpectedProfitFA7) + Math.round(preexpectedProfit11) + Math.round(preexpectedProfitABNC11) + Math.round(preexpectedProfitFA11) + Math.round(preexpectedProfit00) + Math.round(preexpectedProfitABNC00) + Math.round(preexpectedProfitFA00)) + Math.round(prev_ma_profit_1) + Math.round(prev_ma_profit_2) + Math.round(prev_ma_profit_3) +  Math.round(prev_ma_profit_4) + Math.round(prev_ma_profit_5) + Math.round(prev_ma_profit_6) + Math.round(prev_ma_profit_7) + Math.round(prev_ma_profit_11) + Math.round(prev_ma_profit_00)) - Math.round(prenetGAConsolidatedCost)).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(((Math.round(((Math.round(expectedProfit1) + Math.round(expectedProfitABNC1) + Math.round(expectedProfitFA1) + Math.round(expectedProfit2) + Math.round(expectedProfitABNC2) + Math.round(expectedProfitFA2) + Math.round(expectedProfit3) + Math.round(expectedProfitABNC3) + Math.round(expectedProfitFA3) + Math.round(expectedProfit4) + Math.round(expectedProfitABNC4) + Math.round(expectedProfitFA4) + Math.round(expectedProfit5) + Math.round(expectedProfitABNC5) + Math.round(expectedProfitFA5) + Math.round(expectedProfit6) + Math.round(expectedProfitABNC6) + Math.round(expectedProfitFA6) + Math.round(expectedProfit7) + Math.round(expectedProfitABNC7) + Math.round(expectedProfitFA7) + Math.round(expectedProfit11) + Math.round(expectedProfitABNC11) + Math.round(expectedProfitFA11) + Math.round(expectedProfit00) + Math.round(expectedProfitABNC00) + Math.round(expectedProfitFA00)) + Math.round(ma_profit_1) + Math.round(ma_profit_2) + Math.round(ma_profit_3) + Math.round(ma_profit_4) + Math.round(ma_profit_5) + Math.round(ma_profit_6) + Math.round(ma_profit_7) + Math.round(ma_profit_11) + Math.round(ma_profit_00)) -  Math.round(netGAConsolidatedCost))) - (((Math.round(preexpectedProfit1) + Math.round(preexpectedProfitABNC1) + Math.round(preexpectedProfitFA1) + Math.round(preexpectedProfit2) + Math.round(preexpectedProfitABNC2) + Math.round(preexpectedProfitFA2) + Math.round(preexpectedProfit3) + Math.round(preexpectedProfitABNC3) + Math.round(preexpectedProfitFA3) + Math.round(preexpectedProfit4) + Math.round(preexpectedProfitABNC4) + Math.round(preexpectedProfitFA4) + Math.round(preexpectedProfit5) + Math.round(preexpectedProfitABNC5) + Math.round(preexpectedProfitFA5) + Math.round(preexpectedProfit6) + Math.round(preexpectedProfitABNC6) + Math.round(preexpectedProfitFA6) + Math.round(preexpectedProfit7) + Math.round(preexpectedProfitABNC7) + Math.round(preexpectedProfitFA7) + Math.round(preexpectedProfit11) + Math.round(preexpectedProfitABNC11) + Math.round(preexpectedProfitFA11) + Math.round(preexpectedProfit00) + Math.round(preexpectedProfitABNC00) + Math.round(preexpectedProfitFA00)) + Math.round(prev_ma_profit_1) + Math.round(prev_ma_profit_2) + Math.round(prev_ma_profit_3) +  Math.round(prev_ma_profit_4) + Math.round(prev_ma_profit_5) + Math.round(prev_ma_profit_6) + Math.round(prev_ma_profit_7) + Math.round(prev_ma_profit_11) + Math.round(prev_ma_profit_00)) - Math.round(prenetGAConsolidatedCost)))) >= 0 ? '$' + ((Math.round(((Math.round(expectedProfit1) + Math.round(expectedProfitABNC1) + Math.round(expectedProfitFA1) + Math.round(expectedProfit2) + Math.round(expectedProfitABNC2) + Math.round(expectedProfitFA2) + Math.round(expectedProfit3) + Math.round(expectedProfitABNC3) + Math.round(expectedProfitFA3) + Math.round(expectedProfit4) + Math.round(expectedProfitABNC4) + Math.round(expectedProfitFA4) + Math.round(expectedProfit5) + Math.round(expectedProfitABNC5) + Math.round(expectedProfitFA5) + Math.round(expectedProfit6) + Math.round(expectedProfitABNC6) + Math.round(expectedProfitFA6) + Math.round(expectedProfit7) + Math.round(expectedProfitABNC7) + Math.round(expectedProfitFA7) + Math.round(expectedProfit11) + Math.round(expectedProfitABNC11) + Math.round(expectedProfitFA11) + Math.round(expectedProfit00) + Math.round(expectedProfitABNC00) + Math.round(expectedProfitFA00)) + Math.round(ma_profit_1) + Math.round(ma_profit_2) + Math.round(ma_profit_3) + Math.round(ma_profit_4) + Math.round(ma_profit_5) + Math.round(ma_profit_6) + Math.round(ma_profit_7) + Math.round(ma_profit_11) + Math.round(ma_profit_00)) -  Math.round(netGAConsolidatedCost))) - (((Math.round(preexpectedProfit1) + Math.round(preexpectedProfitABNC1) + Math.round(preexpectedProfitFA1) + Math.round(preexpectedProfit2) + Math.round(preexpectedProfitABNC2) + Math.round(preexpectedProfitFA2) + Math.round(preexpectedProfit3) + Math.round(preexpectedProfitABNC3) + Math.round(preexpectedProfitFA3) + Math.round(preexpectedProfit4) + Math.round(preexpectedProfitABNC4) + Math.round(preexpectedProfitFA4) + Math.round(preexpectedProfit5) + Math.round(preexpectedProfitABNC5) + Math.round(preexpectedProfitFA5) + Math.round(preexpectedProfit6) + Math.round(preexpectedProfitABNC6) + Math.round(preexpectedProfitFA6) + Math.round(preexpectedProfit7) + Math.round(preexpectedProfitABNC7) + Math.round(preexpectedProfitFA7) + Math.round(preexpectedProfit11) + Math.round(preexpectedProfitABNC11) + Math.round(preexpectedProfitFA11) + Math.round(preexpectedProfit00) + Math.round(preexpectedProfitABNC00) + Math.round(preexpectedProfitFA00)) + Math.round(prev_ma_profit_1) + Math.round(prev_ma_profit_2) + Math.round(prev_ma_profit_3) +  Math.round(prev_ma_profit_4) + Math.round(prev_ma_profit_5) + Math.round(prev_ma_profit_6) + Math.round(prev_ma_profit_7) + Math.round(prev_ma_profit_11) + Math.round(prev_ma_profit_00)) - Math.round(prenetGAConsolidatedCost))).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + ((Math.round(((Math.round(expectedProfit1) + Math.round(expectedProfitABNC1) + Math.round(expectedProfitFA1) + Math.round(expectedProfit2) + Math.round(expectedProfitABNC2) + Math.round(expectedProfitFA2) + Math.round(expectedProfit3) + Math.round(expectedProfitABNC3) + Math.round(expectedProfitFA3) + Math.round(expectedProfit4) + Math.round(expectedProfitABNC4) + Math.round(expectedProfitFA4) + Math.round(expectedProfit5) + Math.round(expectedProfitABNC5) + Math.round(expectedProfitFA5) + Math.round(expectedProfit6) + Math.round(expectedProfitABNC6) + Math.round(expectedProfitFA6) + Math.round(expectedProfit7) + Math.round(expectedProfitABNC7) + Math.round(expectedProfitFA7) + Math.round(expectedProfit11) + Math.round(expectedProfitABNC11) + Math.round(expectedProfitFA11) + Math.round(expectedProfit00) + Math.round(expectedProfitABNC00) + Math.round(expectedProfitFA00)) + Math.round(ma_profit_1) + Math.round(ma_profit_2) + Math.round(ma_profit_3) + Math.round(ma_profit_4) + Math.round(ma_profit_5) + Math.round(ma_profit_6) + Math.round(ma_profit_7) + Math.round(ma_profit_11) + Math.round(ma_profit_00)) -  Math.round(netGAConsolidatedCost))) - (((Math.round(preexpectedProfit1) + Math.round(preexpectedProfitABNC1) + Math.round(preexpectedProfitFA1) + Math.round(preexpectedProfit2) + Math.round(preexpectedProfitABNC2) + Math.round(preexpectedProfitFA2) + Math.round(preexpectedProfit3) + Math.round(preexpectedProfitABNC3) + Math.round(preexpectedProfitFA3) + Math.round(preexpectedProfit4) + Math.round(preexpectedProfitABNC4) + Math.round(preexpectedProfitFA4) + Math.round(preexpectedProfit5) + Math.round(preexpectedProfitABNC5) + Math.round(preexpectedProfitFA5) + Math.round(preexpectedProfit6) + Math.round(preexpectedProfitABNC6) + Math.round(preexpectedProfitFA6) + Math.round(preexpectedProfit7) + Math.round(preexpectedProfitABNC7) + Math.round(preexpectedProfitFA7) + Math.round(preexpectedProfit11) + Math.round(preexpectedProfitABNC11) + Math.round(preexpectedProfitFA11) + Math.round(preexpectedProfit00) + Math.round(preexpectedProfitABNC00) + Math.round(preexpectedProfitFA00)) + Math.round(prev_ma_profit_1) + Math.round(prev_ma_profit_2) + Math.round(prev_ma_profit_3) +  Math.round(prev_ma_profit_4) + Math.round(prev_ma_profit_5) + Math.round(prev_ma_profit_6) + Math.round(prev_ma_profit_7) + Math.round(prev_ma_profit_11) + Math.round(prev_ma_profit_00)) - Math.round(prenetGAConsolidatedCost))).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round(parseFloat(totalJobProfitOne_two) - parseFloat(netGACostDiv01_two) + parseFloat(totalJobProfitTwo_two) - parseFloat(netGACostDiv02_two) + parseFloat(totalJobProfitThree_two) - parseFloat(netGACostDiv03_two) + parseFloat(totalJobProfitFour_two) - parseFloat(netGACostDiv04_two) + parseFloat(totalJobProfitFive_two) - parseFloat(netGACostDiv05_two) + parseFloat(totalJobProfitSix_two) - parseFloat(netGACostDiv06_two) + parseFloat(totalJobProfitSeven_two) - parseFloat(netGACostDiv07_two) + parseFloat(totalJobProfitEleven_two) - parseFloat(netGACostDiv11_two) + parseFloat(totalJobProfitZero_two) - parseFloat(netGACorporateCost_two))) >= 0 ? '$' + Math.round(parseFloat(totalJobProfitOne_two) - parseFloat(netGACostDiv01_two) + parseFloat(totalJobProfitTwo_two) - parseFloat(netGACostDiv02_two) + parseFloat(totalJobProfitThree_two) - parseFloat(netGACostDiv03_two) + parseFloat(totalJobProfitFour_two) - parseFloat(netGACostDiv04_two) + parseFloat(totalJobProfitFive_two) - parseFloat(netGACostDiv05_two) + parseFloat(totalJobProfitSix_two) - parseFloat(netGACostDiv06_two) + parseFloat(totalJobProfitSeven_two) - parseFloat(netGACostDiv07_two) + parseFloat(totalJobProfitEleven_two) - parseFloat(netGACostDiv11_two) + parseFloat(totalJobProfitZero_two) - parseFloat(netGACorporateCost_two)).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round(parseFloat(totalJobProfitOne_two) - parseFloat(netGACostDiv01_two) + parseFloat(totalJobProfitTwo_two) - parseFloat(netGACostDiv02_two) + parseFloat(totalJobProfitThree_two) - parseFloat(netGACostDiv03_two) + parseFloat(totalJobProfitFour_two) - parseFloat(netGACostDiv04_two) + parseFloat(totalJobProfitFive_two) - parseFloat(netGACostDiv05_two) + parseFloat(totalJobProfitSix_two) - parseFloat(netGACostDiv06_two) + parseFloat(totalJobProfitSeven_two) - parseFloat(netGACostDiv07_two) + parseFloat(totalJobProfitEleven_two) - parseFloat(netGACostDiv11_two) + parseFloat(totalJobProfitZero_two) - parseFloat(netGACorporateCost_two)).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{((Math.round(parseFloat(totalJobProfitOne_two) - parseFloat(netGACostDiv01_two) + parseFloat(totalJobProfitTwo_two) - parseFloat(netGACostDiv02_two) + parseFloat(totalJobProfitThree_two) - parseFloat(netGACostDiv03_two) + parseFloat(totalJobProfitFour_two) - parseFloat(netGACostDiv04_two) + parseFloat(totalJobProfitFive_two) - parseFloat(netGACostDiv05_two) + parseFloat(totalJobProfitSix_two) - parseFloat(netGACostDiv06_two) + parseFloat(totalJobProfitSeven_two) - parseFloat(netGACostDiv07_two) + parseFloat(totalJobProfitEleven_two) - parseFloat(netGACostDiv11_two) + parseFloat(totalJobProfitZero_two) - parseFloat(netGACorporateCost_two)) / Math.round(Math.round(revenueTotal_two) +  Math.round(revenueABNCTotal_two) + Math.round(revenueFATotal_two) + ma_revenue_1_two + ma_revenue_2_two + ma_revenue_3_two + ma_revenue_4_two + ma_revenue_5_two + ma_revenue_6_two + ma_revenue_7_two + ma_revenue_11_two + ma_revenue_00_two)) * 100).toFixed(2) + '%'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round(parseFloat(pretotalJobProfitOne_two) - parseFloat(prenetGACostDiv01_two) + parseFloat(pretotalJobProfitTwo_two) - parseFloat(prenetGACostDiv02_two) + parseFloat(pretotalJobProfitThree_two) - parseFloat(prenetGACostDiv03_two) + parseFloat(pretotalJobProfitFour_two) - parseFloat(prenetGACostDiv04_two) + parseFloat(pretotalJobProfitFive_two) - parseFloat(prenetGACostDiv05_two) + parseFloat(pretotalJobProfitSix_two) - parseFloat(prenetGACostDiv06_two) + parseFloat(pretotalJobProfitSeven_two) - parseFloat(prenetGACostDiv07_two) + parseFloat(pretotalJobProfitEleven_two) - parseFloat(prenetGACostDiv11_two) + parseFloat(pretotalJobProfitZero_two) - parseFloat(prenetGACorporateCost_two))) >= 0 ? '$' + Math.round(parseFloat(pretotalJobProfitOne_two) - parseFloat(prenetGACostDiv01_two) + parseFloat(pretotalJobProfitTwo_two) - parseFloat(prenetGACostDiv02_two) + parseFloat(pretotalJobProfitThree_two) - parseFloat(prenetGACostDiv03_two) + parseFloat(pretotalJobProfitFour_two) - parseFloat(prenetGACostDiv04_two) + parseFloat(pretotalJobProfitFive_two) - parseFloat(prenetGACostDiv05_two) + parseFloat(pretotalJobProfitSix_two) - parseFloat(prenetGACostDiv06_two) + parseFloat(pretotalJobProfitSeven_two) - parseFloat(prenetGACostDiv07_two) + parseFloat(pretotalJobProfitEleven_two) - parseFloat(prenetGACostDiv11_two) + parseFloat(pretotalJobProfitZero_two) - parseFloat(prenetGACorporateCost_two)).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round(parseFloat(pretotalJobProfitOne_two) - parseFloat(prenetGACostDiv01_two) + parseFloat(pretotalJobProfitTwo_two) - parseFloat(prenetGACostDiv02_two) + parseFloat(pretotalJobProfitThree_two) - parseFloat(prenetGACostDiv03_two) + parseFloat(pretotalJobProfitFour_two) - parseFloat(prenetGACostDiv04_two) + parseFloat(pretotalJobProfitFive_two) - parseFloat(prenetGACostDiv05_two) + parseFloat(pretotalJobProfitSix_two) - parseFloat(prenetGACostDiv06_two) + parseFloat(pretotalJobProfitSeven_two) - parseFloat(prenetGACostDiv07_two) + parseFloat(pretotalJobProfitEleven_two) - parseFloat(prenetGACostDiv11_two) + parseFloat(pretotalJobProfitZero_two) - parseFloat(prenetGACorporateCost_two)).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round((parseFloat(totalJobProfitOne_two) - parseFloat(netGACostDiv01_two) + parseFloat(totalJobProfitTwo_two) - parseFloat(netGACostDiv02_two) + parseFloat(totalJobProfitThree_two) - parseFloat(netGACostDiv03_two) + parseFloat(totalJobProfitFour_two) - parseFloat(netGACostDiv04_two) + parseFloat(totalJobProfitFive_two) - parseFloat(netGACostDiv05_two) + parseFloat(totalJobProfitSix_two) - parseFloat(netGACostDiv06_two) + parseFloat(totalJobProfitSeven_two) - parseFloat(netGACostDiv07_two) + parseFloat(totalJobProfitEleven_two) - parseFloat(netGACostDiv11_two) + parseFloat(totalJobProfitZero_two) - parseFloat(netGACorporateCost_two)) - (parseFloat(pretotalJobProfitOne_two) - parseFloat(prenetGACostDiv01_two) + parseFloat(pretotalJobProfitTwo_two) - parseFloat(prenetGACostDiv02_two) + parseFloat(pretotalJobProfitThree_two) - parseFloat(prenetGACostDiv03_two) + parseFloat(pretotalJobProfitFour_two) - parseFloat(prenetGACostDiv04_two) + parseFloat(pretotalJobProfitFive_two) - parseFloat(prenetGACostDiv05_two) + parseFloat(pretotalJobProfitSix_two) - parseFloat(prenetGACostDiv06_two) + parseFloat(pretotalJobProfitSeven_two) - parseFloat(prenetGACostDiv07_two) + parseFloat(pretotalJobProfitEleven_two) - parseFloat(prenetGACostDiv11_two) + parseFloat(pretotalJobProfitZero_two) - parseFloat(prenetGACorporateCost_two)))) >= 0 ? '$' + Math.round((parseFloat(totalJobProfitOne_two) - parseFloat(netGACostDiv01_two) + parseFloat(totalJobProfitTwo_two) - parseFloat(netGACostDiv02_two) + parseFloat(totalJobProfitThree_two) - parseFloat(netGACostDiv03_two) + parseFloat(totalJobProfitFour_two) - parseFloat(netGACostDiv04_two) + parseFloat(totalJobProfitFive_two) - parseFloat(netGACostDiv05_two) + parseFloat(totalJobProfitSix_two) - parseFloat(netGACostDiv06_two) + parseFloat(totalJobProfitSeven_two) - parseFloat(netGACostDiv07_two) + parseFloat(totalJobProfitEleven_two) - parseFloat(netGACostDiv11_two) + parseFloat(totalJobProfitZero_two) - parseFloat(netGACorporateCost_two)) - (parseFloat(pretotalJobProfitOne_two) - parseFloat(prenetGACostDiv01_two) + parseFloat(pretotalJobProfitTwo_two) - parseFloat(prenetGACostDiv02_two) + parseFloat(pretotalJobProfitThree_two) - parseFloat(prenetGACostDiv03_two) + parseFloat(pretotalJobProfitFour_two) - parseFloat(prenetGACostDiv04_two) + parseFloat(pretotalJobProfitFive_two) - parseFloat(prenetGACostDiv05_two) + parseFloat(pretotalJobProfitSix_two) - parseFloat(prenetGACostDiv06_two) + parseFloat(pretotalJobProfitSeven_two) - parseFloat(prenetGACostDiv07_two) + parseFloat(pretotalJobProfitEleven_two) - parseFloat(prenetGACostDiv11_two) + parseFloat(pretotalJobProfitZero_two) - parseFloat(prenetGACorporateCost_two))).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round((parseFloat(totalJobProfitOne_two) - parseFloat(netGACostDiv01_two) + parseFloat(totalJobProfitTwo_two) - parseFloat(netGACostDiv02_two) + parseFloat(totalJobProfitThree_two) - parseFloat(netGACostDiv03_two) + parseFloat(totalJobProfitFour_two) - parseFloat(netGACostDiv04_two) + parseFloat(totalJobProfitFive_two) - parseFloat(netGACostDiv05_two) + parseFloat(totalJobProfitSix_two) - parseFloat(netGACostDiv06_two) + parseFloat(totalJobProfitSeven_two) - parseFloat(netGACostDiv07_two) + parseFloat(totalJobProfitEleven_two) - parseFloat(netGACostDiv11_two) + parseFloat(totalJobProfitZero_two) - parseFloat(netGACorporateCost_two)) - (parseFloat(pretotalJobProfitOne_two) - parseFloat(prenetGACostDiv01_two) + parseFloat(pretotalJobProfitTwo_two) - parseFloat(prenetGACostDiv02_two) + parseFloat(pretotalJobProfitThree_two) - parseFloat(prenetGACostDiv03_two) + parseFloat(pretotalJobProfitFour_two) - parseFloat(prenetGACostDiv04_two) + parseFloat(pretotalJobProfitFive_two) - parseFloat(prenetGACostDiv05_two) + parseFloat(pretotalJobProfitSix_two) - parseFloat(prenetGACostDiv06_two) + parseFloat(pretotalJobProfitSeven_two) - parseFloat(prenetGACostDiv07_two) + parseFloat(pretotalJobProfitEleven_two) - parseFloat(prenetGACostDiv11_two) + parseFloat(pretotalJobProfitZero_two) - parseFloat(prenetGACorporateCost_two))).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
            </tr>
            <tr>
            <th style={{ textAlign: 'center'}}>% Rev</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{(((revenueFinalTotal) !== 0 ? (((Math.round(expectedProfit1) + Math.round(expectedProfitABNC1) + Math.round(expectedProfitFA1) + Math.round(expectedProfit2) + Math.round(expectedProfitABNC2) + Math.round(expectedProfitFA2) + Math.round(expectedProfit3) + Math.round(expectedProfitABNC3) + Math.round(expectedProfitFA3) + Math.round(expectedProfit4) + Math.round(expectedProfitABNC4) + Math.round(expectedProfitFA4) + Math.round(expectedProfit5) + Math.round(expectedProfitABNC5) + Math.round(expectedProfitFA5) + Math.round(expectedProfit6) + Math.round(expectedProfitABNC6) + Math.round(expectedProfitFA6) + Math.round(expectedProfit7) + Math.round(expectedProfitABNC7) + Math.round(expectedProfitFA7) + Math.round(expectedProfit11) + Math.round(expectedProfitABNC11) + Math.round(expectedProfitFA11) + Math.round(expectedProfit00) + Math.round(expectedProfitABNC00) + Math.round(expectedProfitFA00)) - netGAConsolidatedCost) / revenueFinalTotal) : 0) * 100).toFixed(1) + '%'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}></th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{(((prerevenueFinalTotal) !== 0 ? (((Math.round(preexpectedProfit1) + Math.round(preexpectedProfitABNC1) + Math.round(preexpectedProfitFA1) + Math.round(preexpectedProfit2) + Math.round(preexpectedProfitABNC2) + Math.round(preexpectedProfitFA2) + Math.round(preexpectedProfit3) + Math.round(preexpectedProfitABNC3) + Math.round(preexpectedProfitFA3) + Math.round(preexpectedProfit4) + Math.round(preexpectedProfitABNC4) + Math.round(preexpectedProfitFA4) + Math.round(preexpectedProfit5) + Math.round(preexpectedProfitABNC5) + Math.round(preexpectedProfitFA5) + Math.round(preexpectedProfit6) + Math.round(preexpectedProfitABNC6) + Math.round(preexpectedProfitFA6) + Math.round(preexpectedProfit7) + Math.round(preexpectedProfitABNC7) + Math.round(preexpectedProfitFA7) + Math.round(preexpectedProfit11) + Math.round(preexpectedProfitABNC11) + Math.round(preexpectedProfitFA11) + Math.round(preexpectedProfit00) + Math.round(preexpectedProfitABNC00) + Math.round(preexpectedProfitFA00)) - prenetGAConsolidatedCost) / prerevenueFinalTotal) : 0) * 100).toFixed(1) + '%'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{((Math.round(((IncomeOperDiv01 + IncomeOperDiv02 + IncomeOperDiv03 + IncomeOperDiv04 + IncomeOperDiv05 + IncomeOperDiv06 + IncomeOperDiv07 + IncomeOperDiv11 + IncomeOperDiv00) ? (IncomeOperDiv01 + IncomeOperDiv02 + IncomeOperDiv03 + IncomeOperDiv04 + IncomeOperDiv05 + IncomeOperDiv06 + IncomeOperDiv07 + IncomeOperDiv11 + IncomeOperDiv00):0) - (preIncomeOperDiv01 + preIncomeOperDiv02 + preIncomeOperDiv03 + preIncomeOperDiv04 + preIncomeOperDiv05 + preIncomeOperDiv06 + preIncomeOperDiv07 + preIncomeOperDiv11 + preIncomeOperDiv00))) / ((Math.round(revenueFinalTotal + ma_revenue_1 + ma_revenue_2 + ma_revenue_3 + ma_revenue_4 + ma_revenue_5 + ma_revenue_6 + ma_revenue_7 + ma_revenue_11 + ma_revenue_00) - Math.round(prerevenueFinalTotal + prev_ma_revenue_1 + prev_ma_revenue_2 + prev_ma_revenue_3 + prev_ma_revenue_4 + prev_ma_revenue_5 + prev_ma_revenue_6 + prev_ma_revenue_7 + prev_ma_revenue_11 + prev_ma_revenue_00))) * 100).toFixed(1) + '%'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{(((revenueFinalTotal_two) !== 0 ? (((Math.round(expectedProfit1_two) + Math.round(expectedProfitABNC1_two) + Math.round(expectedProfitFA1_two) + Math.round(expectedProfit2_two) + Math.round(expectedProfitABNC2_two) + Math.round(expectedProfitFA2_two) + Math.round(expectedProfit3_two) + Math.round(expectedProfitABNC3_two) + Math.round(expectedProfitFA3_two) + Math.round(expectedProfit4_two) + Math.round(expectedProfitABNC4_two) + Math.round(expectedProfitFA4_two) + Math.round(expectedProfit5_two) + Math.round(expectedProfitABNC5_two) + Math.round(expectedProfitFA5_two) + Math.round(expectedProfit6_two) + Math.round(expectedProfitABNC6_two) + Math.round(expectedProfitFA6_two) + Math.round(expectedProfit7_two) + Math.round(expectedProfitABNC7_two) + Math.round(expectedProfitFA7_two) + Math.round(expectedProfit11_two) + Math.round(expectedProfitABNC11_two) + Math.round(expectedProfitFA11_two) + Math.round(expectedProfit00_two) + Math.round(expectedProfitABNC00_two) + Math.round(expectedProfitFA00_two)) - netGAConsolidatedCost_two) / revenueFinalTotal_two) : 0) * 100).toFixed(1) + '%'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}></th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{(((prerevenueFinalTotal_two) !== 0 ? (((Math.round(preexpectedProfit1_two) + Math.round(preexpectedProfitABNC1_two) + Math.round(preexpectedProfitFA1_two) + Math.round(preexpectedProfit2_two) + Math.round(preexpectedProfitABNC2_two) + Math.round(preexpectedProfitFA2_two) + Math.round(preexpectedProfit3_two) + Math.round(preexpectedProfitABNC3_two) + Math.round(preexpectedProfitFA3_two) + Math.round(preexpectedProfit4_two) + Math.round(preexpectedProfitABNC4_two) + Math.round(preexpectedProfitFA4_two) + Math.round(preexpectedProfit5_two) + Math.round(preexpectedProfitABNC5_two) + Math.round(preexpectedProfitFA5_two) + Math.round(preexpectedProfit6_two) + Math.round(preexpectedProfitABNC6_two) + Math.round(preexpectedProfitFA6_two) + Math.round(preexpectedProfit7_two) + Math.round(preexpectedProfitABNC7_two) + Math.round(preexpectedProfitFA7_two) + Math.round(preexpectedProfit11_two) + Math.round(preexpectedProfitABNC11_two) + Math.round(preexpectedProfitFA11_two) + Math.round(preexpectedProfit00_two) + Math.round(preexpectedProfitABNC00_two) + Math.round(preexpectedProfitFA00_two)) - prenetGAConsolidatedCost_two) / prerevenueFinalTotal_two) : 0) * 100).toFixed(1) + '%'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{((Math.round(((IncomeOperDiv01_two + IncomeOperDiv02_two + IncomeOperDiv03_two + IncomeOperDiv04_two + IncomeOperDiv05_two + IncomeOperDiv06_two + IncomeOperDiv07_two + IncomeOperDiv11_two + IncomeOperDiv00_two) ? (IncomeOperDiv01_two + IncomeOperDiv02_two + IncomeOperDiv03_two + IncomeOperDiv04_two + IncomeOperDiv05_two + IncomeOperDiv06_two + IncomeOperDiv07_two + IncomeOperDiv11_two + IncomeOperDiv00_two):0) - (preIncomeOperDiv01_two + preIncomeOperDiv02_two + preIncomeOperDiv03_two + preIncomeOperDiv04_two + preIncomeOperDiv05_two + preIncomeOperDiv06_two + preIncomeOperDiv07_two + preIncomeOperDiv11_two + preIncomeOperDiv00_two))) / ((Math.round(revenueFinalTotal_two + ma_revenue_1_two + ma_revenue_2_two + ma_revenue_3_two + ma_revenue_4_two + ma_revenue_5_two + ma_revenue_6_two + ma_revenue_7_two + ma_revenue_11_two + ma_revenue_00_two) - Math.round(prerevenueFinalTotal_two + prev_ma_revenue_1_two + prev_ma_revenue_2_two + prev_ma_revenue_3_two + prev_ma_revenue_4_two + prev_ma_revenue_5_two + prev_ma_revenue_6_two + prev_ma_revenue_7_two + prev_ma_revenue_11_two + prev_ma_revenue_00_two))) * 100).toFixed(1) + '%'}</th>
            </tr>
            <tr>
            <th style={{ textAlign: 'center'}}>Deferred Compensation</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round(divDeferrCompOverhead)) >= 0 ? '$' + Math.round(divDeferrCompOverhead).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round(divDeferrCompOverhead).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}></th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round(predivDeferrCompOverhead)) >= 0 ? '$' + Math.round(predivDeferrCompOverhead).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round(predivDeferrCompOverhead).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round((divDeferrCompOverhead) - (predivDeferrCompOverhead))) >= 0 ? '$' + Math.round((divDeferrCompOverhead) - (predivDeferrCompOverhead)).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round((divDeferrCompOverhead) - (predivDeferrCompOverhead)).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round(divDeferrCompOverhead_two*1.03)) >= 0 ? '$' + Math.round(divDeferrCompOverhead_two*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round(divDeferrCompOverhead_two*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}></th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round(predivDeferrCompOverhead_two*1.03)) >= 0 ? '$' + Math.round(predivDeferrCompOverhead_two*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round(predivDeferrCompOverhead_two*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round((divDeferrCompOverhead_two*1.03) - (predivDeferrCompOverhead_two*1.03))) >= 0 ? '$' + Math.round((divDeferrCompOverhead_two*1.03) - (predivDeferrCompOverhead_two*1.03)).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round((divDeferrCompOverhead_two*1.03) - (predivDeferrCompOverhead_two*1.03)).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
            </tr>
            <tr>
            <th style={{ textAlign: 'center'}}>Profit Sharing</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round(divProfOneOverhead + divProfTwoOverhead + divProfThreeOverhead + divProfFourOverhead + divProfFiveOverhead + divProfSixOverhead + divProfSevenOverhead + divProfElevenOverhead + divProfZeroOverhead)) >= 0 ? '$' + Math.round(divProfOneOverhead + divProfTwoOverhead + divProfThreeOverhead + divProfFourOverhead + divProfFiveOverhead + divProfSixOverhead + divProfSevenOverhead + divProfElevenOverhead + divProfZeroOverhead).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round(divProfOneOverhead + divProfTwoOverhead + divProfThreeOverhead + divProfFourOverhead + divProfFiveOverhead + divProfSixOverhead + divProfSevenOverhead + divProfElevenOverhead + divProfZeroOverhead).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}></th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round(predivProfOneOverhead + predivProfTwoOverhead + predivProfThreeOverhead + predivProfFourOverhead + predivProfFiveOverhead + predivProfSixOverhead + predivProfSevenOverhead + predivProfElevenOverhead + predivProfZeroOverhead)) >= 0 ? '$' + Math.round(predivProfOneOverhead + predivProfTwoOverhead + predivProfThreeOverhead + predivProfFourOverhead + predivProfFiveOverhead + predivProfSixOverhead + predivProfSevenOverhead + predivProfElevenOverhead + predivProfZeroOverhead).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round(predivProfOneOverhead + predivProfTwoOverhead + predivProfThreeOverhead + predivProfFourOverhead + predivProfFiveOverhead + predivProfSixOverhead + predivProfSevenOverhead + predivProfElevenOverhead + predivProfZeroOverhead).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(((Math.round(divProfOneOverhead + divProfTwoOverhead + divProfThreeOverhead + divProfFourOverhead + divProfFiveOverhead + divProfSixOverhead + divProfSevenOverhead + divProfElevenOverhead + divProfZeroOverhead)) - (Math.round(predivProfOneOverhead + predivProfTwoOverhead + predivProfThreeOverhead + predivProfFourOverhead + predivProfFiveOverhead + predivProfSixOverhead + predivProfSevenOverhead + predivProfElevenOverhead + predivProfZeroOverhead)))) >= 0 ? '$' + ((Math.round(divProfOneOverhead + divProfTwoOverhead + divProfThreeOverhead + divProfFourOverhead + divProfFiveOverhead + divProfSixOverhead + divProfSevenOverhead + divProfElevenOverhead + divProfZeroOverhead)) - (Math.round(predivProfOneOverhead + predivProfTwoOverhead + predivProfThreeOverhead + predivProfFourOverhead + predivProfFiveOverhead + predivProfSixOverhead + predivProfSevenOverhead + predivProfElevenOverhead + predivProfZeroOverhead))).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + ((Math.round(divProfOneOverhead + divProfTwoOverhead + divProfThreeOverhead + divProfFourOverhead + divProfFiveOverhead + divProfSixOverhead + divProfSevenOverhead + divProfElevenOverhead + divProfZeroOverhead)) - (Math.round(predivProfOneOverhead + predivProfTwoOverhead + predivProfThreeOverhead + predivProfFourOverhead + predivProfFiveOverhead + predivProfSixOverhead + predivProfSevenOverhead + predivProfElevenOverhead + predivProfZeroOverhead))).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round(divProfOneOverhead_two*1.03 + divProfTwoOverhead_two*1.03 + divProfThreeOverhead_two*1.03 + divProfFourOverhead_two*1.03 + divProfFiveOverhead_two*1.03 + divProfSixOverhead_two*1.03 + divProfSevenOverhead_two*1.03 + divProfElevenOverhead_two*1.03 + divProfZeroOverhead_two*1.03)) >= 0 ? '$' + Math.round(divProfOneOverhead_two*1.03 + divProfTwoOverhead_two*1.03 + divProfThreeOverhead_two*1.03 + divProfFourOverhead_two*1.03 + divProfFiveOverhead_two*1.03 + divProfSixOverhead_two*1.03 + divProfSevenOverhead_two*1.03 + divProfElevenOverhead_two*1.03 + divProfZeroOverhead_two*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round(divProfOneOverhead_two*1.03 + divProfTwoOverhead_two*1.03 + divProfThreeOverhead_two*1.03 + divProfFourOverhead_two*1.03 + divProfFiveOverhead_two*1.03 + divProfSixOverhead_two*1.03 + divProfSevenOverhead_two*1.03 + divProfElevenOverhead_two*1.03 + divProfZeroOverhead_two*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}></th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round(predivProfOneOverhead_two*1.03 + predivProfTwoOverhead_two*1.03 + predivProfThreeOverhead_two*1.03 + predivProfFourOverhead_two*1.03 + predivProfFiveOverhead_two*1.03 + predivProfSixOverhead_two*1.03 + predivProfSevenOverhead_two*1.03 + predivProfElevenOverhead_two*1.03 + predivProfZeroOverhead_two*1.03)) >= 0 ? '$' + Math.round(predivProfOneOverhead_two*1.03 + predivProfTwoOverhead_two*1.03 + predivProfThreeOverhead_two*1.03 + predivProfFourOverhead_two*1.03 + predivProfFiveOverhead_two*1.03 + predivProfSixOverhead_two*1.03 + predivProfSevenOverhead_two*1.03 + predivProfElevenOverhead_two*1.03 + predivProfZeroOverhead_two*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round(predivProfOneOverhead_two*1.03 + predivProfTwoOverhead_two*1.03 + predivProfThreeOverhead_two*1.03 + predivProfFourOverhead_two*1.03 + predivProfFiveOverhead_two*1.03 + predivProfSixOverhead_two*1.03 + predivProfSevenOverhead_two*1.03 + predivProfElevenOverhead_two*1.03 + predivProfZeroOverhead_two*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(((Math.round(divProfOneOverhead_two*1.03 + divProfTwoOverhead_two*1.03 + divProfThreeOverhead_two*1.03 + divProfFourOverhead_two*1.03 + divProfFiveOverhead_two*1.03 + divProfSixOverhead_two*1.03 + divProfSevenOverhead_two*1.03 + divProfElevenOverhead_two*1.03 + divProfZeroOverhead_two*1.03)) - (Math.round(predivProfOneOverhead_two*1.03 + predivProfTwoOverhead_two*1.03 + predivProfThreeOverhead_two*1.03 + predivProfFourOverhead_two*1.03 + predivProfFiveOverhead_two*1.03 + predivProfSixOverhead_two*1.03 + predivProfSevenOverhead_two*1.03 + predivProfElevenOverhead_two*1.03 + predivProfZeroOverhead_two*1.03)))) >= 0 ? '$' + ((Math.round(divProfOneOverhead_two*1.03 + divProfTwoOverhead_two*1.03 + divProfThreeOverhead_two*1.03 + divProfFourOverhead_two*1.03 + divProfFiveOverhead_two*1.03 + divProfSixOverhead_two*1.03 + divProfSevenOverhead_two*1.03 + divProfElevenOverhead_two*1.03 + divProfZeroOverhead_two*1.03)) - (Math.round(predivProfOneOverhead_two*1.03 + predivProfTwoOverhead_two*1.03 + predivProfThreeOverhead_two*1.03 + predivProfFourOverhead_two*1.03 + predivProfFiveOverhead_two*1.03 + predivProfSixOverhead_two*1.03 + predivProfSevenOverhead_two*1.03 + predivProfElevenOverhead_two*1.03 + predivProfZeroOverhead_two*1.03))).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + ((Math.round(divProfOneOverhead_two*1.03 + divProfTwoOverhead_two*1.03 + divProfThreeOverhead_two*1.03 + divProfFourOverhead_two*1.03 + divProfFiveOverhead_two*1.03 + divProfSixOverhead_two*1.03 + divProfSevenOverhead_two*1.03 + divProfElevenOverhead_two*1.03 + divProfZeroOverhead_two*1.03)) - (Math.round(predivProfOneOverhead_two*1.03 + predivProfTwoOverhead_two*1.03 + predivProfThreeOverhead_two*1.03 + predivProfFourOverhead_two*1.03 + predivProfFiveOverhead_two*1.03 + predivProfSixOverhead_two*1.03 + predivProfSevenOverhead_two*1.03 + predivProfElevenOverhead_two*1.03 + predivProfZeroOverhead_two*1.03))).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
            </tr>
            <tr>
            <th style={{ textAlign: 'center'}}>Investment Income</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round(divInvestCompOverhead)) >= 0 ? '$' + Math.round(divInvestCompOverhead).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round(divInvestCompOverhead).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}></th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round(predivInvestCompOverhead)) >= 0 ? '$' + Math.round(predivInvestCompOverhead).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round(predivInvestCompOverhead).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round((divInvestCompOverhead) - (predivInvestCompOverhead))) >= 0 ? '$' + Math.round((divInvestCompOverhead) - (predivInvestCompOverhead)).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round((divInvestCompOverhead) - (predivInvestCompOverhead)).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round(divInvestCompOverhead_two*1.03)) >= 0 ? '$' + Math.round(divInvestCompOverhead_two*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round(divInvestCompOverhead_two*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}></th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round(predivInvestCompOverhead_two*1.03)) >= 0 ? '$' + Math.round(predivInvestCompOverhead_two*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round(predivInvestCompOverhead_two*1.03).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(((divInvestCompOverhead_two*1.03) - (predivInvestCompOverhead_two*1.03))) >= 0 ? '$' + ((divInvestCompOverhead_two*1.03) - (predivInvestCompOverhead_two*1.03)).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + ((divInvestCompOverhead_two*1.03) - (predivInvestCompOverhead_two*1.03)).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
            </tr>
            <tr>
            <th style={{ textAlign: 'center'}}>Other Income</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign((Math.round(divDeferrCompOverhead) + Math.round(divProfOneOverhead + divProfTwoOverhead + divProfThreeOverhead + divProfFourOverhead + divProfFiveOverhead + divProfSixOverhead + divProfSevenOverhead + divProfElevenOverhead + divProfZeroOverhead) + Math.round(divInvestCompOverhead))) >= 0 ? '$' + (Math.round(divDeferrCompOverhead) + Math.round(divProfOneOverhead + divProfTwoOverhead + divProfThreeOverhead + divProfFourOverhead + divProfFiveOverhead + divProfSixOverhead + divProfSevenOverhead + divProfElevenOverhead + divProfZeroOverhead) + Math.round(divInvestCompOverhead)).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + (Math.round(divDeferrCompOverhead) + Math.round(divProfOneOverhead + divProfTwoOverhead + divProfThreeOverhead + divProfFourOverhead + divProfFiveOverhead + divProfSixOverhead + divProfSevenOverhead + divProfElevenOverhead + divProfZeroOverhead) + Math.round(divInvestCompOverhead)).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}></th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round(Math.round(predivDeferrCompOverhead) + Math.round(predivProfOneOverhead + predivProfTwoOverhead + predivProfThreeOverhead + predivProfFourOverhead + predivProfFiveOverhead + predivProfSixOverhead + predivProfSevenOverhead + predivProfElevenOverhead + predivProfZeroOverhead) + Math.round(predivInvestCompOverhead))) >= 0 ? '$' + Math.round(Math.round(predivDeferrCompOverhead) + Math.round(predivProfOneOverhead + predivProfTwoOverhead + predivProfThreeOverhead + predivProfFourOverhead + predivProfFiveOverhead + predivProfSixOverhead + predivProfSevenOverhead + predivProfElevenOverhead + predivProfZeroOverhead) + Math.round(predivInvestCompOverhead)).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round(Math.round(predivDeferrCompOverhead) + Math.round(predivProfOneOverhead + predivProfTwoOverhead + predivProfThreeOverhead + predivProfFourOverhead + predivProfFiveOverhead + predivProfSixOverhead + predivProfSevenOverhead + predivProfElevenOverhead + predivProfZeroOverhead) + Math.round(predivInvestCompOverhead)).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign(Math.round(Math.round((divDeferrCompOverhead) - (predivDeferrCompOverhead)) + ((Math.round(divProfOneOverhead + divProfTwoOverhead + divProfThreeOverhead + divProfFourOverhead + divProfFiveOverhead + divProfSixOverhead + divProfSevenOverhead + divProfElevenOverhead + divProfZeroOverhead)) - (Math.round(predivProfOneOverhead + predivProfTwoOverhead + predivProfThreeOverhead + predivProfFourOverhead + predivProfFiveOverhead + predivProfSixOverhead + predivProfSevenOverhead + predivProfElevenOverhead + predivProfZeroOverhead))) + ((divInvestCompOverhead) - (predivInvestCompOverhead)))) >= 0 ? '$' + Math.round(Math.round((divDeferrCompOverhead) - (predivDeferrCompOverhead)) + ((Math.round(divProfOneOverhead + divProfTwoOverhead + divProfThreeOverhead + divProfFourOverhead + divProfFiveOverhead + divProfSixOverhead + divProfSevenOverhead + divProfElevenOverhead + divProfZeroOverhead)) - (Math.round(predivProfOneOverhead + predivProfTwoOverhead + predivProfThreeOverhead + predivProfFourOverhead + predivProfFiveOverhead + predivProfSixOverhead + predivProfSevenOverhead + predivProfElevenOverhead + predivProfZeroOverhead))) + ((divInvestCompOverhead) - (predivInvestCompOverhead))).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round(Math.round((divDeferrCompOverhead) - (predivDeferrCompOverhead)) + ((Math.round(divProfOneOverhead + divProfTwoOverhead + divProfThreeOverhead + divProfFourOverhead + divProfFiveOverhead + divProfSixOverhead + divProfSevenOverhead + divProfElevenOverhead + divProfZeroOverhead)) - (Math.round(predivProfOneOverhead + predivProfTwoOverhead + predivProfThreeOverhead + predivProfFourOverhead + predivProfFiveOverhead + predivProfSixOverhead + predivProfSevenOverhead + predivProfElevenOverhead + predivProfZeroOverhead))) + ((divInvestCompOverhead) - (predivInvestCompOverhead))).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign((Math.round(divDeferrCompOverhead_two*1.03) + Math.round(divProfOneOverhead_two*1.03 + divProfTwoOverhead_two*1.03 + divProfThreeOverhead_two*1.03 + divProfFourOverhead_two*1.03 + divProfFiveOverhead_two*1.03 + divProfSixOverhead_two*1.03 + divProfSevenOverhead_two*1.03 + divProfElevenOverhead_two*1.03 + divProfZeroOverhead_two*1.03) + Math.round(divInvestCompOverhead_two*1.03))) >= 0 ? '$' + (Math.round(divDeferrCompOverhead_two*1.03) + Math.round(divProfOneOverhead_two*1.03 + divProfTwoOverhead_two*1.03 + divProfThreeOverhead_two*1.03 + divProfFourOverhead_two*1.03 + divProfFiveOverhead_two*1.03 + divProfSixOverhead_two*1.03 + divProfSevenOverhead_two*1.03 + divProfElevenOverhead_two*1.03 + divProfZeroOverhead_two*1.03) + Math.round(divInvestCompOverhead_two*1.03)).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + (Math.round(divDeferrCompOverhead_two*1.03) + Math.round(divProfOneOverhead_two*1.03 + divProfTwoOverhead_two*1.03 + divProfThreeOverhead_two*1.03 + divProfFourOverhead_two*1.03 + divProfFiveOverhead_two*1.03 + divProfSixOverhead_two*1.03 + divProfSevenOverhead_two*1.03 + divProfElevenOverhead_two*1.03 + divProfZeroOverhead_two*1.03) + Math.round(divInvestCompOverhead_two*1.03)).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}></th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign((Math.round(predivDeferrCompOverhead_two*1.03) + Math.round(predivProfOneOverhead_two*1.03 + predivProfTwoOverhead_two*1.03 + predivProfThreeOverhead_two*1.03 + predivProfFourOverhead_two*1.03 + predivProfFiveOverhead_two*1.03 + predivProfSixOverhead_two*1.03 + predivProfSevenOverhead_two*1.03 + predivProfElevenOverhead_two*1.03 + predivProfZeroOverhead_two*1.03) + Math.round(predivInvestCompOverhead_two*1.03))) >= 0 ? '$' + (Math.round(predivDeferrCompOverhead_two*1.03) + Math.round(predivProfOneOverhead_two*1.03 + predivProfTwoOverhead_two*1.03 + predivProfThreeOverhead_two*1.03 + predivProfFourOverhead_two*1.03 + predivProfFiveOverhead_two*1.03 + predivProfSixOverhead_two*1.03 + predivProfSevenOverhead_two*1.03 + predivProfElevenOverhead_two*1.03 + predivProfZeroOverhead_two*1.03) + Math.round(predivInvestCompOverhead_two*1.03)).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + (Math.round(predivDeferrCompOverhead_two*1.03) + Math.round(predivProfOneOverhead_two*1.03 + predivProfTwoOverhead_two*1.03 + predivProfThreeOverhead_two*1.03 + predivProfFourOverhead_two*1.03 + predivProfFiveOverhead_two*1.03 + predivProfSixOverhead_two*1.03 + predivProfSevenOverhead_two*1.03 + predivProfElevenOverhead_two*1.03 + predivProfZeroOverhead_two*1.03) + Math.round(predivInvestCompOverhead_two*1.03)).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign((Math.round((divDeferrCompOverhead_two*1.03) - (predivDeferrCompOverhead_two*1.03)) + ((Math.round(divProfOneOverhead_two*1.03 + divProfTwoOverhead_two*1.03 + divProfThreeOverhead_two*1.03 + divProfFourOverhead_two*1.03 + divProfFiveOverhead_two*1.03 + divProfSixOverhead_two*1.03 + divProfSevenOverhead_two*1.03 + divProfElevenOverhead_two*1.03 + divProfZeroOverhead_two*1.03)) - (Math.round(predivProfOneOverhead_two*1.03 + predivProfTwoOverhead_two*1.03 + predivProfThreeOverhead_two*1.03 + predivProfFourOverhead_two*1.03 + predivProfFiveOverhead_two*1.03 + predivProfSixOverhead_two*1.03 + predivProfSevenOverhead_two*1.03 + predivProfElevenOverhead_two*1.03 + predivProfZeroOverhead_two*1.03))) + ((divInvestCompOverhead_two*1.03) - (predivInvestCompOverhead_two*1.03)))) >= 0 ? '$' + (Math.round((divDeferrCompOverhead_two*1.03) - (predivDeferrCompOverhead_two*1.03)) + ((Math.round(divProfOneOverhead_two*1.03 + divProfTwoOverhead_two*1.03 + divProfThreeOverhead_two*1.03 + divProfFourOverhead_two*1.03 + divProfFiveOverhead_two*1.03 + divProfSixOverhead_two*1.03 + divProfSevenOverhead_two*1.03 + divProfElevenOverhead_two*1.03 + divProfZeroOverhead_two*1.03)) - (Math.round(predivProfOneOverhead_two*1.03 + predivProfTwoOverhead_two*1.03 + predivProfThreeOverhead_two*1.03 + predivProfFourOverhead_two*1.03 + predivProfFiveOverhead_two*1.03 + predivProfSixOverhead_two*1.03 + predivProfSevenOverhead_two*1.03 + predivProfElevenOverhead_two*1.03 + predivProfZeroOverhead_two*1.03))) + ((divInvestCompOverhead_two*1.03) - (predivInvestCompOverhead_two*1.03))).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + (Math.round((divDeferrCompOverhead_two*1.03) - (predivDeferrCompOverhead_two*1.03)) + ((Math.round(divProfOneOverhead_two*1.03 + divProfTwoOverhead_two*1.03 + divProfThreeOverhead_two*1.03 + divProfFourOverhead_two*1.03 + divProfFiveOverhead_two*1.03 + divProfSixOverhead_two*1.03 + divProfSevenOverhead_two*1.03 + divProfElevenOverhead_two*1.03 + divProfZeroOverhead_two*1.03)) - (Math.round(predivProfOneOverhead_two*1.03 + predivProfTwoOverhead_two*1.03 + predivProfThreeOverhead_two*1.03 + predivProfFourOverhead_two*1.03 + predivProfFiveOverhead_two*1.03 + predivProfSixOverhead_two*1.03 + predivProfSevenOverhead_two*1.03 + predivProfElevenOverhead_two*1.03 + predivProfZeroOverhead_two*1.03))) + ((divInvestCompOverhead_two*1.03) - (predivInvestCompOverhead_two*1.03))).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
            </tr>
            <tr>
                <th style={{ textAlign: 'center'}}>Net Income</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign((Math.round(expectedProfit1) + Math.round(expectedProfitABNC1) + Math.round(expectedProfitFA1) + Math.round(expectedProfit2) + Math.round(expectedProfitABNC2) + Math.round(expectedProfitFA2) + Math.round(expectedProfit3) + Math.round(expectedProfitABNC3) + Math.round(expectedProfitFA3) + Math.round(expectedProfit4) + Math.round(expectedProfitABNC4) + Math.round(expectedProfitFA4) + Math.round(expectedProfit5) + Math.round(expectedProfitABNC5) + Math.round(expectedProfitFA5) + Math.round(expectedProfit6) + Math.round(expectedProfitABNC6) + Math.round(expectedProfitFA6) + Math.round(expectedProfit7) + Math.round(expectedProfitABNC7) + Math.round(expectedProfitFA7) + Math.round(expectedProfit11) + Math.round(expectedProfitABNC11) + Math.round(expectedProfitFA11) + Math.round(expectedProfit00) + Math.round(expectedProfitABNC00) + Math.round(expectedProfitFA00)) + Math.round(ma_profit_1) + Math.round(ma_profit_2) + Math.round(ma_profit_3) + Math.round(ma_profit_4) + Math.round(ma_profit_5) + Math.round(ma_profit_6) + Math.round(ma_profit_7) + Math.round(ma_profit_11) + Math.round(ma_profit_00) -  Math.round(netGAConsolidatedCost) - otherIncomeTotal) >= 0 ? '$' + Math.round((Math.round(expectedProfit1) + Math.round(expectedProfitABNC1) + Math.round(expectedProfitFA1) + Math.round(expectedProfit2) + Math.round(expectedProfitABNC2) + Math.round(expectedProfitFA2) + Math.round(expectedProfit3) + Math.round(expectedProfitABNC3) + Math.round(expectedProfitFA3) + Math.round(expectedProfit4) + Math.round(expectedProfitABNC4) + Math.round(expectedProfitFA4) + Math.round(expectedProfit5) + Math.round(expectedProfitABNC5) + Math.round(expectedProfitFA5) + Math.round(expectedProfit6) + Math.round(expectedProfitABNC6) + Math.round(expectedProfitFA6) + Math.round(expectedProfit7) + Math.round(expectedProfitABNC7) + Math.round(expectedProfitFA7) + Math.round(expectedProfit11) + Math.round(expectedProfitABNC11) + Math.round(expectedProfitFA11) + Math.round(expectedProfit00) + Math.round(expectedProfitABNC00) + Math.round(expectedProfitFA00)) + Math.round(ma_profit_1) + Math.round(ma_profit_2) + Math.round(ma_profit_3) + Math.round(ma_profit_4) + Math.round(ma_profit_5) + Math.round(ma_profit_6) + Math.round(ma_profit_7) + Math.round(ma_profit_11) + Math.round(ma_profit_00) -  Math.round(netGAConsolidatedCost) - otherIncomeTotal).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round((Math.round(expectedProfit1) + Math.round(expectedProfitABNC1) + Math.round(expectedProfitFA1) + Math.round(expectedProfit2) + Math.round(expectedProfitABNC2) + Math.round(expectedProfitFA2) + Math.round(expectedProfit3) + Math.round(expectedProfitABNC3) + Math.round(expectedProfitFA3) + Math.round(expectedProfit4) + Math.round(expectedProfitABNC4) + Math.round(expectedProfitFA4) + Math.round(expectedProfit5) + Math.round(expectedProfitABNC5) + Math.round(expectedProfitFA5) + Math.round(expectedProfit6) + Math.round(expectedProfitABNC6) + Math.round(expectedProfitFA6) + Math.round(expectedProfit7) + Math.round(expectedProfitABNC7) + Math.round(expectedProfitFA7) + Math.round(expectedProfit11) + Math.round(expectedProfitABNC11) + Math.round(expectedProfitFA11) + Math.round(expectedProfit00) + Math.round(expectedProfitABNC00) + Math.round(expectedProfitFA00)) + Math.round(ma_profit_1) + Math.round(ma_profit_2) + Math.round(ma_profit_3) + Math.round(ma_profit_4) + Math.round(ma_profit_5) + Math.round(ma_profit_6) + Math.round(ma_profit_7) + Math.round(ma_profit_11) + Math.round(ma_profit_00) -  Math.round(netGAConsolidatedCost) - otherIncomeTotal).toLocaleString(undefined, {maximumFractionDigits:2})  + ')'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{((Math.round(Math.round(((Math.round(expectedProfit1) + Math.round(expectedProfitABNC1) + Math.round(expectedProfitFA1) + Math.round(expectedProfit2) + Math.round(expectedProfitABNC2) + Math.round(expectedProfitFA2) + Math.round(expectedProfit3) + Math.round(expectedProfitABNC3) + Math.round(expectedProfitFA3) + Math.round(expectedProfit4) + Math.round(expectedProfitABNC4) + Math.round(expectedProfitFA4) + Math.round(expectedProfit5) + Math.round(expectedProfitABNC5) + Math.round(expectedProfitFA5) + Math.round(expectedProfit6) + Math.round(expectedProfitABNC6) + Math.round(expectedProfitFA6) + Math.round(expectedProfit7) + Math.round(expectedProfitABNC7) + Math.round(expectedProfitFA7) + Math.round(expectedProfit11) + Math.round(expectedProfitABNC11) + Math.round(expectedProfitFA11) + Math.round(expectedProfit00) + Math.round(expectedProfitABNC00) + Math.round(expectedProfitFA00)) + Math.round(ma_profit_1) + Math.round(ma_profit_2) + Math.round(ma_profit_3) + Math.round(ma_profit_4) + Math.round(ma_profit_5) + Math.round(ma_profit_6) + Math.round(ma_profit_7) + Math.round(ma_profit_11) + Math.round(ma_profit_00)) -  Math.round(netGAConsolidatedCost)) - otherIncomeTotal) / Math.round(Math.round(revenueTotal) + Math.round(revenueABNCTotal) + Math.round(revenueFATotal) + ma_revenue_1 + ma_revenue_2 + ma_revenue_3 + ma_revenue_4 + ma_revenue_5 + ma_revenue_6 + ma_revenue_7 + ma_revenue_11 + ma_revenue_00)) * 100).toFixed(2) + '%'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign((((Math.round(preexpectedProfit1) + Math.round(preexpectedProfitABNC1) + Math.round(preexpectedProfitFA1) + Math.round(preexpectedProfit2) + Math.round(preexpectedProfitABNC2) + Math.round(preexpectedProfitFA2) + Math.round(preexpectedProfit3) + Math.round(preexpectedProfitABNC3) + Math.round(preexpectedProfitFA3) + Math.round(preexpectedProfit4) + Math.round(preexpectedProfitABNC4) + Math.round(preexpectedProfitFA4) + Math.round(preexpectedProfit5) + Math.round(preexpectedProfitABNC5) + Math.round(preexpectedProfitFA5) + Math.round(preexpectedProfit6) + Math.round(preexpectedProfitABNC6) + Math.round(preexpectedProfitFA6) + Math.round(preexpectedProfit7) + Math.round(preexpectedProfitABNC7) + Math.round(preexpectedProfitFA7) + Math.round(preexpectedProfit11) + Math.round(preexpectedProfitABNC11) + Math.round(preexpectedProfitFA11) + Math.round(preexpectedProfit00) + Math.round(preexpectedProfitABNC00) + Math.round(preexpectedProfitFA00)) + Math.round(prev_ma_profit_1) + Math.round(prev_ma_profit_2) + Math.round(prev_ma_profit_3) +  Math.round(prev_ma_profit_4) + Math.round(prev_ma_profit_5) + Math.round(prev_ma_profit_6) + Math.round(prev_ma_profit_7) + Math.round(prev_ma_profit_11) + Math.round(prev_ma_profit_00)) - Math.round(prenetGAConsolidatedCost)) - preotherIncomeTotal) >= 0 ? '$' + Math.round((((Math.round(preexpectedProfit1) + Math.round(preexpectedProfitABNC1) + Math.round(preexpectedProfitFA1) + Math.round(preexpectedProfit2) + Math.round(preexpectedProfitABNC2) + Math.round(preexpectedProfitFA2) + Math.round(preexpectedProfit3) + Math.round(preexpectedProfitABNC3) + Math.round(preexpectedProfitFA3) + Math.round(preexpectedProfit4) + Math.round(preexpectedProfitABNC4) + Math.round(preexpectedProfitFA4) + Math.round(preexpectedProfit5) + Math.round(preexpectedProfitABNC5) + Math.round(preexpectedProfitFA5) + Math.round(preexpectedProfit6) + Math.round(preexpectedProfitABNC6) + Math.round(preexpectedProfitFA6) + Math.round(preexpectedProfit7) + Math.round(preexpectedProfitABNC7) + Math.round(preexpectedProfitFA7) + Math.round(preexpectedProfit11) + Math.round(preexpectedProfitABNC11) + Math.round(preexpectedProfitFA11) + Math.round(preexpectedProfit00) + Math.round(preexpectedProfitABNC00) + Math.round(preexpectedProfitFA00)) + Math.round(prev_ma_profit_1) + Math.round(prev_ma_profit_2) + Math.round(prev_ma_profit_3) +  Math.round(prev_ma_profit_4) + Math.round(prev_ma_profit_5) + Math.round(prev_ma_profit_6) + Math.round(prev_ma_profit_7) + Math.round(prev_ma_profit_11) + Math.round(prev_ma_profit_00)) - Math.round(prenetGAConsolidatedCost)) - preotherIncomeTotal).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round((((Math.round(preexpectedProfit1) + Math.round(preexpectedProfitABNC1) + Math.round(preexpectedProfitFA1) + Math.round(preexpectedProfit2) + Math.round(preexpectedProfitABNC2) + Math.round(preexpectedProfitFA2) + Math.round(preexpectedProfit3) + Math.round(preexpectedProfitABNC3) + Math.round(preexpectedProfitFA3) + Math.round(preexpectedProfit4) + Math.round(preexpectedProfitABNC4) + Math.round(preexpectedProfitFA4) + Math.round(preexpectedProfit5) + Math.round(preexpectedProfitABNC5) + Math.round(preexpectedProfitFA5) + Math.round(preexpectedProfit6) + Math.round(preexpectedProfitABNC6) + Math.round(preexpectedProfitFA6) + Math.round(preexpectedProfit7) + Math.round(preexpectedProfitABNC7) + Math.round(preexpectedProfitFA7) + Math.round(preexpectedProfit11) + Math.round(preexpectedProfitABNC11) + Math.round(preexpectedProfitFA11) + Math.round(preexpectedProfit00) + Math.round(preexpectedProfitABNC00) + Math.round(preexpectedProfitFA00)) + Math.round(prev_ma_profit_1) + Math.round(prev_ma_profit_2) + Math.round(prev_ma_profit_3) +  Math.round(prev_ma_profit_4) + Math.round(prev_ma_profit_5) + Math.round(prev_ma_profit_6) + Math.round(prev_ma_profit_7) + Math.round(prev_ma_profit_11) + Math.round(prev_ma_profit_00)) - Math.round(prenetGAConsolidatedCost)) - preotherIncomeTotal).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign((Math.round(((IncomeOperDiv01 + IncomeOperDiv02 + IncomeOperDiv03 + IncomeOperDiv04 + IncomeOperDiv05 + IncomeOperDiv06 + IncomeOperDiv07 + IncomeOperDiv11 + IncomeOperDiv00) ? (IncomeOperDiv01 + IncomeOperDiv02 + IncomeOperDiv03 + IncomeOperDiv04 + IncomeOperDiv05 + IncomeOperDiv06 + IncomeOperDiv07 + IncomeOperDiv11 + IncomeOperDiv00):0) - (preIncomeOperDiv01 + preIncomeOperDiv02 + preIncomeOperDiv03 + preIncomeOperDiv04 + preIncomeOperDiv05 + preIncomeOperDiv06 + preIncomeOperDiv07 + preIncomeOperDiv11 + preIncomeOperDiv00))) - (Math.round((divDeferrCompOverhead) - (predivDeferrCompOverhead)) + (Math.round(divProfOneOverhead + divProfTwoOverhead + divProfThreeOverhead + divProfFourOverhead + divProfFiveOverhead + divProfSixOverhead + divProfSevenOverhead + divProfElevenOverhead + divProfZeroOverhead)) - (Math.round(predivProfOneOverhead + predivProfTwoOverhead + predivProfThreeOverhead + predivProfFourOverhead + predivProfFiveOverhead + predivProfSixOverhead + predivProfSevenOverhead + predivProfElevenOverhead + predivProfZeroOverhead)) + ((divInvestCompOverhead) - (predivInvestCompOverhead)))) >= 0 ? Math.round((Math.round(((IncomeOperDiv01 + IncomeOperDiv02 + IncomeOperDiv03 + IncomeOperDiv04 + IncomeOperDiv05 + IncomeOperDiv06 + IncomeOperDiv07 + IncomeOperDiv11 + IncomeOperDiv00) ? (IncomeOperDiv01 + IncomeOperDiv02 + IncomeOperDiv03 + IncomeOperDiv04 + IncomeOperDiv05 + IncomeOperDiv06 + IncomeOperDiv07 + IncomeOperDiv11 + IncomeOperDiv00):0) - (preIncomeOperDiv01 + preIncomeOperDiv02 + preIncomeOperDiv03 + preIncomeOperDiv04 + preIncomeOperDiv05 + preIncomeOperDiv06 + preIncomeOperDiv07 + preIncomeOperDiv11 + preIncomeOperDiv00))) - (Math.round((divDeferrCompOverhead) - (predivDeferrCompOverhead)) + (Math.round(divProfOneOverhead + divProfTwoOverhead + divProfThreeOverhead + divProfFourOverhead + divProfFiveOverhead + divProfSixOverhead + divProfSevenOverhead + divProfElevenOverhead + divProfZeroOverhead)) - (Math.round(predivProfOneOverhead + predivProfTwoOverhead + predivProfThreeOverhead + predivProfFourOverhead + predivProfFiveOverhead + predivProfSixOverhead + predivProfSevenOverhead + predivProfElevenOverhead + predivProfZeroOverhead)) + ((divInvestCompOverhead) - (predivInvestCompOverhead)))).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + Math.round((Math.round(((IncomeOperDiv01 + IncomeOperDiv02 + IncomeOperDiv03 + IncomeOperDiv04 + IncomeOperDiv05 + IncomeOperDiv06 + IncomeOperDiv07 + IncomeOperDiv11 + IncomeOperDiv00) ? (IncomeOperDiv01 + IncomeOperDiv02 + IncomeOperDiv03 + IncomeOperDiv04 + IncomeOperDiv05 + IncomeOperDiv06 + IncomeOperDiv07 + IncomeOperDiv11 + IncomeOperDiv00):0) - (preIncomeOperDiv01 + preIncomeOperDiv02 + preIncomeOperDiv03 + preIncomeOperDiv04 + preIncomeOperDiv05 + preIncomeOperDiv06 + preIncomeOperDiv07 + preIncomeOperDiv11 + preIncomeOperDiv00))) - (Math.round((divDeferrCompOverhead) - (predivDeferrCompOverhead)) + (Math.round(divProfOneOverhead + divProfTwoOverhead + divProfThreeOverhead + divProfFourOverhead + divProfFiveOverhead + divProfSixOverhead + divProfSevenOverhead + divProfElevenOverhead + divProfZeroOverhead)) - (Math.round(predivProfOneOverhead + predivProfTwoOverhead + predivProfThreeOverhead + predivProfFourOverhead + predivProfFiveOverhead + predivProfSixOverhead + predivProfSevenOverhead + predivProfElevenOverhead + predivProfZeroOverhead)) + ((divInvestCompOverhead) - (predivInvestCompOverhead)))).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th>
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign((IncomeOperDiv00_two - (parseFloat(divDeferrCompOverhead_two)*1.03 + parseFloat(divProfZeroOverhead_two)*1.03 + parseFloat(divInvestCompOverhead_two)*1.03)) + (parseFloat(totalJobProfitOne_two) - parseFloat(netGACostDiv01_two) - parseFloat(divProfOneOverhead_two)*1.03) + (parseFloat(totalJobProfitTwo_two) - parseFloat(netGACostDiv02_two) - parseFloat(divProfTwoOverhead_two)*1.03) + (parseFloat(totalJobProfitThree_two) - parseFloat(netGACostDiv03_two) - parseFloat(divProfThreeOverhead_two)*1.03) + (parseFloat(totalJobProfitFour_two) - parseFloat(netGACostDiv04_two) - parseFloat(divProfFourOverhead_two)*1.03) + (parseFloat(totalJobProfitFive_two) - parseFloat(netGACostDiv05_two) - parseFloat(divProfFiveOverhead_two)*1.03) + (parseFloat(totalJobProfitSix_two) - parseFloat(netGACostDiv06_two) - parseFloat(divProfSixOverhead_two)*1.03) + (parseFloat(totalJobProfitSeven_two) - parseFloat(netGACostDiv07_two) - parseFloat(divProfSevenOverhead_two)*1.03) + (parseFloat(totalJobProfitEleven_two) - parseFloat(netGACostDiv11_two) - parseFloat(divProfElevenOverhead_two)*1.03)) >= 0 ? Math.round((IncomeOperDiv00_two - (parseFloat(divDeferrCompOverhead_two)*1.03 + parseFloat(divProfZeroOverhead_two)*1.03 + parseFloat(divInvestCompOverhead_two)*1.03)) + (parseFloat(totalJobProfitOne_two) - parseFloat(netGACostDiv01_two) - parseFloat(divProfOneOverhead_two)*1.03) + (parseFloat(totalJobProfitTwo_two) - parseFloat(netGACostDiv02_two) - parseFloat(divProfTwoOverhead_two)*1.03) + (parseFloat(totalJobProfitThree_two) - parseFloat(netGACostDiv03_two) - parseFloat(divProfThreeOverhead_two)*1.03) + (parseFloat(totalJobProfitFour_two) - parseFloat(netGACostDiv04_two) - parseFloat(divProfFourOverhead_two)*1.03) + (parseFloat(totalJobProfitFive_two) - parseFloat(netGACostDiv05_two) - parseFloat(divProfFiveOverhead_two)*1.03) + (parseFloat(totalJobProfitSix_two) - parseFloat(netGACostDiv06_two) - parseFloat(divProfSixOverhead_two)*1.03) + (parseFloat(totalJobProfitSeven_two) - parseFloat(netGACostDiv07_two) - parseFloat(divProfSevenOverhead_two)*1.03) + (parseFloat(totalJobProfitEleven_two) - parseFloat(netGACostDiv11_two) - parseFloat(divProfElevenOverhead_two)*1.03)).toLocaleString(undefined, {maximumFractionDigits:2}) : '$('+ Math.round((IncomeOperDiv00_two - (parseFloat(divDeferrCompOverhead_two)*1.03 + parseFloat(divProfZeroOverhead_two)*1.03 + parseFloat(divInvestCompOverhead_two)*1.03)) + (parseFloat(totalJobProfitOne_two) - parseFloat(netGACostDiv01_two) - parseFloat(divProfOneOverhead_two)*1.03) + (parseFloat(totalJobProfitTwo_two) - parseFloat(netGACostDiv02_two) - parseFloat(divProfTwoOverhead_two)*1.03) + (parseFloat(totalJobProfitThree_two) - parseFloat(netGACostDiv03_two) - parseFloat(divProfThreeOverhead_two)*1.03) + (parseFloat(totalJobProfitFour_two) - parseFloat(netGACostDiv04_two) - parseFloat(divProfFourOverhead_two)*1.03) + (parseFloat(totalJobProfitFive_two) - parseFloat(netGACostDiv05_two) - parseFloat(divProfFiveOverhead_two)*1.03) + (parseFloat(totalJobProfitSix_two) - parseFloat(netGACostDiv06_two) - parseFloat(divProfSixOverhead_two)*1.03) + (parseFloat(totalJobProfitSeven_two) - parseFloat(netGACostDiv07_two) - parseFloat(divProfSevenOverhead_two)*1.03) + (parseFloat(totalJobProfitEleven_two) - parseFloat(netGACostDiv11_two) - parseFloat(divProfElevenOverhead_two)*1.03)).toLocaleString(undefined, {maximumFractionDigits:2}) +')'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{(((Math.round(IncomeOperDiv00_two - (parseFloat(divDeferrCompOverhead_two)*1.03 + parseFloat(divProfZeroOverhead_two)*1.03 + parseFloat(divInvestCompOverhead_two)*1.03)) + (parseFloat(totalJobProfitOne_two) - parseFloat(netGACostDiv01_two) - parseFloat(divProfOneOverhead_two)*1.03) + (parseFloat(totalJobProfitTwo_two) - parseFloat(netGACostDiv02_two) - parseFloat(divProfTwoOverhead_two)*1.03) + (parseFloat(totalJobProfitThree_two) - parseFloat(netGACostDiv03_two) - parseFloat(divProfThreeOverhead_two)*1.03) + (parseFloat(totalJobProfitFour_two) - parseFloat(netGACostDiv04_two) - parseFloat(divProfFourOverhead_two)*1.03) + (parseFloat(totalJobProfitFive_two) - parseFloat(netGACostDiv05_two) - parseFloat(divProfFiveOverhead_two)*1.03) + (parseFloat(totalJobProfitSix_two) - parseFloat(netGACostDiv06_two) - parseFloat(divProfSixOverhead_two)*1.03) + (parseFloat(totalJobProfitSeven_two) - parseFloat(netGACostDiv07_two) - parseFloat(divProfSevenOverhead_two)*1.03) + (parseFloat(totalJobProfitEleven_two) - parseFloat(netGACostDiv11_two) - parseFloat(divProfElevenOverhead_two)*1.03)) / (Math.round(Math.round(revenueTotal_two) +  Math.round(revenueABNCTotal_two) + Math.round(revenueFATotal_two) + ma_revenue_1_two + ma_revenue_2_two + ma_revenue_3_two + ma_revenue_4_two + ma_revenue_5_two + ma_revenue_6_two + ma_revenue_7_two + ma_revenue_11_two + ma_revenue_00_two))) * 100).toFixed(2) + '%'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign((preIncomeOperDiv01_two - predivProfOneOverhead_two*1.03) + (preIncomeOperDiv02_two - predivProfTwoOverhead_two*1.03) + (preIncomeOperDiv03_two - predivProfThreeOverhead_two*1.03) + (preIncomeOperDiv04_two - predivProfFourOverhead_two*1.03) + (preIncomeOperDiv05_two - predivProfFiveOverhead_two*1.03) + (preIncomeOperDiv06_two - predivProfSixOverhead_two*1.03) + (preIncomeOperDiv07_two - predivProfSevenOverhead_two*1.03) + (preIncomeOperDiv11_two - predivProfElevenOverhead_two*1.03) + (preIncomeOperDiv00_two - (parseFloat(predivDeferrCompOverhead_two)*1.03 + parseFloat(predivProfZeroOverhead_two)*1.03 + parseFloat(predivInvestCompOverhead_two)*1.03))) >= 0 ? '$' + Math.round((preIncomeOperDiv01_two - predivProfOneOverhead_two*1.03) + (preIncomeOperDiv02_two - predivProfTwoOverhead_two*1.03) + (preIncomeOperDiv03_two - predivProfThreeOverhead_two*1.03) + (preIncomeOperDiv04_two - predivProfFourOverhead_two*1.03) + (preIncomeOperDiv05_two - predivProfFiveOverhead_two*1.03) + (preIncomeOperDiv06_two - predivProfSixOverhead_two*1.03) + (preIncomeOperDiv07_two - predivProfSevenOverhead_two*1.03) + (preIncomeOperDiv11_two - predivProfElevenOverhead_two*1.03) + (preIncomeOperDiv00_two - (parseFloat(predivDeferrCompOverhead_two)*1.03 + parseFloat(predivProfZeroOverhead_two)*1.03 + parseFloat(predivInvestCompOverhead_two)*1.03))).toLocaleString(undefined, {maximumFractionDigits:2}) : '($' + ((preIncomeOperDiv01_two - predivProfOneOverhead_two*1.03) + (preIncomeOperDiv02_two - predivProfTwoOverhead_two*1.03) + (preIncomeOperDiv03_two - predivProfThreeOverhead_two*1.03) + (preIncomeOperDiv04_two - predivProfFourOverhead_two*1.03) + (preIncomeOperDiv05_two - predivProfFiveOverhead_two*1.03) + (preIncomeOperDiv06_two - predivProfSixOverhead_two*1.03) + (preIncomeOperDiv07_two - predivProfSevenOverhead_two*1.03) + (preIncomeOperDiv11_two - predivProfElevenOverhead_two*1.03) + (preIncomeOperDiv00_two - (parseFloat(predivDeferrCompOverhead_two)*1.03 + parseFloat(predivProfZeroOverhead_two)*1.03 + parseFloat(predivInvestCompOverhead_two)*1.03))).toLocaleString(undefined, {maximumFractionDigits:2}) + ')'}</th> 
                <th style={{ textAlign: 'center', fontWeight: 'normal'}}>{Math.sign((Math.round((IncomeOperDiv00_two - (parseFloat(divDeferrCompOverhead_two)*1.03 + parseFloat(divProfZeroOverhead_two)*1.03 + parseFloat(divInvestCompOverhead_two)*1.03)) + (parseFloat(totalJobProfitOne_two) - parseFloat(netGACostDiv01_two) - parseFloat(divProfOneOverhead_two)*1.03) + (parseFloat(totalJobProfitTwo_two) - parseFloat(netGACostDiv02_two) - parseFloat(divProfTwoOverhead_two)*1.03) + (parseFloat(totalJobProfitThree_two) - parseFloat(netGACostDiv03_two) - parseFloat(divProfThreeOverhead_two)*1.03) + (parseFloat(totalJobProfitFour_two) - parseFloat(netGACostDiv04_two) - parseFloat(divProfFourOverhead_two)*1.03) + (parseFloat(totalJobProfitFive_two) - parseFloat(netGACostDiv05_two) - parseFloat(divProfFiveOverhead_two)*1.03) + (parseFloat(totalJobProfitSix_two) - parseFloat(netGACostDiv06_two) - parseFloat(divProfSixOverhead_two)*1.03) + (parseFloat(totalJobProfitSeven_two) - parseFloat(netGACostDiv07_two) - parseFloat(divProfSevenOverhead_two)*1.03) + (parseFloat(totalJobProfitEleven_two) - parseFloat(netGACostDiv11_two) - parseFloat(divProfElevenOverhead_two)*1.03))  - Math.round((preIncomeOperDiv01_two - predivProfOneOverhead_two*1.03) + (preIncomeOperDiv02_two - predivProfTwoOverhead_two*1.03) + (preIncomeOperDiv03_two - predivProfThreeOverhead_two*1.03) + (preIncomeOperDiv04_two - predivProfFourOverhead_two*1.03) + (preIncomeOperDiv05_two - predivProfFiveOverhead_two*1.03) + (preIncomeOperDiv06_two - predivProfSixOverhead_two*1.03) + (preIncomeOperDiv07_two - predivProfSevenOverhead_two*1.03) + (preIncomeOperDiv11_two - predivProfElevenOverhead_two*1.03) + (preIncomeOperDiv00_two - (parseFloat(predivDeferrCompOverhead_two)*1.03 + parseFloat(predivProfZeroOverhead_two)*1.03 + parseFloat(predivInvestCompOverhead_two)*1.03))))) >= 0 ? '$' + (Math.round((IncomeOperDiv00_two - (parseFloat(divDeferrCompOverhead_two)*1.03 + parseFloat(divProfZeroOverhead_two)*1.03 + parseFloat(divInvestCompOverhead_two)*1.03)) + (parseFloat(totalJobProfitOne_two) - parseFloat(netGACostDiv01_two) - parseFloat(divProfOneOverhead_two)*1.03) + (parseFloat(totalJobProfitTwo_two) - parseFloat(netGACostDiv02_two) - parseFloat(divProfTwoOverhead_two)*1.03) + (parseFloat(totalJobProfitThree_two) - parseFloat(netGACostDiv03_two) - parseFloat(divProfThreeOverhead_two)*1.03) + (parseFloat(totalJobProfitFour_two) - parseFloat(netGACostDiv04_two) - parseFloat(divProfFourOverhead_two)*1.03) + (parseFloat(totalJobProfitFive_two) - parseFloat(netGACostDiv05_two) - parseFloat(divProfFiveOverhead_two)*1.03) + (parseFloat(totalJobProfitSix_two) - parseFloat(netGACostDiv06_two) - parseFloat(divProfSixOverhead_two)*1.03) + (parseFloat(totalJobProfitSeven_two) - parseFloat(netGACostDiv07_two) - parseFloat(divProfSevenOverhead_two)*1.03) + (parseFloat(totalJobProfitEleven_two) - parseFloat(netGACostDiv11_two) - parseFloat(divProfElevenOverhead_two)*1.03))  - Math.round((preIncomeOperDiv01_two - predivProfOneOverhead_two*1.03) + (preIncomeOperDiv02_two - predivProfTwoOverhead_two*1.03) + (preIncomeOperDiv03_two - predivProfThreeOverhead_two*1.03) + (preIncomeOperDiv04_two - predivProfFourOverhead_two*1.03) + (preIncomeOperDiv05_two - predivProfFiveOverhead_two*1.03) + (preIncomeOperDiv06_two - predivProfSixOverhead_two*1.03) + (preIncomeOperDiv07_two - predivProfSevenOverhead_two*1.03) + (preIncomeOperDiv11_two - predivProfElevenOverhead_two*1.03) + (preIncomeOperDiv00_two - (parseFloat(predivDeferrCompOverhead_two)*1.03 + parseFloat(predivProfZeroOverhead_two)*1.03 + parseFloat(predivInvestCompOverhead_two)*1.03)))).toLocaleString(undefined, {maximumFractionDigits:2}) : '$(' + (Math.round((IncomeOperDiv00_two - (parseFloat(divDeferrCompOverhead_two)*1.03 + parseFloat(divProfZeroOverhead_two)*1.03 + parseFloat(divInvestCompOverhead_two)*1.03)) + (parseFloat(totalJobProfitOne_two) - parseFloat(netGACostDiv01_two) - parseFloat(divProfOneOverhead_two)*1.03) + (parseFloat(totalJobProfitTwo_two) - parseFloat(netGACostDiv02_two) - parseFloat(divProfTwoOverhead_two)*1.03) + (parseFloat(totalJobProfitThree_two) - parseFloat(netGACostDiv03_two) - parseFloat(divProfThreeOverhead_two)*1.03) + (parseFloat(totalJobProfitFour_two) - parseFloat(netGACostDiv04_two) - parseFloat(divProfFourOverhead_two)*1.03) + (parseFloat(totalJobProfitFive_two) - parseFloat(netGACostDiv05_two) - parseFloat(divProfFiveOverhead_two)*1.03) + (parseFloat(totalJobProfitSix_two) - parseFloat(netGACostDiv06_two) - parseFloat(divProfSixOverhead_two)*1.03) + (parseFloat(totalJobProfitSeven_two) - parseFloat(netGACostDiv07_two) - parseFloat(divProfSevenOverhead_two)*1.03) + (parseFloat(totalJobProfitEleven_two) - parseFloat(netGACostDiv11_two) - parseFloat(divProfElevenOverhead_two)*1.03))  - Math.round((preIncomeOperDiv01_two - predivProfOneOverhead_two*1.03) + (preIncomeOperDiv02_two - predivProfTwoOverhead_two*1.03) + (preIncomeOperDiv03_two - predivProfThreeOverhead_two*1.03) + (preIncomeOperDiv04_two - predivProfFourOverhead_two*1.03) + (preIncomeOperDiv05_two - predivProfFiveOverhead_two*1.03) + (preIncomeOperDiv06_two - predivProfSixOverhead_two*1.03) + (preIncomeOperDiv07_two - predivProfSevenOverhead_two*1.03) + (preIncomeOperDiv11_two - predivProfElevenOverhead_two*1.03) + (preIncomeOperDiv00_two - (parseFloat(predivDeferrCompOverhead_two)*1.03 + parseFloat(predivProfZeroOverhead_two)*1.03 + parseFloat(predivInvestCompOverhead_two)*1.03)))).toLocaleString(undefined, {maximumFractionDigits:2}) +  ')'}</th>
            </tr>
      </>
    }
    
    }


    render(){

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
          <Navbar.Brand href="/financial/main"><img src={ require('../images/logo.png') } alt="carolldaniellogo" className="mainLogo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                  <Nav.Link style={{color: 'white'}} href="/financial/main">Home</Nav.Link>
                  <Nav.Link style={{color: 'white'}} href="/financial/Graphs">Graphs</Nav.Link>
                  <Nav.Link style={{color: 'white'}} href="/financial/Graphs2">Graphs2</Nav.Link>
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
                  <Col className="FY19Plan">
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


export default withAuth(Main);
