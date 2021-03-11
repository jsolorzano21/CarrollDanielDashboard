/* eslint-disable no-loop-func */
import React, { Component } from 'react'
import { Bar, Line, Pie } from 'react-chartjs-2'
import 'chartjs-plugin-trendline';
//import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Board from '@lourenci/react-kanban';
import withAuth from '../services/withAuth'
import AuthHelperMethods from '../services/AuthHelperMethods';
import '../global'
import axios from 'axios' 
import Toggle from 'react-toggle'
import * as jwt_decode from 'jwt-decode';
import { Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Timeline from 'react-calendar-timeline'
// make sure you include the timeline stylesheet or the timeline will not be styled
import 'react-calendar-timeline/lib/Timeline.css'
import moment from 'moment'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { Container, Box} from "./HomeStyles";


const groups = [{ id: 4, title: 'Bruce, Jeff', rightTitle: 'group4', bgColor: '#005A8B' },{ id: 5, title: 'Chance, James', rightTitle: 'group5' }, { id: 3, title: 'Boyd, Landon', rightTitle: 'group3' }]

var keys = {
  groupIdKey: "id",
  groupTitleKey: "title",
  groupRightTitleKey: "rightTitle",
  itemIdKey: "id",
  itemTitleKey: "title",
  itemDivTitleKey: "title",
  itemGroupKey: "group",
  itemTimeStartKey: "start",
  itemTimeEndKey: "end",
  groupLabelKey: "title"
};

const items = [
  {
    id: 4,
    group: 4,
    title: 'Field Oversight',
    start: moment(),
    color: 'white',
    selectedBgColor: '#005A8B',
    bgColor : '#005A8B',
    end: moment().add(3, 'hour')
  },
  {
    id: 1,
    group: 4,
    title: 'Osborne High Gym',
    start: moment(),
    color: 'white',
    selectedBgColor: '#005A8B',
    bgColor : '#005A8B',
    end: moment().add(3, 'hour')
  },
  {
    id: 2,
    group: 5,
    title: 'East Forsyth High School',
    start: moment().add(-0.5, 'hour'),
    color: 'white',
    selectedBgColor: '#005A8B',
    bgColor : '#005A8B',
    end: moment().add(5, 'hour')
  },
  {
    id: 3,
    group: 3,
    title: 'Field Oversight (ATL)',
    start: moment().add(2, 'hour'),
    color: 'white',
    selectedBgColor: '#005A8B',
    bgColor : '#005A8B',
    end: moment().add(30, 'hour')
  }
]

const data = {
  labels: ['2016','2017','2018','2019','2020','2021'],
  datasets: [
    {
      label: 'EMR',
      backgroundColor: '#005A8B',
      borderColor: '#005A8B',
      borderWidth: 1,
      hoverBackgroundColor: '#005A8B',
      hoverBorderColor: '#005A8B',
      data: [.75,.72,.68,.67,.67,.68]
    }
  ]
};

const data2 = {
  labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  datasets: [
    {
      label: '2019',
      backgroundColor: '#B1B3B3',
      borderColor: '#B1B3B3',
      borderWidth: 1,
      hoverBackgroundColor: '#B1B3B3',
      hoverBorderColor: '#B1B3B3',
      data: [33222,59841,86903,113670,150117,170459,202196,242309,290271,320855,359940,380772]
    },
    {
      label: '2020',
      backgroundColor: '#005A8B',
      borderColor: '#005A8B',
      borderWidth: 1,
      hoverBackgroundColor: '#005A8B',
      hoverBorderColor: '#005A8B',
      data: [31781,64510,97983,140838,175278,211730,256668]//0,0,0,0,0]
    }
  ]
};

const data3 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  datasets: [
    {
      label: 'RIR Rate',
      backgroundColor: '#005A8B',
      borderColor: '#005A8B',
      borderWidth: 1,
      hoverBackgroundColor: '#005A8B',
      hoverBorderColor: '#005A8B',
      data: [0, 0, 4.08, 2.84, 2.28, 1.88, 1.55]
    }
  ]
};

const data4 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  datasets: [
    {
      label: 'LTIR Rate',
      backgroundColor: '#005A8B',
      borderColor: '#005A8B',
      borderWidth: 1,
      hoverBackgroundColor: '#005A8B',
      hoverBorderColor: '#005A8B',
      data: [0, 0, 0, 0, 0, 0, 0, .78]
    }
  ]
};

const humanResourcedata = {
  labels: ['Voluntary Turnover','Involuntary Turnover'],
  datasets: [
    {
      data: [7, 12],
      backgroundColor: [
      '#00558C ',
      '#B1B3B3'
      ],
      hoverBackgroundColor: [
      '#00558C ',
      '#B1B3B3'
      ]
    }
  ]
};

const humanResourceNeedData = {
  labels: ['Voluntary Turnover','Involuntary Turnover'],
  datasets: [
    {
      data: [7, 12],
      backgroundColor: [
      '#00558C ',
      '#B1B3B3'
      ],
      hoverBackgroundColor: [
      '#00558C ',
      '#B1B3B3'
      ]
    }
  ]
};

const humanResourceHireData = {
  labels: ['BROADWELL','FINANCE','GOWENS','HAYNES','IT','KITCHIN','LEGAL','MARKETING','PRECON','STONE','VDC|DESIGN','WILEY'],
  datasets: [
    {
      data: [3, 1, 1, 3, 1, 2, 1, 2, 1, 9, 4, 9],
      backgroundColor: [
      '#E7EFF7',
      '#D2D6E1',
      '#D9E0EB',
      '#00558C',
      '#B1B3B3',
      '#53565A',
      '#002B49',
      '#298FC2',
      '#888B8D',
      '#D3E3F1',
      '#B1B9CB',
      '#BCCADD'
      ],
      hoverBackgroundColor: [
      '#E7EFF7',
      '#D2D6E1',
      '#D9E0EB',
      '#00558C',
      '#B1B3B3',
      '#53565A',
      '#002B49',
      '#298FC2',
      '#888B8D',
      '#D3E3F1',
      '#B1B9CB',
      '#BCCADD'
      ]
    }
  ]
};

var divisionNum = 0;
var divisionNumABNC = 0;
var divisionNumFA = 0;
var currentYearResp = '';
var currentQuarterResp = '';
var sumValueContract = '';
var sumValueMonthlyContract = '';
var sumValueMonthlyABNC = '';
var sumValueMonthlyFA = '';
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
var countClicksSafety = 1;
var countMonthlyClicks = 1;
var countClicksProfit = 1;
var selectedValue = '';
var selectedValueSafety = '';
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
var stackedValue = false;
var stackedValueProfit = false;
var screenWidth = 0;
var screenHeight = 0;

//retrieves all the distinct divisions
const distinct = (divisionVal,index,self) => {
  return self.indexOf(divisionVal) === index;
}

//holds all the divisions that will be filtered later
const div = [];
const yearValues = [];

const board = {
  lanes: [
    {
      id: 1,
      title: 'GENERAL SUPERINTENDENTS',
      cards: [
        {
          id: 1,
          title: 'Bruce Jeff'
        },
        {
          id: 2,
          title: 'Chance James',
          description: 'Card content'
        },
        {
          id: 3,
          title: 'Boyd Landon',
          description: 'Card content'
        }
      ]
    },
    {
      id: 2,
      title: '3rd Qtr.',
      cards: [
      ]
    },
    {
      id: 3,
      title: '4th Qtr.',
      cards: [
        {
          id: 10,
          title: 'Card title 10',
          description: 'Card content'
        },
        {
          id: 11,
          title: 'Card title 11',
          description: 'Card content'
        }
      ]
    },
    {
      id: 4,
      title: '1st Qtr.',
      cards: [
        {
          id: 12,
          title: 'Card title 12',
          description: 'Card content'
        },
        {
          id: 13,
          title: 'Card title 13',
          description: 'Card content'
        }
      ]
    }
  ]
}


class Graphs extends Component{

