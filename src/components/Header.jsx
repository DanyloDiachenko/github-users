import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as MoonIcon } from '../icons/icon-moon.svg';
import { ReactComponent as SunIcon } from '../icons/icon-sun.svg';

const Wrapper = styled.header`
    max-width: 725px;
    margin: 40px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const ThemeSwitcher = styled.span`
    display: flex;
    align-items: center;
    cursor: pointer;
    color: var(--switcher-color);

    &:hover {
        color: var(--switcher-color-hover);
    };

    &:hover > i {
        fill: var(--switcher-color-hover);
    };
`;

const ThemeText = styled.span`
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-size: 12px;
`;

const ThemeIcon = styled.i`
    fill: var(--switcher-color);
    margin-left: 10px;
`;

const Title = styled.h1`
    color: var(--header-color);
`;

export const Header = () => {

    const [theme, setTheme] = useState('light');
    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
        console.log(theme);
    }, [theme])

    return (
        <Wrapper>
            <Title>devfinder</Title>
            <ThemeSwitcher onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')}>
                <ThemeText>{theme == 'light' ? 'Dark' : 'Light'}</ThemeText>
                <ThemeIcon>{theme == 'light' ? <MoonIcon /> : <SunIcon />}</ThemeIcon>
            </ThemeSwitcher>
        </Wrapper>
    );
};