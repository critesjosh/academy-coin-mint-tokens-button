const AcademyCoin = artifacts.require("AcademyCoin");

module.exports = function(deployer) {
  deployer.deploy(AcademyCoin, "ConsenSys Academy Coin", "CAC", 18);
};
