import styled from 'styled-components'

export const MapperWrapper = styled.div`
    padding: 2rem 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    @media (max-width : 1200px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media (max-width : 930px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width : 670px) {
        grid-template-columns: 1fr;
    }
`;