  constructor(props) {
    super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
    
    const defaultTimeStart = moment()
      .startOf("day")
      .toDate();
    const defaultTimeEnd = moment()
      .startOf("day")
      .add(1, "day")
      .toDate();

    this.state = { //state is by default an object
      userRole: '',
      currentYearLabel: '',
      currentYearLabelProfit: '',
      ProjectReportData: [],
      ActualRevenueData: [],
      dataLoadCheck: null,
      dataSet: {},
      dataSetProfit: {},
      revenueTotal: {},
      safetyTotal: {},
      revenueMonthlyValues: {},
      revenueTotalProfit: {},
      combinedDivisionDataSet: {},
      combinedSafetyDivisionDataSet: {},
      combinedDivisionDataSetProfit: {},
      dataLabel: [],
      uniqueDiv: [],
      dataSetRecord : [],
      monthlyDataSetRecord: {},
      homeMonthlyDataSetRecord: {},
      dataSetRecordProfit: [],
      revenueYearRecord : [],
      revenueYearRecordProfit : [],
      combinedYearRecord : [],
      divisionCombinedRecord : [],
      homeState: [],
      homeSafetyState: [],
      homeStateProfit: [],
      divYearQuarter : [],
      ManagementAdjData: [],
      displayButton: false,
      safetyDisplayButton: false,
      displayMonthlyButton: false,
      changeGraph: false,
      checkClicks: false,
      checkClicksProfit: false,
      displayButtonProfit: false,
      changeGraphProfit: false,
      error: false,  
      defaultTimeStart,
      defaultTimeEnd,
      groups,
      items,
      students: [
        { financial: 'Revenue', projected: '$208,577,209', YTD: '$219,180,627', V: '$10,603,418', current_month: '$51,275,156', avg: '$36,530,105', previous_month: '$32,223,020' },
        { financial: 'Gross Margin', projected: '$9,023,714', YTD: '$8,609,499', V: '$-414,215', current_month: '$1,893,838', avg: '$1,434,916 ', previous_month: '$1,131,809' },
        { financial: 'Gross Margin % ', projected: '4.33%', YTD: '3.93%', V: '-.4%', current_month: '3.69%', avg: '3.93%', previous_month: '3.51%' },
        { financial: 'G & A', projected: '$6,525,376', YTD: '$6,493,821', V: '$-31,555', current_month: '$1,038,411', avg: '$1,082,304', previous_month: '$1,365,876' },
        { financial: 'Net Operating Income', projected: '$2,498,338', YTD: '$2,115,678', V: '$-382,660', current_month: '$855,427', avg: '$352,613', previous_month: '$-234,067' },
        { financial: 'Net Operating Income %', projected: '1.20%', YTD: '0.97%', V: '-0.23%', current_month: '1.67%', avg: '0.97%', previous_month: '-0.73%' },
     ],
     safetyNumbers: [
       { year: '2020', mh_ytd: '256,668', emr: '0.67', rir: '1.55', dart: '0.78', ltir: '.78' },
       { year: '2019', mh_ytd: '380,772', emr: '0.67', rir: '1.55', dart: '0.78', ltir: '0' },
    ],
     humanResourceNumbers: [
      { new_hires_ytd: '37', turnover_rate: '11.02%', v_turnover_rate: '7', i_turnover_rate: '12', people_needs: '4' },
      { new_hires_ytd: '37', turnover_rate: '11.02%', v_turnover_rate: '7', i_turnover_rate: '12', people_needs: '4' },
   ],
      tasks: [{name:"Learn Angular", category:"wip", bgcolor: "white"},{name:"Learn Angular 1", category:"wip", bgcolor: "white"},{name:"Learn Angular 2", category:"wip", bgcolor: "white"}, {name:"React", category:"wip", bgcolor:"white"}, {name:"Vue", category:"wip", bgcolor:"white"}]
    }
    this.updateState = this.updateState.bind(this);
    this.updateSafetyState = this.updateSafetyState.bind(this);
    this.updateMonthlyState = this.updateMonthlyState.bind(this);
    this.updateStateProfit = this.updateStateProfit.bind(this);
    this.previousScreenFunction = this.previousScreenFunction.bind(this);
    this.previousSafetyScreenFunction = this.previousSafetyScreenFunction.bind(this);
    this.previousScreenFunctionProfit = this.previousScreenFunctionProfit.bind(this);
    this.previousMonthlyScreenFunction = this.previousMonthlyScreenFunction.bind(this);
    this.handleGraphChange = this.handleGraphChange.bind(this);
    this.handleGraphChangeProfit = this.handleGraphChangeProfit.bind(this);
 }

  itemRenderer = ({ item, timelineContext, itemContext, getItemProps, getResizeProps }) => {
    const { left: leftResizeProps, right: rightResizeProps } = getResizeProps();
    const backgroundColor = itemContext.selected ? (itemContext.dragging ? "red" : item.selectedBgColor) : item.bgColor;
    const borderColor = itemContext.resizing ? "red" : item.bgColor;
    return (
      <div
        {...getItemProps({
          style: {
            backgroundColor,
            color: item.color,
            borderColor,
            borderStyle: "solid",
            borderWidth: 1,
            borderRadius: 4,
            borderLeftWidth: itemContext.selected ? 3 : 1,
            borderRightWidth: itemContext.selected ? 3 : 1
          },
          onMouseDown: () => {
            console.log("on item click", item);
          }
        })}
      >
        {itemContext.useResizeHandle ? <div {...leftResizeProps} /> : null}

        <div
          style={{
            height: itemContext.dimensions.height,
            overflow: "hidden",
            backgroundColor,
            borderColor,
            paddingLeft: 3,
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }}
        >
          {itemContext.title}
        </div>

        {itemContext.useResizeHandle ? <div {...rightResizeProps} /> : null}
        
      </div>
    );
  };

  handleItemMove = (itemId, dragTime, newGroupOrder) => {
    const { items, groups } = this.state;

    const group = groups[newGroupOrder];

    this.setState({
      items: items.map(item =>
        item.id === itemId
          ? Object.assign({}, item, {
              start: dragTime,
              end: dragTime + (item.end - item.start),
              group: group.id
            })
          : item
      )
    });

    console.log("Moved", itemId, dragTime, newGroupOrder);
  };

  handleItemResize = (itemId, time, edge) => {
    const { items } = this.state;

    this.setState({
      items: items.map(item =>
        item.id === itemId
          ? Object.assign({}, item, {
              start: edge === "left" ? time : item.start,
              end: edge === "left" ? item.end : time
            })
          : item
      )
    });

    console.log("Resized", itemId, time, edge);
  };

  /* Create a new instance of the 'AuthHelperMethods' compoenent*/
  Auth = new AuthHelperMethods();

  onDragStart = (ev, id) => {
    console.log('dragstart:',id);
    ev.dataTransfer.setData("id", id);
  }

  onDragOver = (ev) => {
    ev.preventDefault();
  }

  onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");
    console.log("dropped id: " + id)
    console.log(cat)
    var obj = []
    let tasks = this.state.tasks.filter((task) => {
        if (task.name == id) {
          if(task.category === "wip"){
            obj.push({name:"Learn Angular", category:cat, bgcolor: "blue"})
            //task.category = cat;
          }
          //console.log(newState)
          //console.log(id)
        }
        console.log(task)
        return task;
    });

    console.log(tasks)
    var obj3 = obj.concat(tasks); 
    console.log(obj3)

