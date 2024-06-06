const HDWalletProvider = require("@truffle/hdwallet-provider");
const { Web3 } = require("web3");
const compiledFactory = require("./build/Factory.json");
const provider = new HDWalletProvider(
  "wealth snow reason float skill key claw fly mutual undo mandate attitude",
  "https://sepolia.infura.io/v3/0f6a34a23b974fa3a05a4e8f70472aba"
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(compiledFactory.abi)
    .deploy({ data: compiledFactory.evm.bytecode.object })
    .send({ gas: "1400000", from: accounts[0] });

  console.log("Contract deployed to", result.options.address);
  provider.engine.stop();
};
deploy();
