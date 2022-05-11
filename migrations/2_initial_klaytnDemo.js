const KlaytnDemo = artifacts.require("KlaytnGreeter");

module.exports = function (deployer, network, accounts) {

    console.log(accounts);
    deployer.deploy(KlaytnDemo, 'Hello, Klaytn');
};
