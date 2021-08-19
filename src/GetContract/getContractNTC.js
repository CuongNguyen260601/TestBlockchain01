import NTC from "../Contract/ContractNTC.json";

export default (web3) => {
  return new web3.eth.Contract(
    NTC.abi,
    "0x32D899E5feeb7Fb2af3B118a18cB0Cb3431361F8"
  );
};
