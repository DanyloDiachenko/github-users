import styled from 'styled-components';
import { ReactComponent as IconLocation } from '../icons/icon-location.svg';
import { ReactComponent as IconTwitter } from '../icons/icon-twitter.svg';
import { ReactComponent as IconCompany } from '../icons/icon-company.svg';
import { ReactComponent as IconWebsite } from '../icons/icon-website.svg';

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
    margin-bottom: 30px;

    @media(max-width: 991px) {
        margin-bottom: 0;
    };
`;

const DateJoin = styled.span`
    color: var(--date);
    display: flex;
    justify-content: end;

    @media(max-width: 991px) {
        justify-content: start;
        padding-left: 10px;
    };
`;

const Tag = styled.div`
    color: var(--main-color);
    font-weight: 600;
`;

const WrapperMainInfo = styled.div`
    margin-left: 100px;

    @media(max-width: 991px) {
        margin-left: 0;
    };
`;

const IsDescription = styled.div`

`;
const NoDescription = styled.p`
    margin-top: 50px;
    color: var(--bio-color);
    opacity: 0.75;
    font-size: 17px;
`;

const MainInfoContainer = styled.div`
    padding: 15px 22px;
    background-color: var(--stat-bg);
    border-radius: 10px;
    margin: 25px 0 20px 1px;
    max-width: 560px;
`;

const KeyInfo = styled.div`
    color: var(--gray-200);
    font-size: 12px;
`;

const ValueInfo = styled.div`
    font-size: 22px;
    font-weight: 600;
    color:  var(--value-color);
    margin-top: 5px;
`;

const InfoItem = styled.span`
    display: flex;
    margin-top: 15px;
`;

export const MainInfo = (props) => {
    return (
        <Wrapper className="container row">
            <div className="col-2"><img style={{borderRadius: '50%'}} src={props.avatar_url} alt="user-icon" /> logo</div>
            <div className="col-10 row p-0">
                <div className='col-lg-7 col-md-12'>
                    <Title>{props.name}</Title>
                    <Tag>@{props.login}</Tag>
                </div>
                <div className='col-lg-5 col-md-12 p-0'>
                    <DateJoin><span>{props.created_at}</span></DateJoin>
                </div>
            </div>
            <WrapperMainInfo>
                <div className='col-12'><NoDescription>This profile has no bio</NoDescription></div>
                <div className='col-12'>
                    <MainInfoContainer className='row'>
                        <div className='col-4'>
                            <KeyInfo>Repos</KeyInfo>
                            <ValueInfo>{props.public_repos}</ValueInfo>
                        </div>
                        <div className='col-4'>
                            <KeyInfo>Following</KeyInfo>
                            <ValueInfo>{props.following}</ValueInfo>
                        </div>
                        <div className='col-4'>
                            <KeyInfo>Followers</KeyInfo>
                            <ValueInfo>{props.followers}</ValueInfo>
                        </div>
                    </MainInfoContainer>
                </div>
                <div className='col-12 row'>
                    <div className='col-lg-5 col-sm-12'>
                        <InfoItem>
                            <IconLocation />
                        </InfoItem>
                        <InfoItem>
                            <IconWebsite />
                        </InfoItem>
                    </div>
                    <div className='col-lg-5 col-sm-12'>
                        <InfoItem>
                            <IconTwitter />
                        </InfoItem>
                        <InfoItem>
                            <IconCompany />
                        </InfoItem>
                    </div>
                </div>
            </WrapperMainInfo>
        </Wrapper>
    );
};