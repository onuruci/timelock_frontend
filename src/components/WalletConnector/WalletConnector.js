import React from 'react';
import { ConnectorWrapper, GreenDot, ConnectInfoWrapper, MetaMaskWrapper } from './ScWalletConnector';
import metamaskIcon from '../../common/Metamask-icon.svg';

const WalletConnector = ({signerWallet, setSignerWallet}) => {
  return (
      <div>
          {signerWallet === ""  ? 
          <ConnectorWrapper>
           <ConnectInfoWrapper>
               Connect Wallet
           </ConnectInfoWrapper>

           <MetaMaskWrapper>
               <img src={metamaskIcon} alt="" srcset="" />
           </MetaMaskWrapper>
           </ConnectorWrapper> :  
        <ConnectorWrapper>
            <GreenDot/>
            <ConnectInfoWrapper>
                Connect Wallet
            </ConnectInfoWrapper>
        </ConnectorWrapper>}
      </div>
  );
};

export default WalletConnector