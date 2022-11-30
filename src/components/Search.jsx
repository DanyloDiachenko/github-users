import styled from 'styled-components';
import { ReactComponent as IconSearch } from '../icons/icon-search.svg';

const Wrapper = styled.div`
    max-width: 690px;
    width: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: var(--border-rad);
    box-shadow: var(--shadow);
    background-color: var(--search-bg)
`;

export const Search = () => {
    return (
        <Wrapper>
            <IconSearch />
        </Wrapper>
    );
};