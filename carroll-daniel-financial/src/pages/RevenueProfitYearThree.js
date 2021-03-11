import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import AuthHelperMethods from '../services/AuthHelperMethods';
import withAuth from '../services/withAuth';
import axios from 'axios' 
import '../global'
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
//import * as XLSXStyle from 'xlsx-style';
import * as jwt_decode from 'jwt-decode';
import { Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'


var contractTotal = 0;
var contractTotal2 = 0;
var contractTotal3 = 0;
var contractTotal4 = 0;
var contractTotal5 = 0;
var contractTotal6 = 0;
var contractTotal7 = 0;
var contractTotal11 = 0;
var contractTotalABNC = 0;
var contractTotalABNC2 = 0;
var contractTotalABNC3 = 0;
var contractTotalABNC4 = 0;
var contractTotalABNC5 = 0;
var contractTotalABNC6 = 0;
var contractTotalABNC7 = 0;
var contractTotalABNC11 = 0;
var contractTotalABNCOne = 0;
var contractTotalFA = 0;
var contractTotalFA2 = 0;
var contractTotalFA3 = 0;
var contractTotalFA4 = 0;
var contractTotalFA5 = 0;
var contractTotalFA6 = 0;
var contractTotalFA7 = 0;
var contractTotalFA11 = 0;
var contractTotalFAOne = 0;
var expectedContractAmountABNC = 0;
var expectedContractAmountABNC2 = 0;
var expectedContractAmountABNC3 = 0;
var expectedContractAmountABNC4 = 0;
var expectedContractAmountABNC5 = 0;
var expectedContractAmountABNC6 = 0;
var expectedContractAmountABNC7 = 0;
var expectedContractAmountABNC11 = 0;
var expectedContractAmountABNCOne = 0;
var expectedContractAmountFA = 0;
var expectedContractAmountFA2 = 0;
var expectedContractAmountFA3 = 0;
var expectedContractAmountFA4 = 0;
var expectedContractAmountFA5 = 0;
var expectedContractAmountFA6 = 0;
var expectedContractAmountFA7 = 0;
var expectedContractAmountFA11 = 0;
var expectedContractAmountFAOne = 0;
var contractTotalOne = 0;
var profitTotal = 0;
var profitTotal2 = 0;
var profitTotal3 = 0;
var profitTotal4 = 0;
var profitTotal5 = 0;
var profitTotal6 = 0;
var profitTotal7 = 0;
var profitTotal11 = 0;
var profitTotalOne = 0;
var expectedConAmount = 0;
var expectedConAmount2 = 0;
var expectedConAmount3 = 0;
var expectedConAmount4 = 0;
var expectedConAmount5 = 0;
var expectedConAmount6 = 0;
var expectedConAmount7 = 0;
var expectedConAmount11 = 0;
var expectedConAmountOne = 0;
var expectedRevenue = 0;
var expectedRevenue2 = 0;
var expectedRevenue3 = 0;
var expectedRevenue4 = 0;
var expectedRevenue5 = 0;
var expectedRevenue6 = 0;
var expectedRevenue7 = 0;
var expectedRevenue11 = 0;
var expectedRevenueFA = 0;
var expectedRevenueFA2 = 0;
var expectedRevenueFA3 = 0;
var expectedRevenueFA4 = 0;
var expectedRevenueFA5 = 0;
var expectedRevenueFA6 = 0;
var expectedRevenueFA7 = 0;
var expectedRevenueFA11 = 0;
var expectedRevenueFAOne = 0;
var expectedRevenueOne = 0;
var expectedProfit = 0;
var expectedProfit2 = 0;
var expectedProfit3 = 0;
var expectedProfit4 = 0;
var expectedProfit5 = 0;
var expectedProfit6 = 0;
var expectedProfit7 = 0;
var expectedProfit11 = 0;
var expectedProfitFA = 0;
var expectedProfitFA2 = 0;
var expectedProfitFA3 = 0;
var expectedProfitFA4 = 0;
var expectedProfitFA5 = 0;
var expectedProfitFA6 = 0;
var expectedProfitFA7 = 0;
var expectedProfitFA11 = 0;
var expectedProfitFAOne = 0;
var expectedProfitOne = 0;
//var expectedBacklog = 0;
var expectedFutureRev = 0;
var expectedFutureRev2 = 0;
var expectedFutureRev3 = 0;
var expectedFutureRev4 = 0;
var expectedFutureRev5 = 0;
var expectedFutureRev6 = 0;
var expectedFutureRev7 = 0;
var expectedFutureRev11 = 0;
var expectedFutureRevFA = 0;
var expectedFutureRevFA2 = 0;
var expectedFutureRevFA3 = 0;
var expectedFutureRevFA4 = 0;
var expectedFutureRevFA5 = 0;
var expectedFutureRevFA6 = 0;
var expectedFutureRevFA7 = 0;
var expectedFutureRevFA11 = 0;
var expectedFutureRevFAOne = 0;
var expectedFutureRevOne = 0;
var expectedFutureProf = 0;
var expectedFutureProf2 = 0;
var expectedFutureProf3 = 0;
var expectedFutureProf4 = 0;
var expectedFutureProf5 = 0;
var expectedFutureProf6 = 0;
var expectedFutureProf7 = 0;
var expectedFutureProf11 = 0;
var expectedFutureProfFA = 0;
var expectedFutureProfFA2 = 0;
var expectedFutureProfFA3 = 0;
var expectedFutureProfFA4 = 0;
var expectedFutureProfFA5 = 0;
var expectedFutureProfFA6 = 0;
var expectedFutureProfFA7 = 0;
var expectedFutureProfFA11 = 0;
var expectedFutureProfFAOne = 0;
var expectedFutureProfOne = 0;
var expectedFutureBack = 0;
var expectedFutureBack2 = 0;
var expectedFutureBack3 = 0;
var expectedFutureBack4 = 0;
var expectedFutureBack5 = 0;
var expectedFutureBack6 = 0;
var expectedFutureBack7 = 0;
var expectedFutureBack11 = 0;
var expectedFutureBackFA = 0;
var expectedFutureBackFA2 = 0;
var expectedFutureBackFA3 = 0;
var expectedFutureBackFA4 = 0;
var expectedFutureBackFA5 = 0;
var expectedFutureBackFA6 = 0;
var expectedFutureBackFA7 = 0;
var expectedFutureBackFA11 = 0;
var expectedFutureBackFAOne = 0;
var expectedFutureBackOne = 0;
var expectedFutureBackProfit = 0;
var expectedFutureBackProfit2 = 0;
var expectedFutureBackProfit3 = 0;
var expectedFutureBackProfit4 = 0;
var expectedFutureBackProfit5 = 0;
var expectedFutureBackProfit6 = 0;
var expectedFutureBackProfit7 = 0;
var expectedFutureBackProfit11 = 0;
var expectedFutureBackProfitFA = 0;
var expectedFutureBackProfitFA2 = 0;
var expectedFutureBackProfitFA3 = 0;
var expectedFutureBackProfitFA4 = 0;
var expectedFutureBackProfitFA5 = 0;
var expectedFutureBackProfitFA6 = 0;
var expectedFutureBackProfitFA7 = 0;
var expectedFutureBackProfitFA11 = 0;
var expectedFutureBackProfitFAOne = 0;

var currentQuarter = ''

var financialString = '';
var currentQuarterResp = '';
var userDivisionNumber = '';
var currentYearResp = '';
var currentDateString = '';
var currentYearLabel = '';
var divisionContracts = [];
var divisionContractsABNC = [];
var divisionContractsFA = [];
var divisionContracts2 = [];
var divisionContractsABNC2 = [];
var divisionContractsFA2 = [];
var divisionContracts3 = [];
var divisionContractsABNC3 = [];
var divisionContractsFA3 = [];
var divisionContracts4 = [];
var divisionContractsABNC4 = [];
var divisionContractsFA4 = [];
var divisionContracts5 = [];
var divisionContractsABNC5 = [];
var divisionContractsFA5 = [];
var divisionContracts6 = [];
var divisionContractsABNC6 = [];
var divisionContractsFA6 = [];
var divisionContracts7 = [];
var divisionContractsABNC7 = [];
var divisionContractsFA7 = [];
var divisionContracts11 = [];
var divisionContractsABNC11 = [];
var divisionContractsFA11 = [];
var divisionContractsOne = [];
var divisionContractsABNCOne = [];
var divisionContractsFAOne = [];

var divOneArray = [];
var divTwoArray = [];
var divThreeArray = [];
var divFourArray = [];
var divFiveArray = [];
var divSixArray = [];
var divSevenArray = [];
var divElevenArray = [];
var div1ArrayExecAdj = [];
var div2ArrayExecAdj = [];
var div3ArrayExecAdj = [];
var div4ArrayExecAdj = [];
var div5ArrayExecAdj = [];
var div6ArrayExecAdj = [];
var div7ArrayExecAdj = [];
var div11ArrayExecAdj = [];
var divisionContractsTotal = [];
var divisionContractsTotal2 = [];
var divisionContractsTotal3 = [];
var divisionContractsTotal4 = [];
var divisionContractsTotal5 = [];
var divisionContractsTotal6 = [];
var divisionContractsTotal7 = [];
var divisionContractsTotal11 = [];
var divisionContractsTotalOne = [];
var divisionABNCTotal = [];
var divisionABNCTotal2 = [];
var divisionABNCTotal3 = [];
var divisionABNCTotal4 = [];
var divisionABNCTotal5 = [];
var divisionABNCTotal6 = [];
var divisionABNCTotal7 = [];
var divisionABNCTotal11 = [];
var divisionABNCTotalOne = [];
var divisionFATotal = [];
var divisionFATotal2 = [];
var divisionFATotal3 = [];
var divisionFATotal4 = [];
var divisionFATotal5 = [];
var divisionFATotal6 = [];
var divisionFATotal7 = [];
var divisionFATotal11 = [];
var divisionFATotalOne = [];
var divisionCombinedTotal = [];
var divisionCombinedTotal2 = [];
var divisionCombinedTotal3 = [];
var divisionCombinedTotal4 = [];
var divisionCombinedTotal5 = [];
var divisionCombinedTotal6 = [];
var divisionCombinedTotal7 = [];
var divisionCombinedTotal11 = [];
var divisionCombinedTotalOne = [];
var divisionCombinedTotalOneExecAdj = [];
var divisionCombinedTotalOnePercent = [];
var divisionCombinedTotalPlan = [];
var divisionCombinedTotalPlanPercent = [];
var divisionCombinedTotalPlanTwo = [];
var divisionCombinedTotalPlanPercentTwo = [];
var divisionCombinedTotalPlanThree = [];
var divisionCombinedTotalPlanPercentThree = [];
var divisionCombinedTotalPlanFour = [];
var divisionCombinedTotalPlanPercentFour = [];
var divisionCombinedTotalPlanFive = [];
var divisionCombinedTotalPlanPercentFive = [];
var divisionCombinedTotalPlanSix = [];
var divisionCombinedTotalPlanPercentSix = [];
var divisionCombinedTotalPlanSeven = [];
var divisionCombinedTotalPlanPercentSeven = [];
var divisionCombinedTotalPlanEleven = [];
var divisionCombinedTotalPlanPercentEleven = [];
//var divisionArray = [];
let childrenDataContract1 = [];
let childrenDataContract2 = [];
let childrenDataContract3 = [];
let childrenDataContract4 = [];
let childrenDataContract5 = [];
let childrenDataContract6 = [];
let childrenDataContract7 = [];
let childrenDataContract11 = [];
let childrenDataContractOne = [];
let childrenDataABNC1 = [];
let childrenDataABNC2 = [];
let childrenDataABNC3 = [];
let childrenDataABNC4 = [];
let childrenDataABNC5 = [];
let childrenDataABNC6 = [];
let childrenDataABNC7 = [];
let childrenDataABNC11 = [];
let childrenDataABNCOne = [];
let childrenDataFA1 = [];
let childrenDataFA2 = [];
let childrenDataFA3 = [];
let childrenDataFA4 = [];
let childrenDataFA5 = [];
let childrenDataFA6 = [];
let childrenDataFA7 = [];
let childrenDataFA11 = [];
let childrenDataFAOne = [];
var profitABNCTotal = 0;
var profitABNCTotal2 = 0;
var profitABNCTotal3 = 0;
var profitABNCTotal4 = 0;
var profitABNCTotal5 = 0;
var profitABNCTotal6 = 0;
var profitABNCTotal7 = 0;
var profitABNCTotal11 = 0;
var profitABNCTotalOne = 0;
var profitFATotal = 0;
var profitFATotal2 = 0;
var profitFATotal3 = 0;
var profitFATotal4 = 0;
var profitFATotal5 = 0;
var profitFATotal6 = 0;
var profitFATotal7 = 0;
var profitFATotal11 = 0;
var profitFATotalOne = 0;
var expectedRevenueABNC = 0;
var expectedRevenueABNC2 = 0;
var expectedRevenueABNC3 = 0;
var expectedRevenueABNC4 = 0;
var expectedRevenueABNC5 = 0;
var expectedRevenueABNC6 = 0;
var expectedRevenueABNC7 = 0;
var expectedRevenueABNC11 = 0;
var expectedRevenueABNCOne = 0;
var expectedProfitABNC = 0;
var expectedProfitABNC2 = 0;
var expectedProfitABNC3 = 0;
var expectedProfitABNC4 = 0;
var expectedProfitABNC5 = 0;
var expectedProfitABNC6 = 0;
var expectedProfitABNC7 = 0;
var expectedProfitABNC11 = 0;
var expectedProfitABNCOne = 0;
var expectedFutureRevABNC = 0;
var expectedFutureRevABNC2 = 0;
var expectedFutureRevABNC3 = 0;
var expectedFutureRevABNC4 = 0;
var expectedFutureRevABNC5 = 0;
var expectedFutureRevABNC6 = 0;
var expectedFutureRevABNC7 = 0;
var expectedFutureRevABNC11 = 0;
var expectedFutureRevABNCOne = 0;
var expectedFutureProfABNC = 0;
var expectedFutureProfABNC2 = 0;
var expectedFutureProfABNC3 = 0;
var expectedFutureProfABNC4 = 0;
var expectedFutureProfABNC5 = 0;
var expectedFutureProfABNC6 = 0;
var expectedFutureProfABNC7 = 0;
var expectedFutureProfABNC11 = 0;
var expectedFutureProfABNCOne = 0;
var expectedFutureBackABNC = 0;
var expectedFutureBackABNC2 = 0;
var expectedFutureBackABNC3 = 0;
var expectedFutureBackABNC4 = 0;
var expectedFutureBackABNC5 = 0;
var expectedFutureBackABNC6 = 0;
var expectedFutureBackABNC7 = 0;
var expectedFutureBackABNC11 = 0;
var expectedFutureBackABNCOne = 0;
var expectedFutureBackProfitABNC = 0;
var expectedFutureBackProfitABNC2 = 0;
var expectedFutureBackProfitABNC3 = 0;
var expectedFutureBackProfitABNC4 = 0;
var expectedFutureBackProfitABNC5 = 0;
var expectedFutureBackProfitABNC6 = 0;
var expectedFutureBackProfitABNC7 = 0;
var expectedFutureBackProfitABNC11 = 0;
var expectedFutureBackProfitOne = 0;
var expectedFutureBackProfitABNCOne = 0;
var mergedCompletedSections1 = []
var mergedCompletedSections2 = []
var mergedCompletedSections3 = []
var mergedCompletedSections4 = []
var mergedCompletedSections5 = []
var mergedCompletedSections6 = []
var mergedCompletedSections7 = []
var mergedCompletedSections11 = []
var mergedCompletedSectionsOne = []
var divisionName = '';



class RevenueProfitYearThree extends Component{


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
      userDivisionNum: '',
      currentDate: new Date(currentQuarter)
    }
 }

   /* Create a new instance of the 'AuthHelperMethods' component*/
   Auth = new AuthHelperMethods();

   _handleLogout = () => {
     this.Auth.logout()
     this.props.history.replace('/financial/login');
   }

   exportToCSV = (csvData, fileName) => {
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';
    const ws = XLSX.utils.json_to_sheet(csvData);
    //this.wrapAndCenterCell(ws);
    ws["!cols"] = [{ width: 9 },{ width: 16 },{ width: 50 },{ width: 9 },{ width: 16 },{ width: 16 },{ width: 16 } ,{ width: 9 } ,{ width: 12 },{ width: 9 },{ width: 9 },{ width: 12 },{ width: 15 },{ width: 14 },{ width: 18 },{ width: 14 },{ width: 18 }];
    const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], {type: fileType});
    FileSaver.saveAs(data, fileName + fileExtension);
}

 /*wrapAndCenterCell(cell) {
  const wrapAndCenterCellStyle = { alignment: { wrapText: true, vertical: 'center', horizontal: 'center' } };
  cell.s = wrapAndCenterCellStyle
  //this.setCellStyle(cell, wrapAndCenterCellStyle);
}*/

