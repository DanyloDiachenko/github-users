import styled from 'styled-components';

const Wrapper = styled.div`
    max-width: 725px;
    width: 100%;
    border: 2px solid red;
    margin: 20px auto;
    border-radius: var(--border-rad);
    box-shadow: var(--shadow);
    background-color: var(--search-bg);
    padding: 20px;
`;

const Title = styled.h1`
    color: var(--header-color);
    font-size: 24px;
    font-weight: 600;
`;

const DateJoin = styled.span`
    color: var(--date);
    display: flex;
    justify-content: end;
`;

const Tag = styled.div`
    color: var(--main-color);
    font-weight: 600;
`;

export const MainInfo = () => {
    return (
        <Wrapper className="container row">
            <div className="col-2">logophoto</div>
            <div className="col-10 row p-0">
                <div className='col-lg-7 col-md-12'>
                    <Title>Global Fashion Group</Title>
                </div>
                <div className='col-lg-5 col-md-12 p-0'>
                    <DateJoin><span>Joined 16 Dec 2015</span></DateJoin>
                </div>
                <div className='col-12'><Tag>@dsadasd</Tag></div>
            </div>
        </Wrapper>
    );
};