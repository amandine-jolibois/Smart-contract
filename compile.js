const path = require('path');
const fs = require('fs');
const solc = require('solc');

const BonjourPath = path.resolve(__dirname, "contracts", "Bonjour.sol");

const compilerInput = {
  language: "Solidity",
  sources: {
    'Bonjour': { content: fs.readFileSync(BonjourPath, 'utf8') }
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["abi", "evm.bytecode"]
      }
    }
  }
};

// Exporter l’output pour le test
module.exports = JSON.parse(solc.compile(JSON.stringify(compilerInput)));
