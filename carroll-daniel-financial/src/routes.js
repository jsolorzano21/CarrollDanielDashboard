import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import Login from './pages/Login'
import Main from './pages/Main'
import FutureJobs from './pages/FutureJobs'
import DivIncomeYearOne from './pages/DivIncomeYearOne'
import DivIncomeYearTwo from './pages/DivIncomeYearTwo'
import ProjectReport from './pages/ProjectReport'
import ForcastRevenue from './pages/ForcastRevenue'
import Admin from './pages/Admin'
import MTD_Revenue from './pages/MTD_Revenue'
import MTD_Profit from './pages/MTD_Profit'
import Graphs from './pages/Graphs'
import ExecutiveDashBoard from './pages/ExecutiveDashBoard'
import YearThreeProfitRevenue from './pages/RevenueProfitYearThree'




const Routes = ( { user } ) => {
    return (
      <div>
      <Switch>
        <Route exact path="/financial/login" component={Login} />
        <Route exact path="/financial/ExecutiveDashBoard" component={ExecutiveDashBoard} />
        <Route exact path="/financial/main" component={Main} />
        <Route exact path="/financial/future" component={FutureJobs} />
        <Route exact path="/financial/DivIncomeYearOne" component={DivIncomeYearOne} />
        <Route exact path="/financial/DivIncomeYearTwo" component={DivIncomeYearTwo} />
        <Route exact path="/financial/ProjectReport" component={ProjectReport} />
        <Route exact path="/financial/ForcastRevenue" component={ForcastRevenue} />
        <Route exact path="/financial/Admin" component={Admin} />
        <Route exact path="/financial/MTD_Revenue" component={MTD_Revenue} />
        <Route exact path="/financial/MTD_Profit" component={MTD_Profit} />
        <Route exact path="/financial/Graphs" component={Graphs} />
        <Route exact path="/financial/ThreeYearReport" component={YearThreeProfitRevenue} />
        <Redirect to="/financial/login" />
      </Switch>
      </div>
    )
  }

  export default Routes 