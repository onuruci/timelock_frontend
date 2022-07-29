import styled from 'styled-components'

export const WalletGeneratorWrapper = styled.div`
    max-width: 400px;
    border: 2px solid rgb(33, 191, 150);
    border-radius: 20px;
    padding: 2rem 2rem;
    margin: 1rem auto;
    background-color: rgb(255, 255, 255);
`;

export const GenerateButtonWrapper = styled.button`
    background-color: rgb(33, 191, 150, 0.1);
    border-color: rgb(33, 191, 150);
    color: rgb(33, 191, 150);
    border: 2px solid;
    border-radius: 12px;
    padding: 0.5rem 1rem;
    position: relative;
    margin-left: auto;
    &:hover {
        background-color: rgb(255, 255, 255);
    }
`;