import React from 'react';
import { useState } from 'react';
import { WalletGeneratorWrapper, GenerateButtonWrapper } from './ScNewWalletGenerator';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import avaxLogo from '../../common/avalanche-avax-logo.svg'

const NewWalletGenerator = () => {
  const [date, setDate] = useState("");
  return (
      <WalletGeneratorWrapper>
        <div style={{marginLeft: 'auto', marginRight: 'auto' , maxWidth: '215px', marginTop: '1rem', display:'flex', flexDirection:'row'}}>
          <div style={{marginLeft: 'auto', marginRight: 'auto' , maxWidth: '140px'}}>
            <Input
              type="number"
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
              value={null}
              onChange={(newValue) => {
                setDate(newValue);
              }}
              style={{color: 'blue'}}
              color={"blue"}
            />
          </LocalizationProvider>
        </div>

        <div style={{marginLeft: 'auto', marginRight: 'auto' , maxWidth: '215px', marginTop: '1rem'}}>
          <GenerateButtonWrapper>New Time Locked Wallet</GenerateButtonWrapper>
        </div>
      </WalletGeneratorWrapper>
  );
}

export default NewWalletGenerator;