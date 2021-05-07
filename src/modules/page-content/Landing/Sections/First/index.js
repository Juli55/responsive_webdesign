import React from 'react';
import { useIntl, navigate } from 'gatsby-plugin-intl';
import { SectionWrapper, ContentContainer, BackgroundContainer, FlexContainer, FlexItem } from './style'
const First = () => {
    const intl = useIntl();

    return (
        <>
            <SectionWrapper>
                <BackgroundContainer />
                <ContentContainer>
                    <FlexContainer>
                        <FlexItem>
                            <h1>Welcome to Affililab</h1>
                            <h2>Find your best fitting Affiliate Marketing Product</h2>
                            <p>Compare the Products you selected to advertise to get the ones with the best conditions</p>
                            <button>get to know how</button>
                        </FlexItem>
                        <FlexItem></FlexItem>
                    </FlexContainer>
                    <div style={{height: '100vh'}}></div>
                </ContentContainer>
            </SectionWrapper>
        </>
    );
};

export default First;
