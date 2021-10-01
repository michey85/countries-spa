import { useState, useEffect } from 'react';
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

export const Header = () => {
    const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);
    const capMode = theme[0].toUpperCase() + theme.slice(1);

    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Title>Where is the world?</Title>
                    <ModeSwitcher onClick={toggleTheme}>
                        {theme === 'light' ? (
                            <IoMoonOutline size="14px" />
                        ): (
                            <IoMoon size="14px" /> 
                        )}
                        <span
                            style={{marginLeft: '0.75rem'}}
                        >
                            {capMode} Mode
                        </span>
                    </ModeSwitcher>
                </Wrapper>
            </Container>
        </HeaderEl>
    )
}
