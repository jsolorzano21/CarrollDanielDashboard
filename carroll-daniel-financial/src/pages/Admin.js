import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import AuthHelperMethods from '../services/AuthHelperMethods';
import withAuth from '../services/withAuth';
import "react-table/react-table.css";
import * as jwt_decode from 'jwt-decode';
import axios from 'axios';
import MaterialTable from 'material-table'
import { Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'

var currentY = '';
var currentQ = '';
var previousY = '';
var previousQ = '';

class Admin extends Component{


  constructor(props) {
    super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = { //state is by default an object
      ManagementAdjData: [],
      currentHeader: [],
      currentQuarterHeader: [{'title': "Current Year " , 'field' : 'year' },{'title': "Current Quarter " , 'field' : 'quarter' }],
      yearThreeReportHeader: [{'title': "Division Wiley Year 1 Revenue " , 'field' : 'div_1_revenue_1' },{'title': "Division Wiley Year 1 Profit " , 'field' : 'div_1_profit_1' },{'title': "Division Wiley Year 2 Revenue " , 'field' : 'div_1_revenue_2' },{'title': "Division Wiley Year 2 Profit " , 'field' : 'div_1_profit_2' }, {'title': "Division Wiley Year 3 Revenue " , 'field' : 'div_1_revenue_3' },{'title': "Division Wiley Year 3 Profit " , 'field' : 'div_1_profit_3' },
      {'title': "Division Haynes Year 1 Revenue " , 'field' : 'div_2_revenue_1' },{'title': "Division Haynes Year 1 Profit " , 'field' : 'div_2_profit_1' },{'title': "Division Haynes Year 2 Revenue " , 'field' : 'div_2_revenue_2' },{'title': "Division Haynes Year 2 Profit " , 'field' : 'div_2_profit_2' }, {'title': "Division Haynes Year 3 Revenue " , 'field' : 'div_2_revenue_3' },{'title': "Division Haynes Year 3 Profit " , 'field' : 'div_2_profit_3' },
      {'title': "Division Commercial Year 1 Revenue " , 'field' : 'div_3_revenue_1' },{'title': "Division Commercial Year 1 Profit " , 'field' : 'div_3_profit_1' },{'title': "Division Commercial Year 2 Revenue " , 'field' : 'div_3_revenue_2' },{'title': "Division Commercial Year 2 Profit " , 'field' : 'div_3_profit_2' }, {'title': "Division Commercial Year 3 Revenue " , 'field' : 'div_3_revenue_3' },{'title': "Division Commercial Year 3 Profit " , 'field' : 'div_3_profit_3' },
      {'title': "Division Broadwell Year 1 Revenue " , 'field' : 'div_4_revenue_1' },{'title': "Division Broadwell Year 1 Profit " , 'field' : 'div_4_profit_1' },{'title': "Division Broadwell Year 2 Revenue " , 'field' : 'div_4_revenue_2' },{'title': "Division Broadwell Year 2 Profit " , 'field' : 'div_4_profit_2' }, {'title': "Division Broadwell Year 3 Revenue " , 'field' : 'div_4_revenue_3' },{'title': "Division Broadwell Year 3 Profit " , 'field' : 'div_4_profit_3' },
      {'title': "Division Stone Year 1 Revenue " , 'field' : 'div_5_revenue_1' },{'title': "Division Stone Year 1 Profit " , 'field' : 'div_5_profit_1' },{'title': "Division Stone Year 2 Revenue " , 'field' : 'div_5_revenue_2' },{'title': "Division Stone Year 2 Profit " , 'field' : 'div_5_profit_2' }, {'title': "Division Stone Year 3 Revenue " , 'field' : 'div_5_revenue_3' },{'title': "Division Stone Year 3 Profit " , 'field' : 'div_5_profit_3' },
      {'title': "Division Kitchin Year 1 Revenue " , 'field' : 'div_6_revenue_1' },{'title': "Division Kitchin Year 1 Profit " , 'field' : 'div_6_profit_1' },{'title': "Division Kitchin Year 2 Revenue " , 'field' : 'div_6_revenue_2' },{'title': "Division Kitchin Year 2 Profit " , 'field' : 'div_6_profit_2' }, {'title': "Division Kitchin Year 3 Revenue " , 'field' : 'div_6_revenue_3' },{'title': "Division Kitchin Year 3 Profit " , 'field' : 'div_6_profit_3' },
      {'title': "Division Gowens Year 1 Revenue " , 'field' : 'div_7_revenue_1' },{'title': "Division Gowens Year 1 Profit " , 'field' : 'div_7_profit_1' },{'title': "Division Gowens Year 2 Revenue " , 'field' : 'div_7_revenue_2' },{'title': "Division Gowens Year 2 Profit " , 'field' : 'div_7_profit_2' }, {'title': "Division Gowens Year 3 Revenue " , 'field' : 'div_7_revenue_3' },{'title': "Division Gowens Year 3 Profit " , 'field' : 'div_7_profit_3' },
      {'title': "Division Misc Year 1 Revenue " , 'field' : 'div_11_revenue_1' },{'title': "Division Misc Year 1 Profit " , 'field' : 'div_11_profit_1' },{'title': "Division Misc Year 2 Revenue " , 'field' : 'div_11_revenue_2' },{'title': "Division Misc Year 2 Profit " , 'field' : 'div_11_profit_2' }, {'title': "Division Misc Year 3 Revenue " , 'field' : 'div_11_revenue_3' },{'title': "Division Misc Year 3 Profit " , 'field' : 'div_11_profit_3' }],
      currentQuarterData: [],
      threeYearReportData: [],
      currRevenueData: [],
      currRevenueID: [],
      previousRevenueID: [],
      currProfitData: [],
      previousHeader: [],
      previousRevenueData: [],
      previousProfitData: [],
      dataLoadCheck: null,
      userRole: '',
      currentY: '',
      currentQ: '',
      previousY: '',
      previousQ: '',
    }
 }

//Reload Quarter Data
reloadQuarterData(){
      var tokenValue = localStorage.getItem("data-token")
      const AuthStr = 'Mstoken '.concat(tokenValue);
    
      axios.get(
        "https://rest-site-locations-1594736464770.azurewebsites.net/api/financialUpdateQuarterData",
        {headers: {
            "Authorization" : AuthStr,
            "Content-Type" : "application/json"
          }
        }
      ).then(response => {
        var currentQuarter = response['data'];
        this.retrieveQuarterData(currentQuarter)
        this.setState({ currentY: currentQuarter[0].current_year, currentQ: currentQuarter[0].current_quarter})
        var previousQ = '';
        var previousY = '';
        if(currentQuarter[0].current_quarter === '4'){
          previousQ = '3';
          previousY = currentQuarter[0].current_year;
        }else if(currentQuarter[0].current_quarter === '3'){
          previousQ = '2';
          previousY = currentQuarter[0].current_year;
        }else if(currentQuarter[0].current_quarter === '2'){
          previousQ = '1';
          previousY = currentQuarter[0].current_year;
        }else if(currentQuarter[0].current_quarter === '1'){
          previousQ = '4';
          previousY = parseInt(currentQuarter[0].current_year) - 1;
        }
        axios.all([
          axios.get(
            "https://rest-site-locations-1594736464770.azurewebsites.net/api/financialManagementAdjustmentData/yearQuarter/"+currentQuarter[0].current_year+"/"+currentQuarter[0].current_quarter,
            {headers: {
                "Authorization" : AuthStr,
                "Content-Type" : "application/json"
              }
            }
          ),
          axios.get(
            "https://rest-site-locations-1594736464770.azurewebsites.net/api/financialManagementAdjustmentData/yearQuarter/"+previousY+"/"+previousQ,
            {headers: {
                "Authorization" : AuthStr,
                "Content-Type" : "application/json"
              }
            }
        )]).then(axios.spread((response2, response3) => {
          var dataManagementAdjustment = response2['data'];
          var dataManagementAdjustmentPast = response3['data'];
          this.setState({ dataLoadCheck: dataManagementAdjustment, previousY: previousY, previousQ: previousQ})
          this.retrieveData(dataManagementAdjustment.concat(dataManagementAdjustmentPast),false,previousY,previousQ)
      
        }))
      }).catch(error => {
        console.log(error)
      })
    
     }

//current quarter data filter
retrieveQuarterData(newData){
    var futureDataRecords = []
    //current quarter from update-current-quarter table
    newData.map((CurrentQuarterData, index) => {
      const {  id, current_quarter, current_year } = CurrentQuarterData //destructuring
      futureDataRecords.push({'id':id,'year': current_year, 'quarter':current_quarter});

      this.setState({currentQuarterData: futureDataRecords })
      this.reloadUpdatedData(false)
    })
   }

//update Quarter Records
updateQuarterRecord(newRecords, oldRecords, status){
  var objId;
  var newKeyValueObj = {};
  if(status === "update"){
    this.state.currentQuarterData.forEach(function (item, indx){
      if(item.id === newRecords.id){
        objId = newRecords.id
      }
  })
   Object.keys(newRecords).forEach(function (item, num){
     Object.keys(oldRecords).forEach(function (sec, indx){
       if(item === sec){
         if(Object.values(newRecords)[num] !== Object.values(oldRecords)[indx]){
           var updatedValue = Object.values(newRecords)[num]
           var newNum = item;
           var newVal = updatedValue;
           newKeyValueObj["current_" + newNum] = newVal;
         }
       }
     })
   })
   this.updateQuarterDBRecord(objId,newKeyValueObj)
  } 
}

//Quarter Data DB Call
updateQuarterDBRecord(id,keyValueSet){
  var tokenValue = localStorage.getItem("data-token")
  const AuthStr = 'Mstoken '.concat(tokenValue);
  var urlString = "https://rest-site-locations-1594736464770.azurewebsites.net/api/financialUpdateQuarterData/" + id
  //var urlString = "https://rest-site-locations-1594736464770.azurewebsites.net/api/financialUpdateQuarterData/" + id

  axios.put(
    urlString,
    keyValueSet,
    {headers: {
        "Authorization" : AuthStr,
        "Content-Type" : "application/json"
      }
    }
  ).then(response => {
    var dataValue = response['data'];
    console.log(dataValue);
  }).catch(error => {
    console.log(error)
  })
 }

 //year three data filter
retrieveYearThreeReportData(newData, yearData, quarterData){
  console.log("Entered retrieveYearThreeReportData")
  var yeaThreeDataRecords = []
  //current quarter from update-current-quarter table
  newData.map((CurrentReportData, index) => {
    const {  id, year, quarter, div_1_revenue_1, div_1_profit_1, div_1_revenue_2, div_1_profit_2, div_1_revenue_3, div_1_profit_3, div_2_revenue_1, div_2_profit_1, div_2_revenue_2, div_2_profit_2, div_2_revenue_3, div_2_profit_3
      , div_3_revenue_1, div_3_profit_1, div_3_revenue_2, div_3_profit_2, div_3_revenue_3, div_3_profit_3, div_4_revenue_1, div_4_profit_1, div_4_revenue_2, div_4_profit_2, div_4_revenue_3, div_4_profit_3
      , div_5_revenue_1, div_5_profit_1, div_5_revenue_2, div_5_profit_2, div_5_revenue_3, div_5_profit_3, div_6_revenue_1, div_6_profit_1, div_6_revenue_2, div_6_profit_2, div_6_revenue_3, div_6_profit_3
      , div_7_revenue_1, div_7_profit_1, div_7_revenue_2, div_7_profit_2, div_7_revenue_3, div_7_profit_3, div_11_revenue_1, div_11_profit_1, div_11_revenue_2, div_11_profit_2, div_11_revenue_3, div_11_profit_3 } = CurrentReportData //destructuring
    
      if(yearData === year && quarterData === quarter){
        yeaThreeDataRecords.push({'id':id,'year': year, 'quarter':quarter, 'div_1_revenue_1': '$' + parseInt(div_1_revenue_1).toLocaleString(undefined, {maximumFractionDigits:2}) , 'div_1_profit_1': '$' + parseInt(div_1_profit_1).toLocaleString(undefined, {maximumFractionDigits:2}), 'div_1_revenue_2': '$' + parseInt(div_1_revenue_2).toLocaleString(undefined, {maximumFractionDigits:2}) , 'div_1_profit_2': '$' + parseInt(div_1_profit_2).toLocaleString(undefined, {maximumFractionDigits:2}), 'div_1_revenue_3': '$' + parseInt(div_1_revenue_3).toLocaleString(undefined, {maximumFractionDigits:2}), 'div_1_profit_3': '$' + parseInt(div_1_profit_3).toLocaleString(undefined, {maximumFractionDigits:2}),
        'div_2_revenue_1': '$' + parseInt(div_2_revenue_1).toLocaleString(undefined, {maximumFractionDigits:2}) , 'div_2_profit_1': '$' + parseInt(div_2_profit_1).toLocaleString(undefined, {maximumFractionDigits:2}), 'div_2_revenue_2': '$' + parseInt(div_2_revenue_2).toLocaleString(undefined, {maximumFractionDigits:2}) , 'div_2_profit_2': '$' + parseInt(div_2_profit_2).toLocaleString(undefined, {maximumFractionDigits:2}), 'div_2_revenue_3': '$' + parseInt(div_2_revenue_3).toLocaleString(undefined, {maximumFractionDigits:2}), 'div_2_profit_3': '$' + parseInt(div_2_profit_3).toLocaleString(undefined, {maximumFractionDigits:2}),
        'div_3_revenue_1': '$' + parseInt(div_3_revenue_1).toLocaleString(undefined, {maximumFractionDigits:2}) , 'div_3_profit_1': '$' + parseInt(div_3_profit_1).toLocaleString(undefined, {maximumFractionDigits:2}), 'div_3_revenue_2': '$' + parseInt(div_3_revenue_2).toLocaleString(undefined, {maximumFractionDigits:2}) , 'div_3_profit_2': '$' + parseInt(div_3_profit_2).toLocaleString(undefined, {maximumFractionDigits:2}), 'div_3_revenue_3': '$' + parseInt(div_3_revenue_3).toLocaleString(undefined, {maximumFractionDigits:2}), 'div_3_profit_3': '$' + parseInt(div_3_profit_3).toLocaleString(undefined, {maximumFractionDigits:2}),
        'div_4_revenue_1': '$' + parseInt(div_4_revenue_1).toLocaleString(undefined, {maximumFractionDigits:2}) , 'div_4_profit_1': '$' + parseInt(div_4_profit_1).toLocaleString(undefined, {maximumFractionDigits:2}), 'div_4_revenue_2': '$' + parseInt(div_4_revenue_2).toLocaleString(undefined, {maximumFractionDigits:2}) , 'div_4_profit_2': '$' + parseInt(div_4_profit_2).toLocaleString(undefined, {maximumFractionDigits:2}), 'div_4_revenue_3': '$' + parseInt(div_4_revenue_3).toLocaleString(undefined, {maximumFractionDigits:2}), 'div_4_profit_3': '$' + parseInt(div_4_profit_3).toLocaleString(undefined, {maximumFractionDigits:2}),
        'div_5_revenue_1': '$' + parseInt(div_5_revenue_1).toLocaleString(undefined, {maximumFractionDigits:2}) , 'div_5_profit_1': '$' + parseInt(div_5_profit_1).toLocaleString(undefined, {maximumFractionDigits:2}), 'div_5_revenue_2': '$' + parseInt(div_5_revenue_2).toLocaleString(undefined, {maximumFractionDigits:2}) , 'div_5_profit_2': '$' + parseInt(div_5_profit_2).toLocaleString(undefined, {maximumFractionDigits:2}), 'div_5_revenue_3': '$' + parseInt(div_5_revenue_3).toLocaleString(undefined, {maximumFractionDigits:2}), 'div_5_profit_3': '$' + parseInt(div_5_profit_3).toLocaleString(undefined, {maximumFractionDigits:2}),
        'div_6_revenue_1': '$' + parseInt(div_6_revenue_1).toLocaleString(undefined, {maximumFractionDigits:2}) , 'div_6_profit_1': '$' + parseInt(div_6_profit_1).toLocaleString(undefined, {maximumFractionDigits:2}), 'div_6_revenue_2': '$' + parseInt(div_6_revenue_2).toLocaleString(undefined, {maximumFractionDigits:2}) , 'div_6_profit_2': '$' + parseInt(div_6_profit_2).toLocaleString(undefined, {maximumFractionDigits:2}), 'div_6_revenue_3': '$' + parseInt(div_6_revenue_3).toLocaleString(undefined, {maximumFractionDigits:2}), 'div_6_profit_3': '$' + parseInt(div_6_profit_3).toLocaleString(undefined, {maximumFractionDigits:2}),
        'div_7_revenue_1': '$' + parseInt(div_7_revenue_1).toLocaleString(undefined, {maximumFractionDigits:2}) , 'div_7_profit_1': '$' + parseInt(div_7_profit_1).toLocaleString(undefined, {maximumFractionDigits:2}), 'div_7_revenue_2': '$' + parseInt(div_7_revenue_2).toLocaleString(undefined, {maximumFractionDigits:2}) , 'div_7_profit_2': '$' + parseInt(div_7_profit_2).toLocaleString(undefined, {maximumFractionDigits:2}), 'div_7_revenue_3': '$' + parseInt(div_7_revenue_3).toLocaleString(undefined, {maximumFractionDigits:2}), 'div_7_profit_3': '$' + parseInt(div_7_profit_3).toLocaleString(undefined, {maximumFractionDigits:2}),
        'div_11_revenue_1': '$' + parseInt(div_11_revenue_1).toLocaleString(undefined, {maximumFractionDigits:2}) , 'div_11_profit_1': '$' + parseInt(div_11_profit_1).toLocaleString(undefined, {maximumFractionDigits:2}), 'div_11_revenue_2': '$' + parseInt(div_11_revenue_2).toLocaleString(undefined, {maximumFractionDigits:2}) , 'div_11_profit_2': '$' + parseInt(div_11_profit_2).toLocaleString(undefined, {maximumFractionDigits:2}), 'div_11_revenue_3': '$' + parseInt(div_11_revenue_3), 'div_11_profit_3': '$' + parseInt(div_11_profit_3).toLocaleString(undefined, {maximumFractionDigits:2})});
      }

    console.log(yeaThreeDataRecords)
    this.setState({threeYearReportData: yeaThreeDataRecords })
    this.reloadUpdatedData(false)
  })
 }

 //update Quarter Records
updateThreeYearReportRecord(newRecords, oldRecords, status){
  var objId;
  var newKeyValueObj = {};
  if(status === "update"){
    this.state.threeYearReportData.forEach(function (item, indx){
      if(item.id === newRecords.id){
        objId = newRecords.id
      }
  })
   Object.keys(newRecords).forEach(function (item, num){
     Object.keys(oldRecords).forEach(function (sec, indx){
       if(item === sec){
         if(Object.values(newRecords)[num] !== Object.values(oldRecords)[indx]){
           var updatedValue = Object.values(newRecords)[num]
           var newNum = item;
           var newVal = updatedValue;
           newKeyValueObj[newNum] = newVal.replace(/[^\d.-]/g, '');
         }
       }
     })
   })
   this.updateYearThreeReportDBRecord(objId,newKeyValueObj)
  } 
}

//Year 3 Report Data DB Call
updateYearThreeReportDBRecord(id,keyValueSet){
  var tokenValue = localStorage.getItem("data-token")
  const AuthStr = 'Mstoken '.concat(tokenValue);
  var urlString = "https://rest-site-locations-1594736464770.azurewebsites.net/api/financialUpdateYearThreeReport/" + id

  axios.put(
    urlString,
    keyValueSet,
    {headers: {
        "Authorization" : AuthStr,
        "Content-Type" : "application/json"
      }
    }
  ).then(response => {
    var dataValue = response['data'];
    console.log(dataValue);
  }).catch(error => {
    console.log(error)
  })
 }

 //Reload 3 Year Report Data Data
reloadThreeYearReportData(){
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
    "https://rest-site-locations-1594736464770.azurewebsites.net/api/financialUpdateYearThreeReport",
    {headers: {
        "Authorization" : AuthStr,
        "Content-Type" : "application/json"
      }
    }
  )]).then(axios.spread((response, response2) => {
    var currentQuarter = response['data'];
    var threeYearValue = response2['data'];
    this.retrieveYearThreeReportData(threeYearValue, currentQuarter[0].current_year, currentQuarter[0].current_quarter)

  })).catch(error => {
    console.log(error)
  })

 }


 //management data filter
 retrieveData(newData,checkCall,previousQ1,previousY1){
  var objRevenue = {}
  var objRevenueId = {}
  var objPreviousRevenueId = {}
  var objProfit = {}
  var objPreviousRevenue = {}
  var objPreviousProfit = {}
  

  //management data for div income year one and year two from financial-management-adjustment table
  newData.map((ManagementAdjData, index) => {
    const {  id, year, quarter, ma_revenue, ma_profit, division } = ManagementAdjData //destructuring
        var divisionName = '';
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

      if(year === currentY && quarter === currentQ){
        objRevenue[division] = '$' + parseInt(ma_revenue).toLocaleString(undefined, {maximumFractionDigits:2});
        objRevenueId[division] = id;
        objProfit[division] = '$' + parseInt(ma_profit).toLocaleString(undefined, {maximumFractionDigits:2});
        //create table header for Revenue
        if(checkCall === true){
          var newRecordsRevenue = { 'title': "Division " + divisionName, 'field' : division}
          var joined = this.state.currentHeader.concat(newRecordsRevenue).sort((a, b) => (a.field - b.field))
          this.setState({currentHeader : joined })
        }
      }
      else if(year === previousY.toString() && quarter === previousQ){
        objPreviousRevenue[division] = '$' + parseInt(ma_revenue).toLocaleString(undefined, {maximumFractionDigits:2})
        objPreviousRevenueId[division] = id;
        objPreviousProfit[division] = '$' + parseInt(ma_profit).toLocaleString(undefined, {maximumFractionDigits:2})
        if(checkCall === true){
        //create table header for Profit
        var newRecordsProfit = { 'title': "Division " + divisionName, 'field' : division}
        var joinedPrevious = this.state.previousHeader.concat(newRecordsProfit).sort((a, b) => (a.field - b.field))
        this.setState({previousHeader : joinedPrevious })
        }
      }
      this.setState({currRevenueData: [objRevenue],currRevenueID: [objRevenueId],previousRevenueID: [objPreviousRevenueId],currProfitData: [objProfit],previousRevenueData: [objPreviousRevenue],previousProfitData: [objPreviousProfit]})
  })
 }

 //Update Management Data  
 updateManagementRecord(newRecords, oldRecords, type, yearInfo){
  Object.keys(newRecords).map((item, num) => {
    Object.keys(oldRecords).map((sec, indx) => {
      if(item === sec){
        if(Object.values(newRecords)[num] !== Object.values(oldRecords)[indx]){
            var updatedValue = Object.values(newRecords)[num]
            if(yearInfo === "current"){
              this.state.currRevenueID.map((key, value) => {
                var recordId = Object.values(key)[num]
                var updateType = type
                this.updateDBRecordManagement(recordId,updateType,updatedValue.replace(/[^\d.-]/g, ''))
              })
           }else if(yearInfo === "previous"){
            this.state.previousRevenueID.map((key, value) => {
              var recordId = Object.values(key)[num]
              var updateType = type
              this.updateDBRecordManagement(recordId,updateType,updatedValue.replace(/[^\d.-]/g, ''))
            })
           }
        }
      }
    })
  })
 }

 //Management Data DB Call
 updateDBRecordManagement(id,type,value){
  var tokenValue = localStorage.getItem("data-token")
  const AuthStr = 'Mstoken '.concat(tokenValue);
  var urlString = "https://rest-site-locations-1594736464770.azurewebsites.net/api/financialManagementAdjustmentData/" + id

  axios.put(
    urlString,
    {
      [type]: value
    },
    {headers: {
        "Authorization" : AuthStr,
        "Content-Type" : "application/json"
      }
    }
  ).then(response => {
    var dataValue = response['data'];
    console.log(dataValue)
  }).catch(error => {
    console.log(error)
  })
 }

   //Reload Management Data
   reloadUpdatedData(checkValue){
    var tokenValue = localStorage.getItem("data-token")
    const AuthStr = 'Mstoken '.concat(tokenValue);
  
    axios.get(
      "https://rest-site-locations-1594736464770.azurewebsites.net/api/financialManagementAdjustmentData",
      {headers: {
          "Authorization" : AuthStr,
          "Content-Type" : "application/json"
        }
      }
    ).then(response => {
      var dataValue = response['data'];
      //this.setState({ ManagementAdjData: dataValue})
      this.retrieveData(dataValue,checkValue)
    }).catch(error => {
      console.log(error)
    })
  
   }

 componentDidMount(){
      
  var tokenValue = localStorage.getItem("data-token")
  const AuthStr = 'Mstoken '.concat(tokenValue);
  //var decoded = jwt_decode(localStorage.getItem('data-token'));
  //var user =  decoded.sub;

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
    "https://rest-site-locations-1594736464770.azurewebsites.net/api/financialUpdateYearThreeReport",
    {headers: {
        "Authorization" : AuthStr,
        "Content-Type" : "application/json"
      }
    }
  )]).then(axios.spread((response, response4) => {
    var currentQuarter = response['data'];
    var yearThreeData = response4['data'];

    currentY = currentQuarter[0].current_year
    currentQ = currentQuarter[0].current_quarter

    //this.retrieveQuarterData(currentQuarter)
    var futureDataRecords = []
    //current quarter from update-current-quarter table
    currentQuarter.map((CurrentQuarterData, index) => {
      const {  id, current_quarter, current_year } = CurrentQuarterData //destructuring
      futureDataRecords.push({'id':id,'year': current_year, 'quarter':current_quarter});

    })

    var yeaThreeDataRecords = []
    //current quarter from update-current-quarter table
    yearThreeData.map((CurrentReportData, index) => {
      const {  id, year, quarter, div_1_revenue_1, div_1_profit_1, div_1_revenue_2, div_1_profit_2, div_1_revenue_3, div_1_profit_3, div_2_revenue_1, div_2_profit_1, div_2_revenue_2, div_2_profit_2, div_2_revenue_3, div_2_profit_3
        , div_3_revenue_1, div_3_profit_1, div_3_revenue_2, div_3_profit_2, div_3_revenue_3, div_3_profit_3, div_4_revenue_1, div_4_profit_1, div_4_revenue_2, div_4_profit_2, div_4_revenue_3, div_4_profit_3
        , div_5_revenue_1, div_5_profit_1, div_5_revenue_2, div_5_profit_2, div_5_revenue_3, div_5_profit_3, div_6_revenue_1, div_6_profit_1, div_6_revenue_2, div_6_profit_2, div_6_revenue_3, div_6_profit_3
        , div_7_revenue_1, div_7_profit_1, div_7_revenue_2, div_7_profit_2, div_7_revenue_3, div_7_profit_3, div_11_revenue_1, div_11_profit_1, div_11_revenue_2, div_11_profit_2, div_11_revenue_3, div_11_profit_3 } = CurrentReportData //destructuring
      
        if(currentQuarter[0].current_year === year && currentQuarter[0].current_quarter === quarter){
          yeaThreeDataRecords.push({'id':id,'year': year, 'quarter':quarter, 'div_1_revenue_1': '$' + parseInt(div_1_revenue_1).toLocaleString(undefined, {maximumFractionDigits:2}) , 'div_1_profit_1': '$' + parseInt(div_1_profit_1).toLocaleString(undefined, {maximumFractionDigits:2}), 'div_1_revenue_2': '$' + parseInt(div_1_revenue_2).toLocaleString(undefined, {maximumFractionDigits:2}) , 'div_1_profit_2': '$' + parseInt(div_1_profit_2).toLocaleString(undefined, {maximumFractionDigits:2}), 'div_1_revenue_3': '$' + parseInt(div_1_revenue_3).toLocaleString(undefined, {maximumFractionDigits:2}), 'div_1_profit_3': '$' + parseInt(div_1_profit_3).toLocaleString(undefined, {maximumFractionDigits:2}),
          'div_2_revenue_1': '$' + parseInt(div_2_revenue_1).toLocaleString(undefined, {maximumFractionDigits:2}) , 'div_2_profit_1': '$' + parseInt(div_2_profit_1).toLocaleString(undefined, {maximumFractionDigits:2}), 'div_2_revenue_2': '$' + parseInt(div_2_revenue_2).toLocaleString(undefined, {maximumFractionDigits:2}) , 'div_2_profit_2': '$' + parseInt(div_2_profit_2).toLocaleString(undefined, {maximumFractionDigits:2}), 'div_2_revenue_3': '$' + parseInt(div_2_revenue_3).toLocaleString(undefined, {maximumFractionDigits:2}), 'div_2_profit_3': '$' + parseInt(div_2_profit_3).toLocaleString(undefined, {maximumFractionDigits:2}),
          'div_3_revenue_1': '$' + parseInt(div_3_revenue_1).toLocaleString(undefined, {maximumFractionDigits:2}) , 'div_3_profit_1': '$' + parseInt(div_3_profit_1).toLocaleString(undefined, {maximumFractionDigits:2}), 'div_3_revenue_2': '$' + parseInt(div_3_revenue_2).toLocaleString(undefined, {maximumFractionDigits:2}) , 'div_3_profit_2': '$' + parseInt(div_3_profit_2).toLocaleString(undefined, {maximumFractionDigits:2}), 'div_3_revenue_3': '$' + parseInt(div_3_revenue_3).toLocaleString(undefined, {maximumFractionDigits:2}), 'div_3_profit_3': '$' + parseInt(div_3_profit_3).toLocaleString(undefined, {maximumFractionDigits:2}),
          'div_4_revenue_1': '$' + parseInt(div_4_revenue_1).toLocaleString(undefined, {maximumFractionDigits:2}) , 'div_4_profit_1': '$' + parseInt(div_4_profit_1).toLocaleString(undefined, {maximumFractionDigits:2}), 'div_4_revenue_2': '$' + parseInt(div_4_revenue_2).toLocaleString(undefined, {maximumFractionDigits:2}) , 'div_4_profit_2': '$' + parseInt(div_4_profit_2).toLocaleString(undefined, {maximumFractionDigits:2}), 'div_4_revenue_3': '$' + parseInt(div_4_revenue_3).toLocaleString(undefined, {maximumFractionDigits:2}), 'div_4_profit_3': '$' + parseInt(div_4_profit_3).toLocaleString(undefined, {maximumFractionDigits:2}),
          'div_5_revenue_1': '$' + parseInt(div_5_revenue_1).toLocaleString(undefined, {maximumFractionDigits:2}) , 'div_5_profit_1': '$' + parseInt(div_5_profit_1).toLocaleString(undefined, {maximumFractionDigits:2}), 'div_5_revenue_2': '$' + parseInt(div_5_revenue_2).toLocaleString(undefined, {maximumFractionDigits:2}) , 'div_5_profit_2': '$' + parseInt(div_5_profit_2).toLocaleString(undefined, {maximumFractionDigits:2}), 'div_5_revenue_3': '$' + parseInt(div_5_revenue_3).toLocaleString(undefined, {maximumFractionDigits:2}), 'div_5_profit_3': '$' + parseInt(div_5_profit_3).toLocaleString(undefined, {maximumFractionDigits:2}),
          'div_6_revenue_1': '$' + parseInt(div_6_revenue_1).toLocaleString(undefined, {maximumFractionDigits:2}) , 'div_6_profit_1': '$' + parseInt(div_6_profit_1).toLocaleString(undefined, {maximumFractionDigits:2}), 'div_6_revenue_2': '$' + parseInt(div_6_revenue_2).toLocaleString(undefined, {maximumFractionDigits:2}) , 'div_6_profit_2': '$' + parseInt(div_6_profit_2).toLocaleString(undefined, {maximumFractionDigits:2}), 'div_6_revenue_3': '$' + parseInt(div_6_revenue_3).toLocaleString(undefined, {maximumFractionDigits:2}), 'div_6_profit_3': '$' + parseInt(div_6_profit_3).toLocaleString(undefined, {maximumFractionDigits:2}),
          'div_7_revenue_1': '$' + parseInt(div_7_revenue_1).toLocaleString(undefined, {maximumFractionDigits:2}) , 'div_7_profit_1': '$' + parseInt(div_7_profit_1).toLocaleString(undefined, {maximumFractionDigits:2}), 'div_7_revenue_2': '$' + parseInt(div_7_revenue_2).toLocaleString(undefined, {maximumFractionDigits:2}) , 'div_7_profit_2': '$' + parseInt(div_7_profit_2).toLocaleString(undefined, {maximumFractionDigits:2}), 'div_7_revenue_3': '$' + parseInt(div_7_revenue_3).toLocaleString(undefined, {maximumFractionDigits:2}), 'div_7_profit_3': '$' + parseInt(div_7_profit_3).toLocaleString(undefined, {maximumFractionDigits:2}),
          'div_11_revenue_1': '$' + parseInt(div_11_revenue_1).toLocaleString(undefined, {maximumFractionDigits:2}) , 'div_11_profit_1': '$' + parseInt(div_11_profit_1).toLocaleString(undefined, {maximumFractionDigits:2}), 'div_11_revenue_2': '$' + parseInt(div_11_revenue_2).toLocaleString(undefined, {maximumFractionDigits:2}) , 'div_11_profit_2': '$' + parseInt(div_11_profit_2).toLocaleString(undefined, {maximumFractionDigits:2}), 'div_11_revenue_3': '$' + parseInt(div_11_revenue_3).toLocaleString(undefined, {maximumFractionDigits:2}), 'div_11_profit_3': '$' + parseInt(div_11_profit_3).toLocaleString(undefined, {maximumFractionDigits:2})});
    }})

    var decoded = jwt_decode(localStorage.getItem('data-token'));
    if(currentQuarter[0].current_quarter === '4'){
      previousQ = '3';
      previousY = currentQuarter[0].current_year;
    }else if(currentQuarter[0].current_quarter === '3'){
      previousQ = '2';
      previousY = currentQuarter[0].current_year;
    }else if(currentQuarter[0].current_quarter === '2'){
      previousQ = '1';
      previousY = currentQuarter[0].current_year;
    }else if(currentQuarter[0].current_quarter === '1'){
      previousQ = '4';
      previousY = parseInt(currentQuarter[0].current_year) - 1;
    }
    
    
    axios.all([
      axios.get(
        "https://rest-site-locations-1594736464770.azurewebsites.net/api/financialManagementAdjustmentData/",
        {headers: {
            "Authorization" : AuthStr,
            "Content-Type" : "application/json"
          }
        }
      )]).then(axios.spread((response2) => {
      var dataManagementAdjustment = response2['data'];
      this.retrieveData(dataManagementAdjustment,true,previousY,previousQ)
      this.setState({ threeYearReportData: yeaThreeDataRecords, userRole: decoded.roles, dataLoadCheck: currentQuarter, previousY: previousY, previousQ: previousQ, currentQuarterData: futureDataRecords  })
      //this.retrieveData(dataManagementAdjustment,true,previousY,previousQ)
  
    }))
  })).catch(error => {
    console.log(error)
  })


}

   /* Create a new instance of the 'AuthHelperMethods' component*/
   Auth = new AuthHelperMethods();

   _handleLogout = () => {
     this.Auth.logout()
     this.props.history.replace('/financial/login');
   }


    render(){
      
      const loadedData = this.state.dataLoadCheck;
      if(!loadedData) {
        return <Container>Loading...</Container>
      }else{
      //console.log("Rendering Admin Page!")
      const view = this.state.userRole === 'Writer';
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
          <Container style={{paddingTop: '3%'}}>
          <MaterialTable
                style={{ paddingRight: '2%', paddingLeft: '2%', paddingBottom: '3%'}}
                title="Current Quarter"
                columns={this.state.currentQuarterHeader}
                data={this.state.currentQuarterData}
                options={{
                  search: false,
                  paging: false
                }}
                editable={{
                  onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                      this.updateQuarterRecord(newData, oldData, "update")
                      setTimeout(() => {
                        this.reloadQuarterData()
                        resolve()
                      }, 3000)
                    }),
                }}
              />
          </Container>
          <Container style={{paddingTop: '2%'}}>
          <MaterialTable
                style={{ paddingRight: '2%', paddingLeft: '2%', paddingBottom: '3%'}}
                title="Year 3 Report -  Management Plan"
                columns={this.state.yearThreeReportHeader}
                data={this.state.threeYearReportData}
                options={{
                  search: false,
                  paging: false
                }}
                editable={{
                  onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                      this.updateThreeYearReportRecord(newData, oldData, "update")
                      setTimeout(() => {
                        this.reloadThreeYearReportData()
                        resolve()
                      }, 3000)
                    }),
                }}
              />
          </Container>
          <Container style={{paddingTop: '2%'}}>
          <MaterialTable
                style={{ paddingRight: '2%', paddingLeft: '2%', paddingBottom: '3%'}}
                title="Revenue - Management Adjustment Current Quarter"
                columns={this.state.currentHeader}
                data={this.state.currRevenueData}
                options={{
                  search: false,
                  paging: false
                }}
                editable={{
                  onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                      this.updateManagementRecord(newData, oldData, "ma_revenue", "current")
                      setTimeout(() => {
                        this.reloadUpdatedData(false)
                        resolve()
                      }, 3000)
                    }),
                }}
              />
          </Container>
          <Container style={{paddingTop: '2%'}}>
          <MaterialTable
                style={{ paddingRight: '2%', paddingLeft: '2%', paddingBottom: '3%'}}
                title="Profit - Management Adjustment Current Quarter"
                columns={this.state.currentHeader}
                data={this.state.currProfitData}
                options={{
                  search: false,
                  paging: false
                }}
                editable={{
                  onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                      this.updateManagementRecord(newData, oldData, "ma_profit", "current")
                      setTimeout(() => {
                        this.reloadUpdatedData(false)
                        resolve()
                      }, 3000)
                    }),
                }}
              />
              </Container>
              <Container style={{paddingTop: '2%'}}>
               <MaterialTable
                style={{ paddingRight: '2%', paddingLeft: '2%', paddingBottom: '3%'}}
                title="Revenue - Management Adjustment Previous Quarter"
                columns={this.state.previousHeader}
                data={this.state.previousRevenueData}
                options={{
                  search: false,
                  paging: false
                }}
                editable={{
                  onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                      this.updateManagementRecord(newData, oldData, "ma_revenue", "previous")
                      setTimeout(() => {
                        this.reloadUpdatedData(false)
                        resolve()
                      }, 3000)
                    }),
                }}
              />
          </Container>
          <Container style={{paddingTop: '2%', paddingBottom: '2%'}}>
          <MaterialTable
                style={{ paddingRight: '2%', paddingLeft: '2%', paddingBottom: '3%'}}
                title="Profit - Management Adjustment Previous Quarter"
                columns={this.state.previousHeader}
                data={this.state.previousProfitData}
                options={{
                  search: false,
                  paging: false
                }}
                editable={{
                  onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                      this.updateManagementRecord(newData, oldData, "ma_profit", "previous")
                      setTimeout(() => {
                        this.reloadUpdatedData(false)
                        resolve()
                      }, 3000)
                    }),
                }}
              />
          </Container>
          </>
        )}

    }
}


export default withAuth(Admin);
