import styled from 'styled-components';
import { IoMoonOutline, IoMoon } from "react-icons/io5";

import { Container } from '../Container';

const Title = styled.a.attrs(() => ({
    href: '/',
}))`
    color: var(--colors-text);
    font-size: var(--fs-sm);
    text-decoration: none;
    font-weight: var(--fw-bold);
`;

const ModeSwitcher = styled.div`
    color: var(--colors-text);
    font-size: 14px;
    cursor: pointer;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
`;

const HeaderEl = styled.header`
    box-shadow: 0 2px 12px 5px grey;
`;

export const Header = ({mode = 'dark', changeMode}) => {
    const capMode = mode[0].toUpperCase() + mode.slice(1);

    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Title>Where is the world?</Title>
                    <ModeSwitcher onClick={changeMode}>
                        {mode === 'light' ? (
                            <IoMoonOutline size="14px" />
                        ): (
                            <IoMoon size="14px" /> 
                        )}
                        {' '} {capMode} Mode</ModeSwitcher>
                </Wrapper>
            </Container>
        </HeaderEl>
    )
}
