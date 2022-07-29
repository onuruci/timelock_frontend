import React from 'react'
import { LogoWrapper, LogoImgWrapper, HeaderWritingoWrapper } from './ScHeaderLogo';
import timeLockLogo from '../../common/timelock_logo.png';

const HeaderLogo = () => {
  return (
    <LogoWrapper>
        <LogoImgWrapper>
            <img src={timeLockLogo} alt="" srcset="" style={{width: '40px'}} />
        </LogoImgWrapper>
        <HeaderWritingoWrapper>
            TimeLock
        </HeaderWritingoWrapper>
    </LogoWrapper>
  )
};

export default HeaderLogo;