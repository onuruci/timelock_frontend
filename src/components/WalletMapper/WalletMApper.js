import React from "react";
import { useEffect } from "react";
import WalletComponent from "../WalletComponent/WalletComponent";
import { MapperWrapper } from "./ScWalletMapper";

const WalletMapper = ({wallets, notDisplay}) => {

    useEffect(() => {
        console.log("Written");
    }, []);

    return(
        <MapperWrapper>
            {
                wallets.map((w) => {
                    return(
                        <WalletComponent walletAddress={w} key={w} notDisplay={notDisplay}/>
                    );
                })
            }
        </MapperWrapper>
    );
};

export default WalletMapper;