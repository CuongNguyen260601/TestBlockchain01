const { ethers } = require("ethers");
const BigNumber = ethers.BigNumber;
export const SetApprove = (contractNTC,amount,account)=>{
    return contractNTC.methods.approve("0xF45c45577123A2D430A4C6E7b257593BaEDD7aBd",amount).send({from:account});
}

export const ChuyenTien = (contractBank,adNguoiNhan,amount,account)=>{

    return contractBank.methods.ChuyenTien(adNguoiNhan,amount).send({from:account});
}

export const ThayDoiPhi = (contractBank,newFee,account)=>{
    return contractBank.methods.ThayDoiPhanTramGiaoDich(newFee).send({from:account});
}

export const LayDanhSachGiaoDichGui = async(contractBank,adNguoiGui)=>{
    const DanhSachMaBienLaiGuiTien = await contractBank.methods.LayDanhSachBienLaiGuiTien(adNguoiGui).call();
    const DanhSachBienLaiGuiTien = [];
    for(let i = 0;i <DanhSachMaBienLaiGuiTien.length;i++) {
        const a = await contractBank.methods.DanhSachTatCaGiaoDich(i+1).call();
        DanhSachBienLaiGuiTien.push(a);
    }
    return DanhSachBienLaiGuiTien;
}

export const LayDanhSachGiaoDichNhan = async(contractBank,adNguoiNhan)=>{
    const DanhSachMaBienLaiNhanTien = await contractBank.methods.LayDanhSachBienLaiNhanTien(adNguoiNhan).call();
    const DanhSachBienLaiNhanTien = [];
    for(let i = 0;i <DanhSachMaBienLaiNhanTien.length;i++) {
        const a = await contractBank.methods.DanhSachTatCaGiaoDich(i+1).call();
        DanhSachBienLaiNhanTien.push(a);
    }
    return DanhSachBienLaiNhanTien;
    
}

export const LayPhiGiaoDich = async(contractBank)=>{
    return contractBank.methods.PhanTramGiaoDich().call();
}