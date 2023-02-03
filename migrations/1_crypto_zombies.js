var CryptoZombies = artifacts.require("../contracts/CryptoZombies.sol");
module.exports = function (deployer) {
  deployer.deploy(CryptoZombies);
  // Additional contracts can be deployed here
};
