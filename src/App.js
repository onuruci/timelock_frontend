import React from 'react';
import { useState, useEffect } from 'react';
import { connectWallet, generateNewTimeLockWallet, getWalletsOfSender } from './utils/interactions';
import WalletMapper from './components/WalletMapper';
import NewWalletGenerator from './components/NewWalletGenerator';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const App = ({signer}) => {
  const [wallets, setWallets] = useState([]);
  const [notDisplay, setNotDisplayOld] = useState(false);

  useEffect(() => {
    const a = async () => {
      //await connectWallet();
      getWalletsOfSender(walletSetter);
    };
    if(signer !== ""){
      a();
    }
  }, [signer]);

  const handleGenerateNewWallet = () => {
    generateNewTimeLockWallet();
  };

  const handleGetWalletsOfSender = () => {
    getWalletsOfSender(walletSetter);
  };

  const handleSwitch = (e) => {
    if(e.target._valueTracker.getValue() === 'true'){
      setNotDisplayOld(true);
    } else if(e.target._valueTracker.getValue() === 'false') {
      setNotDisplayOld(false);
    }
    console.log(notDisplay);
  };

  const walletSetter = (arr) => {
    setWallets(arr);
    console.log("arr: ",arr);
    console.log("walets: ",wallets);
  };

  return (
    <div className="App">
      <div style={{width: '100%'}}>
        <div style={{maxWidth: '1400px', marginLeft: 'auto', marginRight:'auto', padding:'1rem 2rem'}}>
          <NewWalletGenerator/>
          {/* <button onClick={() => handleGenerateNewWallet()}>Click to generate new timelock wallet</button> */}
          <div style={{marginTop:'1rem', maxWidth:'240px', padding:'0.5rem 0.5rem', marginLeft:'auto', marginRight:'8rem'}}>
            <FormControlLabel control={<Switch onChange={(e) => handleSwitch(e)}/>} label="Disable Old Wallets" />
          </div>
          <WalletMapper wallets={wallets} notDisplay={notDisplay}/>
        </div>
      </div>
    </div>
  );
}

export default App;
