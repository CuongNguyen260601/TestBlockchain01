import React,{useState} from "react";
import PropTypes from "prop-types";
import { LayDanhSachGiaoDichNhan } from './../Function/ListFuction';

TableTransaction.propTypes = {
    ContractBank: PropTypes.object,
    Account: PropTypes.string,
};

TableTransaction.defaultProps = {
    ContractBank:null,
    Account:'',
};
function TableTransaction(props) {
    const {ContractBank,Account} = props;

    const [listNha, setlistNhan] = useState([]);
    const onClickLay  =()=>{ LayDanhSachGiaoDichNhan(ContractBank,Account).then(res=>{
        setlistNhan(res);
    })}
  return (
    <div className = "container mt-5">
    <button type="button" class="btn btn-primary" onClick={onClickLay}>Lấy danh sách lịch sử nhận tiền</button>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Người Gửi</th>
            <th scope="col">Người Nhận</th>
            <th scope="col">Phí</th>
            <th scope="col">Số tiền</th>
          </tr>
        </thead>
        <tbody>
        {listNha.map(a=>(
        <tr>
            <th scope="row">{a.NguoiGui}</th>
            <td>{a.NguoiNhan}</td>
            <td>{a.PhiGiaoDich/1000000000000000000}</td>
            <td>{a.SoTien/1000000000000000000}</td>
          </tr>
            ))}
         
        </tbody>
      </table>
    </div>
  );
}

export default TableTransaction;
