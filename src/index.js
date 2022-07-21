import React from "react";
import * as ReactDOM from 'react-dom';
import App from './App'
import {HashRouter} from 'react-router-dom';
import 'antd/dist/antd.css';
import './style2.css';

ReactDOM.render(
    <HashRouter basename="/">
    <App />
    </HashRouter>
    , document.getElementById("root"));