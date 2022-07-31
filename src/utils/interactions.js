import { ethers } from "ethers";
const contractAddress =  "0x9feCe85D0EE0e213d06283e815cA8d6809A18bF7";
const contractAbi = require("./FactoryABI.json");
export var provider;
export var signer;
var timelockFactoryContract;

export const getWalletContractInfo = async (_timelockWalletContract, _setContractInfo) => {
    let a = await _timelockWalletContract.getContractInfo();
    let d = new Date(parseInt(a[1]._hex)*1000);
    _setContractInfo(d.toLocaleString(), ethers.utils.formatEther(a[2]._hex));
};

export const getWalletsOfSender = async (walletSetter) => {
    let addressArr = await timelockFactoryContract.getWalletsOfSender();
    walletSetter(addressArr);
    console.log(addressArr);
};

export const generateNewTimeLockWallet = async () => {
    let newAddress =  await timelockFactoryContract.newWallet(1659016713, {value: ethers.utils.parseEther("0.1")});
    console.log(newAddress);
};

export const connectWallet = async () => {
    if(window.ethereum) {
        await window.ethereum.enable();
        provider = new ethers.providers.Web3Provider(window.ethereum);
        signer = await provider.getSigner();
        timelockFactoryContract = new ethers.Contract(
            contractAddress,
            contractAbi,
            signer
        );
        let add = await signer.getAddress();
        console.log("Signer: ", add);
        console.log(timelockFactoryContract);
    } else {
        return("You should install metamask");
    }
};