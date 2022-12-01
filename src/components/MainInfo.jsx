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
    font-weight: 600;
`;

const DateJoin = styled.span`
    color: var(--date)
`;

export const MainInfo = () => {
    return (
        <Wrapper className="container row">
            <div className="col-lg-2 col-md-12">dasda</div>
            <div className="col-lg-10 col-md-12 row">
                <div className='col-lg-6 col-md-12'>
                    <Title>Global Fashion Group</Title>
                </div>
                <div className='col-lg-6 col-md-12'>
                    <DateJoin>Joined 16 Dec 2015</DateJoin>
                </div>
            </div>
        </Wrapper>
    );
};