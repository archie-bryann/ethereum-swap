const Token = artifacts.require("Token");
const EthSwap = artifacts.require("EthSwap");

module.exports = async function (deployer) {
  // Deploy Token
  await deployer.deploy(Token); // similar to `Token.new()`
  const token = await Token.deployed()

  // Deploy EthSwap
  await deployer.deploy(EthSwap, token.address); // similar to EthSwap.new(token.address) but for migrations
  const ethSwap = await EthSwap.deployed()

  // Transfer all tokens to EthSwap (1 million)
  await token.transfer(ethSwap.address, '1000000000000000000000000') // assumed to be the first account on the blockchain sending this // this transfer applies when migrating to the blockchain (we are transferring tokens from our currency to use on the contract)
};
