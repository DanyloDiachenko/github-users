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
    max-width: 428px;
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

const Error = styled.div`
    color: red;
    font-weight: 600;
    margin-right: 10px;
`;

export const Search = (props) => {
    return (
        <form onSubmit={(e) => { e.preventDefault() }}>
            <Wrapper>
                <IconSearch />
                <Input value={props.value} onChange={props.onChange} />
                {props.error ? (
                    <Error>No results</Error>
                ) : <span style={{marginLeft: '105px'}}></span>}
                <Button type='submit' onClick={props.onClick}>Search</Button>
            </Wrapper>
        </form>
    );
};