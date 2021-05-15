import styled from 'styled-components';
import Container from '../../../../components/Container'
import image from '../../../../../images/background.svg'
import infographic from '../../../../../images/infographic.svg'
import Card from '../../../../components/Card'

export const SectionWrapper = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    background-color: #e3f2fd;
    min-height: 100vh;
    margin-top: 4rem;
`;

export const ContentContainer = styled(Container)`
  flex-direction: column;
  justify-content: center;
`;

export const FlexContainer = styled.div`
    display: flex;
    width: 100%;
    z-index: 1;
    justify-content: center;
    padding: 0rem;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 4rem;
    flex-direction: ${(props) => props.reverse ? 'row-reverse' : 'row'};
    @media (max-width: 1024px) {
      gap: 4rem;
    }
`;

export const FlexItem = styled.div`
   flex: 1;
   flex-grow: 1;
   flex-basis: 446px;
   display: flex;
   justify-content: center;
   position: relative;
`;

export const Title = styled.h3`
    margin: 0;
    font-size: 4rem;
    margin-top: 2rem;
    text-align: center;
    color: #424242;
    @media (max-width: 768px) {
      font-size: 2.5rem; 
  }
`;

export const SubTitle = styled.h4`
    font-size: 1.2rem;
    font-weight: 400;
    text-align: center;
`;

export const Number = styled.h5`
  margin: 0;
  padding: 0;
  color: rgba(163, 247, 191, .6);
  font-size: 16rem;
  @media (max-width: 1024px) {
    position: absolute;
    right: ${(props) => props.reverse ? '0' : 'auto'};
    left: ${(props) => props.reverse ? 'auto' : '0'};
    top: -7rem;
    font-size: 12rem;
  }
`;

export const Text = styled.p`
  margin-top: 2rem;
  font-size: 1rem;
  text-align: left;
`;

export const StyledCard = styled(Card)`
  display: flex;
  justify-content: center;
  height: auto;
  width: 100%;
  flex-direction: column;
  border-radius: 98px 0;
  padding: 4rem;
`;

export const CardTitle = styled.h4`
  margin: 0;
  font-size: 2rem;
`;