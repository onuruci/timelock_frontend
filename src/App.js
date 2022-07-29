import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { connectWallet, generateNewTimeLockWallet, getWalletsOfSender } from './utils/interactions';
import WalletComponent from './components/WalletComponent';
import Header from './components/Header';

const App = () => {

  const [signerWallet, setSignerWallet] = useState("");
  const [wallets, setWallets] = useState([]);
  const [info, setInfo] = useState("");
 
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
      <Header signerWallet={signerWallet} setSignerWallet={setSignerWallet} setInfo={setInfo}/>
      <div>
      <button onClick={() => handleGenerateNewWallet()}>Click to generate new timelock wallet</button>
      <button onClick={() => handleGetWalletsOfSender()}>Click to get wallets</button>
      {
        wallets.map((w) => {
          return(
            <WalletComponent walletAddress={w} key={w}/>
          );
        })
      }
      </div>
    </div>
  );
}

export default App;
