import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./component/Header";
import LoginPage from "./Pages/LoginPage";
import OurImpact from "./Pages/OurImpact";
import WhyEmpowerGirls from "./Pages/WhyEmpowerGirls";
import GetInvolved from "./Pages/GetInvolved";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/ourimpact" component={OurImpact} />
        <Route path="/whyempowergirls" component={WhyEmpowerGirls} />
        <Route path="/getinvolved" component={GetInvolved} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
