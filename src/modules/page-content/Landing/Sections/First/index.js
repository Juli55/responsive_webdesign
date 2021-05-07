import React from 'react';
import { useIntl, navigate } from 'gatsby-plugin-intl';
import { SectionWrapper, ContentContainer, BackgroundContainer, FlexContainer, FlexItem , DemonstrationCardFront, DemonstrationCardBack, ReadMoreButtonWrapper } from './style'
import { Button } from '../../../../components/Button'

const First = () => {
    const intl = useIntl();

    return (
        <>
            <SectionWrapper>
                <BackgroundContainer />
                <ContentContainer>
                    <DemonstrationCardFront>
                        Demonstration of Comparing Affiliate Marketing Products
                    </DemonstrationCardFront>
                    <DemonstrationCardBack>
                        Demonstration of Comparing Affiliate Marketing Products
                    </DemonstrationCardBack>
                    <FlexContainer>
                        <FlexItem>
                            <h1>Welcome to Affililab</h1>
                            <h2>Find your best fitting Affiliate Marketing Product</h2>
                            <p>Compare the Products you selected to advertise to get the ones with the best conditions</p>
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