exportAllToCSV = () => {
  const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const fileExtension = '.xlsx';
  
  const fileName1 = "Division-1-" + currentDateString +','+ currentYearResp
  const ws1 = XLSX.utils.json_to_sheet(mergedCompletedSections1);
  ws1["!cols"] = [{ width: 9 },{ width: 16 },{ width: 50 },{ width: 9 },{ width: 16 },{ width: 16 },{ width: 16 } ,{ width: 9 } ,{ width: 12 },{ width: 9 },{ width: 9 },{ width: 12 },{ width: 15 },{ width: 14 },{ width: 18 },{ width: 14 },{ width: 18 }];
  const wb1 = { Sheets: { 'data': ws1 }, SheetNames: ['data'] };
  const excelBuffer1 = XLSX.write(wb1, { bookType: 'xlsx', type: 'array' });
  const data1 = new Blob([excelBuffer1], {type: fileType});
  FileSaver.saveAs(data1, fileName1 + fileExtension);

  const fileName2 = "Division-2-" + currentDateString +','+ currentYearResp
  const ws2 = XLSX.utils.json_to_sheet(mergedCompletedSections2);
  ws2["!cols"] = [{ width: 9 },{ width: 16 },{ width: 50 },{ width: 9 },{ width: 16 },{ width: 16 },{ width: 16 } ,{ width: 9 } ,{ width: 12 },{ width: 9 },{ width: 9 },{ width: 12 },{ width: 15 },{ width: 14 },{ width: 18 },{ width: 14 },{ width: 18 }];
  const wb2 = { Sheets: { 'data': ws2 }, SheetNames: ['data'] };
  const excelBuffer2 = XLSX.write(wb2, { bookType: 'xlsx', type: 'array' });
  const data2 = new Blob([excelBuffer2], {type: fileType});
  FileSaver.saveAs(data2, fileName2 + fileExtension);

  const fileName3 = "Division-3-" + currentDateString +','+ currentYearResp
  const ws3 = XLSX.utils.json_to_sheet(mergedCompletedSections3);
  ws3["!cols"] = [{ width: 9 },{ width: 16 },{ width: 50 },{ width: 9 },{ width: 16 },{ width: 16 },{ width: 16 } ,{ width: 9 } ,{ width: 12 },{ width: 9 },{ width: 9 },{ width: 12 },{ width: 15 },{ width: 14 },{ width: 18 },{ width: 14 },{ width: 18 }];
  const wb3 = { Sheets: { 'data': ws3 }, SheetNames: ['data'] };
  const excelBuffer3 = XLSX.write(wb3, { bookType: 'xlsx', type: 'array' });
  const data3 = new Blob([excelBuffer3], {type: fileType});
  FileSaver.saveAs(data3, fileName3 + fileExtension);

  const fileName4 = "Division-4-" + currentDateString +','+ currentYearResp
  const ws4 = XLSX.utils.json_to_sheet(mergedCompletedSections4);
  ws4["!cols"] = [{ width: 9 },{ width: 16 },{ width: 50 },{ width: 9 },{ width: 16 },{ width: 16 },{ width: 16 } ,{ width: 9 } ,{ width: 12 },{ width: 9 },{ width: 9 },{ width: 12 },{ width: 15 },{ width: 14 },{ width: 18 },{ width: 14 },{ width: 18 }];
  const wb4 = { Sheets: { 'data': ws4 }, SheetNames: ['data'] };
  const excelBuffer4 = XLSX.write(wb4, { bookType: 'xlsx', type: 'array' });
  const data4 = new Blob([excelBuffer4], {type: fileType});
  FileSaver.saveAs(data4, fileName4 + fileExtension);

  const fileName5 = "Division-5-" + currentDateString +','+ currentYearResp
  const ws5 = XLSX.utils.json_to_sheet(mergedCompletedSections5);
  ws5["!cols"] = [{ width: 9 },{ width: 16 },{ width: 50 },{ width: 9 },{ width: 16 },{ width: 16 },{ width: 16 } ,{ width: 9 } ,{ width: 12 },{ width: 9 },{ width: 9 },{ width: 12 },{ width: 15 },{ width: 14 },{ width: 18 },{ width: 14 },{ width: 18 }];
  const wb5 = { Sheets: { 'data': ws5 }, SheetNames: ['data'] };
  const excelBuffer5 = XLSX.write(wb5, { bookType: 'xlsx', type: 'array' });
  const data5 = new Blob([excelBuffer5], {type: fileType});
  FileSaver.saveAs(data5, fileName5 + fileExtension);

  const fileName6 = "Division-6-" + currentDateString +','+ currentYearResp
  const ws6 = XLSX.utils.json_to_sheet(mergedCompletedSections6);
  ws6["!cols"] = [{ width: 9 },{ width: 16 },{ width: 50 },{ width: 9 },{ width: 16 },{ width: 16 },{ width: 16 } ,{ width: 9 } ,{ width: 12 },{ width: 9 },{ width: 9 },{ width: 12 },{ width: 15 },{ width: 14 },{ width: 18 },{ width: 14 },{ width: 18 }];
  const wb6 = { Sheets: { 'data': ws6 }, SheetNames: ['data'] };
  const excelBuffer6 = XLSX.write(wb6, { bookType: 'xlsx', type: 'array' });
  const data6 = new Blob([excelBuffer6], {type: fileType});
  FileSaver.saveAs(data6, fileName6 + fileExtension);

  const fileName7 = "Division-7-" + currentDateString +','+ currentYearResp
  const ws7 = XLSX.utils.json_to_sheet(mergedCompletedSections7);
  ws7["!cols"] = [{ width: 9 },{ width: 16 },{ width: 50 },{ width: 9 },{ width: 16 },{ width: 16 },{ width: 16 } ,{ width: 9 } ,{ width: 12 },{ width: 9 },{ width: 9 },{ width: 12 },{ width: 15 },{ width: 14 },{ width: 18 },{ width: 14 },{ width: 18 }];
  const wb7 = { Sheets: { 'data': ws7 }, SheetNames: ['data'] };
  const excelBuffer7 = XLSX.write(wb7, { bookType: 'xlsx', type: 'array' });
  const data7 = new Blob([excelBuffer7], {type: fileType});
  FileSaver.saveAs(data7, fileName7 + fileExtension);

  const fileName11 = "Division-11-" + currentDateString +','+ currentYearResp
  const ws11 = XLSX.utils.json_to_sheet(mergedCompletedSections11);
  ws11["!cols"] = [{ width: 9 },{ width: 16 },{ width: 50 },{ width: 9 },{ width: 16 },{ width: 16 },{ width: 16 } ,{ width: 9 } ,{ width: 12 },{ width: 9 },{ width: 9 },{ width: 12 },{ width: 15 },{ width: 14 },{ width: 18 },{ width: 14 },{ width: 18 }];
  const wb11 = { Sheets: { 'data': ws11 }, SheetNames: ['data'] };
  const excelBuffer11 = XLSX.write(wb11, { bookType: 'xlsx', type: 'array' });
  const data11 = new Blob([excelBuffer11], {type: fileType});
  FileSaver.saveAs(data11, fileName11 + fileExtension);
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
    ),
    axios.get(
      "https://rest-site-locations-1594736464770.azurewebsites.net/api/financialDivisions",
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
    ),
    axios.get(
      "https://rest-site-locations-1594736464770.azurewebsites.net/api/financialUpdateYearThreeReportExecAdj",
      {headers: {
          "Authorization" : AuthStr,
          "Content-Type" : "application/json"
        }
      }
    )
  ]).then(axios.spread((response, response2, response3, response4, response5) => {

    var userInfo = response['data'];
    var currentQuarterResponse = response2['data'];
    var divisionsResponse = response3['data'];
    var threeYearValue = response4['data'];
    var managementAdj = response5['data'];
    //divisionArray = divisionsResponse;
    currentQuarterResponse.forEach(function (values){
      const { current_quarter, current_year} = values //destructing

      currentQuarterResp = current_quarter;
      currentYearResp = current_year;

    })


    threeYearValue.forEach(function (values){
      const { year, quarter, div_1_revenue_1, div_1_profit_1, div_1_revenue_2, div_1_profit_2, div_1_revenue_3, div_1_profit_3, div_2_revenue_1, div_2_profit_1, div_2_revenue_2, div_2_profit_2, div_2_revenue_3, div_2_profit_3
        , div_3_revenue_1, div_3_profit_1, div_3_revenue_2, div_3_profit_2, div_3_revenue_3, div_3_profit_3, div_4_revenue_1, div_4_profit_1, div_4_revenue_2, div_4_profit_2, div_4_revenue_3, div_4_profit_3
        , div_5_revenue_1, div_5_profit_1, div_5_revenue_2, div_5_profit_2, div_5_revenue_3, div_5_profit_3, div_6_revenue_1, div_6_profit_1, div_6_revenue_2, div_6_profit_2, div_6_revenue_3, div_6_profit_3
        , div_7_revenue_1, div_7_profit_1, div_7_revenue_2, div_7_profit_2, div_7_revenue_3, div_7_profit_3, div_11_revenue_1, div_11_profit_1, div_11_revenue_2, div_11_profit_2, div_11_revenue_3, div_11_profit_3} = values //destructing

      if(currentYearResp === year && currentQuarterResp === quarter){

        divOneArray.push({'div_1_revenue_1': div_1_revenue_1, 'div_1_profit_1': div_1_profit_1, 'div_1_revenue_2': div_1_revenue_2, 'div_1_profit_2': div_1_profit_2,  'div_1_revenue_3': div_1_revenue_3, 'div_1_profit_3': div_1_profit_3})
        divTwoArray.push({'div_2_revenue_1': div_2_revenue_1, 'div_2_profit_1': div_2_profit_1, 'div_2_revenue_2': div_2_revenue_2, 'div_2_profit_2': div_2_profit_2,  'div_2_revenue_3': div_2_revenue_3, 'div_2_profit_3': div_2_profit_3})
        divThreeArray.push({'div_3_revenue_1': div_3_revenue_1, 'div_3_profit_1': div_3_profit_1, 'div_3_revenue_2': div_3_revenue_2, 'div_3_profit_2': div_3_profit_2,  'div_3_revenue_3': div_3_revenue_3, 'div_3_profit_3': div_3_profit_3})
        divFourArray.push({'div_4_revenue_1': div_4_revenue_1, 'div_4_profit_1': div_4_profit_1, 'div_4_revenue_2': div_4_revenue_2, 'div_4_profit_2': div_4_profit_2,  'div_4_revenue_3': div_4_revenue_3, 'div_4_profit_3': div_4_profit_3})
        divFiveArray.push({'div_5_revenue_1': div_5_revenue_1, 'div_5_profit_1': div_5_profit_1, 'div_5_revenue_2': div_5_revenue_2, 'div_5_profit_2': div_5_profit_2,  'div_5_revenue_3': div_5_revenue_3, 'div_5_profit_3': div_5_profit_3})
        divSixArray.push({'div_6_revenue_1': div_6_revenue_1, 'div_6_profit_1': div_6_profit_1, 'div_6_revenue_2': div_6_revenue_2, 'div_6_profit_2': div_6_profit_2,  'div_6_revenue_3': div_6_revenue_3, 'div_6_profit_3': div_6_profit_3})
        divSevenArray.push({'div_7_revenue_1': div_7_revenue_1, 'div_7_profit_1': div_7_profit_1, 'div_7_revenue_2': div_7_revenue_2, 'div_7_profit_2': div_7_profit_2,  'div_7_revenue_3': div_7_revenue_3, 'div_7_profit_3': div_7_profit_3})
        divElevenArray.push({'div_11_revenue_1': div_11_revenue_1, 'div_11_profit_1': div_11_profit_1, 'div_11_revenue_2': div_11_revenue_2, 'div_11_profit_2': div_11_profit_2,  'div_11_revenue_3': div_11_revenue_3, 'div_11_profit_3': div_11_profit_3})
      }

    })

    managementAdj.forEach(function (valuesAdj){
      const { year, quarter, division, year_1_revenue, year_1_profit, year_2_revenue, year_2_profit,
            year_3_revenue, year_3_profit} = valuesAdj //destructing

            if(currentYearResp === year && currentQuarterResp === quarter){

                div1ArrayExecAdj.push({division: division, 'div_1_revenue_1': year_1_revenue, 'div_1_profit_1': year_1_profit, 'div_1_revenue_2': year_2_revenue, 'div_1_profit_2': year_2_profit,  'div_1_revenue_3': year_3_revenue, 'div_1_profit_3': year_3_profit})
            }
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
       userDivisionNumber = userdivision;
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
      this.setState({ ProjectReportData: dataValue, data: dataValue, userRole: decoded.roles, userDivisionNum: userDivisionNumber });

  }).catch(error => {
    console.log(error)
  })

}))


}


   renderTableData(value) {
    if(value === 'project_report'){
      
      return this.state.ProjectReportData.map((FY19Plan, index) => {
        const { _id, job_name, dept_job, quarter, year, division, status, contract_amount, gross_margin_percent, hit_ratio, earned_revenue_YTD, 
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
        var profit2 = 0;
        var profit3 = 0;
        var profit4 = 0;
        var profit5 = 0;
        var profit6 = 0;
        var profit7 = 0;
        var profit11 = 0;
        var profitOne = 0;
        const now = new Date(currentQuarter);
        const pastDate = new Date(end_date);
        const startDate = new Date(start_date);
        var checkStartValue = startDate.getMonth() - now.getMonth() + 
          (12 * (startDate.getFullYear() - now.getFullYear()))
        const checkMonth = now.getMonth() === pastDate.getMonth() && now.getFullYear() === pastDate.getFullYear();
        var totalForecastRevenue = '';
        var totalExpectedRevenue = '';
        var expectedContractAmount = '';
        var profitCurrentYear = '';
        var totalMonths =  (pastDate.getFullYear() - startDate.getFullYear()) * 12 + (pastDate.getMonth() - startDate.getMonth() + 1);
        var currentBacklogValue = '';
        var CurrentMonthOfProject =  (now.getFullYear() - startDate.getFullYear()) * 12 + (now.getMonth() - startDate.getMonth() + 1);
        var backlogValue = parseFloat(contract_amount) - parseFloat(earned_revenue);
        var futureRevenue = 0;
        var futureRevenueThree = 0;
        var burnOffSum = 0;
        var futureProfit = 0;
        var futureProfitThree = 0;
        var futureBacklog = 0;
        var converter = require('number-to-words');
        var newValue = converter.toWords(totalMonths);
        var earnedRevenueYTDValue = 0;

        if((status === 'Contract' && division === '1')){
          contractTotal += parseFloat(contract_amount); 
          profit = (parseFloat(contract_amount) * (gross_margin_percent / 100)); 
        }else if((status === 'ABNC' && division === '1')){
          contractTotalABNC += parseFloat(contract_amount); 
          profitABNCTotal += (parseFloat(contract_amount) * (gross_margin_percent / 100)); 
          expectedContractAmountABNC += (parseFloat(contract_amount) * (parseInt(hit_ratio)/100));
        }else if((status === 'FA' && division === '1')){
          contractTotalFA += parseFloat(contract_amount); 
          profitFATotal += (parseFloat(contract_amount) * (gross_margin_percent / 100)); 
          expectedContractAmountFA += (parseFloat(contract_amount) * (parseInt(hit_ratio)/100));
        }else if((status === 'Contract' && division === '2')){
          contractTotal2 += parseFloat(contract_amount); 
          profit2 = (parseFloat(contract_amount) * (gross_margin_percent / 100)); 
        }else if((status === 'ABNC' && division === '2')){
          contractTotalABNC2 += parseFloat(contract_amount); 
          profitABNCTotal2 += (parseFloat(contract_amount) * (gross_margin_percent / 100)); 
          expectedContractAmountABNC2 += (parseFloat(contract_amount) * (parseInt(hit_ratio)/100));
        }else if((status === 'FA' && division === '2')){
          contractTotalFA2 += parseFloat(contract_amount); 
          profitFATotal2 += (parseFloat(contract_amount) * (gross_margin_percent / 100)); 
          expectedContractAmountFA2 += (parseFloat(contract_amount) * (parseInt(hit_ratio)/100));
        }else if((status === 'Contract' && division === '3')){
          contractTotal3 += parseFloat(contract_amount); 
          profit3 = (parseFloat(contract_amount) * (gross_margin_percent / 100)); 
        }else if((status === 'ABNC' && division === '3')){
          contractTotalABNC3 += parseFloat(contract_amount); 
          profitABNCTotal3 += (parseFloat(contract_amount) * (gross_margin_percent / 100)); 
          expectedContractAmountABNC3 += (parseFloat(contract_amount) * (parseInt(hit_ratio)/100));
        }else if((status === 'FA' && division === '3')){
          contractTotalFA3 += parseFloat(contract_amount); 
          profitFATotal3 += (parseFloat(contract_amount) * (gross_margin_percent / 100)); 
          expectedContractAmountFA3 += (parseFloat(contract_amount) * (parseInt(hit_ratio)/100));
        }else if((status === 'Contract' && division === '4')){
          contractTotal4 += parseFloat(contract_amount); 
          profit4 = (parseFloat(contract_amount) * (gross_margin_percent / 100)); 
        }else if((status === 'ABNC' && division === '4')){
          contractTotalABNC4 += parseFloat(contract_amount); 
          profitABNCTotal4 += (parseFloat(contract_amount) * (gross_margin_percent / 100)); 
          expectedContractAmountABNC4 += (parseFloat(contract_amount) * (parseInt(hit_ratio)/100));
        }else if((status === 'FA' && division === '4')){
          contractTotalFA4 += parseFloat(contract_amount); 
          profitFATotal4 += (parseFloat(contract_amount) * (gross_margin_percent / 100)); 
          expectedContractAmountFA4 += (parseFloat(contract_amount) * (parseInt(hit_ratio)/100));
        }else if((status === 'Contract' && division === '5')){
          contractTotal5 += parseFloat(contract_amount); 
          profit5 = (parseFloat(contract_amount) * (gross_margin_percent / 100)); 
        }else if((status === 'ABNC' && division === '5')){
          contractTotalABNC5 += parseFloat(contract_amount); 
          profitABNCTotal5 += (parseFloat(contract_amount) * (gross_margin_percent / 100)); 
          expectedContractAmountABNC5 += (parseFloat(contract_amount) * (parseInt(hit_ratio)/100));
        }else if((status === 'FA' && division === '5')){
          contractTotalFA5 += parseFloat(contract_amount); 
          profitFATotal5 += (parseFloat(contract_amount) * (gross_margin_percent / 100)); 
          expectedContractAmountFA5 += (parseFloat(contract_amount) * (parseInt(hit_ratio)/100));
        }else if((status === 'Contract' && division === '6')){
          contractTotal6 += parseFloat(contract_amount); 
          profit6 = (parseFloat(contract_amount) * (gross_margin_percent / 100)); 
        }else if((status === 'ABNC' && division === '6')){
          contractTotalABNC6 += parseFloat(contract_amount); 
          profitABNCTotal6 += (parseFloat(contract_amount) * (gross_margin_percent / 100)); 
          expectedContractAmountABNC6 += (parseFloat(contract_amount) * (parseInt(hit_ratio)/100));
        }else if((status === 'FA' && division === '6')){
          contractTotalFA6 += parseFloat(contract_amount); 
          profitFATotal6 += (parseFloat(contract_amount) * (gross_margin_percent / 100)); 
          expectedContractAmountFA6 += (parseFloat(contract_amount) * (parseInt(hit_ratio)/100));
        }else if((status === 'Contract' && division === '7')){
          contractTotal7 += parseFloat(contract_amount); 
          profit7 = (parseFloat(contract_amount) * (gross_margin_percent / 100)); 
        }else if((status === 'ABNC' && division === '7')){
          contractTotalABNC7 += parseFloat(contract_amount); 
          profitABNCTotal7 += (parseFloat(contract_amount) * (gross_margin_percent / 100)); 
          expectedContractAmountABNC7 += (parseFloat(contract_amount) * (parseInt(hit_ratio)/100));
        }else if((status === 'FA' && division === '7')){
          contractTotalFA7 += parseFloat(contract_amount); 
          profitFATotal7 += (parseFloat(contract_amount) * (gross_margin_percent / 100)); 
          expectedContractAmountFA7 += (parseFloat(contract_amount) * (parseInt(hit_ratio)/100));
        }else if((status === 'Contract' && division === '11')){
          contractTotal11 += parseFloat(contract_amount); 
          profit11 = (parseFloat(contract_amount) * (gross_margin_percent / 100)); 
        }else if((status === 'ABNC' && division === '11')){
          contractTotalABNC11 += parseFloat(contract_amount); 
          profitABNCTotal11 += (parseFloat(contract_amount) * (gross_margin_percent / 100)); 
          expectedContractAmountABNC11 += (parseFloat(contract_amount) * (parseInt(hit_ratio)/100));
        }else if((status === 'FA' && division === '11')){
          contractTotalFA11 += parseFloat(contract_amount); 
          profitFATotal11 += (parseFloat(contract_amount) * (gross_margin_percent / 100)); 
          expectedContractAmountFA11 += (parseFloat(contract_amount) * (parseInt(hit_ratio)/100));
        }
        
        if(status === 'Contract'){
          contractTotalOne += parseFloat(contract_amount); 
          profitOne = (parseFloat(contract_amount) * (gross_margin_percent / 100)); 
        }else if(status === 'ABNC'){
          contractTotalABNCOne += parseFloat(contract_amount); 
          profitABNCTotalOne += (parseFloat(contract_amount) * (gross_margin_percent / 100)); 
          expectedContractAmountABNCOne += (parseFloat(contract_amount) * (parseInt(hit_ratio)/100));
        }else if(status === 'FA'){
          contractTotalFAOne += parseFloat(contract_amount); 
          profitFATotalOne += (parseFloat(contract_amount) * (gross_margin_percent / 100)); 
          expectedContractAmountFAOne += (parseFloat(contract_amount) * (parseInt(hit_ratio)/100));
        }  

        if(status === 'Contract' && checkMonth !== 'true'){
        //profit = (parseFloat(contract_amount) * (gross_margin_percent / 100));
        //profitTotal += profit;
        if((pastDate <= now  && checkMonth === true) || pastDate <= now){
          totalForecastRevenue = 0;
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
          profitCurrentYear = (parseFloat(earnedRevenueYTDValue) * (gross_margin_percent/100)) + (parseFloat(totalForecastRevenue) * (gross_margin_percent/100));
          expectedContractAmount = Math.round(((parseFloat(contract_amount) - parseFloat(earned_revenue))) * hit_ratio/100);
          //totalExpectedRevenue =  earned_revenue_YTD;
          currentBacklogValue = 0;
          futureBacklog = 0;
        }else {
          totalForecastRevenue = backlog;
          expectedContractAmount = Math.round(((parseFloat(contract_amount) - parseFloat(earned_revenue))) * hit_ratio/100);
          for(var j=0; j < global.burnOffChart.length; j++){
            if(j >= CurrentMonthOfProject && j < totalMonths){
                var obj = global.burnOffChart[j][newValue]
                burnOffSum += obj;
            }

          }

          //console.log("Job Name: " + job_name + " BurnSum: " + burnOffSum)
          //calculate BurnOff rate
          var checkloop = 1;
          var forecastData = 0;
          var futureForecastData = 0;
          var forecastNumber = 0;
          var medianForecastNumber = 0;
          var maxForecastNumber = 0;
          var futureRevenueValue = 0;
          if(currentQuarterResp === "4"){
            forecastNumber = 12;
            medianForecastNumber = forecastNumber + 12;
            maxForecastNumber = medianForecastNumber + 12;
            earnedRevenueYTDValue = 0;
          }else if(currentQuarterResp === "1"){
            forecastNumber = 9;
            medianForecastNumber = forecastNumber + 12;
            maxForecastNumber = medianForecastNumber + 12;
            earnedRevenueYTDValue = earned_revenue_YTD;
          }else if(currentQuarterResp === "2"){
            forecastNumber = 6;
            medianForecastNumber = forecastNumber + 12;
            maxForecastNumber = medianForecastNumber + 12;
            earnedRevenueYTDValue = earned_revenue_YTD;
          }else if(currentQuarterResp === "3"){
            forecastNumber = 3;
            medianForecastNumber = forecastNumber + 12;
            maxForecastNumber = medianForecastNumber + 12;
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
              //console.log("Job Name: " + job_name + " Value: " + valueFound + " Monthly: " + monthlyValue) 
              if(checkloop <= forecastNumber){
                forecastData += monthlyValue;
                checkloop += 1;
              }
              else if(checkloop > forecastNumber && checkloop <= medianForecastNumber){
                futureForecastData += monthlyValue;
                checkloop += 1;
              }else if(checkloop > medianForecastNumber && checkloop <= maxForecastNumber){
                futureRevenueValue += monthlyValue;
                checkloop += 1;
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
        }
      }else{

        //calculate BurnOff rate
        var checkloopProjected = 1;
        //var checkCompleted = 0;
        var forecastDataProjected = 0;
        var futureForecastDataProjected = 0;
        var forecastNumberProjected = 0;
        var medianForecastNumberFuture = 0;
        var maxForecastNumberProjected = 0;
        var futureRevenueValueProjected = 0;
        if(currentQuarterResp === "4"){
          forecastNumberProjected = 12;
          medianForecastNumberFuture = forecastNumberProjected + 12;
          maxForecastNumberProjected = medianForecastNumberFuture + 12;
        }else if(currentQuarterResp === "1"){
          forecastNumberProjected = 9;
          medianForecastNumberFuture = forecastNumberProjected + 12;
          maxForecastNumberProjected = medianForecastNumberFuture + 12;
        }else if(currentQuarterResp === "2"){
          forecastNumberProjected = 6;
          medianForecastNumberFuture = forecastNumberProjected + 12;
          maxForecastNumberProjected = medianForecastNumberFuture + 12;
        }else if(currentQuarterResp === "3"){
          forecastNumberProjected = 3;
          medianForecastNumberFuture = forecastNumberProjected + 12;
          maxForecastNumberProjected = medianForecastNumberFuture + 12;
        }

        if(startDate > now){
          for(var il=1; il < checkStartValue; il++){
            checkloopProjected += 1;
          }
          //checkCompleted += 1;
        }
        

        //if(checkCompleted === 1){
          //calculate burnOff sum
          for(var jk=0; jk < global.burnOffChart.length; jk++){
            if(jk >= CurrentMonthOfProject && jk < totalMonths){
                var objProjected = global.burnOffChart[jk][newValue]
                burnOffSum += objProjected;
            }

          }
          //console.log("Job Name: " + job_name + " burnOffSum: " + burnOffSum);

        for (var kj=0; kj < global.burnOffChart.length; kj++) {
          if(kj >= CurrentMonthOfProject){
            var valueFoundProjected = global.burnOffChart[kj][newValue];
            var backlogFuture = (parseFloat(contract_amount) * (parseInt(hit_ratio)/100));
            var monthlyValueProjected =  (backlogFuture * valueFoundProjected) / burnOffSum;
            if(checkloopProjected <= forecastNumberProjected){
              forecastDataProjected += parseFloat(monthlyValueProjected);
              checkloopProjected += 1;
            }
            else if(checkloopProjected > forecastNumberProjected && checkloopProjected <= medianForecastNumberFuture){
              futureForecastDataProjected += parseFloat(monthlyValueProjected);
              //futureRevenue += monthlyValue;
              checkloopProjected += 1;
            }else if(checkloopProjected > medianForecastNumberFuture && checkloopProjected <= maxForecastNumberProjected){
              futureRevenueValueProjected += parseFloat(monthlyValueProjected);
              checkloopProjected += 1;
            }

          }
        //}

      }
        //console.log("Job Name: " + job_name + " Total: " + forecastDataProjected) 

        expectedContractAmount = (parseFloat(contract_amount) * (parseInt(hit_ratio)/100));
        totalForecastRevenue = (parseFloat(contract_amount) * (parseInt(hit_ratio)/100)) - earned_revenue;
        totalExpectedRevenue = forecastDataProjected ? forecastDataProjected : 0;
        //totalExpectedRevenue = (parseFloat(totalExpectedRevenue) * (gross_margin_percent/100));
        currentBacklogValue = (futureForecastDataProjected + futureRevenueValueProjected) ? (futureForecastDataProjected + futureRevenueValueProjected) : 0;
        futureRevenue = futureForecastDataProjected ? futureForecastDataProjected : 0;
        futureRevenueThree = futureRevenueValueProjected ? futureRevenueValueProjected : 0;
        futureProfitThree = parseFloat(futureRevenueThree) * (gross_margin_percent/100);
        futureProfit = parseFloat(futureRevenue) * (gross_margin_percent/100);
        profit = (parseFloat(contract_amount) * (gross_margin_percent/100));
        profit2 = (parseFloat(contract_amount) * (gross_margin_percent/100));
        profit3 = (parseFloat(contract_amount) * (gross_margin_percent/100));
        profit4 = (parseFloat(contract_amount) * (gross_margin_percent/100));
        profit5 = (parseFloat(contract_amount) * (gross_margin_percent/100));
        profit6 = (parseFloat(contract_amount) * (gross_margin_percent/100));
        profit7 = (parseFloat(contract_amount) * (gross_margin_percent/100));
        profit11 = (parseFloat(contract_amount) * (gross_margin_percent/100));
        profitOne = (parseFloat(contract_amount) * (gross_margin_percent/100));
        profitCurrentYear = (parseFloat(totalExpectedRevenue) * (gross_margin_percent/100));
        futureBacklog = futureRevenueValueProjected ? futureRevenueValueProjected : 0;

      }

      if(status === 'Contract' && division === '1'){
        profitTotal += profit;
        expectedConAmount += expectedContractAmount;
        expectedRevenue += parseFloat(totalExpectedRevenue);
        expectedProfit += profitCurrentYear;
        //expectedBacklog += parseFloat(currentBacklogValue);    
        expectedFutureRev += futureRevenue;
        expectedFutureProf += futureProfit;
        expectedFutureBack += futureRevenueThree;
        expectedFutureBackProfit += futureProfitThree;
      }else if(status === 'ABNC' && division === '1'){
        expectedRevenueABNC += parseFloat(totalExpectedRevenue);
        expectedProfitABNC += profitCurrentYear;
        expectedFutureRevABNC += futureRevenue;
        expectedFutureProfABNC += futureProfit;
        expectedFutureBackABNC += futureRevenueThree;
        expectedFutureBackProfitABNC += futureProfitThree;
      }else if(status === 'FA' && division === '1'){
        expectedRevenueFA += parseFloat(totalExpectedRevenue);
        expectedProfitFA += profitCurrentYear;
        expectedFutureRevFA += futureRevenue;
        expectedFutureProfFA += futureProfit;
        expectedFutureBackFA += futureRevenueThree;
        expectedFutureBackProfitFA += futureProfitThree;
      }else if(status === 'Contract' && division === '2'){
        profitTotal2 += profit2;
        expectedConAmount2 += expectedContractAmount;
        expectedRevenue2 += parseFloat(totalExpectedRevenue);
        expectedProfit2 += profitCurrentYear;
        expectedFutureRev2 += futureRevenue;
        expectedFutureProf2 += futureProfit;
        expectedFutureBack2 += futureRevenueThree;
        expectedFutureBackProfit2 += futureProfitThree;
      }else if(status === 'ABNC' && division === '2'){
        expectedRevenueABNC2 += parseFloat(totalExpectedRevenue);
        expectedProfitABNC2 += profitCurrentYear;
        expectedFutureRevABNC2 += futureRevenue;
        expectedFutureProfABNC2 += futureProfit;
        expectedFutureBackABNC2 += futureRevenueThree;
        expectedFutureBackProfitABNC2 += futureProfitThree;
      }else if(status === 'FA' && division === '2'){
        expectedRevenueFA2 += parseFloat(totalExpectedRevenue);
        expectedProfitFA2 += profitCurrentYear;
        expectedFutureRevFA2 += futureRevenue;
        expectedFutureProfFA2 += futureProfit;
        expectedFutureBackFA2 += futureRevenueThree;
        expectedFutureBackProfitFA2 += futureProfitThree;
      }else if(status === 'Contract' && division === '3'){
        profitTotal3 += profit3;
        expectedConAmount3 += expectedContractAmount;
        expectedRevenue3 += parseFloat(totalExpectedRevenue);
        expectedProfit3 += profitCurrentYear;
        expectedFutureRev3 += futureRevenue;
        expectedFutureProf3 += futureProfit;
        expectedFutureBack3 += futureRevenueThree;
        expectedFutureBackProfitABNC3 += futureProfitThree;
      }else if(status === 'ABNC' && division === '3'){
        expectedRevenueABNC3 += parseFloat(totalExpectedRevenue);
        expectedProfitABNC3 += profitCurrentYear;
        expectedFutureRevABNC3 += futureRevenue;
        expectedFutureProfABNC3 += futureProfit;
        expectedFutureBackABNC3 += futureRevenueThree;
        expectedFutureBackProfitABNC3 += futureProfitThree;
      }else if(status === 'FA' && division === '3'){
        expectedRevenueFA3 += parseFloat(totalExpectedRevenue);
        expectedProfitFA3 += profitCurrentYear;
        expectedFutureRevFA3 += futureRevenue;
        expectedFutureProfFA3 += futureProfit;
        expectedFutureBackFA3 += futureRevenueThree;
        expectedFutureBackProfitFA3 += futureProfitThree;
      }else if(status === 'Contract' && division === '4'){
        profitTotal4 += profit4;
        expectedConAmount4 += expectedContractAmount;
        expectedRevenue4 += parseFloat(totalExpectedRevenue);
        expectedProfit4 += profitCurrentYear;
        expectedFutureRev4 += futureRevenue;
        expectedFutureProf4 += futureProfit;
        expectedFutureBack4 += futureRevenueThree;
        expectedFutureBackProfitABNC4 += futureProfitThree;
      }else if(status === 'ABNC' && division === '4'){
        expectedRevenueABNC4 += parseFloat(totalExpectedRevenue);
        expectedProfitABNC4 += profitCurrentYear;
        expectedFutureRevABNC4 += futureRevenue;
        expectedFutureProfABNC4 += futureProfit;
        expectedFutureBackABNC4 += futureRevenueThree;
        expectedFutureBackProfitABNC4 += futureProfitThree;
      }else if(status === 'FA' && division === '4'){
        expectedRevenueFA4 += parseFloat(totalExpectedRevenue);
        expectedProfitFA4 += profitCurrentYear;
        expectedFutureRevFA4 += futureRevenue;
        expectedFutureProfFA4 += futureProfit;
        expectedFutureBackFA4 += futureRevenueThree;
        expectedFutureBackProfitFA4 += futureProfitThree;
      }else if(status === 'Contract' && division === '5'){
        profitTotal5 += profit5;
        expectedConAmount5 += expectedContractAmount;
        expectedRevenue5 += parseFloat(totalExpectedRevenue);
        expectedProfit5 += profitCurrentYear;
        expectedFutureRev5 += futureRevenue;
        expectedFutureProf5 += futureProfit;
        expectedFutureBack5 += futureRevenueThree;
        expectedFutureBackProfitABNC5 += futureProfitThree;
      }else if(status === 'ABNC' && division === '5'){
        expectedRevenueABNC5 += parseFloat(totalExpectedRevenue);
        expectedProfitABNC5 += profitCurrentYear;
        expectedFutureRevABNC5 += futureRevenue;
        expectedFutureProfABNC5 += futureProfit;
        expectedFutureBackABNC5 += futureRevenueThree;
        expectedFutureBackProfitABNC5 += futureProfitThree;
      }else if(status === 'FA' && division === '5'){
        expectedRevenueFA5 += parseFloat(totalExpectedRevenue);
        expectedProfitFA5 += profitCurrentYear;
        expectedFutureRevFA5 += futureRevenue;
        expectedFutureProfFA5 += futureProfit;
        expectedFutureBackFA5 += futureRevenueThree;
        expectedFutureBackProfitFA5 += futureProfitThree;
      }else if(status === 'Contract' && division === '6'){
        profitTotal6 += profit6;
        expectedConAmount6 += expectedContractAmount;
        expectedRevenue6 += parseFloat(totalExpectedRevenue);
        expectedProfit6 += profitCurrentYear;
        expectedFutureRev6 += futureRevenue;
        expectedFutureProf6 += futureProfit;
        expectedFutureBack6 += futureRevenueThree;
        expectedFutureBackProfitABNC6 += futureProfitThree;
      }else if(status === 'ABNC' && division === '6'){
        expectedRevenueABNC6 += parseFloat(totalExpectedRevenue);
        expectedProfitABNC6 += profitCurrentYear;
        expectedFutureRevABNC6 += futureRevenue;
        expectedFutureProfABNC6 += futureProfit;
        expectedFutureBackABNC6 += futureRevenueThree;
        expectedFutureBackProfitABNC6 += futureProfitThree;
      }else if(status === 'FA' && division === '6'){
        expectedRevenueFA6 += parseFloat(totalExpectedRevenue);
        expectedProfitFA6 += profitCurrentYear;
        expectedFutureRevFA6 += futureRevenue;
        expectedFutureProfFA6 += futureProfit;
        expectedFutureBackFA6 += futureRevenueThree;
        expectedFutureBackProfitFA6 += futureProfitThree;
      }else if(status === 'Contract' && division === '7'){
        profitTotal7 += profit7;
        expectedConAmount7 += expectedContractAmount;
        expectedRevenue7 += parseFloat(totalExpectedRevenue);
        expectedProfit7 += profitCurrentYear;
        expectedFutureRev7 += futureRevenue;
        expectedFutureProf7 += futureProfit;
        expectedFutureBack7 += futureRevenueThree;
        expectedFutureBackProfitABNC7 += futureProfitThree;
      }else if(status === 'ABNC' && division === '7'){
        expectedRevenueABNC7 += parseFloat(totalExpectedRevenue);
        expectedProfitABNC7 += profitCurrentYear;
        expectedFutureRevABNC7 += futureRevenue;
        expectedFutureProfABNC7 += futureProfit;
        expectedFutureBackABNC7 += futureRevenueThree;
        expectedFutureBackProfitABNC7 += futureProfitThree;
      }else if(status === 'FA' && division === '7'){
        expectedRevenueFA7 += parseFloat(totalExpectedRevenue);
        expectedProfitFA7 += profitCurrentYear;
        expectedFutureRevFA7 += futureRevenue;
        expectedFutureProfFA7 += futureProfit;
        expectedFutureBackFA7 += futureRevenueThree;
        expectedFutureBackProfitFA7 += futureProfitThree;
      }else if(status === 'Contract' && division === '11'){
        profitTotal11 += profit11;
        expectedConAmount11 += expectedContractAmount;
        expectedRevenue11 += parseFloat(totalExpectedRevenue);
        expectedProfit11 += profitCurrentYear;
        expectedFutureRev11 += futureRevenue;
        expectedFutureProf11 += futureProfit;
        expectedFutureBack11 += futureRevenueThree;
        expectedFutureBackProfitABNC11 += futureProfitThree;
      }else if(status === 'ABNC' && division === '11'){
        expectedRevenueABNC11 += parseFloat(totalExpectedRevenue);
        expectedProfitABNC11 += profitCurrentYear;
        expectedFutureRevABNC11 += futureRevenue;
        expectedFutureProfABNC11 += futureProfit;
        expectedFutureBackABNC11 += futureRevenueThree;
        expectedFutureBackProfitABNC11 += futureProfitThree;
      }else if(status === 'FA' && division === '11'){
        expectedRevenueFA11 += parseFloat(totalExpectedRevenue);
        expectedProfitFA11 += profitCurrentYear;
        expectedFutureRevFA11 += futureRevenue;
        expectedFutureProfFA11 += futureProfit;
        expectedFutureBackFA11 += futureRevenueThree;
        expectedFutureBackProfitFA11 += futureProfitThree;
      }
      
      if(status === 'Contract'){
        profitTotalOne += profitOne;
        expectedConAmountOne += expectedContractAmount;
        expectedRevenueOne += parseFloat(totalExpectedRevenue);
        expectedProfitOne += profitCurrentYear;
        expectedFutureRevOne += futureRevenue;
        expectedFutureProfOne += futureProfit;
        expectedFutureBackOne += futureRevenueThree;
        expectedFutureBackProfitOne += futureProfitThree;
      }else if(status === 'ABNC'){
        expectedRevenueABNCOne += parseFloat(totalExpectedRevenue);
        expectedProfitABNCOne += profitCurrentYear;
        expectedFutureRevABNCOne += futureRevenue;
        expectedFutureProfABNCOne += futureProfit;
        expectedFutureBackABNCOne += futureRevenueThree;
        expectedFutureBackProfitABNCOne += futureProfitThree;
      }else if(status === 'FA'){
        expectedRevenueFAOne += parseFloat(totalExpectedRevenue);
        expectedProfitFAOne += profitCurrentYear;
        expectedFutureRevFAOne += futureRevenue;
        expectedFutureProfFAOne += futureProfit;
        expectedFutureBackFAOne += futureRevenueThree;
        expectedFutureBackProfitFAOne += futureProfitThree;
      }


      if(status === 'Contract' && division === '1'){
        childrenDataContract1.push(<tr key={_id} style={{ fontSize: '17px'}}>
        <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{divisionName}</td>
        <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{dept_job}</td>
        <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{job_name}</td>
        <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{status}</td>
        <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(contract_amount)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
        <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(profit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
        <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{gross_margin_percent + '%'}</td>
        <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{hit_ratio + '%'}</td>
        <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
        <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{start_date}</td>
        <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{totalMonths}</td>
        <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(totalExpectedRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
        <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(profitCurrentYear)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
        <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
        <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
        <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureRevenueThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
        <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureProfitThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
     </tr>)
  
        divisionContracts.push({Division: `${divisionName}`, 'Department Code': `${dept_job}`,
      'Job Name': `${job_name}`, Status: `${status}`, 'Contract Amount': `${'$' + Math.round(contract_amount).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Gross Margin': `${'$' + Math.round(profit).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${gross_margin_percent + '%'}`, 'Hit Rato': `${hit_ratio + '%'}`,
      Backlog: `${'$' + (expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': `${start_date}`, 'Months': `${totalMonths}`,
      Revenue: `${'$' + Math.round(totalExpectedRevenue).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + Math.round(profitCurrentYear).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 2': `${'$' + Math.round(futureRevenue).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + Math.round(futureProfit).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 3': `${'$' + Math.round(futureRevenueThree).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + Math.round(futureProfitThree).toLocaleString(undefined, {maximumFractionDigits:2})}`
        })

      }else if(status === 'ABNC' && division === '1'){
          childrenDataABNC1.push(<tr key={_id} style={{ fontSize: '17px'}}>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{divisionName}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{dept_job}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{job_name}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{status}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(contract_amount)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(profit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{gross_margin_percent + '%'}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{hit_ratio + '%'}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{start_date}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{totalMonths}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(totalExpectedRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(profitCurrentYear)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureRevenueThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureProfitThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
       </tr>)

        divisionContractsABNC.push({Division: `${divisionName}`, 'Department Code': `${dept_job}`,
            'Job Name': `${job_name}`, Status: `${status}`, 'Contract Amount': `${'$' + Math.round(contract_amount).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Gross Margin': `${'$' + Math.round(profit).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${gross_margin_percent + '%'}`, 'Hit Rato': `${hit_ratio + '%'}`,
            Backlog: `${'$' + (expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': `${start_date}`, 'Months': `${totalMonths}`,
            Revenue: `${'$' + Math.round(totalExpectedRevenue).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + Math.round(profitCurrentYear).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Revenue Year 2': `${'$' + Math.round(futureRevenueThree).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + Math.round(futureProfit).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Revenue Year 3': `${'$' + Math.round(futureRevenue).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + Math.round(futureProfitThree).toLocaleString(undefined, {maximumFractionDigits:2})}`
          })
        }else if(status === 'FA' && division === '1'){
          childrenDataFA1.push(<tr key={_id} style={{ fontSize: '17px'}}>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{divisionName}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{dept_job}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{job_name}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{status}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(contract_amount)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(profit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{gross_margin_percent + '%'}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{hit_ratio + '%'}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{start_date}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{totalMonths}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(totalExpectedRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(profitCurrentYear)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureRevenueThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureProfitThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
       </tr>)

        divisionContractsFA.push({Division: `${divisionName}`, 'Department Code': `${dept_job}`,
            'Job Name': `${job_name}`, Status: `${status}`, 'Contract Amount': `${'$' + Math.round(contract_amount).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Gross Margin': `${'$' + Math.round(profit).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${gross_margin_percent + '%'}`, 'Hit Rato': `${hit_ratio + '%'}`,
            Backlog: `${'$' + (expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': `${start_date}`, 'Months': `${totalMonths}`,
            Revenue: `${'$' + Math.round(totalExpectedRevenue).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + Math.round(profitCurrentYear).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Revenue Year 2': `${'$' + Math.round(futureRevenueThree).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + Math.round(futureProfit).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Revenue Year 3': `${'$' + Math.round(futureRevenue).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + Math.round(futureProfitThree).toLocaleString(undefined, {maximumFractionDigits:2})}`
          })
        }else if(status === 'Contract' && division === '2'){
          childrenDataContract2.push(<tr key={_id} style={{ fontSize: '17px'}}>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{divisionName}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{dept_job}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{job_name}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{status}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(contract_amount)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(profit2)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{gross_margin_percent + '%'}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{hit_ratio + '%'}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{start_date}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{totalMonths}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(totalExpectedRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(profitCurrentYear)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureRevenueThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureProfitThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
       </tr>)

        divisionContracts2.push({Division: `${divisionName}`, 'Department Code': `${dept_job}`,
            'Job Name': `${job_name}`, Status: `${status}`, 'Contract Amount': `${'$' + Math.round(contract_amount).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Gross Margin': `${'$' + Math.round(profit2).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${gross_margin_percent + '%'}`, 'Hit Rato': `${hit_ratio + '%'}`,
            Backlog: `${'$' + (expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': `${start_date}`, 'Months': `${totalMonths}`,
            Revenue: `${'$' + Math.round(totalExpectedRevenue).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + Math.round(profitCurrentYear).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Revenue Year 2': `${'$' + Math.round(futureRevenueThree).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + Math.round(futureProfit).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Revenue Year 3': `${'$' + Math.round(futureRevenue).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + Math.round(futureProfitThree).toLocaleString(undefined, {maximumFractionDigits:2})}`
          })
        }else if(status === 'ABNC' && division === '2'){
          childrenDataABNC2.push(<tr key={_id} style={{ fontSize: '17px'}}>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{divisionName}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{dept_job}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{job_name}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{status}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(contract_amount)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(profit2)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{gross_margin_percent + '%'}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{hit_ratio + '%'}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{start_date}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{totalMonths}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(totalExpectedRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(profitCurrentYear)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureRevenueThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureProfitThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
       </tr>)

        divisionContractsABNC2.push({Division: `${divisionName}`, 'Department Code': `${dept_job}`,
            'Job Name': `${job_name}`, Status: `${status}`, 'Contract Amount': `${'$' + Math.round(contract_amount).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Gross Margin': `${'$' + Math.round(profit2).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${gross_margin_percent + '%'}`, 'Hit Rato': `${hit_ratio + '%'}`,
            Backlog: `${'$' + (expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': `${start_date}`, 'Months': `${totalMonths}`,
            Revenue: `${'$' + Math.round(totalExpectedRevenue).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + Math.round(profitCurrentYear).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Revenue Year 2': `${'$' + Math.round(futureRevenueThree).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + Math.round(futureProfit).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Revenue Year 3': `${'$' + Math.round(futureRevenue).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + Math.round(futureProfitThree).toLocaleString(undefined, {maximumFractionDigits:2})}`
          })
        }else if(status === 'FA' && division === '2'){
          childrenDataFA2.push(<tr key={_id} style={{ fontSize: '17px'}}>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{divisionName}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{dept_job}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{job_name}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{status}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(contract_amount)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(profit2)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{gross_margin_percent + '%'}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{hit_ratio + '%'}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{start_date}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{totalMonths}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(totalExpectedRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(profitCurrentYear)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureRevenueThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureProfitThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
       </tr>)

        divisionContractsFA2.push({Division: `${divisionName}`, 'Department Code': `${dept_job}`,
            'Job Name': `${job_name}`, Status: `${status}`, 'Contract Amount': `${'$' + Math.round(contract_amount).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Gross Margin': `${'$' + Math.round(profit2).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${gross_margin_percent + '%'}`, 'Hit Rato': `${hit_ratio + '%'}`,
            Backlog: `${'$' + (expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': `${start_date}`, 'Months': `${totalMonths}`,
            Revenue: `${'$' + Math.round(totalExpectedRevenue).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + Math.round(profitCurrentYear).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Revenue Year 2': `${'$' + Math.round(futureRevenueThree).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + Math.round(futureProfit).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Revenue Year 3': `${'$' + Math.round(futureRevenue).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + Math.round(futureProfitThree).toLocaleString(undefined, {maximumFractionDigits:2})}`
          })
        }else if(status === 'Contract' && division === '3'){
          childrenDataContract3.push(<tr key={_id} style={{ fontSize: '17px'}}>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{divisionName}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{dept_job}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{job_name}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{status}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(contract_amount)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(profit3)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{gross_margin_percent + '%'}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{hit_ratio + '%'}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{start_date}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{totalMonths}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(totalExpectedRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(profitCurrentYear)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureRevenueThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureProfitThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
       </tr>)

        divisionContracts3.push({Division: `${divisionName}`, 'Department Code': `${dept_job}`,
        'Job Name': `${job_name}`, Status: `${status}`, 'Contract Amount': `${'$' + Math.round(contract_amount).toLocaleString(undefined, {maximumFractionDigits:2})}`,
        'Gross Margin': `${'$' + Math.round(profit3).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${gross_margin_percent + '%'}`, 'Hit Rato': `${hit_ratio + '%'}`,
        Backlog: `${'$' + (expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': `${start_date}`, 'Months': `${totalMonths}`,
        Revenue: `${'$' + Math.round(totalExpectedRevenue).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + Math.round(profitCurrentYear).toLocaleString(undefined, {maximumFractionDigits:2})}`,
        'Revenue Year 2': `${'$' + Math.round(futureRevenueThree).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + Math.round(futureProfit).toLocaleString(undefined, {maximumFractionDigits:2})}`,
        'Revenue Year 3': `${'$' + Math.round(futureRevenue).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + Math.round(futureProfitThree).toLocaleString(undefined, {maximumFractionDigits:2})}`
  })
        }else if(status === 'ABNC' && division === '3'){
          childrenDataABNC3.push(<tr key={_id} style={{ fontSize: '17px'}}>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{divisionName}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{dept_job}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{job_name}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{status}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(contract_amount)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(profit3)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{gross_margin_percent + '%'}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{hit_ratio + '%'}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{start_date}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{totalMonths}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(totalExpectedRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(profitCurrentYear)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureRevenueThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureProfitThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
       </tr>)

        divisionContractsABNC3.push({Division: `${divisionName}`, 'Department Code': `${dept_job}`,
        'Job Name': `${job_name}`, Status: `${status}`, 'Contract Amount': `${'$' + Math.round(contract_amount).toLocaleString(undefined, {maximumFractionDigits:2})}`,
        'Gross Margin': `${'$' + Math.round(profit3).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${gross_margin_percent + '%'}`, 'Hit Rato': `${hit_ratio + '%'}`,
        Backlog: `${'$' + (expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': `${start_date}`, 'Months': `${totalMonths}`,
        Revenue: `${'$' + Math.round(totalExpectedRevenue).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + Math.round(profitCurrentYear).toLocaleString(undefined, {maximumFractionDigits:2})}`,
        'Revenue Year 2': `${'$' + Math.round(futureRevenueThree).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + Math.round(futureProfit).toLocaleString(undefined, {maximumFractionDigits:2})}`,
        'Revenue Year 3': `${'$' + Math.round(futureRevenue).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + Math.round(futureProfitThree).toLocaleString(undefined, {maximumFractionDigits:2})}`
  })
        }else if(status === 'FA' && division === '3'){
          childrenDataFA3.push(<tr key={_id} style={{ fontSize: '17px'}}>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{divisionName}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{dept_job}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{job_name}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{status}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(contract_amount)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(profit3)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{gross_margin_percent + '%'}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{hit_ratio + '%'}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{start_date}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{totalMonths}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(totalExpectedRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(profitCurrentYear)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureRevenueThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureProfitThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
       </tr>)

        divisionContractsFA3.push({Division: `${divisionName}`, 'Department Code': `${dept_job}`,
        'Job Name': `${job_name}`, Status: `${status}`, 'Contract Amount': `${'$' + Math.round(contract_amount).toLocaleString(undefined, {maximumFractionDigits:2})}`,
        'Gross Margin': `${'$' + Math.round(profit3).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${gross_margin_percent + '%'}`, 'Hit Rato': `${hit_ratio + '%'}`,
        Backlog: `${'$' + (expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': `${start_date}`, 'Months': `${totalMonths}`,
        Revenue: `${'$' + Math.round(totalExpectedRevenue).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + Math.round(profitCurrentYear).toLocaleString(undefined, {maximumFractionDigits:2})}`,
        'Revenue Year 2': `${'$' + Math.round(futureRevenueThree).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + Math.round(futureProfit).toLocaleString(undefined, {maximumFractionDigits:2})}`,
        'Revenue Year 3': `${'$' + Math.round(futureRevenue).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + Math.round(futureProfitThree).toLocaleString(undefined, {maximumFractionDigits:2})}`
  })
        }else if(status === 'Contract' && division === '4'){
          childrenDataContract4.push(<tr key={_id} style={{ fontSize: '17px'}}>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{divisionName}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{dept_job}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{job_name}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{status}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(contract_amount)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(profit4)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{gross_margin_percent + '%'}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{hit_ratio + '%'}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{start_date}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{totalMonths}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(totalExpectedRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(profitCurrentYear)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureRevenueThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureProfitThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
       </tr>)

        divisionContracts4.push({Division: `${divisionName}`, 'Department Code': `${dept_job}`,
            'Job Name': `${job_name}`, Status: `${status}`, 'Contract Amount': `${'$' + Math.round(contract_amount).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Gross Margin': `${'$' + Math.round(profit4).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${gross_margin_percent + '%'}`, 'Hit Rato': `${hit_ratio + '%'}`,
            Backlog: `${'$' + (expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': `${start_date}`, 'Months': `${totalMonths}`,
            Revenue: `${'$' + Math.round(totalExpectedRevenue).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + Math.round(profitCurrentYear).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Revenue Year 2': `${'$' + Math.round(futureRevenueThree).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + Math.round(futureProfit).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Revenue Year 3': `${'$' + Math.round(futureRevenue).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + Math.round(futureProfitThree).toLocaleString(undefined, {maximumFractionDigits:2})}`
          })
        }else if(status === 'ABNC' && division === '4'){
          childrenDataABNC4.push(<tr key={_id} style={{ fontSize: '17px'}}>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{divisionName}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{dept_job}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{job_name}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{status}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(contract_amount)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(profit4)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{gross_margin_percent + '%'}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{hit_ratio + '%'}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{start_date}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{totalMonths}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(totalExpectedRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(profitCurrentYear)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureRevenueThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureProfitThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
       </tr>)

        divisionContractsABNC4.push({Division: `${divisionName}`, 'Department Code': `${dept_job}`,
            'Job Name': `${job_name}`, Status: `${status}`, 'Contract Amount': `${'$' + Math.round(contract_amount).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Gross Margin': `${'$' + Math.round(profit4).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${gross_margin_percent + '%'}`, 'Hit Rato': `${hit_ratio + '%'}`,
            Backlog: `${'$' + (expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': `${start_date}`, 'Months': `${totalMonths}`,
            Revenue: `${'$' + Math.round(totalExpectedRevenue).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + Math.round(profitCurrentYear).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Revenue Year 2': `${'$' + Math.round(futureRevenueThree).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + Math.round(futureProfit).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Revenue Year 3': `${'$' + Math.round(futureRevenue).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + Math.round(futureProfitThree).toLocaleString(undefined, {maximumFractionDigits:2})}`
          })
        }else if(status === 'FA' && division === '4'){
          childrenDataFA4.push(<tr key={_id} style={{ fontSize: '17px'}}>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{divisionName}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{dept_job}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{job_name}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{status}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(contract_amount)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(profit4)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{gross_margin_percent + '%'}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{hit_ratio + '%'}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{start_date}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{totalMonths}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(totalExpectedRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(profitCurrentYear)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureRevenueThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureProfitThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
       </tr>)

        divisionContractsFA4.push({Division: `${divisionName}`, 'Department Code': `${dept_job}`,
            'Job Name': `${job_name}`, Status: `${status}`, 'Contract Amount': `${'$' + Math.round(contract_amount).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Gross Margin': `${'$' + Math.round(profit4).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${gross_margin_percent + '%'}`, 'Hit Rato': `${hit_ratio + '%'}`,
            Backlog: `${'$' + (expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': `${start_date}`, 'Months': `${totalMonths}`,
            Revenue: `${'$' + Math.round(totalExpectedRevenue).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + Math.round(profitCurrentYear).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Revenue Year 2': `${'$' + Math.round(futureRevenueThree).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + Math.round(futureProfit).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Revenue Year 3': `${'$' + Math.round(futureRevenue).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + Math.round(futureProfitThree).toLocaleString(undefined, {maximumFractionDigits:2})}`
          })
        }else if(status === 'Contract' && division === '5'){
          childrenDataContract5.push(<tr key={_id} style={{ fontSize: '17px'}}>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{divisionName}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{dept_job}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{job_name}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{status}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(contract_amount)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(profit5)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{gross_margin_percent + '%'}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{hit_ratio + '%'}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{start_date}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{totalMonths}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(totalExpectedRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(profitCurrentYear)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureRevenueThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureProfitThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
       </tr>)

        divisionContracts5.push({Division: `${divisionName}`, 'Department Code': `${dept_job}`,
            'Job Name': `${job_name}`, Status: `${status}`, 'Contract Amount': `${'$' + Math.round(contract_amount).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Gross Margin': `${'$' + Math.round(profit5).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${gross_margin_percent + '%'}`, 'Hit Rato': `${hit_ratio + '%'}`,
            Backlog: `${'$' + (expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': `${start_date}`, 'Months': `${totalMonths}`,
            Revenue: `${'$' + Math.round(totalExpectedRevenue).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + Math.round(profitCurrentYear).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Revenue Year 2': `${'$' + Math.round(futureRevenueThree).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + Math.round(futureProfit).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Revenue Year 3': `${'$' + Math.round(futureRevenue).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + Math.round(futureProfitThree).toLocaleString(undefined, {maximumFractionDigits:2})}`
          })
        }else if(status === 'ABNC' && division === '5'){
          childrenDataABNC5.push(<tr key={_id} style={{ fontSize: '17px'}}>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{divisionName}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{dept_job}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{job_name}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{status}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(contract_amount)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(profit5)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{gross_margin_percent + '%'}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{hit_ratio + '%'}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{start_date}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{totalMonths}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(totalExpectedRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(profitCurrentYear)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureRevenueThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureProfitThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
       </tr>)

        divisionContractsABNC5.push({Division: `${divisionName}`, 'Department Code': `${dept_job}`,
            'Job Name': `${job_name}`, Status: `${status}`, 'Contract Amount': `${'$' + Math.round(contract_amount).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Gross Margin': `${'$' + Math.round(profit5).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${gross_margin_percent + '%'}`, 'Hit Rato': `${hit_ratio + '%'}`,
            Backlog: `${'$' + (expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': `${start_date}`, 'Months': `${totalMonths}`,
            Revenue: `${'$' + Math.round(totalExpectedRevenue).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + Math.round(profitCurrentYear).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Revenue Year 2': `${'$' + Math.round(futureRevenueThree).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + Math.round(futureProfit).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Revenue Year 3': `${'$' + Math.round(futureRevenue).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + Math.round(futureProfitThree).toLocaleString(undefined, {maximumFractionDigits:2})}`
          })
        }else if(status === 'FA' && division === '5'){
          childrenDataFA5.push(<tr key={_id} style={{ fontSize: '17px'}}>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{divisionName}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{dept_job}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{job_name}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{status}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(contract_amount)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(profit5)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{gross_margin_percent + '%'}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{hit_ratio + '%'}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{start_date}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{totalMonths}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(totalExpectedRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(profitCurrentYear)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureRevenueThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureProfitThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
       </tr>)

        divisionContractsFA5.push({Division: `${divisionName}`, 'Department Code': `${dept_job}`,
            'Job Name': `${job_name}`, Status: `${status}`, 'Contract Amount': `${'$' + Math.round(contract_amount).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Gross Margin': `${'$' + Math.round(profit5).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${gross_margin_percent + '%'}`, 'Hit Rato': `${hit_ratio + '%'}`,
            Backlog: `${'$' + (expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': `${start_date}`, 'Months': `${totalMonths}`,
            Revenue: `${'$' + Math.round(totalExpectedRevenue).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + Math.round(profitCurrentYear).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Revenue Year 2': `${'$' + Math.round(futureRevenueThree).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + Math.round(futureProfit).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Revenue Year 3': `${'$' + Math.round(futureRevenue).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + Math.round(futureProfitThree).toLocaleString(undefined, {maximumFractionDigits:2})}`
          })
        }else if(status === 'Contract' && division === '6'){
          childrenDataContract6.push(<tr key={_id} style={{ fontSize: '17px'}}>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{divisionName}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{dept_job}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{job_name}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{status}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(contract_amount)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(profit6)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{gross_margin_percent + '%'}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{hit_ratio + '%'}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{start_date}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{totalMonths}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(totalExpectedRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(profitCurrentYear)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureRevenueThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureProfitThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
       </tr>)

        divisionContracts6.push({Division: `${divisionName}`, 'Department Code': `${dept_job}`,
            'Job Name': `${job_name}`, Status: `${status}`, 'Contract Amount': `${'$' + Math.round(contract_amount).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Gross Margin': `${'$' + Math.round(profit6).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${gross_margin_percent + '%'}`, 'Hit Rato': `${hit_ratio + '%'}`,
            Backlog: `${'$' + (expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': `${start_date}`, 'Months': `${totalMonths}`,
            Revenue: `${'$' + Math.round(totalExpectedRevenue).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + Math.round(profitCurrentYear).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Revenue Year 2': `${'$' + Math.round(futureRevenueThree).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + Math.round(futureProfit).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Revenue Year 3': `${'$' + Math.round(futureRevenue).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + Math.round(futureProfitThree).toLocaleString(undefined, {maximumFractionDigits:2})}`
          })
        }else if(status === 'ABNC' && division === '6'){
          childrenDataABNC6.push(<tr key={_id} style={{ fontSize: '17px'}}>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{divisionName}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{dept_job}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{job_name}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{status}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(contract_amount)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(profit6)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{gross_margin_percent + '%'}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{hit_ratio + '%'}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{start_date}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{totalMonths}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(totalExpectedRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(profitCurrentYear)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureRevenueThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureProfitThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
       </tr>)

        divisionContractsABNC6.push({Division: `${divisionName}`, 'Department Code': `${dept_job}`,
            'Job Name': `${job_name}`, Status: `${status}`, 'Contract Amount': `${'$' + Math.round(contract_amount).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Gross Margin': `${'$' + Math.round(profit6).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${gross_margin_percent + '%'}`, 'Hit Rato': `${hit_ratio + '%'}`,
            Backlog: `${'$' + (expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': `${start_date}`, 'Months': `${totalMonths}`,
            Revenue: `${'$' + Math.round(totalExpectedRevenue).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + Math.round(profitCurrentYear).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Revenue Year 2': `${'$' + Math.round(futureRevenueThree).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + Math.round(futureProfit).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Revenue Year 3': `${'$' + Math.round(futureRevenue).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + Math.round(futureProfitThree).toLocaleString(undefined, {maximumFractionDigits:2})}`
          })
        }else if(status === 'FA' && division === '6'){
          childrenDataFA6.push(<tr key={_id} style={{ fontSize: '17px'}}>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{divisionName}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{dept_job}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{job_name}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{status}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(contract_amount)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(profit6)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{gross_margin_percent + '%'}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{hit_ratio + '%'}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{start_date}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{totalMonths}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(totalExpectedRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(profitCurrentYear)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureRevenueThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureProfitThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
       </tr>)

        divisionContractsFA6.push({Division: `${divisionName}`, 'Department Code': `${dept_job}`,
            'Job Name': `${job_name}`, Status: `${status}`, 'Contract Amount': `${'$' + Math.round(contract_amount).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Gross Margin': `${'$' + Math.round(profit6).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${gross_margin_percent + '%'}`, 'Hit Rato': `${hit_ratio + '%'}`,
            Backlog: `${'$' + (expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': `${start_date}`, 'Months': `${totalMonths}`,
            Revenue: `${'$' + Math.round(totalExpectedRevenue).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + Math.round(profitCurrentYear).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Revenue Year 2': `${'$' + Math.round(futureRevenueThree).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + Math.round(futureProfit).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Revenue Year 3': `${'$' + Math.round(futureRevenue).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + Math.round(futureProfitThree).toLocaleString(undefined, {maximumFractionDigits:2})}`
          })
        }else if(status === 'Contract' && division === '7'){
          childrenDataContract7.push(<tr key={_id} style={{ fontSize: '17px'}}>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{divisionName}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{dept_job}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{job_name}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{status}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(contract_amount)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(profit7)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{gross_margin_percent + '%'}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{hit_ratio + '%'}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{start_date}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{totalMonths}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(totalExpectedRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(profitCurrentYear)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureRevenueThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureProfitThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
       </tr>)

        divisionContracts7.push({Division: `${divisionName}`, 'Department Code': `${dept_job}`,
            'Job Name': `${job_name}`, Status: `${status}`, 'Contract Amount': `${'$' + Math.round(contract_amount).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Gross Margin': `${'$' + Math.round(profit7).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${gross_margin_percent + '%'}`, 'Hit Rato': `${hit_ratio + '%'}`,
            Backlog: `${'$' + (expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': `${start_date}`, 'Months': `${totalMonths}`,
            Revenue: `${'$' + Math.round(totalExpectedRevenue).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + Math.round(profitCurrentYear).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Revenue Year 2': `${'$' + Math.round(futureRevenueThree).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + Math.round(futureProfit).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Revenue Year 3': `${'$' + Math.round(futureRevenue).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + Math.round(futureProfitThree).toLocaleString(undefined, {maximumFractionDigits:2})}`
          })
        }else if(status === 'ABNC' && division === '7'){
          childrenDataABNC7.push(<tr key={_id} style={{ fontSize: '17px'}}>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{divisionName}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{dept_job}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{job_name}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{status}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(contract_amount)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(profit7)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{gross_margin_percent + '%'}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{hit_ratio + '%'}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{start_date}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{totalMonths}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(totalExpectedRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(profitCurrentYear)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureRevenueThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureProfitThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
       </tr>)

        divisionContractsABNC7.push({Division: `${divisionName}`, 'Department Code': `${dept_job}`,
            'Job Name': `${job_name}`, Status: `${status}`, 'Contract Amount': `${'$' + Math.round(contract_amount).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Gross Margin': `${'$' + Math.round(profit7).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${gross_margin_percent + '%'}`, 'Hit Rato': `${hit_ratio + '%'}`,
            Backlog: `${'$' + (expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': `${start_date}`, 'Months': `${totalMonths}`,
            Revenue: `${'$' + Math.round(totalExpectedRevenue).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + Math.round(profitCurrentYear).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Revenue Year 2': `${'$' + Math.round(futureRevenueThree).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + Math.round(futureProfit).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Revenue Year 3': `${'$' + Math.round(futureRevenue).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + Math.round(futureProfitThree).toLocaleString(undefined, {maximumFractionDigits:2})}`
          })
        }else if(status === 'FA' && division === '7'){
          childrenDataFA7.push(<tr key={_id} style={{ fontSize: '17px'}}>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{divisionName}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{dept_job}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{job_name}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{status}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(contract_amount)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(profit7)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{gross_margin_percent + '%'}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{hit_ratio + '%'}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{start_date}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{totalMonths}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(totalExpectedRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(profitCurrentYear)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureRevenueThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureProfitThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
       </tr>)

        divisionContractsFA7.push({Division: `${divisionName}`, 'Department Code': `${dept_job}`,
            'Job Name': `${job_name}`, Status: `${status}`, 'Contract Amount': `${'$' + Math.round(contract_amount).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Gross Margin': `${'$' + Math.round(profit7).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${gross_margin_percent + '%'}`, 'Hit Rato': `${hit_ratio + '%'}`,
            Backlog: `${'$' + (expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': `${start_date}`, 'Months': `${totalMonths}`,
            Revenue: `${'$' + Math.round(totalExpectedRevenue).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + Math.round(profitCurrentYear).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Revenue Year 2': `${'$' + Math.round(futureRevenueThree).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + Math.round(futureProfit).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Revenue Year 3': `${'$' + Math.round(futureRevenue).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + Math.round(futureProfitThree).toLocaleString(undefined, {maximumFractionDigits:2})}`
          })
        }else if(status === 'Contract' && division === '11'){
          childrenDataContract11.push(<tr key={_id} style={{ fontSize: '17px'}}>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{divisionName}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{dept_job}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{job_name}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{status}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(contract_amount)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(profit11)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{gross_margin_percent + '%'}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{hit_ratio + '%'}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{start_date}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{totalMonths}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(totalExpectedRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(profitCurrentYear)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureRevenueThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureProfitThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
       </tr>)

        divisionContracts11.push({Division: `${divisionName}`, 'Department Code': `${dept_job}`,
            'Job Name': `${job_name}`, Status: `${status}`, 'Contract Amount': `${'$' + Math.round(contract_amount).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Gross Margin': `${'$' + Math.round(profit11).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${gross_margin_percent + '%'}`, 'Hit Rato': `${hit_ratio + '%'}`,
            Backlog: `${'$' + (expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': `${start_date}`, 'Months': `${totalMonths}`,
            Revenue: `${'$' + Math.round(totalExpectedRevenue).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + Math.round(profitCurrentYear).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Revenue Year 2': `${'$' + Math.round(futureRevenueThree).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + Math.round(futureProfit).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Revenue Year 3': `${'$' + Math.round(futureRevenue).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + Math.round(futureProfitThree).toLocaleString(undefined, {maximumFractionDigits:2})}`
          })
        }else if(status === 'ABNC' && division === '11'){
          childrenDataABNC11.push(<tr key={_id} style={{ fontSize: '17px'}}>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{divisionName}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{dept_job}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{job_name}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{status}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(contract_amount)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(profit11)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{gross_margin_percent + '%'}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{hit_ratio + '%'}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{start_date}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{totalMonths}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(totalExpectedRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(profitCurrentYear)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureRevenueThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureProfitThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
       </tr>)

        divisionContractsABNC11.push({Division: `${divisionName}`, 'Department Code': `${dept_job}`,
            'Job Name': `${job_name}`, Status: `${status}`, 'Contract Amount': `${'$' + Math.round(contract_amount).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Gross Margin': `${'$' + Math.round(profit11).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${gross_margin_percent + '%'}`, 'Hit Rato': `${hit_ratio + '%'}`,
            Backlog: `${'$' + (expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': `${start_date}`, 'Months': `${totalMonths}`,
            Revenue: `${'$' + Math.round(totalExpectedRevenue).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + Math.round(profitCurrentYear).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Revenue Year 2': `${'$' + Math.round(futureRevenueThree).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + Math.round(futureProfit).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Revenue Year 3': `${'$' + Math.round(futureRevenue).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + Math.round(futureProfitThree).toLocaleString(undefined, {maximumFractionDigits:2})}`
          })
        }else if(status === 'FA' && division === '11'){
          childrenDataFA11.push(<tr key={_id} style={{ fontSize: '17px'}}>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{divisionName}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{dept_job}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{job_name}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{status}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(contract_amount)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(profit11)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{gross_margin_percent + '%'}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{hit_ratio + '%'}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{start_date}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{totalMonths}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(totalExpectedRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(profitCurrentYear)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureRevenueThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureProfitThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
       </tr>)

      divisionContractsFA11.push({Division: `${divisionName}`, 'Department Code': `${dept_job}`,
            'Job Name': `${job_name}`, Status: `${status}`, 'Contract Amount': `${'$' + Math.round(contract_amount).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Gross Margin': `${'$' + Math.round(profit11).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${gross_margin_percent + '%'}`, 'Hit Rato': `${hit_ratio + '%'}`,
            Backlog: `${'$' + (expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': `${start_date}`, 'Months': `${totalMonths}`,
            Revenue: `${'$' + Math.round(totalExpectedRevenue).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + Math.round(profitCurrentYear).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Revenue Year 2': `${'$' + Math.round(futureRevenueThree).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + Math.round(futureProfit).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Revenue Year 3': `${'$' + Math.round(futureRevenue).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + Math.round(futureProfitThree).toLocaleString(undefined, {maximumFractionDigits:2})}`
          })
        }
        
        if(status === 'Contract'){
          childrenDataContractOne.push(<tr key={_id} style={{ fontSize: '17px'}}>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{divisionName}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{dept_job}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{job_name}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{status}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(contract_amount)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(profitOne)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{gross_margin_percent + '%'}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{hit_ratio + '%'}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{start_date}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{totalMonths}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(totalExpectedRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(profitCurrentYear)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureRevenueThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureProfitThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
       </tr>)

        divisionContractsOne.push({Division: `${divisionName}`, 'Department Code': `${dept_job}`,
            'Job Name': `${job_name}`, Status: `${status}`, 'Contract Amount': `${'$' + Math.round(contract_amount).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Gross Margin': `${'$' + Math.round(profitOne).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${gross_margin_percent + '%'}`, 'Hit Rato': `${hit_ratio + '%'}`,
            Backlog: `${'$' + (expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': `${start_date}`, 'Months': `${totalMonths}`,
            Revenue: `${'$' + Math.round(totalExpectedRevenue).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + Math.round(profitCurrentYear).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Revenue Year 2': `${'$' + Math.round(futureRevenue).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + Math.round(futureProfit).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Revenue Year 3': `${'$' + Math.round(futureRevenueThree).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + Math.round(futureProfitThree).toLocaleString(undefined, {maximumFractionDigits:2})}`
          })
        }else if(status === 'ABNC'){
          childrenDataABNCOne.push(<tr key={_id} style={{ fontSize: '17px'}}>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{divisionName}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{dept_job}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{job_name}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{status}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(contract_amount)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(profitOne)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{gross_margin_percent + '%'}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{hit_ratio + '%'}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{start_date}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{totalMonths}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(totalExpectedRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(profitCurrentYear)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureRevenueThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureProfitThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
       </tr>)

        divisionContractsABNCOne.push({Division: `${divisionName}`, 'Department Code': `${dept_job}`,
            'Job Name': `${job_name}`, Status: `${status}`, 'Contract Amount': `${'$' + Math.round(contract_amount).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Gross Margin': `${'$' + Math.round(profitOne).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${gross_margin_percent + '%'}`, 'Hit Rato': `${hit_ratio + '%'}`,
            Backlog: `${'$' + (expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': `${start_date}`, 'Months': `${totalMonths}`,
            Revenue: `${'$' + Math.round(totalExpectedRevenue).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + Math.round(profitCurrentYear).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Revenue Year 2': `${'$' + Math.round(futureRevenue).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + Math.round(futureProfit).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Revenue Year 3': `${'$' + Math.round(futureRevenueThree).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + Math.round(futureProfitThree).toLocaleString(undefined, {maximumFractionDigits:2})}`
          })
        }else if(status === 'FA'){
          childrenDataFAOne.push(<tr key={_id} style={{ fontSize: '17px'}}>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{divisionName}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{dept_job}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{job_name}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{status}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(contract_amount)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(profitOne)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{gross_margin_percent + '%'}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{hit_ratio + '%'}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{start_date}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "center"}}>{totalMonths}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(totalExpectedRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(profitCurrentYear)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureRevenueThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td style={{ border: '1px solid #005A8B', fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif', textAlign: "right"}}>{'$' + parseFloat(Math.round(futureProfitThree)).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
       </tr>)

      divisionContractsFAOne.push({Division: `${divisionName}`, 'Department Code': `${dept_job}`,
            'Job Name': `${job_name}`, Status: `${status}`, 'Contract Amount': `${'$' + Math.round(contract_amount).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Gross Margin': `${'$' + Math.round(profitOne).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${gross_margin_percent + '%'}`, 'Hit Rato': `${hit_ratio + '%'}`,
            Backlog: `${'$' + (expectedContractAmount).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': `${start_date}`, 'Months': `${totalMonths}`,
            Revenue: `${'$' + Math.round(totalExpectedRevenue).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + Math.round(profitCurrentYear).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Revenue Year 2': `${'$' + Math.round(futureRevenue).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + Math.round(futureProfit).toLocaleString(undefined, {maximumFractionDigits:2})}`,
            'Revenue Year 3': `${'$' + Math.round(futureRevenueThree).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + Math.round(futureProfitThree).toLocaleString(undefined, {maximumFractionDigits:2})}`
          })
        }

      }

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
             <th style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}></th>
             <th colSpan={2} style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>{currentYearLabel}</th>
             <th colSpan={2} style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>{parseInt(currentYearLabel)+1}</th>
             <th colSpan={2} style={{ textAlign: 'center', backgroundColor: '#005A8B', color: 'white', borderColor: 'white'}}>{parseInt(currentYearLabel)+2}</th>
           </>
 }
  else if(value === 'headerSection'){
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
             <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>Revenue - {currentYearLabel}</th>
             <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>Gross Margin - {currentYearLabel}</th>
             <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>Revenue - {parseInt(currentYearLabel)+1}</th>
             <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>Gross Margin - {parseInt(currentYearLabel)+1}</th>
             <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>Revenue - {parseInt(currentYearLabel)+2}</th>
             <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>Gross Margin - {parseInt(currentYearLabel)+2}</th>
           </>
 } else if(value === 'headerSectionTotal'){

  //Division 1

  divisionContractsTotal.push(<tr key={20001} style={{ fontSize: '17px'}}>
      <th colSpan={3} style={{ textAlign: 'center', border: '1px solid #005A8B'}}>TOTALS CONTRACT: DIVISION 1</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(contractTotal)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(profitTotal)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((parseFloat(profitTotal) / parseFloat(contractTotal)) * 100).toFixed(2) + '%'}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedConAmount)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedRevenue)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureRev)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureProf)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureBack)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureBackProfit)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    </tr>)
        divisionContracts.push({Division: `TOTALS`, 'Department Code': ``,
        'Job Name': ``, Status: ``, 'Contract Amount': `${'$' + Math.round(contractTotal).toLocaleString(undefined, {maximumFractionDigits:2})}`,
        'Gross Margin': `${'$' + Math.round(profitTotal).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${((parseFloat(profitTotal) / parseFloat(contractTotal)) * 100).toFixed(2) + '%'}`, 'Hit Rato': ``,
        Backlog: `${'$' + (expectedConAmount).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': ``, 'Months': ``,
        Revenue: `${'$' + Math.round(expectedRevenue).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + Math.round(expectedProfit).toLocaleString(undefined, {maximumFractionDigits:2})}`,
        'Revenue Year 2': `${'$' + Math.round(expectedFutureRev).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + Math.round(expectedFutureProf).toLocaleString(undefined, {maximumFractionDigits:2})}`,
        'Revenue Year 3': `${'$' + Math.round(expectedFutureBack).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + Math.round(expectedFutureBackProfit).toLocaleString(undefined, {maximumFractionDigits:2})}`
      })

      divisionABNCTotal.push(<tr key={20001} style={{ fontSize: '17px'}}>
      <th colSpan={3} style={{ textAlign: 'center', border: '1px solid #005A8B'}}>TOTALS ABNC: DIVISION 1</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(contractTotalABNC)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(profitABNCTotal)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((parseFloat(profitABNCTotal) / parseFloat(contractTotalABNC)) * 100).toFixed(2) + '%'}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedContractAmountABNC)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedRevenueABNC)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedProfitABNC)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureRevABNC)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureProfABNC)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureBackABNC)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureBackProfitABNC)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    </tr>)

      divisionContractsABNC.push({Division: `TOTALS`, 'Department Code': ``,
      'Job Name': ``, Status: ``, 'Contract Amount': `${'$' + Math.round(contractTotalABNC).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Gross Margin': `${'$' + Math.round(profitABNCTotal).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${((parseFloat(profitABNCTotal) / parseFloat(contractTotalABNC)) * 100).toFixed(2) + '%'}`, 'Hit Rato': ``,
      Backlog: `${'$' + (expectedContractAmountABNC).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': ``, 'Months': ``,
      Revenue: `${'$' + Math.round(expectedRevenueABNC).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + Math.round(expectedProfitABNC).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 2': `${'$' + Math.round(expectedFutureRevABNC).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + Math.round(expectedFutureProfABNC).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 3': `${'$' + Math.round(expectedFutureBackABNC).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + Math.round(expectedFutureBackProfitABNC).toLocaleString(undefined, {maximumFractionDigits:2})}`
      })

      divisionFATotal.push(<tr key={20001} style={{ fontSize: '17px'}}>
      <th colSpan={3} style={{ textAlign: 'center', border: '1px solid #005A8B'}}>TOTALS FA: DIVISION 1</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(contractTotalFA)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(profitFATotal)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((parseFloat(profitFATotal) / parseFloat(contractTotalFA)) * 100).toFixed(2) + '%'}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedContractAmountFA)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedRevenueFA)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedProfitFA)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureRevFA)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureProfFA)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureBackFA)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureBackProfitFA)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    </tr>)

      divisionContractsFA.push({Division: `TOTALS`, 'Department Code': ``,
      'Job Name': ``, Status: ``, 'Contract Amount': `${'$' + Math.round(contractTotalFA).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Gross Margin': `${'$' + Math.round(profitFATotal).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${((parseFloat(profitFATotal) / parseFloat(contractTotalFA)) * 100).toFixed(2) + '%'}`, 'Hit Rato': ``,
      Backlog: `${'$' + (expectedContractAmountFA).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': ``, 'Months': ``,
      Revenue: `${'$' + Math.round(expectedRevenueFA).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + Math.round(expectedProfitFA).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 2': `${'$' + Math.round(expectedFutureRevFA).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + Math.round(expectedFutureProfFA).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 3': `${'$' + Math.round(expectedFutureBackFA).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + Math.round(expectedFutureBackProfitFA).toLocaleString(undefined, {maximumFractionDigits:2})}`
      })

      divisionCombinedTotal.push(<tr key={20001} style={{ fontSize: '17px'}}>
      <th colSpan={3} style={{ textAlign: 'center', border: '1px solid #005A8B'}}>TOTALS Projection: DIVISION 1</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(contractTotal) + Math.round(contractTotalABNC) + Math.round(contractTotalFA)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(profitTotal) + Math.round(profitABNCTotal) + Math.round(profitFATotal)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((parseFloat(Math.round(profitTotal) + Math.round(profitABNCTotal) + Math.round(profitFATotal)) / (Math.round(contractTotal) + Math.round(contractTotalABNC) + Math.round(contractTotalFA))) * 100).toFixed(2) + '%'}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedConAmount) + Math.round(expectedContractAmountABNC) + Math.round(expectedContractAmountFA)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(expectedRevenue) + Math.round(expectedRevenueABNC) + Math.round(expectedRevenueFA)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(expectedProfit) + Math.round(expectedProfitABNC) + Math.round(expectedProfitFA)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(expectedFutureRev) + Math.round(expectedFutureRevABNC) + Math.round(expectedFutureRevFA)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(expectedFutureProf) + Math.round(expectedFutureProfABNC) + Math.round(expectedFutureProfFA)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(expectedFutureBack) + Math.round(expectedFutureBackABNC) + Math.round(expectedFutureBackFA)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(expectedFutureBackProfit) + Math.round(expectedFutureBackProfitABNC) + Math.round(expectedFutureBackProfitFA)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    </tr>)

    divisionCombinedTotalPlan.push(<tr key={20001} style={{ fontSize: '17px'}}>
    <th colSpan={3} style={{ textAlign: 'center', border: '1px solid #005A8B'}}>Plan Projection</th>
    <th style={{ textAlign: 'center'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (parseInt(divOneArray[0].div_1_revenue_1)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (parseInt(divOneArray[0].div_1_profit_1)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (parseInt(divOneArray[0].div_1_revenue_2)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (parseInt(divOneArray[0].div_1_profit_2)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (parseInt(divOneArray[0].div_1_revenue_3)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (parseInt(divOneArray[0].div_1_profit_3)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    </tr>)

    divisionCombinedTotalPlanPercent.push(<tr key={20001} style={{ fontSize: '17px'}}>
    <th colSpan={3} style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((Math.round(expectedRevenue) + Math.round(expectedRevenueABNC) + Math.round(expectedRevenueFA)) / Math.round(parseInt(divOneArray[0].div_1_revenue_1)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((Math.round(expectedProfit) + Math.round(expectedProfitABNC) + Math.round(expectedProfitFA)) / Math.round(parseInt(divOneArray[0].div_1_profit_1)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((Math.round(expectedFutureRev) + Math.round(expectedFutureRevABNC) + Math.round(expectedFutureRevFA)) / Math.round(parseInt(divOneArray[0].div_1_revenue_2)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((Math.round(expectedFutureProf) + Math.round(expectedFutureProfABNC) + Math.round(expectedFutureProfFA)) / Math.round(parseInt(divOneArray[0].div_1_profit_2)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((Math.round(expectedFutureBack) + Math.round(expectedFutureBackABNC) + Math.round(expectedFutureBackFA)) / Math.round(parseInt(divOneArray[0].div_1_revenue_3)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((Math.round(expectedFutureBackProfit) + Math.round(expectedFutureBackProfitABNC) + Math.round(expectedFutureBackProfitFA)) / Math.round(parseInt(divOneArray[0].div_1_profit_3)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}</th>
    </tr>)

      var finalDivisionArray = divisionContracts.concat(divisionContractsABNC).concat(divisionContractsFA)
      finalDivisionArray.push({Division: `Projection`, 'Department Code': ``,
      'Job Name': ``, Status: ``, 'Contract Amount': `${'$' + (Math.round(contractTotal) + Math.round(contractTotalABNC) + Math.round(contractTotalFA)).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Gross Margin': `${'$' + parseFloat(Math.round(profitTotal) + Math.round(profitABNCTotal) + Math.round(profitFATotal)).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${((parseFloat(Math.round(profitTotal) + Math.round(profitABNCTotal) + Math.round(profitFATotal)) / (Math.round(contractTotal) + Math.round(contractTotalABNC) + Math.round(contractTotalFA))) * 100).toFixed(2) + '%'}`, 'Hit Rato': ``,
      Backlog: `${'$' + parseFloat(Math.round(expectedConAmount) + Math.round(expectedContractAmountABNC) + Math.round(expectedContractAmountFA)).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': ``, 'Months': ``,
      Revenue: `${'$' + (Math.round(expectedRevenue) + Math.round(expectedRevenueABNC) + Math.round(expectedRevenueFA)).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + (Math.round(expectedProfit) + Math.round(expectedProfitABNC) + Math.round(expectedProfitFA)).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 2': `${'$' + (Math.round(expectedFutureRev) + Math.round(expectedFutureRevABNC) + Math.round(expectedFutureRevFA)).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + (Math.round(expectedFutureProf) + Math.round(expectedFutureProfABNC) + Math.round(expectedFutureProfFA)).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 3': `${'$' + (Math.round(expectedFutureBack) + Math.round(expectedFutureBackABNC) + Math.round(expectedFutureBackFA)).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + (Math.round(expectedFutureBackProfit) + Math.round(expectedFutureBackProfitABNC) + Math.round(expectedFutureBackProfitFA)).toLocaleString(undefined, {maximumFractionDigits:2})}`
      })

      finalDivisionArray.push({Division: `Plan`, 'Department Code': ``,
      'Job Name': ``, Status: ``, 'Contract Amount': ``,'Gross Margin': ``, 'Hit Rato': ``,
      Backlog: ``,  'Start Date': ``, 'Months': ``,
      Revenue: `${'$' + (parseInt(divOneArray[0].div_1_revenue_1)).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + (parseInt(divOneArray[0].div_1_profit_1)).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 2': `${'$' + (parseInt(divOneArray[0].div_1_revenue_2)).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + (parseInt(divOneArray[0].div_1_profit_2)).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 3': `${'$' + (parseInt(divOneArray[0].div_1_revenue_3)).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + (parseInt(divOneArray[0].div_1_profit_3)).toLocaleString(undefined, {maximumFractionDigits:2})}`
      })

      finalDivisionArray.push({Division: ``, 'Department Code': ``,
      'Job Name': ``, Status: ``, 'Contract Amount': ``,'Gross Margin': ``, 'Hit Rato': ``,
      Backlog: ``,  'Start Date': ``, 'Months': ``,
      Revenue: `${((Math.round(expectedRevenue) + Math.round(expectedRevenueABNC) + Math.round(expectedRevenueFA)) / Math.round(parseInt(divOneArray[0].div_1_revenue_1)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}`, 'Gross Margin $': `${((Math.round(expectedProfit) + Math.round(expectedProfitABNC) + Math.round(expectedProfitFA)) / Math.round(parseInt(divOneArray[0].div_1_profit_1)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}`,
      'Revenue Year 2': `${((Math.round(expectedFutureRev) + Math.round(expectedFutureRevABNC) + Math.round(expectedFutureRevFA)) / Math.round(parseInt(divOneArray[0].div_1_revenue_2)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}`, 'Gross Margin $ Year 2': `${((Math.round(expectedFutureProf) + Math.round(expectedFutureProfABNC) + Math.round(expectedFutureProfFA)) / Math.round(parseInt(divOneArray[0].div_1_profit_2)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}`,
      'Revenue Year 3': `${((Math.round(expectedFutureBack) + Math.round(expectedFutureBackABNC) + Math.round(expectedFutureBackFA)) / Math.round(parseInt(divOneArray[0].div_1_revenue_3)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}`, 'Gross Margin $ Year 3': `${((Math.round(expectedFutureBackProfit) + Math.round(expectedFutureBackProfitABNC) + Math.round(expectedFutureBackProfitFA)) / Math.round(parseInt(divOneArray[0].div_1_profit_3)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}`
      })

      mergedCompletedSections1 = finalDivisionArray.map((x) => x);

      //Division 2

      divisionContractsTotal2.push(<tr key={20002} style={{ fontSize: '17px'}}>
      <th colSpan={3} style={{ textAlign: 'center', border: '1px solid #005A8B'}}>TOTALS CONTRACT: DIVISION 2</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(contractTotal2)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(profitTotal2)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((parseFloat(profitTotal2) / parseFloat(contractTotal2)) * 100).toFixed(2) + '%'}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedConAmount2)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedRevenue2)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedProfit2)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureRev2)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureProf2)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureBack2)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureBackProfit2)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    </tr>)
        divisionContracts2.push({Division: `TOTALS`, 'Department Code': ``,
        'Job Name': ``, Status: ``, 'Contract Amount': `${'$' + Math.round(contractTotal2).toLocaleString(undefined, {maximumFractionDigits:2})}`,
        'Gross Margin': `${'$' + Math.round(profitTotal2).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${((parseFloat(profitTotal2) / parseFloat(contractTotal2)) * 100).toFixed(2) + '%'}`, 'Hit Rato': ``,
        Backlog: `${'$' + (expectedConAmount2).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': ``, 'Months': ``,
        Revenue: `${'$' + Math.round(expectedRevenue2).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + Math.round(expectedProfit2).toLocaleString(undefined, {maximumFractionDigits:2})}`,
        'Revenue Year 2': `${'$' + Math.round(expectedFutureRev2).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + Math.round(expectedFutureProf2).toLocaleString(undefined, {maximumFractionDigits:2})}`,
        'Revenue Year 3': `${'$' + Math.round(expectedFutureBack2).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + Math.round(expectedFutureBackProfit2).toLocaleString(undefined, {maximumFractionDigits:2})}`
      })

      divisionABNCTotal2.push(<tr key={20002} style={{ fontSize: '17px'}}>
      <th colSpan={3} style={{ textAlign: 'center', border: '1px solid #005A8B'}}>TOTALS ABNC: DIVISION 2</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(contractTotalABNC2)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(profitABNCTotal2)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((parseFloat(profitABNCTotal2) / parseFloat(contractTotalABNC2)) * 100).toFixed(2) + '%'}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedContractAmountABNC2)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedRevenueABNC2)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedProfitABNC2)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureRevABNC2)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureProfABNC2)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureBackABNC2)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureBackProfitABNC2)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    </tr>)

    divisionContractsABNC2.push({Division: `TOTALS`, 'Department Code': ``,
      'Job Name': ``, Status: ``, 'Contract Amount': `${'$' + Math.round(contractTotalABNC2).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Gross Margin': `${'$' + Math.round(profitABNCTotal2).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${((parseFloat(profitABNCTotal2) / parseFloat(contractTotalABNC2)) * 100).toFixed(2) + '%'}`, 'Hit Rato': ``,
      Backlog: `${'$' + (expectedContractAmountABNC2).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': ``, 'Months': ``,
      Revenue: `${'$' + Math.round(expectedRevenueABNC2).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + Math.round(expectedProfitABNC2).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 2': `${'$' + Math.round(expectedFutureRevABNC2).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + Math.round(expectedFutureProfABNC2).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 3': `${'$' + Math.round(expectedFutureBackABNC2).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + Math.round(expectedFutureBackProfitABNC2).toLocaleString(undefined, {maximumFractionDigits:2})}`
      })

      divisionFATotal2.push(<tr key={20002} style={{ fontSize: '17px'}}>
      <th colSpan={3} style={{ textAlign: 'center', border: '1px solid #005A8B'}}>TOTALS FA: DIVISION 2</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(contractTotalFA2)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(profitFATotal2)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((parseFloat(profitFATotal2) / parseFloat(contractTotalFA2)) * 100).toFixed(2) + '%'}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedContractAmountFA2)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedRevenueFA2)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedProfitFA2)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureRevFA2)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureProfFA2)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureBackFA2)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureBackProfitFA2)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    </tr>)

    divisionContractsFA2.push({Division: `TOTALS`, 'Department Code': ``,
      'Job Name': ``, Status: ``, 'Contract Amount': `${'$' + Math.round(contractTotalFA2).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Gross Margin': `${'$' + Math.round(profitFATotal2).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${((parseFloat(profitFATotal2) / parseFloat(contractTotalFA2)) * 100).toFixed(2) + '%'}`, 'Hit Rato': ``,
      Backlog: `${'$' + (expectedContractAmountFA2).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': ``, 'Months': ``,
      Revenue: `${'$' + Math.round(expectedRevenueFA2).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + Math.round(expectedProfitFA2).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 2': `${'$' + Math.round(expectedFutureRevFA2).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + Math.round(expectedFutureProfFA2).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 3': `${'$' + Math.round(expectedFutureBackFA2).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + Math.round(expectedFutureBackProfitFA2).toLocaleString(undefined, {maximumFractionDigits:2})}`
      })

      divisionCombinedTotal2.push(<tr key={20002} style={{ fontSize: '17px'}}>
      <th colSpan={3} style={{ textAlign: 'center', border: '1px solid #005A8B'}}>TOTALS COMBINED: DIVISION 2</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(contractTotal2) + Math.round(contractTotalABNC2) + Math.round(contractTotalFA2)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(profitTotal2) + Math.round(profitABNCTotal2) + Math.round(profitFATotal2)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((parseFloat(Math.round(profitTotal2) + Math.round(profitABNCTotal2) + Math.round(profitFATotal2)) / (Math.round(contractTotal2) + Math.round(contractTotalABNC2) + Math.round(contractTotalFA2))) * 100).toFixed(2) + '%'}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedConAmount2) + Math.round(expectedContractAmountABNC2) + Math.round(expectedContractAmountFA2)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(expectedRevenue2) + Math.round(expectedRevenueABNC2) + Math.round(expectedRevenueFA2)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(expectedProfit2) + Math.round(expectedProfitABNC2) + Math.round(expectedProfitFA2)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(expectedFutureRev2) + Math.round(expectedFutureRevABNC2) + Math.round(expectedFutureRevFA2)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(expectedFutureProf2) + Math.round(expectedFutureProfABNC2) + Math.round(expectedFutureProfFA2)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(expectedFutureBack2) + Math.round(expectedFutureBackABNC2) + Math.round(expectedFutureBackFA2)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(expectedFutureBackProfit2) + Math.round(expectedFutureBackProfitABNC2) + Math.round(expectedFutureBackProfitFA2)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    </tr>)

      divisionCombinedTotalPlanTwo.push(<tr key={20002} style={{ fontSize: '17px'}}>
      <th colSpan={3} style={{ textAlign: 'center', border: '1px solid #005A8B'}}>Plan Projection</th>
      <th style={{ textAlign: 'center'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (parseInt(divTwoArray[0].div_2_revenue_1)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (parseInt(divTwoArray[0].div_2_profit_1)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (parseInt(divTwoArray[0].div_2_revenue_2)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (parseInt(divTwoArray[0].div_2_profit_2)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (parseInt(divTwoArray[0].div_2_revenue_3)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (parseInt(divTwoArray[0].div_2_profit_3)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      </tr>)

      divisionCombinedTotalPlanPercentTwo.push(<tr key={20002} style={{ fontSize: '17px'}}>
      <th colSpan={3} style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((Math.round(expectedRevenue2) + Math.round(expectedRevenueABNC2) + Math.round(expectedRevenueFA2)) / Math.round(parseInt(divTwoArray[0].div_2_revenue_1)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((Math.round(expectedProfit2) + Math.round(expectedProfitABNC2) + Math.round(expectedProfitFA2)) / Math.round(parseInt(divTwoArray[0].div_2_profit_1)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((Math.round(expectedFutureRev2) + Math.round(expectedFutureRevABNC2) + Math.round(expectedFutureRevFA2)) / Math.round(parseInt(divTwoArray[0].div_2_revenue_2)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((Math.round(expectedFutureProf2) + Math.round(expectedFutureProfABNC2) + Math.round(expectedFutureProfFA2)) / Math.round(parseInt(divTwoArray[0].div_2_profit_2)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((Math.round(expectedFutureBack2) + Math.round(expectedFutureBackABNC2) + Math.round(expectedFutureBackFA2)) / Math.round(parseInt(divTwoArray[0].div_2_revenue_3)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((Math.round(expectedFutureBackProfit2) + Math.round(expectedFutureBackProfitABNC2) + Math.round(expectedFutureBackProfitFA2)) / Math.round(parseInt(divTwoArray[0].div_2_profit_3)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}</th>
      </tr>)

      var finalDivisionArray2 = divisionContracts2.concat(divisionContractsABNC2).concat(divisionContractsFA2)

      finalDivisionArray2.push({Division: `TOTALS`, 'Department Code': ``,
      'Job Name': ``, Status: ``, 'Contract Amount': `${'$' + (Math.round(contractTotal2) + Math.round(contractTotalABNC2) + Math.round(contractTotalFA2)).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Gross Margin': `${'$' + parseFloat(Math.round(profitTotal2) + Math.round(profitABNCTotal2) + Math.round(profitFATotal2)).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${((parseFloat(Math.round(profitTotal2) + Math.round(profitABNCTotal2) + Math.round(profitFATotal2)) / (Math.round(contractTotal2) + Math.round(contractTotalABNC2) + Math.round(contractTotalFA2))) * 100).toFixed(2) + '%'}`, 'Hit Rato': ``,
      Backlog: `${'$' + parseFloat(Math.round(expectedConAmount2) + Math.round(expectedContractAmountABNC2) + Math.round(expectedContractAmountFA2)).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': ``, 'Months': ``,
      Revenue: `${'$' + (Math.round(expectedRevenue2) + Math.round(expectedRevenueABNC2) + Math.round(expectedRevenueFA2)).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + (Math.round(expectedProfit2) + Math.round(expectedProfitABNC2) + Math.round(expectedProfitFA2)).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 2': `${'$' + (Math.round(expectedFutureRev2) + Math.round(expectedFutureRevABNC2) + Math.round(expectedFutureRevFA2)).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + (Math.round(expectedFutureProf2) + Math.round(expectedFutureProfABNC2) + Math.round(expectedFutureProfFA2)).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 3': `${'$' + (Math.round(expectedFutureBack2) + Math.round(expectedFutureBackABNC2) + Math.round(expectedFutureBackFA2)).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + (Math.round(expectedFutureBackProfit2) + Math.round(expectedFutureBackProfitABNC2) + Math.round(expectedFutureBackProfitFA2)).toLocaleString(undefined, {maximumFractionDigits:2})}`
      })

      finalDivisionArray2.push({Division: `Plan`, 'Department Code': ``,
      'Job Name': ``, Status: ``, 'Contract Amount': ``,'Gross Margin': ``, 'Hit Rato': ``,
      Backlog: ``,  'Start Date': ``, 'Months': ``,
      Revenue: `${'$' + (parseInt(divTwoArray[0].div_2_revenue_1)).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + (parseInt(divTwoArray[0].div_2_profit_1)).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 2': `${'$' + (parseInt(divTwoArray[0].div_2_revenue_2)).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + (parseInt(divTwoArray[0].div_2_profit_2)).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 3': `${'$' + (parseInt(divTwoArray[0].div_2_revenue_3)).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + (parseInt(divTwoArray[0].div_2_profit_3)).toLocaleString(undefined, {maximumFractionDigits:2})}`
      })

      finalDivisionArray2.push({Division: ``, 'Department Code': ``,
      'Job Name': ``, Status: ``, 'Contract Amount': ``,'Gross Margin': ``, 'Hit Rato': ``,
      Backlog: ``,  'Start Date': ``, 'Months': ``,
      Revenue: `${((Math.round(expectedRevenue2) + Math.round(expectedRevenueABNC2) + Math.round(expectedRevenueFA2)) / Math.round(parseInt(divTwoArray[0].div_2_revenue_1)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}`, 'Gross Margin $': `${((Math.round(expectedProfit2) + Math.round(expectedProfitABNC2) + Math.round(expectedProfitFA2)) / Math.round(parseInt(divTwoArray[0].div_2_profit_1)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}`,
      'Revenue Year 2': `${((Math.round(expectedFutureRev2) + Math.round(expectedFutureRevABNC2) + Math.round(expectedFutureRevFA2)) / Math.round(parseInt(divTwoArray[0].div_2_revenue_2)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}`, 'Gross Margin $ Year 2': `${((Math.round(expectedFutureProf2) + Math.round(expectedFutureProfABNC2) + Math.round(expectedFutureProfFA2)) / Math.round(parseInt(divTwoArray[0].div_2_profit_2)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}`,
      'Revenue Year 3': `${((Math.round(expectedFutureBack2) + Math.round(expectedFutureBackABNC2) + Math.round(expectedFutureBackFA2)) / Math.round(parseInt(divTwoArray[0].div_2_revenue_3)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}`, 'Gross Margin $ Year 3': `${((Math.round(expectedFutureBackProfit2) + Math.round(expectedFutureBackProfitABNC2) + Math.round(expectedFutureBackProfitFA2)) / Math.round(parseInt(divTwoArray[0].div_2_profit_3)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}`
      })

      mergedCompletedSections2 = finalDivisionArray2.map((x) => x);

      //Division 3

      divisionContractsTotal3.push(<tr key={20002} style={{ fontSize: '17px'}}>
      <th colSpan={3} style={{ textAlign: 'center', border: '1px solid #005A8B'}}>TOTALS CONTRACT: DIVISION 3</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(contractTotal3)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(profitTotal3)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((parseFloat(profitTotal3) / parseFloat(contractTotal3)) * 100) ? ((parseFloat(profitTotal3) / parseFloat(contractTotal3)) * 100).toFixed(2) + '%' : 0}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedConAmount3)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedRevenue3)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedProfit3)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureRev3)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureProf3)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureBack3)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureBackProfit3)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    </tr>)
        divisionContracts3.push({Division: `TOTALS`, 'Department Code': ``,
        'Job Name': ``, Status: ``, 'Contract Amount': `${'$' + Math.round(contractTotal3).toLocaleString(undefined, {maximumFractionDigits:2})}`,
        'Gross Margin': `${'$' + Math.round(profitTotal3).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${((parseFloat(profitTotal3) / parseFloat(contractTotal3)) * 100) ? ((parseFloat(profitTotal3) / parseFloat(contractTotal3)) * 100).toFixed(2) + '%' : 0}`, 'Hit Rato': ``,
        Backlog: `${'$' + (expectedConAmount3).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': ``, 'Months': ``,
        Revenue: `${'$' + Math.round(expectedRevenue3).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + Math.round(expectedProfit3).toLocaleString(undefined, {maximumFractionDigits:2})}`,
        'Revenue Year 2': `${'$' + Math.round(expectedFutureRev3).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + Math.round(expectedFutureProf3).toLocaleString(undefined, {maximumFractionDigits:2})}`,
        'Revenue Year 3': `${'$' + Math.round(expectedFutureBack3).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + Math.round(expectedFutureBackProfit3).toLocaleString(undefined, {maximumFractionDigits:2})}`
      })

      divisionABNCTotal3.push(<tr key={20002} style={{ fontSize: '17px'}}>
      <th colSpan={3} style={{ textAlign: 'center', border: '1px solid #005A8B'}}>TOTALS ABNC: DIVISION 3</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(contractTotalABNC3)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(profitABNCTotal3)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((parseFloat(profitABNCTotal3) / parseFloat(contractTotalABNC3)) * 100) ? ((parseFloat(profitABNCTotal3) / parseFloat(contractTotalABNC3)) * 100).toFixed(2) + '%' : 0}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedContractAmountABNC3)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedRevenueABNC3)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedProfitABNC3)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureRevABNC3)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureProfABNC3)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureBackABNC3)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureBackProfitABNC3)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    </tr>)

    divisionContractsABNC2.push({Division: `TOTALS`, 'Department Code': ``,
      'Job Name': ``, Status: ``, 'Contract Amount': `${'$' + Math.round(contractTotalABNC3).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Gross Margin': `${'$' + Math.round(profitABNCTotal3).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${((parseFloat(profitABNCTotal3) / parseFloat(contractTotalABNC3)) * 100) ? ((parseFloat(profitABNCTotal3) / parseFloat(contractTotalABNC3)) * 100).toFixed(2) + '%' : 0}`, 'Hit Rato': ``,
      Backlog: `${'$' + parseFloat(Math.round(expectedContractAmountABNC3)).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': ``, 'Months': ``,
      Revenue: `${'$' + parseFloat(Math.round(expectedRevenueABNC3)).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + parseFloat(Math.round(expectedProfitABNC3)).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 2': `${'$' + parseFloat(Math.round(expectedFutureRevABNC3)).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + parseFloat(Math.round(expectedFutureProfABNC3)).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 3': `${'$' + parseFloat(Math.round(expectedFutureBackABNC3)).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + parseFloat(Math.round(expectedFutureBackProfitABNC3)).toLocaleString(undefined, {maximumFractionDigits:2})}`
      })

      divisionFATotal3.push(<tr key={20002} style={{ fontSize: '17px'}}>
      <th colSpan={3} style={{ textAlign: 'center', border: '1px solid #005A8B'}}>TOTALS FA: DIVISION 3</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(contractTotalFA3)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(profitFATotal3)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((parseFloat(profitFATotal3) / parseFloat(contractTotalFA3)) * 100) ? ((parseFloat(profitFATotal3) / parseFloat(contractTotalFA3)) * 100).toFixed(2) + '%' : 0}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedContractAmountFA3)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedRevenueFA3)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedProfitFA3)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureRevFA3)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureProfFA3)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureBackFA3)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureBackProfitFA3)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    </tr>)

    divisionContractsFA3.push({Division: `TOTALS`, 'Department Code': ``,
      'Job Name': ``, Status: ``, 'Contract Amount': `${'$' + Math.round(contractTotalFA3).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Gross Margin': `${'$' + Math.round(profitFATotal3).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${((parseFloat(profitFATotal3) / parseFloat(contractTotalFA3)) * 100) ? ((parseFloat(profitFATotal3) / parseFloat(contractTotalFA3)) * 100).toFixed(2) + '%' : 0}`, 'Hit Rato': ``,
      Backlog: `${'$' + (expectedContractAmountFA3).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': ``, 'Months': ``,
      Revenue: `${'$' + Math.round(expectedRevenueFA3).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + Math.round(expectedProfitFA3).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 2': `${'$' + Math.round(expectedFutureRevFA3).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + Math.round(expectedFutureProfFA3).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 3': `${'$' + Math.round(expectedFutureBackFA3).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + Math.round(expectedFutureBackProfitFA3).toLocaleString(undefined, {maximumFractionDigits:2})}`
      })

      divisionCombinedTotal3.push(<tr key={20002} style={{ fontSize: '17px'}}>
      <th colSpan={3} style={{ textAlign: 'center', border: '1px solid #005A8B'}}>TOTALS COMBINED: DIVISION 3</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(contractTotal3) + Math.round(contractTotalABNC3) + Math.round(contractTotalFA3)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(profitTotal3) + Math.round(profitABNCTotal3) + Math.round(profitFATotal3)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((parseFloat(Math.round(profitTotal3) + Math.round(profitABNCTotal3) + Math.round(profitFATotal3)) / (Math.round(contractTotal3) + Math.round(contractTotalABNC3) + Math.round(contractTotalFA3))) * 100) ? ((parseFloat(Math.round(profitTotal3) + Math.round(profitABNCTotal3) + Math.round(profitFATotal3)) / (Math.round(contractTotal3) + Math.round(contractTotalABNC3) + Math.round(contractTotalFA3))) * 100).toFixed(2) + '%' : 0}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedConAmount3) + Math.round(expectedContractAmountABNC3) + Math.round(expectedContractAmountFA3)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(expectedRevenue3) + Math.round(expectedRevenueABNC3) + Math.round(expectedRevenueFA3)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(expectedProfit3) + Math.round(expectedProfitABNC3) + Math.round(expectedProfitFA3)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(expectedFutureRev3) + Math.round(expectedFutureRevABNC3) + Math.round(expectedFutureRevFA3)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(expectedFutureProf3) + Math.round(expectedFutureProfABNC3) + Math.round(expectedFutureProfFA3)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(expectedFutureBack3) + Math.round(expectedFutureBackABNC3) + Math.round(expectedFutureBackFA3)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(expectedFutureBackProfit3) + Math.round(expectedFutureBackProfitABNC3) + Math.round(expectedFutureBackProfitFA3)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    </tr>)

    divisionCombinedTotalPlanThree.push(<tr key={20002} style={{ fontSize: '17px'}}>
    <th colSpan={3} style={{ textAlign: 'center', border: '1px solid #005A8B'}}>Plan Projection</th>
    <th style={{ textAlign: 'center'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (parseInt(divThreeArray[0].div_3_revenue_1)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (parseInt(divThreeArray[0].div_3_profit_1)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (parseInt(divThreeArray[0].div_3_revenue_2)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (parseInt(divThreeArray[0].div_3_profit_2)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (parseInt(divThreeArray[0].div_3_revenue_3)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (parseInt(divThreeArray[0].div_3_profit_3)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    </tr>)

    divisionCombinedTotalPlanPercentThree.push(<tr key={20002} style={{ fontSize: '17px'}}>
    <th colSpan={3} style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{Math.round(parseInt(divThreeArray[0].div_3_revenue_1)) ? ((Math.round(expectedRevenue3) + Math.round(expectedRevenueABNC3) + Math.round(expectedRevenueFA3)) / Math.round(parseInt(divThreeArray[0].div_3_revenue_1)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%' : 0}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{Math.round(parseInt(divThreeArray[0].div_3_profit_1)) ? ((Math.round(expectedProfit3) + Math.round(expectedProfitABNC3) + Math.round(expectedProfitFA3)) / Math.round(parseInt(divThreeArray[0].div_3_profit_1)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%' : 0}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{Math.round(parseInt(divThreeArray[0].div_3_revenue_2)) ? ((Math.round(expectedFutureRev3) + Math.round(expectedFutureRevABNC3) + Math.round(expectedFutureRevFA3)) / Math.round(parseInt(divThreeArray[0].div_3_revenue_2)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%' : 0}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{Math.round(parseInt(divThreeArray[0].div_3_profit_2)) ? ((Math.round(expectedFutureProf3) + Math.round(expectedFutureProfABNC3) + Math.round(expectedFutureProfFA3)) / Math.round(parseInt(divThreeArray[0].div_3_profit_2)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%' : 0}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{Math.round(parseInt(divThreeArray[0].div_3_revenue_3)) ? ((Math.round(expectedFutureBack3) + Math.round(expectedFutureBackABNC3) + Math.round(expectedFutureBackFA3)) / Math.round(parseInt(divThreeArray[0].div_3_revenue_3)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%' : 0}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{Math.round(parseInt(divThreeArray[0].div_3_profit_3)) ? ((Math.round(expectedFutureBackProfit3) + Math.round(expectedFutureBackProfitABNC3) + Math.round(expectedFutureBackProfitFA3)) / Math.round(parseInt(divThreeArray[0].div_3_profit_3)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%' : 0}</th>
    </tr>)

    var finalDivisionArray3 = divisionContracts3.concat(divisionContractsABNC3).concat(divisionContractsFA3)

    finalDivisionArray3.push({Division: `TOTALS`, 'Department Code': ``,
      'Job Name': ``, Status: ``, 'Contract Amount': `${'$' + (Math.round(contractTotal3) + Math.round(contractTotalABNC3) + Math.round(contractTotalFA3)).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Gross Margin': `${'$' + parseFloat(Math.round(profitTotal3) + Math.round(profitABNCTotal3) + Math.round(profitFATotal3)).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${((parseFloat(Math.round(profitTotal3) + Math.round(profitABNCTotal3) + Math.round(profitFATotal3)) / (Math.round(contractTotal3) + Math.round(contractTotalABNC3) + Math.round(contractTotalFA3))) * 100) ? ((parseFloat(Math.round(profitTotal3) + Math.round(profitABNCTotal3) + Math.round(profitFATotal3)) / (Math.round(contractTotal3) + Math.round(contractTotalABNC3) + Math.round(contractTotalFA3))) * 100).toFixed(2) + '%' : 0}`, 'Hit Rato': ``,
      Backlog: `${'$' + parseFloat(Math.round(expectedConAmount3) + Math.round(expectedContractAmountABNC3) + Math.round(expectedContractAmountFA3)).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': ``, 'Months': ``,
      Revenue: `${'$' + (Math.round(expectedRevenue3) + Math.round(expectedRevenueABNC3) + Math.round(expectedRevenueFA3)).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + (Math.round(expectedProfit3) + Math.round(expectedProfitABNC3) + Math.round(expectedProfitFA3)).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 2': `${'$' + (Math.round(expectedFutureRev3) + Math.round(expectedFutureRevABNC3) + Math.round(expectedFutureRevFA3)).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + (Math.round(expectedFutureProf3) + Math.round(expectedFutureProfABNC3) + Math.round(expectedFutureProfFA3)).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 3': `${'$' + (Math.round(expectedFutureBack3) + Math.round(expectedFutureBackABNC3) + Math.round(expectedFutureBackFA3)).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + (Math.round(expectedFutureBackProfit3) + Math.round(expectedFutureBackProfitABNC3) + Math.round(expectedFutureBackProfitFA3)).toLocaleString(undefined, {maximumFractionDigits:2})}`
      })

      finalDivisionArray3.push({Division: `Plan`, 'Department Code': ``,
      'Job Name': ``, Status: ``, 'Contract Amount': ``,'Gross Margin': ``, 'Hit Rato': ``,
      Backlog: ``,  'Start Date': ``, 'Months': ``,
      Revenue: `${'$' + (parseInt(divThreeArray[0].div_3_revenue_1)).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + (parseInt(divThreeArray[0].div_3_profit_1)).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 2': `${'$' + (parseInt(divThreeArray[0].div_3_revenue_2)).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + (parseInt(divThreeArray[0].div_3_profit_2)).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 3': `${'$' + (parseInt(divThreeArray[0].div_3_revenue_3)).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + (parseInt(divThreeArray[0].div_3_profit_3)).toLocaleString(undefined, {maximumFractionDigits:2})}`
      })

      finalDivisionArray3.push({Division: ``, 'Department Code': ``,
      'Job Name': ``, Status: ``, 'Contract Amount': ``,'Gross Margin': ``, 'Hit Rato': ``,
      Backlog: ``,  'Start Date': ``, 'Months': ``,
      Revenue: `${Math.round(parseInt(divThreeArray[0].div_3_revenue_1)) ? ((Math.round(expectedRevenue3) + Math.round(expectedRevenueABNC3) + Math.round(expectedRevenueFA3)) / Math.round(parseInt(divThreeArray[0].div_3_revenue_1)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%' : 0}`, 'Gross Margin $': `${Math.round(parseInt(divThreeArray[0].div_3_profit_1)) ? ((Math.round(expectedProfit3) + Math.round(expectedProfitABNC3) + Math.round(expectedProfitFA3)) / Math.round(parseInt(divThreeArray[0].div_3_profit_1)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%' : 0}`,
      'Revenue Year 2': `${Math.round(parseInt(divThreeArray[0].div_3_revenue_2)) ? ((Math.round(expectedFutureRev3) + Math.round(expectedFutureRevABNC3) + Math.round(expectedFutureRevFA3)) / Math.round(parseInt(divThreeArray[0].div_3_revenue_2)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%' : 0}`, 'Gross Margin $ Year 2': `${Math.round(parseInt(divThreeArray[0].div_3_profit_2)) ? ((Math.round(expectedFutureProf3) + Math.round(expectedFutureProfABNC3) + Math.round(expectedFutureProfFA3)) / Math.round(parseInt(divThreeArray[0].div_3_profit_2)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%' : 0}`,
      'Revenue Year 3': `${Math.round(parseInt(divThreeArray[0].div_3_revenue_3)) ? ((Math.round(expectedFutureBack3) + Math.round(expectedFutureBackABNC3) + Math.round(expectedFutureBackFA3)) / Math.round(parseInt(divThreeArray[0].div_3_revenue_3)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%' : 0}`, 'Gross Margin $ Year 3': `${Math.round(parseInt(divThreeArray[0].div_3_profit_3)) ? ((Math.round(expectedFutureBackProfit3) + Math.round(expectedFutureBackProfitABNC3) + Math.round(expectedFutureBackProfitFA3)) / Math.round(parseInt(divThreeArray[0].div_3_profit_3)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%' : 0}`
      })

      mergedCompletedSections3 = finalDivisionArray3.map((x) => x);

      //Division 4

      divisionContractsTotal4.push(<tr key={20002} style={{ fontSize: '17px'}}>
      <th colSpan={3} style={{ textAlign: 'center', border: '1px solid #005A8B'}}>TOTALS CONTRACT: DIVISION 4</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(contractTotal4)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(profitTotal4)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((parseFloat(profitTotal4) / parseFloat(contractTotal4)) * 100) ? ((parseFloat(profitTotal4) / parseFloat(contractTotal4)) * 100).toFixed(2) + '%' : 0}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedConAmount4)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedRevenue4)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedProfit4)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureRev4)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureProf4)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureBack4)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureBackProfit4)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    </tr>)
        divisionContracts4.push({Division: `TOTALS`, 'Department Code': ``,
        'Job Name': ``, Status: ``, 'Contract Amount': `${'$' + Math.round(contractTotal4).toLocaleString(undefined, {maximumFractionDigits:2})}`,
        'Gross Margin': `${'$' + Math.round(profitTotal4).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${((parseFloat(profitTotal4) / parseFloat(contractTotal4)) * 100).toFixed(2) + '%'}`, 'Hit Rato': ``,
        Backlog: `${'$' + (expectedConAmount4).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': ``, 'Months': ``,
        Revenue: `${'$' + Math.round(expectedRevenue4).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + Math.round(expectedProfit4).toLocaleString(undefined, {maximumFractionDigits:2})}`,
        'Revenue Year 2': `${'$' + Math.round(expectedFutureRev4).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + Math.round(expectedFutureProf4).toLocaleString(undefined, {maximumFractionDigits:2})}`,
        'Revenue Year 3': `${'$' + Math.round(expectedFutureBack4).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + Math.round(expectedFutureBackProfit4).toLocaleString(undefined, {maximumFractionDigits:2})}`
      })

      divisionABNCTotal4.push(<tr key={20002} style={{ fontSize: '17px'}}>
      <th colSpan={3} style={{ textAlign: 'center', border: '1px solid #005A8B'}}>TOTALS ABNC: DIVISION 4</th>
      <th style={{ textAlign: 'center',  border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(contractTotalABNC4)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(profitABNCTotal4)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((parseFloat(profitABNCTotal4) / parseFloat(contractTotalABNC4)) * 100) ? ((parseFloat(profitABNCTotal4) / parseFloat(contractTotalABNC4)) * 100).toFixed(2) + '%' : 0}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedContractAmountABNC4)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedRevenueABNC4)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedProfitABNC4)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureRevABNC4)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureProfABNC4)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureBackABNC4)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureBackProfitABNC4)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    </tr>)

      divisionContractsABNC4.push({Division: `TOTALS`, 'Department Code': ``,
      'Job Name': ``, Status: ``, 'Contract Amount': `${'$' + Math.round(contractTotalABNC4).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Gross Margin': `${'$' + Math.round(profitABNCTotal4).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${((parseFloat(profitABNCTotal4) / parseFloat(contractTotalABNC4)) * 100).toFixed(2) + '%'}`, 'Hit Rato': ``,
      Backlog: `${'$' + (expectedContractAmountABNC4).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': ``, 'Months': ``,
      Revenue: `${'$' + Math.round(expectedRevenueABNC4).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + Math.round(expectedProfitABNC4).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 2': `${'$' + Math.round(expectedFutureRevABNC4).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + Math.round(expectedFutureProfABNC4).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 3': `${'$' + Math.round(expectedFutureBackABNC4).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + Math.round(expectedFutureBackProfitABNC4).toLocaleString(undefined, {maximumFractionDigits:2})}`
      })

      divisionFATotal4.push(<tr key={20002} style={{ fontSize: '17px'}}>
      <th colSpan={3} style={{ textAlign: 'center', border: '1px solid #005A8B'}}>TOTALS FA: DIVISION 4</th>
      <th style={{ textAlign: 'center',  border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(contractTotalFA4)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(profitFATotal4)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((parseFloat(profitFATotal4) / parseFloat(contractTotalFA4)) * 100) ? ((parseFloat(profitFATotal4) / parseFloat(contractTotalFA4)) * 100).toFixed(2) + '%' : 0}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedContractAmountFA4)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedRevenueFA4)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedProfitFA4)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureRevFA4)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureProfFA4)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureBackFA4)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureBackProfitFA4)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    </tr>)

      divisionContractsFA4.push({Division: `TOTALS`, 'Department Code': ``,
      'Job Name': ``, Status: ``, 'Contract Amount': `${'$' + Math.round(contractTotalFA4).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Gross Margin': `${'$' + Math.round(profitFATotal4).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${((parseFloat(profitFATotal4) / parseFloat(contractTotalFA4)) * 100).toFixed(2) + '%'}`, 'Hit Rato': ``,
      Backlog: `${'$' + (expectedContractAmountFA4).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': ``, 'Months': ``,
      Revenue: `${'$' + Math.round(expectedRevenueFA4).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + Math.round(expectedProfitFA4).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 2': `${'$' + Math.round(expectedFutureRevFA4).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + Math.round(expectedFutureProfFA4).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 3': `${'$' + Math.round(expectedFutureBackFA4).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + Math.round(expectedFutureBackProfitFA4).toLocaleString(undefined, {maximumFractionDigits:2})}`
      })

      divisionCombinedTotal4.push(<tr key={20002} style={{ fontSize: '17px'}}>
      <th colSpan={3} style={{ textAlign: 'center', border: '1px solid #005A8B'}}>TOTALS COMBINED: DIVISION 4</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(contractTotal4) + Math.round(contractTotalABNC4) + Math.round(contractTotalFA4)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(profitTotal4) + Math.round(profitABNCTotal4) + Math.round(profitFATotal4)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((parseFloat(Math.round(profitTotal4) + Math.round(profitABNCTotal4) + Math.round(profitFATotal4)) / (Math.round(contractTotal4) + Math.round(contractTotalABNC4) + Math.round(contractTotalFA4))) * 100).toFixed(2) + '%'}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedConAmount4) + Math.round(expectedContractAmountABNC4) + Math.round(expectedContractAmountFA4)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(expectedRevenue4) + Math.round(expectedRevenueABNC4) + Math.round(expectedRevenueFA4)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(expectedProfit4) + Math.round(expectedProfitABNC4) + Math.round(expectedProfitFA4)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(expectedFutureRev4) + Math.round(expectedFutureRevABNC4) + Math.round(expectedFutureRevFA4)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(expectedFutureProf4) + Math.round(expectedFutureProfABNC4) + Math.round(expectedFutureProfFA4)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(expectedFutureBack4) + Math.round(expectedFutureBackABNC4) + Math.round(expectedFutureBackFA4)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(expectedFutureBackProfit4) + Math.round(expectedFutureBackProfitABNC4) + Math.round(expectedFutureBackProfitFA4)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    </tr>)

    divisionCombinedTotalPlanFour.push(<tr key={20002} style={{ fontSize: '17px'}}>
    <th colSpan={3} style={{ textAlign: 'center', border: '1px solid #005A8B'}}>Plan Projection</th>
    <th style={{ textAlign: 'center'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (parseInt(divFourArray[0].div_4_revenue_1)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (parseInt(divFourArray[0].div_4_profit_1)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (parseInt(divFourArray[0].div_4_revenue_2)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (parseInt(divFourArray[0].div_4_profit_2)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (parseInt(divFourArray[0].div_4_revenue_3)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (parseInt(divFourArray[0].div_4_profit_3)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    </tr>)

    divisionCombinedTotalPlanPercentFour.push(<tr key={20002} style={{ fontSize: '17px'}}>
    <th colSpan={3} style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((Math.round(expectedRevenue4) + Math.round(expectedRevenueABNC4) + Math.round(expectedRevenueFA4)) / Math.round(parseInt(divFourArray[0].div_4_revenue_1)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((Math.round(expectedProfit4) + Math.round(expectedProfitABNC4) + Math.round(expectedProfitFA4)) / Math.round(parseInt(divFourArray[0].div_4_profit_1)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((Math.round(expectedFutureRev4) + Math.round(expectedFutureRevABNC4) + Math.round(expectedFutureRevFA4)) / Math.round(parseInt(divFourArray[0].div_4_revenue_2)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((Math.round(expectedFutureProf4) + Math.round(expectedFutureProfABNC4) + Math.round(expectedFutureProfFA4)) / Math.round(parseInt(divFourArray[0].div_4_profit_2)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((Math.round(expectedFutureBack4) + Math.round(expectedFutureBackABNC4) + Math.round(expectedFutureBackFA4)) / Math.round(parseInt(divFourArray[0].div_4_revenue_3)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((Math.round(expectedFutureBackProfit4) + Math.round(expectedFutureBackProfitABNC4) + Math.round(expectedFutureBackProfitFA4)) / Math.round(parseInt(divFourArray[0].div_4_profit_3)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}</th>
    </tr>)

      var finalDivisionArray4 = divisionContracts4.concat(divisionContractsABNC4).concat(divisionContractsFA4)


      finalDivisionArray4.push({Division: `TOTALS`, 'Department Code': ``,
      'Job Name': ``, Status: ``, 'Contract Amount': `${'$' + (Math.round(contractTotal4) + Math.round(contractTotalABNC4) + Math.round(contractTotalFA4)).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Gross Margin': `${'$' + parseFloat(Math.round(profitTotal4) + Math.round(profitABNCTotal4) + Math.round(profitFATotal4)).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${((parseFloat(Math.round(profitTotal4) + Math.round(profitABNCTotal4) + Math.round(profitFATotal4)) / (Math.round(contractTotal4) + Math.round(contractTotalABNC4) + Math.round(contractTotalFA4))) * 100).toFixed(2) + '%'}`, 'Hit Rato': ``,
      Backlog: `${'$' + parseFloat(Math.round(expectedConAmount4) + Math.round(expectedContractAmountABNC4) + Math.round(expectedContractAmountFA4)).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': ``, 'Months': ``,
      Revenue: `${'$' + (Math.round(expectedRevenue4) + Math.round(expectedRevenueABNC4) + Math.round(expectedRevenueFA4)).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + (Math.round(expectedProfit4) + Math.round(expectedProfitABNC4) + Math.round(expectedProfitFA4)).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 2': `${'$' + (Math.round(expectedFutureRev) + Math.round(expectedFutureRevABNC4) + Math.round(expectedFutureRevFA4)).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + (Math.round(expectedFutureProf4) + Math.round(expectedFutureProfABNC4) + Math.round(expectedFutureProfFA4)).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 3': `${'$' + (Math.round(expectedFutureBack4) + Math.round(expectedFutureBackABNC4) + Math.round(expectedFutureBackFA4)).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + (Math.round(expectedFutureBackProfit4) + Math.round(expectedFutureBackProfitABNC4) + Math.round(expectedFutureBackProfitFA4)).toLocaleString(undefined, {maximumFractionDigits:2})}`
      })

      finalDivisionArray4.push({Division: `Plan`, 'Department Code': ``,
      'Job Name': ``, Status: ``, 'Contract Amount': ``,'Gross Margin': ``, 'Hit Rato': ``,
      Backlog: ``,  'Start Date': ``, 'Months': ``,
      Revenue: `${'$' + (parseInt(divFourArray[0].div_4_revenue_1)).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + (parseInt(divFourArray[0].div_4_profit_1)).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 2': `${'$' + (parseInt(divFourArray[0].div_4_revenue_2)).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + (parseInt(divFourArray[0].div_4_profit_2)).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 3': `${'$' + (parseInt(divFourArray[0].div_4_revenue_3)).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + (parseInt(divFourArray[0].div_4_profit_3)).toLocaleString(undefined, {maximumFractionDigits:2})}`
      })

      finalDivisionArray4.push({Division: ``, 'Department Code': ``,
      'Job Name': ``, Status: ``, 'Contract Amount': ``,'Gross Margin': ``, 'Hit Rato': ``,
      Backlog: ``,  'Start Date': ``, 'Months': ``,
      Revenue: `${((Math.round(expectedRevenue4) + Math.round(expectedRevenueABNC4) + Math.round(expectedRevenueFA4)) / Math.round(parseInt(divFourArray[0].div_4_revenue_1)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}`, 'Gross Margin $': `${((Math.round(expectedProfit4) + Math.round(expectedProfitABNC4) + Math.round(expectedProfitFA4)) / Math.round(parseInt(divFourArray[0].div_4_profit_1)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}`,
      'Revenue Year 2': `${((Math.round(expectedFutureRev4) + Math.round(expectedFutureRevABNC4) + Math.round(expectedFutureRevFA4)) / Math.round(parseInt(divFourArray[0].div_4_revenue_2)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}`, 'Gross Margin $ Year 2': `${((Math.round(expectedFutureProf4) + Math.round(expectedFutureProfABNC4) + Math.round(expectedFutureProfFA4)) / Math.round(parseInt(divFourArray[0].div_4_profit_2)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}`,
      'Revenue Year 3': `${((Math.round(expectedFutureBack4) + Math.round(expectedFutureBackABNC4) + Math.round(expectedFutureBackFA4)) / Math.round(parseInt(divFourArray[0].div_4_revenue_3)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}`, 'Gross Margin $ Year 3': `${((Math.round(expectedFutureBackProfit4) + Math.round(expectedFutureBackProfitABNC4) + Math.round(expectedFutureBackProfitFA4)) / Math.round(parseInt(divFourArray[0].div_4_profit_3)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}`
      })

      mergedCompletedSections4 = finalDivisionArray4.map((x) => x);

      //Division 5

      divisionContractsTotal5.push(<tr key={20002} style={{ fontSize: '17px'}}>
      <th colSpan={3} style={{ textAlign: 'center', border: '1px solid #005A8B'}}>TOTALS CONTRACT: DIVISION 5</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(contractTotal5)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(profitTotal5)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((parseFloat(profitTotal5) / parseFloat(contractTotal5)) * 100) ? ((parseFloat(profitTotal5) / parseFloat(contractTotal5)) * 100).toFixed(2) + '%' : 0}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedConAmount5)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedRevenue5)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedProfit5)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureRev5)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureProf5)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureBack5)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureBackProfit5)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    </tr>)
        divisionContracts5.push({Division: `TOTALS`, 'Department Code': ``,
        'Job Name': ``, Status: ``, 'Contract Amount': `${'$' + Math.round(contractTotal5).toLocaleString(undefined, {maximumFractionDigits:2})}`,
        'Gross Margin': `${'$' + Math.round(profitTotal5).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${((parseFloat(profitTotal5) / parseFloat(contractTotal5)) * 100).toFixed(2) + '%'}`, 'Hit Rato': ``,
        Backlog: `${'$' + (expectedConAmount5).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': ``, 'Months': ``,
        Revenue: `${'$' + Math.round(expectedRevenue5).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + Math.round(expectedProfit5).toLocaleString(undefined, {maximumFractionDigits:2})}`,
        'Revenue Year 2': `${'$' + Math.round(expectedFutureRev5).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + Math.round(expectedFutureProf5).toLocaleString(undefined, {maximumFractionDigits:2})}`,
        'Revenue Year 3': `${'$' + Math.round(expectedFutureBack5).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + Math.round(expectedFutureBackProfit5).toLocaleString(undefined, {maximumFractionDigits:2})}`
      })

      divisionABNCTotal5.push(<tr key={20002} style={{ fontSize: '17px'}}>
      <th colSpan={3} style={{ textAlign: 'center', border: '1px solid #005A8B'}}>TOTALS ABNC: DIVISION 5</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(contractTotalABNC5)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(profitABNCTotal5)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((parseFloat(profitABNCTotal5) / parseFloat(contractTotalABNC5)) * 100) ? ((parseFloat(profitABNCTotal5) / parseFloat(contractTotalABNC5)) * 100).toFixed(2) + '%' : 0}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedContractAmountABNC5)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedRevenueABNC5)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedProfitABNC5)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureRevABNC5)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureProfABNC5)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureBackABNC5)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureBackProfitABNC5)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    </tr>)

      divisionContractsABNC5.push({Division: `TOTALS`, 'Department Code': ``,
      'Job Name': ``, Status: ``, 'Contract Amount': `${'$' + Math.round(contractTotalABNC5).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Gross Margin': `${'$' + Math.round(profitABNCTotal5).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${((parseFloat(profitABNCTotal5) / parseFloat(contractTotalABNC5)) * 100).toFixed(2) + '%'}`, 'Hit Rato': ``,
      Backlog: `${'$' + (expectedContractAmountABNC5).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': ``, 'Months': ``,
      Revenue: `${'$' + Math.round(expectedRevenueABNC5).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + Math.round(expectedProfitABNC5).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 2': `${'$' + Math.round(expectedFutureRevABNC5).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + Math.round(expectedFutureProfABNC5).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 3': `${'$' + Math.round(expectedFutureBackABNC5).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + Math.round(expectedFutureBackProfitABNC5).toLocaleString(undefined, {maximumFractionDigits:2})}`
      })

      divisionFATotal5.push(<tr key={20002} style={{ fontSize: '17px'}}>
      <th colSpan={3} style={{ textAlign: 'center', border: '1px solid #005A8B'}}>TOTALS FA: DIVISION 5</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(contractTotalFA5)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(profitFATotal5)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((parseFloat(profitFATotal5) / parseFloat(contractTotalFA5)) * 100) ? ((parseFloat(profitFATotal5) / parseFloat(contractTotalFA5)) * 100).toFixed(2) + '%' : 0}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedContractAmountFA5)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedRevenueFA5)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedProfitFA5)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureRevFA5)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureProfFA5)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureBackFA5)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureBackProfitFA5)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    </tr>)

      divisionContractsFA5.push({Division: `TOTALS`, 'Department Code': ``,
      'Job Name': ``, Status: ``, 'Contract Amount': `${'$' + Math.round(contractTotalFA5).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Gross Margin': `${'$' + Math.round(profitFATotal5).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${((parseFloat(profitFATotal5) / parseFloat(contractTotalFA5)) * 100).toFixed(2) + '%'}`, 'Hit Rato': ``,
      Backlog: `${'$' + (expectedContractAmountFA5).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': ``, 'Months': ``,
      Revenue: `${'$' + Math.round(expectedRevenueFA5).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + Math.round(expectedProfitFA5).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 2': `${'$' + Math.round(expectedFutureRevFA5).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + Math.round(expectedFutureProfFA5).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 3': `${'$' + Math.round(expectedFutureBackFA5).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + Math.round(expectedFutureBackProfitFA5).toLocaleString(undefined, {maximumFractionDigits:2})}`
      })

      divisionCombinedTotal5.push(<tr key={20002} style={{ fontSize: '17px'}}>
      <th colSpan={3} style={{ textAlign: 'center', border: '1px solid #005A8B'}}>TOTALS COMBINED: DIVISION 5</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(contractTotal5) + Math.round(contractTotalABNC5) + Math.round(contractTotalFA5)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(profitTotal5) + Math.round(profitABNCTotal5) + Math.round(profitFATotal5)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((parseFloat(Math.round(profitTotal5) + Math.round(profitABNCTotal5) + Math.round(profitFATotal5)) / (Math.round(contractTotal5) + Math.round(contractTotalABNC5) + Math.round(contractTotalFA5))) * 100).toFixed(2) + '%'}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedConAmount5) + Math.round(expectedContractAmountABNC5) + Math.round(expectedContractAmountFA5)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(expectedRevenue5) + Math.round(expectedRevenueABNC5) + Math.round(expectedRevenueFA5)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(expectedProfit5) + Math.round(expectedProfitABNC5) + Math.round(expectedProfitFA5)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(expectedFutureRev5) + Math.round(expectedFutureRevABNC5) + Math.round(expectedFutureRevFA5)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(expectedFutureProf5) + Math.round(expectedFutureProfABNC5) + Math.round(expectedFutureProfFA5)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(expectedFutureBack5) + Math.round(expectedFutureBackABNC5) + Math.round(expectedFutureBackFA5)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(expectedFutureBackProfit5) + Math.round(expectedFutureBackProfitABNC5) + Math.round(expectedFutureBackProfitFA5)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    </tr>)

    divisionCombinedTotalPlanFive.push(<tr key={20002} style={{ fontSize: '17px'}}>
    <th colSpan={3} style={{ textAlign: 'center', border: '1px solid #005A8B'}}>Plan Projection</th>
    <th style={{ textAlign: 'center'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (parseInt(divFiveArray[0].div_5_revenue_1)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (parseInt(divFiveArray[0].div_5_profit_1)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (parseInt(divFiveArray[0].div_5_revenue_2)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (parseInt(divFiveArray[0].div_5_profit_2)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (parseInt(divFiveArray[0].div_5_revenue_3)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (parseInt(divFiveArray[0].div_5_profit_3)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    </tr>)

    divisionCombinedTotalPlanPercentFive.push(<tr key={20002} style={{ fontSize: '17px'}}>
    <th colSpan={3} style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((Math.round(expectedRevenue5) + Math.round(expectedRevenueABNC5) + Math.round(expectedRevenueFA5)) / Math.round(parseInt(divFiveArray[0].div_5_revenue_1)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((Math.round(expectedProfit5) + Math.round(expectedProfitABNC5) + Math.round(expectedProfitFA5)) / Math.round(parseInt(divFiveArray[0].div_5_profit_1)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((Math.round(expectedFutureRev5) + Math.round(expectedFutureRevABNC5) + Math.round(expectedFutureRevFA5)) / Math.round(parseInt(divFiveArray[0].div_5_revenue_2)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((Math.round(expectedFutureProf5) + Math.round(expectedFutureProfABNC5) + Math.round(expectedFutureProfFA5)) / Math.round(parseInt(divFiveArray[0].div_5_profit_2)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((Math.round(expectedFutureBack5) + Math.round(expectedFutureBackABNC5) + Math.round(expectedFutureBackFA5)) / Math.round(parseInt(divFiveArray[0].div_5_revenue_3)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((Math.round(expectedFutureBackProfit5) + Math.round(expectedFutureBackProfitABNC5) + Math.round(expectedFutureBackProfitFA5)) / Math.round(parseInt(divFiveArray[0].div_5_profit_3)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}</th>
    </tr>)

      var finalDivisionArray5 = divisionContracts5.concat(divisionContractsABNC5).concat(divisionContractsFA5)

      finalDivisionArray5.push({Division: `TOTALS`, 'Department Code': ``,
      'Job Name': ``, Status: ``, 'Contract Amount': `${'$' + (Math.round(contractTotal5) + Math.round(contractTotalABNC5) + Math.round(contractTotalFA5)).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Gross Margin': `${'$' + parseFloat(Math.round(profitTotal5) + Math.round(profitABNCTotal5) + Math.round(profitFATotal5)).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${((parseFloat(Math.round(profitTotal5) + Math.round(profitABNCTotal5) + Math.round(profitFATotal5)) / (Math.round(contractTotal5) + Math.round(contractTotalABNC5) + Math.round(contractTotalFA5))) * 100).toFixed(2) + '%'}`, 'Hit Rato': ``,
      Backlog: `${'$' + parseFloat(Math.round(expectedConAmount5) + Math.round(expectedContractAmountABNC5) + Math.round(expectedContractAmountFA5)).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': ``, 'Months': ``,
      Revenue: `${'$' +(Math.round(expectedRevenue5) + Math.round(expectedRevenueABNC5) + Math.round(expectedRevenueFA5)).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + (Math.round(expectedProfit5) + Math.round(expectedProfitABNC5) + Math.round(expectedProfitFA5)).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 2': `${'$' + (Math.round(expectedFutureRev5) + Math.round(expectedFutureRevABNC5) + Math.round(expectedFutureRevFA5)).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + (Math.round(expectedFutureProf5) + Math.round(expectedFutureProfABNC5) + Math.round(expectedFutureProfFA5)).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 3': `${'$' + (Math.round(expectedFutureBack5) + Math.round(expectedFutureBackABNC5) + Math.round(expectedFutureBackFA5)).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + (Math.round(expectedFutureBackProfit5) + Math.round(expectedFutureBackProfitABNC5) + Math.round(expectedFutureBackProfitFA5)).toLocaleString(undefined, {maximumFractionDigits:2})}`
      })

      finalDivisionArray5.push({Division: `Plan`, 'Department Code': ``,
      'Job Name': ``, Status: ``, 'Contract Amount': ``,'Gross Margin': ``, 'Hit Rato': ``,
      Backlog: ``,  'Start Date': ``, 'Months': ``,
      Revenue: `${'$' + (parseInt(divFiveArray[0].div_5_revenue_1)).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + (parseInt(divFiveArray[0].div_5_profit_1)).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 2': `${'$' + (parseInt(divFiveArray[0].div_5_revenue_2)).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + (parseInt(divFiveArray[0].div_5_profit_2)).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 3': `${'$' + (parseInt(divFiveArray[0].div_5_revenue_3)).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + (parseInt(divFiveArray[0].div_5_profit_3)).toLocaleString(undefined, {maximumFractionDigits:2})}`
      })

      finalDivisionArray5.push({Division: ``, 'Department Code': ``,
      'Job Name': ``, Status: ``, 'Contract Amount': ``,'Gross Margin': ``, 'Hit Rato': ``,
      Backlog: ``,  'Start Date': ``, 'Months': ``,
      Revenue: `${((Math.round(expectedRevenue5) + Math.round(expectedRevenueABNC5) + Math.round(expectedRevenueFA5)) / Math.round(parseInt(divFiveArray[0].div_5_revenue_1)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}`, 'Gross Margin $': `${((Math.round(expectedProfit5) + Math.round(expectedProfitABNC5) + Math.round(expectedProfitFA5)) / Math.round(parseInt(divFiveArray[0].div_5_profit_1)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}`,
      'Revenue Year 2': `${((Math.round(expectedFutureRev5) + Math.round(expectedFutureRevABNC5) + Math.round(expectedFutureRevFA5)) / Math.round(parseInt(divFiveArray[0].div_5_revenue_2)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}`, 'Gross Margin $ Year 2': `${((Math.round(expectedFutureProf5) + Math.round(expectedFutureProfABNC5) + Math.round(expectedFutureProfFA5)) / Math.round(parseInt(divFiveArray[0].div_5_profit_2)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}`,
      'Revenue Year 3': `${((Math.round(expectedFutureBack5) + Math.round(expectedFutureBackABNC5) + Math.round(expectedFutureBackFA5)) / Math.round(parseInt(divFiveArray[0].div_5_revenue_3)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}`, 'Gross Margin $ Year 3': `${((Math.round(expectedFutureBackProfit5) + Math.round(expectedFutureBackProfitABNC5) + Math.round(expectedFutureBackProfitFA5)) / Math.round(parseInt(divFiveArray[0].div_5_profit_3)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}`
      })

      mergedCompletedSections5 = finalDivisionArray5.map((x) => x);

      //Division 6

      divisionContractsTotal6.push(<tr key={20002} style={{ fontSize: '17px'}}>
      <th colSpan={3} style={{ textAlign: 'center', border: '1px solid #005A8B'}}>TOTALS CONTRACT: DIVISION 6</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(contractTotal6)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(profitTotal6)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((parseFloat(profitTotal6) / parseFloat(contractTotalFA6)) * 100) ? ((parseFloat(profitTotal6) / parseFloat(contractTotal6)) * 100).toFixed(2) + '%' : 0}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedConAmount6)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedRevenue6)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedProfit6)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureRev6)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureProf6)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureBack6)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureBackProfit6)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    </tr>)
        divisionContracts6.push({Division: `TOTALS`, 'Department Code': ``,
        'Job Name': ``, Status: ``, 'Contract Amount': `${'$' + Math.round(contractTotal6).toLocaleString(undefined, {maximumFractionDigits:2})}`,
        'Gross Margin': `${'$' + Math.round(profitTotal6).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${((parseFloat(profitTotal6) / parseFloat(contractTotal6)) * 100).toFixed(2) + '%'}`, 'Hit Rato': ``,
        Backlog: `${'$' + (expectedConAmount6).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': ``, 'Months': ``,
        Revenue: `${'$' + Math.round(expectedRevenue6).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + Math.round(expectedProfit6).toLocaleString(undefined, {maximumFractionDigits:2})}`,
        'Revenue Year 2': `${'$' + Math.round(expectedFutureRev6).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + Math.round(expectedFutureProf6).toLocaleString(undefined, {maximumFractionDigits:2})}`,
        'Revenue Year 3': `${'$' + Math.round(expectedFutureBack6).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + Math.round(expectedFutureBackProfit6).toLocaleString(undefined, {maximumFractionDigits:2})}`
      })

      divisionABNCTotal6.push(<tr key={20002} style={{ fontSize: '17px'}}>
      <th colSpan={3} style={{ textAlign: 'center', border: '1px solid #005A8B'}}>TOTALS ABNC: DIVISION 6</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(contractTotalABNC6)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(profitABNCTotal6)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((parseFloat(profitABNCTotal6) / parseFloat(contractTotalABNC6)) * 100) ? ((parseFloat(profitABNCTotal6) / parseFloat(contractTotalABNC6)) * 100).toFixed(2) + '%' : 0}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedContractAmountABNC6)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedRevenueABNC6)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedProfitABNC6)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureRevABNC6)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureProfABNC6)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureBackABNC6)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureBackProfitABNC6)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    </tr>)

      divisionContractsABNC6.push({Division: `TOTALS`, 'Department Code': ``,
      'Job Name': ``, Status: ``, 'Contract Amount': `${'$' + Math.round(contractTotalABNC6).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Gross Margin': `${'$' + Math.round(profitABNCTotal6).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${((parseFloat(profitABNCTotal6) / parseFloat(contractTotalABNC6)) * 100).toFixed(2) + '%'}`, 'Hit Rato': ``,
      Backlog: `${'$' + (expectedContractAmountABNC6).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': ``, 'Months': ``,
      Revenue: `${'$' + Math.round(expectedRevenueABNC6).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + Math.round(expectedProfitABNC6).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 2': `${'$' + Math.round(expectedFutureRevABNC6).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + Math.round(expectedFutureProfABNC6).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 3': `${'$' + Math.round(expectedFutureBackABNC6).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + Math.round(expectedFutureBackProfitABNC6).toLocaleString(undefined, {maximumFractionDigits:2})}`
      })

      divisionFATotal6.push(<tr key={20002} style={{ fontSize: '17px'}}>
      <th colSpan={3} style={{ textAlign: 'center', border: '1px solid #005A8B'}}>TOTALS FA: DIVISION 6</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(contractTotalFA6)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(profitFATotal6)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((parseFloat(profitFATotal6) / parseFloat(contractTotalFA6)) * 100) ? ((parseFloat(profitFATotal6) / parseFloat(contractTotalFA6)) * 100).toFixed(2) + '%' : 0}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedContractAmountFA6)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedRevenueFA6)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedProfitFA6)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureRevFA6)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureProfFA6)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureBackFA6)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureBackProfitFA6)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    </tr>)

      divisionContractsFA6.push({Division: `TOTALS`, 'Department Code': ``,
      'Job Name': ``, Status: ``, 'Contract Amount': `${'$' + Math.round(contractTotalFA6).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Gross Margin': `${'$' + Math.round(profitFATotal6).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${((parseFloat(profitFATotal6) / parseFloat(contractTotalFA6)) * 100).toFixed(2) + '%'}`, 'Hit Rato': ``,
      Backlog: `${'$' + (expectedContractAmountFA6).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': ``, 'Months': ``,
      Revenue: `${'$' + Math.round(expectedRevenueFA6).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + Math.round(expectedProfitFA6).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 2': `${'$' + Math.round(expectedFutureRevFA6).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + Math.round(expectedFutureProfFA6).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 3': `${'$' + Math.round(expectedFutureBackFA6).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + Math.round(expectedFutureBackProfitFA6).toLocaleString(undefined, {maximumFractionDigits:2})}`
      })

      divisionCombinedTotal6.push(<tr key={20002} style={{ fontSize: '17px'}}>
      <th colSpan={3} style={{ textAlign: 'center', border: '1px solid #005A8B'}}>TOTALS COMBINED: DIVISION 6</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(contractTotal6) + Math.round(contractTotalABNC6) + Math.round(contractTotalFA6)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(profitTotal6) + Math.round(profitABNCTotal6) + Math.round(profitFATotal6)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((parseFloat(Math.round(profitTotal6) + Math.round(profitABNCTotal6) + Math.round(profitFATotal6)) / (Math.round(contractTotal6) + Math.round(contractTotalABNC6) + Math.round(contractTotalFA6))) * 100).toFixed(2) + '%'}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedConAmount6) + Math.round(expectedContractAmountABNC6) + Math.round(expectedContractAmountFA6)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(expectedRevenue6) + Math.round(expectedRevenueABNC6) + Math.round(expectedRevenueFA6)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(expectedProfit6) + Math.round(expectedProfitABNC6) + Math.round(expectedProfitFA6)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(expectedFutureRev6) + Math.round(expectedFutureRevABNC6) + Math.round(expectedFutureRevFA6)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(expectedFutureProf6) + Math.round(expectedFutureProfABNC6) + Math.round(expectedFutureProfFA6)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(expectedFutureBack6) + Math.round(expectedFutureBackABNC6) + Math.round(expectedFutureBackFA6)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(expectedFutureBackProfit6) + Math.round(expectedFutureBackProfitABNC6) + Math.round(expectedFutureBackProfitFA6)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    </tr>)

    divisionCombinedTotalPlanSix.push(<tr key={20002} style={{ fontSize: '17px'}}>
    <th colSpan={3} style={{ textAlign: 'center', border: '1px solid #005A8B'}}>Plan Projection</th>
    <th style={{ textAlign: 'center'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (parseInt(divSixArray[0].div_6_revenue_1)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (parseInt(divSixArray[0].div_6_profit_1)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (parseInt(divSixArray[0].div_6_revenue_2)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (parseInt(divSixArray[0].div_6_profit_2)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (parseInt(divSixArray[0].div_6_revenue_3)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (parseInt(divSixArray[0].div_6_profit_3)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    </tr>)

    divisionCombinedTotalPlanPercentSix.push(<tr key={20002} style={{ fontSize: '17px'}}>
    <th colSpan={3} style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((Math.round(expectedRevenue6) + Math.round(expectedRevenueABNC6) + Math.round(expectedRevenueFA6)) / Math.round(parseInt(divSixArray[0].div_6_revenue_1)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((Math.round(expectedProfit6) + Math.round(expectedProfitABNC6) + Math.round(expectedProfitFA6)) / Math.round(parseInt(divSixArray[0].div_6_profit_1)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((Math.round(expectedFutureRev6) + Math.round(expectedFutureRevABNC6) + Math.round(expectedFutureRevFA6)) / Math.round(parseInt(divSixArray[0].div_6_revenue_2)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((Math.round(expectedFutureProf6) + Math.round(expectedFutureProfABNC6) + Math.round(expectedFutureProfFA6)) / Math.round(parseInt(divSixArray[0].div_6_profit_2)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((Math.round(expectedFutureBack6) + Math.round(expectedFutureBackABNC6) + Math.round(expectedFutureBackFA6)) / Math.round(parseInt(divSixArray[0].div_6_revenue_3)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((Math.round(expectedFutureBackProfit6) + Math.round(expectedFutureBackProfitABNC6) + Math.round(expectedFutureBackProfitFA6)) / Math.round(parseInt(divSixArray[0].div_6_profit_3)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}</th>
    </tr>)


      var finalDivisionArray6 = divisionContracts6.concat(divisionContractsABNC6).concat(divisionContractsFA6)

      finalDivisionArray6.push({Division: `TOTALS`, 'Department Code': ``,
      'Job Name': ``, Status: ``, 'Contract Amount': `${'$' + (Math.round(contractTotal6) + Math.round(contractTotalABNC6) + Math.round(contractTotalFA6)).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Gross Margin': `${'$' + parseFloat(Math.round(profitTotal6) + Math.round(profitABNCTotal6) + Math.round(profitFATotal6)).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${((parseFloat(Math.round(profitTotal6) + Math.round(profitABNCTotal6) + Math.round(profitFATotal6)) / (Math.round(contractTotal6) + Math.round(contractTotalABNC6) + Math.round(contractTotalFA6))) * 100).toFixed(2) + '%'}`, 'Hit Rato': ``,
      Backlog: `${'$' + parseFloat(Math.round(expectedConAmount6) + Math.round(expectedContractAmountABNC6) + Math.round(expectedContractAmountFA6)).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': ``, 'Months': ``,
      Revenue: `${'$' + (Math.round(expectedRevenue6) + Math.round(expectedRevenueABNC6) + Math.round(expectedRevenueFA6)).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + (Math.round(expectedProfit6) + Math.round(expectedProfitABNC6) + Math.round(expectedProfitFA6)).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 2': `${'$' + (Math.round(expectedFutureRev6) + Math.round(expectedFutureRevABNC6) + Math.round(expectedFutureRevFA6)).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + (Math.round(expectedFutureProf6) + Math.round(expectedFutureProfABNC6) + Math.round(expectedFutureProfFA6)).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 3': `${'$' + (Math.round(expectedFutureBack6) + Math.round(expectedFutureBackABNC6) + Math.round(expectedFutureBackFA6)).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + (Math.round(expectedFutureBackProfit6) + Math.round(expectedFutureBackProfitABNC6) + Math.round(expectedFutureBackProfitFA6)).toLocaleString(undefined, {maximumFractionDigits:2})}`
      })

      finalDivisionArray6.push({Division: `Plan`, 'Department Code': ``,
      'Job Name': ``, Status: ``, 'Contract Amount': ``,'Gross Margin': ``, 'Hit Rato': ``,
      Backlog: ``,  'Start Date': ``, 'Months': ``,
      Revenue: `${'$' + (parseInt(divSixArray[0].div_6_revenue_1)).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + (parseInt(divSixArray[0].div_6_profit_1)).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 2': `${'$' + (parseInt(divSixArray[0].div_6_revenue_2)).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + (parseInt(divSixArray[0].div_6_profit_2)).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 3': `${'$' + (parseInt(divSixArray[0].div_6_revenue_3)).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + (parseInt(divSixArray[0].div_6_profit_3)).toLocaleString(undefined, {maximumFractionDigits:2})}`
      })

      finalDivisionArray6.push({Division: ``, 'Department Code': ``,
      'Job Name': ``, Status: ``, 'Contract Amount': ``,'Gross Margin': ``, 'Hit Rato': ``,
      Backlog: ``,  'Start Date': ``, 'Months': ``,
      Revenue: `${((Math.round(expectedRevenue6) + Math.round(expectedRevenueABNC6) + Math.round(expectedRevenueFA6)) / Math.round(parseInt(divSixArray[0].div_6_revenue_1)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}`, 'Gross Margin $': `${((Math.round(expectedProfit6) + Math.round(expectedProfitABNC6) + Math.round(expectedProfitFA6)) / Math.round(parseInt(divSixArray[0].div_6_profit_1)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}`,
      'Revenue Year 2': `${((Math.round(expectedFutureRev6) + Math.round(expectedFutureRevABNC6) + Math.round(expectedFutureRevFA6)) / Math.round(parseInt(divSixArray[0].div_6_revenue_2)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}`, 'Gross Margin $ Year 2': `${((Math.round(expectedFutureProf6) + Math.round(expectedFutureProfABNC6) + Math.round(expectedFutureProfFA6)) / Math.round(parseInt(divSixArray[0].div_6_profit_2)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}`,
      'Revenue Year 3': `${((Math.round(expectedFutureBack6) + Math.round(expectedFutureBackABNC6) + Math.round(expectedFutureBackFA6)) / Math.round(parseInt(divSixArray[0].div_6_revenue_3)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}`, 'Gross Margin $ Year 3': `${((Math.round(expectedFutureBackProfit6) + Math.round(expectedFutureBackProfitABNC6) + Math.round(expectedFutureBackProfitFA6)) / Math.round(parseInt(divSixArray[0].div_6_profit_3)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}`
      })

      mergedCompletedSections6 = finalDivisionArray6.map((x) => x);

      //Division 7

      divisionContractsTotal7.push(<tr key={20002} style={{ fontSize: '17px'}}>
      <th colSpan={3} style={{ textAlign: 'center', border: '1px solid #005A8B'}}>TOTALS CONTRACT: DIVISION 7</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(contractTotal7)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(profitTotal7)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((parseFloat(profitTotal7) / parseFloat(contractTotalFA7)) * 100) ? ((parseFloat(profitTotal7) / parseFloat(contractTotal7)) * 100).toFixed(2) + '%' : 0}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedConAmount7)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedRevenue7)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedProfit7)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureRev7)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureProf7)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureBack7)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureBackProfit7)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    </tr>)
        divisionContracts7.push({Division: `TOTALS`, 'Department Code': ``,
        'Job Name': ``, Status: ``, 'Contract Amount': `${'$' + Math.round(contractTotal7).toLocaleString(undefined, {maximumFractionDigits:2})}`,
        'Gross Margin': `${'$' + Math.round(profitTotal7).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${((parseFloat(profitTotal7) / parseFloat(contractTotal7)) * 100) ? ((parseFloat(profitTotal7) / parseFloat(contractTotal7)) * 100).toFixed(2) + '%' : 0}`, 'Hit Rato': ``,
        Backlog: `${'$' + (expectedConAmount7).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': ``, 'Months': ``,
        Revenue: `${'$' + Math.round(expectedRevenue7).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + Math.round(expectedProfit7).toLocaleString(undefined, {maximumFractionDigits:2})}`,
        'Revenue Year 2': `${'$' + Math.round(expectedFutureRev7).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + Math.round(expectedFutureProf7).toLocaleString(undefined, {maximumFractionDigits:2})}`,
        'Revenue Year 3': `${'$' + Math.round(expectedFutureBack7).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + Math.round(expectedFutureBackProfit7).toLocaleString(undefined, {maximumFractionDigits:2})}`
      })

      divisionABNCTotal7.push(<tr key={20002} style={{ fontSize: '17px'}}>
      <th colSpan={3} style={{ textAlign: 'center', border: '1px solid #005A8B'}}>TOTALS ABNC: DIVISION 7</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(contractTotalABNC7)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(profitABNCTotal7)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((parseFloat(profitABNCTotal7) / parseFloat(contractTotalABNC7)) * 100) ? ((parseFloat(profitABNCTotal7) / parseFloat(contractTotalABNC7)) * 100).toFixed(2) + '%' : 0}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedContractAmountABNC7)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedRevenueABNC7)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedProfitABNC7)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureRevABNC7)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureProfABNC7)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureBackABNC7)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureBackProfitABNC7)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    </tr>)

      divisionContractsABNC7.push({Division: `TOTALS`, 'Department Code': ``,
      'Job Name': ``, Status: ``, 'Contract Amount': `${'$' + Math.round(contractTotalABNC7).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Gross Margin': `${'$' + Math.round(profitABNCTotal7).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${((parseFloat(profitABNCTotal7) / parseFloat(contractTotalABNC7)) * 100) ? ((parseFloat(profitABNCTotal7) / parseFloat(contractTotalABNC7)) * 100).toFixed(2) + '%' : 0}`, 'Hit Rato': ``,
      Backlog: `${'$' + (expectedContractAmountABNC7).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': ``, 'Months': ``,
      Revenue: `${'$' + Math.round(expectedRevenueABNC7).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + Math.round(expectedProfitABNC7).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 2': `${'$' + Math.round(expectedFutureRevABNC7).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + Math.round(expectedFutureProfABNC7).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 3': `${'$' + Math.round(expectedFutureBackABNC7).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + Math.round(expectedFutureBackProfitABNC7).toLocaleString(undefined, {maximumFractionDigits:2})}`
      })

      divisionFATotal7.push(<tr key={20002} style={{ fontSize: '17px'}}>
      <th colSpan={3} style={{ textAlign: 'center', border: '1px solid #005A8B'}}>TOTALS FA: DIVISION 7</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(contractTotalFA7)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(profitFATotal7)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((parseFloat(profitFATotal7) / parseFloat(contractTotalFA7)) * 100) ? ((parseFloat(profitFATotal7) / parseFloat(contractTotalFA7)) * 100).toFixed(2) + '%' : 0}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedContractAmountFA7)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedRevenueFA7)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedProfitFA7)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureRevFA7)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureProfFA7)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureBackFA7)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureBackProfitFA7)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    </tr>)

      divisionContractsFA7.push({Division: `TOTALS`, 'Department Code': ``,
      'Job Name': ``, Status: ``, 'Contract Amount': `${'$' + Math.round(contractTotalFA7).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Gross Margin': `${'$' + Math.round(profitFATotal7).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${((parseFloat(profitFATotal7) / parseFloat(contractTotalFA7)) * 100) ? ((parseFloat(profitFATotal7) / parseFloat(contractTotalFA7)) * 100).toFixed(2) + '%' : 0}`, 'Hit Rato': ``,
      Backlog: `${'$' + (expectedContractAmountFA7).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': ``, 'Months': ``,
      Revenue: `${'$' + Math.round(expectedRevenueFA7).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + Math.round(expectedProfitFA7).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 2': `${'$' + Math.round(expectedFutureRevFA7).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + Math.round(expectedFutureProfFA7).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 3': `${'$' + Math.round(expectedFutureBackFA7).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + Math.round(expectedFutureBackProfitFA7).toLocaleString(undefined, {maximumFractionDigits:2})}`
      })

      divisionCombinedTotal7.push(<tr key={20002} style={{ fontSize: '17px'}}>
      <th colSpan={3} style={{ textAlign: 'center', border: '1px solid #005A8B'}}>TOTALS COMBINED: DIVISION 7</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(contractTotal7) + Math.round(contractTotalABNC7) + Math.round(contractTotalFA7)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(profitTotal7) + Math.round(profitABNCTotal7) + Math.round(profitFATotal7)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((parseFloat(Math.round(profitTotal7) + Math.round(profitABNCTotal7) + Math.round(profitFATotal7)) / (Math.round(contractTotal7) + Math.round(contractTotalABNC7) + Math.round(contractTotalFA7))) * 100).toFixed(2) + '%'}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedConAmount7) + Math.round(expectedContractAmountABNC7) + Math.round(expectedContractAmountFA7)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(expectedRevenue7) + Math.round(expectedRevenueABNC7) + Math.round(expectedRevenueFA7)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(expectedProfit7) + Math.round(expectedProfitABNC7) + Math.round(expectedProfitFA7)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(expectedFutureRev7) + Math.round(expectedFutureRevABNC7) + Math.round(expectedFutureRevFA7)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(expectedFutureProf7) + Math.round(expectedFutureProfABNC7) + Math.round(expectedFutureProfFA7)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(expectedFutureBack7) + Math.round(expectedFutureBackABNC7) + Math.round(expectedFutureBackFA7)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(expectedFutureBackProfit7) + Math.round(expectedFutureBackProfitABNC7) + Math.round(expectedFutureBackProfitFA7)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    </tr>)

      divisionCombinedTotalPlanSeven.push(<tr key={20002} style={{ fontSize: '17px'}}>
      <th colSpan={3} style={{ textAlign: 'center', border: '1px solid #005A8B'}}>Plan Projection</th>
      <th style={{ textAlign: 'center'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (parseInt(divSevenArray[0].div_7_revenue_1)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (parseInt(divSevenArray[0].div_7_profit_1)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (parseInt(divSevenArray[0].div_7_revenue_2)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (parseInt(divSevenArray[0].div_7_profit_2)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (parseInt(divSevenArray[0].div_7_revenue_3)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (parseInt(divSevenArray[0].div_7_profit_3)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      </tr>)

      divisionCombinedTotalPlanPercentSeven.push(<tr key={20002} style={{ fontSize: '17px'}}>
      <th colSpan={3} style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((Math.round(expectedRevenue7) + Math.round(expectedRevenueABNC7) + Math.round(expectedRevenueFA7)) / Math.round(parseInt(divSevenArray[0].div_7_revenue_1)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{Math.round(parseInt(divSevenArray[0].div_7_profit_1)) ? ((Math.round(expectedProfit7) + Math.round(expectedProfitABNC7) + Math.round(expectedProfitFA7)) / Math.round(parseInt(divSevenArray[0].div_7_profit_1)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%' : 0}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((Math.round(expectedFutureRev7) + Math.round(expectedFutureRevABNC7) + Math.round(expectedFutureRevFA7)) / Math.round(parseInt(divSevenArray[0].div_7_revenue_2)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((Math.round(expectedFutureProf7) + Math.round(expectedFutureProfABNC7) + Math.round(expectedFutureProfFA7)) / Math.round(parseInt(divSevenArray[0].div_7_profit_2)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((Math.round(expectedFutureBack7) + Math.round(expectedFutureBackABNC7) + Math.round(expectedFutureBackFA7)) / Math.round(parseInt(divSevenArray[0].div_7_revenue_3)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((Math.round(expectedFutureBackProfit7) + Math.round(expectedFutureBackProfitABNC7) + Math.round(expectedFutureBackProfitFA7)) / Math.round(parseInt(divSevenArray[0].div_7_profit_3)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}</th>
      </tr>)

      var finalDivisionArray7 = divisionContracts7.concat(divisionContractsABNC7).concat(divisionContractsFA7)

      finalDivisionArray7.push({Division: `TOTALS`, 'Department Code': ``,
      'Job Name': ``, Status: ``, 'Contract Amount': `${'$' + (Math.round(contractTotal7) + Math.round(contractTotalABNC7) + Math.round(contractTotalFA7)).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Gross Margin': `${'$' + parseFloat(Math.round(profitTotal7) + Math.round(profitABNCTotal7) + Math.round(profitFATotal7)).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${((parseFloat(Math.round(profitTotal7) + Math.round(profitABNCTotal7) + Math.round(profitFATotal7)) / (Math.round(contractTotal7) + Math.round(contractTotalABNC7) + Math.round(contractTotalFA7))) * 100).toFixed(2) + '%'}`, 'Hit Rato': ``,
      Backlog: `${'$' + parseFloat(Math.round(expectedConAmount7) + Math.round(expectedContractAmountABNC7) + Math.round(expectedContractAmountFA7)).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': ``, 'Months': ``,
      Revenue: `${'$' + (Math.round(expectedRevenue7) + Math.round(expectedRevenueABNC7) + Math.round(expectedRevenueFA7)).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + (Math.round(expectedProfit7) + Math.round(expectedProfitABNC7) + Math.round(expectedProfitFA7)).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 2': `${'$' + (Math.round(expectedFutureRev7) + Math.round(expectedFutureRevABNC7) + Math.round(expectedFutureRevFA7)).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + (Math.round(expectedFutureProf7) + Math.round(expectedFutureProfABNC7) + Math.round(expectedFutureProfFA7)).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 3': `${'$' + (Math.round(expectedFutureBack7) + Math.round(expectedFutureBackABNC7) + Math.round(expectedFutureBackFA7)).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + (Math.round(expectedFutureBackProfit7) + Math.round(expectedFutureBackProfitABNC7) + Math.round(expectedFutureBackProfitFA7)).toLocaleString(undefined, {maximumFractionDigits:2})}`
      })

      finalDivisionArray7.push({Division: `Plan`, 'Department Code': ``,
      'Job Name': ``, Status: ``, 'Contract Amount': ``,'Gross Margin': ``, 'Hit Rato': ``,
      Backlog: ``,  'Start Date': ``, 'Months': ``,
      Revenue: `${'$' + (parseInt(divSevenArray[0].div_7_revenue_1)).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + (parseInt(divSevenArray[0].div_7_profit_1)).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 2': `${'$' + (parseInt(divSevenArray[0].div_7_revenue_2)).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + (parseInt(divSevenArray[0].div_7_profit_2)).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 3': `${'$' + (parseInt(divSevenArray[0].div_7_revenue_3)).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + (parseInt(divSevenArray[0].div_7_profit_3)).toLocaleString(undefined, {maximumFractionDigits:2})}`
      })

      finalDivisionArray7.push({Division: ``, 'Department Code': ``,
      'Job Name': ``, Status: ``, 'Contract Amount': ``,'Gross Margin': ``, 'Hit Rato': ``,
      Backlog: ``,  'Start Date': ``, 'Months': ``,
      Revenue: `${((Math.round(expectedRevenue7) + Math.round(expectedRevenueABNC7) + Math.round(expectedRevenueFA7)) / Math.round(parseInt(divSevenArray[0].div_7_revenue_1)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}`, 'Gross Margin $': `${Math.round(parseInt(divSevenArray[0].div_7_profit_1)) ? ((Math.round(expectedProfit7) + Math.round(expectedProfitABNC7) + Math.round(expectedProfitFA7)) / Math.round(parseInt(divSevenArray[0].div_7_profit_1)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%' : 0}`,
      'Revenue Year 2': `${((Math.round(expectedFutureRev7) + Math.round(expectedFutureRevABNC7) + Math.round(expectedFutureRevFA7)) / Math.round(parseInt(divSevenArray[0].div_7_revenue_2)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}`, 'Gross Margin $ Year 2': `${((Math.round(expectedFutureProf7) + Math.round(expectedFutureProfABNC7) + Math.round(expectedFutureProfFA7)) / Math.round(parseInt(divSevenArray[0].div_7_profit_2)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}`,
      'Revenue Year 3': `${((Math.round(expectedFutureBack7) + Math.round(expectedFutureBackABNC7) + Math.round(expectedFutureBackFA7)) / Math.round(parseInt(divSevenArray[0].div_7_revenue_3)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}`, 'Gross Margin $ Year 3': `${((Math.round(expectedFutureBackProfit7) + Math.round(expectedFutureBackProfitABNC7) + Math.round(expectedFutureBackProfitFA7)) / Math.round(parseInt(divSevenArray[0].div_7_profit_3)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}`
      })

      mergedCompletedSections7 = finalDivisionArray7.map((x) => x);

      //Division 11

      divisionContractsTotal11.push(<tr key={20002} style={{ fontSize: '17px'}}>
      <th colSpan={3} style={{ textAlign: 'center', border: '1px solid #005A8B'}}>TOTALS CONTRACT: DIVISION 11</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(contractTotal11)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(profitTotal11)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((parseFloat(profitTotal11) / parseFloat(contractTotalFA11)) * 100) ? ((parseFloat(profitTotal11) / parseFloat(contractTotal11)) * 100).toFixed(2) + '%' : 0}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedConAmount11)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedRevenue11)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedProfit11)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureRev11)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureProf11)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureBack11)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureBackProfit11)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    </tr>)
        divisionContracts11.push({Division: `TOTALS`, 'Department Code': ``,
        'Job Name': ``, Status: ``, 'Contract Amount': `${'$' + Math.round(contractTotal11).toLocaleString(undefined, {maximumFractionDigits:2})}`,
        'Gross Margin': `${'$' + Math.round(profitTotal11).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${((parseFloat(profitTotal11) / parseFloat(contractTotal11)) * 100).toFixed(2) + '%'}`, 'Hit Rato': ``,
        Backlog: `${'$' + (expectedConAmount11).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': ``, 'Months': ``,
        Revenue: `${'$' + Math.round(expectedRevenue11).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + Math.round(expectedProfit11).toLocaleString(undefined, {maximumFractionDigits:2})}`,
        'Revenue Year 2': `${'$' + Math.round(expectedFutureRev11).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + Math.round(expectedFutureProf11).toLocaleString(undefined, {maximumFractionDigits:2})}`,
        'Revenue Year 3': `${'$' + Math.round(expectedFutureBack11).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + Math.round(expectedFutureBackProfit11).toLocaleString(undefined, {maximumFractionDigits:2})}`
      })

      divisionABNCTotal11.push(<tr key={20002} style={{ fontSize: '17px'}}>
      <th colSpan={3} style={{ textAlign: 'center', border: '1px solid #005A8B'}}>TOTALS ABNC: DIVISION 11</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(contractTotalABNC11)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(profitABNCTotal11)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((parseFloat(profitABNCTotal11) / parseFloat(contractTotalABNC11)) * 100) ? ((parseFloat(profitABNCTotal11) / parseFloat(contractTotalABNC11)) * 100).toFixed(2) + '%' : 0}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedContractAmountABNC11)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedRevenueABNC11)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedProfitABNC11)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureRevABNC11)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureProfABNC11)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureBackABNC11)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureBackProfitABNC11)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    </tr>)

    divisionContractsABNC11.push({Division: `TOTALS`, 'Department Code': ``,
      'Job Name': ``, Status: ``, 'Contract Amount': `${'$' + Math.round(contractTotalABNC11).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Gross Margin': `${'$' + Math.round(profitABNCTotal11).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${((parseFloat(profitABNCTotal11) / parseFloat(contractTotalABNC11)) * 100).toFixed(2) + '%'}`, 'Hit Rato': ``,
      Backlog: `${'$' + (expectedContractAmountABNC11).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': ``, 'Months': ``,
      Revenue: `${'$' + Math.round(expectedRevenueABNC11).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + Math.round(expectedProfitABNC11).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 2': `${'$' + Math.round(expectedFutureRevABNC11).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + Math.round(expectedFutureProfABNC11).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 3': `${'$' + Math.round(expectedFutureBackABNC11).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + Math.round(expectedFutureBackProfitABNC11).toLocaleString(undefined, {maximumFractionDigits:2})}`
      })

      divisionFATotal11.push(<tr key={20002} style={{ fontSize: '17px'}}>
      <th colSpan={3} style={{ textAlign: 'center', border: '1px solid #005A8B'}}>TOTALS FA: DIVISION 11</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(contractTotalFA11)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(profitFATotal11)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((parseFloat(profitFATotal11) / parseFloat(contractTotalFA11)) * 100) ? ((parseFloat(profitFATotal11) / parseFloat(contractTotalFA11)) * 100).toFixed(2) + '%' : 0}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedContractAmountFA11)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedRevenueFA11)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedProfitFA11)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureRevFA11)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureProfFA11)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureBackFA11)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureBackProfitFA11)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    </tr>)

      divisionContractsFA11.push({Division: `TOTALS`, 'Department Code': ``,
      'Job Name': ``, Status: ``, 'Contract Amount': `${'$' + Math.round(contractTotalFA11).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Gross Margin': `${'$' + Math.round(profitFATotal11).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${((parseFloat(profitFATotal11) / parseFloat(contractTotalFA11)) * 100).toFixed(2) + '%'}`, 'Hit Rato': ``,
      Backlog: `${'$' + parseFloat(Math.round(expectedContractAmountFA11)).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': ``, 'Months': ``,
      Revenue: `${'$' + Math.round(expectedRevenueFA11).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + Math.round(expectedProfitFA11).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 2': `${'$' + Math.round(expectedFutureRevFA11).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + Math.round(expectedFutureProfFA11).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 3': `${'$' + Math.round(expectedFutureBackFA11).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + Math.round(expectedFutureBackProfitFA11).toLocaleString(undefined, {maximumFractionDigits:2})}`
      })

      divisionCombinedTotal11.push(<tr key={20002} style={{ fontSize: '17px'}}>
      <th colSpan={3} style={{ textAlign: 'center', border: '1px solid #005A8B'}}>TOTALS COMBINED: DIVISION 11</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(contractTotal11) + Math.round(contractTotalABNC11) + Math.round(contractTotalFA11)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(profitTotal11) + Math.round(profitABNCTotal11) + Math.round(profitFATotal11)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((parseFloat(Math.round(profitTotal11) + Math.round(profitABNCTotal11) + Math.round(profitFATotal11)) / (Math.round(contractTotal11) + Math.round(contractTotalABNC11) + Math.round(contractTotalFA11))) * 100).toFixed(2) + '%'}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedConAmount11) + Math.round(expectedContractAmountABNC11) + Math.round(expectedContractAmountFA11)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(expectedRevenue11) + Math.round(expectedRevenueABNC11) + Math.round(expectedRevenueFA11)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(expectedProfit11) + Math.round(expectedProfitABNC11) + Math.round(expectedProfitFA11)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(expectedFutureRev11) + Math.round(expectedFutureRevABNC11) + Math.round(expectedFutureRevFA11)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(expectedFutureProf11) + Math.round(expectedFutureProfABNC11) + Math.round(expectedFutureProfFA11)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(expectedFutureBack11) + Math.round(expectedFutureBackABNC11) + Math.round(expectedFutureBackFA11)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
      <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(expectedFutureBackProfit11) + Math.round(expectedFutureBackProfitABNC11) + Math.round(expectedFutureBackProfitFA11)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    </tr>)

    divisionCombinedTotalPlanEleven.push(<tr key={20002} style={{ fontSize: '17px'}}>
    <th colSpan={3} style={{ textAlign: 'center', border: '1px solid #005A8B'}}>Plan Projection</th>
    <th style={{ textAlign: 'center'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (parseInt(divElevenArray[0].div_11_revenue_1)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (parseInt(divElevenArray[0].div_11_profit_1)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (parseInt(divElevenArray[0].div_11_revenue_2)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (parseInt(divElevenArray[0].div_11_profit_2)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (parseInt(divElevenArray[0].div_11_revenue_3)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (parseInt(divElevenArray[0].div_11_profit_3)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
    </tr>)

    divisionCombinedTotalPlanPercentEleven.push(<tr key={20002} style={{ fontSize: '17px'}}>
    <th colSpan={3} style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{Math.round(parseInt(divElevenArray[0].div_11_revenue_1)) ? ((Math.round(expectedRevenue11) + Math.round(expectedRevenueABNC11) + Math.round(expectedRevenueFA11)) / Math.round(parseInt(divElevenArray[0].div_11_revenue_1)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%' : 0}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{Math.round(parseInt(divElevenArray[0].div_11_profit_1)) ? ((Math.round(expectedProfit11) + Math.round(expectedProfitABNC11) + Math.round(expectedProfitFA11)) / Math.round(parseInt(divElevenArray[0].div_11_profit_1)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%' : 0}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{Math.round(parseInt(divElevenArray[0].div_11_revenue_2)) ? ((Math.round(expectedFutureRev11) + Math.round(expectedFutureRevABNC11) + Math.round(expectedFutureRevFA11)) / Math.round(parseInt(divElevenArray[0].div_11_revenue_2)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%' : 0}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{Math.round(parseInt(divElevenArray[0].div_11_profit_2)) ? ((Math.round(expectedFutureProf11) + Math.round(expectedFutureProfABNC11) + Math.round(expectedFutureProfFA11)) / Math.round(parseInt(divElevenArray[0].div_11_profit_2)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%' : 0}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{Math.round(parseInt(divElevenArray[0].div_11_revenue_3)) ? ((Math.round(expectedFutureBack11) + Math.round(expectedFutureBackABNC11) + Math.round(expectedFutureBackFA11)) / Math.round(parseInt(divElevenArray[0].div_11_revenue_3)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%' : 0}</th>
    <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{Math.round(parseInt(divElevenArray[0].div_11_profit_3)) ? ((Math.round(expectedFutureBackProfit11) + Math.round(expectedFutureBackProfitABNC11) + Math.round(expectedFutureBackProfitFA11)) / Math.round(parseInt(divElevenArray[0].div_11_profit_3)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%' : 0}</th>
    </tr>)

      var finalDivisionArray11 = divisionContracts11.concat(divisionContractsABNC11).concat(divisionContractsFA11)

      finalDivisionArray11.push({Division: `TOTALS`, 'Department Code': ``,
      'Job Name': ``, Status: ``, 'Contract Amount': `${'$' + (Math.round(contractTotal11) + Math.round(contractTotalABNC11) + Math.round(contractTotalFA11)).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Gross Margin': `${'$' + parseFloat(Math.round(profitTotal11) + Math.round(profitABNCTotal11) + Math.round(profitFATotal11)).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${((parseFloat(Math.round(profitTotal11) + Math.round(profitABNCTotal11) + Math.round(profitFATotal11)) / (Math.round(contractTotal11) + Math.round(contractTotalABNC11) + Math.round(contractTotalFA11))) * 100).toFixed(2) + '%'}`, 'Hit Rato': ``,
      Backlog: `${'$' + parseFloat(Math.round(expectedConAmount11) + Math.round(expectedContractAmountABNC11) + Math.round(expectedContractAmountFA11)).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': ``, 'Months': ``,
      Revenue: `${'$' + (Math.round(expectedRevenue11) + Math.round(expectedRevenueABNC11) + Math.round(expectedRevenueFA11)).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + (Math.round(expectedProfit11) + Math.round(expectedProfitABNC11) + Math.round(expectedProfitFA11)).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 2': `${'$' + (Math.round(expectedFutureRev11) + Math.round(expectedFutureRevABNC11) + Math.round(expectedFutureRevFA11)).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + (Math.round(expectedFutureProf11) + Math.round(expectedFutureProfABNC11) + Math.round(expectedFutureProfFA11)).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 3': `${'$' + (Math.round(expectedFutureBack11) + Math.round(expectedFutureBackABNC11) + Math.round(expectedFutureBackFA11)).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + (Math.round(expectedFutureBackProfit11) + Math.round(expectedFutureBackProfitABNC11) + Math.round(expectedFutureBackProfitFA11)).toLocaleString(undefined, {maximumFractionDigits:2})}`
      })

      finalDivisionArray11.push({Division: `Plan Projection`, 'Department Code': ``,
      'Job Name': ``, Status: ``, 'Contract Amount': ``,'Gross Margin': ``, 'Hit Rato': ``,
      Backlog: ``,  'Start Date': ``, 'Months': ``,
      Revenue: `${'$' + (parseInt(divElevenArray[0].div_11_revenue_1)).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + (parseInt(divElevenArray[0].div_11_profit_1)).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 2': `${'$' + (parseInt(divElevenArray[0].div_11_revenue_2)).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + (parseInt(divElevenArray[0].div_11_profit_2)).toLocaleString(undefined, {maximumFractionDigits:2})}`,
      'Revenue Year 3': `${'$' + (parseInt(divElevenArray[0].div_11_revenue_3)).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + (parseInt(divElevenArray[0].div_11_profit_3)).toLocaleString(undefined, {maximumFractionDigits:2})}`
      })

      finalDivisionArray11.push({Division: ``, 'Department Code': ``,
      'Job Name': ``, Status: ``, 'Contract Amount': ``,'Gross Margin': ``, 'Hit Rato': ``,
      Backlog: ``,  'Start Date': ``, 'Months': ``,
      Revenue: `${Math.round(parseInt(divElevenArray[0].div_11_revenue_1)) ? ((Math.round(expectedRevenue11) + Math.round(expectedRevenueABNC11) + Math.round(expectedRevenueFA11)) / Math.round(parseInt(divElevenArray[0].div_11_revenue_1)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%' : 0}`, 'Gross Margin $': `${Math.round(parseInt(divElevenArray[0].div_11_profit_1)) ? ((Math.round(expectedProfit11) + Math.round(expectedProfitABNC11) + Math.round(expectedProfitFA11)) / Math.round(parseInt(divElevenArray[0].div_11_profit_1)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%' : 0}`,
      'Revenue Year 2': `${Math.round(parseInt(divElevenArray[0].div_11_revenue_2)) ? ((Math.round(expectedFutureRev11) + Math.round(expectedFutureRevABNC11) + Math.round(expectedFutureRevFA11)) / Math.round(parseInt(divElevenArray[0].div_11_revenue_2)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%' : 0}`, 'Gross Margin $ Year 2': `${Math.round(parseInt(divElevenArray[0].div_11_profit_2)) ? ((Math.round(expectedFutureProf11) + Math.round(expectedFutureProfABNC11) + Math.round(expectedFutureProfFA11)) / Math.round(parseInt(divElevenArray[0].div_11_profit_2)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%' : 0}`,
      'Revenue Year 3': `${Math.round(parseInt(divElevenArray[0].div_11_revenue_3)) ? ((Math.round(expectedFutureBack11) + Math.round(expectedFutureBackABNC11) + Math.round(expectedFutureBackFA11)) / Math.round(parseInt(divElevenArray[0].div_11_revenue_3)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%' : 0}`, 'Gross Margin $ Year 3': `${Math.round(parseInt(divElevenArray[0].div_11_profit_3)) ? ((Math.round(expectedFutureBackProfit11) + Math.round(expectedFutureBackProfitABNC11) + Math.round(expectedFutureBackProfitFA11)) / Math.round(parseInt(divElevenArray[0].div_11_profit_3)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%' : 0}`
      })

      mergedCompletedSections11 = finalDivisionArray11.map((x) => x);

       //Division

       divisionContractsTotalOne.push(<tr key={20002} style={{ fontSize: '17px'}}>
       <th colSpan={3} style={{ textAlign: 'center', border: '1px solid #005A8B'}}>TOTALS CONTRACT: DIVISION {this.state.userDivisionNum}</th>
       <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
       <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(contractTotalOne)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
       <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(profitTotalOne)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
       <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((parseFloat(profitTotalOne) / parseFloat(contractTotalFAOne)) * 100) ? ((parseFloat(profitTotalOne) / parseFloat(contractTotalOne)) * 100).toFixed(2) + '%' : 0}</th>
       <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
       <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedConAmountOne)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
       <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
       <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
       <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedRevenueOne)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
       <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedProfitOne)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
       <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureRevOne)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
       <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureProfOne)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
       <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureBackOne)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
       <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureBackProfitOne)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
     </tr>)
         divisionContractsOne.push({Division: `TOTALS CONTRACT: DIVISION ` + [this.state.userDivisionNum], 'Department Code': ``,
         'Job Name': ``, Status: ``, 'Contract Amount': `${'$' + Math.round(contractTotalOne).toLocaleString(undefined, {maximumFractionDigits:2})}`,
         'Gross Margin': `${'$' + Math.round(profitTotalOne).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${((parseFloat(profitTotalOne) / parseFloat(contractTotalOne)) * 100).toFixed(2) + '%'}`, 'Hit Rato': ``,
         Backlog: `${'$' + (expectedConAmountOne).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': ``, 'Months': ``,
         Revenue: `${'$' + Math.round(expectedRevenueOne).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + Math.round(expectedProfitOne).toLocaleString(undefined, {maximumFractionDigits:2})}`,
         'Revenue Year 2': `${'$' + Math.round(expectedFutureRevOne).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + Math.round(expectedFutureProfOne).toLocaleString(undefined, {maximumFractionDigits:2})}`,
         'Revenue Year 3': `${'$' + Math.round(expectedFutureBackOne).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + Math.round(expectedFutureBackProfitOne).toLocaleString(undefined, {maximumFractionDigits:2})}`
       })
 
       divisionABNCTotalOne.push(<tr key={20002} style={{ fontSize: '17px'}}>
       <th colSpan={3} style={{ textAlign: 'center', border: '1px solid #005A8B'}}>TOTALS ABNC: DIVISION {this.state.userDivisionNum}</th>
       <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
       <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(contractTotalABNCOne)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
       <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(profitABNCTotalOne)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
       <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((parseFloat(profitABNCTotalOne) / parseFloat(contractTotalABNCOne)) * 100) ? ((parseFloat(profitABNCTotalOne) / parseFloat(contractTotalABNCOne)) * 100).toFixed(2) + '%' : 0}</th>
       <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
       <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedContractAmountABNCOne)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
       <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
       <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
       <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedRevenueABNCOne)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
       <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedProfitABNCOne)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
       <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureRevABNCOne)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
       <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureProfABNCOne)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
       <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureBackABNCOne)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
       <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureBackProfitABNCOne)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
     </tr>)
 
     divisionContractsABNCOne.push({Division: `TOTALS ABNC: DIVISION ` + [this.state.userDivisionNum], 'Department Code': ``,
       'Job Name': ``, Status: ``, 'Contract Amount': `${'$' + Math.round(contractTotalABNCOne).toLocaleString(undefined, {maximumFractionDigits:2})}`,
       'Gross Margin': `${'$' + Math.round(profitABNCTotalOne).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': parseFloat(profitABNCTotalOne) ? `${((parseFloat(profitABNCTotalOne) / parseFloat(contractTotalABNCOne)) * 100).toFixed(2) + '%'}` : 0 + '%', 'Hit Rato': ``,
       Backlog: `${'$' + (expectedContractAmountABNCOne).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': ``, 'Months': ``,
       Revenue: `${'$' + Math.round(expectedRevenueABNCOne).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + Math.round(expectedProfitABNCOne).toLocaleString(undefined, {maximumFractionDigits:2})}`,
       'Revenue Year 2': `${'$' + Math.round(expectedFutureRevABNCOne).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + Math.round(expectedFutureProfABNCOne).toLocaleString(undefined, {maximumFractionDigits:2})}`,
       'Revenue Year 3': `${'$' + Math.round(expectedFutureBackABNCOne).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + Math.round(expectedFutureBackProfitABNCOne).toLocaleString(undefined, {maximumFractionDigits:2})}`
       })
 
       divisionFATotalOne.push(<tr key={20002} style={{ fontSize: '17px'}}>
       <th colSpan={3} style={{ textAlign: 'center', border: '1px solid #005A8B'}}>TOTALS FA: DIVISION {this.state.userDivisionNum}</th>
       <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
       <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(contractTotalFAOne)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
       <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(profitFATotalOne)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
       <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((parseFloat(profitFATotalOne) / parseFloat(contractTotalFAOne)) * 100) ? ((parseFloat(profitFATotalOne) / parseFloat(contractTotalFAOne)) * 100).toFixed(2) + '%' : 0}</th>
       <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
       <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedContractAmountFAOne)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
       <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
       <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
       <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedRevenueFAOne)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
       <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedProfitFAOne)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
       <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureRevFAOne)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
       <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureProfFAOne)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
       <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureBackFAOne)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
       <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedFutureBackProfitFAOne)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
     </tr>)
 
       divisionContractsFAOne.push({Division: `TOTALS FA: DIVISION ` + [this.state.userDivisionNum], 'Department Code': ``,
       'Job Name': ``, Status: ``, 'Contract Amount': `${'$' + Math.round(contractTotalFAOne).toLocaleString(undefined, {maximumFractionDigits:2})}`,
       'Gross Margin': `${'$' + Math.round(profitFATotalOne).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': parseFloat(profitFATotalOne) ? `${((parseFloat(profitFATotalOne) / parseFloat(contractTotalFAOne)) * 100).toFixed(2) + '%'}` : 0 + '%', 'Hit Rato': ``,
       Backlog: `${'$' + parseFloat(Math.round(expectedContractAmountFAOne)).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': ``, 'Months': ``,
       Revenue: `${'$' + Math.round(expectedRevenueFAOne).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + Math.round(expectedProfitFAOne).toLocaleString(undefined, {maximumFractionDigits:2})}`,
       'Revenue Year 2': `${'$' + Math.round(expectedFutureRevFAOne).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + Math.round(expectedFutureProfFAOne).toLocaleString(undefined, {maximumFractionDigits:2})}`,
       'Revenue Year 3': `${'$' + Math.round(expectedFutureBackFAOne).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + Math.round(expectedFutureBackProfitFAOne).toLocaleString(undefined, {maximumFractionDigits:2})}`
       })
 
       divisionCombinedTotalOne.push(<tr key={20002} style={{ fontSize: '17px'}}>
       <th colSpan={3} style={{ textAlign: 'center', border: '1px solid #005A8B'}}>TOTALS COMBINED PROJECTION: DIVISION {this.state.userDivisionNum}</th>
       <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
       <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(contractTotalOne) + Math.round(contractTotalABNCOne) + Math.round(contractTotalFAOne)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
       <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(profitTotalOne) + Math.round(profitABNCTotalOne) + Math.round(profitFATotalOne)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
       <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{((parseFloat(Math.round(profitTotalOne) + Math.round(profitABNCTotalOne) + Math.round(profitFATotalOne)) / (Math.round(contractTotalOne) + Math.round(contractTotalABNCOne) + Math.round(contractTotalFAOne))) * 100).toFixed(2) + '%'}</th>
       <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
       <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + parseFloat(Math.round(expectedConAmountOne) + Math.round(expectedContractAmountABNCOne) + Math.round(expectedContractAmountFAOne)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
       <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
       <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
       <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(expectedRevenueOne) + Math.round(expectedRevenueABNCOne) + Math.round(expectedRevenueFAOne)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
       <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(expectedProfitOne) + Math.round(expectedProfitABNCOne) + Math.round(expectedProfitFAOne)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
       <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(expectedFutureRevOne) + Math.round(expectedFutureRevABNCOne) + Math.round(expectedFutureRevFAOne)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
       <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(expectedFutureProfOne) + Math.round(expectedFutureProfABNCOne) + Math.round(expectedFutureProfFAOne)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
       <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(expectedFutureBackOne) + Math.round(expectedFutureBackABNCOne) + Math.round(expectedFutureBackFAOne)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
       <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (Math.round(expectedFutureBackProfitOne) + Math.round(expectedFutureBackProfitABNCOne) + Math.round(expectedFutureBackProfitFAOne)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
     </tr>)

        var finalDivisionArrayOne = divisionContractsOne.concat(divisionContractsABNCOne).concat(divisionContractsFAOne)


        div1ArrayExecAdj.forEach(function (values){
          const { division, div_1_revenue_1, div_1_profit_1, div_1_revenue_2, div_1_profit_2, div_1_revenue_3, div_1_profit_3} = values //destructing)
            if(division === userDivisionNumber){
              console.log("Division: " + division + " DivisionNum: " + userDivisionNumber)
              console.log(div1ArrayExecAdj)
              divisionCombinedTotalOneExecAdj.push(<tr key={20002} style={{ fontSize: '17px'}}>
              <th colSpan={3} style={{ textAlign: 'center', border: '1px solid #005A8B'}}>TOTALS COMBINED PLAN: DIVISION {userDivisionNumber}</th>
              <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
              <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
              <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
              <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
              <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
              <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
              <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
              <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
              <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (parseInt(div_1_revenue_1)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
              <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (parseInt(div_1_profit_1)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
              <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (parseInt(div_1_revenue_2)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
              <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (parseInt(div_1_profit_2)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
              <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (parseInt(div_1_revenue_3)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
              <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{'$' + (parseInt(div_1_profit_3)).toLocaleString(undefined, {maximumFractionDigits:2})}</th>
              </tr>)
      
                divisionCombinedTotalOnePercent.push(<tr key={20002} style={{ fontSize: '17px'}}>
                <th colSpan={3} style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
                <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
                <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
                <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
                <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
                <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
                <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
                <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
                <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}></th>
                <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{(Math.round(expectedRevenueOne) + Math.round(expectedRevenueABNCOne) + Math.round(expectedRevenueFAOne)) ? (((Math.round(expectedRevenueOne) + Math.round(expectedRevenueABNCOne) + Math.round(expectedRevenueFAOne)) / parseInt(div_1_revenue_1)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%' : 0 + '%'}</th>
                <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{(Math.round(expectedProfitOne) + Math.round(expectedProfitABNCOne) + Math.round(expectedProfitFAOne)) ? (((Math.round(expectedProfitOne) + Math.round(expectedProfitABNCOne) + Math.round(expectedProfitFAOne)) / parseInt(div_1_profit_1)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%' : 0 + '%'}</th>
                <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{(Math.round(expectedFutureRevOne) + Math.round(expectedFutureRevABNCOne) + Math.round(expectedFutureRevFAOne)) ? (((Math.round(expectedFutureRevOne) + Math.round(expectedFutureRevABNCOne) + Math.round(expectedFutureRevFAOne)) / parseInt(div_1_revenue_2)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%' : 0 + '%'}</th>
                <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{(Math.round(expectedFutureProfOne) + Math.round(expectedFutureProfABNCOne) + Math.round(expectedFutureProfFAOne)) ? (((Math.round(expectedFutureProfOne) + Math.round(expectedFutureProfABNCOne) + Math.round(expectedFutureProfFAOne)) / parseInt(div_1_profit_2)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%' : 0 + '%'}</th>
                <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{(Math.round(expectedFutureBackOne) + Math.round(expectedFutureBackABNCOne) + Math.round(expectedFutureBackFAOne)) ? (((Math.round(expectedFutureBackOne) + Math.round(expectedFutureBackABNCOne) + Math.round(expectedFutureBackFAOne)) / parseInt(div_1_revenue_3)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%' : 0 + '%'}</th>
                <th style={{ textAlign: 'center', border: '1px solid #005A8B'}}>{(Math.round(expectedFutureBackProfitOne) + Math.round(expectedFutureBackProfitABNCOne) + Math.round(expectedFutureBackProfitFAOne)) ? (((Math.round(expectedFutureBackProfitOne) + Math.round(expectedFutureBackProfitABNCOne) + Math.round(expectedFutureBackProfitFAOne)) / parseInt(div_1_profit_3)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%' : 0 + '%'}</th>
                </tr>)

                  finalDivisionArrayOne.push({Division: `TOTALS COMBINED PROJECTION: DIVISION ` + userDivisionNumber, 'Department Code': ``,
                  'Job Name': ``, Status: ``, 'Contract Amount': `${'$' + (Math.round(contractTotalOne) + Math.round(contractTotalABNCOne) + Math.round(contractTotalFAOne)).toLocaleString(undefined, {maximumFractionDigits:2})}`,
                  'Gross Margin': `${'$' + parseFloat(Math.round(profitTotalOne) + Math.round(profitABNCTotalOne) + Math.round(profitFATotalOne)).toLocaleString(undefined, {maximumFractionDigits:2})}`,'Gross Margin %': `${((parseFloat(Math.round(profitTotalOne) + Math.round(profitABNCTotalOne) + Math.round(profitFATotalOne)) / (Math.round(contractTotalOne) + Math.round(contractTotalABNCOne) + Math.round(contractTotalFAOne))) * 100).toFixed(2) + '%'}`, 'Hit Rato': ``,
                  Backlog: `${'$' + parseFloat(Math.round(expectedConAmountOne) + Math.round(expectedContractAmountABNCOne) + Math.round(expectedContractAmountFAOne)).toLocaleString(undefined, {maximumFractionDigits:2})}`,  'Start Date': ``, 'Months': ``,
                  Revenue: `${'$' + (Math.round(expectedRevenueOne) + Math.round(expectedRevenueABNCOne) + Math.round(expectedRevenueFAOne)).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + (Math.round(expectedProfitOne) + Math.round(expectedProfitABNCOne) + Math.round(expectedProfitFAOne)).toLocaleString(undefined, {maximumFractionDigits:2})}`,
                  'Revenue Year 2': `${'$' + (Math.round(expectedFutureRevOne) + Math.round(expectedFutureRevABNCOne) + Math.round(expectedFutureRevFAOne)).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + (Math.round(expectedFutureProfOne) + Math.round(expectedFutureProfABNCOne) + Math.round(expectedFutureProfFAOne)).toLocaleString(undefined, {maximumFractionDigits:2})}`,
                  'Revenue Year 3': `${'$' + (Math.round(expectedFutureBackOne) + Math.round(expectedFutureBackABNCOne) + Math.round(expectedFutureBackFAOne)).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + (Math.round(expectedFutureBackProfitOne) + Math.round(expectedFutureBackProfitABNCOne) + Math.round(expectedFutureBackProfitFAOne)).toLocaleString(undefined, {maximumFractionDigits:2})}`
                  })

                  finalDivisionArrayOne.push({Division: `TOTALS COMBINED PLAN: DIVISION ` + userDivisionNumber, 'Department Code': ``,
                'Job Name': ``, Status: ``, 'Contract Amount': ``,
                'Gross Margin': ``,'Gross Margin %': ``, 'Hit Rato': ``,
                Backlog: ``,  'Start Date': ``, 'Months': ``,
                Revenue: `${'$' + (parseInt(div_1_revenue_1)).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $': `${'$' + (parseInt(div_1_profit_1)).toLocaleString(undefined, {maximumFractionDigits:2})}`,
                'Revenue Year 2': `${'$' + (parseInt(div_1_revenue_2)).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 2': `${'$' + (parseInt(div_1_profit_2)).toLocaleString(undefined, {maximumFractionDigits:2})}`,
                'Revenue Year 3': `${'$' + (parseInt(div_1_revenue_3)).toLocaleString(undefined, {maximumFractionDigits:2})}`, 'Gross Margin $ Year 3': `${'$' + (parseInt(div_1_profit_3)).toLocaleString(undefined, {maximumFractionDigits:2})}`
                })

                finalDivisionArrayOne.push({Division: ``, 'Department Code': ``,
                'Job Name': ``, Status: ``, 'Contract Amount': ``,
                'Gross Margin': ``,'Gross Margin %': ``, 'Hit Rato': ``,
                Backlog: ``,  'Start Date': ``, 'Months': ``,
                Revenue: (Math.round(expectedRevenueOne) + Math.round(expectedRevenueABNCOne) + Math.round(expectedRevenueFAOne)) / parseInt(div_1_revenue_1) ? `${(((Math.round(expectedRevenueOne) + Math.round(expectedRevenueABNCOne) + Math.round(expectedRevenueFAOne)) / parseInt(div_1_revenue_1)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}` : 0 + '%', 'Gross Margin $': (Math.round(expectedProfitOne) + Math.round(expectedProfitABNCOne) + Math.round(expectedProfitFAOne)) ?  `${(((Math.round(expectedProfitOne) + Math.round(expectedProfitABNCOne) + Math.round(expectedProfitFAOne)) / parseInt(div_1_profit_1)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}` : 0 + '%',
                'Revenue Year 2': (Math.round(expectedFutureRevOne) + Math.round(expectedFutureRevABNCOne) + Math.round(expectedFutureRevFAOne)) ? `${(((Math.round(expectedFutureRevOne) + Math.round(expectedFutureRevABNCOne) + Math.round(expectedFutureRevFAOne)) / parseInt(div_1_revenue_2)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}` : 0 + '%', 'Gross Margin $ Year 2': (Math.round(expectedFutureProfOne) + Math.round(expectedFutureProfABNCOne) + Math.round(expectedFutureProfFAOne)) ? `${(((Math.round(expectedFutureProfOne) + Math.round(expectedFutureProfABNCOne) + Math.round(expectedFutureProfFAOne)) / parseInt(div_1_profit_2)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}` : 0 + '%',
                'Revenue Year 3': (Math.round(expectedFutureBackOne) + Math.round(expectedFutureBackABNCOne) + Math.round(expectedFutureBackFAOne)) ? `${(((Math.round(expectedFutureBackOne) + Math.round(expectedFutureBackABNCOne) + Math.round(expectedFutureBackFAOne)) / parseInt(div_1_revenue_3)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}` : 0 + '%', 'Gross Margin $ Year 3': (Math.round(expectedFutureBackProfitOne) + Math.round(expectedFutureBackProfitABNCOne) + Math.round(expectedFutureBackProfitFAOne)) ? `${(((Math.round(expectedFutureBackProfitOne) + Math.round(expectedFutureBackProfitABNCOne) + Math.round(expectedFutureBackProfitFAOne)) / parseInt(div_1_profit_3)) * 100).toLocaleString(undefined, {maximumFractionDigits:2}) + '%'}` : 0 + '%'
                })
            }
        })
 
       mergedCompletedSectionsOne = finalDivisionArrayOne.map((x) => x);


 }

}




    render(){

      const headerSection = "headerSection"
      const yearSection = "yearSection"
      const headerSectionTotal = "headerSectionTotal"
      const project_report = "project_report"
      const view = this.state.userRole === 'Writer';
      const divisionNumbersView = this.state.userDivisionNum === 'all';
      const loadedData = this.state.data;



      if(!loadedData){
         return (<Container>Loading...</Container>)
      }
  
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
          { divisionNumbersView ? (
            <>
          <Container>
              <Row>
                  <Col className="FY19Plan" style={{paddingTop: '1%'}}>
                  <div>
                    <h1 id='title'>Carroll Daniel Construction</h1>
                    <h1 id='title'>Three Year Revenue Gross Margin Report</h1>
                    <h1 id='title'>For The Year Ending December 31, {currentYearResp} and {parseInt(currentYearResp)+2}</h1>
                    <h1 id='title'>Projected Date: {currentDateString}, {currentYearResp}</h1>
                  </div>
                  <div>
                    <table>
                        <tbody>
                        {this.renderTableData(project_report)}
                        <tr>{this.renderTableHeader(headerSectionTotal)}</tr>
                        </tbody>
                    </table>
                    </div>
                  </Col>
              </Row>
          </Container>
          <Container>
              <Row>
                  <Col className="FY19Plan">
                  <Button style={{ backgroundColor: '#4D4F53'}} onClick={(e) => this.exportToCSV(mergedCompletedSections1,"Division-1-" + currentDateString +','+ currentYearResp)}>Export Division Wiley</Button>
                  <Button style={{ backgroundColor: '#4D4F53'}} onClick={(e) => this.exportAllToCSV()}>Export All Divisions</Button>
                  <div className="tableFixHead">
                    <table id='tableMain'>
                        <thead>
                        <tr>{this.renderTableHeader(yearSection)}</tr>
                        <tr>{this.renderTableHeader(headerSection)}</tr>
                        </thead>
                        <tbody>
                        {childrenDataContract1}
                        {divisionContractsTotal}
                        {childrenDataABNC1}
                        {divisionABNCTotal}
                        {childrenDataFA1}
                        {divisionFATotal}
                        {divisionCombinedTotal}
                        {divisionCombinedTotalPlan}
                        {divisionCombinedTotalPlanPercent}
                        </tbody>
                    </table>
                    </div>
                  </Col>
              </Row>
          </Container>
          <Container>
              <Row>
                  <Col className="FY19Plan">
                  <Button style={{ backgroundColor: '#4D4F53'}} onClick={(e) => this.exportToCSV(mergedCompletedSections2,"Division-2-" + currentDateString +','+ currentYearResp)}>Export Division Haynes</Button>
                  <Button style={{ backgroundColor: '#4D4F53'}} onClick={(e) => this.exportAllToCSV()}>Export All Divisions</Button>
                  <div className="tableFixHead">
                    <table id='tableMain'>
                        <thead>
                        <tr>{this.renderTableHeader(yearSection)}</tr>
                        <tr>{this.renderTableHeader(headerSection)}</tr>
                        </thead>
                        <tbody>
                        {childrenDataContract2}
                        {divisionContractsTotal2}
                        {childrenDataABNC2}
                        {divisionABNCTotal2}
                        {childrenDataFA2}
                        {divisionFATotal2}
                        {divisionCombinedTotal2}
                        {divisionCombinedTotalPlanTwo}
                        {divisionCombinedTotalPlanPercentTwo}
                        </tbody>
                    </table>
                    </div>
                  </Col>
              </Row>
          </Container>
          <Container>
              <Row>
                  <Col className="FY19Plan">
                  <Button style={{ backgroundColor: '#4D4F53'}} onClick={(e) => this.exportToCSV(mergedCompletedSections3,"Division-3-" + currentDateString +','+ currentYearResp)}>Export Division Commercial</Button>
                  <Button style={{ backgroundColor: '#4D4F53'}} onClick={(e) => this.exportAllToCSV()}>Export All Divisions</Button>
                  <div className="tableFixHead">
                    <table id='tableMain'>
                        <thead>
                        <tr>{this.renderTableHeader(yearSection)}</tr>
                        <tr>{this.renderTableHeader(headerSection)}</tr>
                        </thead>
                        <tbody>
                        {childrenDataContract3}
                        {divisionContractsTotal3}
                        {childrenDataABNC3}
                        {divisionABNCTotal3}
                        {childrenDataFA3}
                        {divisionFATotal3}
                        {divisionCombinedTotal3}
                        {divisionCombinedTotalPlanThree}
                        {divisionCombinedTotalPlanPercentThree}
                        </tbody>
                    </table>
                    </div>
                  </Col>
              </Row>
          </Container>
          <Container>
              <Row>
                  <Col className="FY19Plan">
                  <Button style={{ backgroundColor: '#4D4F53'}} onClick={(e) => this.exportToCSV(mergedCompletedSections4,"Division-4-" + currentDateString +','+ currentYearResp)}>Export Division Broadwell</Button>
                  <Button style={{ backgroundColor: '#4D4F53'}} onClick={(e) => this.exportAllToCSV()}>Export All Divisions</Button>
                  <div className="tableFixHead">
                    <table id='tableMain'>
                        <thead>
                        <tr>{this.renderTableHeader(yearSection)}</tr>
                        <tr>{this.renderTableHeader(headerSection)}</tr>
                        </thead>
                        <tbody>
                        {childrenDataContract4}
                        {divisionContractsTotal4}
                        {childrenDataABNC4}
                        {divisionABNCTotal4}
                        {childrenDataFA4}
                        {divisionFATotal4}
                        {divisionCombinedTotal4}
                        {divisionCombinedTotalPlanFour}
                        {divisionCombinedTotalPlanPercentFour}
                        </tbody>
                    </table>
                    </div>
                  </Col>
              </Row>
          </Container>
          <Container>
              <Row>
                  <Col className="FY19Plan">
                  <Button style={{ backgroundColor: '#4D4F53'}} onClick={(e) => this.exportToCSV(mergedCompletedSections5,"Division-5-" + currentDateString +','+ currentYearResp)}>Export Division Stone</Button>
                  <Button style={{ backgroundColor: '#4D4F53'}} onClick={(e) => this.exportAllToCSV()}>Export All Divisions</Button>
                  <div className="tableFixHead">
                    <table id='tableMain'>
                        <thead>
                        <tr>{this.renderTableHeader(yearSection)}</tr>
                        <tr>{this.renderTableHeader(headerSection)}</tr>
                        </thead>
                        <tbody>
                        {childrenDataContract5}
                        {divisionContractsTotal5}
                        {childrenDataABNC5}
                        {divisionABNCTotal5}
                        {childrenDataFA5}
                        {divisionFATotal5}
                        {divisionCombinedTotal5}
                        {divisionCombinedTotalPlanFive}
                        {divisionCombinedTotalPlanPercentFive}
                        </tbody>
                    </table>
                    </div>
                  </Col>
              </Row>
          </Container>
          <Container>
              <Row>
                  <Col className="FY19Plan">
                  <Button style={{ backgroundColor: '#4D4F53'}} onClick={(e) => this.exportToCSV(mergedCompletedSections6,"Division-6-" + currentDateString +','+ currentYearResp)}>Export Division Kitchin</Button>
                  <Button style={{ backgroundColor: '#4D4F53'}} onClick={(e) => this.exportAllToCSV()}>Export All Divisions</Button>
                  <div className="tableFixHead">
                    <table id='tableMain'>
                        <thead>
                        <tr>{this.renderTableHeader(yearSection)}</tr>
                        <tr>{this.renderTableHeader(headerSection)}</tr>
                        </thead>
                        <tbody>
                        {childrenDataContract6}
                        {divisionContractsTotal6}
                        {childrenDataABNC6}
                        {divisionABNCTotal6}
                        {childrenDataFA6}
                        {divisionFATotal6}
                        {divisionCombinedTotal6}
                        {divisionCombinedTotalPlanSix}
                        {divisionCombinedTotalPlanPercentSix}
                        </tbody>
                    </table>
                    </div>
                  </Col>
              </Row>
          </Container>
          <Container>
              <Row>
                  <Col className="FY19Plan">
                  <Button style={{ backgroundColor: '#4D4F53'}} onClick={(e) => this.exportToCSV(mergedCompletedSections7,"Division-7-" + currentDateString +','+ currentYearResp)}>Export Division Gowens</Button>
                  <Button style={{ backgroundColor: '#4D4F53'}} onClick={(e) => this.exportAllToCSV()}>Export All Divisions</Button>
                  <div className="tableFixHead">
                    <table id='tableMain'>
                        <thead>
                        <tr>{this.renderTableHeader(yearSection)}</tr>
                        <tr>{this.renderTableHeader(headerSection)}</tr>
                        </thead>
                        <tbody>
                        {childrenDataContract7}
                        {divisionContractsTotal7}
                        {childrenDataABNC7}
                        {divisionABNCTotal7}
                        {childrenDataFA7}
                        {divisionFATotal7}
                        {divisionCombinedTotal7}
                        {divisionCombinedTotalPlanSeven}
                        {divisionCombinedTotalPlanPercentSeven}
                        </tbody>
                    </table>
                    </div>
                  </Col>
              </Row>
          </Container>
          <Container>
              <Row>
                  <Col className="FY19Plan">
                  <Button style={{ backgroundColor: '#4D4F53'}} onClick={(e) => this.exportToCSV(mergedCompletedSections11,"Division-11-" + currentDateString +','+ currentYearResp)}>Export Division Misc</Button>
                  <Button style={{ backgroundColor: '#4D4F53'}} onClick={(e) => this.exportAllToCSV()}>Export All Divisions</Button>
                  <div className="tableFixHead">
                    <table id='tableMain'>
                        <thead>
                        <tr>{this.renderTableHeader(yearSection)}</tr>
                        <tr>{this.renderTableHeader(headerSection)}</tr>
                        </thead>
                        <tbody>
                        {childrenDataContract11}
                        {divisionContractsTotal11}
                        {childrenDataABNC11}
                        {divisionABNCTotal11}
                        {childrenDataFA11}
                        {divisionFATotal11}
                        {divisionCombinedTotal11}
                        {divisionCombinedTotalPlanEleven}
                        {divisionCombinedTotalPlanPercentEleven}
                        </tbody>
                    </table>
                    </div>
                  </Col>
              </Row>
          </Container>
          </>
          ) :  <><Container>
              <Row>
                  <Col className="FY19Plan">
                  <h1 id='title'>Carroll Daniel Construction</h1>
                  <h1 id='title'>Three Year Revenue Gross Margin Report</h1>
                  <h1 id='title'>For The Year Ending December 31, {currentYearResp} and {parseInt(currentYearResp)+2}</h1>
                  <h1 id='title'>Projected Date: {currentDateString}, {currentYearResp}</h1>
                  <div>
                    <table>
                        <tbody>
                        {this.renderTableData(project_report)}
                        <tr>{this.renderTableHeader(headerSectionTotal)}</tr>
                        </tbody>
                    </table>
                    </div>
                  </Col>
              </Row>
          </Container>
          <Container>
              <Row>
                  <Col className="FY19Plan">
                  <Button style={{ backgroundColor: '#4D4F53'}} onClick={(e) => this.exportToCSV(mergedCompletedSectionsOne,"Division-" + this.state.userDivisionNum + "-" + currentDateString +','+ currentYearResp)}>Export Division {this.state.userDivisionNum}</Button>
                  <div className="tableFixHead">
                    <table id='tableMain'>
                        <thead>
                        <tr>{this.renderTableHeader(yearSection)}</tr>
                        <tr>{this.renderTableHeader(headerSection)}</tr>
                        </thead>
                        <tbody>
                        {childrenDataContractOne}
                        {divisionContractsTotalOne}
                        {childrenDataABNCOne}
                        {divisionABNCTotalOne}
                        {childrenDataFAOne}
                        {divisionFATotalOne}
                        {divisionCombinedTotalOne}
                        {divisionCombinedTotalOneExecAdj}
                        {divisionCombinedTotalOnePercent}
                        </tbody>
                    </table>
                    </div>
                  </Col>
              </Row>
          </Container></>}
          </>
        )

    }
}

export default withAuth(RevenueProfitYearThree);
