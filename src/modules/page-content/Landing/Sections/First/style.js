import styled from 'styled-components';
import Container from '../../../../components/Container'
import Card from '../../../../components/Card'
import image from '../../../../../images/background.svg'
import infographic from '../../../../../images/infographic.svg'

export const SectionWrapper = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    background-color: #e3f2fd;
`;

export const ContentContainer = styled(Container)`
`;

export const BackgroundContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 0;
    width: 70%;
    height: 100%;
    background-image: url(${image});
    background-repeat: no-repeat;
    background-size: 100% 100%;
`;

export const FlexContainer = styled.div`
    display: flex;
    width: 100%;
    z-index: 1;
    justify-content: flex-start;
    padding-left: 12rem;
`;

export const FlexItem = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

export const DemonstrationCardFront = styled(Card)`
    width: 512px;
    position: absolute;
    left: calc(50% - 150px);
    z-index: 1;
    background-image: url(${infographic});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    border-radius: 0 194px 0;
    opacity: .9;
`;

export const DemonstrationCardBack = styled(Card)`
    width: 300px;
    position: absolute;
    z-index: 0;
    top: calc(50% - 100px);
    left: calc(50%);
`;

export const ReadMoreButtonWrapper = styled.div`
    margin-top: 2rem;
`;

export const PageTitle = styled.h2`
    margin: 0;
    font-size: 1.2rem;
`;

export const Title = styled.h1`
    margin: 0;
    font-size: 2rem;
    max-width: 30%;
    margin-top: 2rem;
`;

export const SubTitle = styled.h3`
    font-size: 1.2rem;
    max-width: 30%;
    font-weight: 400;
`;