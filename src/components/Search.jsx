import styled from 'styled-components';
import { ReactComponent as IconSearch } from '../icons/icon-search.svg';

const Wrapper = styled.div`
    max-width: 725px;
    width: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    padding: 15px;
    border-radius: var(--border-rad);
    box-shadow: var(--shadow);
    background-color: var(--search-bg);
`;

const Input = styled.input.attrs({
    placeholder: 'Search GitHub username...'
})`
    border: none;
    outline: none;
    max-width: 545px;
    width: 100%;
    font-size: 20px;
    color: var(--gray-200);
    margin-left: 25px;
    color: var(--search-color);
    background: initial;
`;

const Button = styled.button`
    border: none; 
    background-color: var(--main-color);
    border-radius: 10px;
    padding: 15px 25px;
    color: var(--white);
    cursor: pointer;
    font-size: 16px;

    &:hover {
        background-color: var(--main-color-hover);
    };
`;

export const Search = () => {
    return (
        <Wrapper>
            <IconSearch />
            <Input />
            <Button>Search</Button>
        </Wrapper>
    );
};