    this.setState({ tasks: obj3});
 }

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

  updateMonthlyState(element, element2){
    var e = element2[0];
    //console.log(element[0]._index)
    if(e !== undefined){
        
        if(countMonthlyClicks === 1){
          selectedValue = e._model.label;
        }
          console.log("1st entered")
          if(e !== undefined && countMonthlyClicks === 1){
            countMonthlyClicks++;
            let dataCompany = Object.assign({}, this.state.monthlyDataSetRecord);
            console.log(dataCompany)
            this.setState({ revenueMonthlyValues: dataCompany, displayMonthlyButton: true })//, displayButton: true, currentYearLabel: selectedValue})
          }

      }
  }

  previousMonthlyScreenFunction(){
    console.log("click count: " + countMonthlyClicks)
    if(countMonthlyClicks === 2){
      countMonthlyClicks--;
      let dataMonthly = Object.assign({}, this.state.homeMonthlyDataSetRecord);
      console.log("Click 2 entered" + countMonthlyClicks)
      this.setState({ revenueMonthlyValues: dataMonthly, displayMonthlyButton: false})
    }
  }

  updateSafetyState(element, element2){
    var e = element2[0];
    if(e !== undefined){
        if(countClicksSafety === 1){
          selectedValueSafety = e._model.label;
            countClicksSafety++;
            console.log("Last value entered")
            let dataCompany = Object.assign({}, this.state.combinedSafetyDivisionDataSet);
            console.log("DataCompany: " + dataCompany)
            this.setState({ safetyTotal: dataCompany, safetyDisplayButton: true}) //, displayButton: true, currentYearLabel: selectedValue})
        }
      }
  }

  previousSafetyScreenFunction(){
    if(countClicksSafety === 2){
      countClicksSafety--;
      let dataYearly = Object.assign({}, this.state.homeSafetyState);
      console.log(this.state.homeSafetyState)
      this.setState({ safetyTotal: dataYearly, safetyDisplayButton: false})
    }
  }

  updateState(element, element2){
    var e = element2[0];
    //console.log(element[0]._index)
    if(e !== undefined){
        
        if(countClicks === 1){
          selectedValue = e._model.label;
        }


        //console.log(element)
        //console.log(element2)
        var distinctYears = yearValues.filter(distinct).sort((a,b) => a - b);

        if(distinctYears[distinctYears.length - 1] === selectedValue){
          //this.state.combinedDivisionDataSet
          console.log("1st entered")
          if(e !== undefined && countClicks === 1){
            countClicks++;
            stackedValue = true;
            console.log("StackedValue true")
            let dataCompany = Object.assign({}, this.state.combinedDivisionDataSet);
            console.log("DataCompany: " + dataCompany)
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

        var distinctYears = yearValues.filter(distinct).sort((a,b) => a - b);

        if(distinctYears[distinctYears.length - 1] === selectedValue){
          //this.state.combinedDivisionDataSet
          console.log("1st entered")
          if(e !== undefined && countClicksProfit === 1){
            countClicksProfit++;
            stackedValueProfit = true;
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
      stackedValue = false;
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
      stackedValueProfit = false;
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

    if(window.innerWidth > 1024){
      screenWidth = 500
      screenHeight = 450
    }else if(window.innerWidth >= 768 && window.innerWidth <= 1024){
      screenWidth = 500
      screenHeight =450
    }else if(window.innerWidth < 768){
      screenWidth = 400
      screenHeight = 350
    }

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
        "https://rest-site-locations-1594736464770.azurewebsites.net/api/financialResultsData/",
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
      ),
      axios.get(
        "https://rest-site-locations-1594736464770.azurewebsites.net/api/financialYearlyQuarterLabel",
        {headers: {
            "Authorization" : AuthStr,
            "Content-Type" : "application/json"
          }
        }
      ),
      axios.get(
        "https://rest-site-locations-1594736464770.azurewebsites.net/api/financialActualRevenue",
        {headers: {
            "Authorization" : AuthStr,
            "Content-Type" : "application/json"
          }
        }
      )
    ]).then(axios.spread((response, response2, response3, response4, response5) => {
      var yearlyQuarterLabel = response4['data'];

      var optionsLabels = [];
      console.log("Values Loaded")
      yearlyQuarterLabel.forEach(function (values){
        const { label } = values
        optionsLabels.push(label)
        console.log("Labels: " + label)

      })

      var currentQuarterResponse = response['data'];
      currentQuarterResponse.forEach(function (values){
      const { current_year, current_quarter} = values //destructing

      //currentQuarterResp = current_quarter;
      currentYearResp = current_year;
      currentQuarterResp = current_quarter;

    })

      var dataValue = response2['data'];
      var dataManagementAdjustment = response3['data']
      var actualRevenueValue = response5['data']
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
      
    
      if(status === 'Contract'){
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
              if(year === currentYearResp && quarter === currentQuarterResp){
                //console.log("KJ Value: " + k + " MonthlyValue: " + monthlyValue + " Job Name: " + job_name + " Check Loop: " + checkloop + " status: " + status)
                if(this.state["sumRevMonthlyContract" + checkloop + (year) + (quarter)] === undefined){
                  //console.log("KJ Value: " + k + " MonthlyValue: " + monthlyValue + " Job Name: " + job_name + " Check Loop: " + checkloop + " status: " + status)
                  sumValueMonthlyContract = "sumRevMonthlyContract" + checkloop + year + quarter
                  this.setState({["sumRevMonthlyContract" + checkloop + (year) + (quarter)]: 0})
                  newState["sumRevMonthlyContract" + checkloop + (year) + (quarter)] =  newState["sumRevMonthlyContract" + checkloop + (year) + (quarter)] + parseFloat(monthlyValue)
                  this.setState({["sumRevMonthlyContract" + checkloop + (year) + (quarter)]: this.state[sumValueMonthlyContract] + parseFloat(monthlyValue)})
                }else{
                  //console.log("KJ Value: " + k + " MonthlyValue: " + monthlyValue + " Job Name: " + job_name + " Check Loop: " + checkloop)
                  sumValueMonthlyContract = "sumRevMonthlyContract" + checkloop + year + quarter
                  newState["sumRevMonthlyContract " + checkloop + (year) + (quarter)] =  newState["sumRevMonthlyContract" + checkloop + (year) + (quarter)] + parseFloat(monthlyValue)
                  this.setState({["sumRevMonthlyContract" + checkloop + (year) + (quarter)]: this.state[sumValueMonthlyContract] + parseFloat(monthlyValue)})
                }
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
            if(status === 'ABNC'){
                if(year === currentYearResp && quarter === currentQuarterResp){
                  //console.log("KJ Value: " + kj + " MonthlyValue: " + monthlyValueProjected + " Job Name: " + job_name + " Check Loop: " + checkloopProjected + " status: " + status)
                  if(this.state["sumRevMonthlyABNC" + checkloopProjected + (year) + (quarter)] === undefined){
                    //console.log("KJ Value: " + kj + " MonthlyValue: " + monthlyValueProjected + " Job Name: " + job_name + " Check Loop: " + checkloopProjected + " status: " + status)
                    sumValueMonthlyABNC = "sumRevMonthlyABNC" + checkloopProjected + year + quarter
                    this.setState({["sumRevMonthlyABNC" + checkloopProjected + (year) + (quarter)]: 0})
                    newState["sumRevMonthlyABNC" + checkloopProjected + (year) + (quarter)] =  newState["sumRevMonthlyABNC" + checkloopProjected + (year) + (quarter)] + parseFloat(monthlyValueProjected)
                    this.setState({["sumRevMonthlyABNC" + checkloopProjected + (year) + (quarter)]: this.state[sumValueMonthlyABNC] + parseFloat(monthlyValueProjected)})
                    //console.log("New Value ABNC: " + this.state[sumValueMonthlyABNC])
                    //console.log("New Value 2 ABNC: " + this.state.sumRevMonthlyABNC120201)
                  }else{
                    //console.log("KJ Value: " + kj + " MonthlyValue: " + monthlyValueProjected + " Job Name: " + job_name + " Check Loop: " + checkloopProjected)
                    sumValueMonthlyABNC = "sumRevMonthlyABNC" + checkloopProjected + year + quarter
                    newState["sumRevMonthlyABNC " + checkloopProjected + (year) + (quarter)] =  newState["sumRevMonthlyABNC" + checkloopProjected + (year) + (quarter)] + parseFloat(monthlyValueProjected)
                    this.setState({["sumRevMonthlyABNC" + checkloopProjected + (year) + (quarter)]: this.state[sumValueMonthlyABNC] + parseFloat(monthlyValueProjected)})
                    //console.log("New Value ABNC: " + this.state[sumValueMonthlyABNC])
                    //console.log("New Value 2 ABNC: " + this.state.sumRevMonthlyABNC120201)
                  }
                }
            }else if(status === 'FA'){
              if(year === currentYearResp && quarter === currentQuarterResp){
                //console.log("KJ Value: " + kj + " MonthlyValue: " + monthlyValueProjected + " Job Name: " + job_name + " Check Loop: " + checkloopProjected + " status: " + status)
                if(this.state["sumRevMonthlyFA" + checkloopProjected + (year) + (quarter)] === undefined){
                  //console.log("KJ Value: " + kj + " MonthlyValue: " + monthlyValueProjected + " Job Name: " + job_name + " Check Loop: " + checkloopProjected + " status: " + status)
                  sumValueMonthlyFA = "sumRevMonthlyFA" + checkloopProjected + year + quarter
                  this.setState({["sumRevMonthlyFA" + checkloopProjected + (year) + (quarter)]: 0})
                  newState["sumRevMonthlyFA" + checkloopProjected + (year) + (quarter)] =  newState["sumRevMonthlyFA" + checkloopProjected + (year) + (quarter)] + parseFloat(monthlyValueProjected)
                  this.setState({["sumRevMonthlyFA" + checkloopProjected + (year) + (quarter)]: this.state[sumValueMonthlyFA] + parseFloat(monthlyValueProjected)})
                  //console.log("New Value FA: " + this.state[sumValueMonthlyFA])
                  //console.log("New Value 2 FA: " + this.state.sumRevMonthlyFA120201)
                }else{
                  //console.log("KJ Value: " + kj + " MonthlyValue: " + monthlyValueProjected + " Job Name: " + job_name + " Check Loop: " + checkloopProjected)
                  sumValueMonthlyFA = "sumRevMonthlyFA" + checkloopProjected + year + quarter
                  newState["sumRevMonthlyFA " + checkloopProjected + (year) + (quarter)] =  newState["sumRevMonthlyFA" + checkloopProjected + (year) + (quarter)] + parseFloat(monthlyValueProjected)
                  this.setState({["sumRevMonthlyFA" + checkloopProjected + (year) + (quarter)]: this.state[sumValueMonthlyFA] + parseFloat(monthlyValueProjected)})
                  //console.log("New Value FA: " + this.state[sumValueMonthlyFA])
                  //console.log("New Value 2 FA: " + this.state.sumRevMonthlyFA120201)
                }
              }
          }
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
        //console.log(" Job Name: " + job_name + " Status: " + status + " Quarter: " + quarter + " Year: " + year + " Value: " + profitCurrentYear)
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
                    if(this.state["sumRevContractTotal" + (year) + (quarter)] === undefined){
                        sumValueContractTotal = "sumRevContractTotal" + year + quarter
                        newState["sumRevContractTotal" + (year) + (quarter)] = 0
                        this.setState({["sumRevContractTotal" + (year) + (quarter)]: 0})
                        newState["sumRevContractTotal" + (year) + (quarter)] =  newState["sumRevContractTotal" + (year) + (quarter)] + parseFloat(totalExpectedRevenue)
                        this.setState({["sumRevContractTotal" + (year) + (quarter)]: this.state[sumValueContractTotal] + parseFloat(totalExpectedRevenue)})
                    }else{
                        newState["sumRevContractTotal" + (year) + (quarter)] =  newState["sumRevContractTotal" + (year) + (quarter)] + parseFloat(totalExpectedRevenue)
                        this.setState({["sumRevContractTotal" + (year) + (quarter)]: this.state[sumValueContractTotal] + parseFloat(totalExpectedRevenue)})
                    }

                    //Calculate Profit Total
                    if(this.state["sumRevProfitTotal" + (year) + (quarter)] === undefined){
                      sumValueProfitTotal = "sumRevProfitTotal" + year + quarter
                      newState["sumRevProfitTotal" + (year) + (quarter)] = 0
                      this.setState({["sumRevProfitTotal" + (year) + (quarter)]: 0})
                      newState["sumRevProfitTotal" + (year) + (quarter)] =  newState["sumRevProfitTotal" + (year) + (quarter)] + parseFloat(profitCurrentYear)
                      this.setState({["sumRevProfitTotal" + (year) + (quarter)]: this.state[sumValueProfitTotal] + parseFloat(profitCurrentYear)})
                  }else{
                      newState["sumRevProfitTotal" + (year) + (quarter)] =  newState["sumRevProfitTotal" + (year) + (quarter)] + parseFloat(profitCurrentYear)
                      this.setState({["sumRevProfitTotal" + (year) + (quarter)]: this.state[sumValueProfitTotal] + parseFloat(profitCurrentYear)})
                  }

                  console.log("Job Name: " + job_name + " Quarter: " + quarter + " Year: " + year + " Total Profit: " + profitCurrentYear)

                  }


                //}
                else{

                  console.log("Contract: " + this.state.sumRevContractTotal20202)
                  console.log("Profit: " + this.state.sumRevProfitTotal20202)
                  sumValueContract = "sumRevContract" + division + year + quarter
                  sumValueContractInfo = "sumRevContractInfo" + division + year + quarter
                  sumValueContractTotal = "sumRevContractTotal" + year + quarter

                  sumValueProfit = "sumRevProfit" + division + year + quarter
                  sumValueProfitInfo = "sumRevProfitInfo" + division + year + quarter
                  sumValueProfitTotal = "sumRevProfitTotal" + year + quarter
                                    

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

                  newState["sumRevContractTotal " + (year) + (quarter)] =  newState["sumRevContractTotal" + (year) + (quarter)] + parseFloat(totalExpectedRevenue)
                  this.setState({["sumRevContract" + (division) + (year) + (quarter)]: this.state[sumValueContract] + parseFloat(totalExpectedRevenue)})

                  newState["sumRevProfitTotal " + (year) + (quarter)] =  newState["sumRevProfitTotal" + (year) + (quarter)] + parseFloat(profitCurrentYear)
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

                  
                  this.setState({["sumRevContractTotal" + (year) + (quarter)]: this.state[sumValueContractTotal] + parseFloat(totalExpectedRevenue)})
                  this.setState({["sumRevProfitTotal" + (year) + (quarter)]: this.state[sumValueProfitTotal] + parseFloat(profitCurrentYear)})
                  console.log("Job Name: " + job_name + " Quarter: " + quarter + " Year: " + year + " Total Profit: " + profitCurrentYear)

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
                  if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                    this.setState({["sumRevABNC" + (division) + (year) + (quarter)]: this.state[sumValueABNC] + parseFloat(totalExpectedRevenue)})
                    this.setState({["sumRevABNCProfit" + (division) + (year) + (quarter)]: this.state[sumValueABNCProfit] + parseFloat(profitCurrentYear)})
                  }else{
                    this.setState({["sumRevABNC" + (division) + (year) + (quarter)]: this.state[sumValueABNC] + parseFloat(0)})
                    this.setState({["sumRevABNCProfit" + (division) + (year) + (quarter)]: this.state[sumValueABNCProfit] + parseFloat(0)})
                  }
                  //set the value for division
                  divisionValueRevABNC = "DivisionRevABNC" + division + year + quarter
                  divisionValueRevABNCProfit = "DivisionRevABNCProfit" + division + year + quarter

                  this.setState({["DivisionRevABNC" + (division) + (year) + (quarter)]: this.state[sumValueABNC]})
                  this.setState({["DivisionRevABNCProfit" + (division) + (year) + (quarter)]: this.state[sumValueABNCProfit]})

                  //Add ABNC to Current Year
                    sumValueContractTotal = "sumRevContractTotal" + year + quarter
                    newState["sumRevContractTotal" + (year) + (quarter)] =  newState["sumRevContractTotal" + (year) + (quarter)] + parseFloat(totalExpectedRevenue)
                    this.setState({["sumRevContractTotal" + (year) + (quarter)]: this.state[sumValueContractTotal] + parseFloat(totalExpectedRevenue)})

                    sumValueProfitTotal = "sumRevProfitTotal" + year + quarter
                    newState["sumRevProfitTotal" + (year) + (quarter)] =  newState["sumRevProfitTotal" + (year) + (quarter)] + parseFloat(profitCurrentYear)
                    this.setState({["sumRevProfitTotal" + (year) + (quarter)]: this.state[sumValueProfitTotal] + parseFloat(profitCurrentYear)})

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

                  if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                    this.setState({["sumRevABNC" + (division) + (year) + (quarter)]: this.state[sumValueABNC] + parseFloat(totalExpectedRevenue)})
                    this.setState({["sumRevABNCProfit" + (division) + (year) + (quarter)]: this.state[sumValueABNCProfit] + parseFloat(profitCurrentYear)})
                  }else{
                    this.setState({["sumRevABNC" + (division) + (year) + (quarter)]: this.state[sumValueABNC] + parseFloat(0)})
                    this.setState({["sumRevABNCProfit" + (division) + (year) + (quarter)]: this.state[sumValueABNCProfit] + parseFloat(0)})
                  }
                  newState["sumRevABNCTotal " + (year)] =  newState["sumRevABNCTotal" + (year)] + parseFloat(totalExpectedRevenue)
                  this.setState({["sumRevABNCTotal" + (year)]: this.state[sumValueABNCTotal] + parseFloat(totalExpectedRevenue)})

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
                    sumValueContractTotal = "sumRevContractTotal" + year + quarter
                    newState["sumRevContractTotal " + (year) + (quarter)] =  newState["sumRevContractTotal" + (year) + (quarter)] + parseFloat(totalExpectedRevenue)
                    this.setState({["sumRevContractTotal" + (year) + (quarter)]: this.state[sumValueContractTotal] + parseFloat(totalExpectedRevenue)})

                    sumValueProfitTotal = "sumRevProfitTotal" + year + quarter
                    newState["sumRevProfitTotal " + (year) + (quarter)] =  newState["sumRevProfitTotal" + (year) + (quarter)] + parseFloat(profitCurrentYear)
                    this.setState({["sumRevProfitTotal" + (year) + (quarter)]: this.state[sumValueProfitTotal] + parseFloat(profitCurrentYear)})

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
                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  this.setState({["sumRevOther" + (division) + (year) + (quarter)]: this.state[sumValueOther] + parseFloat(totalExpectedRevenue)})
                  this.setState({["sumRevOtherProfit" + (division) + (year) + (quarter)]: this.state[sumValueOtherProfit] + parseFloat(profitCurrentYear)})
                }else{
                  this.setState({["sumRevOther" + (division) + (year) + (quarter)]: this.state[sumValueOther] + parseFloat(0)})
                  this.setState({["sumRevOtherProfit" + (division) + (year) + (quarter)]: this.state[sumValueOtherProfit] + parseFloat(0)})
                }
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
                    sumValueContractTotal = "sumRevContractTotal" + year + quarter
                    newState["sumRevContractTotal" + (year) + (quarter)] =  newState["sumRevContractTotal" + (year) + (quarter)] + parseFloat(totalExpectedRevenue)
                    this.setState({["sumRevContractTotal" + (year) + (quarter)]: this.state[sumValueContractTotal] + parseFloat(totalExpectedRevenue)})

                    sumValueProfitTotal = "sumRevProfitTotal" + year + quarter
                    newState["sumRevProfitTotal" + (year) + (quarter)] =  newState["sumRevProfitTotal" + (year) + (quarter)] + parseFloat(profitCurrentYear)
                    this.setState({["sumRevProfitTotal" + (year) + (quarter)]: this.state[sumValueProfitTotal] + parseFloat(profitCurrentYear)})
                    console.log(" Job Name: " + job_name + " Status: " + status + " Quarter: " + quarter + " Year: " + year + " Value: " + profitCurrentYear)

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

                if(parseInt(currentQuarterResp) === parseInt(quarter) && parseInt(currentYearResp) === parseInt(year)){
                  this.setState({["sumRevOther" + (division) + (year) + (quarter)]: this.state[sumValueOther] + parseFloat(totalExpectedRevenue)})
                  this.setState({["sumRevOtherProfit" + (division) + (year) + (quarter)]: this.state[sumValueOtherProfit] + parseFloat(profitCurrentYear)})
                }else{
                  this.setState({["sumRevOther" + (division) + (year) + (quarter)]: this.state[sumValueOther] + parseFloat(0)})
                  this.setState({["sumRevOtherProfit" + (division) + (year) + (quarter)]: this.state[sumValueOtherProfit] + parseFloat(0)})
                }
                newState["sumRevOtherTotal " + (year)] =  newState["sumRevOtherTotal" + (year)] + parseFloat(totalExpectedRevenue)

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
                  sumValueContractTotal = "sumRevContractTotal" + year + quarter
                  newState["sumRevContractTotal " + (year) + (quarter)] =  newState["sumRevContractTotal" + (year) + (quarter)] + parseFloat(totalExpectedRevenue)
                  this.setState({["sumRevContractTotal" + (year) + (quarter)]: this.state[sumValueContractTotal] + parseFloat(totalExpectedRevenue)})

                  sumValueProfitTotal = "sumRevProfitTotal" + year + quarter
                  newState["sumRevProfitTotal " + (year) + (quarter)] =  newState["sumRevProfitTotal" + (year) + (quarter)] + parseFloat(profitCurrentYear)
                  this.setState({["sumRevProfitTotal" + (year) + (quarter)]: this.state[sumValueProfitTotal] + parseFloat(profitCurrentYear)})

                //console.log(" Job Name: " + job_name + " Status: " + status + " Quarter: " + quarter + " Year: " + year + " Value: " + profitCurrentYear)

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

     this.setState({ ProjectReportData: dataValue, ActualRevenueData: actualRevenueValue, dataLabel: optionsLabels, ManagementAdjData: dataManagementAdjustment, dataLoadCheck: dataValue, userRole: decoded.roles});

     console.log("ContractTotal: " + this.state.sumRevProfitTotal20202)

     var distinctDivions = div.filter(distinct).sort((a,b) => a - b);
     var distinctYears = yearValues.filter(distinct).sort((a,b) => a - b);

     var backGroundColors = ['#dff4ff','#9fddff','#60c6ff','#20afff','#0094e7', '#0075b6','#005686','#1890ff','#52c41a','#0075b6','#eb2f96','#fa541c','#0050b3'];
     var yearlyValues =[];
     var yearlyValuesProfit =[];
     var divisionCombinedValues = [];
     var divisionSafetyCombinedValues = [];
     var divisionMonthlyCombinedValues = [];
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
      newState["DivisionMonthlyRecordCombined"] = []
      newState["DivisionDataRecordCombinedProfit" + (year)] = []
      this.setState({["DivisionDataRecord" + (year)]: []})
      this.setState({["DivisionDataRecordProfit" + (year)]: []})
      this.setState({["DivisionDataRecordCombined" + (year)]: []})
      this.setState({"DivisionMonthlyRecordCombined": []})
      this.setState({["DivisionDataRecordCombinedProfit" + (year)]: []})

     for(var i = 0; i < distinctDivions.length; i++){
      yearlyValues = []; 
      yearlyValuesProfit = [];
      divisionCombinedValues = [];
      divisionSafetyCombinedValues = [];
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
                  //console.log(val)
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
                  //console.log(val)
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

       var divisionName = '';
       if(distinctDivions[i] === '1'){
          divisionName = 'Wiley'
       }else if(distinctDivions[i] === '2'){
        divisionName = 'Haynes'
       }else if(distinctDivions[i] === '3'){
        divisionName = 'Commercial'
       }else if(distinctDivions[i] === '4'){
        divisionName = 'Broadwell'
       }else if(distinctDivions[i] === '5'){
        divisionName = 'Stone'
       }else if(distinctDivions[i] === '6'){
        divisionName = 'Kitchin'
       }else if(distinctDivions[i] === '7'){
        divisionName = 'Gowens'
       }else if(distinctDivions[i] === '11'){
        divisionName = 'Misc'
       }     
 
       var newRecords = {
        label: "Division " + divisionName,
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
        label: "Division " + divisionName,
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
          abncDivValue.push(this.state["sumRevABNC" + parseInt(distinctDivions[i] + year + (quarter))])
          otherDivValue.push(this.state["sumRevOther" + parseInt(distinctDivions[i] + year + (quarter))])

          profitDivValue.push(this.state["sumRevProfit" + parseInt(distinctDivions[i] + year + (quarter))])
          profitabncDivValue.push(this.state["sumRevABNCProfit" + parseInt(distinctDivions[i] + year + (quarter))])
          profitotherDivValue.push(this.state["sumRevOtherProfit" + parseInt(distinctDivions[i] + year + (quarter))])
          divisionLabel.push(divisionName + " (Yr: " + year + " Qtr: " + quarter)
        }
     }})

     
     var yearData = [];
     var yearDataProfit = [];
     for(var i = 0; i < distinctYears.length; i++){
       if(distinctYears[i] === '2019'){
        yearData.push(295978870)
        yearDataProfit.push(16222436)
       }else if(parseInt(distinctYears[i]) > 2019 && parseInt(distinctYears[i]) < parseInt(currentYearResp)){
        yearData.push(this.state["sumRevContractTotal" + distinctYears[i] + '4'])
        yearDataProfit.push(this.state["sumRevProfitTotal" + distinctYears[i] + '4'])
       }else{
        yearData.push(this.state["sumRevContractTotal" + distinctYears[i] + currentQuarterResp])
        yearDataProfit.push(this.state["sumRevProfitTotal" + distinctYears[i] + currentQuarterResp])
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

        var dataValueContractMonthly = []
        var dataValueActualMonthly = []
        var dataValueABNCMonthly = []
        var dataValueFAMonthly = []
        var monthOne = 0;
        var monthTwo = 0;
        var monthThree = 0;
        var monthFour = 0;
        var monthFive = 0;
        var monthSix = 0;
        var monthSeven = 0;
        var monthEight = 0;
        var monthNine = 0;
        var monthTen = 0;
        var monthEleven = 0;
        var monthTwelve = 0;
        var currentYearRespTwo = parseInt(currentYearResp) + 1
        var previousYearResp = parseInt(currentYearResp) - 1
        this.state.ActualRevenueData.map( monthlyRevenueVal => {
          const {  id, division, month,actual, year } = monthlyRevenueVal
            if(currentYearResp === year){
              if(month === "1"){
                monthOne += parseFloat(actual);
              }else if(month === "2"){
                monthTwo += parseFloat(actual);
              }else if(month === "3"){
                monthThree += parseFloat(actual);
              }else if(month === "4"){
                monthFour += parseFloat(actual);
              }else if(month === "5"){
                monthFive += parseFloat(actual);
              }else if(month === "6"){
                monthSix += parseFloat(actual);
              }else if(month === "7"){
                monthSeven += parseFloat(actual);
              }else if(month === "8"){
                monthEight += parseFloat(actual);
              }else if(month === "9"){
                monthNine += parseFloat(actual);
              }else if(month === "10"){
                monthTen += parseFloat(actual);
              }else if(month === "11"){
                monthEleven += parseFloat(actual);
              }else if(month === "12"){
                monthTwelve += parseFloat(actual);
              }
            }
        })

        if(parseInt(previousYearResp) === 2019){
          dataValueActualMonthly.push(12757395,16956425,20189028,20210484,23889781,31625694,30652569,26152481,25865306,30428911,22280890,34971316)
          dataValueContractMonthly.push(0,0,0,0,0,0,0,0,0,0,0,0)
          dataValueABNCMonthly.push(0,0,0,0,0,0,0,0,0,0,0,0)
          dataValueFAMonthly.push(0,0,0,0,0,0,0,0,0,0,0,0)

          var divisions2019 = [1,2,4,5,6,11];
          var divisionMonthlyLables = ["Division 1", "Division 2", "Division 4", "Division 5", "Division 6", "Division 11"]
          var backGroundColors2019 = ['#dff4ff','#9fddff','#60c6ff','#20afff','#0094e7','#005686'];
          var Jan2019Values = [5859336,3741442,2923688, 17577243, 47273,279929];
          //for(var j = 0; j < divisions2019.length; j++){
            var newMonthlyRecords = {
              label: "Division " + divisions2019[1],
              fill: false,
              lineTension: 0.5,
              backgroundColor: backGroundColors2019[1],
              borderColor: backGroundColors2019[1],
              borderWidth: 2,
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: backGroundColors2019[1],
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: backGroundColors2019[1],
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 7,
              pointHitRadius: 10,
              data: Jan2019Values
             }

             //var combineMonthlyRecords = this.state.monthlyDataSetRecord.concat(newMonthlyRecords)
          //this.setState({monthlyDataSetRecord : combineMonthlyRecords, monthlyDataLabel: divisionLables})
          //}
          //this.setState({"sumMonthlyWileyJan2019":  5859336, "sumMonthlyHaynesJan2019": 3741442, "sumMonthlyCommercialJan2019": 0, "sumMonthlyBroadwellJan2019": 2923688, "sumMonthlyStoneJan2019": 17577243, "sumMonthlyKitchenJan2019": 47273, "sumMonthlyMiscJan2019": 279929})
        }
        if(currentQuarterResp === "1"){
          dataValueActualMonthly.push(monthOne,monthTwo,monthThree,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)
          dataValueContractMonthly.push(0,0,0,this.state["sumRevMonthlyContract" + 1 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 2 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 3 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 4 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 5 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 6 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 7 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 8 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 9 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 10 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 11 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 12 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 13 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 14 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 15 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 16 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 17 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 18 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 19 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 20 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 21 + currentYearResp + currentQuarterResp])
          dataValueABNCMonthly.push(0,0,0,this.state["sumRevMonthlyABNC" + 1 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 2 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 3 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 4 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 5 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 6 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 7 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 8 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 9 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 10 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 11 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 12 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 13 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 14 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 15 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 16 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 17 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 18 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 19 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 20 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 21 + currentYearResp + currentQuarterResp])
          dataValueFAMonthly.push(0,0,0,this.state["sumRevMonthlyFA" + 1 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 2 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 3 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 4 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 5 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 6 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 7 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 8 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 9 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 10 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 11 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 12 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 13 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 14 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 15 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 16 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 17 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 18 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 19 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 20 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 21 + currentYearResp + currentQuarterResp])
        }else if(currentQuarterResp === "2"){
          dataValueActualMonthly.push(monthOne,monthTwo,monthThree,monthFour,monthFive,monthSix,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)
          dataValueContractMonthly.push(0,0,0,0,0,0,this.state["sumRevMonthlyContract" + 1 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 2 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 3 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 4 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 5 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 6 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 7 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 8 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 9 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 10 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 11 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 12 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 13 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 14 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 15 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 16 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 17 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 18 + currentYearResp + currentQuarterResp])
          dataValueABNCMonthly.push(0,0,0,0,0,0,this.state["sumRevMonthlyABNC" + 1 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 2 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 3 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 4 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 5 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 6 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 7 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 8 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 9 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 10 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 11 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 12 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 13 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 14 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 15 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 16 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 17 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 18 + currentYearResp + currentQuarterResp])
          dataValueFAMonthly.push(0,0,0,0,0,0,this.state["sumRevMonthlyFA" + 1 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 2 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 3 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 4 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 5 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 6 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 7 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 8 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 9 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 10 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 11 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 12 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 13 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 14 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 15 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 16 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 17 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 18 + currentYearResp + currentQuarterResp])
        }else if(currentQuarterResp === "3"){
          dataValueActualMonthly.push(monthOne,monthTwo,monthThree,monthFour,monthFive,monthSix,monthSeven,monthEight,monthNine,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)
          dataValueContractMonthly.push(0,0,0,0,0,0,0,0,0,this.state["sumRevMonthlyContract" + 1 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 2 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 3 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 4 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 5 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 6 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 7 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 8 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 9 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 10 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 11 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 12 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 13 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 14 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 15 + currentYearResp + currentQuarterResp])
          dataValueABNCMonthly.push(0,0,0,0,0,0,0,0,0,this.state["sumRevMonthlyABNC" + 1 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 2 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 3 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 4 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 5 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 6 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 7 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 8 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 9 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 10 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 11 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 12 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 13 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 14 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 15 + currentYearResp + currentQuarterResp])
          dataValueFAMonthly.push(0,0,0,0,0,0,0,0,0,this.state["sumRevMonthlyFA" + 1 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 2 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 3 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 4 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 5 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 6 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 7 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 8 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 9 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 10 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 11 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 12 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 13 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 14 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 15 + currentYearResp + currentQuarterResp])
        }else if(currentQuarterResp === "4"){
          dataValueActualMonthly.push(monthOne,monthTwo,monthThree,monthFour,monthFive,monthSix,monthSeven,monthEight,monthNine,monthTen,monthEleven,monthTwelve,0,0,0,0,0,0,0,0,0,0,0,0)
          dataValueContractMonthly.push(0,0,0,0,0,0,0,0,0,0,0,0,this.state["sumRevMonthlyContract" + 1 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 2 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 3 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 4 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 5 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 6 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 7 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 8 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 9 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 10 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 11 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyContract" + 12 + currentYearResp + currentQuarterResp])
          dataValueABNCMonthly.push(0,0,0,0,0,0,0,0,0,0,0,0,this.state["sumRevMonthlyABNC" + 1 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 2 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 3 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 4 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 5 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 6 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 7 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 8 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 9 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 10 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 11 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyABNC" + 12 + currentYearResp + currentQuarterResp])
          dataValueFAMonthly.push(0,0,0,0,0,0,0,0,0,0,0,0,this.state["sumRevMonthlyFA" + 1 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 2 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 3 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 4 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 5 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 6 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 7 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 8 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 9 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 10 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 11 + currentYearResp + currentQuarterResp],this.state["sumRevMonthlyFA" + 12 + currentYearResp + currentQuarterResp])
        }


        const stateMonthly = {
          labels: ['Jan' + '-' + previousYearResp, 'Feb' + '-' + previousYearResp, 'March' + '-' + previousYearResp,'Apr' + '-' + previousYearResp,'May' + '-' + previousYearResp,'June' + '-' + previousYearResp,'July' + '-' + previousYearResp,'Aug' + '-' + previousYearResp,'Sept' + '-' + previousYearResp,'Oct' + '-' + previousYearResp,'Nov' + '-' + previousYearResp,'Dec' + '-' + previousYearResp,'Jan' + '-' + currentYearResp, 'Feb' + '-' + currentYearResp, 'March' + '-' + currentYearResp,'Apr' + '-' + currentYearResp,'May' + '-' + currentYearResp,'June' + '-' + currentYearResp,'July' + '-' + currentYearResp,'Aug' + '-' + currentYearResp,'Sept' + '-' + currentYearResp,'Oct' + '-' + currentYearResp,'Nov' + '-' + currentYearResp,'Dec' + '-' + currentYearResp,'Jan' + '-' + currentYearRespTwo, 'Feb' + '-' + currentYearRespTwo, 'March' + '-' + currentYearRespTwo,'Apr' + '-' + currentYearRespTwo,'May' + '-' + currentYearRespTwo,'June' + '-' + currentYearRespTwo,'July' + '-' + currentYearRespTwo,'Aug' + '-' + currentYearRespTwo,'Sept' + '-' + currentYearRespTwo,'Oct' + '-' + currentYearRespTwo,'Nov' + '-' + currentYearRespTwo,'Dec' + '-' + currentYearRespTwo],
            datasets: [
              {
                label: 'Actual',
                data: dataValueActualMonthly,
                backgroundColor: '#005A8B' // blue
              },
              {
                label: 'Contract',
                data: dataValueContractMonthly,
                backgroundColor: '#07B64D' // green
              },
              {
                label: 'ABNC',
                data: dataValueABNCMonthly,
                backgroundColor: '#FBFB09' // yellow
              },
              {
                label: 'FA',
                data: dataValueFAMonthly,
                backgroundColor: '#FB0909' // red
              },
              /*{
                label: 'Totals',
                data: [199.9,189.8,199.9,189.8,199.9,189.8,199.9,189.8,199.9,189.8,199.9,189.8,199.9,189.8,199.9,189.8,199.9,189.8,199.9,189.8,1199.9,1189.8,1199.9,1189.8,],
                trendlineLinear: {
                  style: "rgba(255,105,180, .8)",
                  lineStyle: "solid",
                  width: 2
                },
                fill: false,
                backgroundColor: 'transparent'
              }*/
            ]
         }

         this.setState({ revenueMonthlyValues: stateMonthly, homeMonthlyDataSetRecord: stateMonthly})

        
    this.setState({ revenueTotal: {
      labels: distinctYears,
      datasets: this.state.revenueYearRecord
    }})

    this.setState({ safetyTotal: data2 })

    this.setState({ revenueTotalProfit: {
      labels: distinctYears,
      datasets: this.state.revenueYearRecordProfit
    }})

    this.setState({ homeState: {
      labels: distinctYears,
      datasets: this.state.revenueYearRecord
    }})

    this.setState({ homeSafetyState: data2})

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
      backgroundColor: '#00558C', // green
      fill: false
    },
    {
      label: 'ABNC',
      data: abncDivValue,
      backgroundColor: '#298FC2', // yellow
      fill: false
    },
    {
      label: 'FA',
      data: otherDivValue,
      backgroundColor: '#002B49', // red
      fill: false
    })

    divisionCombinedValuesProfit.push( {
      label: 'Contract',
      data: profitDivValue,
      backgroundColor: '#00558C', // green
      fill: false
    },
    {
      label: 'ABNC',
      data: profitabncDivValue,
      backgroundColor: '#298FC2', // yellow
      fill: false
    },
    {
      label: 'FA',
      data: profitotherDivValue,
      backgroundColor: '#002B49', // red
      fill: false
    })

    newState["DivisionDataRecordCombined" + (year)] =  newState["DivisionDataRecordCombined" + (year)].concat(divisionCombinedValues); 
    this.setState({["DivisionDataRecordCombined" + (year)]: newState["DivisionDataRecordCombined" + (year)]})
    var checkCombined = {
      labels: divisionLabel,
      datasets: this.state["DivisionDataRecordCombined" + distinctYears[distinctYears.length - 1]]
    }
    this.setState({ combinedDivisionDataSet: checkCombined})

    divisionSafetyCombinedValues.push( {
      label: 'Wiley',
      data: [73211.82],
      backgroundColor: '#dff4ff', // green
      fill: false
    },
    {
      label: 'Haynes',
      data: [27771.67],
      backgroundColor: '#9fddff', // yellow
      fill: false
    },
    {
      label: 'Broadwell',
      data: [24168.83],
      backgroundColor: '#20afff', // red
      fill: false
    },
    {
      label: 'Stone',
      data: [63004.83],
      backgroundColor: '#0094e7', // red
      fill: false
    },
    {
      label: 'Kitchin',
      data: [7378],
      backgroundColor: '#0075b6', // red
      fill: false
    },
    {
      label: 'Gowens',
      data: [1851.25],
      backgroundColor: '#005686', // redS
      fill: false
    },
    {
      label: 'Field Ops',
      data: [5881.25],
      backgroundColor: '#1890ff', // red
      fill: false
    },
    {
      label: 'Support Service',
      data: [53400.35],
      backgroundColor: '#1890ff', // red
      fill: false
    })

    var checkSafetyCombined = {
      labels: ["Division Man Hours YTD"],
      datasets: divisionSafetyCombinedValues
    }
    this.setState({ combinedSafetyDivisionDataSet: checkSafetyCombined})

    divisionMonthlyCombinedValues.push({
        label: 'Division 1',
        data: [5859336],
        backgroundColor: '#f5222d', // green
        fill: false
      },
      {
        label: 'Division 2',
        data: [3741442],
        backgroundColor: '#9fddff', // yellow
        fill: false
      },
      {
        label: 'Division 4',
        data: [2923688],
        backgroundColor: '#fa8c74', // red
        fill: false
      },
      {
        label: 'Division 5',
        data: [17577243],
        backgroundColor: '#20afff', // red
        fill: false
      },
      {
        label: 'Division 6',
        data: [47273],
        backgroundColor: '#0094e7', // red
        fill: false
      },
      {
        label: 'Division 11',
        data: [279929],
        backgroundColor: '#005686', // red
        fill: false
      })
    //}
    newState["DivisionMonthlyRecordCombined" ] =  newState["DivisionMonthlyRecordCombined"].concat(divisionMonthlyCombinedValues); 
    this.setState({"DivisionMonthlyRecordCombined": newState["DivisionMonthlyRecordCombined"]})
    var checkCombinedMonthly = {
      labels: ["Actual"],
      datasets: this.state["DivisionMonthlyRecordCombined"]
    }

    this.setState({monthlyDataSetRecord : checkCombinedMonthly})


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

renderTableDataModel() {
  return this.state.students.map((student, index) => {
     const { financial, projected, YTD, V, avg, current_month, previous_month } = student //destructuring
     return (
        <tr key={financial}>
           <td>{financial}</td>
           <td>{projected}</td>
           <td>{YTD}</td>
           <td>{V}</td>
           <td>{current_month}</td>
           <td>{avg}</td>
           <td>{previous_month}</td>
        </tr>
     )
  })
}

renderTableHeaderModel() {
  let header = Object.keys(this.state.students[0])
  return header.map((key, index) => {
     var headerValue = key
     if(headerValue === "previous_month"){
       headerValue = "previous month"
     }else if(headerValue === "current_month"){
       headerValue = "current month"
     }
     return <th key={index}>{headerValue.toUpperCase()}</th>
  })
}

onRowClick = (state, rowInfo, column, instance) => {
  return {
      onClick: e => {
          console.log('A Td Element was clicked!')
          console.log('it produced this event:', e)
          console.log('It was in this column:', column)
          console.log('It was in this row:', rowInfo)
          console.log('It was in this table instance:', instance)
      }
  }
}

  render() {

    const columns = [{
      Header: 'Financial',
      accessor: 'financial' // String-based value accessors!
    },
    {
      Header: 'Projected',
      accessor: 'projected',
      Cell: props => <span className = 'number'> {
        props.value
      } </span> 
    },
    {
      Header: 'YTD',
      accessor: 'YTD',
      Cell: props => <span className = 'number'> {
        props.value
      } </span> 
    },{
      Header: 'V',
      accessor: 'V',
      Cell: props => <span className = 'number'> {
        props.value
      } </span> 
    },{
      Header: 'Current Month',
      accessor: 'current_month',
      Cell: props => <span className = 'number'> {
        props.value
      } </span> 
    },{
      Header: 'AVG',
      accessor: 'avg',
      Cell: props => <span className = 'number'> {
        props.value
      } </span> 
    },{
      Header: 'Previous Month',
      accessor: 'previous_month',
      Cell: props => <span className = 'number'> {
        props.value
      } </span> 
    }]

    const safetyColumns = [{
      Header: 'Year',
      accessor: 'year',
      Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div>
      },
      {
        Header: 'MH YTD',
        accessor: 'mh_ytd',
        Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div>
      },
      {
        Header: 'EMR',
        accessor: 'emr',
        Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div> 
      },
      {
        Header: 'RIR',
        accessor: 'rir',
        Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div> 
      },{
        Header: 'DART',
        accessor: 'dart',
        Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div>
      },{
        Header: 'LTIR',
        accessor: 'ltir',
        Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div> 
      }]

      const humanResourcesColumns = [{
        Header: 'New Hires YTD',
        accessor: 'new_hires_ytd',
        Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div>
      },
      {
        Header: 'Turnover Rate',
        accessor: 'turnover_rate',
        Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div> 
      },
      {
        Header: 'Voluntary Turnover YTD',
        accessor: 'v_turnover_rate',
        Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div> 
      },{
        Header: 'Involuntary Turnover YTD',
        accessor: 'i_turnover_rate',
        Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div>
      },{
        Header: 'People Needs',
        accessor: 'people_needs',
        Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div> 
      }]

    const view = this.state.userRole === 'Writer';
    const displayButton = this.state.displayButton === true;
    const safetyDisplayButton = this.state.safetyDisplayButton === true;
    const displayButtonProfit = this.state.displayButtonProfit === true;
    const displayMonthlyButton = this.state.displayMonthlyButton === true;
    const changeGraphButton = this.state.changeGraph === true;
    const changeGraphButtonProfit = this.state.changeGraphProfit === true;
    const checkClickCount = this.state.checkClicks;
    const checkClickCountProfit = this.state.checkClicksProfit;
    const loadedData = this.state.dataLoadCheck;
    const headerSection = "headerSection";
    const { groups, items, defaultTimeStart, defaultTimeEnd } = this.state;

    if(!loadedData){
       return <Container>Loading...</Container>
    }

    var tasks ={
      wip: [],
      complete: [],
      month1: []
    }

    this.state.tasks.forEach ((t) => {
      tasks[t.category].push(
          <div key={t.name} 
              onDragStart = {(e) => this.onDragStart(e, t.name)}
              draggable
              className="draggable"
              style = {{backgroundColor: t.bgcolor}}
          >
              {t.name}
          </div>
      );
  });


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
          <div style={{ paddingRight: '5%',paddingLeft: '5%', paddingTop: '2%'}}>
      { displayButton ? 
      (<button style={{ border: 'none', background: 'none'}}><img src={ require('../images/back-button-FINAL.png') } alt="backButton" onClick={this.previousScreenFunction} style={{ height: '50px'}} /></button>)
      : null
      }

      {
      checkClickCount ? null :
      <label style={{ paddingLeft: '1%', paddingRight: '1%'}}>
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
                  console.log(tooltipItem)
                  console.log(data)
                    return data.labels[tooltipItem[0].index];
                },
                  label: function(tooltipItem) {
                      return '$' + Math.round(tooltipItem.yLabel).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }, },
            },
            scales: {
              yAxes: [
                {
                  stacked: stackedValue,
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
                  stacked: stackedValue,
                  gridLines: {
                    drawBorder: true,
                    color: "grey",
                    zeroLineColor: "grey",
                    drawOnChartArea: false
                  },
                  ticks: {
                    fontSize: 15,
                    fontStyle: "bold",
                    callback: function(label, index, labels) {
                      if (/\s/.test(label)) {
                        return label.split("(");
                      }else{
                        return label;
                      }              
                    }
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
      <div style={{ paddingRight: '5%',paddingLeft: '5%', paddingTop: '2%'}}>
      { displayButtonProfit ? 
      (<button style={{ border: 'none', background: 'none'}}><img src={ require('../images/back-button-FINAL.png') } alt="backButton" onClick={this.previousScreenFunctionProfit} style={{ height: '50px'}} /></button>)
      : null
      }

      {
        checkClickCountProfit ? null :
      <label style={{ paddingLeft: '1%', paddingRight: '1%'}}>
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
                  stacked: stackedValueProfit,
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
                  stacked: stackedValueProfit,
                  gridLines: {
                    drawBorder: true,
                    color: "grey",
                    zeroLineColor: "grey",
                    drawOnChartArea: false
                  },
                  ticks: {
                    fontSize: 15,
                    fontStyle: "bold",
                    callback: function(label, index, labels) {
                      if (/\s/.test(label)) {
                        return label.split("(");
                      }else{
                        return label;
                      }              
                    }
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
      <div style={{ paddingRight: '5%',paddingLeft: '5%', paddingTop: '2%'}}>
      { displayMonthlyButton ? 
      (<button style={{ border: 'none', background: 'none'}}><img src={ require('../images/back-button-FINAL.png') } alt="backButton" onClick={this.previousMonthlyScreenFunction} style={{ height: '50px'}} /></button>)
      : null
      }
      <Bar
          data={this.state.revenueMonthlyValues}

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
              onClick:(evt,item) => {this.updateMonthlyState(evt,item)
              }
          }}
        /></div>  
            <div style={{ paddingRight: '5%',paddingLeft: '5%', paddingTop: '2%', paddingBottom: '8%'}}>      
            <Timeline
                  groups={groups}
                  items={items}
                  keys={keys}
                  fullUpdate
                  itemTouchSendsClick={false}
                  stackItems
                  itemHeightRatio={0.75}
                  canMove={true}
                  canResize={"both"}
                  defaultTimeStart={defaultTimeStart}
                  defaultTimeEnd={defaultTimeEnd}
                  itemRenderer={this.itemRenderer}
                  onItemMove={this.handleItemMove}
                  onItemResize={this.handleItemResize}
                />
            </div>
      </>
    );
  }

}

export default withAuth(Graphs);
