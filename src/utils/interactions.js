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

export const generateNewTimeLockWallet = async (_date, _valueAvax) => {
    console.log(_date);
    let newAddress =  await timelockFactoryContract.newWallet(Math.floor(new Date(_date).getTime() / 1000), {value: ethers.utils.parseEther(_valueAvax)});
    console.log(newAddress);
};

export const connectWallet = async (setSigner) => {
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
        setSigner(add);
        console.log("Signer: ", add);
        console.log(timelockFactoryContract);
    } else {
        return("You should install metamask");
    }
};

export const getCurrentWalletConnected = async (setSigner) => {
    if (window.ethereum) {
      try {
        const addressArray = await window.ethereum.request({method: "eth_accounts",});
        if (addressArray.length > 0) {
            provider = new ethers.providers.Web3Provider(window.ethereum);
            signer = await provider.getSigner();
            timelockFactoryContract = new ethers.Contract(
                contractAddress,
                contractAbi,
                signer
            );
            let add = await signer.getAddress();
            setSigner(add);
            console.log("Current: ", add);
          return {
            address: addressArray[0],
            status: "👆🏽 You can send ropsten ether to your account",
          };
        } 
        else {
          return {
            address: "",
            status: "🦊 Connect to Metamask using the top right button.",
          };
        }
      } catch (err) {
        return {
          address: "",
          status: "😥 " + err.message,
        };
      }
    } else {
      return {
        address: "",
        status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a target="_blank" href={`https://metamask.io/download.html`}>
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
        ),
      };
    }
  };