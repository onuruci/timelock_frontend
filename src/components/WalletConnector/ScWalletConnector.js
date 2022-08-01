import styled from 'styled-components'

export const ConnectorWrapper = styled.div`
    max-width: 280px;
    width: 220px;
    margin-top: 1rem;
    margin-left: auto;
    margin-right: 1rem;
    border: solid 2px;
    border-radius: 1.5rem;
    padding: 5px 20px;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    cursor: pointer;
    @media (max-width : 620px) {
      width: 120px;
      padding: 5px 15px;
    }
`;

export const GreenDot = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: green;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 1rem;
    @media (max-width : 620px) {
        margin-left: 0;
    }
`;

export const ConnectInfoWrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
    font-size: 16px;
    @media (max-width : 620px) {
      font-size: 12px;
    }
`;

export const MetaMaskWrapper = styled.div`
    margin: auto ;
    width: 25px;
    @media (max-width : 620px) {
        width: 20px;
    }
`;