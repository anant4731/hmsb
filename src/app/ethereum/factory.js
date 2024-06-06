import web3 from "./web3";
import compiledFactory from "@/app/ethereum/build/Factory.json";

const factory = new web3.eth.Contract(
  compiledFactory.abi,
  "0x4308467B16CABD20386b8fF855F989084beE1636"
);

export default factory;
