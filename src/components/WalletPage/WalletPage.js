import React from "react";
import { useState } from "react";
import { AddressWraper } from "./ScWalletPage";
import { Routes, Route, useParams } from "react-router-dom";
import avalancheIcon from '../../common/avalanche-avax-logo.svg';
import copyIcon from '../../common/copy.png';


const WalletPage = () => {
    const {walletAddress} = useParams();

    const [unlockDate, setUnlockDate] = useState("");
    const [balance, setBalance] = useState(0);

    const setContractInfo = async (_unlockDate, _balance) => {
        setUnlockDate(_unlockDate);
        setBalance(_balance);
    };

    return(
        <div style={{maxWidth:'1400px', marginLeft:'auto', marginRight:'auto', padding:'1rem 2rem'}}>
            <div style={{maxWidth:'14rem' , marginLeft:'auto', marginRight:'auto', border:'2px solid', padding:'10px 15px' ,textAlign:'center', fontSize:'24px', fontWeight:'bold', boxShadow:'5px 5px'}}>
                Wallet Page
            </div>
            <div style={{marginTop:'3rem' , maxWidth:'580px', marginLeft:'auto', marginRight:'auto',  border:'2px solid', padding:'2rem 3rem', boxShadow:'5px 5px'}}>
                <AddressWraper style={{display:'flex', flexDirection:'row', justifyContent:'center', cursor:'pointer',  maxWidth:'14rem', marginLeft:'auto', marginRight:'auto', padding:'5px 5px', borderRadius:'0.5rem'}}>
                    <div style={{textAlign:'center'}}>
                        {walletAddress.slice(0, 8) + "..." + walletAddress.slice(38)}
                    </div>
                    <div style={{marginLeft:'1rem', cursor:'pointer'}}>
                        <img src={copyIcon} alt="" srcset="" style={{maxWidth:'20px'}}/>
                    </div>
                </AddressWraper>
                <div style={{}}>
                    {unlockDate}
                </div>
                <div style={{marginLeft:'auto', marginRight:'auto', textAlign:'center', display:'flex', flexDirection:'row', marginTop:'1rem'}}>
                    <div style={{marginLeft:'auto', marginRight:'0.5rem'}}>
                        {balance}
                    </div>
                    <img src={avalancheIcon} alt="" style={{width:'20px', marginRight:'auto', marginLeft:'0.5rem'}}/>
                </div>
                <div style={{marginLeft:'auto', marginRight:'auto', marginTop:'1rem', display:'flex', flexDirection:'row', justifyContent: 'center'}}>
                    <div style={{marginRight:'1rem'}}>
                        <input type="" />
                    </div>

                    <button style={{border:'2px solid', padding:'5px 10px' ,textAlign:'center', fontSize:'12px', fontWeight:'bold', boxShadow:'3px 3px'}}>
                        Add Fund
                    </button>
                </div>
                <div style={{marginTop: '2rem', display:'flex', justifyContent:'center'}}>
                    <button style={{border:'2px solid', padding:'5px 10px' ,textAlign:'center', fontSize:'16px', fontWeight:'bold', boxShadow:'3px 3px'}}>
                        Withdraw Funds
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WalletPage;