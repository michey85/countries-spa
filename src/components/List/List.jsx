import styled from 'styled-components';

const Wrapper = styled.section`
    width: 100%;
    padding: 1.5rem 0;

    display: grid;
    grid-template-column: repeat(1, 1fr);

    gap: 1.5rem;

    @media(min-width:767px) {
        grid-template-column: repeat(2, 1fr);
        gap: 2rem;
    }
    
    @media(min-width: 1024px) {
        grid-template-column: repeat(4, 1fr);
    }
`;

export const List = ({children}) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}
