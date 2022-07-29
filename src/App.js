import React from 'react';
import { useState, useEffect } from 'react';
import { connectWallet, generateNewTimeLockWallet, getWalletsOfSender } from './utils/interactions';
import WalletMapper from './components/WalletMapper';

const App = () => {
  const [wallets, setWallets] = useState([]);

  useEffect(() => {
    const a = async () => {
      await connectWallet();
      getWalletsOfSender(walletSetter);
    };
    a();
  }, []);

  const handleGenerateNewWallet = () => {
    generateNewTimeLockWallet();
  };

  const handleGetWalletsOfSender = () => {
    getWalletsOfSender(walletSetter);
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
          <button onClick={() => handleGenerateNewWallet()}>Click to generate new timelock wallet</button>
          <button onClick={() => handleGetWalletsOfSender()}>Click to get wallets</button>
          <WalletMapper wallets={wallets}/>
        </div>
      </div>
    </div>
  );
}

export default App;
