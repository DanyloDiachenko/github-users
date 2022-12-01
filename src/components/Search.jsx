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

const InputButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
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

    @media(max-width: 767px) {
        margin-left: 15px;
    };
    @media(max-width: 550px) {
        font-size: 16px;
    };
    @media(max-width: 450px) {
        font-size: 12px;
    };
`;

const Button = styled.button`
    border: none; 
    background-color: var(--main-color);
    border-radius: 10px;
    padding: 15px 25px;
    color: var(--white);
    cursor: pointer;
    font-size: 16px;

    @media(max-width: 450px) {
        padding: 10px 10px;
    };

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
                <InputButtonWrapper>
                    <Input value={props.value} onChange={props.onChange} />
                    {props.error ? (
                        <Error>No results</Error>
                    ) : ''}
                    <Button type='submit' onClick={props.onClick}>Search</Button>
                </InputButtonWrapper>
            </Wrapper>
        </form>
    );
};