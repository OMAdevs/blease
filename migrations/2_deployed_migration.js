const Election = artifacts.require("../contracts/Election.sol");

module.exports = deployer => deployer.deploy(Election);