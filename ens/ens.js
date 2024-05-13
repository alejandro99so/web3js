const { Web3 } = require("web3");
const { ENS } = require('web3-eth-ens');


const callEns = async () => {
    const rpc = "https://endpoints.omniatech.io/v1/eth/mainnet/public";
    const web3 = new Web3(rpc)
    const address = await web3.eth.ens.getAddress('web3js.eth');
    const hash = await web3.eth.ens.getContenthash('vitalik.eth');
    const owner = await web3.eth.ens.getOwner('web3js.eth');
    const key = await web3.eth.ens.getPubkey('vitalik.eth');
    const resolver = await web3.eth.ens.getResolver('web3js.eth');
    const ttl = await web3.eth.ens.getTTL('web3js.eth');
    const result = await web3.eth.ens.recordExists('wispy.eth');

    console.log({ address, hash, owner, key, resolver: resolver.options.address, ttl, result })
}

callEns()