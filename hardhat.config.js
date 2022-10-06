require("@nomicfoundation/hardhat-toolbox");
const ALCHEMY_API_KEY = "zXfGpyaSYE4x8HLlTG1HuL7uS2Bi8w2r";
const GOERLI_PRIVATE_KEY = "e7bc1cc9bf6cf4319cf495f9fa3f276b1b55044dfec23c646821298d484b8a09";


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY]
    }
  }
};
