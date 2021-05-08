import React from 'react';
import { useIntl, navigate } from 'gatsby-plugin-intl';
import { SectionWrapper, ContentContainer, BackgroundContainer, FlexContainer, FlexItem , DemonstrationCardFront, DemonstrationCardBack, ReadMoreButtonWrapper, PageTitle, Title, SubTitle, Number, Text, StyledCard, CardTitle} from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const HowItWorks = () => {
    const intl = useIntl();

    return (
        <>
            <SectionWrapper>
                <ContentContainer>
                    <Title>What are your advantages ?</Title>
                    <SubTitle>When you use Affililab you find the best fitting affiliate products to promote</SubTitle>
                    <StyledCard>
                        <CardTitle>Your advantages to use Affililab</CardTitle>
                        <FlexContainer>
                            <FlexItem><FontAwesomeIcon icon={faCheck} color={'green'} /></FlexItem>
                            <FlexItem>Find the best Product / Service</FlexItem>
                        </FlexContainer>
                        <FlexContainer>
                            <FlexItem><FontAwesomeIcon icon={faCheck} color={'green'} /></FlexItem>
                            <FlexItem>Find the best Product / Service</FlexItem>
                        </FlexContainer>
                        <FlexContainer>
                            <FlexItem><FontAwesomeIcon icon={faCheck} color={'green'} /></FlexItem>
                            <FlexItem>Find the best Product / Service</FlexItem>
                        </FlexContainer>
                        <FlexContainer>
                            <FlexItem><FontAwesomeIcon icon={faCheck} color={'green'} /></FlexItem>
                            <FlexItem>Find the best Product / Service</FlexItem>
                        </FlexContainer>
                        <FlexContainer>
                            <FlexItem><FontAwesomeIcon icon={faCheck} color={'green'} /></FlexItem>
                            <FlexItem>Find the best Product / Service</FlexItem>
                        </FlexContainer>
                    </StyledCard>
                </ContentContainer>
            </SectionWrapper>
        </>
    );
};

export default HowItWorks;
