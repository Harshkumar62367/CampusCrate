import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const web3 = require('@thirdweb-dev/sdk');

async function main2() {
  
    const sdk = web3.ThirdwebSDK.fromPrivateKey(
      " << pvt key here >>",
      "https://filecoin-hyperspace-testnet.rpc.thirdweb.com",
    );

    const deployedAddress = await await sdk.getSigner().getAddress();
  
    console.log(deployedAddress);
  }
  
  main2();