import React,{useState} from "react";
import PropTypes from "prop-types";
import { ThayDoiPhi } from "../Function/ListFuction";
ChangeFee.propTypes = {
  Account: PropTypes.string,
  ContractBank: PropTypes.object,
  Fee: PropTypes.number,
};

ChangeFee.defaultProps = {
  Account: "",
  ContractBank: null,
  Fee:0
};

function ChangeFee(props) {
  const { Account, ContractBank,Fee} = props;
  const [fee, setFee] = useState(Fee*100);
  const onThay = (e)=>{
    e.preventDefault();
    console.log(fee);
    ThayDoiPhi(ContractBank,fee,Account);
  }
  return (
    <form className="container mt-5">
    <p>Phí giao dịch hiện tại: {Fee}%</p>
    <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" value={Fee*100} onChange={(e)=>{
      setFee(e.target.value);
    }}>
    <option value="1">0.01%</option>
    <option value="2">0.02%</option>
    <option value="3">0.03%</option>
    <option value="4">0.04%</option>
    <option value="5">0.05%</option>
    <option value="6">0.06%</option>
    <option value="7">0.07%</option>
    <option value="8">0.08%</option>
    <option value="9">0.09%</option>
    <option value="10">0.1%</option>
  </select>
      <button type="submit" class="btn btn-primary" onClick={onThay}>
        Thay đổi
      </button>
    </form>
  );
}

export default ChangeFee;
