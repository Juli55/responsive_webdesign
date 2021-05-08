import React from 'react';
import { useIntl, navigate } from 'gatsby-plugin-intl';
import { SectionWrapper, ContentContainer, BackgroundContainer, FlexContainer, FlexItem , DemonstrationCardFront, DemonstrationCardBack, ReadMoreButtonWrapper, PageTitle, Title, SubTitle, Number, Text, StyledCard, CardTitle, RequestDemoButton, RequestDemoInput} from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const HowItWorks = () => {
    const intl = useIntl();

    return (
        <>
            <SectionWrapper>
                <ContentContainer>
                    <Title>Are you interested ?</Title>
                    <SubTitle>Affililab is comming soon, register now for early access and bonus proviliges</SubTitle>
                    <FlexContainer>
                        <FlexItem><RequestDemoInput type="email" placeholder={'john@doe.com'}/></FlexItem>
                        <FlexItem><RequestDemoButton>register</RequestDemoButton></FlexItem>
                    </FlexContainer>
                </ContentContainer>
            </SectionWrapper>
        </>
    );
};

export default HowItWorks;
