import React from 'react';
import { useState } from 'react';
import { generateNewTimeLockWallet } from '../../utils/interactions';
import { WalletGeneratorWrapper, GenerateButtonWrapper } from './ScNewWalletGenerator';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import avaxLogo from '../../common/avalanche-avax-logo.svg';

const NewWalletGenerator = () => {
  const [date, setDate] = useState("");
  const [valueAvax, setAvaxValue] = useState(0);

  const handleClick = () => {
    generateNewTimeLockWallet(date, valueAvax);
  };

  return (
      <WalletGeneratorWrapper>
        <div style={{marginLeft: 'auto', marginRight: 'auto' , maxWidth: '215px', marginTop: '1rem', display:'flex', flexDirection:'row'}}>
          <div style={{marginLeft: 'auto', marginRight: 'auto' , maxWidth: '140px'}}>
            <Input
              type="number"
              value={valueAvax}
              onChange={e => setAvaxValue(e.target.value)}
            >
            </Input>
          </div>

        
          <div style={{margin: 'auto' }}>
            <img src={avaxLogo} alt="" srcset="" style={{width: '20px'}}/>
          </div>
        </div>

        <div style={{marginLeft: 'auto', marginRight: 'auto' , maxWidth: '215px', marginTop: '1rem'}}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              label="Select Date and Time"
              renderInput={(params) => <TextField {...params} />}
              value={date || null}
              onChange={(newValue) => {
                setDate( new Date(newValue));
              }}
              style={{color: 'blue'}}
              color={"blue"}
            />
          </LocalizationProvider>
        </div>

        <div style={{marginLeft: 'auto', marginRight: 'auto' , maxWidth: '215px', marginTop: '1rem'}}>
          <GenerateButtonWrapper onClick={() => handleClick() }>New Time Locked Wallet</GenerateButtonWrapper>
        </div>
      </WalletGeneratorWrapper>
  );
}

export default NewWalletGenerator;