import styled from 'styled-components'

export const WalletWraper = styled.div`
  background: rgb(242, 246, 255) none repeat scroll 0% 0%;
  width: 100%;
  height: 100%;
  padding: 1rem 0.5rem 0.5rem 0.5rem;
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  &:hover {
    background: rgba(0, 0, 0, 0) radial-gradient(102.8% 102.8% at 3.14% -9.06%, rgb(233, 255, 252) 0%, rgb(232, 254, 251) 4.74%, rgb(228, 244, 247) 50.11%, rgb(225, 238, 244) 83.07%, rgb(224, 236, 243) 100%) repeat scroll 0% 0%;
  }
`;

export const WİthdrawButton = styled.button`
  background-color: rgb(158, 204, 234);
  border-color: rgb(46, 125, 175);
  color: rgb(104, 115, 141);
  border-radius: 12px;
  border: 2px solid;
  box-sizing: border-box;
  padding: 0.1rem 0.5rem;
  cursor: pointer;
  &:hover {
    background: rgba(0, 0, 0, 0) radial-gradient(102.8% 102.8% at 3.14% -9.06%, rgb(233, 255, 252) 0%, rgb(232, 254, 251) 4.74%, rgb(228, 244, 247) 50.11%, rgb(225, 238, 244) 83.07%, rgb(224, 236, 243) 100%) repeat scroll 0% 0%;
  }
`;