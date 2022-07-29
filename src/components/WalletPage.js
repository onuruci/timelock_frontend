import React from "react";
import { useState } from "react";
import { Routes, Route, useParams } from "react-router-dom";

const WalletPage = () => {
    const {walletAddress} = useParams();

    const [unlockDate, setUnlockDate] = useState("");
    const [balance, setBalance] = useState(0);

    const setContractInfo = async (_unlockDate, _balance) => {
        setUnlockDate(_unlockDate);
        setBalance(_balance);
    };

    return(
        <div>
            Wallet Page
            <div>
                {walletAddress}
            </div>
            <div>
                {unlockDate}
            </div>
            <div>
                {balance}
            </div>
            <div>
                <input type="" />
            </div>
        </div>
    );
};

export default WalletPage;