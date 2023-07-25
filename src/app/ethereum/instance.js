import web3 from "./web3";
import compiledHmsb from '@/app/ethereum/build/Hmsb.json'

console.log("abiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii - ", compiledHmsb.abi);
const instance = new web3.eth.Contract(
    compiledHmsb.abi,
  "0xCB54e5A24B10dCCEdcedD478072C01be6D46f7F7"
);

export default instance;
