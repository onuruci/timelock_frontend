import React from "react";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { signer } from "../utils/interactions";
import { getWalletContractInfo } from "../utils/interactions";
const contractAbi = require("../utils/WalletABI.json");


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
        <div>
            <div>
                {walletAddress}
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
        </div>
    );
};

export default WalletComponent;