import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN';
import Home from "@/routes/home"
const holder = document.getElementById("root");


ReactDOM.render(<div>
   <Router>
    <LocaleProvider locale={zhCN}>
      <Home />
    </LocaleProvider>
  </Router>
  </div>,
  holder
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
if (module.hot) {
  module.hot.accept();
}
