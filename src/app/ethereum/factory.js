import web3 from "./web3";
import compiledFactory from "@/app/ethereum/build/Factory.json";

const factory = new web3.eth.Contract(
  compiledFactory.abi,
  "0x44a9034e3aeD37D843206e461c6927BFd1F29B62"
);

export default factory;
