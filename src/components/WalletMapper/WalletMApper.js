import React from "react";
import WalletComponent from "../WalletComponent/WalletComponent";
import { MapperWrapper } from "./ScWalletMapper";

const WalletMapper = ({wallets}) => {
    return(
        <MapperWrapper>
            {
                wallets.map((w) => {
                    return(
                        <WalletComponent walletAddress={w} key={w}/>
                    );
                })
            }
        </MapperWrapper>
    );
};

export default WalletMapper;