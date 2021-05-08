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
    min-height: 100vh;
`;

export const ContentContainer = styled(Container)`
`;

export const BackgroundContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 0;
    
    height: 100%;
    background-image: url(${image});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    @media (max-width: 768px) {
      width: 100%;
      background-size: 100% 100%;
    }
`;

export const FlexContainer = styled.div`
    display: flex;
    width: 100%;
    z-index: 1;
    justify-content: flex-start;
    // padding-left: 12rem;
`;

export const FlexItem = styled.div`
    flex: 1;
    flex-grow: 1;
    flex-basis: 612px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

export const DemonstrationCardFront = styled(Card)`
    width: auto;
    z-index: 1;
    background-image: url(${infographic});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    border-radius: 0 194px 0;
    opacity: .9;
    @media (min-width: 768px) {
      width: 512px;
      position: absolute;
      left: calc(50% - 150px);
    }
`;

export const DemonstrationCardBack = styled(Card)`
    width: 100%;
    @media (min-width: 768px) {
      width: 300px;
      position: absolute;
      z-index: 0;
      top: calc(50% - 100px);
      left: calc(50%);
    }
`;

export const ReadMoreButtonWrapper = styled.div`
    margin-top: 2rem;
    display: flex;
    @media (max-width: 768px) {
      justify-content: center;
    }
`;

export const PageTitle = styled.h2`
    margin: 0;
    font-size: 1.2rem;
    @media (max-width: 768px) {
      margin-top: 2rem;
      text-align: center;
    }
`;

export const Title = styled.h1`
    margin: 0;
    font-size: 2rem;
    @media (max-width: 768px) {
      text-align: center;
    }
    @media (min-width: 768px) {
      max-width: 30%;
    }
    margin-top: 2rem;
`;

export const SubTitle = styled.h3`
    font-size: 1.2rem;
    font-weight: 400;
    @media (max-width: 768px) {
      text-align: center;
    }
    @media (min-width: 768px) {
      max-width: 30%;
    }
`;