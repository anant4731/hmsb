import web3 from "./web3";
import compiledFactory from "@/app/ethereum/build/Factory.json";

const factory = new web3.eth.Contract(
  compiledFactory.abi,
  "0x6E974977CCb8b5579cf8d77863E5cBD84E203359"
);

export default factory;
