import React from "react";
import { SectionWrapper, HeaderWrapper } from "./ScHeader";
import WalletConnector from "../WalletConnector/WalletConnector";
import HeaderLogo from "../HeaderLogo/HeaderLogo";

const Header = ({signerWallet, setSignerWallet, setInfo}) => {
    return(
        <SectionWrapper>
            <HeaderWrapper>
                <HeaderLogo/>
                <WalletConnector signerWallet={signerWallet} setSignerWallet={setSignerWallet}/>
            </HeaderWrapper>
        </SectionWrapper>
    );
};

export default Header;