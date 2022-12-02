import styled from 'styled-components';
import { ReactComponent as IconLocation } from '../icons/icon-location.svg';
import { ReactComponent as IconTwitter } from '../icons/icon-twitter.svg';
import { ReactComponent as IconCompany } from '../icons/icon-company.svg';
import { ReactComponent as IconWebsite } from '../icons/icon-website.svg';

const Wrapper = styled.div`
    max-width: 725px;
    width: 100%;
    margin: 20px auto;
    border-radius: var(--border-rad);
    box-shadow: var(--shadow);
    background-color: var(--search-bg);
    padding: 20px;

    @media(max-width: 991px) {
        padding: 10px 0;
    };
`;

const Image = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;

    @media(max-width: 530px) {
        width: 50px;
        height: 50px;
    }
`;

const Title = styled.h1`
    color: var(--header-color);
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 30px;

    @media(max-width: 991px) {
        margin-bottom: 0;
    };

    @media(max-width: 767px) {
        font-size: 18px;
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

    @media(max-width: 767px) {
        font-size: 13px;
    };
`;

const Tag = styled.a`
    color: var(--main-color);
    font-weight: 600;
    text-decoration: none;

    &:hover {
        color: var(--main-color-hover);
    };

    @media(max-width: 767px) {
        font-size: 13px;
    };
`;

const WrapperMainInfo = styled.div`
    margin-left: 100px;

    @media(max-width: 991px) {
        margin-left: 0;
    };
`;

const IsDescription = styled.div`
    font-size: 17px;
    margin-top: 50px;
    color: var(--description-color);
`;
const NoDescription = styled.p`
    margin-top: 50px;
    color: var(--bio-color);
    opacity: 0.75;
    font-size: 17px;

    @media(max-width: 767px) {
        font-size: 15px;
    };
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

const InfoItemTrue = styled.span`
    display: flex;
    align-items: center;
    margin-top: 15px;
    color: var(--info-color);
    font-size: 13px;
    
    & > svg {
        width: 20px;
        height: 20px;
        fill: var(--info-color);
        margin-right: 20px;
    };

`;
const InfoItemFalse = styled.span`
    display: flex;
    align-items: center;
    margin-top: 15px;
    color: var(--info-color);
    opacity: 0.75;
    font-size: 13px;

    & > svg {
        width: 20px;
        height: 20px;
        fill: var(--info-color);
        opacity: 0.75;
        margin-right: 20px;
    };
`;

export const MainInfo = (props) => {
    return (
        <Wrapper className="container row">
            <div className="col-2"><Image src={props.avatar_url} alt="user-icon" /></div>
            <div className="col-10 row">
                <div className='col-lg-7 col-md-12'>
                    <Title>{props.name ? props.name : props.login}</Title>
                    <Tag href={props.html_url}>@{props.login}</Tag>
                </div>
                <div className='col-lg-5 col-md-12 p-0'>
                    <DateJoin><span>Joined {props.day} {props.month} {props.year}</span></DateJoin>
                </div>
            </div>
            <WrapperMainInfo>
                <div className='col-12'>{!props.bio ? (
                    <NoDescription>This profile has no bio</NoDescription>
                ) : <IsDescription>{props.bio}</IsDescription>}</div>
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
                    <div className='col-lg-6 col-sm-12'>
                        {props.location ? (
                            <InfoItemTrue>
                                <IconLocation />{props.location}
                            </InfoItemTrue>
                        ) : (
                            <InfoItemFalse>
                                <IconLocation />Not Available
                            </InfoItemFalse>
                        )}
                        {props.blog ? (
                            <InfoItemTrue>
                                <IconWebsite />{props.blog}
                            </InfoItemTrue>
                        ) : (
                            <InfoItemFalse>
                                <IconWebsite />Not Available
                            </InfoItemFalse>
                        )}
                    </div>
                    <div className='col-lg-6 col-sm-12'>
                        {props.twitter_username ? (
                            <InfoItemTrue>
                                <IconTwitter />{props.twitter_username}
                            </InfoItemTrue>
                        ) : (
                            <InfoItemFalse>
                                <IconTwitter />Not Available
                            </InfoItemFalse>
                        )}
                        {props.company ? (
                            <InfoItemTrue>
                                <IconCompany />{props.company}
                            </InfoItemTrue>
                        ) : (
                            <InfoItemFalse>
                                <IconCompany />Not Available
                            </InfoItemFalse>
                        )}
                    </div>
                </div>
            </WrapperMainInfo>
        </Wrapper>
    );
};