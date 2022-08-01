import styled from 'styled-components'

export const LogoWrapper = styled.div`
    min-width: 180px;
    margin-left: 1rem;
    margin-right: auto;
    padding: 5px 15px;
    display: flex;
    flex-direction: row;
    cursor: pointer;
    @media (max-width : 620px) {
      margin-left: 0;
    }
`;

export const LogoImgWrapper = styled.div`
    margin: auto ;
    width: 25px;
`;

export const HeaderWritingoWrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    font-size: 24px;
`;
