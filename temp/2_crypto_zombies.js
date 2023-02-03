var CryptoZombies = artifacts.require("CrytoZombies");
module.exports = function (deployer) {
  deployer.deploy(CryptoZombies);
  // Additional contracts can be deployed here
};
