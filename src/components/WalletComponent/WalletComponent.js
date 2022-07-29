import React from "react";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { signer } from "../../utils/interactions";
import { getWalletContractInfo } from "../../utils/interactions";
import { WalletWraper } from "./ScWalletComponents";
import eth1 from '../../common/eth1.png';
import eth2 from '../../common/eth2.png';
import eth3 from '../../common/eth3.png';
import eth4 from '../../common/eth4.png';
import eth5 from '../../common/eth5.svg';
import unlockLogo from '../../common/unlock.png';

const contractAbi = require("../../utils/WalletABI.json");

const imgArr = [eth1, eth2,  eth3, eth4, eth5];


const WalletComponent = ({walletAddress}) => {
    const [unlockDate, setUnlockDate] = useState("");
    const [walletBalance, setWalletBalance] = useState(0);

    const timelockWalletContract = new ethers.Contract(
        walletAddress,
        contractAbi,
        signer
    );

    const setContractInfo = async (_unlockDate, _balance) => {
        setUnlockDate(_unlockDate);
        setWalletBalance(_balance);
    };

    const handleWithdraw = async () => {
        const {hash} = await timelockWalletContract.withdraw({gasLimit: 50000});
    };

    useEffect(() => {
        getWalletContractInfo(timelockWalletContract, setContractInfo);
    }, []);

    return(
        <div style={{width: '250px', marginTop: '1rem', padding:'0.5rem 0.5rem', marginLeft:'auto', marginRight:'auto'}}>
            <WalletWraper>
                <div style={{marginRight:'auto', width: '20px'}}>
                    <img src={unlockLogo} alt="" srcset="" style={{width: '20px'}}/>
                </div>
                <div style={{marginLeft: 'auto', marginRight:'auto', width: '100px', height:'120px', marginTop:'0.5rem'}}>
                    <img src={imgArr[Math.floor(Math.random() * 5)]} alt="" srcset="" style={{width: '100px'}}/>
                </div>
                <div>
                    {walletBalance}
                </div>
                <div>
                    {unlockDate}
                </div>
                <div>
                    <button onClick={() => handleWithdraw()}>Withdraw Funds</button>
                </div>
            </WalletWraper>
        </div>
    );
};

export default WalletComponent;