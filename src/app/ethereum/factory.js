import web3 from "./web3";
import compiledFactory from "@/app/ethereum/build/Factory.json";

const factory = new web3.eth.Contract(
  compiledFactory.abi,
  "0xc7F23ac5080B034c0d38a26438e1F059Bb108aD3"
);

export default factory;
