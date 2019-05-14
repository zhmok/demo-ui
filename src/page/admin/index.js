import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "@/serviceWorker";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { LocaleProvider } from "antd";
import zhCN from "antd/lib/locale-provider/zh_CN";
import AdminRouter from "@/routes/admin"
// import Admin from "@/components/admin"
import "antd/dist/antd.css";

const holder = document.getElementById("root");
ReactDOM.render(
    <Router>
      <LocaleProvider locale={zhCN}>
        <AdminRouter />
      </LocaleProvider>
    </Router>,
  holder
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
if (module.hot) {
  module.hot.accept();
}
