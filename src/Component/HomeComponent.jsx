import React, { useState } from "react";
import PropTypes from "prop-types";
import TableTransaction from './TableTransaction';
import TableTransaction1 from './TableTransaction1';
import { ChuyenTien, SetApprove } from "../Function/ListFuction";
import { useForm } from "react-hook-form";

HomeComponent.propTypes = {
  Account: PropTypes.string,
  ContractBank: PropTypes.object,
  ContractNTC: PropTypes.object,
  Fee: PropTypes.number,
};

HomeComponent.defaultProps = {
  Account: "",
  ContractBank: null,
  ContractNTC: null,
  Fee: 0
};
function HomeComponent(props) {
  const { Account, ContractBank, ContractNTC,Fee } = props;
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    address: "",
    amount: 0,
  });
  const onChangeData = (e) => {
    const { name, value } = e.target;
    const a = {
      ...formData,
      [name]: value,
    };
    setFormData(a);
  };
  const PheDuyet = (e) => {
      e.preventDefault();
    SetApprove(ContractNTC, formData.amount*1000000000000000000, Account).then((res) => {
      if (res) {
        setOpen(true);
        window.alert("Phê duyệt thành công !");
      }
    }).catch((err) => {
        console.log(err);
        window.alert("Phê duyệt thất bại !");
      });
  };
  const ThucHienChuyenTien = (e) => {
    e.preventDefault();

    ChuyenTien(ContractBank, formData.address, formData.amount*1000000000000000000, Account)
      .then((res) => {
        if (res) {
          window.alert("Chuyển tiền thành công !");
        }
      })
      .catch((err) => {
        console.log(err);
        window.alert("Chuyển tiền thất bại !");
      });
  };

  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
      <div>
    <form className="container mt-5">
    <p>Phí giao dịch: {Fee}%</p>
      <div class="col-auto">
        <input
          type="text"
          class="form-control mb-2"
          id="inlineFormInput"
          placeholder="0x0000000000000000000000000000"
          {...setValue("address", formData.address)}
          {...register("address", { required: true })}
          onChange={onChangeData}
        />
        <span style={{ color: "red" }}>
          {errors.address?.type === "required" &&
            "Bạn không thể để trống địa chỉ !!!"}
        </span>
      </div>
      <div class="col-auto">
        <div class="input-group mb-2">
          <input
            type="number"
            class="form-control"
            id="inlineFormInputGroup"
            placeholder="500.000"
            {...setValue("amount", formData.amount)}
            {...register("amount", { required: true, min: 1 })}
            onChange={onChangeData}
          />
          <span style={{ color: "red" }}>
            {errors.amount?.type === "required" &&
              "Bạn không thể để trống số tiền !!!"}
          </span>
          <span style={{ color: "red" }}>
            {errors.amount?.type === "min" && "Số tiền phải lớn hơn 0 !!!"}
          </span>
          <div class="input-group-prepend">
            <div class="input-group-text">NTC</div>
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-primary" onClick={PheDuyet}>
        Phê duyệt
      </button>
      &nbsp;
      {open ? (
        <button type="submit" class="btn btn-primary" onClick={ThucHienChuyenTien}>
          Chuyển tiền
        </button>
      ) : (
        ""
      )}
    </form>
    <TableTransaction ContractBank={ContractBank} Account = {Account}/>
    <TableTransaction1 ContractBank={ContractBank} Account = {Account}/>
    </div>
  );
}

export default HomeComponent;
