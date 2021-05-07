import React from 'react';
import { useIntl, navigate } from 'gatsby-plugin-intl';
import { SectionWrapper, ContentContainer, BackgroundContainer, FlexContainer, FlexItem , DemonstrationCardFront, DemonstrationCardBack, ReadMoreButtonWrapper, PageTitle, Title, SubTitle } from './style'
import { Button } from '../../../../components/Button'

const First = () => {
    const intl = useIntl();

    return (
        <>
            <SectionWrapper>
                <BackgroundContainer />
                <ContentContainer>
                    <DemonstrationCardFront>
                    </DemonstrationCardFront>
                    <FlexContainer>
                        <FlexItem>
                            <PageTitle>Welcome to Affililab</PageTitle>
                            <Title>Find your best fitting Affiliate Marketing Product</Title>
                            <SubTitle>Compare the Products you selected to advertise to get the ones with the best conditions</SubTitle>
                            <ReadMoreButtonWrapper>
                                <Button>read more</Button>
                            </ReadMoreButtonWrapper>
                        </FlexItem>
                    </FlexContainer>
                    <div style={{height: '100vh'}}></div>
                </ContentContainer>
            </SectionWrapper>
        </>
    );
};

export default First;
