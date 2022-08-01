import React from 'react';
import { useState, useEffect } from 'react';
import { ConnectorWrapper, GreenDot, ConnectInfoWrapper, MetaMaskWrapper } from './ScWalletConnector';
import metamaskIcon from '../../common/Metamask-icon.svg';
import { connectWallet, getCurrentWalletConnected } from '../../utils/interactions';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

const WalletConnector = ({signerWallet, setSignerWallet}) => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        getCurrentWalletConnected(setSignerWallet);
        console.log(window.innerWidth);
    }, []);

    useEffect(() => {
        function handleResize() {
          setWindowDimensions(getWindowDimensions());
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

  return (
      <div>
          {signerWallet === ""  ? 
          <ConnectorWrapper onClick={() => connectWallet(setSignerWallet)}>
           <ConnectInfoWrapper>
                {windowDimensions.width > 720 ? 'Connect Wallet' : 
                ('Connect')}
           </ConnectInfoWrapper>

           <MetaMaskWrapper>
               <img src={metamaskIcon} alt="" srcset="" />
           </MetaMaskWrapper>
           </ConnectorWrapper> :  
        <ConnectorWrapper>
            <GreenDot/>
            <ConnectInfoWrapper>
                {windowDimensions.width > 720 ? (signerWallet.slice(0,6) + "..."  + signerWallet.slice(38)) : 
                (signerWallet.slice(0,6))}
            </ConnectInfoWrapper>
        </ConnectorWrapper>}
      </div>
  );
};

export default WalletConnector