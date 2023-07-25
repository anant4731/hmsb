// const HDWalletProvider = require("@truffle/hdwallet-provider");
// const Web3 = require("web3");
// const { interface, bytecode } = require("./compile");

// const provider = new HDWalletProvider(
//   "venue embark ahead alert illegal object citizen bottom split dust caught style",
//   // remember to change this to your own phrase!
//   "https://sepolia.infura.io/v3/0f6a34a23b974fa3a05a4e8f70472aba"
//   // remember to change this to your own endpoint!
// );
// const web3 = new Web3(provider);

// const deploy = async () => {
//   const accounts = await web3.eth.getAccounts();

//   console.log("Attempting to deploy from account", accounts[0]);

//   const result = await new web3.eth.Contract(JSON.parse(interface))
//     .deploy({ data: bytecode })
//     .send({ gas: "1000000", from: accounts[0] });

//   console.log(interface);
//   console.log("Contract deployed to", result.options.address);
//   provider.engine.stop();
// };
// deploy();


const HDWalletProvider = require("@truffle/hdwallet-provider");
const { Web3 } = require("web3");
const compiledHmsb = require("./build/Hmsb.json");

const provider = new HDWalletProvider(
  "venue embark ahead alert illegal object citizen bottom split dust caught style",
  // remember to change this to your own phrase!
  "https://sepolia.infura.io/v3/0f6a34a23b974fa3a05a4e8f70472aba"
  // remember to change this to your own endpoint!
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(compiledHmsb.abi)
    .deploy({ data: compiledHmsb.evm.bytecode.object })
    .send({ gas: "1400000", from: accounts[0] });

  console.log("Contract deployed to", result.options.address);
  provider.engine.stop();
};
deploy();
