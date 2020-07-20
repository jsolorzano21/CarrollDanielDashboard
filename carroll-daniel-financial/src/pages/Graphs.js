/* eslint-disable no-loop-func */
import React, { Component } from 'react'
import { Bar, Line } from 'react-chartjs-2'
import 'chartjs-plugin-trendline';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import withAuth from '../services/withAuth'
import AuthHelperMethods from '../services/AuthHelperMethods';
import '../global'
import axios from 'axios' 
import Toggle from 'react-toggle'
import * as jwt_decode from 'jwt-decode';
import { Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'

var divisionNum = 0;
var divisionNumABNC = 0;
var divisionNumFA = 0;
var currentYearResp = '';
var sumValueContract = '';
var sumValueMonthlyContract = '';
var sumValueContractInfo = '';
var sumValueProfit = '';
var sumValueProfitInfo = '';
var sumValueOtherInfo = '';
var sumValueOtherInfoProfit = '';
var sumValueContractTotal = '';
var sumValueProfitTotal = '';
var sumValueABNCTotal = '';
var sumValueABNCTotalProfit = '';
var sumValueOtherTotal = '';
var sumValueOtherTotalProfit = '';
var divisionData = '';
var divisionDataProfit = '';
var profitValueContract = '';
var divisionValueRevContract = '';
var divisionValueRevProfit = '';
var sumValueABNC = '';
var sumValueABNCInfo = '';
var sumValueABNCProfit = '';
var sumValueABNCInfoProfit = '';
var profitValueABNC = '';
var divisionValueRevABNC = '';
var divisionValueRevABNCProfit = '';
var divisionValueProfitABNC = '';
var sumValueOther = '';
var sumValueOtherProfit = '';
var profitValueOther = '';
var divisionValueRevOther = '';
var divisionValueRevOtherProfit = '';
var divisionValueProfitOther = '';
var countClicks = 1;
var countClicksProfit = 1;
var selectedValue = '';
var selectedValueDivision = '';
var profitTotal = 0;
var dateCheck = '';
var contractTotal = 0;
var expectedConAmount = 0;
var expectedRevenue = 0;
var expectedProfit = 0;
var expectedBacklog = 0;
var expectedFutureRev = 0;
var expectedFutureProf = 0;
var expectedFutureBack = 0;
let combinedDivisionNumbers = [];


const stateTest = {
  labels: ['Jan', 'Feb', 'March','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec','Jan', 'Feb', 'March','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec'],
    datasets: [
      {
        label: 'Backlog',
        data: [167.8,111.8,167.8,43449815.58,40026073.22,37979585.45,35910752.92,34628044.48,32209633.68,30203773.77,28218876.04,26381886.97,23508866.19,20062889.15,17797518.03,16135293.89,14136387.16,13097846.78,11942548.84,11513776.99,11530787.23,11459850.8,11111594.15,10030486.53],
        backgroundColor: '#D6E9C6' // green
      },
      {
        label: 'ABNC',
        data: [20.7,22.7,20.7,72476.9,378172.45,1073751.87,2218622.64,3182413.98,3978061.85,4278212.9,4048580.05,3528215.35,3449792.68,3717942.06,3961913.09,3860884.12,3937797.2,3831768.23,3305739.26,3107652.35,3000594.41,2907507.49,2890449.55,2781333.67],
        backgroundColor: '#FAEBCC' // yellow
      },
      {
        label: 'FA',
        data: [11.4,55.3,11.4,80348.6,130284.6,227718.9,471002.74,883826.97,1403008.8,2035885.54,2870970.91,3576856.23,4359559.18,5135780.87,6023047.02,6648076.41,7193905.51,7387606.79,7130912.3,6463753.86,5794935.04,5118496.53,4240043.34,3876755.39],
        backgroundColor: '#EBCCD1' // red
      },
      {
        label: 'Totals',
        data: [199.9,189.8,199.9,189.8,199.9,189.8,199.9,189.8,199.9,189.8,199.9,189.8,199.9,189.8,199.9,189.8,199.9,189.8,199.9,189.8,1199.9,1189.8,1199.9,1189.8,],
        trendlineLinear: {
          style: "rgba(255,105,180, .8)",
          lineStyle: "solid",
          width: 2
        },
        fill: false,
        backgroundColor: 'transparent'
      }
    ]
 }

 const stateTest2 = {
  labels: ['Division 1', 'Division 2', 'Division 3','Division 4','Division 5','Division 6','Division 7','Division 11'],
    datasets: [
      {
        label: 'Backlog',
        data: [167.8,111.8,167.8,111.8,167.8,111.8,167.8,111.8,167.8,111.8,167.8,111.8,167.8,111.8,167.8,111.8,167.8,111.8,167.8,111.8,1167.8,1111.8,1167.8,1111.8],
        backgroundColor: '#D6E9C6' // green
      },
      {
        label: 'ABNC',
        data: [20.7,22.7,20.7,22.7,20.7,22.7,20.7,22.7,20.7,22.7,20.7,22.7,20.7,22.7,20.7,22.7,20.7,22.7,20.7,22.7,120.7,122.7,120.7,122.7],
        backgroundColor: '#FAEBCC' // yellow
      },
      {
        label: 'FA',
        data: [11.4,55.3,11.4,55.3,11.4,55.3,11.4,55.3,11.4,55.3,11.4,55.3,11.4,55.3,11.4,55.3,11.4,55.3,11.4,55.3,111.4,155.3,111.4,155.3],
        backgroundColor: '#EBCCD1' // red
      },
      {
        label: 'Totals',
        data: [199.9,189.8,199.9,189.8,199.9,189.8,199.9,189.8,199.9,189.8,199.9,189.8,199.9,189.8,199.9,189.8,199.9,189.8,199.9,189.8,1199.9,1189.8,1199.9,1189.8,],
        trendlineLinear: {
          style: "rgba(255,105,180, .8)",
          lineStyle: "solid",
          width: 2
        },
        fill: false,
        backgroundColor: 'transparent'
      }
    ]
 }

//retrieves all the distinct divisions
const distinct = (divisionVal,index,self) => {
  return self.indexOf(divisionVal) === index;
}

//holds all the divisions that will be filtered later
const div = [];
const yearValues = [];


class Graphs extends Component{

  constructor(props) {
    super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = { //state is by default an object
      userRole: '',
      currentYearLabel: '',
      currentYearLabelProfit: '',
      ProjectReportData: [],
      dataLoadCheck: null,
      dataSet: {},
      dataSetProfit: {},
      revenueTotal: {},
      revenueTotalProfit: {},
      combinedDivisionDataSet: {},
      combinedDivisionDataSetProfit: {},
      dataLabel: [],
      uniqueDiv: [],
      dataSetRecord : [],
      dataSetRecordProfit: [],
      revenueYearRecord : [],
      revenueYearRecordProfit : [],
      combinedYearRecord : [],
      divisionCombinedRecord : [],
      homeState: [],
      homeStateProfit: [],
      divYearQuarter : [],
      ManagementAdjData: [],
      displayButton: false,
      changeGraph: false,
      checkClicks: false,
      checkClicksProfit: false,
      displayButtonProfit: false,
      changeGraphProfit: false,
    }
    this.updateState = this.updateState.bind(this);
    this.updateStateProfit = this.updateStateProfit.bind(this);
    this.previousScreenFunction = this.previousScreenFunction.bind(this);
    this.previousScreenFunctionProfit = this.previousScreenFunctionProfit.bind(this);
    this.handleGraphChange = this.handleGraphChange.bind(this);
    this.handleGraphChangeProfit = this.handleGraphChangeProfit.bind(this);
 }

  /* Create a new instance of the 'AuthHelperMethods' compoenent*/
  Auth = new AuthHelperMethods();

  _handleLogout = () => {
    this.Auth.logout()
    this.props.history.replace('/financial/login');
  }

  handleGraphChange(){
    this.setState(prevState => ({
      changeGraph: !prevState.changeGraph
    }));
  }

  handleGraphChangeProfit(){
    this.setState(prevState => ({
      changeGraphProfit: !prevState.changeGraphProfit
    }));
  }

  updateState(element, element2){
    var e = element2[0];
    //console.log(element[0]._index)
    if(e !== undefined){
        
        if(countClicks === 1){
          selectedValue = e._model.label;
        }


        console.log(element)
        console.log(element2)
        var distinctYears = yearValues.filter(distinct).sort((a,b) => a - b);

        if(distinctYears[distinctYears.length - 1] === selectedValue){
          //this.state.combinedDivisionDataSet
          console.log("1st entered")
          if(e !== undefined && countClicks === 1){
            countClicks++;
            let dataCompany = Object.assign({}, this.state.combinedDivisionDataSet);
            this.setState({ revenueTotal: dataCompany, displayButton: true, currentYearLabel: selectedValue})
          }else if(e !== undefined && countClicks === 2){
            countClicks++;
            //let dataProject = Object.assign({}, this.state.stateSelected);
            this.setState({ checkClicks: true})
          }
        }else{
            if(e !== undefined && countClicks === 1){
              selectedValue = e._model.label;
              countClicks++;
              //console.log(e._model.label)
              //console.log(this.state["DivisionDataRecord" + selectedValue])
              //console.log(this.state["DivisionDataRecord" + 2020])


              let dataCompany = Object.assign({}, this.state.dataSet);
              //console.log(dataCompany)
              const labelValue = [];
              for (const [index, value] of dataCompany.labels.entries()) {
                if(value.includes(e._model.label)){
                  labelValue.push(value);
                  for (const [index2, value] of dataCompany.datasets.entries()) {
                    if(index == index2){
                      console.log(value.data[index]);
                    }
                  }  
                }
              }
              var check = {
                labels: labelValue,
                datasets: this.state["DivisionDataRecord" + selectedValue]
              }
              this.setState({ revenueTotal: check, displayButton: true, currentYearLabel: selectedValue})
            }else if(e !== undefined && countClicks === 2){
              var year = e._model.label;
              var yearValue = year.substr(year.length - 4)
              var quarter = e._model.label;
              var quarterValue = quarter.substr(1,2)
              var division =  e._model.datasetLabel;
              var numb = division.match(/\d/g);
              numb = numb.join("");
              console.log(" Division: " + numb + " year: " + yearValue +  " Quarter: " + quarterValue)
              countClicks++;
              //let dataProject = Object.assign({}, this.state.stateSelected);
              ///combinedDivisionNumbers.push(this.state["sumRevContractInfo" + (numb) + (yearValue) + (quarterValue).trim()])
              //combinedDivisionNumbers.push(this.state["sumRevABNCInfo" + (numb) + (yearValue) + (quarterValue).trim()])
              //combinedDivisionNumbers.push(this.state["sumRevOtherInfo" + (numb) + (yearValue) + (quarterValue).trim()])
              combinedDivisionNumbers.push(this.state["sumRevContractInfo120201"])
              combinedDivisionNumbers.push(this.state["sumRevABNCInfo120201"])
              combinedDivisionNumbers.push(this.state["sumRevOtherInfo120201"])
              this.setState({ checkClicks: true})
              
              //merge states here
            }
          }

      }
  }

  updateStateProfit(element, element2){
    var e = element2[0];
    //console.log(element[0]._index)
    if(e !== undefined){
      
      if(countClicks === 1){
        selectedValue = e._model.label;
      }


        console.log(element)
        console.log(element2)
        var distinctYears = yearValues.filter(distinct).sort((a,b) => a - b);

        if(distinctYears[distinctYears.length - 1] === selectedValue){
          //this.state.combinedDivisionDataSet
          console.log("1st entered")
          if(e !== undefined && countClicksProfit === 1){
            countClicksProfit++;
            let dataCompany = Object.assign({}, this.state.combinedDivisionDataSetProfit);
            this.setState({ revenueTotalProfit: dataCompany, displayButtonProfit: true, currentYearLabelProfit: selectedValue})
          }else if(e !== undefined && countClicksProfit === 2){
            countClicksProfit++;
            //let dataProject = Object.assign({}, this.state.stateSelected);
            this.setState({ checkClicksProfit: true})
          }
        }else{
            if(e !== undefined && countClicksProfit === 1){
              //selectedValue = e._model.label;
              countClicksProfit++;
              //console.log(e._model.label)
              //console.log(this.state["DivisionDataRecord" + selectedValue])
              //console.log(this.state["DivisionDataRecord" + 2020])


              let dataCompany = Object.assign({}, this.state.dataSetProfit);
              //console.log(dataCompany)
              const labelValue = [];
              for (const [index, value] of dataCompany.labels.entries()) {
                if(value.includes(e._model.label)){
                  labelValue.push(value);
                  for (const [index2, value] of dataCompany.datasets.entries()) {
                    if(index == index2){
                      console.log(value.data[index]);
                    }
                  }  
                }
              }
              var check = {
                labels: labelValue,
                datasets: this.state["DivisionDataRecordProfit" + selectedValue]
              }
              this.setState({ revenueTotalProfit: check, displayButtonProfit: true, currentYearLabelProfit: selectedValue})
            }else if(e !== undefined && countClicksProfit === 2){
              console.log(e)
              var year = e._model.label;
              var yearValue = year.substr(year.length - 5)
              var quarter = e._model.label;
              var quarterValue = quarter.substr(1,2)
              var division =  e._model.datasetLabel;
              var numb = division.match(/\d/g);
              //numb = numb.join("");
              console.log(" Division: " + numb + " year: " + selectedValue +  " Quarter: " + quarterValue)
              countClicksProfit++;
              //let dataProject = Object.assign({}, this.state.stateSelected);
              combinedDivisionNumbers.push(this.state["sumRevProfitInfo120201"])
              combinedDivisionNumbers.push(this.state["sumRevABNCInfoProfit120201"])
              combinedDivisionNumbers.push(this.state["sumRevOtherInfoProfit120201"])
              this.setState({ checkClicksProfit: true})
              
              //merge states here
            }
          }

      }
  }

  previousScreenFunction(){
    if(countClicks === 3){
      countClicks--;
      let dataCompany = Object.assign({}, this.state.dataSet);
      console.log(selectedValue)
      var lastFour = selectedValue.substr(selectedValue.length - 4);
      const labelValue = [];
      for (const [index, value] of dataCompany.labels.entries()) {
        if(value.includes(lastFour)){
          labelValue.push(value);
          //dataCompany.labels.splice(index, 1);
          for (const [index2, value] of dataCompany.datasets.entries()) {
             if(index == index2){
              //console.log(value.data[index]);
             }
          }  
        }
      }
      var check = {
        labels: labelValue,
        datasets: this.state.dataSetRecord
      }
      this.setState({ currentState: check, displayButton: true, checkClicks: false})
    }else if(countClicks === 2){
      countClicks--;
      let dataYearly = Object.assign({}, this.state.homeState);
      console.log("Click 2 entered" + countClicks)
      console.log(this.state.homeState)
      this.setState({ revenueTotal: dataYearly, displayButton: false, checkClicks: false})
    }
  }

  previousScreenFunctionProfit(){
    if(countClicksProfit === 3){
      countClicksProfit--;
      let dataCompany = Object.assign({}, this.state.dataSetProfit);
      console.log(selectedValue)
      var lastFour = selectedValue.substr(selectedValue.length - 4);
      const labelValue = [];
      for (const [index, value] of dataCompany.labels.entries()) {
        if(value.includes(lastFour)){
          labelValue.push(value);
          //dataCompany.labels.splice(index, 1);
          for (const [index2, value] of dataCompany.datasets.entries()) {
             if(index == index2){
              //console.log(value.data[index]);
             }
          }  
        }
      }
      var checkProfit = {
        labels: labelValue,
        datasets: this.state.dataSetRecordProfit
      }
      this.setState({ currentStateProfit: checkProfit, displayButtonProfit: true, checkClicksProfit: false})
    }else if(countClicksProfit === 2){
      countClicksProfit--;
      let dataYearly = Object.assign({}, this.state.homeStateProfit);
      console.log("Click 2 entered" + countClicksProfit)
      console.log(this.state.homeStateProfit)
      this.setState({ revenueTotalProfit: dataYearly, displayButtonProfit: false, checkClicksProfit: false})
    }
  }

  renderTableHeader(value) {
    if(value === 'headerSection'){
      return <><th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>Dept Code</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>Job Number</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>Job Name</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>Type</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>Contract Amount</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>Gross Margin</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>Gross Margin %</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>Hit Ratio</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>Backlog</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>Start Date</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>Duration (Months)</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>Revenue - {this.state.currentYearLabel}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>Gross Margin - {this.state.currentYearLabel}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>Revenue - {parseInt(this.state.currentYearLabel)+1}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>Gross Margin - {parseInt(this.state.currentYearLabel)+1}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>Revenue - {parseInt(this.state.currentYearLabel)+2}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>Gross Margin - {parseInt(this.state.currentYearLabel)+2}</th>
             </>
   }
  }

  componentDidMount(){

    var tokenValue = localStorage.getItem("data-token")
    const AuthStr = 'Mstoken '.concat(tokenValue);


    axios.all([
      axios.get(
        "https://rest-site-locations-1594736464770.azurewebsites.net/api/financialUpdateQuarterData",
        {headers: {
            "Authorization" : AuthStr,
            "Content-Type" : "application/json"
          }
        }
      ),
      axios.get(
        "https://rest-site-locations-1594736464770.azurewebsites.net/api/financialResultsData",
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
      ),
      axios.get(
        "https://rest-site-locations-1594736464770.azurewebsites.net/api/financialYearlyQuarterLabel",
        {headers: {
            "Authorization" : AuthStr,
            "Content-Type" : "application/json"
          }
        }
      )
    ]).then(axios.spread((response, response2, response3, response4) => {
      var yearlyQuarterLabel = response4['data'];

      var optionsLabels = [];
      console.log("Values Loaded")
      yearlyQuarterLabel.forEach(function (values){
        const { label } = values
        optionsLabels.push(label)

      })

      var currentQuarterResponse = response['data'];
      currentQuarterResponse.forEach(function (values){
      const { current_year} = values //destructing

      //currentQuarterResp = current_quarter;
      currentYearResp = current_year;

    })

      var dataValue = response2['data'];
      var dataManagementAdjustment = response3['data']
      var decoded = jwt_decode(localStorage.getItem('data-token'));
      //this.setState({ ProjectReportData: dataValue, dataLabel: optionsLabels, ManagementAdjData: dataManagementAdjustment, dataLoadCheck: dataValue, userRole: decoded.roles});
      //this.setState({ dataLoadCheck: dataValue });
      //this.setState({ userRole: decoded.roles});

      const newState = {}
      //retrieve data
      dataValue.map((FY19Plan) => {
        const {  _id, division, status, dept_job, job_name, year, quarter, contract_amount, gross_margin_percent, hit_ratio, earned_revenue_YTD, 
              end_date, backlog, bonded, earned_revenue, start_date } = FY19Plan //destructuring


        var profit = 0;
        //checking for record quarter and year to set date
        if(quarter === "1"){
          dateCheck = new Date('3/31/' + year)
        }
        else if(quarter === "2"){
         dateCheck = new Date('6/30/' + year)
        }
        else if(quarter === "3"){
          dateCheck = new Date('9/30/' + year)
        }
        else if(quarter === "4"){
          dateCheck = new Date('12/31/' + year)
        }

        //const now = new Date(currentQuarter);
        const pastDate = new Date(end_date);
        const startDate = new Date(start_date);
        var checkStartValue = startDate.getMonth() - dateCheck.getMonth() + 
          (12 * (startDate.getFullYear() - dateCheck.getFullYear()))
        const checkMonth = dateCheck.getMonth() === pastDate.getMonth() && dateCheck.getFullYear() === pastDate.getFullYear();
        var totalForcastRevenue = '';
        var totalExpectedRevenue = '';
        var expectedContractAmount = '';
        var profitCurrentYear = '';
        var totalMonths =  (pastDate.getFullYear() - startDate.getFullYear()) * 12 + (pastDate.getMonth() - startDate.getMonth() + 1);
        var currentBacklogValue = '';
        var CurrentMonthOfProject =  (dateCheck.getFullYear() - startDate.getFullYear()) * 12 + (dateCheck.getMonth() - startDate.getMonth() + 1);
        var backlogValue = parseFloat(contract_amount) - parseFloat(earned_revenue);
        var futureRevenue = 0;
        var burnOffSum = 0;
        var futureProfit = 0;
        var futureBacklog = 0;
        var converter = require('number-to-words');
        var newValue = converter.toWords(totalMonths);
        var earnedRevenueYTDValue = 0;
        contractTotal += parseFloat(contract_amount); 
        var futureRevenueThree = 0;
        var futureProfitThree = 0;
        var totalForcastProfit = '';
        var totalExpectedProfit = '';
        var earnedProfitYTDValue;
        
        div.push(division);
        yearValues.push(year);
      
    
      if(status === 'Contract' && checkMonth !== 'true'){
        profit = (parseFloat(contract_amount) * (gross_margin_percent / 100));
        profitTotal += profit;
        //checking if the end date has already passed
        if((pastDate <= dateCheck  && checkMonth === true) || pastDate <= dateCheck){
          totalForcastRevenue = 0;
          totalForcastProfit = 0;
          if(quarter === '4'){
            earnedRevenueYTDValue = 0;
            earnedProfitYTDValue = 0;
            totalExpectedRevenue = parseFloat(earnedRevenueYTDValue) + parseFloat(totalForcastRevenue);
          }else if(quarter === '3'){
            earnedRevenueYTDValue = earned_revenue_YTD;
            earnedProfitYTDValue = earned_revenue_YTD * (gross_margin_percent/100);
            totalExpectedRevenue = parseFloat(earnedRevenueYTDValue) + parseFloat(totalForcastRevenue);
          }else if(quarter === '2'){
            earnedRevenueYTDValue = earned_revenue_YTD;
            earnedProfitYTDValue = earned_revenue_YTD * (gross_margin_percent/100);
            totalExpectedRevenue = parseFloat(earnedRevenueYTDValue) + parseFloat(totalForcastRevenue);
          }else if(quarter === '1'){
            earnedRevenueYTDValue = earned_revenue_YTD;
            earnedProfitYTDValue = earned_revenue_YTD * (gross_margin_percent/100);
            totalExpectedRevenue = parseFloat(earnedRevenueYTDValue) + parseFloat(totalForcastRevenue);
          }
          profitCurrentYear = (parseFloat(earnedRevenueYTDValue) * (gross_margin_percent/100)) + (parseFloat(totalForcastRevenue) * (gross_margin_percent/100));
          expectedContractAmount = Math.round((parseFloat(earned_revenue) + (parseFloat(contract_amount) - parseFloat(earned_revenue))) * hit_ratio/100);
          totalExpectedProfit =  parseFloat(totalForcastProfit) + parseFloat(earnedProfitYTDValue);
          currentBacklogValue = 0;
          futureBacklog = 0;
        }else {

          totalForcastRevenue = backlog;
          expectedContractAmount = Math.round((parseFloat(earned_revenue) + (parseFloat(contract_amount) - parseFloat(earned_revenue))) * hit_ratio/100);
          for(var j=0; j < global.burnOffChart.length; j++){
            if(j >= CurrentMonthOfProject && j < totalMonths){
                var obj = global.burnOffChart[j][newValue]
                //console.log("Job Name: " + job_name + "totalMonths: " + totalMonths + " Current: " + CurrentMonthOfProject + " checkMonth: " + checkMonth + " Past Date: " + pastDate + " Now: " + now)
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

           if(quarter === "4"){
            forecastNumber = 12;
            maxForecastNumber = 12 + 12;
            earnedRevenueYTDValue = 0;
            earnedProfitYTDValue = 0;
          }else if(quarter === "1"){
            forecastNumber = 9;
            maxForecastNumber = 9 + 12;
            earnedRevenueYTDValue = earned_revenue_YTD;
            earnedProfitYTDValue = earned_revenue_YTD * (gross_margin_percent/100);
          }else if(quarter === "2"){
            forecastNumber = 6;
            maxForecastNumber = 6 + 12;
            earnedRevenueYTDValue = earned_revenue_YTD;
            earnedProfitYTDValue = earned_revenue_YTD * (gross_margin_percent/100);
          }else if(quarter === "3"){
            forecastNumber = 3;
            maxForecastNumber = 3 + 12;
            earnedRevenueYTDValue = earned_revenue_YTD;
            earnedProfitYTDValue = earned_revenue_YTD * (gross_margin_percent/100);
          }
          
          if(startDate > dateCheck){
            for(var i=1; i < checkStartValue; i++){
              checkloop += 1;
            }
          }


          for (var k=0; k < global.burnOffChart.length; k++) {
            if(k >= CurrentMonthOfProject){
              var valueFound = global.burnOffChart[k][newValue];
              var monthlyValue =  (backlogValue * valueFound) / burnOffSum;
              if(year === '2020' && quarter === '1' && monthlyValue > 0){
                console.log("KJ Value: " + k + " MonthlyValue: " + monthlyValue + " Job Name: " + job_name + " Check Loop: " + checkloop)
                sumValueMonthlyContract = "sumRevMonthlyContract" + division + year + quarter
              }
              //console.log("Job Name: " + job_name + " Value: " + valueFound + " Monthly: " + monthlyValue) 
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
          futureRevenueThree = futureRevenueValue ? futureRevenueValue : 0;
          futureProfitThree = parseFloat(futureRevenueThree) * (gross_margin_percent/100);
          totalExpectedRevenue = parseFloat(forecastData) + parseFloat(earnedRevenueYTDValue) ? parseFloat(forecastData) + parseFloat(earnedRevenueYTDValue) : 0;
          currentBacklogValue = (futureForecastData + futureRevenueValue) ? (futureForecastData + futureRevenueValue) : 0;
          profitCurrentYear = (parseFloat(totalExpectedRevenue) * (gross_margin_percent/100));
          futureProfit = parseFloat(futureRevenue) * (gross_margin_percent/100);
          futureBacklog = futureRevenueValue ? futureRevenueValue : 0;
          totalForcastProfit = forecastData * (gross_margin_percent/100) ? forecastData * (gross_margin_percent/100) : 0;
          totalExpectedProfit = parseFloat(totalForcastProfit) + parseFloat(earnedProfitYTDValue);
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
        if(quarter === "4"){
          forecastNumberProjected = 12;
          maxForecastNumberProjected = 12 + 12; 
        }else if(quarter === "1"){
          forecastNumberProjected = 9;
          maxForecastNumberProjected = 9 + 12;
        }else if(quarter === "2"){
          forecastNumberProjected = 6;
          maxForecastNumberProjected = 6 + 12;
        }else if(quarter === "3"){
          forecastNumberProjected = 3;
          maxForecastNumberProjected = 3 + 12;
        }

        if(startDate > dateCheck){
          for(var il=1; il < checkStartValue; il++){
            checkloopProjected += 1;
          }
          checkCompleted += 1;
        } 

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
        }

        expectedContractAmount = (parseFloat(contract_amount) * (parseInt(hit_ratio)/100));
        totalForcastRevenue = (parseFloat(contract_amount) * (parseInt(hit_ratio)/100)) - earned_revenue;
        totalExpectedRevenue = forecastDataProjected ? forecastDataProjected : 0;
        //totalExpectedRevenue = (parseFloat(totalExpectedRevenue) * (gross_margin_percent/100));
        currentBacklogValue = (futureForecastDataProjected + futureRevenueValueProjected) ? (futureForecastDataProjected + futureRevenueValueProjected) : 0;
        futureRevenue = futureForecastDataProjected ? futureForecastDataProjected : 0;
        futureRevenueThree = futureRevenueValueProjected ? futureRevenueValueProjected : 0;
        futureProfitThree = parseFloat(futureRevenueThree) * (gross_margin_percent/100);
        futureProfit = parseFloat(futureRevenue) * (gross_margin_percent/100);
        profit = (parseFloat(expectedContractAmount) * (gross_margin_percent / 100));
        profitCurrentYear = (parseFloat(totalExpectedRevenue) * (gross_margin_percent/100));
        profitTotal += profit;
        futureBacklog = futureRevenueValueProjected ? futureRevenueValueProjected : 0;
        totalForcastProfit = forecastDataProjected ? forecastDataProjected * (gross_margin_percent/100): 0// * (gross_margin_percent/100) : 0;
        earnedProfitYTDValue = 0;
        totalExpectedProfit = totalForcastProfit + earnedProfitYTDValue;
      }

        expectedConAmount += expectedContractAmount;
        expectedRevenue += parseFloat(totalExpectedRevenue);
        expectedProfit += profitCurrentYear;
        expectedBacklog += parseFloat(currentBacklogValue);
        expectedFutureRev += futureRevenue;
        expectedFutureProf += futureProfit;
        expectedFutureBack += futureBacklog;


            if(status === "Contract"){

                  if(this.state["sumRevContract" + (division) + (year) + (quarter)] === undefined){
                    sumValueContract = "sumRevContract" + division + year + quarter
                    sumValueContractInfo = "sumRevContractInfo" + division + year + quarter

                    sumValueProfit = "sumRevProfit" + division + year + quarter
                    sumValueProfitInfo = "sumRevProfitInfo" + division + year + quarter
  
                    newState["sumRevContract" + (division) + (year) + (quarter)] = 0
                    newState["sumRevContractInfo" + (division) + (year) + (quarter)] = []

                    newState["sumRevProfit" + (division) + (year) + (quarter)] = 0
                    newState["sumRevProfitInfo" + (division) + (year) + (quarter)] = []

                    //reset Value
                    this.setState({["sumRevContract" + (division) + (year) + (quarter)]: 0})
                    this.setState({["sumRevContractInfo" + (division) + (year) + (quarter)]: []})
                    this.setState({["sumRevProfit" + (division) + (year) + (quarter)]: 0})
                    this.setState({["sumRevProfitInfo" + (division) + (year) + (quarter)]: []})
  
                    //set value to first total
                    newState["sumRevContract" + (division) + (year) + (quarter)] =  newState["sumRevContract" + (division) + (year) + (quarter)] + parseFloat(totalExpectedRevenue)
                    this.setState({["sumRevContract" + (division) + (year) + (quarter)]: this.state[sumValueContract] + parseFloat(totalExpectedRevenue)})

                    newState["sumRevProfit" + (division) + (year) + (quarter)] =  newState["sumRevProfit" + (division) + (year) + (quarter)] + parseFloat(profitCurrentYear)
                    this.setState({["sumRevProfit" + (division) + (year) + (quarter)]: this.state[sumValueProfit] + parseFloat(profitCurrentYear)})
                    
                    newState["sumRevContractInfo" + (division) + (year) + (quarter)].push(<tr key={_id} style={{ fontSize: '17px'}}>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{division}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{dept_job}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{job_name}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{status}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(contract_amount)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(profit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{gross_margin_percent + '%'}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{hit_ratio + '%'}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{start_date}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{totalMonths}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(totalExpectedRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(profitCurrentYear)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(futureRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(futureProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(futureRevenueThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(futureProfitThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                 </tr>)

                  newState["sumRevProfitInfo" + (division) + (year) + (quarter)].push(<tr key={_id} style={{ fontSize: '17px'}}>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{division}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{dept_job}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{job_name}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{status}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{bonded}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(contract_amount)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{parseFloat(Math.round(profit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{gross_margin_percent + '%'}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{hit_ratio + '%'}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(backlogValue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(totalExpectedProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(earnedProfitYTDValue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(totalForcastProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  </tr>)

                    this.setState({["sumRevContractInfo" + (division) + (year) + (quarter)]: this.state[sumValueContractInfo]})
                    this.setState({["sumRevProfitInfo" + (division) + (year) + (quarter)]: this.state[sumValueProfitInfo]})
                    this.setState({["sumRevContractInfo" + (division) + (year) + (quarter)] : <tr key={_id} style={{ fontSize: '17px'}}>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{division}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{dept_job}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{job_name}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{status}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(contract_amount)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(profit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{gross_margin_percent + '%'}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{hit_ratio + '%'}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{start_date}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{totalMonths}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(totalExpectedRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(profitCurrentYear)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(futureRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(futureProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(futureRevenueThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(futureProfitThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                 </tr>})

                    this.setState({["sumRevProfitInfo" + (division) + (year) + (quarter)] : <tr key={_id} style={{ fontSize: '17px'}}>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{division}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{dept_job}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{job_name}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{status}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{bonded}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(contract_amount)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{parseFloat(Math.round(profit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{gross_margin_percent + '%'}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{hit_ratio + '%'}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(backlogValue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(totalExpectedProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(earnedProfitYTDValue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(totalForcastProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    </tr>})
  
  
                    //set the value for division
                    divisionValueRevContract = "DivisionRevContract" + division + year + quarter
                    divisionValueRevProfit = "DivisionRevProfit" + division + year + quarter
  
                    this.setState({["DivisionRevContract" + (division) + (year) + (quarter)]: this.state[sumValueContract]})
                    this.setState({["DivisionRevProfit" + (division) + (year) + (quarter)]: this.state[sumValueProfit]})

                    //Calculate Contract Total
                    if(this.state["sumRevContractTotal" + (year)] === undefined){
                        sumValueContractTotal = "sumRevContractTotal" + year
                        newState["sumRevContractTotal" + (year)] = 0
                        this.setState({["sumRevContractTotal" + (year)]: 0})
                        newState["sumRevContractTotal" + (year)] =  newState["sumRevContractTotal" + (year)] + parseFloat(totalExpectedRevenue)
                        this.setState({["sumRevContractTotal" + (year)]: this.state[sumValueContractTotal] + parseFloat(totalExpectedRevenue)})
                    }else{
                        newState["sumRevContractTotal" + (year)] =  newState["sumRevContractTotal" + (year)] + parseFloat(totalExpectedRevenue)
                        this.setState({["sumRevContractTotal" + (year)]: this.state[sumValueContractTotal] + parseFloat(totalExpectedRevenue)})
                    }

                    //Calculate Profit Total
                    if(this.state["sumRevProfitTotal" + (year)] === undefined){
                      sumValueProfitTotal = "sumRevProfitTotal" + year
                      newState["sumRevProfitTotal" + (year)] = 0
                      this.setState({["sumRevProfitTotal" + (year)]: 0})
                      newState["sumRevProfitTotal" + (year)] =  newState["sumRevProfitTotal" + (year)] + parseFloat(profitCurrentYear)
                      this.setState({["sumRevProfitTotal" + (year)]: this.state[sumValueProfitTotal] + parseFloat(profitCurrentYear)})
                  }else{
                      newState["sumRevProfitTotal" + (year)] =  newState["sumRevProfitTotal" + (year)] + parseFloat(profitCurrentYear)
                      this.setState({["sumRevProfitTotal" + (year)]: this.state[sumValueProfitTotal] + parseFloat(profitCurrentYear)})
                  }
                  }


                //}
                else{
                  sumValueContract = "sumRevContract" + division + year + quarter
                  sumValueContractInfo = "sumRevContractInfo" + division + year + quarter
                  sumValueContractTotal = "sumRevContractTotal" + year

                  sumValueProfit = "sumRevProfit" + division + year + quarter
                  sumValueProfitInfo = "sumRevProfitInfo" + division + year + quarter
                  sumValueProfitTotal = "sumRevProfitTotal" + year
                                    

                  newState["sumRevContract " + (division) + (year) + (quarter)] =  newState["sumRevContract" + (division) + (year) + (quarter)] + parseFloat(totalExpectedRevenue)
                  newState["sumRevProfit " + (division) + (year) + (quarter)] =  newState["sumRevProfit" + (division) + (year) + (quarter)] + parseFloat(profitCurrentYear)
                  newState["sumRevContractInfo " + (division) + (year) + (quarter)] =  newState["sumRevContractInfo" + (division) + (year) + (quarter)]
                  newState["sumRevProfitInfo " + (division) + (year) + (quarter)] =  newState["sumRevProfitInfo" + (division) + (year) + (quarter)]
                  newState["sumRevContractInfo " + (division) + (year) + (quarter)].push(<tr key={_id} style={{ fontSize: '17px'}}>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{division}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{dept_job}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{job_name}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{status}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(contract_amount)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(profit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{gross_margin_percent + '%'}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{hit_ratio + '%'}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{start_date}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{totalMonths}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(totalExpectedRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(profitCurrentYear)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(futureRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(futureProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(futureRevenueThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(futureProfitThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
               </tr>)

                newState["sumRevProfitInfo " + (division) + (year) + (quarter)].push(<tr key={_id} style={{ fontSize: '17px'}}>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{division}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{dept_job}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{job_name}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{status}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{bonded}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(contract_amount)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{parseFloat(Math.round(profit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{gross_margin_percent + '%'}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{hit_ratio + '%'}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(backlogValue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(totalExpectedProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(earnedProfitYTDValue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(totalForcastProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                </tr>)

                  newState["sumRevContractTotal " + (year)] =  newState["sumRevContractTotal" + (year)] + parseFloat(totalExpectedRevenue)
                  this.setState({["sumRevContract" + (division) + (year) + (quarter)]: this.state[sumValueContract] + parseFloat(totalExpectedRevenue)})

                  newState["sumRevProfitTotal " + (year)] =  newState["sumRevProfitTotal" + (year)] + parseFloat(profitCurrentYear)
                  this.setState({["sumRevProfit" + (division) + (year) + (quarter)]: this.state[sumValueProfit] + parseFloat(profitCurrentYear)})
                  
                  this.setState({["sumRevContractInfo" + (division) + (year) + (quarter)]: [this.state[sumValueContractInfo] , <tr key={_id} style={{ fontSize: '17px'}}>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{division}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{dept_job}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{job_name}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{status}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(contract_amount)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(profit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{gross_margin_percent + '%'}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{hit_ratio + '%'}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{start_date}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{totalMonths}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(totalExpectedRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(profitCurrentYear)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(futureRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(futureProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(futureRevenueThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(futureProfitThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  </tr>] })

                  this.setState({["sumRevProfitInfo" + (division) + (year) + (quarter)]: [this.state[sumValueProfitInfo] , <tr key={_id} style={{ fontSize: '17px'}}>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{division}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{dept_job}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{job_name}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{status}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{bonded}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(contract_amount)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{parseFloat(Math.round(profit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{gross_margin_percent + '%'}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{hit_ratio + '%'}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(backlogValue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(totalExpectedProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(earnedProfitYTDValue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(totalForcastProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  </tr>] })

                  
                  this.setState({["sumRevContractTotal" + (year)]: this.state[sumValueContractTotal] + parseFloat(totalExpectedRevenue)})
                  this.setState({["sumRevProfitTotal" + (year)]: this.state[sumValueProfitTotal] + parseFloat(profitCurrentYear)})

                  //set the value for division
                  divisionValueRevContract = "DivisionRevContract" + division + year + quarter
                  divisionValueRevProfit = "DivisionRevProfit" + division + year + quarter

                  var checkDefinedRevContract =  this.state[divisionValueRevContract] ? this.state[divisionValueRevContract] : 0
                  if(checkDefinedRevContract !== 0 ){
                    this.setState({["DivisionRevContract" + (division) + (year) + (quarter)]: this.state[divisionValueRevContract] + this.state[sumValueContract]})
                  }else{
                    this.setState({["DivisionRevContract" + (division) + (year) + (quarter)]: this.state[sumValueContract]})
                  }

                  var checkDefinedRevProfit =  this.state[divisionValueRevProfit] ? this.state[divisionValueRevProfit] : 0
                  if(checkDefinedRevProfit !== 0 ){
                    this.setState({["DivisionRevProfit" + (division) + (year) + (quarter)]: this.state[divisionValueRevProfit] + this.state[sumValueProfit]})
                  }else{
                    this.setState({["DivisionRevProfit" + (division) + (year) + (quarter)]: this.state[sumValueProfit]})
                  }


                }  
            }else if(status === 'ABNC'){
                //if(divisionNumABNC !== division){
                  //divisionNumABNC = division

              if(this.state["sumRevABNC" + (division) + (year) + (quarter)] === undefined){

                  sumValueABNC = "sumRevABNC" + division + year + quarter
                  sumValueABNCInfo = "sumRevABNCInfo" + division + year + quarter

                  sumValueABNCProfit = "sumRevABNCProfit" + division + year + quarter
                  sumValueABNCInfoProfit = "sumRevABNCInfoProfit" + division + year + quarter

                  //reset Value
                  this.setState({["sumRevABNC" + (division) + (year) + (quarter)]: 0})
                  newState["sumRevABNCInfo" + (division) + (year) + (quarter)] = []
                  this.setState({["sumRevABNCInfo" + (division) + (year) + (quarter)]: []})

                  this.setState({["sumRevABNCProfit" + (division) + (year) + (quarter)]: 0})
                  newState["sumRevABNCInfoProfit" + (division) + (year) + (quarter)] = []
                  this.setState({["sumRevABNCInfoProfit" + (division) + (year) + (quarter)]: []})

                  newState["sumRevABNCInfo" + (division) + (year) + (quarter)].push(<tr key={_id} style={{ fontSize: '17px'}}>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{division}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{dept_job}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{job_name}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{status}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(contract_amount)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(profit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{gross_margin_percent + '%'}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{hit_ratio + '%'}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{start_date}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{totalMonths}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(totalExpectedRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(profitCurrentYear)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(futureRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(futureProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(futureRevenueThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(futureProfitThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                 </tr>)

                    newState["sumRevABNCInfoProfit" + (division) + (year) + (quarter)].push(<tr key={_id} style={{ fontSize: '17px'}}>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{division}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{dept_job}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{job_name}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{status}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{bonded}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(contract_amount)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{parseFloat(Math.round(profit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{gross_margin_percent + '%'}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{hit_ratio + '%'}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(backlogValue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(totalExpectedProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(earnedProfitYTDValue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(totalForcastProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    </tr>)

                  this.setState({["sumRevABNCInfo" + (division) + (year) + (quarter)]: this.state[sumValueABNCInfo]})
                  this.setState({["sumRevABNCInfoProfit" + (division) + (year) + (quarter)]: this.state[sumValueABNCInfoProfit]})
                  this.setState({["sumRevABNCInfo" + (division) + (year) + (quarter)] : <tr key={_id} style={{ fontSize: '17px'}}>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{division}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{dept_job}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{job_name}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{status}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(contract_amount)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(profit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{gross_margin_percent + '%'}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{hit_ratio + '%'}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{start_date}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{totalMonths}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(totalExpectedRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(profitCurrentYear)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(futureRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(futureProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(futureRevenueThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(futureProfitThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  </tr>})

                  this.setState({["sumRevABNCInfoProfit" + (division) + (year) + (quarter)] : <tr key={_id} style={{ fontSize: '17px'}}>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{division}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{dept_job}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{job_name}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{status}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{bonded}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(contract_amount)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{parseFloat(Math.round(profit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{gross_margin_percent + '%'}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{hit_ratio + '%'}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(backlogValue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(totalExpectedProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(earnedProfitYTDValue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(totalForcastProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  </tr>})


                  //set value to first total
                  this.setState({["sumRevABNC" + (division) + (year) + (quarter)]: this.state[sumValueABNC] + parseFloat(totalExpectedRevenue)})
                  this.setState({["sumRevABNCProfit" + (division) + (year) + (quarter)]: this.state[sumValueABNCProfit] + parseFloat(profitCurrentYear)})

                  //set the value for division
                  divisionValueRevABNC = "DivisionRevABNC" + division + year + quarter
                  divisionValueRevABNCProfit = "DivisionRevABNCProfit" + division + year + quarter

                  this.setState({["DivisionRevABNC" + (division) + (year) + (quarter)]: this.state[sumValueABNC]})
                  this.setState({["DivisionRevABNCProfit" + (division) + (year) + (quarter)]: this.state[sumValueABNCProfit]})

                  //Add ABNC to Current Year
                  if(year === currentYearResp){
                    sumValueContractTotal = "sumRevContractTotal" + year
                    newState["sumRevContractTotal" + (year)] =  newState["sumRevContractTotal" + (year)] + parseFloat(totalExpectedRevenue)
                    this.setState({["sumRevContractTotal" + (year)]: this.state[sumValueContractTotal] + parseFloat(totalExpectedRevenue)})

                    sumValueProfitTotal = "sumRevProfitTotal" + year
                    newState["sumRevProfitTotal" + (year)] =  newState["sumRevProfitTotal" + (year)] + parseFloat(profitCurrentYear)
                    this.setState({["sumRevProfitTotal" + (year)]: this.state[sumValueProfitTotal] + parseFloat(profitCurrentYear)})
                  }

                  //Calculate ABNC Total
                    if(this.state["sumRevABNCTotal" + (year)] === undefined){
                      sumValueABNCTotal = "sumRevABNCTotal" + year
                      newState["sumRevABNCTotal" + (year)] = 0
                      this.setState({["sumRevABNCTotal" + (year)]: 0})
                      newState["sumRevABNCTotal" + (year)] =  newState["sumRevABNCTotal" + (year)] + parseFloat(totalExpectedRevenue)
                      this.setState({["sumRevABNCTotal" + (year)]: this.state[sumValueABNCTotal] + parseFloat(totalExpectedRevenue)})
                    }else{
                        newState["sumRevABNCTotal" + (year)] =  newState["sumRevABNCTotal" + (year)] + parseFloat(totalExpectedRevenue)
                        this.setState({["sumRevABNCTotal" + (year)]: this.state[sumValueABNCTotal] + parseFloat(totalExpectedRevenue)})
                    }

                    //Calculate ABNC Profit Total
                    if(this.state["sumRevABNCTotalProfit" + (year)] === undefined){
                      sumValueABNCTotalProfit = "sumRevABNCTotalProfit" + year
                      newState["sumRevABNCTotalProfit" + (year)] = 0
                      this.setState({["sumRevABNCTotalProfit" + (year)]: 0})
                      newState["sumRevABNCTotalProfit" + (year)] =  newState["sumRevABNCTotalProfit" + (year)] + parseFloat(profitCurrentYear)
                      this.setState({["sumRevABNCTotalProfit" + (year)]: this.state[sumValueABNCTotalProfit] + parseFloat(profitCurrentYear)})
                    }else{
                        newState["sumRevABNCTotalProfit" + (year)] =  newState["sumRevABNCTotalProfit" + (year)] + parseFloat(profitCurrentYear)
                        this.setState({["sumRevABNCTotalProfit" + (year)]: this.state[sumValueABNCTotalProfit] + parseFloat(profitCurrentYear)})
                    }

                }else{
                  sumValueABNC = "sumRevABNC" + division + year + quarter
                  sumValueABNCInfo = "sumRevABNCInfo" + division + year + quarter
                  sumValueABNCTotal = "sumRevABNCTotal" + year

                  sumValueABNCProfit = "sumRevABNCProfit" + division + year + quarter
                  sumValueABNCInfoProfit = "sumRevABNCInfoProfit" + division + year + quarter
                  sumValueABNCTotalProfit = "sumRevABNCTotalProfit" + year

                  this.setState({["sumRevABNC" + (division) + (year) + (quarter)]: this.state[sumValueABNC] + parseFloat(totalExpectedRevenue)})
                  newState["sumRevABNCTotal " + (year)] =  newState["sumRevABNCTotal" + (year)] + parseFloat(totalExpectedRevenue)
                  this.setState({["sumRevABNCTotal" + (year)]: this.state[sumValueABNCTotal] + parseFloat(totalExpectedRevenue)})

                  this.setState({["sumRevABNCProfit" + (division) + (year) + (quarter)]: this.state[sumValueABNCProfit] + parseFloat(profitCurrentYear)})
                  newState["sumRevABNCTotalProfit " + (year)] =  newState["sumRevABNCTotalProfit" + (year)] + parseFloat(profitCurrentYear)
                  this.setState({["sumRevABNCTotalProfit" + (year)]: this.state[sumValueABNCTotalProfit] + parseFloat(profitCurrentYear)})

                  newState["sumRevABNCInfo " + (division) + (year) + (quarter)] =  newState["sumRevABNCInfo" + (division) + (year) + (quarter)]
                  newState["sumRevABNCInfoProfit " + (division) + (year) + (quarter)] =  newState["sumRevABNCInfoProfit" + (division) + (year) + (quarter)]
                  newState["sumRevABNCInfo " + (division) + (year) + (quarter)].push(<tr key={_id} style={{ fontSize: '17px'}}>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{division}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{dept_job}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{job_name}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{status}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(contract_amount)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(profit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{gross_margin_percent + '%'}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{hit_ratio + '%'}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{start_date}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{totalMonths}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(totalExpectedRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(profitCurrentYear)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(futureRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(futureProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(futureRevenueThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(futureProfitThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
               </tr>)

                  newState["sumRevABNCInfoProfit " + (division) + (year) + (quarter)].push(<tr key={_id} style={{ fontSize: '17px'}}>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{division}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{dept_job}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{job_name}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{status}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{bonded}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(contract_amount)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{parseFloat(Math.round(profit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{gross_margin_percent + '%'}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{hit_ratio + '%'}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(backlogValue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(totalExpectedProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(earnedProfitYTDValue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(totalForcastProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  </tr>)

                  this.setState({["sumRevABNCInfo" + (division) + (year) + (quarter)]: [this.state[sumValueABNCInfo] , <tr key={_id} style={{ fontSize: '17px'}}>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{division}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{dept_job}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{job_name}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{status}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(contract_amount)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(profit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{gross_margin_percent + '%'}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{hit_ratio + '%'}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{start_date}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{totalMonths}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(totalExpectedRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(profitCurrentYear)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(futureRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(futureProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(futureRevenueThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(futureProfitThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  </tr>] })

                  this.setState({["sumRevABNCInfoProfit" + (division) + (year) + (quarter)]: [this.state[sumValueABNCInfoProfit] , <tr key={_id} style={{ fontSize: '17px'}}>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{division}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{dept_job}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{job_name}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{status}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{bonded}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(contract_amount)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{parseFloat(Math.round(profit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{gross_margin_percent + '%'}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{hit_ratio + '%'}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(backlogValue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(totalExpectedProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(earnedProfitYTDValue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(totalForcastProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  </tr>] })

                  //Add ABNC to Current Year
                  if(year === currentYearResp){
                    sumValueContractTotal = "sumRevContractTotal" + year
                    newState["sumRevContractTotal " + (year)] =  newState["sumRevContractTotal" + (year)] + parseFloat(totalExpectedRevenue)
                    this.setState({["sumRevContractTotal" + (year)]: this.state[sumValueContractTotal] + parseFloat(totalExpectedRevenue)})

                    sumValueProfitTotal = "sumRevProfitTotal" + year
                    newState["sumRevProfitTotal " + (year)] =  newState["sumRevProfitTotal" + (year)] + parseFloat(profitCurrentYear)
                    this.setState({["sumRevProfitTotal" + (year)]: this.state[sumValueProfitTotal] + parseFloat(profitCurrentYear)})
                  }

                  //set the value for division
                  divisionValueRevABNC = "DivisionRevABNC" + division + year + quarter
                  divisionValueRevABNCProfit = "DivisionRevABNC" + division + year + quarter

                  var checkDefinedRevABNC =  this.state[divisionValueRevABNC] ? this.state[divisionValueRevABNC] : 0
                  if(checkDefinedRevABNC !== 0 ){
                    this.setState({["DivisionRevABNC" + (division) + (year) + (quarter)]: this.state[divisionValueRevABNC] + this.state[sumValueABNC]})
                  }else{
                    this.setState({["DivisionRevABNC" + (division) + (year) + (quarter)]: this.state[sumValueABNC]})
                  }

                  var checkDefinedRevABNCProfit =  this.state[divisionValueRevABNCProfit] ? this.state[divisionValueRevABNCProfit] : 0
                  if(checkDefinedRevABNCProfit !== 0 ){
                    this.setState({["DivisionRevABNCProfit" + (division) + (year) + (quarter)]: this.state[divisionValueRevABNCProfit] + this.state[sumValueABNCProfit]})
                  }else{
                    this.setState({["DivisionRevABNCProfit" + (division) + (year) + (quarter)]: this.state[sumValueABNCProfit]})
                  }

                }  
            }else{

            if(this.state["sumRevOther" + (division) + (year) + (quarter)] === undefined){

                sumValueOther = "sumRevOther" + division + year + quarter
                sumValueOtherInfo = "sumRevContractInfo" + division + year + quarter

                sumValueOtherProfit = "sumRevOtherProfit" + division + year + quarter
                sumValueOtherInfoProfit = "sumRevContractInfoProfit" + division + year + quarter

                newState["sumRevOtherInfo" + (division) + (year) + (quarter)] = []
                newState["sumRevOtherInfoProfit" + (division) + (year) + (quarter)] = []

                //reset Value
                this.setState({["sumRevOther" + (division) + (year) + (quarter)]: 0})
                this.setState({["sumRevOtherInfo" + (division) + (year) + (quarter)]: []})

                this.setState({["sumRevOtherProfit" + (division) + (year) + (quarter)]: 0})
                this.setState({["sumRevOtherInfoProfit" + (division) + (year) + (quarter)]: []})

                newState["sumRevOtherInfo" + (division) + (year) + (quarter)].push(<tr key={_id} style={{ fontSize: '17px'}}>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{division}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{dept_job}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{job_name}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{status}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(contract_amount)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(profit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{gross_margin_percent + '%'}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{hit_ratio + '%'}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{start_date}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{totalMonths}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(totalExpectedRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(profitCurrentYear)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(futureRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(futureProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(futureRevenueThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(futureProfitThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                 </tr>)

                    newState["sumRevOtherInfoProfit" + (division) + (year) + (quarter)].push(<tr key={_id} style={{ fontSize: '17px'}}>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{division}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{dept_job}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{job_name}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{status}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{bonded}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(contract_amount)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{parseFloat(Math.round(profit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{gross_margin_percent + '%'}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{hit_ratio + '%'}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(backlogValue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(totalExpectedProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(earnedProfitYTDValue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(totalForcastProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    </tr>)

                //set value to first total
                this.setState({["sumRevOther" + (division) + (year) + (quarter)]: this.state[sumValueOther] + parseFloat(totalExpectedRevenue)})
                this.setState({["sumRevOtherProfit" + (division) + (year) + (quarter)]: this.state[sumValueOtherProfit] + parseFloat(profitCurrentYear)})
                //this.setState({["sumRevOtherInfo" + (division) + (year) + (quarter)]: this.state[sumValueOtherInfo]})

                this.setState({["sumRevOtherInfo" + (division) + (year) + (quarter)] : <tr key={_id} style={{ fontSize: '17px'}}>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{division}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{dept_job}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{job_name}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{status}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(contract_amount)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(profit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{gross_margin_percent + '%'}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{hit_ratio + '%'}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{start_date}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{totalMonths}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(totalExpectedRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(profitCurrentYear)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(futureRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(futureProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(futureRevenueThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                    <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(futureProfitThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                 </tr>})

                this.setState({["sumRevOtherInfoProfit" + (division) + (year) + (quarter)] : <tr key={_id} style={{ fontSize: '17px'}}>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{division}</td>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{dept_job}</td>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{job_name}</td>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{status}</td>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{bonded}</td>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(contract_amount)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{parseFloat(Math.round(profit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{gross_margin_percent + '%'}</td>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{hit_ratio + '%'}</td>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(backlogValue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(totalExpectedProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(earnedProfitYTDValue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(totalForcastProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                </tr>})
                
                //set the value for division
                divisionValueRevOther = "DivisionRevOther" + division + year + quarter
                divisionValueRevOtherProfit = "DivisionRevOtherProfit" + division + year + quarter

                this.setState({["DivisionRevOther" + (division) + (year) + (quarter)]: this.state[sumValueOther]})
                this.setState({["DivisionRevOtherProfit" + (division) + (year) + (quarter)]: this.state[sumValueOtherProfit]})

                //Add Other to Current Year
                if(year === currentYearResp){
                    sumValueContractTotal = "sumRevContractTotal" + year
                    newState["sumRevContractTotal" + (year)] =  newState["sumRevContractTotal" + (year)] + parseFloat(totalExpectedRevenue)
                    this.setState({["sumRevContractTotal" + (year)]: this.state[sumValueContractTotal] + parseFloat(totalExpectedRevenue)})

                    sumValueProfitTotal = "sumRevProfitTotal" + year
                    newState["sumRevProfitTotal" + (year)] =  newState["sumRevProfitTotal" + (year)] + parseFloat(profitCurrentYear)
                    this.setState({["sumRevProfitTotal" + (year)]: this.state[sumValueProfitTotal] + parseFloat(profitCurrentYear)})
                }

                //Calculate Other Total
                if(this.state["sumRevOtherTotal" + (year)] === undefined){
                  sumValueOtherTotal = "sumRevOtherTotal" + year
                  newState["sumRevOtherTotal" + (year)] = 0
                  this.setState({["sumRevOtherTotal" + (year)]: 0})
                  newState["sumRevOtherTotal" + (year)] =  newState["sumRevOtherTotal" + (year)] + parseFloat(totalExpectedRevenue)
                  this.setState({["sumRevOtherTotal" + (year)]: this.state[sumValueOtherTotal] + parseFloat(totalExpectedRevenue)})
                }else{
                    newState["sumRevOtherTotal" + (year)] =  newState["sumRevOtherTotal" + (year)] + parseFloat(totalExpectedRevenue)
                    this.setState({["sumRevOtherTotal" + (year)]: this.state[sumValueOtherTotal] + parseFloat(totalExpectedRevenue)})
                }

                //Calculate Other Profit Total
                if(this.state["sumRevOtherTotalProfit" + (year)] === undefined){
                  sumValueOtherTotalProfit = "sumRevOtherTotalProfit" + year
                  newState["sumRevOtherTotalProfit" + (year)] = 0
                  this.setState({["sumRevOtherTotalProfit" + (year)]: 0})
                  newState["sumRevOtherTotalProfit" + (year)] =  newState["sumRevOtherTotalProfit" + (year)] + parseFloat(profitCurrentYear)
                  this.setState({["sumRevOtherTotalProfit" + (year)]: this.state[sumValueOtherTotalProfit] + parseFloat(profitCurrentYear)})
                }else{
                    newState["sumRevOtherTotalProfit" + (year)] =  newState["sumRevOtherTotalProfit" + (year)] + parseFloat(profitCurrentYear)
                    this.setState({["sumRevOtherTotalProfit" + (year)]: this.state[sumValueOtherTotalProfit] + parseFloat(profitCurrentYear)})
                }

              }else{
                sumValueOther = "sumRevOther" + division + year + quarter
                sumValueOtherInfo = "sumRevOtherInfo" + division + year + quarter
                sumValueOtherTotal = "sumRevOtherTotal" + year

                sumValueOtherProfit = "sumRevOtherProfit" + division + year + quarter
                sumValueOtherInfoProfit = "sumRevOtherInfoProfit" + division + year + quarter
                sumValueOtherTotalProfit = "sumRevOtherTotalProfit" + year

                this.setState({["sumRevOther" + (division) + (year) + (quarter)]: this.state[sumValueOther] + parseFloat(totalExpectedRevenue)})
                newState["sumRevOtherTotal " + (year)] =  newState["sumRevOtherTotal" + (year)] + parseFloat(totalExpectedRevenue)

                this.setState({["sumRevOtherProfit" + (division) + (year) + (quarter)]: this.state[sumValueOtherProfit] + parseFloat(profitCurrentYear)})
                newState["sumRevOtherTotalProfit " + (year)] =  newState["sumRevOtherTotalProfit" + (year)] + parseFloat(profitCurrentYear)

                newState["sumRevOtherInfo " + (division) + (year) + (quarter)] =  newState["sumRevOtherInfo" + (division) + (year) + (quarter)]
                newState["sumRevOtherInfoProfit " + (division) + (year) + (quarter)] =  newState["sumRevOtherInfoProfit" + (division) + (year) + (quarter)]
                newState["sumRevOtherInfo " + (division) + (year) + (quarter)].push(<tr key={_id} style={{ fontSize: '17px'}}>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{division}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{dept_job}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{job_name}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{status}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(contract_amount)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(profit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{gross_margin_percent + '%'}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{hit_ratio + '%'}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{start_date}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{totalMonths}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(totalExpectedRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(profitCurrentYear)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(futureRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(futureProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(futureRevenueThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(futureProfitThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
               </tr>)

                newState["sumRevOtherInfoProfit " + (division) + (year) + (quarter)].push(<tr key={_id} style={{ fontSize: '17px'}}>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{division}</td>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{dept_job}</td>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{job_name}</td>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{status}</td>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{bonded}</td>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(contract_amount)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{parseFloat(Math.round(profit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{gross_margin_percent + '%'}</td>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{hit_ratio + '%'}</td>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(backlogValue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(totalExpectedProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(earnedProfitYTDValue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(totalForcastProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                </tr>)

                this.setState({["sumRevOtherInfo" + (division) + (year) + (quarter)]: [this.state[sumValueOtherInfo] , <tr key={_id} style={{ fontSize: '17px'}}>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{division}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{dept_job}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{job_name}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{status}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(contract_amount)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(profit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{gross_margin_percent + '%'}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{hit_ratio + '%'}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{start_date}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{totalMonths}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(totalExpectedRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(profitCurrentYear)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(futureRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(futureProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(futureRevenueThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{parseFloat(Math.round(futureProfitThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                </tr>] })

                  this.setState({["sumRevOtherInfoProfit" + (division) + (year) + (quarter)]: [this.state[sumValueOtherInfoProfit] , <tr key={_id} style={{ fontSize: '17px'}}>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{division}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{dept_job}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{job_name}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{status}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'center'}}>{bonded}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(contract_amount)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{parseFloat(Math.round(profit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{gross_margin_percent + '%'}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{hit_ratio + '%'}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(backlogValue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(totalExpectedProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(earnedProfitYTDValue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: 'right'}}>{Math.round(parseFloat(totalForcastProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  </tr>] })

                this.setState({["sumRevOtherTotal" + (year)]: this.state[sumValueOtherTotal] + parseFloat(totalExpectedRevenue)})
                this.setState({["sumRevOtherTotalProfit" + (year)]: this.state[sumValueOtherTotalProfit] + parseFloat(profitCurrentYear)})


                //Add Other to Current Year
                if(year === currentYearResp){
                  sumValueContractTotal = "sumRevContractTotal" + year
                  newState["sumRevContractTotal " + (year)] =  newState["sumRevContractTotal" + (year)] + parseFloat(totalExpectedRevenue)
                  this.setState({["sumRevContractTotal" + (year)]: this.state[sumValueContractTotal] + parseFloat(totalExpectedRevenue)})

                  sumValueProfitTotal = "sumRevProfitTotal" + year
                  newState["sumRevProfitTotal " + (year)] =  newState["sumRevProfitTotal" + (year)] + parseFloat(profitCurrentYear)
                  this.setState({["sumRevProfitTotal" + (year)]: this.state[sumValueProfitTotal] + parseFloat(profitCurrentYear)})
                }

                //set the value for division
                divisionValueRevOther = "DivisionRevOther" + division + year + quarter
                divisionValueRevOtherProfit = "DivisionRevOtherProfit" + division + year + quarter

                var checkDefinedRevOther =  this.state[divisionValueRevOther] ? this.state[divisionValueRevOther] : 0
                if(checkDefinedRevOther !== 0 ){
                  this.setState({["DivisionRevOther" + (division) + (year) + (quarter)]: this.state[divisionValueRevOther] + this.state[sumValueOther]})
                }else{
                  this.setState({["DivisionRevOther" + (division) + (year) + (quarter)]: this.state[sumValueOther]})
                }

                var checkDefinedRevOtherProfit =  this.state[divisionValueRevOtherProfit] ? this.state[divisionValueRevOtherProfit] : 0
                if(checkDefinedRevOtherProfit !== 0 ){
                  this.setState({["DivisionRevOtherProfit" + (division) + (year) + (quarter)]: this.state[divisionValueRevOtherProfit] + this.state[sumValueOtherProfit]})
                }else{
                  this.setState({["DivisionRevOtherProfit" + (division) + (year) + (quarter)]: this.state[sumValueOtherProfit]})
                }

              }  
          }
            
     })

     this.setState({ ProjectReportData: dataValue, dataLabel: optionsLabels, ManagementAdjData: dataManagementAdjustment, dataLoadCheck: dataValue, userRole: decoded.roles});


     var distinctDivions = div.filter(distinct).sort((a,b) => a - b);
     var distinctYears = yearValues.filter(distinct).sort((a,b) => a - b);

     var backGroundColors = ['#f5222d','#8c8c8c','#fa8c16','#fadb14','#a0d911', '#722ed1','#13c2c2','#1890ff',,'#52c41a','#722ed1','#eb2f96','#fa541c','#0050b3'];
     var yearlyValues =[];
     var yearlyValuesProfit =[];
     var divisionCombinedValues = [];
     var divisionCombinedValuesProfit = [];
     var contractDivValue = [];
     var abncDivValue = [];
     var otherDivValue = [];
     var profitDivValue = [];
     var profitabncDivValue = [];
     var profitotherDivValue = [];
     var divisionLabel = [];
     var quarter = 0;
     var year = 0;
     var map = 0;
     var mapProfit = 0;
     this.state.dataLabel.map( divYear => {
      quarter = divYear.substring(1, 3);
      year = divYear.substring(5, 9);
      newState["DivisionDataRecord" + (year)] = []
      newState["DivisionDataRecordProfit" + (year)] = []
      newState["DivisionDataRecordCombined" + (year)] = []
      newState["DivisionDataRecordCombinedProfit" + (year)] = []
      this.setState({["DivisionDataRecord" + (year)]: []})
      this.setState({["DivisionDataRecordProfit" + (year)]: []})
      this.setState({["DivisionDataRecordCombined" + (year)]: []})
      this.setState({["DivisionDataRecordCombinedProfit" + (year)]: []})

     for(var i = 0; i < distinctDivions.length; i++){
      yearlyValues = []; 
      yearlyValuesProfit = [];
      divisionCombinedValues = [];
      divisionCombinedValuesProfit = [];
        divisionData = 'sumRevContract' + distinctDivions[i] + year + (quarter);
        divisionDataProfit = 'sumRevProfit' + distinctDivions[i] + year + (quarter);

            map = 0;
            mapProfit = 0;
            const tt = parseInt(distinctDivions[i] + year + (quarter));
            const pp = parseInt(distinctDivions[i] + year + (quarter));
            //retrieve values for each quarter so far
            Object.keys(newState).map((val) => {
              if(divisionData.trim() === val){
                  console.log(val)
                  if(val.includes('2019')){
                    if(distinctDivions[i] === '1'){
                      yearlyValues.push(99402269)
                    }else if(distinctDivions[i] === '2'){
                      yearlyValues.push(32821410)
                    }else if(distinctDivions[i] === '3'){
                      yearlyValues.push(1907244)
                    }else if(distinctDivions[i] === '4'){
                      yearlyValues.push(30002278)
                    }else if(distinctDivions[i] === '5'){
                      yearlyValues.push(122372528)
                    }else if(distinctDivions[i] === '6'){
                      yearlyValues.push(206510)
                    }else if(distinctDivions[i] === '7'){
                      yearlyValues.push(0)
                    }else if(distinctDivions[i] === '11'){
                      yearlyValues.push(9266631)
                    }
                  }else{
                    yearlyValues.push(this.state["sumRevContract" + tt] ? this.state["sumRevContract" + tt] : 0)
                  }
                  map = 1;
              }
            })

            Object.keys(newState).map((val) => {
              if(divisionDataProfit.trim() === val){
                  console.log(val)
                  if(val.includes('2019')){
                    if(distinctDivions[i] === '1'){
                      yearlyValuesProfit.push(4444770)
                    }else if(distinctDivions[i] === '2'){
                      yearlyValuesProfit.push(4545014)
                    }else if(distinctDivions[i] === '3'){
                      yearlyValuesProfit.push(-472760)
                    }else if(distinctDivions[i] === '4'){
                      yearlyValuesProfit.push(1967037)
                    }else if(distinctDivions[i] === '5'){
                      yearlyValuesProfit.push(5729006)
                    }else if(distinctDivions[i] === '6'){
                      yearlyValuesProfit.push(17903)
                    }else if(distinctDivions[i] === '7'){
                      yearlyValuesProfit.push(0)
                    }else if(distinctDivions[i] === '11'){
                      yearlyValuesProfit.push(-8534)
                    }
                  }else{
                    yearlyValuesProfit.push(this.state["sumRevProfit" + pp] ? this.state["sumRevProfit" + pp] : 0)
                  }
                  mapProfit = 1;
              }
            })

            if(map === 0){
              yearlyValues.push(0)
            }

            if(mapProfit === 0){
              yearlyValuesProfit.push(0)
            }
 
       var newRecords = {
        label: "Division " + distinctDivions[i],
        fill: false,
        lineTension: 0.5,
        backgroundColor: backGroundColors[i],
        borderColor: backGroundColors[i],
        borderWidth: 2,
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: backGroundColors[i],
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: backGroundColors[i],
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 7,
        pointHitRadius: 10,
        data: yearlyValues
       }

       var newRecordsProfit = {
        label: "Division " + distinctDivions[i],
        fill: false,
        lineTension: 0.5,
        backgroundColor: backGroundColors[i],
        borderColor: backGroundColors[i],
        borderWidth: 2,
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: backGroundColors[i],
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: backGroundColors[i],
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 7,
        pointHitRadius: 10,
        data: yearlyValuesProfit
       }
       
       //if(year === '2019'){
          newState["DivisionDataRecordProfit" + (year)] =  newState["DivisionDataRecordProfit" + (year)].concat(newRecordsProfit);
          this.setState({["DivisionDataRecordProfit" + (year)]: newState["DivisionDataRecordProfit" + (year)]})
          var joinedProfit = this.state.dataSetRecordProfit.concat(newRecordsProfit)
          this.setState({dataSetRecordProfit : joinedProfit})

          newState["DivisionDataRecord" + (year)] =  newState["DivisionDataRecord" + (year)].concat(newRecords);
          //console.log(newState["DivisionDataRecord" + (year) + (quarter)])
          this.setState({["DivisionDataRecord" + (year)]: newState["DivisionDataRecord" + (year)]})
          //if(year === "2020"){
          var joined = this.state.dataSetRecord.concat(newRecords)
          this.setState({dataSetRecord : joined})
       /*}else{
          //console.log(newRecords)
          newState["DivisionDataRecord" + (year)] =  newState["DivisionDataRecord" + (year)].concat(newRecords);
          //console.log(newState["DivisionDataRecord" + (year) + (quarter)])
          this.setState({["DivisionDataRecord" + (year)]: newState["DivisionDataRecord" + (year)]})
          //if(year === "2020"){
          var joined = this.state.dataSetRecord.concat(newRecords)
          this.setState({dataSetRecord : joined})
       }*/

      if(distinctYears[distinctYears.length - 1] === year){
          contractDivValue.push(this.state["sumRevContract" + parseInt(distinctDivions[i] + year + (quarter))])
          profitDivValue.push(this.state["sumRevProfit" + parseInt(distinctDivions[i] + year + (quarter))])
          abncDivValue.push(this.state["sumRevABNC" + parseInt(distinctDivions[i] + year + (quarter))])
          
          profitabncDivValue.push(this.state["sumRevABNCProfit" + parseInt(distinctDivions[i] + year + (quarter))])
          otherDivValue.push(this.state["sumRevOther" + parseInt(distinctDivions[i] + year + (quarter))])
          profitotherDivValue.push(this.state["sumRevOtherProfit" + parseInt(distinctDivions[i] + year + (quarter))])
          divisionLabel.push("Division " + distinctDivions[i])
        }
     }})
     
     var yearData = [];
     var yearDataProfit = [];
     for(var i = 0; i < distinctYears.length; i++){
       if(distinctYears[i] === '2019'){
        yearData.push(295978870)
        yearDataProfit.push(16222436)
       }else{
        yearData.push(this.state["sumRevContractTotal" + distinctYears[i]])
        yearDataProfit.push(this.state["sumRevProfitTotal" + distinctYears[i]])
       }

     }

        var newRecords = {
          label: 'Acutal YTD',
          fill: false,
          lineTension: 0.5,
          backgroundColor: '#00008B',
          borderColor: '#00008B',
          borderWidth: 2,
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: '#00008B',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#00008B',
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 7,
          pointHitRadius: 10,
          data: yearData
        }

        var joined = this.state.revenueYearRecord.concat(newRecords)
        //var joinedHome = this.state.homeState.concat(newRecords)
        this.setState({revenueYearRecord : joined})
        //this.setState({homeState : joinedHome})

        var newRecordsProfit = {
          label: 'Acutal YTD',
          fill: false,
          lineTension: 0.5,
          backgroundColor: '#00008B',
          borderColor: '#00008B',
          borderWidth: 2,
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: '#00008B',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#00008B',
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 7,
          pointHitRadius: 10,
          data: yearDataProfit
        }

        var joinedProfit = this.state.revenueYearRecordProfit.concat(newRecordsProfit)
        //var joinedHome = this.state.homeState.concat(newRecords)
        this.setState({revenueYearRecordProfit : joinedProfit})
        //this.setState({homeState : joinedHome})
        
    this.setState({ revenueTotal: {
      labels: distinctYears,
      datasets: this.state.revenueYearRecord
    }})

    this.setState({ revenueTotalProfit: {
      labels: distinctYears,
      datasets: this.state.revenueYearRecordProfit
    }})

    this.setState({ homeState: {
      labels: distinctYears,
      datasets: this.state.revenueYearRecord
    }})

    this.setState({ homeStateProfit: {
      labels: distinctYears,
      datasets: this.state.revenueYearRecordProfit
    }})
     //console.log(this.state.dataSetRecord)
     //console.log(this.state["DivisionDataRecord" + 2020])
     //console.log(this.state["DivisionDataRecord" + 2019])
     //console.log(this.state["sumRevContractTotal" + 2020])
     //console.log(this.state["sumRevContractTotal" + 2019])
     //console.log(this.state["sumRevABNCTotal" + 2020])
     //console.log(this.state["sumRevOtherTotal" + 2020])
     divisionCombinedValues.push( {
      label: 'Contract',
      data: contractDivValue,
      backgroundColor: '#D6E9C6', // green
      fill: false
    },
    {
      label: 'ABNC',
      data: abncDivValue,
      backgroundColor: '#FAEBCC', // yellow
      fill: false
    },
    {
      label: 'FA',
      data: otherDivValue,
      backgroundColor: '#EBCCD1', // red
      fill: false
    })

    divisionCombinedValuesProfit.push( {
      label: 'Contract',
      data: profitDivValue,
      backgroundColor: '#D6E9C6', // green
      fill: false
    },
    {
      label: 'ABNC',
      data: profitabncDivValue,
      backgroundColor: '#FAEBCC', // yellow
      fill: false
    },
    {
      label: 'FA',
      data: profitotherDivValue,
      backgroundColor: '#EBCCD1', // red
      fill: false
    })

    newState["DivisionDataRecordCombined" + (year)] =  newState["DivisionDataRecordCombined" + (year)].concat(divisionCombinedValues); 
    this.setState({["DivisionDataRecordCombined" + (year)]: newState["DivisionDataRecordCombined" + (year)]})
    var checkCombined = {
      labels: divisionLabel,
      datasets: this.state["DivisionDataRecordCombined" + distinctYears[distinctYears.length - 1]]
    }
    this.setState({ combinedDivisionDataSet: checkCombined})

    newState["DivisionDataRecordCombinedProfit" + (year)] =  newState["DivisionDataRecordCombinedProfit" + (year)].concat(divisionCombinedValuesProfit); 
    this.setState({["DivisionDataRecordCombinedProfit" + (year)]: newState["DivisionDataRecordCombinedProfit" + (year)]})
    var checkCombinedProfit = {
      labels: divisionLabel,
      datasets: this.state["DivisionDataRecordCombinedProfit" + distinctYears[distinctYears.length - 1]]
    }
    this.setState({ combinedDivisionDataSetProfit: checkCombinedProfit})

    this.setState({ dataSet: {
        labels: this.state.dataLabel,
        datasets: this.state.dataSetRecord
      }
    })

    this.setState({ dataSetProfit: {
      labels: this.state.dataLabel,
      datasets: this.state.dataSetRecordProfit
    }
  })

  })).catch(error => {
    console.log(error)
  })


}

  render() {

    const view = this.state.userRole === 'Writer';
    const displayButton = this.state.displayButton === true;
    const displayButtonProfit = this.state.displayButtonProfit === true;
    const changeGraphButton = this.state.changeGraph === true;
    const changeGraphButtonProfit = this.state.changeGraphProfit === true;
    const checkClickCount = this.state.checkClicks;
    const checkClickCountProfit = this.state.checkClicksProfit;
    const loadedData = this.state.dataLoadCheck;
    const headerSection = "headerSection";
    if(!loadedData){
       return <Container>Loading...</Container>
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
      <div style={{ paddingRight: '10%',paddingLeft: '10%', paddingTop: '2%'}}>
      { displayButton ? 
      (<button><img src={ require('../images/back-arrow.png') } alt="backButton" onClick={this.previousScreenFunction} style={{ height: '50px'}} /></button>)
      : null
      }

      {
      checkClickCount ? null :
      <label>
      <span>Bar</span>
      <Toggle
        id='biscuit-status'
        defaultChecked={this.state.changeGraph}
        icons={false}
        onChange={this.handleGraphChange} 
      />
      <span >Line</span>
      </label>
      }

      {
        checkClickCount ? (<div className="tableFixHead"><table id='tableMain'>
                        <thead>
                        <tr>{this.renderTableHeader(headerSection)}</tr>
                        </thead>
                        <tbody>
                        {combinedDivisionNumbers}
                        </tbody>
                    </table></div>) : (changeGraphButton ? <Line
          data={this.state.revenueTotal}
          //redraw={true}
          options={{
            responsive: true,
            maintainAspectRatio: true,
            bezierCurve: true,
            enable: true,
            title:{
              display:true,
              text:'Carroll Daniel Revenue',
              fontSize:20
            },
            layout: {
                padding: {
                    top: 5,
                    left: 15,
                    right: 15,
                    bottom: 15
                }
            },
            legend:{
              display:true,
              position:'top',
              fullWidth: true,
            },
            tooltips: {
              mode: 'nearest',
              titleAlign: 'center',
              enabled: true,
              callbacks: {
                title: function(tooltipItem, data) {
                    return data.labels[tooltipItem[0].index];
                },
                  label: function(tooltipItem) {
                      return '$' + Math.round(tooltipItem.yLabel).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }, },
            },
            scales: {
              yAxes: [
                {
                  gridLines: {
                    drawBorder: true,
                    color: "grey",
                    zeroLineColor: "grey",
                  },
                  ticks: {
                    fontSize: 15,
                    fontStyle: "bold",
                    beginAtZero:true,
                    userCallback: function(value) {
                        value = value.toString();
                        value = value.split(/(?=(?:...)*$)/);
                        value = value.join(',');
                        return value;
                    }
                  },
                  scaleLabel: {
                    display: true,
                    labelString: 'Total Dollars',
                    fontSize: 30
                }
                }
              ],
              xAxes: [
                {
                  gridLines: {
                    drawBorder: true,
                    color: "grey",
                    zeroLineColor: "grey",
                    drawOnChartArea: false
                  },
                  ticks: {
                    fontSize: 15,
                    fontStyle: "bold"
                  },
                  scaleLabel: {
                    display: true,
                    fontSize: 30
                },
                }
              ]
              },
              onClick:(evt,item) => {
                this.updateState(evt,item)}
          }}
        /> : <Bar
          data={this.state.revenueTotal}
          //redraw={true}
          options={{
            responsive: true,
            maintainAspectRatio: true,
            bezierCurve: true,
            enable: true,
            title:{
              display:true,
              text:'Carroll Daniel Revenue',
              fontSize:20
            },
            layout: {
                padding: {
                    top: 5,
                    left: 15,
                    right: 15,
                    bottom: 15
                }
            },
            legend:{
              display:true,
              position:'top',
              fullWidth: true,
            },
            tooltips: {
              mode: 'nearest',
              titleAlign: 'center',
              enabled: true,
              callbacks: {
                title: function(tooltipItem, data) {
                    return data.labels[tooltipItem[0].index];
                },
                  label: function(tooltipItem) {
                      return '$' + Math.round(tooltipItem.yLabel).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }, },
            },
            scales: {
              yAxes: [
                {
                  gridLines: {
                    drawBorder: true,
                    color: "grey",
                    zeroLineColor: "grey",
                  },
                  ticks: {
                    fontSize: 15,
                    fontStyle: "bold",
                    beginAtZero:true,
                    userCallback: function(value) {
                        value = value.toString();
                        value = value.split(/(?=(?:...)*$)/);
                        value = value.join(',');
                        return value;
                    }
                  },
                  scaleLabel: {
                    display: true,
                    labelString: 'Total Dollars',
                    fontSize: 30
                }
                }
              ],
              xAxes: [
                {
                  gridLines: {
                    drawBorder: true,
                    color: "grey",
                    zeroLineColor: "grey",
                    drawOnChartArea: false
                  },
                  ticks: {
                    fontSize: 15,
                    fontStyle: "bold"
                  },
                  scaleLabel: {
                    display: true,
                    fontSize: 30
                },
                }
              ]
              },
              onClick:(evt,item) => {
                this.updateState(evt,item)
              }
          }}
        />)
      }
      </div>
      <div style={{ paddingRight: '10%',paddingLeft: '10%', paddingTop: '2%'}}>
      { displayButtonProfit ? 
      (<button><img src={ require('../images/back-arrow.png') } alt="backButton" onClick={this.previousScreenFunctionProfit} style={{ height: '50px'}} /></button>)
      : null
      }

      {
        checkClickCountProfit ? null :
      <label>
      <span>Bar</span>
      <Toggle
        id='biscuit-status'
        defaultChecked={this.state.changeGraphProfit}
        icons={false}
        onChange={this.handleGraphChangeProfit} 
      />
      <span >Line</span>
      </label>
      }

      {
        checkClickCountProfit ? (<div className="tableFixHead"><table id='tableMain'>
                        <thead>
                        <tr>{this.renderTableHeader(headerSection)}</tr>
                        </thead>
                        <tbody>
                        {combinedDivisionNumbers}
                        </tbody>
                    </table></div>) : (changeGraphButtonProfit ? <Line
          data={this.state.revenueTotalProfit}
          //redraw={true}
          options={{
            responsive: true,
            maintainAspectRatio: true,
            bezierCurve: true,
            enable: true,
            title:{
              display:true,
              text:'Carroll Daniel Profit',
              fontSize:20
            },
            layout: {
                padding: {
                    top: 5,
                    left: 15,
                    right: 15,
                    bottom: 15
                }
            },
            legend:{
              display:true,
              position:'top',
              fullWidth: true,
            },
            tooltips: {
              mode: 'nearest',
              titleAlign: 'center',
              enabled: true,
              callbacks: {
                title: function(tooltipItem, data) {
                    return data.labels[tooltipItem[0].index];
                },
                  label: function(tooltipItem) {
                      return '$' + Math.round(tooltipItem.yLabel).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }, },
            },
            scales: {
              yAxes: [
                {
                  gridLines: {
                    drawBorder: true,
                    color: "grey",
                    zeroLineColor: "grey",
                  },
                  ticks: {
                    fontSize: 15,
                    fontStyle: "bold",
                    beginAtZero:true,
                    userCallback: function(value) {
                        value = value.toString();
                        value = value.split(/(?=(?:...)*$)/);
                        value = value.join(',');
                        return value;
                    }
                  },
                  scaleLabel: {
                    display: true,
                    labelString: 'Total Dollars',
                    fontSize: 30
                }
                }
              ],
              xAxes: [
                {
                  gridLines: {
                    drawBorder: true,
                    color: "grey",
                    zeroLineColor: "grey",
                    drawOnChartArea: false
                  },
                  ticks: {
                    fontSize: 15,
                    fontStyle: "bold"
                  },
                  scaleLabel: {
                    display: true,
                    fontSize: 30
                },
                }
              ]
              },
              onClick:(evt,item) => {
                this.updateStateProfit(evt,item)}
          }}
        /> : <Bar
          data={this.state.revenueTotalProfit}
          //redraw={true}
          options={{
            responsive: true,
            maintainAspectRatio: true,
            bezierCurve: true,
            enable: true,
            title:{
              display:true,
              text:'Carroll Daniel Profit',
              fontSize:20
            },
            layout: {
                padding: {
                    top: 5,
                    left: 15,
                    right: 15,
                    bottom: 15
                }
            },
            legend:{
              display:true,
              position:'top',
              fullWidth: true,
            },
            tooltips: {
              mode: 'nearest',
              titleAlign: 'center',
              enabled: true,
              callbacks: {
                title: function(tooltipItem, data) {
                    return data.labels[tooltipItem[0].index];
                },
                  label: function(tooltipItem) {
                      return '$' + Math.round(tooltipItem.yLabel).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }, },
            },
            scales: {
              yAxes: [
                {
                  gridLines: {
                    drawBorder: true,
                    color: "grey",
                    zeroLineColor: "grey",
                  },
                  ticks: {
                    fontSize: 15,
                    fontStyle: "bold",
                    beginAtZero:true,
                    userCallback: function(value) {
                        value = value.toString();
                        value = value.split(/(?=(?:...)*$)/);
                        value = value.join(',');
                        return value;
                    }
                  },
                  scaleLabel: {
                    display: true,
                    labelString: 'Total Dollars',
                    fontSize: 30
                }
                }
              ],
              xAxes: [
                {
                  gridLines: {
                    drawBorder: true,
                    color: "grey",
                    zeroLineColor: "grey",
                    drawOnChartArea: false
                  },
                  ticks: {
                    fontSize: 15,
                    fontStyle: "bold"
                  },
                  scaleLabel: {
                    display: true,
                    fontSize: 30
                },
                }
              ]
              },
              onClick:(evt,item) => {
                this.updateStateProfit(evt,item)
              }
          }}
        />)
      }
      </div>
      <div style={{ paddingRight: '10%',paddingLeft: '10%', paddingTop: '2%'}}>
      <Bar
          data={stateTest}

          //redraw={true}
          options={{
            responsive: true,
            maintainAspectRatio: true,
            bezierCurve: true,
            enable: true,
            title:{
              display:true,
              text:'Monthly Revenue Projection',
              fontSize:20
            },
            layout: {
                padding: {
                    top: 5,
                    left: 15,
                    right: 15,
                    bottom: 15
                }
            },
            legend:{
              display:true,
              position:'top',
              fullWidth: true,
              labels: {
                filter: function(item, chart) {
                    // Logic to remove a particular legend item goes here
                    return !item.text.includes('Totals');
                }
            }
            },
            tooltips: {
              mode: 'nearest',
              titleAlign: 'center',
              enabled: true,
              filter: function(tooltipItem){
                return tooltipItem.datasetIndex !== 3;
              },
              callbacks: {
                  label: function(tooltipItem) {
                      return '$' + Math.round(tooltipItem.yLabel).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }, },
            },
            scales: {
              yAxes: [
                {
                  stacked: true,
                  gridLines: {
                    drawBorder: true,
                    color: "grey",
                    zeroLineColor: "grey",
                  },
                  ticks: {
                    fontSize: 15,
                    fontStyle: "bold",
                    beginAtZero:true,
                    userCallback: function(value) {
                        value = value.toString();
                        value = value.split(/(?=(?:...)*$)/);
                        value = value.join(',');
                        return value;
                    }
                  },
                  scaleLabel: {
                    display: true,
                    labelString: 'Total Dollars',
                    fontSize: 30
                }
                }
              ],
              xAxes: [
                {
                  stacked: true,
                  gridLines: {
                    drawBorder: true,
                    color: "grey",
                    zeroLineColor: "grey",
                    drawOnChartArea: false
                  },
                  ticks: {
                    fontSize: 15,
                    fontStyle: "bold"
                  },
                  scaleLabel: {
                    display: true,
                    fontSize: 30
                },
                }
              ]
              },
              onClick:(evt,item) => {this.updateState(evt,item)
              }
          }}
        /></div>
      </>
    );
  }

}

export default withAuth(Graphs);
