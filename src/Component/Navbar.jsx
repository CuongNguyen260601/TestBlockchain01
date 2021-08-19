import React from 'react';
import PropTypes from 'prop-types';
import getWeb3 from '../Function/getWeb3';
import getContractNTC from '../GetContract/getContractNTC';
import getContractBank from '../GetContract/getContractBank';
import {Link} from "react-router-dom";
import { LayPhiGiaoDich } from '../Function/ListFuction';

Navbar.propTypes = {
    Account: PropTypes.string,
    SetAccount: PropTypes.func,
    SetContractNTC: PropTypes.func,
    SetContractBank: PropTypes.func,
    SetFee: PropTypes.func,
};

Navbar.defaultProps = {
    Account: '',
    SetAccount: null,
    SetContractNTC: null,
    SetContractBank: null,
    SetFee:null
};

function Navbar(props) {
    const {Account,SetAccount,SetContractNTC,SetContractBank,SetFee} = props;

    const connectWeb3 = ()=>{
      getWeb3().then((result) => {
          if(result){
            result.eth.getAccounts().then((res) => {
                SetAccount(res[0]);
            });
            const contractNTC = getContractNTC(result);
            const contractBank = getContractBank(result);
            SetContractNTC(contractNTC);
            SetContractBank(contractBank);
            if(contractBank){
                LayPhiGiaoDich(contractBank).then(res=>{
                    if(res){
                        SetFee(res/100);
                    }
                });
            }

        }
      });   
    };
    return (
        <nav class="navbar navbar-light bg-light">
            <p>Account: {Account}</p>
            <Link to="/">Home</Link>
            <Link to="/change_fee">Change Fee</Link>
            <button type="button" class="btn btn-primary" onClick={connectWeb3}>Connect Wallet</button>
        </nav>
    );
}

export default Navbar;