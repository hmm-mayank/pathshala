import React from 'react';
import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import RegisterUser from './container/Register/register.main';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from './container/Dashboard/dashboard.main';


function App() {
  return (
    <div className="App">
      <Router>
        <Route  exact path="/" component={RegisterUser} />
        <Route exact path="/Login" component={Dashboard} />
      </Router>
    </div>
  );
}

export default App;
