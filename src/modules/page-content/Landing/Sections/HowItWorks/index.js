import React from 'react';
import { useIntl, navigate } from 'gatsby-plugin-intl';
import { SectionWrapper, ContentContainer, BackgroundContainer, FlexContainer, FlexItem , DemonstrationCardFront, DemonstrationCardBack, ReadMoreButtonWrapper, PageTitle, Title, SubTitle, Number, Text, StyledCard, CardTitle} from './style'
import { Button } from '../../../../components/Button'

const HowItWorks = () => {
    const intl = useIntl();

    return (
        <>
            <SectionWrapper>
                <ContentContainer>
                    <Title>How it Works ?</Title>
                    <SubTitle>Get to know which steps are needed to find the best fitting Affiliate Marketing Product / Service</SubTitle>
                    <FlexContainer>
                        <FlexItem><Number>1</Number></FlexItem>
                        <FlexItem>
                            <StyledCard>
                                <CardTitle>Title</CardTitle>
                                <Text>define your experience level in Affiliate Marketing</Text>
                            </StyledCard>
                        </FlexItem>
                    </FlexContainer>
                    <FlexContainer reverse>
                        <FlexItem justifyContent={'flex-end'}><Number reverse>2</Number></FlexItem>
                        <FlexItem>
                            <StyledCard>
                                <CardTitle>Title</CardTitle>
                                <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</Text>
                            </StyledCard>
                        </FlexItem>
                    </FlexContainer>
                    <FlexContainer>
                        <FlexItem><Number>3</Number></FlexItem>
                        <FlexItem>
                            <StyledCard>
                                <CardTitle>Title</CardTitle>
                                <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</Text>
                            </StyledCard>
                        </FlexItem>
                    </FlexContainer>
                    <FlexContainer reverse>
                        <FlexItem justifyContent={'flex-end'}><Number reverse>4</Number></FlexItem>
                        <FlexItem>
                            <StyledCard>
                                <CardTitle>Title</CardTitle>
                                <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</Text>
                            </StyledCard>
                        </FlexItem>
                    </FlexContainer>
                </ContentContainer>
            </SectionWrapper>
        </>
    );
};

export default HowItWorks;
