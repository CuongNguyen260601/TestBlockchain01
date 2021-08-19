import Bank from "../Contract/ContractBank.json";

export default (web3) => {
  return new web3.eth.Contract(
    Bank.abi,
    "0xF45c45577123A2D430A4C6E7b257593BaEDD7aBd"
  );
};
