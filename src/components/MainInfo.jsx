import styled from 'styled-components';

const Wrapper = styled.div`
    max-width: 725px;
    width: 100%;
    border: 2px solid red;
    margin: 20px auto;
    border-radius: var(--border-rad);
    box-shadow: var(--shadow);
    background-color: var(--search-bg);
    padding: 30px;
`;

const Title = styled.h1`
    color: var(--header-color);
    font-size: 24px;
    font-family: var
`;

export const MainInfo = () => {
    return (
        <Wrapper className="container row">
            <div className="col-lg-3 col-md-12">dasda</div>
            <div className="col-lg-9 col-md-12 d-flex justify-content-between">
                <Title>Global Fashion Group</Title>
                <div>dasdad</div>
            </div>
        </Wrapper>
    );
};