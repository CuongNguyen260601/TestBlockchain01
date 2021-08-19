import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import HomeComponent from "./HomeComponent";
import ChangeFee from "./ChangeFee";

function HomePage() {
  const [account, setAccount] = useState("");
  const [fee, setFee] = useState();
  const [contractBank, setContractBank] = useState({});
  const [contractNTC, setContractNTC] = useState({});

  return (
    <Router>
      <Navbar
        Account={account}
        SetAccount={setAccount}
        SetContractBank={setContractBank}
        SetContractNTC={setContractNTC}
        SetFee={setFee}
      />
      <Switch>
        <Route
          exact
          path={["/", "/home"]}
          render={() => {
            return <HomeComponent Account={account}  ContractBank = {contractBank} ContractNTC={contractNTC} Fee={fee}/>;
          }}
        />
        <Route exact path={["/change_fee"]} render={() => {
            return <ChangeFee Account={account}  ContractBank = {contractBank} Fee={fee}/>;
          }} />
      </Switch>
    </Router>
  );
}

export default HomePage;
