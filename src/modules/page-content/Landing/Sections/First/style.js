import styled from 'styled-components';
import Container from '../../../../components/Container'
import Card from '../../../../components/Card'
import image from '../../../../../images/background.svg'

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
    background-size: cover;
`;

export const FlexContainer = styled.div`
    display: flex;
    width: 100%;
    z-index: 1;
    justify-content: flex-start;
`;

export const FlexItem = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

export const DemonstrationCardFront = styled(Card)`
    width: 300px;
    position: absolute;
    left: calc(50% - 200px);
    top: (50% - 150px);
    z-index: 1;
`;

export const DemonstrationCardBack = styled(Card)`
    width: 300px;
    position: absolute;
    z-index: 0;
    top: calc(50% - 100px);
    left: calc(50%);
`;

export const ReadMoreButtonWrapper = styled.div`
    margin-top: 4rem;
`;