import styled from 'styled-components';
import Container from '../../../../components/Container'
import image from '../../../../../images/background.svg'

export const SectionWrapper = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
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
`;

export const FlexContainer = styled.div`
    display: flex;
    width: 100%;
    z-index: 1;
    justify-content: flex-start;
`;

export const FlexItem = styled.div`
    flex: 1
`;