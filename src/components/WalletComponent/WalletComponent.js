import React from "react";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { signer } from "../../utils/interactions";
import { getWalletContractInfo } from "../../utils/interactions";
import { WalletWraper, WİthdrawButton } from "./ScWalletComponents";
import { Link } from "react-router-dom";
import eth1 from '../../common/eth1.png';
import eth2 from '../../common/eth2.png';
import eth3 from '../../common/eth3.png';
import eth4 from '../../common/eth4.png';
import eth5 from '../../common/eth5.svg';
import unlockLogo from '../../common/unlock.png';
import lockLogo from '../../common/lock.png';
import avalancheIcon from '../../common/avalanche-avax-logo.svg';

const contractAbi = require("../../utils/WalletABI.json");

const imgArr = [eth1, eth2,  eth3, eth4, eth5];


const WalletComponent = ({walletAddress, notDisplay}) => {
    const [unlockDate, setUnlockDate] = useState("");
    const [walletBalance, setWalletBalance] = useState(0);
    const [imgState, setImgState] = useState(Math.floor(Math.random() * 5));
    const [displayComponent, setDisplay] = useState(true);
 
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
        if(notDisplay && walletBalance === 0 && new Date(unlockDate).getTime() < Date.now()){
            setDisplay(false);
        }
    }, []);

    useEffect(() => {
        if(notDisplay && walletBalance == 0 && new Date(unlockDate).getTime() < Date.now()){
            setDisplay(false);
        } else {
            setDisplay(true);
        }
        console.log("Date:  ", Date.now(), "  ", new Date(unlockDate).getTime());
    }, [notDisplay]);

    return(
        <Link to={"/wallet/" + walletAddress} style={{width: '250px', marginTop: '1rem', padding:'0.5rem 0.5rem', marginLeft:'auto', marginRight:'auto', textDecoration: 'none', color: 'black', display: (displayComponent ? '' : 'none')}}>
            <WalletWraper>
                <div style={{marginRight:'auto', width: '20px'}}>
                    <img src={new Date(unlockDate).getTime() < Date.now() ? unlockLogo : lockLogo} alt="" srcset="" style={{width: '20px'}}/>
                </div>
                <div style={{marginLeft: 'auto', marginRight:'auto', width: '100px', height:'120px', marginTop:'0.5rem'}}>
                    <img src={imgArr[imgState]} alt="" srcset="" style={{width: '100px'}}/>
                </div>
                <div style={{marginLeft:'auto', marginRight:'auto', textAlign:'center', display:'flex', flexDirection:'row'}}>
                    <div style={{marginLeft:'auto', marginRight:'0.5rem'}}>
                        {walletBalance}
                    </div>
                    <img src={avalancheIcon} alt="" style={{width:'20px', marginRight:'auto', marginLeft:'0.5rem'}}/>
                </div>
                <div style={{marginTop: '1rem', textAlign:'center'}}>
                    {(unlockDate.slice(0, unlockDate.indexOf(',')).replaceAll('/', '.') + " - " + unlockDate.slice(unlockDate.indexOf(',')+1, unlockDate.indexOf(':', unlockDate.indexOf(':')+1)) + " " +unlockDate.slice(-2))}
                </div>
                {/* <div style={{marginTop: '0.5rem', textAlign:'center'}}>
                    <button onClick={() => handleWithdraw()}>Withdraw Funds</button>
                    <WİthdrawButton> Withdraw Funds </WİthdrawButton>
                </div> */}
                <div style={{marginTop:'1rem', textAlign:'center', fontSize:'0.7vw'}}>
                    <p>
                        Click to get to wallet page
                    </p>
                </div>
            </WalletWraper>
        </Link>
    );
};

export default WalletComponent;