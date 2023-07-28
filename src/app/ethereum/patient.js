import web3 from "./web3";
import compiledPatient from "./build/Patient.json";

const patient = (address) => {
  return new web3.eth.Contract(compiledPatient.abi, address);
};
export default patient;
