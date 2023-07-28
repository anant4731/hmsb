// const path = require("path");
// const fs = require("fs");
// const solc = require("solc");

// const contractPath = path.resolve(__dirname, "contracts", "hmsb.sol");
// const source = fs.readFileSync(contractPath, "utf8");

// module.exports = solc.compile(source, 1).contracts[":Hmsb"];


const path = require("path");
const solc = require("solc");
const fs = require("fs-extra");

const buildPath = path.resolve(__dirname, "build");
fs.removeSync(buildPath);

const contractPath = path.resolve(__dirname, "contracts", "hmsb.sol");
const source = fs.readFileSync(contractPath, "utf8");

const input = {
  language: "Solidity",
  sources: {
    "hmsb.sol": {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },  
  },
};

const output = JSON.parse(solc.compile(JSON.stringify(input))).contracts[
  "hmsb.sol"
];

fs.ensureDirSync(buildPath);

for (let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(":", "") + ".json"),
    output[contract]
  );
}
