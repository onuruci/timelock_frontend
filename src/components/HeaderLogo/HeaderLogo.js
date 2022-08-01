import React from 'react';
import { Link } from 'react-router-dom';
import { LogoWrapper, LogoImgWrapper, HeaderWritingoWrapper } from './ScHeaderLogo';
import timeLockLogo from '../../common/timelock_logo.png';

const HeaderLogo = () => {
  return (
    <LogoWrapper>
      <Link to="/" style={{textDecoration:'none' , color:'black'}}>
        <LogoWrapper>
          
            <LogoImgWrapper>
                <img src={timeLockLogo} alt="" srcset="" style={{width: '40px'}} />
            </LogoImgWrapper>
            <HeaderWritingoWrapper>
                TimeLock
            </HeaderWritingoWrapper>
        
        </LogoWrapper>
      </Link>
    </LogoWrapper>
  )
};

export default HeaderLogo;