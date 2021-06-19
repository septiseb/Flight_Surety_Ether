const HDWalletProvider = require("truffle-hdwallet-provider");
const infuraKey = "fff7b2c0c86f48f3927eaeb7f034947a";
//
// const fs = require('fs');
const mnemonic =
  "like crouch sure trip toe kick need reopen vault name artist all";

module.exports = {
 networks: {
    // Useful for testing. The `development` name is special - truffle uses it by default
    // if it's defined here and no other network is specified at the command line.
    // You should run a client (like ganache-cli, geth or parity) in a separate terminal
    // tab if you use this network and you must also set the `host`, `port` and `network_id`
    // options below to some value.
    //
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 8545, // Standard Ethereum port (default: none)
      network_id: "*", // Any network (default: none)
    },
    rinkeby: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `https://rinkeby.infura.io/v3/${infuraKey}`
        ),
      network_id: 4, // rinkeby's id
      gas: 4500000, // rinkeby has a lower block limit than mainnet
      gasPrice: 10000000000,
    },
 },
   compilers: {
    solc: {
      version: "^0.4.24"
    },
  },
};